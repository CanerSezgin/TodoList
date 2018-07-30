<template>
<div class="home">
  <div class="container">
    <div class="row">
      <div class="col s12 m8 offset-m2 l5"  >
            
        <h4>Projects</h4>
        <!-- Modal Trigger -->
        <div class="row center-align">
          <div class="col s6 m6 l6">
            <a class="waves-effect waves-light btn modal-trigger" href="#modal1">
              <i class="material-icons left">add</i>New Project
            </a>
          </div>
         <div class="col s6 m6 l6">
            <a 
              class="waves-effect red darken-2 lighter white-text btn modal-trigger" 
              href="#modal2"
              v-show="projects.length >= 1">
              <i class="material-icons left">clear</i>Clear All
            </a>
          </div>
        </div>     

        <!-- Modal1 Structure -->
        <div id="modal1" class="modal modal-fixed-footer">
          <div class="modal-content">
            <div class="row">
              <div class="col s12 m12 l12">
                <h4>New Project</h4>
                  <input 
                    v-model="name"
                    class="validate col s12 m12 l8 offset-l1"
                    type="text"
                    placeholder="Project Name"
                    required>
              </div>
            </div>
          </div>
          <div class="modal-footer row">
            <div class="col s12">
              <button 
                class="btn waves-effect waves-light modal-close">
                  Cancel
                  <i class="material-icons right">cancel</i>
              </button> 
              <button 
                class="btn waves-effect waves-light modal-close" 
                @click="addProject" >
                  Submit
                  <i class="material-icons right">send</i>
              </button> 
            </div>            
          </div>
        </div>

        <!-- Modal2 Structure -->
        <div id="modal2" class="modal modal-fixed-footer ">
          <div class="modal-content red darken-2 lighter white-text">
            <div class="row">
              <div class="col s12 l12" >
                <h4>Clear All Projects</h4>
                  <div class="row">
                    <div class="col s11 offset-s1">
                      <h6>Are you sure ? 
                        <br>You will delete all projects & tasks. 
                        <br>There is no way back ! 
                      </h6>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="modal-footer row">
            <div class="col s12">
            <button 
              class="btn waves-effect waves-light modal-close">
                Cancel
                <i class="material-icons right">cancel</i>
            </button> 
            <button 
              class="btn waves-effect waves-light modal-close " 
              @click="clearAll" >
                Delete!
                <i class="material-icons right">delete</i>
            </button>               
            </div>
          </div>
        </div>

                <!-- Modal3 Structure -->
        <div id="modal3" class="modal modal-fixed-footer">
          <div class="modal-content">
            <div class="row">
              <div class="col s12">
                <h4>New Task</h4>
                  <div class="row">
                    <div class="s12 m9 offset-m1 col l9 offset-l1">
                      <div>
                        <input 
                          v-model="task_title"
                          class="validate"
                          type="text"
                          placeholder="Task Title">
                      </div>
                      <div>
                        <input 
                          v-model="task_desc"
                          class="validate"
                          type="text"
                          placeholder="Task Description">
                      </div>
                      <div class="row">
                        <div class="col s12 l5">
                          <label for="dueDate">Due Date 
                          <input 
                            id="dueDate"
                            v-model="dueDate"
                            class="validate"
                            type="date">
                          </label>
                        </div>
                        <div class="input-field col s12 l6 offset-l1">
                          <label>Priority Level
                          <select v-model="priority">
                          <option disabled value="">Please select one</option> 
                            <option>Low</option>
                            <option>Normal</option>
                            <option>High</option>
                          </select>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="modal-footer row">
            <div class="col s12">
            <button 
              class="btn waves-effect waves-light modal-close">
                Cancel
                <i class="material-icons right">cancel</i>
            </button> 
            <button 
              class="btn waves-effect waves-light modal-close" 
              @click="addTask(showProject.id)" >
                Submit
                <i class="material-icons right">send</i>
            </button>               
            </div>
          </div>
        </div>

        <!-- Modal4 Structure -->
        <div id="modal4" class="modal modal-fixed-footer ">
          <div class="modal-content red darken-2 lighter white-text">
            <div class="row">
              <div class="col s12 l12" >
                <h4>Delete This Project</h4>
                  <div class="row">
                    <div class="col s11 offset-s1">
                      <h6>Are you sure ? 
                        <br>You will delete this project & all tasks. 
                      </h6>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="modal-footer row">
            <div class="col s12">
            <button 
              class="btn waves-effect waves-light modal-close">
                Cancel
                <i class="material-icons right">cancel</i>
            </button> 
            <button 
              class="btn waves-effect waves-light modal-close" 
              @click="removeProject(showProject.id)" >
                Delete!
                <i class="material-icons right">delete</i>
            </button>               
            </div>
          </div>
        </div>
        
        <!-- List -->
        <div class="row">
          <div class="col s12 m12 l12">
            <div class="collection">
              <a 
                style="cursor: pointer;"
                v-for="project in projects"
                :key="project.id" 
                @click="details(project.id)"
                class="collection-item">
                  {{project.name}}
              </a>
            </div>
          </div>
        </div>
      </div>
 
      <div class="col s12 m8 offset-m2 l6 offset-l1">
            <!--Tasks-->
            <div 
              class="projectPage"
              v-show="showP">
                  <h4>
                    {{showProject.name}}  
                  </h4>
                  <a class="waves-effect waves-light btn modal-trigger" href="#modal3">
                    <i class="material-icons left">add</i> New Task
                  </a>
                  
                  <!-- Delete Project -->
                  <a href="#modal4" class="modal-trigger" style="color: inherit;">
                  <i 
                      class="medium material-icons right"
                      style="cursor:pointer">
                      delete
                  </i>
                  </a>
                  
            <div v-show="Object.keys(showProject.tasks).length != 0"> 
              <h5>Tasks</h5>

            <div class="tasks">
              <ul class="collapsible">
                <li 
                    v-for="(task,index) in showProject.tasks"
                    :key="task.id" 
                    class="collection-item">
                      <div class="collapsible-header" 
                        :style="{background: task.color}" 
                        style="color: black" >
                          <div class="col s8">  
                            {{index+1}}. Task - {{task.task_title}}
                          </div>
                          <div class="col s3 offset-s1 center-align">
                            {{task.priority}}
                          </div>
                      </div>
                      <div class="collapsible-body">
                        <div class="row">
                          <div class="col s12 l7">
                            <span>{{task.task_desc}}</span>
                          </div>
                          <div class="col s12 l5">
                            <h6 style="font-weight: bold; color:darkred;">Due Date</h6> 
                            <span>{{task.dueDate}}</span>
                            <br><br>
                            <p>
                              <label>
                                <input
                                  type="checkbox"
                                  v-model="task.completion"
                                  true-value="yes"
                                  false-value="no"
                                  @click="updateCompletion"
                                >
                                <span>COMPLETE</span>
                              </label>
                            </p>
                            <a 
                              class="waves-effect waves-light btn-small red darken-2" 
                              @click="removeTask(task.id)">
                                DELETE
                            </a>
                          </div>
                      </div>
                    </div> 
                </li>
              </ul>
