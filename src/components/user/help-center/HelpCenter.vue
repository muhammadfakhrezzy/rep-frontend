<script>
import axios from 'axios'
import Swal from 'sweetalert2'
const swalWithBootstrap = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success py-2 px-4',
        cancelButton : 'btn btn-danger py-2 px-4 mx-3'
    },
    buttonsStyling: false
})
export default {
    data () {
        return {
            
        }
        
    },
    methods : {
        clickedLike() {
            this.$store.dispatch('button')
        },
        clickedDislike() {
            this.$store.dispatch('tombol')
        }
    },
    computed : {
        like() {
            return this.$store.state.like
        },
        dislike(){
            return this.$store.state.dislike
        }

    }
    // created () {
    //     axios.post('https://dev.alphabetincubator.id/rep-backend/public/api/posts/{id}/feedback')
    //                     .then(response => {
    //                         this.like = response.data
    //                         console.log(this.like)
    // }
    // )
    // }
}
</script>

<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-12">
                        <h1 class="m-0 text-dark">Help Center</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
    <div class="row">
        <div class="col-lg-4">
            <div class="nav nav-pills faq-nav" id="faq-tabs" role="tablist" aria-orientation="vertical">
                <a href="#tab1" class="nav-link active" data-toggle="pill" role="tab" aria-controls="tab1" aria-selected="true">
                    <i class="mdi mdi-help-circle"></i> Frequently Asked Questions
                </a>
                <a href="#tab2" class="nav-link" data-toggle="pill" role="tab" aria-controls="tab2" aria-selected="false">
                    <i class="mdi mdi-account"></i> Profile
                </a>
                <a href="#tab3" class="nav-link" data-toggle="pill" role="tab" aria-controls="tab3" aria-selected="false">
                    <i class="mdi mdi-account-settings"></i> Quest
                </a>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="tab-content" id="faq-tab-content">
                <div class="tab-pane show active" id="tab1" role="tabpanel" aria-labelledby="tab1">
                    <div class="accordion" id="accordion-tab-1">
                        <div class="card">
                            <div class="card-header" id="accordion-tab-1-heading-1">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-1" aria-expanded="false" aria-controls="accordion-tab-1-content-1">Just once I'd like to eat dinner with a celebrity?</button>
                                </h5>
                            </div>
                            <div class="collapse show" id="accordion-tab-1-content-1" aria-labelledby="accordion-tab-1-heading-1" data-parent="#accordion-tab-1">
                                <div class="card-body">
                                    <p>Yes, if you make it look like an electrical fire. When you do things right, people won't be sure you've done anything at all. I was having the most wonderful dream. Except you were there, and you were there, and you were there! No argument here. Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords. Cruel though they may be.</p>
                                    <p><strong>Example: </strong>Shut up and get to the point!</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="accordion-tab-1-heading-2">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-2" aria-expanded="false" aria-controls="accordion-tab-1-content-2">Bender, I didn't know you liked cooking?</button>
                                </h5>
                            </div>
                            <div class="collapse" id="accordion-tab-1-content-2" aria-labelledby="accordion-tab-1-heading-2" data-parent="#accordion-tab-1">
                                <div class="card-body">
                                    <p>That's so cute. Can we have Bender Burgers again? Is the Space Pope reptilian!? I wish! It's a nickel. Bender! Ship! Stop bickering or I'm going to come back there and change your opinions manually!</p>
                                    <p><strong>Example: </strong>Okay, I like a challenge. Is that a cooking show? No argument here.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="accordion-tab-1-heading-3">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-3" aria-expanded="false" aria-controls="accordion-tab-1-content-3">My fellow Earthicans?</button>
                                </h5>
                            </div>
                            <div class="collapse" id="accordion-tab-1-content-3" aria-labelledby="accordion-tab-1-heading-3" data-parent="#accordion-tab-1">
                                <div class="card-body">
                                    <p>As I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards. Fry, you can't just sit here in the dark listening to classical music.</p>
                                    <p><strong>Example: </strong>Actually, that's still true. Well, let's just dump it in the sewer and say we delivered it.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="accordion-tab-1-heading-4">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-4" aria-expanded="false" aria-controls="accordion-tab-1-content-4">Who am I making this out to?</button>
                                </h5>
                            </div>
                            <div class="collapse" id="accordion-tab-1-content-4" aria-labelledby="accordion-tab-1-heading-4" data-parent="#accordion-tab-1">
                                <div class="card-body">
                                    <p>Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat. Also Zoidberg. Can we have Bender Burgers again? Goodbye, cruel world. Goodbye, cruel lamp. Goodbye, cruel velvet drapes, lined with what would appear to be some sort of cruel muslin and the cute little pom-pom curtain pull cords.</p>
                                    <p><strong>Example: </strong>Cruel though they may be...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="tab2" role="tabpanel" aria-labelledby="tab2">
                    <div class="accordion" id="accordion-tab-2">
                        <div class="card">
                            <div class="card-header" id="accordion-tab-2-heading-1">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-1" aria-expanded="false" aria-controls="accordion-tab-2-content-1">How do i get a point ?</button>
                                </h5>
                            </div>
                            <div class="collapse show" id="accordion-tab-2-content-1" aria-labelledby="accordion-tab-2-heading-1" data-parent="#accordion-tab-2">
                                <div class="card-body">
                                    <p>you get a point when you completed a quest</p>
                                    <p><strong>Example: </strong>Submit a quest</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="accordion-tab-2-heading-2">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-2" aria-expanded="false" aria-controls="accordion-tab-2-content-2">Can i change my profile picture ?</button>
                                </h5>
                            </div>
                            <div class="collapse" id="accordion-tab-2-content-2" aria-labelledby="accordion-tab-2-heading-2" data-parent="#accordion-tab-2">
                                <div class="card-body">
                                    <p>Yes, just go to the google settings in your google account and change it from there</p>
                                    <p><strong>Example: </strong></p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="accordion-tab-2-heading-3">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-2-content-3" aria-expanded="false" aria-controls="accordion-tab-2-content-3">How do i level up ?</button>
                                </h5>
                            </div>
                            <div class="collapse" id="accordion-tab-2-content-3" aria-labelledby="accordion-tab-2-heading-3" data-parent="#accordion-tab-2">
                                <div class="card-body">
                                    <p>When you completed a quest , you'll get a certain amount of points. you have to collect a points to level up</p>
                                    <p><strong>Example: </strong>You need 10 points to level up. so you collect the points by completed a quest.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="tab3" role="tabpanel" aria-labelledby="tab3">
                    <div class="accordion" id="accordion-tab-3">
                        <div class="card">
                            <div class="card-header" id="accordion-tab-3-heading-1">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-3-content-1" aria-expanded="false" aria-controls="accordion-tab-3-content-1">Michelle, I don't regret this, but I both rue and lament it?</button>
                                </h5>
                            </div>
                            <div class="collapse show" id="accordion-tab-3-content-1" aria-labelledby="accordion-tab-3-heading-1" data-parent="#accordion-tab-3">
                                <div class="card-body">
                                    <p>Look, last night was a mistake. We'll need to have a look inside you with this camera. Good news, everyone! There's a report on TV with some very bad news! You know, I was God once. You lived before you met me?!</p>
                                    <p><strong>Example: </strong>I'm Santa Claus! Pansy. That's a popular name today. Little "e", big "B"?</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="accordion-tab-3-heading-2">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-3-content-2" aria-expanded="false" aria-controls="accordion-tab-3-content-2">Why am I sticky and naked?</button>
                                </h5>
                            </div>
                            <div class="collapse" id="accordion-tab-3-content-2" aria-labelledby="accordion-tab-3-heading-2" data-parent="#accordion-tab-3">
                                <div class="card-body">
                                    <p>Did I miss something fun? Humans dating robots is sick. You people wonder why I'm still single? It's 'cause all the fine robot sisters are dating humans! Kids don't turn rotten just from watching TV.</p>
                                    <p><strong>Example: </strong>I usually try to keep my sadness pent up inside where it can fester quietly as a mental illness.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="accordion-tab-3-heading-3">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-3-content-3" aria-expanded="false" aria-controls="accordion-tab-3-content-3">Is that a cooking show?</button>
                                </h5>
                            </div>
                            <div class="collapse" id="accordion-tab-3-content-3" aria-labelledby="accordion-tab-3-heading-3" data-parent="#accordion-tab-3">
                                <div class="card-body">
                                    <p>OK, this has gotta stop. I'm going to remind Fry of his humanity the way only a woman can. You seem malnourished. Are you suffering from intestinal parasites? Check it out, y'all. Everyone who was invited is here. I am Singing Wind, Chief of the Martians.</p>
                                    <p><strong>Example: </strong>Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor.</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="accordion-tab-3-heading-4">
                                <h5>
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#accordion-tab-3-content-4" aria-expanded="false" aria-controls="accordion-tab-3-content-4">You are the last hope of the universe?</button>
                                </h5>
                            </div>
                            <div class="collapse" id="accordion-tab-3-content-4" aria-labelledby="accordion-tab-3-heading-4" data-parent="#accordion-tab-3">
                                <div class="card-body">
                                    <p>I don't want to be rescued. I videotape every customer that comes in here, so that I may blackmail them later. Ah, computer dating. It's like pimping, but you rarely have to use the phrase "upside your head."</p>
                                    <p><strong>Example: </strong>Tell them I hate them.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                        </div>
                    </div>
                </div>
            <hr>
            <div class="row">
                <div class="col">
                    <div class="wrapper text-center">
                        <p>Was this Questions useful ?</p>
                        <div class="col text-center">
                            <p v-if="!like" class="d-inline">
                                 <font-awesome-icon :icon="['fa', 'thumbs-up']" />
                                <a href="#" @click="clickedLike()" class="link-black text-sm mr-3 ml-2" >Like
                                    </a>
                            </p>
                            <p v-else class="d-inline">
                                 <font-awesome-icon :icon="['fa', 'thumbs-up']" />
                                <a href="#" class="text-sm mr-3 ml-2" style="color:red;" >Liked
                                    </a>
                            </p>
                            <p v-if="!dislike" class="d-inline">
                                <a href="#" @click="clickedDislike()" class="link-black text-sm ml-3 mr-2" >Dislike
                                    </a>
                                <font-awesome-icon :icon="['fa', 'thumbs-down']" />
                            </p>
                            <p v-else class="d-inline">
                                <a href="#" class="text-sm ml-3 mr-2" style="color:red;" >Dislike
                                    </a>
                                <font-awesome-icon :icon="['fa', 'thumbs-down']" />
                        </p>
                        </div> 
                    </div>
                </div>
            </div>
            <hr>
            <div class="hubungi-kami-section">
                    <div class="row">
                         <div class="col-md-10 mb-4 hc-menanyakan-lain" style="margin:auto;">
                              <div class="image-help-break" style="height:22px;"></div>
                                <font-awesome-icon icon="question-circle" class="nav-icon" />

                              <span class="content-heading-span ml-3">Ingin menanyakan hal lain?</span>
                         </div>
                         <div class="col-md-2 mb-4 mt-4" style="margin:auto;">
                              <router-link to ="/contactUs" class="btn btn-block bg-teal" style="margin:auto;">Hubungi kami</router-link>
                         </div>
                         <div class="col text-center">
                             <p>See if your Questions has been asnwered or not</p>
                             <router-link to="/Answered" class="text-center">Click here</router-link>
                         </div>
                    </div>
               </div>
            </div>

                </div>




       
