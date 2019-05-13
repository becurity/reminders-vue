<template>
  <div class="home">
    <ChecklistComponent />
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
export default class Home extends Vue {}
</script>
