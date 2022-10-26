import { React, useState } from 'react'
import ProjectItem from './ProjectItem'
import projects from '../data/projects.json'

const Projects = () => {

    const [part, setPart] = useState(0)
    let filterAlt

    switch (part) {
        case 0:
            filterAlt = 'HTML/CSS'
            break
        case 1:
            filterAlt = 'React'
            break
        case 2:
            filterAlt = 'JavaScript'
            break
        case 3:
            filterAlt = 'TypeScript'
            break
        default:
            setPart(0)
    }

    let allProjects = projects.projects
        .filter(el => {
            return (el.lang.includes(' ') && (filterAlt === 'JavaScript' || filterAlt === 'TypeScript'))
                ? el.lang.slice(0, el.lang.indexOf(' ')).includes(filterAlt) 
                : el.lang.includes(filterAlt)
        })
        .map(el =>
            <ProjectItem 
                part={part}
                title={el.title} 
                href={el.href} 
                lang={el.lang} 
                info={el.info} 
                key={el.href}
            />
        )

    return (
        <main className='projects-wrapper default-width margin-top'>
            <div className='projects-wrapper-info'>
                <h2 className='projects__title'>
                    Projects
                </h2>
                <button className='projects__button color-grey' onClick={() => setPart(part + 1)}>
                    <div className='circle'>
                        <div className='arrow'>
                        </div>
                    </div>
                </button>
            </div>
            { allProjects }
        </main>
    )
}

export default Projects