import React from 'react'
import Card from './Card'
import virat from '../assets/virat.webp'
import sachin from '../assets/sachin.jpg'
import dhoni from '../assets/dhoni.avif'


function CardsProfile() {
  return (
    <>
        <Card person = {{ name : "Virat", imageUrl : virat , size : '100px'}}/>
        <Card person = {{ name : "Sachin", imageUrl : sachin }}/>
        <Card person = {{ name : "Dhoni", imageUrl : dhoni }}/>
        {/* <Card name= "Virat" imageUrl = {virat}/> */}
        {/* <Card name= "Sachin" imageUrl = {sachin}/> */}
        {/* <Card name= "Dhoni"/> */}
        {/* <Card name= "Dhoni" imageUrl = {dhoni}/> */}
        {/* <Card/> */}
    </>
  )
}

export default CardsProfile