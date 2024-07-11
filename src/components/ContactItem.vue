<script setup>
import {useStore} from "../stores/store.js";

defineProps({
  name: String,
  tel: String,
  email: String,
  id: Number
})

const store = useStore()

</script>

<template>

<li class="contact__item">
  <div class="contact-wrapper" >
    <span><b>Имя:</b> {{name}}</span>
    <span><b>Телефон:</b> {{ tel }}</span>
    <span><b>Почта:</b> {{ email }}</span>
  </div>
  <div class="buttons-wrapper">
    <button @click="store.deleteContact(id)" >Удалить</button>
    <button @click.prevent="store.editContact(id)">Редактировать</button>
  </div>
</li>

</template>

<style scoped>
.contact__item {
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid green;
  padding:10px 20px;

}
.buttons-wrapper {
  display: flex;
  column-gap: 8px;
  & button {

  }
}
.contact-wrapper{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 8px;

}
</style>
