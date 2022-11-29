<script setup lang="ts">
import type { Trees } from '@/APIs/dust'
import Header from '@/components/Header.vue'
import { useTreeStore } from '@/stores/tree'
import { onMounted } from '@vue/runtime-core'
import { useLocationStore} from '@/stores/location'

// Create store
const treeStore = useTreeStore();
const locationStore = useLocationStore();

onMounted(() => {
  treeStore.fetch_single();
  locationStore.locate_user();
})
</script>

<template>
  <Header></Header>
  <v-main class="d-flex flex-column align-center " >
    
    <v-card class="pa-2">
      <h1 v-if="!treeStore.loading" > {{ treeStore.single.name}} </h1> <!-- {{ treeStore.trees[0].name }}-->
      <h1 v-else > Wait for API</h1>
    </v-card>
    <v-card>
      <v-btn v-if="treeStore.single.sensors[0].last_value.value">Temperature: {{ treeStore.single.sensors[0].last_value.value }}</v-btn>
    </v-card>
  </v-main>
</template>