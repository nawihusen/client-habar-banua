// import axios from "axios";
import { defineStore } from "pinia";
import router from "../router";
import { Toast } from "../utilities/swal";

const useAuthStore = defineStore("auth", {
	state: () => ({
		user: {},
	}),
    actions:{
        async login({username, password}){
            console.log(username, password)
            try{
                // const {data} = await axios ({
                //     method: "POST",
                //     url: import.meta.env.VITE_BASE_CORE_URL + "/auth/login",
                //     data: payload
                // })
                const data = {
                    "token":"123456789"
                }
                Toast({ icon: 'success', title: 'Berhasil login' })
                this.user = data
                localStorage.setItem('access_token', data.token)
                router.push('/')
            }catch({response:{data}}){
                Toast({ icon: 'error', title: data })
                throw new Error(data)
            }
        },
        
        async logout(){
            try {
                // await axios({
                //     method: "POST",
                //     url: import.meta.env.VITE_BASE_CORE_URL + "/auth/login",

                // })
                this.user = {}
                localStorage.removeItem('access_token')
                router.replace("/login")
            } catch (error) {
                return console.error();
            }
        }
    }
})


export {useAuthStore}

// async login({ number, password }) {
//     console.log('login', { number, password })
//     const formData = new FormData()
//     formData.append('number', number)
//     formData.append('password', password)
//     try {
//         const { data } = await axios({
//             method: 'POST',
//             url: import.meta.env.VITE_BASE_CORE_URL + '/auth/login',
//             data: formData,
//         })
//         Toast({ icon: 'success', title: 'Berhasil login' })
//         this.user = data
//         localStorage.setItem('access_token', data.token)
//         router.push('/welcome')
//     } catch ({ response: { data } }) {
//         Toast({ icon: 'error', title: data })
//         throw new Error(data)
//     }
// },
// async logout({ token }) {
//     try {
//         await axios({
//             method: 'POST',
//             url: import.meta.env.VITE_BASE_CORE_URL + '/auth/logout',
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         })
//         this.user = {}
//         localStorage.removeItem('access_token')
//         router.replace('/login')
//     } catch (error) {
//         return error
//     }
// },