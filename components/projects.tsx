"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useSectionInView } from '@/lib/hooks'

export default function Projects() {
    const { ref } = useSectionInView("Projets", 0.5)

  return (
    <section className='scroll-mt-28 mb-28' ref={ref} id='projects'>
        <SectionHeading>Mes Projets</SectionHeading>
        <div>
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <Project {...project} />
                </React.Fragment>
            ))}
        </div>
    </section>
  )
}
