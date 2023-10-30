import { useEffect } from "react"
import { useState } from "react"

export const Hooks = () =>  {

    // darkmood

  const [mood,setMood] = useState("light")

  function handlechanges () {

 const html = document.documentElement

 console.log('html',html)

 if(mood == "light"){

  html.classList.remove("light")
  html.classList.add("dark")
  setMood("dark")
  localStorage.setItem('mood',"dark")
 }else{

  html.classList.remove("dark")
  html.classList.add("light")
  setMood("light")
  localStorage.setItem('mood',"light")
 }
  }

  useEffect(()=>{

      const currentmood = localStorage.getItem('mood') || 'light'
      setMood(currentmood)
      const html = document.documentElement
      html.classList.add(currentmood)

  },[])

  return{handlechanges,mood}
}