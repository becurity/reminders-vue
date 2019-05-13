<template>
  <div class="todo-list">
    <h1>{{ checklist.title }}</h1>
    <div class="reminders">
      <ul>
        <li v-for="reminder of checklist.reminders">{{reminder.title}}</li>
      </ul>
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
      ]
    };

  }
</script>

<style scoped>
  ul {
    list-style: none;
  }
</style>
