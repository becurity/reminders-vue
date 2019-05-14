<template>
  <div class="home">
    <ChecklistComponent v-if="checklist" v-bind:checklist="checklist"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ChecklistComponent from '@/components/Checklist.vue';

@Component({
  components: {
    ChecklistComponent,
  },
})
export default class Home extends Vue {
  get checklist() {
    this.$store.dispatch('setCurrentChecklistId', this.$route.params.checklistId);
    return this.$store.getters.currentChecklist ? this.$store.getters.currentChecklist : this.$store.state.checklists[0];
  }
  created() {
    console.log('create');
  }
  updated() {
    console.log('update');
  }
}
</script>
