<script setup lang="ts">
import Header from "@/components/Header.vue"

const items = {
  card1:{name: 'Funny Captcha', to:'/funnycaptcha'},
  card2:{name: 'Tree List', to:'/tree'}
}
</script>

<template>
 <Header></Header>
  <v-main  class="d-flex-column justify-center align-center pt-5 ">
    <v-card color="grey darken-2" class="ma-15 pa-5" outlined tile
    v-for="(value, i) in items" :key="`opt${i}`">
        <RouterLink :to="value.to">{{ value.name }}</RouterLink>
      
    </v-card>
  </v-main>
</template>
