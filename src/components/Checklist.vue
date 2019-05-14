<template>
  <div class="todo-list">
    <h1 class="underline-div sticky">{{ checklist.title }}</h1>
    <div class="reminders">
      <div class="reminder be-row" v-for="reminder of checklist.reminders">
        <div class="be-col-20px">
          <i class="far fa-circle gray"></i>
        </div>
        <div class="be-col underline-div">
          <input v-model="reminder.title">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import {Checklist} from "@/models/checklist";
  import {Frequencies} from "@/models/reminder";
  import {Priorities} from "@/models/reminder";

  @Component
  export default class ChecklistComponent extends Vue {
    checklist: Checklist = {
      id: 1,
      title: 'Reminders',
      reminders: [
        {
          id: 1,
          title: 'Do something now',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: 2,
          title: 'Do something later today',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: 3,
          title: 'Do something tomorrow',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
        {
          id: -1,
          title: '',
          dateTimeUTC: 1557768793911,
          frequency: Frequencies.DAY,
          frequencyEndDateTimeUTC: 1557768793911,
          priority: Priorities.MEDIUM,
          note: 'Describe the reminder',
          isDone: false,
          userEmail: 'c@b.com'
        },
      ]
    };
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
  .todo-list {
    padding-top: 65px;
    height: calc(100% - 65%);
  }
</style>