</template>

<style scoped>
body {
	 margin-top: 30px;
	 background-color: #eee;
}
 .faq-nav {
	 flex-direction: column;
	 margin: 0 0 32px;
	 border-radius: 2px;
	 border: 1px solid #ddd;
	 box-shadow: 0 1px 5px rgba(85, 85, 85, 0.15);
}
 .faq-nav .nav-link {
	 position: relative;
	 display: block;
	 margin: 0;
	 padding: 13px 16px;
	 background-color: #fff;
	 border: 0;
	 border-bottom: 1px solid #ddd;
	 border-radius: 0;
	 color: #616161;
	 transition: background-color 0.2s ease;
}
 .faq-nav .nav-link:hover {
	 background-color: #f6f6f6;
}
 .faq-nav .nav-link.active {
	 background-color: #f6f6f6;
	 font-weight: 700;
	 color: rgba(0, 0, 0, 0.87);
}
 .faq-nav .nav-link:last-of-type {
	 border-bottom-left-radius: 2px;
	 border-bottom-right-radius: 2px;
	 border-bottom: 0;
}
 .faq-nav .nav-link i.mdi {
	 margin-right: 5px;
	 font-size: 18px;
	 position: relative;
}
 .tab-content {
	 box-shadow: 0 1px 5px rgba(85, 85, 85, 0.15);
}
 .tab-content .card {
	 border-radius: 0;
}
 .tab-content .card-header {
	 padding: 15px 16px;
	 border-radius: 0;
	 background-color: #f6f6f6;
}
 .tab-content .card-header h5 {
	 margin: 0;
}
 .tab-content .card-header h5 button {
	 display: block;
	 width: 100%;
	 padding: 0;
	 border: 0;
	 font-weight: 700;
	 color: rgba(0, 0, 0, 0.87);
	 text-align: left;
	 white-space: normal;
}
 .tab-content .card-header h5 button:hover, .tab-content .card-header h5 button:focus, .tab-content .card-header h5 button:active, .tab-content .card-header h5 button:hover:active {
	 text-decoration: none;
}
 .tab-content .card-body p {
	 color: #616161;
}
 .tab-content .card-body p:last-of-type {
	 margin: 0;
}
 .accordion > .card:not(:first-child) {
	 border-top: 0;
}
 .collapse.show .card-body {
	 border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.hubungi-kami-section {
    width: 100%;
    margin: 60px 0 0 0;
}

 
</style>