<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'SideDrawerComponent'
})

const toProfile = async () => {
  console.log('print profile')
}

const toNews = async () => {
  console.log('print news')
}

const toShop = async () => {
  console.log('print shop')
}

const toCalendar = async () => {
  console.log('print calendar')
}

const toOwner = async () => {
  console.log('print owner')
}
</script>

<template>
  <div class="side-drawer overflow-y-auto w-20rem pl-6 pr-6 bg-red-600 h-full">
    <nav>
      <div class="w-full h-full flex items-center justify-center">
        <img src="@/assets/images/default.jpg" alt="image" class="rounded-full p-4 w-40 h-40" />
      </div>
      <div>
        <ul class="">
          <li>
            <a
              class="flex items-center justify-start hover:text-white cursor-pointer"
              @click="toProfile"
            >
              <span class="material-symbols-outlined pr-2"> person </span> Akun</a
            >
          </li>
          <li>
            <a
              class="flex items-center justify-start hover:text-white cursor-pointer"
              @click="toNews"
            >
              <span class="material-symbols-outlined pr-2"> breaking_news </span> Habar</a
            >
          </li>
          <li>
            <a
              class="flex items-center justify-start hover:text-white cursor-pointer"
              @click="toShop"
            >
              <span class="material-symbols-outlined pr-2"> store </span>Toko</a
            >
          </li>
          <li>
            <a
              class="flex items-center justify-start hover:text-white cursor-pointer"
              @click="toCalendar"
            >
              <span class="material-symbols-outlined pr-2"> calendar_month </span>Kalender Acara</a
            >
          </li>
          <li>
            <a
              class="flex items-center justify-start hover:text-white cursor-pointer"
              @click="toOwner"
            >
              <span class="material-symbols-outlined pr-2"> supervisor_account </span>Owner</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style>
li {
  padding-bottom: 8px;
  padding-top: 8px;
}
</style>

<!-- <script setup>
import { defineComponent } from 'vue'
import { useAuthStore } from '@/stores/Auth'

defineComponent({
  name: 'NavBarComponent'
})

const toNews = async () => {
  console.log('print news')
}
const toCalendar = async () => {
  console.log('to calender')
}

const toAnnouncement = async () => {
  console.log('to announcement')
}

