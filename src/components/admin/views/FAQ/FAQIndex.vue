<template>
<div class="content-wrapper">
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card mt-4">
                <div class="card-header">
                    <div class="d-flex align-items-center">
                        <h2>All Questions</h2>
                        <div class="ml-auto">
                            <router-link to="/admin/createfaq" class="btn btn-outline-secondary">Ask Question</router-link>
                        </div>
                    </div>
                    
                </div>

                <div class="card-body">
                    <div v-if="questions.length">
                        <div v-for="question in questions" :question="question" :key="question.id">
                                <div class="media post mt-3">
                                <!-- <div class="d-flex flex-column counters">
                                    <div class="vote">
                                        <strong>{{ question.votes_count }}</strong> {{ str_plural('vote', question.votes_count) }}
                                    </div>                            
                                    <div :class="statusClasses">
                                        <strong>{{ question.answers_count }}</strong> {{ str_plural('answer', question.answers_count) }}
                                    </div>                            
                                    <div class="view">
                                        {{ question.views + " " + str_plural('view', question.views) }}
                                    </div>                            
                                </div> -->
                                <div class="media-body">
                                    <div class="d-flex align-items-center">
                                        <h3 class="mt-0"><router-link :to="{name: 'question-detail', params: {question_id: question.id}}">{{ question.title }}</router-link></h3>
                                    </div>
                                    <div class="post">
                                        <div class="user-block">
                                            <img :src="question.path" class="#" alt="">
                                            <span class="username">
                                            <p>{{question.user.name}}</p>
                                            <a href="#" class="float-right btn-tool"><i class="fas fa-times"></i></a>
                                            </span>
                                            <span class="description">Posted - {{question.created_at | cutString}}</span>
                                        </div>
                                        <!-- /.user-block -->
                                        <p>
                                            {{question.body}}
                                        </p>

                                        <p>
                                            <a @click="funcLike(question.id)" href="#" class="link-black text-sm">{{question.likes}}
                                                <font-awesome-icon v-if="question.status === 1" style="cursor: pointer; color:red" :icon="['fa', 'thumbs-up']" /> 
                                                <font-awesome-icon v-else style="cursor: pointer;" :icon="['fa', 'thumbs-up']" /> 
                                            </a>
                                            <span class="float-right">
                                                <router-link style ="color:black;" :to="{name: 'question-detail', params: {question_id: question.id}}">
                                                    <font-awesome-icon style="cursor: pointer" :icon="['fa', 'comments']" /> Comments({{question.answer.length}}) 
                                                </router-link>
                                            </span>
                                        </p>
                                        <hr>
                                    </div>
                                </div>                        
                            </div>
                        </div>
                    </div>
                        <div v-else class="alert alert-warning">
                            <strong>Sorry there are no questions avaliable</strong>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    components: { 
    },
    
    data () {
        return {
            questions: [],
            date:''
            
        }
    },
    mounted () {
        this.fetchQuestions();
    },
    methods: {
        fetchQuestions () {
            axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/posts',)
                 .then((response) => {
                     console.log(response)
                     this.questions = response.data
                     
                 })
        },
        funcLike(id) {
            axios.post('https://dev.alphabetincubator.id/rep-backend/public/api/posts/' + id + '/store', {like: 1}, {dislike:0})
                .then(response => {
                    console.log(response)
                    this.fetchQuestions()
                    Swal.fire({
                                position: 'center',
                                imageUrl: "https://lh3.googleusercontent.com/-L0L0yfE5VpA/XpfifMdyIXI/AAAAAAAABFU/ZrtQpPoKXHsAj0kgc70Gn8IwWsybi0nbACK8BGAsYHg/s0/2020-04-15.png",
                                imageWidth: 150,
                                imageHeight: 60,
                                text: `Liked`,
                                showConfirmButton: false,
                                timer: 1500
                            })
                })
                .catch(error => {
                    Swal.fire({
                                position: 'center',
                                imageUrl: "https://lh3.googleusercontent.com/-L0L0yfE5VpA/XpfifMdyIXI/AAAAAAAABFU/ZrtQpPoKXHsAj0kgc70Gn8IwWsybi0nbACK8BGAsYHg/s0/2020-04-15.png",
                                imageWidth: 150,
                                imageHeight: 60,
                                text: `Liked`,
                                showConfirmButton: false,
                                timer: 1500
                            })
                })
        },
        // remove (index) {
        //     this.questions.splice(index, 1)
        //     this.count--
        // }
    },
}
</script>