// import { useMutation, useQuery } from '@tanstack/vue-query'
import {  useQuery } from '@tanstack/vue-query'
import {
	fetchInfo,
    fetchExperiences
} from '@/services/portofolio/portofolio.js'


export function useFetchInfo(){
    return useQuery({
        queryKey: ['GetInfo'],
		queryFn: async () => await fetchInfo(),
		keepPreviousData: true,
		refetchOnWindowFocus: false,
    })
}

export function useGetExperience(){
    return useQuery({
        queryKey: ['GetExperiences'],
		queryFn: async () => await fetchExperiences(),
		keepPreviousData: true,
		refetchOnWindowFocus: false,
    })
}

// export function useFetchCaleg({ params, enabled }) {
// 	return useQuery({
// 		queryKey: ['Caleg'],
// 		queryFn: async () => await fetchCaleg({ ...params.query }),
// 		keepPreviousData: true,
// 		refetchOnWindowFocus: false,
// 		enabled,
// 	})
// }

// export function useAddCaleg() {
// 	return useMutation({
// 		mutationFn: async (payload) => addCaleg(payload),
// 		onError: (error) => error,
// 	})
// }
