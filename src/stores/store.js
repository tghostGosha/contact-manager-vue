import {defineStore} from 'pinia'
import {useLocalStorage} from '@vueuse/core'



export const useStore = defineStore('state', {

    state: () => {
    return {

        contact: useLocalStorage(
            'storage',
            []

        ),

        form: {
            name:'',
            tel: '',
            email: '',
            id: ''

        }

    }
    },
    watch:{

    },

    actions: {

        pushing(value) {
            this.contact.push(value)
        },
        editContact(id) {

            let result = this.contact.find((item) => {
                console.log(id, 'id')
                console.log(item.id, 'item.id')
                if(item.id === id) {
                    this.form.name = item.name
                    this.form.tel = item.tel
                    this.form.email = item.email
                    this.form.id = item.id

                }

            });
            return result

        },
         deleteContact(id) {
            this.contact = this.contact.filter(currentId => {
                return currentId.id !== id;
            })
        },
         editContactHandler(id){
            console.log(this.contact,'обновить')
             console.log(id, 'id')
            let result = this.contact.find((item) => {

                if(item.id === id) {
                    item.name = this.form.name
                    item.tel = this.form.tel
                    item.email = this.form.email
                }

            });

            this.form = {}
        }

    },

})