</div>
            </div>  
            </div>
            </div>
          </div>
        </div>
</div>
      

</template>

<script>
import Projects from './Projects'
import Tasks from './Tasks'

export default {
  name: 'Home',
  components: {
    Projects,
    Tasks
  },
  data () {
    return {
      projects: [],
      name: null,
      showP: false,
      showProject: {
        id: '',
        name: '',
        tasks: []
      },
      task_title: '',
      task_desc: '',
      dueDate: '',
      priority: ''
    }
  },
  methods:{
    addProject(){
      if(this.name != null){
        var newProject = {
          id: this.createId(),
          name: this.name,
          tasks: []
        }
        this.projects.push(newProject)
        this.name = null;
        this.$localStorage.set('projects', JSON.stringify(this.projects))
      } else {
        
      }
    },
    addTask(project_id){
       var newTask = {
        id: this.createId(),
        task_title: this.task_title,
        task_desc: this.task_desc,
        dueDate: this.dueDate,
        priority: this.priority,
        color: this.priorityColors(this.priority),
        completion: 'no'
      } 
      this.task_title = null
      this.task_desc = null
      this.dueDate = null
      this.priority = null
      
      this.projects.forEach(project => {
        if(project.id == project_id){
          project.tasks.push(newTask)
          this.$localStorage.set('projects', JSON.stringify(this.projects))
        }
      });
    },
    removeProject(project_id){
      var removedArray = this.projects.filter((el) => {
        return el.id !== project_id
      });
      this.projects = removedArray
      this.$localStorage.set('projects', JSON.stringify(this.projects))
      this.showP = false
    },
    removeTask(task_id){
     var removedArray = this.showProject.tasks.filter((el) => {
        return el.id !== task_id
      });
      this.showProject.tasks = removedArray

      var project = this.projects.find( obj => { 
        return obj.id === this.showProject.id
      });
      project.tasks = removedArray;
      this.$localStorage.set('projects', JSON.stringify(this.projects))
    },
    updateCompletion(){
      setTimeout(() => {
        this.$localStorage.set('projects', JSON.stringify(this.projects))
      }, 1000);
    },
    clearAll(){
      localStorage.clear();
      location.reload();
    },
    createId(){
      return '_' + Math.random().toString(36).substr(2, 9);
    },
    details(project_id) {
      this.showP = true;
      this.projects.forEach(project => {
        if(project.id == project_id){
          this.showProject.id = project.id;
          this.showProject.name = project.name;
          this.showProject.tasks = project.tasks;
        }
      });
    },
    priorityColors(priorityLevel){
      if(priorityLevel == 'Low' ) {
        return /* '#c5e1a5' */ '#fff176'
      } else if(priorityLevel == 'Normal') {
        return /* '#8bc34a' */ '#ffca28 '
      } else if(priorityLevel == 'High') {
        return /* '#33691e' */ '#ff9800'
      } else {
        return 'white'
      }
    }
  },
  mounted() {
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });

    $(document).ready(function(){
       $('.modal').modal();   
    });

    $(document).ready(function(){
    $('select').formSelect();
    });
        
    const projects = JSON.parse(this.$localStorage.get('projects'))
    if(projects){
      this.projects = projects
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal { 
  width: 50% !important ; 
  height: 45% !important ; 
}  

#modal3 {
  height: 100% !important;
}


</style>