const onlogout = async () => {
  console.log('click logout')
  const { logout } = useAuthStore()
  try {
    logout()
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="flex object-top h-12">
    <div class="w-1/4 flex items-center justify-center">
      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AkgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQQFBgcDAgj/xABHEAABAwIEBAQFAQMJBAsBAAABAgMRBAUABhIhMUFRYQcTInEUMkJSgZEjU2IVM0NygrHB0fAkY6HCFiU0NTZUZHSio7II/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAIDAQQFBv/EADARAAICAQMBBQcDBQAAAAAAAAABAgMRBBIhMQUTQVGBIjJhcZGhwRSx0SNCcvDx/9oADAMBAAIRAxEAPwDZdyTJEnZShwI6DvgH0wII+Wfp98EctMfwfb3wf/Kf/swAGI4GJkjmT19sBJlUkEkeojgodB3wHrqjlr+3+HBHKIjfT+774ABMpjYj5CeCR3wm2mIOmfl5z19scaqrpaVOqrfZZSo7ea4lAd774iK3OeWKEq+JzDbQpI30VKVqH8OlJJwBPSZM7qPzEcFe2InMWZrPlmmTUXiubppH7JJlS1DoEjc/pih3jxVXcVGgyHbnq2oVsKt5spZY7weP9qPzwximcEXJrMVWi81iqytSUl15RJklIVAnkJxDvIb9mefIlteM+BsVx8dbQyst2+z1j7YMhTy0tyesCTH6YfM+K9Wmnbq7jky8N0bzaXDUsp1pUgiQQSAOHfHzsZ54+msleI2UWMr2ahqL2y1UU9Awy6h1C0BK0tpBEkQd+YxMiTWV872DNB02i4INUkfzDw0LSPY8fcTixCAAAk6QZCeYPU9sUO/ZUyfnqayw3Kjp7uj1IrLc6nUFctaUnf32PfEXT52zDkx0W/xAtzz1On0t3mkTqS4nkF8p/Q9jxwBqB+qdwfnj6vbC7yCCNUbK5AdD3xW7dn3KVwbQunzBQI1bgPvBot/hcYm6avoatRRSVdNUK4+W08lU/wAWxwA42gAAhIPpB+k9T2wn3TuD88cVe2F/tSDtq+/thOHPTHP932wAu+qZGuPm5R098JtCdIIAPoB4pPU9sEctHfR1/iwfnVO2r952wAHTO6Vk8yAYODCyBt5mn+GOGDABIgcdM7E8Se/bB907R80cv6uCSSTqBJ4r5KHQd8A5fTHyz/R++AF3kbCY2HKO/fCDgIkj6SeJ9+2COUbT8vU9fbGCVt/zhUZlv95tVzdWbZXqYFBuWnGklQjQNiYTvz47ziM5xgsyeDMYuTwh34+ZaurtwRmFsKft6GUMuBO/wxBPL7SSN+p9sVzLCMrWzKzV0vdOy7VOLWEoV61OaVEbJO3TfGhXnxctT+VWXbUwmputWC0igeGoMGPUXPuTB269oMVnJWSEMWyhzSl2nra5NUp9VtLUpLDS9LugHcrEyOXAb4q1FPfR27mvl+xKuex5xkWlZznma0u1WXaFq02lttSmkNR51QEkghsAcZ/q+5w8zXkSyZdsS61Xk11U6leqvuleptc6QU+U2NlrIOwP24tl/wA5ZbyzT3GgaU9R1hUpTTFKjUXPORqS419IBME8PUD13zPM/ixmWqIo12+jt76UpLil04W4FlO6gFyEyDwiQDxxmqmqn2YLAlOU+WWvJlioKrJFypXGKBFXdXKhujUooS56GkwEczCwomMWl2ittVWssVjFPXNLqKNlNKaBqKNYb81SlL4qC0iOx254+cf5buiW2G0XCpQmmKiyEOFPlk8dMcJxqVks9gdtlJck+Jr9Dcn6dhypQ5VpJS4lIISQSCdJkCZjfFxAkbBkGy37KL1zTTGmubq6xdK9TuFGkpcUlCYG0ek7Rh2WM+ZOYT5NwZzJQ+Xqdt1aZqICQV6JkqA1RxP9XFeueasz2S5U4Zv9LmWjbcaf81tIbKtBV6JHWTPE7jFny7myyZtzXbqxypcorixTu07NuqGt/OcMqdQ4No06hBg/44ymTlXOKzJCWFfhdnmldcetFFQVbSS4/TrV8OpIG5UCgpCkjr+oGK5lKxW+9eINNcckUL9usNpe/b1q3FqNSoH5UhROxG0faZMEgYd59tVrzLS3u7uBinNAtDdPUMsKbdUsnR8O82eKhAOofSpJ4Ye+HniHa7NYDaL6lm3v21iWXG0emqbHQc3CePUmeuMkDXTMkECY9QHADt3wn2x/Zngf62Pm3MufsyXOuN6oq6otlIwsfB0rSzpieKxwUT3nttj6NpnfPpWnSB+1bStSR9ZInbAlKEo9TptB+bTPHnPT2wu8meMeqOAHbvgBOqZGqI1co6e+E5CBAB2B+g9TgRPQmPSW45TE4TBseIJPUE74TACxvGkAjco5JH3YQco3n5f9574NoEatM+meM9+2A/VP9sD/AJcAeH326ZhyoeXDTSSta/tA3I9sYZ4ZOuVtNdbgdKRU1zi3DG+4SY47fMcXLxfzE4zQNZXtZS5druPKKEq/mmTxKvfce2o4qFC9aMj1TNmqKh0IqUio+IXugKMIIMcB6AQe5xyu1pb6XTHmT5x8F1NrSrE976DHN+WtalZhy8EqX6lVNOkbOAfMoDrxkfnjx52HNt2qLLSZfyqalN1qK8vtqbUkBtGkSFk8tQ1chA36Yul2cqxR/E2gIqCUhXllXpcRxVpUOCjPHeeEb4zm83ysyjnt6uy82mnddYHmNKRKFlYk+n3g7cxinsjVzsj3U+cdPPjwZZq6UnuiP8w2t/IWaKB5mvbvl6qmyKulU2VOJWYgpIk77Rz24QdoG62iurrrU12YVtUVQ45C2QkghQEaQN+nfqcaA1bV5My+zf3HW6/MV3CnHK5bmryEkAQ2QFSolSRIHEwNsVI+uobPm1fx3xHkgkSrSpA9U7Kkhvc8d+5x1nVHdvS5xjJRVPbJRkuM+PT1wRzVjt6UAhBcn6lKmf0x6csdAsEBopJ5pJxN0dC2wypytqEB3z3EeSpXyJCUkbcDJUd4PDbrjzcaVK6GW322akABPlqPHVvOwEaefGca3cXN53no32r2YobP06z6Y+vUr5sFZSoLtrq0L0kamC6kr5xI/B5YfWSloc5ZnorZcCxYQlogqbK1Kfd5BJWSEk7QJjY8SRhaz/ZnCp8CncYYQlplaCkrGoKQBwgakAzvzw2uNNT1+hlpBafaQQHCVapTEagQI4jh1BHPGwntjuZx5Qd9sqYcPwSbcX8OSz5puN2stI5lrOannX6ZwVNvuLZBTVCNB8yfmIRwPzAgAyDiGyfS2K73P4/N9W5T25n+YpG2nFKePUlAMDb8+2GFbfLvmpyko8wVRcRbG9CGjsVmd1KP1HgCew7zM2ay3G8vKp7VRrfU2mVBAASgcpJ2Hb2PTE5S8jGl0SnFzteEi55myvlK65AvFzyw26tdI2VBalOpgohShpXH04vmR7im65OtFalYhVIgLUP6NQGkgfkEYr9gs1fZvDbMNNdafyXVtVCwgqBlJajkT0OKr4KZkFtrHcp1y4DilPW9az6SSPUj8xI7z2xlM174Pc5J5SeMmzbkxpE8dHIj7sA5EHUDsD+87HAY0njon+1P+WF3kzEx644R274kawcNisp7QdsGATAiI5ScGACd51STsV/d2w1utexarbVXCplLFIyt1UblASJI7k8sO95gpAI4p5JHUd8UTxrqF0/h1X+UpSQ8tpsqSYKk6wTP6R+cAUPKCau63KpzPcCn465FakBYkNNzACenCPYDFd8YDN7of/af86sXTLdLX1Vmta2mFfDstBK/JJAGnvO/CY4b4o/iZb643em1oKz5J2Qkwn1q6/rjg6ffPtB2T+J0LElQoRIPL2arhYz5TS/OpFH10zh9J9jxSfbEq/XsZjzI5dWmFtNNtIAQsz646+84q38n1f8A5dz9MWPKrBNGYHrW6R7RGOlqKq45sivafH1Nnsetz1cY2+7HMufgTr1XWPW5u3oWpSEPpWyCf5pRO8dtgY6icSzl8duF2VmGsU0tbxTTobbhQZQQopgjj8pBnrtA2xD3dwUlmeU0FBS/2fDgFcfyQD+vYYb0lHUOU7SEtBdPSqQ68ZSAsJSRpgnedfPt+LqY93FQb5KO0bP1d1morjiOV/vqWxy90gAdUG2mivSl1xE6uPAAHoePTeBBLG6XfW2PKUgOMuJdW2qnIW2UkKGodNuEzH4lg/XfHBmpaOsv1Lix6kgtFQSNYn6hH/GeYIbMv/DhxxSCNDaU6z8zxmZCTuANgmdzICtwAm45pwvzz12JrdLLXwX0ocLgWoieMCEgN99zjhTalVbq1oUkLSA2CPSAAAYPuMcqhFW89VoqEf8AaT5rJVwCD5iZEchrPufcHHVgLRamif5xoqRq66SI/wAvYjpim2CmnFdcHS0GpnpLIWyXsZz9Fh4+pH3pPwlfTV6OBOhwf67f3Y0vw3zjQ5aRV01xacLNQsOpdZRqKSBEEcY4RHfGdXxSaiyLcHIpI95jEjb6GufoKZ1NG+oLaSoKDZIMjFFVmytbnjHB2tfTVPUzivdmlJev/DdrhfqDMOSL7VW1TimkUrzataCkz5c/44xZnJl6vdmXebOloKoVlbaw7pcCkQowI/TviYyvVXW3F22PtOM2m4kNVqnWyA2hQ0qWFH5SE8ztsJGNWsdxypY7e1b7fd7ehlBPzVaCVE8STO5xsQnGzlPJxb0tNGVS53dPl/J4yJmH/pPlehupKQ+tGh8gQEuJ2UI5Sdx2OJ/pAiOCfs7nGZ+CSm22szUNKUrp2LqtTISZRpIgEfhIxpe225IJ2J+vscWnNCEHcpWo9RzwYXUBxdKTzSOWEwAu0CArTOwPEHv2xTvF2gcuHh7eENQXGkIfPQhCgokfgKxcZ56pn6/u7Y8PNNvMuMvISptaShaVCQkEQQes4AybJtW9S2NN2TUUgonadKnmXUlUnSQU7GY9J26joraKZpqrOFnqLmWU0q7WwtKQgjQ7HrKY5Ea1b8N098Vu/WmvyVmSpsvxFQ3Qvy5RrDqkpcbJ2B3gnke/vjSfBxxtdvqqNw+pVW46EwkgpS20DIO/BRH57jEHy8G7Su7q76L5MhqZ80LQtSm9SdQB4b8fbHfLKyn4lmElaHlABW3HYH9caz4g2O30ia6qebp2qdNC0ijDSUhSXg6owBxMgpBPJIOMeKvgbsHFbMVQ0qPIKHDFNsXtwvn9Dp6OyNlneS4TzF/DcsZ+pO1IaU04w7qWlxMeUVCVTw35GYG3Md8c7tbLtSUAqmXHX6NpOl3QkpWJiV6SAdJI/wBccc3Kh2nNQ67TCpYUElUu6FAjhvB/uPCdiJLqkv610iBSinbedJBkFatjESAVKkc9O2474ujKM0pI5F9VumnKifHn+CIowgMo8mrKQofKplR4cjpkH9MLVmWVh2qASkfIGVgfiQkA94OPFrClhtlTYp3KeEL0p8tQ0zx5knVz6DCPu+ZUIo/KbdDzqQtS0a1FGpJ4wVAekzE7e2JmsP7HaK2opnrg6FNUShDL72y3CTEp5aRJPCCfzCF9oshtiAloFITtqgEys8DJ3J25gbROH90zGjTu15qgpKSpmpWmBv8ALHADYQYnHiw5ZuucqpVPb2n2KZglxx+qSUpRInQnjJUTPHaBwAE4wlyT3SklBvj7Irt0OixqSkfzjgSkAcd+X6Y2Sz0xorRQ0p4s0zbZ9wkA4zCntLlyzWm1uNFLNs1LqgD8qk/TPuAP1x2yt4kvU4RS38Kfa2Aqk/On+sPq9+Pvjz/aOnt1Ne2vqnlr59P2O3qL64XqOcqKUU/l1+7NCzP/AOG7sf8A0T3/AODj57xvt6rKavyjc6mifbfZXRPQttUj5D/qMYlYLPWX670trt7euoqV6U9Ejmo9gJP4xPsCMo1TUuufwaGvacotG5f/AM90K2MpVtW6ghFVWHQBxUEJAn2kkfjGpmZVJBkeqOCvbEdl+001hstHbKMwzStBsOkQVHnI6kyfziR/GmPp/d98d40BRqgRoA5AnfBhOP0au88cGADfUQQAoDdPIDqO+Ab6Y3n5J+r3wADSAAQkHZPMHqe2D7p3n54+r2wBTfFXLTeY8qVCkImtoQqopnPqCgJKB2IH6ximeGNwYeyHdvMacU+pbyg4lPpSfISCCeXM9I/TGzESQFaTtG/DT0PfGCZFza3kh6+WwW5D4buDqS4p3RCQdMHYyBp/4nGGXU7m9kfH8FaLzSk6lPJMCSVKmBzwuVrdTZ0zI1aquvNBSKSotGPU+sDYJnaeftOJLOmeq7PDlJQN07lDaFOaAhpJWqqdEbTG5EphI5mdzGLFWeHrNHlE/Gt1SL8V03wbbCilNOpxzQhOrgpXEqgmIHuYxjg2dTrZWx2JYRT7za6ux3H+QsxpIcaJLLv9HUJMQoE84j2k45VjVUUJWzVOKdQQBrUSCgCANMFO0DlzOJTNj99Vdaejz6Ha212taqdLtLLbbrkAypzSfVCk8v8AHECE1tOubY58VSk/s23lalgchqESf9RiqUJQeYP0NzT2U6qvbqYcr+5e96rxHKP+sX2/iwmnfdIBqdROnSCT6Y4mOZV2jjjil00b6vhG1uVAlv4gvQHQTIlESI2+UjhhwlVzUgl/LtyIGyimmUoD8xhEP1y1eXS2O4FUxHkFInviMr5xXMfuF2fod2f1HH+LydaCn+LqGG7vUuJplK/2hxptJKQZACAREiQZ/SedzFxYyc1UZX8P6568Xe6qQppQSgikTp4kiAVRvwEDjw3rNJlbMVzM15atNIPmJUFOR+u35jEBk2vvtozURlNKqitWV06UadSXUE/VyjYGZHDDT6hWyktyePL+TV11elgoqhP4t+PoWW/W13wxuNFouaa+prqcquVIZkHf1g9NzBO8g8jtmJ2xsqMjXD+Sbxd6+oTd7utILxp1+appwONkp9J9Utk7AbDbpjLrtbgipX8ElbgCC442lJPlJHMxwG+NhQipOSXL6nPcm0kGX7muhq/LdqXW6Go/Z1baDs42RCh7xz4jG2+A+WmqKwLzA+gfE1pUhC+bbIMbe6gZ7AY+fYx9h5YpBQZctNK3H7CkaSkn6fQJnGVFJ5QyyT31QANUSE8iOvvhBEJIJIPyE8VHoe2DaCIOmZKeZPX2wpmVSZJHrI4KHQYyYEJSDuog8wOWDHoEgABQA5A8sGAE76pB+v7u2D/hHH/d4XeTIGqNwOAHbvgH0xv9s8/fABG8BO/EI698Y5dfCCvuOa6x83Nluy11SqoWpM+cSSSUARHEkTMc45Y2LbSZJ0zuec/5YNwTOxj1AcAO3fAyVDN9qyvbMlGjuiU0NtowDTrZ2dp3RuktniVk/rvPPGb5YzZccv5dFVmC33Fxh952rttxflSXXinQnWD8vEqmd5J344mvFOz5gq85W2uTZai+WSnQlSKJtfpKwTqCwAdztvG4gdsPn/ExwULtNmfIF1pqNSdK0KYLjejnIUlIjAwXGqRar5RLtjTzLrVzaU4laVBSXAFILipHH50j8RjOl5FonWmLtbHHrbX1l3acYRTGG2aZbhDZ0RE6Uau0744Wm25eu1wFb4Z5m/kq5FC0ptlcklCgoDUlIVJEwJjVw24Yl271nix1T68xZdfujAeS40u1KDjbCkpKQlKACQNwd4iO+BlPBI01dm1thippc2Wqrt7ywyy/X29TS1ulakBEIPVPHgcQQYzncsxu2l24WmmqTTt1a1op1qA8xQBAk8tX5jEbbM7tO0bLGd6640z9NW09U0ty3wFhuSUQmIJVJmOeHrmdcrv3p2+UlyuLj71qFJ8FTUSg62vYhQcmAQRHCJ3nFVtNVq/qJPHmZjOUfdZG02XWL9mhFpu+Z6+vpKildKV/DqpEtuiY9CtlAaCduO2NBdtBy5QWoWeiqGlNPIL9Fa2EFFQpSd1urO4QNK9yeYHTFJrcw3S5XiyVVhs13q1Wx15YqbwUtlwOEenbYgDbrjOrznLMlVRptFRc30UdOC0GW1wCkEwlShusDhuTwGFTq9yvHHgsCSl1kXO7ZiteTaO42zLNea+rrn9TTlI4pDdEhJlqNvU5uQoDYjY9774TKslzsdVWtvmru9Z/3y5VJBd1nigp/d8Y5fkQPn6z2m8VbrNRb7TXViELCh5FOtYVB6gHpjUcq2nM9T4g2+8UeW6qxNqVqr1PKIbdbO6gUkJ3PTfeDynE23uSxx5mOMHbMvgk/U34u2GqpqW3PK1ONPSVUw56Y+YcwJEcO+NnabS0y20gSlKQkD95A4497QDJ0zt1J79sBPzTP8ccv6uJGBJ56uxX9v8ADhY5aY07x+774IMgbao26R/ng2gROkn0zxJ79sAKASJ0BX8U8cJhDE+pKp5wdsGAFgQBpIAMhHNPf2wdZ3njH9J7YUphakySUp1FXNXb2wgE+XGxc4fwe2AAkyCCJ4BXIfw++DlATAHBJ4oPU4QmEFcCArSU8j398KRClpmdAknmrscAHIyCQeIHFfcYJP3CTtq5R9vvgAkoEwViQR9HthJ9BXAjVpKeXv74AqmbPD+w5lQpx2mFFXAy3WUw0ONnkVR8wnrv0IxUKXMWYvDpbtJnCjfuNtcclu7UqiSeAAVPDYcNjufmxrZEKWkkkoEk/d2OEKA4EtrAIdTvIkAdPbAFdoc/ZWrmEuUl9oF6t1JqXg2tKeJ2VB4TinXPNdkS/VvC40yAXFKSFuCSCSQdIMnaDH92LZcPD3KNwUX37DSJWpWklmW9+vpI3xypfDXJ1G4paLFTuFmD+2KnAfwTGNPWaKGqSjN4wXU3Op5SM2bv12zJULt+SaJ990qHm17o0tNd9/1336A4vOTfC6zWEJqrklFzuh9S33xLYJ4hCTtPc78eGLzS0rNM01TUrTbDWmUJaSEhA6ADHsEFCVhIAUrSE8geuLNPpatPHFaI2WyseZMUCEpCfQB8o/d++DYg7ekn5RxUevtgPp8yd/L+b+P3wsErCQYJTqCug6Y2CsQn1E6gSRBUOCuwwnTkU8D+798AMpQoCAo6QkfT3GA7Bw8fLO4+73wAQIjQYmdHOevthe8yTxV9/YYNJ16NRkp1aucdPbCDcIMQFmAPt7jACyeThSOh5YTATBIIBI5xxwYA/9k="
        alt="bpk"
        class="flex items-center justify-center h-full rounded"
      />
    </div>
    <div class="w-1/2">
      <ul class="flex justify-around items-center h-full w-full font-bold">
        <li @click="toNews" class="hover:bg-red cursor-pointer">News</li>
        <li @click="toAnnouncement" class="cursor-pointer">Announcement</li>
        <li @click="toCalendar" class="cursor-pointer">Calender</li>
      </ul>
    </div>
    <div class="w-1/4 flex justify-center items-center">
      <button
        class="rounded flex justify-center items-center bg-red-600 w-20 h-3/4 font-bold"
        @click="onlogout"
      >
        <span>logout</span>
      </button>
    </div>
  </div>
</template> -->
