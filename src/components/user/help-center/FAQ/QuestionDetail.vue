<template>
<div class="content-wrapper">
    <div class="container">
        <div class="row mt-4">
            <div class="col-md-12">
                <div class="card card-widget">
                    <div v-for="question in questions" :key="question.id">

                    <div class="card-header">
                        <div class="user-block">
                            <img class="img-circle" :src="question.path" >
                            <span class="username"><a href="#">{{question.user.name}}</a></span>
                            <span class="description">Posted - {{question.created_at | cutString}}</span>
                        </div>
                        <!-- /.user-block -->
                        <div class="card-tools">
                            <router-link to="/faq" class="btn btn-outline-secondary">Back to all Questions</router-link>
                        </div>
                        <!-- /.card-tools -->
                    </div>
                <!-- /.card-header -->
                <div class="card-body">
                    <p>{{question.body}}</p>
                    <a @click="funcLike(question.id)">
                        <button v-if="question.status === 1" class="btn btn-danger btn-sm">
                            <font-awesome-icon style="cursor: pointer" :icon="['fa', 'thumbs-up']" /> Liked
                        </button>
                        <button v-else class="btn btn-default btn-sm">
                            <font-awesome-icon style="cursor: pointer" :icon="['fa', 'thumbs-up']" /> Likes
                        </button>
                    </a>
                    
                    <span class="float-right text-muted">{{question.likes}} likes - {{question.answer.length}} comments</span>
                </div>
                    </div>

                <!-- /.card-body -->
                <div class="card-footer card-comments">
                    <div class="card-comment" v-for="answer in answers" :key="answer.data.id">
                    <!-- User image -->
                    <img class="img-circle img-sm" :src="answer.media" >

                    <div class="comment-text">
                        <span class="username">
                        {{answer.data.user.name}}
                        <span class="text-muted float-right">{{answer.data.created_at | cutString}}</span>
                        </span><!-- /.username -->
                        {{answer.data.body}}
                    </div>
                    <p>
                       <a @click="LikeAnswer(answer.data.id)">
                        <button v-if="answer.likes > 0" class="btn btn-danger btn-sm mt-3">
                            <font-awesome-icon style="cursor: pointer" :icon="['fa', 'thumbs-up']" /> Liked
                        </button>
                        <button v-else class="btn btn-default btn-sm mt-3">
                            <font-awesome-icon style="cursor: pointer" :icon="['fa', 'thumbs-up']" /> Like
                        </button>
                        </a> 
                        <!-- <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Input Answer" aria-label="Recipient's username" aria-describedby="button-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
                            </div>
                            </div>    -->
                    </p>
                    <!-- /.comment-text -->
                    
                    </div>
                    <!-- /.card-comment -->

                </div>
                <!-- /.card-footer -->
                <div class="card-footer">
                    <form @submit.prevent="submit">
                        <div class="form-group">
                            <label for="question-body">Answer the Question</label>
                            <textarea v-model="body" class="form-control"></textarea>
                        </div>
                        <div class="form-group text-center">
                            <button type="submit" class="btn btn-outline-primary btn-lg">Submit</button>
                        </div>
                    </form>
                </div>
                <!-- /.card-footer -->
                </div>
            </div>
        </div>
    </div>
    
</div>
   
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
export default {

    data() {
        return {
            question_id : this.$route.params.question_id,
            questions: '',
            answers:'',
            date:'',
            body:''
        }
    },

    mounted() {
        this.getComment(),
        this.getAnswer()
    },

    methods: {
        submit() {
            
            Swal.fire({
                title:'Are you sure ?',
                imageUrl: "https://lh3.googleusercontent.com/-L0L0yfE5VpA/XpfifMdyIXI/AAAAAAAABFU/ZrtQpPoKXHsAj0kgc70Gn8IwWsybi0nbACK8BGAsYHg/s0/2020-04-15.png",
                imageWidth: 150,
                imageHeight: 60,
                showCancelButton:true,
                confirmButtonText:'Yes',
                cancelButtonText:'No',
                reverseButtons:true
            })
            .then(result => {
                if(result.value){
                    axios.post('https://dev.alphabetincubator.id/rep-backend/public/api/answer/' + this.$route.params.question_id + 
                    '/store', {body:this.body})
                    .then(response => {
                        console.log(response)
                        Swal.fire({
                            position: 'center',
                            imageUrl: "https://lh3.googleusercontent.com/-L0L0yfE5VpA/XpfifMdyIXI/AAAAAAAABFU/ZrtQpPoKXHsAj0kgc70Gn8IwWsybi0nbACK8BGAsYHg/s0/2020-04-15.png",
                            imageWidth: 150,
                            imageHeight: 60,
                            icon: 'success',
                            text: 'Your result has been sended',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        this.body = ''
                        this.getAnswer()
                    })
                    .catch(error => console.log(error))
                }else if(response.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrap.fire(
                        'Cancelled',
                        'Your result is still safe',
                        'error'
                    )
                }
            })
        },
        funcLike(id) {
            axios.post('https://dev.alphabetincubator.id/rep-backend/public/api/posts/' + id + '/store', {like: 1}, {dislike:0})
                .then(response => {
                    console.log(response)
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
        LikeAnswer(id){
            axios.post('https://dev.alphabetincubator.id/rep-backend/public/api/answer/' + id + '/feedback', {like: 1}, {dislike:0})
                .then(response => {
                    console.log(response)
                    this.getAnswer()
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
        getAnswer() {
            axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/answer/' + this.$route.params.question_id + '/show')
        .then(response => {
            this.answers = response.data
            console.log('answer',this.answers)
        })
        },
        getComment() {
            axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/posts/' + this.$route.params.question_id)
        .then(response => {
            console.log(response)
            this.questions = response.data
        })
        },
    }
}
</script>


