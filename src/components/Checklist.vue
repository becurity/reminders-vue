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
  import {Prop} from 'vue-property-decorator';

  @Component({
    components: {
      ReminderComponent,
    }
  })
  export default class ChecklistComponent extends Vue {
    @Prop() checklist!: Checklist;
  }
</script>

<style scoped>
  .checklist {
    padding-top: 65px;
    height: calc(100% - 65%);
  }
</style>
