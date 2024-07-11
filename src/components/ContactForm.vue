<script setup>

import {useStore} from "../stores/store.js";
import {inputMaskRender} from "../utils/mask.js";
import {onMounted} from "vue";

 const form = {
  name:'',
  tel: '',
  email: '',
  id: ''
}


const store = useStore()
//===Ставим маску при монтировании компонента
onMounted(()=> {
    const input = document.getElementById('tel')
    inputMaskRender(input)
})
//===Добавление контакта и присвоение id
const addNewContactHandler = ()=> {
  store.form.id =  Math.floor(Math.random() * (1000 - 0 + 1)) + 0;;
  store.pushing(store.form)
  store.form = form
}

</script>

<template>
  <FormKit
      type="form"
      id="myForm"
      incomplete-message=" "
      :actions="false"
      @submit="addNewContactHandler"
  >
    <FormKit
        type="text"
        name="name"
        id="name"
        validation="required"
        v-model="store.form.name"
        placeholder="Имя"
        :validation-messages="{ required:'введите имя' }"
    />
    <FormKit
        type="email"
        validation="required|email"
        validation-visibility="dirty"
        placeholder="Email"
        v-model="store.form.email"
        :validation-messages="{email:'не валидный емейл', required:'введите емейл' }"
    />
    <FormKit
        type="tel"
        id="tel"
        placeholder="Телефон"
        validation="required | length:18"
        :validation-messages="{
         required: 'введите телефон',
         length: 'Не хватает цифр'
        }"
        validation-visibility="dirty"
        v-model="store.form.tel"
    />
    <FormKit
        class="create-button"
        type="submit"
        label="Создать контакт"

    />

    <FormKit
        class="edit-button"
        type="button"
        @click="store.editContactHandler(store.form.id)"
        label="Обновить контакт"
    />

  </FormKit>

</template>

<style scoped>

.formkit-form {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 20px;

}
.create-button {
  grid-column: 2/span 1;
  grid-row: 2/span 1;
}
.edit-button {
  grid-column: 3/span 1;
}


</style>
