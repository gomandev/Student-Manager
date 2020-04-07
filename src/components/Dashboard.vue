<template>
  <v-app id="inspire">

    <v-app-bar
      absolute
      app
        elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      color="#01d28e"
      dark
      class="mb-5"
    >
      <!-- <h1 v-for="user in users" v-bind:key="user.id">{{ user.name }}</h1> -->
      <v-app-bar-nav-icon class="d-lg-none" @click.stop="left = !left" />
      <v-toolbar-title class="headline">Student Manager</v-toolbar-title>
     
      <v-toolbar-title class="headline ml-auto">
        <div class="profile d-flex">
          <div class="not-wrap mr-4">
            <v-avatar size="15" class="view" color="rgb(197, 18, 18)" style="">
              <span class="sm-text">7</span>
            </v-avatar>
            <v-icon class="text-white">mdi-bell</v-icon>
          </div>
          <v-avatar size="50" style="border: 2px solid #01d28e">

          <img
            src="img/core-img/staff-1.jpg"
            alt="John"
          >
          
          </v-avatar>
        </div>
        
      </v-toolbar-title>
      
  
        
      
    </v-app-bar>
    <v-content class="bg-app container-fluid">
       
      <v-row
      no-gutters
      class="land"
      
      >
          <v-col
              v-for="n in 1"
              :key="n"
              cols="12"
              sm="3"
              class=""
              
          >
              <v-content
              class="pa-1 mr-2"
              outlined
              tile
              
              >
              <v-card class="py-3">
                <div class="d-flex justify-content-center align-items-center mt-4">
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon  class="text-main">mdi-application</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                      <p class="regular">Dashboard</p>
                    </v-list-item-title>
                  </v-list-item>
                </div>
                <div class="d-flex justify-content-center align-items-center mt-4">
                  <div class="">
                    <v-list-item-group>
                        <v-list-item>
                            
                          <v-list-item-icon>
                          <v-icon  class="text-main">mdi-router-wireless</v-icon>
                          </v-list-item-icon>
                          <v-list-item-title>
                          <router-link to="/new" class="text-white">
                          Register New Student</router-link>
                          </v-list-item-title>
                            
                            
                        </v-list-item>
                        <v-list-item>
                            
                          <v-list-item-icon>
                          <v-icon  class="text-main">mdi-album</v-icon>
                          </v-list-item-icon>
                          <v-list-item-title>
                          <router-link to="/all" class="text-white">
                            See All Students
                          </router-link>
                          </v-list-item-title>
                            
                            
                        </v-list-item>
                        <v-list-item>
                            
                          <v-list-item-icon>
                          <v-icon  class="text-main">mdi-microphone</v-icon>
                          </v-list-item-icon>
                          <v-list-item-title>
                          <router-link to="/allattend" class="text-white">
                            See All Attendance
                          </router-link>
                          </v-list-item-title>
                            
                        </v-list-item>
                        <v-list-item>
                            
                          <v-list-item-icon>
                          <v-icon  class="text-main">mdi-music</v-icon>
                          </v-list-item-icon>
                          <v-list-item-title>
                          <router-link to="/quize" class="text-white">
                            Post Quize
                          </router-link>
                          </v-list-item-title>
                                
                            
                        </v-list-item>
                        <v-list-item>
                            
                          <v-list-item-icon>
                          <v-icon  class="text-main">mdi-trending-up</v-icon>
                          </v-list-item-icon>
                          <v-list-item-title>
                         <router-link to="/notification" class="text-white">
                            New Notification
                          </router-link>
                          </v-list-item-title>
                                
                            
                        </v-list-item>
                        <v-list-item>
                            
                          <v-list-item-icon>
                          <v-icon  class="text-main">mdi-video</v-icon>
                          </v-list-item-icon>
                          <v-list-item-title>
                          <router-link to="/rating" class="text-white">
                            View Student Ratings
                          </router-link>
                          </v-list-item-title>
                                
                            
                        </v-list-item>
                    </v-list-item-group>
                  </div>
                  
                </div>
              </v-card>
              </v-content>

              
          </v-col>

          <v-col
              v-for="n in 1"
              :key="n"
              cols="12"
              sm="9"
              
          >
            <v-content
              class="pa-1 text-white"
              outlined
              tile
              
            >
              <v-row>
                  <v-col
                   v-for="n in 1"
                    :key="n"
                    cols="12"
                    sm="12"
                    class="shadow"
                  >
                    <v-card class="p-4">
                        <v-card-title>All Students</v-card-title>
                        <v-card-subtitle>The Whole Registered Students</v-card-subtitle>
                        <v-card-text>
                            {{ resultCount }}
                        </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col
                   v-for="n in 1"
                    :key="n"
                    cols="12"
                    sm="12"
                    class="shadow"
                  >
                    <v-card class="p-4">
                        <v-card-title>Students Attendance</v-card-title>
                        <v-card-subtitle>The Whole Students Attendance List</v-card-subtitle>
                        <v-card-text>
                            <v-list-item>
                                <v-list-item-title>
                                    Good In Attendance
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    
                                </v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>
                                    Moderate In Attendance
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    300
                                </v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>
                                    Low In Attendance
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                   {{ goodCount }}
                                </v-list-item-subtitle>
                            </v-list-item>
                        </v-card-text>
                    </v-card>
                  </v-col>
                  
              </v-row>
            </v-content>
          </v-col>
           
      </v-row>
     

    </v-content>

   
  </v-app>
