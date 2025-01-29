import React from 'react'
import Skills from "../../data/Skills.json"
import { getImageUrl } from '../../utils'

export default function Experience() {
  return (
   <section id='experience'>
    <h2>Experience</h2>
      <div>
   <div>
    {
        Skills.map((Skill, id)=> {
        return (
        <div key={id}>
            <div>
            <img src={getImageUrl(Skill.imageSrc)} alt={Skill.title} />

            </div>
            <p> {Skill.title}</p>
        </div>
        );
        })
    }
    
    </div>
      <div></div>



   </div>
   
   
   
   </section>



  )
}
