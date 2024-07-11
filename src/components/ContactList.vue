<script setup>
import ContactItem from "./ContactItem.vue";
import {useStore} from "../stores/store.js";
import { gsap } from "gsap";
import {computed, ref} from "vue";


const store = useStore()
console.log(store.contact, 'storelist')
const query = ref('')

const computedList = computed(() => {
  return store.contact.filter((item) => item.name.toLowerCase().includes(query.value))
})

function onBeforeEnter(el) {
  el.style.opacity = 0
  el.style.height = 0
}

function onEnter(el, done) {
  gsap.to(el, {
    opacity: 1,
     height: '100%',
    delay: el.dataset.index * 0.15,
    onComplete: done
  })
}

function onLeave(el, done) {
  gsap.to(el, {
    opacity: 0,
    height: 0,
    delay: el.dataset.index * 0.15,
    onComplete: done
  })
}
</script>

<template>
  <div>
    <label for="search"></label>
    <input v-model="query" class="search" id="search" placeholder="Поиск"/>
  </div>

    <TransitionGroup tag="ul" name="fade" class="container contact__list"
                     @before-enter="onBeforeEnter"
                     @enter="onEnter"
                     @leave="onLeave"
    >
    <ContactItem
        v-for="item in computedList"
        :key="item.id"
        :name="item.name"
        :tel="item.tel"
        :email="item.email"
        :id="item.id"
    />
    </TransitionGroup>

</template>

<style scoped>
.container {
  position: relative;
  padding: 0;
  list-style-type: none;
}
.search {
width: 100%;
  max-width: 96%;
  margin-bottom: 20px;
}
.contact__list {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}
/* 1. объявление transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. объявление enter from и leave to состояний */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. убедитесь, что элементы удалены из потока layout,
      чтобы можно было правильно рассчитать анимацию перемещения */
.fade-leave-active {
  position: absolute;
}
</style>
