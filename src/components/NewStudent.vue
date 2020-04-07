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
      <v-toolbar-title class="headline text-center">Register New</v-toolbar-title>
     
    
      
  
        
      
    </v-app-bar>
    </v-app>
</template>

<script>
export default {
    name: 'new-student',
    data() {
        return {
            
        }
    }
}
</script>