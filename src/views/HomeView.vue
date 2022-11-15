<script setup lang="ts">
import Header from "@/components/Header.vue"

</script>

<template>
 <Header></Header>
  <v-main>
    <v-card class="d-flex flex-column justyfi-center align-center ">
      
        <RouterLink to="/funnycaptcha">Funny Captcha</RouterLink>
        <RouterLink to="/funnycaptcha">To Do List</RouterLink>
        <RouterLink to="/funnycaptcha">Chuck Norris Questions</RouterLink>
      
    </v-card>
  </v-main>
</template>
