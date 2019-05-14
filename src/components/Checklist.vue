<template>
  <div class="checklist">
    <h1 class="underline-div sticky">{{ checklist.title }}</h1>
    <div class="reminders">
      <ReminderComponent v-for="reminder of checklist.reminders" v-bind:reminder="reminder" />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import {Checklist} from "@/models/checklist";
  import {Frequencies} from "@/models/reminder";
  import {Priorities} from "@/models/reminder";
  import ReminderComponent from '@/components/Reminder.vue';

  @Component({
    components: {
      ReminderComponent,
    }
  })
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
          isDone: true,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
          id: null,
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
  .checklist {
    padding-top: 65px;
    height: calc(100% - 65%);
  }
</style>
