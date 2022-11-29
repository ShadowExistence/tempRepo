import { defineStore } from "pinia";
import { ref, computed } from 'vue'
import type { Tree } from '@/types/tree'
import { Trees } from '@/APIs/dust'
import { useLocationStore } from "./location";
import { distance_points } from "@/helpers/location_helper";

export const useTreeStore = defineStore('tree', () => {

  // State
  const trees = ref([] as Tree[]);
  const loading = ref(false);
  const single = ref([] as unknown as Tree);

  // Action
  async function fetch_trees(){
    loading.value = true;
    Trees.fetch_all()
    .then((res) => {
      console.log(res)
      trees.value = res.data.data
      loading.value = false;
    })
    .catch((err) => {
      console.log(err);
      loading.value = false;
    })
  }

  async function fetch_single(){
    loading.value = true;
    Trees.fetch_one()
    .then((res) => {
      console.log(res.data)
      single.value = res.data
      loading.value = false;
    })
    .catch((err) => {
      console.log(err);
      loading.value = false;
    })

  }



  // Getters

  const closest_tree = computed(() =>{
    if(loading.value || trees.value.length === 0 ){
      return {};
    }
    const locationStore = useLocationStore();

    // difault way
    // let closestTree = trees.value[0];
    // let closestDistance = distance_points(closestTree.location, locationStore.location);

    // trees.value.forEach((tree) =>{
    //   const treeDisatnce = distance_points(tree.location, locationStore.location);
    //   if(treeDisatnce < closestDistance){
    //     closestDistance = treeDisatnce;
    //     closestTree = tree;
    //   }
    // })

    //return closestTree;
    
    // nico way
    const distances = trees.value.map((tree) => {
      return distance_points(tree.location, locationStore.location);
    })
    
    const closest = distances.reduce((indexClosestTree, currentDistance, currentIndex) => {
      if(currentDistance < distances[indexClosestTree]) return currentIndex;
      else return indexClosestTree
    },
    0 //initial index of closest tree
  );
  return trees.value[closest];
    
    
  })


  return {
    trees,
    loading,
    fetch_trees,
    closest_tree,
    fetch_single,
    single,
  }
});