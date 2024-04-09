import axios from 'axios'
import applyCaseMiddleware from 'axios-case-converter'
// import { useAuthStore } from '@/stores/Auth'
// import { useLayout } from '../layout/composables/layout'
// import router from '@/router'
// import { Toast } from '@/utils/swal'

const instance = applyCaseMiddleware(
	axios.create({
		baseURL: import.meta.env.VITE_BASE_CORE_URL,
		headers: {
			Accept: 'application/json',
		},
	})
)

// add interceptor
// instance.interceptors.request.use(
// 	function (config) {
// 		const token = localStorage.getItem('access_token')
// 		const isAuth = () => {
// 			return !!token
// 		}
// 		// Do something before request is sent
// 		if (isAuth) {
// 			config.headers['Authorization'] = `Bearer ${token}`
// 		}

// 		const { authentication } = useAuthStore()
// 		const updatedToken = localStorage.getItem('access_token')
// 		authentication({ token: updatedToken })

// 		return config
// 	},
// 	function (error) {
// 		// Do something with request error
// 		return Promise.reject(error)
// 	}
// )

// // Add a response interceptor
// instance.interceptors.response.use(
// 	function (response) {
// 		// Any status code that lie within the range of 2xx cause this function to trigger
// 		// Do something with response data
// 		return response.data
// 	},
// 	function (error) {
// 		// const router = useRouter()

// 		const { setActiveMenu, setActiveParent } = useLayout()
// 		if (error.response.status === 403) {
// 			setActiveMenu(null)
// 			setActiveParent(null)
// 			const { forceLogout } = useAuthStore()
// 			return forceLogout()
// 		}

// 		if (error.response.status === 401) {
// 			Toast({
// 				icon: 'error',
// 				title: 'Anda tidak punya hak untuk mengakses halaman ini',
// 			})
// 			return router.push('/welcome')
// 		}
// 		// Any status codes that falls outside the range of 2xx cause this function to trigger
// 		// Do something with response error
// 		return Promise.reject(error)
// 	}
// )


const request = (config, options) => {
	if (typeof config === 'string') {
		if (!options) {
			return instance.request({
				url: config,
			})
		}

		return instance.request({
			url: config,
			...options,
		})
	}

	return instance.request(config)
}

export const get = async (config, options) => {
	return request({ ...config, method: 'GET' }, options)
}
export const post = async (config, options) =>
	request({ ...config, method: 'POST' }, options)

export const put = async (config, options) =>
	request({ ...config, method: 'PUT' }, options)

export const patch = async (config, options) =>
	request({ ...config, method: 'PATCH' }, options)

export const del = async (config, options) =>
	request({ ...config, method: 'DELETE' }, options)