import React, { useState } from 'react'
import './Skills.css'
import { SKILLS } from '../../utils/data'
import SkillCard from './SkillCard/SkillCard'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'

const Skills = ({darkMode}) => {

  const[selectedSkill, setSelectedSkill] = useState(SKILLS[0]);


  const handleSelectSkill = (data) =>{
    setSelectedSkill(data)

  }

  return (
    <section className='skills-container' id='Skills'>
        <h5>Technical Proficiency</h5>
        <div className='skills-content'>
            
            <div className='skills-info'>

                <SkillsInfoCard
                  heading={selectedSkill.title}
                  skills={selectedSkill.skills}
                  darkMode = {darkMode}
                />
            
            </div>
            <div className='skills'>
              {SKILLS.map((item)=>(
                <SkillCard 
                  key={item.title}
                  iconUrl={item.icon}
                  title={item.title}
                  isActive={selectedSkill.title === item.title}
                  onClick={()=>{
                    handleSelectSkill(item)
                  }}
                  />
              ))}
            </div>
        </div>
    </section>
  )
}

export default Skills