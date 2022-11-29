<script setup lang="ts">
import { useTreeStore } from '@/stores/tree'
import { onMounted } from '@vue/runtime-core'
import { useLocationStore} from '@/stores/location'


// Create store
const treeStore = useTreeStore();
const locationStore = useLocationStore();

onMounted(() => {
    treeStore.fetch_trees();
    locationStore.locate_user();
})

</script>


<template>
   <v-main>
    
    <ul v-if="!treeStore.loading">
        <li v-for="tree in treeStore.trees" :key="tree.id">
            <v-btn class="ma-5" color="grey darken-2" :to="`/tree/${tree.id}`">{{ tree.name }}: {{ tree.id }}</v-btn>
        </li>
    </ul>
    <div v-else>
        Please Wait for API bitch
    </div>
    <h2>Closest tree:</h2>
    
    <h2>{{ treeStore.closest_tree.name }}</h2>
   </v-main>
</template>

