<template>
    <v-app id="inspire">
      <v-app-bar
      absolute
      app
      elevate-on-scroll
      color="#01d28e"
      dark
    >
      <v-app-bar-nav-icon class="d-lg-none" @click.stop="left = !left" />
      <v-toolbar-title class="m-auto">Student Manager</v-toolbar-title>
      
      <v-spacer />
      <ul class="nav m-auto d-none d-lg-inline-block">
        <router-link class="pr-3 text-white" to="/">Home</router-link>
        <router-link class="pr-3 text-white" to="/about">About</router-link>
        <router-link class="pr-3 text-white" to="/featured">Featured</router-link>
        
      </ul>
      
      <v-spacer />
    </v-app-bar>

   

    
    <v-navigation-drawer
      v-model="left"
      fixed
      temporary
      color="rgb(7, 7, 7)"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon  class="text-white">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link class="pr-3 text-white" to="/">Home</router-link>
            </v-list-item-title>
          </v-list-item>

           <v-list-item>
            <v-list-item-icon>
              <v-icon  class="text-white">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link class="pr-3 text-white" to="/about">About</router-link>
            </v-list-item-title>
          </v-list-item>

        <v-list-item>
            <v-list-item-icon>
              <v-icon  class="text-white">mdi-trending-up</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link class="pr-3 text-white" to="/featured">Featured</router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      drawerRight: null,
      right: false,
      left: false,
    }),

    
  }
</script>

<style scoped>
  li {
    list-style: none !important;
  }

  
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
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
  .hero-wrap .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    opacity: .3;
   background-image: linear-gradient( 181deg,  rgba(2,0,97,1) 15%, rgba(97,149,219,1) 158.5% );
    height: 850px;
  }

  .hero-wrap .overlay-dark {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    opacity: .3;
   background-image: rgba(0, 0, 0, 0.8) ;

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
</style>