"use client"

import { useRef } from 'react'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button, Modal, ModalBody, ModalContent, useDisclosure } from '@nextui-org/react'
import { IoIosArrowForward } from "react-icons/io";


type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    authors,
    wip,
    tags,
    imageUrl,
}: ProjectProps) {

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const { onOpen, isOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <motion.div
                ref={ref}
                style={{
                    scale: scaleProgess,
                    opacity: opacityProgess,
                }}
                className='group mb-3 sm:mb-8 last:mb-0 cursor-pointer'
            >
                <section className='bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>
                    <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col justify-between h-full sm:group-even:ml-[18rem]'>
                        <div>
                            <h3 className='text-2xl font-semibold'>{title}</h3>
                            <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>
                                {wip ? "Projet en cours" : "Projet terminé"}
                            </p>
                        </div>
                        {/* <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                            {tags.map((tag, index) => (
                                <li
                                    className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70'
                                    key={index}
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul> */}
                        <div className="flex w-[20rem] justify-start items-end content-end">
                            <Button className="bg-gray-900 text-white px-5 my-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition" onPress={onOpen}>
                                En savoir plus
                            </Button>
                        </div>
                    </div>

                    <Image
                        src={imageUrl}
                        alt='my projects'
                        width={300}
                        height={300}
                        quality={95}
                        className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40'
                    />
                </section>
            </motion.div>
            <Modal size="2xl" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <ModalBody className='flex flex-col items-start p-5'>
                            <div className='flex flex-row'>
                                <Image
                                    src={imageUrl}
                                    alt='project image'
                                    width={100}
                                    height={100}
                                    className='rounded-full'
                                />

                                <div className='flex flex-col px-2 justify-center'>
                                    <h1 className='font-bold text-[2rem]'>{title}</h1>
                                    <p className={wip ? "font-semibold text-orange-400" : "font-semibold text-green-400"}>{wip ? "Projet en cours" : "Projet terminé"}</p>
                                </div>
                            </div>
                            <div className='bg-gray-200 p-2 w-full rounded-lg dark:bg-gray-950'>
                                <p className='font-semibold'>Description</p>
                            </div>
                            <p className='font-medium w-full'>
                                {description}
                            </p>
                            <div className='bg-gray-200 p-2 w-full rounded-lg dark:bg-gray-950'>
                                <p className='font-semibold'>Technologies</p>
                            </div>
                            <div className='flex flex-row gap-3'>
                                {tags.map((tag) => {
                                    const Icon = tag
                                    return (
                                        <Icon className="w-10 h-10 fill-black dark:fill-white" />
                                    )
                                })}
                            </div>
                            <div className='bg-gray-200 p-2 w-full rounded-lg dark:bg-gray-950'>
                                <p className='font-semibold'>Contributeurs</p>
                            </div>
                            <motion.div className='flex flex-row gap-2'>
                                {authors.map((author, index) => (
                                    <a key={index} href={author.linkedin} target='_blank' className='bg-gray-200 shadow-md p-1 rounded-full flex flex-row w-50 justify-around items-center'>
                                        <Image
                                            src={author.avatarUrl}
                                            width={50}
                                            height={50}
                                            alt='author profile image'
                                            className='rounded-full'
                                        />
                                    </a>
                                ))}
                            </motion.div>
                        </ModalBody>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
