<template>
    <nav>
        <div class="nav-wrapper red darken-3">
        <router-link to="/TodoList" class="brand-logo center"> To-Do List </router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><router-link to="/TodoList/about">
                <i class="material-icons right">info</i>
                About Project
                </router-link>   
            </li>
            <li><a href="http://bit.ly/gitHub_casedo" target="_blank">
                <i class="material-icons right">code</i>
                Github
                </a>
            </li>
            <li><a href="http://bit.ly/CanerSezgin" target="_blank">
                <i class="material-icons right">person_add</i>
                Twitter
                </a>
            </li>
        </ul>
        </div>
    </nav>

</template>
