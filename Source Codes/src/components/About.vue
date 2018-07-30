<template>
    <div class="about">
    <div class="container">
        <div class="row"></div>
        <div class="row">
            <div class="col s12 m8 l10">
                <div class="card">
                    <div class="col s2 m4 l4">
                        <div class="card-image">
                        <img src="@/assets/about_todo.png">     
                        </div>               
                    </div>
                    <div class="col s10 m8 l8">
                            <h5 class="title">About Projects</h5>  
                            <p>Made with 
                                <span style="color: #b71c1c">❤</span> 
                                by 
                                <span class="boldly">
                                    <a href="http://bit.ly/gitHub_casedo" target="_blank" style="color: #b71c1c">
                                    Caner SEZGİN
                                    </a>
                                </span>
                            </p> 

                            <h5 class="title"> Project Objective </h5>
                            <ul>
                                <li>
                                    <i class="material-icons">chevron_right</i>
                                    This is a personal task manager that helps you achieve your goals.
                                </li>
                                <li>
                                    <i class="material-icons">chevron_right</i>
                                    You can plan your projects and related tasks(todos) easily.
                                </li>
                                <li>
                                    <i class="material-icons">chevron_right</i>
                                    Designed for simplicity & Easy to use !
                                </li>
                            </ul>
                    </div>   
                </div>
            </div>

            <div class="col s10 offset-s2 m4 l2">
                <h5 class="title">Made With</h5>
                <ul> 
                    <li>
                        <i class="material-icons">check</i>
                         HTML 
                    </li>
                    <li>
                        <i class="material-icons">check</i>
                        CSS 
                    </li>
                    <li>
                        <i class="material-icons">check</i>
                        Javascript 
                    </li>
                    <li>
                    <i class="material-icons">check</i>
                        Vue.Js 
                    </li>
                </ul>

                <div class="center-align">
                    <a class="waves-effect waves-light btn blue darken-4">Source Code</a>
                </div> 
                </div>  
            </div>

            <div class="row">
                <div class="col s12 m5 l5">
                        <h5 class="title">Additional Remarks</h5>
                        <p>In order to save user’s projects and todos between sessions, <span class="boldly">localStorage</span> was used.</p> 
                        <p>Users can create/delete/manage their own projects & tasks and they can reach their 
                            personal todo list they want. </p>
                </div>

                 <div class="col s12 m7 l7">
                     <h5 class="title">Opinion and Suggestion</h5>
                    <div class="row">
                        <div class="col l6 offset-l1">
                        <ul>
                            <li>
                            <i class="material-icons tiny">star</i>
                            If you detect any bugs
                            </li>
                            <li>
                            <i class="material-icons tiny">star</i>
                            If you have any questions
                            </li>
                            <li>
                            <i class="material-icons tiny">star</i>
                            If you have any suggestions 
                            </li>
                            <li class="center-align">or</li>
                            <li>
                            <i class="material-icons tiny">star</i>
                            If you wanna just say something 
                            </li>
                        </ul>
                        </div>
                        <div class="col l5">
                            <span class="boldly" >You can get in touch with me </span>  
                            <div class="col l11 offset-l1">
                            <ul>
                                    <li>
                                        <a href="http://bit.ly/CanerSezgin" target="_blank">
                                        <i class="material-icons tiny">thumb_up</i> 
                                        on Twitter
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://bit.ly/gitHub_casedo" target="_blank">
                                        <i class="material-icons tiny">thumb_up</i>
                                        on Github
                                        </a>
                                    </li>     
                                    <li>
                                        <a href="http://bit.ly/Linkedin_CanerSezgin" target="_blank">
                                        <i class="material-icons tiny">thumb_up</i>
                                        on Linkedin
                                        </a>
                                    </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col s12 center-align">
                <p>This project was not created for commercial use, 
                    It is only for my personal portfolio. </p> 
            </div>
    </div>
    </div>
</template>

<style scoped>
.card-image{
        width: 100%;
    height: auto;
}

.title{
    color:#0d47a1;
}

.boldly{
    font-weight: bold
}

</style>
