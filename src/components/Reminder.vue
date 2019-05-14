<template>
  <div class="reminder be-row" v-bind:class="{done: reminder.isDone}">
    <div class="be-col-20px">
      <i class="far fa-circle" v-if="showRadioButton && !reminder.isDone" v-on:click="toggleDone"></i>
      <i class="far fa-dot-circle" v-if="showRadioButton && reminder.isDone" v-on:click="toggleDone"></i>
    </div>
    <div class="be-col underline-div">
      <input v-model="reminder.title" v-if="!reminder.isDone"/>
      <input v-model="reminder.title" disabled v-if="reminder.isDone"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import {Reminder} from "@/models/Reminder";
  import { Prop } from 'vue-property-decorator';

  @Component
  export default class ReminderComponent extends Vue {
    @Prop() private reminder!: Reminder;
    get showRadioButton() {
      return !!this.reminder.id;
    }
    toggleDone() {
      this.reminder.isDone = !this.reminder.isDone;
    }
  }
</script>

<style scoped>
  input {
    width: calc(100% - 10px);
    background: transparent;
    color: #fff;
    border: 0;
    height: 100%;
  }
  input:focus {
    outline: none;
  }
  .done {
    color: gray;
  }
  .done input {
    color: gray;
  }
</style>
