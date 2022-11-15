<script setup lang="ts">
import { onMounted, ref } from 'vue'

const emit = defineEmits(['correct', 'incorrect']);
// const props = defineProps(['seconds'])
const props = defineProps({
  seconds: {
    type: [Number, String],
    required: false,
    default: 0
  }
})


//change images later

const captchaElements = ref([
  {
    image: 'https://i.pinimg.com/736x/0a/bb/e5/0abbe546e479edc1eb62f5a8ccd66328.jpg',
    isSelected: false,
    isFunny: true,
  },
  {
    image: 'https://www.rd.com/wp-content/uploads/2018/02/25_Hilarious-Photos-that-Will-Get-You-Through-the-Week_280228817_Doty911.jpg?fit=640,800',
    isSelected: false,
    isFunny: true,
  },
  {
    image: 'https://memesfeel.com/wp-content/uploads/2021/06/funny-pictures-2.png',
    isSelected: false,
    isFunny: true,
  },
  {
    image: 'https://static.jobat.be/uploadedImages/pictures/regi-penxten-14.jpg',
    isSelected: false,
    isFunny: false,
  }
])

const confirm = function() {
  // console.log("User clicked the confirm button");

  const isCorrect = captchaElements.value.reduce(
    (result, captchaObj) => result && (captchaObj.isFunny === captchaObj.isSelected),
    true
  )

  // Sum of All elements
//   const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

  // console.log(`IsCorrect? ${isCorrect}`);

  emit(isCorrect ? 'correct' : 'incorrect');
  // emit('confirm', { result: isCorrect });
}

const secondsLeft = ref(props.seconds as number);
onMounted(() => {
  console.log("On Mounted ...")

  if (props.seconds > 0) {
    const timer = setInterval(() => {
      secondsLeft.value--;
      if (secondsLeft.value <= 0) {
        clearInterval(timer);
        confirm();
      }
    }, 1000);
  }
})

</script>

<template>
  <div>
    <p v-if="props.seconds > 0">
      You have {{ secondsLeft }} seconds left to decide if you're human.
    </p>

    <img class="image"
      v-for="(item, i) in captchaElements"
                    :src="item.image"
                    :key="`cpt${i}`"
                    :class="{selected: item.isSelected}"
                    @click="item.isSelected=!item.isSelected"
    />
    
  </div>
  <v-btn size="large" @click="confirm" prepend-icon="mdi-check" variant="outlined">Verify captcha</v-btn>
</template>

<style scoped>
.image {
  width: 100px;
  height: 100px;
  margin: 6px;
  border: solid grey 4px;
  object-fit: contain;
}
.selected {
  border: solid lime 4px;
}
</style>