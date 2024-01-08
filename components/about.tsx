"use client"

import React from 'react'
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

export default function About() {
    const { ref } = useSectionInView("A propos")

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>A propos</SectionHeading>
            <p className="mb-3">
                Récemment diplômé d&apos;un{" "}
                <span className="font-medium">Master 2 en Développement web et mobile ainsi qu&apos;un Titre RNCP de Niveau 7</span>. Passioné par
                la technologie et l&apos;innovation, j&apos;ai acquis une expertise en développement d&apos;applications web et mobiles{" "}
                <span className="font-medium">Ma motivation ?</span>{" "}
                <span className="italic">Transformer des idées innovantes</span> en solutions concrètes. 
                Je suis à la recherche active <span className="font-medium">d&apos;un poste en CDI</span> en tant que développeur web ou mobile 
                dans une entreprise dynamique où je pourrais mettre mes compétences et ma créativité au service de projets impactants.
            </p>

            <p>
                <span className="italic">En ce qui concerne mes hobbies</span>, j&apos;adore la pop-culture (Star Wars, Marvel, DC Comics, etc ...), jouer aux jeux vidéos, faire de la veille technologique. 
                J&apos;aime aussi{" "} <span className="font-medium">apprendre de nouvelles choses</span>. 
                Et pratique également le vélo de route et j&apos;aime faire sport en général.
            </p>
        </motion.section>
    )
}
