import React from 'react'

const SkillsList = ( { list } ) => (
    <ul className="skills__list">
        {list.map( (item, index) => <li key={index}>{item}</li> )}
    </ul>
)

export default SkillsList

