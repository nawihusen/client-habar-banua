// import { get, post, del, patch } from '../http'
import { get} from '../http'



export const fetchExperiences = async () =>{
    const res = await get({
        url:'/experience'
    })
    return res
}

export const fetchInfo = async () =>{
  const res = await get({
    url: '/owner'
  })
  return res
}


// export const fetchPartai = async () => {
// 	const res = await get({
// 		url: '/dapilcaleg/partai',
// 	})

// 	return res
// }


// cara ambil yang di sini 
// import { getExperiences } from '../../services/portofolio/portofolio.js'