</template>

<script>
import db from './firebase/firebaseInit'
export default {
  name: 'all-student',
  data () {
    return {
      students: []
    }
  },

  created () {
    db.collection('student').orderBy('dept').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        
        
        const data = {
          'id': doc.id,
          'student_id': doc.data().student_id,
          'name': doc.data().name,
          'attendance': doc.data().attendance,
          'dept': doc.data().dept
        }

        this.students.push(data)
      })
    })
  },

  getGood () {
    const good = this.students.dept;

    if(good === 'good') {
      return this.student.dept.length;
    }
  },

  
  computed: {
    resultCount () {
      return this.students && this.students.length
    },
  },
  
}
</script>

<style scoped>
  li {
    list-style: none !important;
  }

  .z-ind {
    z-index: 3;
  }

  
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
  }

  .neg-ml {
    margin-left: -20px;
    margin-top: 30px;
    font-size: 2rem;
  }

  .radius {
    border-radius: 30px;
  }

  .hero-wrap {
  width: 100%;
  height: 850px;
  position: inherit;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center; }
  @media (max-width: 1199.98px) {
    .hero-wrap {
      background-position: center center !important; } }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    opacity: .3;
   background-image: linear-gradient( 181deg,  rgba(2,0,97,1) 15%, rgba(97,149,219,1) 158.5% );
    height: 100%;
  }

  .live {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    opacity: .3;
    background: rgba(0, 0, 0, 0.8) ;
    width: 100%;
    height: 100%;
  }

   
  @media (max-width: 991.98px) {
    .hero-wrap {
      height: 100vh; }
      .hero-wrap .overlay {
        height: 100vh; }
   }
      
  .hero-wrap.hero-wrap-2 {
    height: 600px !important;
    position: relative; }
    .hero-wrap.hero-wrap-2 .overlay {
      width: 100%;
      opacity: .3;
      height: 600px; }
    .hero-wrap.hero-wrap-2 .slider-text {
      height: 600px !important; }

    .slider-text {
  height: 850px; }
  @media (max-width: 991.98px) {
    .slider-text {
      height: 100vh; } }
  .slider-text h1 {
    font-size: 44px;
    color: #000;
    line-height: 1.1;
    font-weight: 700; }
    .slider-text h1 span {
      display: block; }
  .slider-text .icon-wrap .icon {
    width: 70px;
    height: 70px;
    background: #01d28e;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%; }
    .slider-text .icon-wrap .icon span {
      color: #fff; }
  .slider-text .icon-wrap .heading-title {
    position: relative; }
    .slider-text .icon-wrap .heading-title:after {
      position: absolute;
      top: 50%;
      left: -33px;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      content: '';
      width: 30px;
      height: 2px;
      background: #fff; }
    .slider-text .icon-wrap .heading-title span {
      font-family: "Poppins", Arial, sans-serif;
      color: #fff; }
  .slider-text p {
    line-height: 1.5;
    color: white; }
  .slider-text .breadcrumbs {
    font-size: 14px;
    margin-bottom: 20px;
    z-index: 99;
    text-transform: uppercase;
    font-weight: 500; }
    .slider-text .breadcrumbs span {
      color: rgba(255, 255, 255, 0.7); }
      .slider-text .breadcrumbs span i {
        color: rgba(255, 255, 255, 0.5);
        font-size: 13px; }
      .slider-text .breadcrumbs span a {
        color: rgba(255, 255, 255, 0.7); }
        .slider-text .breadcrumbs span a:hover, .slider-text .breadcrumbs span a:focus {
          color: #1089ff; }
          .slider-text .breadcrumbs span a:hover i, .slider-text .breadcrumbs span a:focus i {
            color: #1089ff; }
  .slider-text .bread {
    font-weight: 400 !important;
    position: relative;
    line-height: .8; }
  @media (max-width: 991.98px) {
    .nav {
      margin-top: 10px; } }
  .nav > .nav-item > .nav-link {
    font-size: 15px;
    padding-top: .9rem;
    padding-bottom: .9rem;
    padding-left: 20px;
    padding-right: 20px;
    color: #fff;
    font-weight: 400;
    opacity: 1 !important; }
    .nav > .nav-item > .nav-link:hover {
      color: #01d28e; }
    @media (max-width: 991.98px) {
      .nav > .nav-item > .nav-link {
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 0;
        color: #fff; } }
  .text-main {
    color: #01d28e;
   
  }

  a {
    color: #01d28e !important;
    text-decoration: none !important;
  }

  .not-wrap {
    color: white;
  }

  .profile {
    position: relative;
  }

  .view {
    position: absolute;
    top: 5%;
    left: 15%;
    z-index: 1;

  }

  .sm-text {
    font-size: 12px;
  }

  .not-view span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 20px;
  }

  .land {
    margin-top: 80px;
  }


  .bg-white {
    background-color: #fff;
  }
</style>