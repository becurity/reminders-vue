<template>
  <div class="home">
    <ChecklistComponent v-bind:checklist="checklists[0]"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ChecklistComponent from '@/components/Checklist.vue';
import {Checklist} from '@/models/checklist';
import {Frequencies, Priorities} from "@/models/reminder";

@Component({
  components: {
    ChecklistComponent,
  },
})
export default class Home extends Vue {
  checklists: (Checklist)[] = [
    {
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
    }
  ];
}
</script>
