<template>
  <div id="app" class="single-page-app single-page-app-left-nav be-row">
    <div class="float-button-container" v-on:click="addChecklist">
      <i class="fas fa-plus-circle"></i>
      <span style="margin-left: 10px; cursor: pointer">Add List</span>
    </div>
    <div class="left-nav be-col-20">
      <div class="item">
        <router-link to="/about">About</router-link>
      </div>
      <div class="item" v-for="checklist of checklists">
        <router-link :to="{ name: 'home', params: { checklistId: checklist.id } }">{{checklist.title}}</router-link>
      </div>
    </div>
    <div class="view-container be-col">
      <router-view/>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import {Checklist} from "@/models/Checklist";

  @Component
  export default class AppComponent extends Vue {
    get checklists() {
      return this.$store.getters.checklists;
    }
    addChecklist() {
      this.$store.dispatch('addChecklist');
    }
  }
</script>

<style>
  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #1D1E20;
  }
  button {
    background: transparent;
    border: 0;
  }
  .be-row {
    display: flex;
    flex-wrap: wrap;
  }
  .be-col {
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
  }
  .be-col-20px {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 20px;
    flex: 0 0 20px;
    max-width: 20px;
  }
  .be-col-20 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    max-width: 20%;
  }
  .gray {
    color: gray;
  }
  .float-button-container {
    position: fixed;
    bottom: 30px;
    left: 30px;
    z-index: 1000;
  }
  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #1D1E20;
  }
  .single-page-app {
    height: 100%;
    overflow-y: scroll;
  }
  .single-page-app .left-nav {
    position: relative;
    width: 100%;
    min-height: 1px;
    border-right: 1px solid black;
    background-color: #2C2D2E;
    overflow-y: scroll;
  }
  .single-page-app .view-container {
    height: 100%;
    background-color: #1D1E20;
    overflow-y: scroll;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
  }

  #app h1 {
    color: #d5720e;
    margin-bottom: 0;
    margin-top: 0;
    padding-top: 15px;
  }
  #app .left-nav .item {
    width: 100%;
  }
  #app .left-nav .item a {
    font-weight: bold;
    color: #fff;
    display: block;
    width: calc(100% - 10px);
    text-decoration: none;
    padding-left: 10px;
  }
  #app .left-nav .item a.router-link-exact-active {
    background-color: #0866D4;
  }




  #app .view-container {
    padding-left: 10px;
  }
  #app .view-container .underline-div {
    border-bottom: 1px solid gray;
  }
</style>
