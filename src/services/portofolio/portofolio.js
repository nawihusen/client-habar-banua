// import { get, post, del, patch } from '../http'
// import { get} from '../http'


export const getExperiences = async () =>{
    // const res = await get({
    //     url:'/experiences'
    // })

    // return res

    
const experiences = [
    {
      company: 'MNC Group',
      role: 'Backend Engineer',
      date: '1 january 2023',
      desc: 'melakukan berbagai hal seperti hal hal berikut. dan juda ini iut. dlanafjkdbkja'
    },
    {
      company: 'MNC Group',
      role: 'Backend Engineer',
      date: '1 january 2023',
      desc: 'melakukan berbagai hal seperti hal hal berikut'
    },
    {
      company: 'MNC Group',
      role: 'Backend Engineer',
      date: '1 january 2023',
      desc: 'melakukan berbagai hal seperti hal hal berikut'
    },
    {
      company: 'MNC Group',
      role: 'Backend Engineer',
      date: '1 january 2023',
      desc: 'melakukan berbagai hal seperti hal hal berikut'
    }
  ]

    return experiences
}

// export const fetchPartai = async () => {
// 	const res = await get({
// 		url: '/dapilcaleg/partai',
// 	})

// 	return res
// }


// cara ambil yang di sini 
// import { getExperiences } from '../../services/portofolio/portofolio.js'
