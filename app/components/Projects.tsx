import React from 'react'
import Heading from './Heading';
import Card from './Card';
const data =[
    {
        id:0,
        title:"Static Interactive Resume",
        desc:"based on html,css",
        img:"/milestone 01.PNG",
        tags:["CSS","Typescript"],
    }, 

 

{
        id:1,
        title:"Todo List",
        desc:"A React & Typescript based app for managing and ",
        img:"/pi.PNG",
        tags:["React","Node","CSS","Typescript"],
},



];
const project = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10  xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}

        />))}
      </div>
    </div>
  )
}

export default project
