import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { useTheme } from '@/context/theme-context'
import { Button, Modal, ModalBody, ModalContent, useDisclosure } from '@nextui-org/react';
import Image from 'next/image';

type ExperienceItemProps = {
    title: string;
    location: string;
    logo: string;
    tasks: string[];
    skills: string[];
    description: string;
    icon: React.ReactNode;
    date: string;
}

export default function ExperienceItem({
    title,
    location,
    logo,
    tasks,
    skills,
    description,
    icon,
    date
}: ExperienceItemProps) {
    const { theme } = useTheme();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <React.Fragment key={title}>
            <VerticalTimelineElement
                visible
                contentStyle={{
                    background:
                        theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                    borderRight:
                        theme === "light"
                            ? "0.4rem solid #9ca3af"
                            : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={date}
                icon={icon}
                iconStyle={{
                    background:
                        theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                    fontSize: "1.5rem",
                }}
            >
                <h3 className="font-semibold text-xl capitalize my-2">{title}</h3>
                <p className="font-normal !mt-0">{location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                    {description}
                </p>
                <div className="flex w-[25rem] justify-end items-end content-end">
                    <Button className="bg-gray-900 text-white px-5 py-2 mx-5 my-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition" onPress={onOpen}>
                        En savoir plus
                    </Button>
                </div>
            </VerticalTimelineElement>
            <Modal size="4xl" backdrop="blur" placement="center" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className="p-2">
                    {(onClose) => (
                        <>
                            <ModalBody className="flex flex-row flex-wrap items-center justify-center">
                                <Image
                                    src={logo}
                                    width={300}
                                    height={700}
                                    objectFit="cover"
                                    alt="entreprise logo"
                                />
                                <div className="flex flex-col items-start justify-start w-[30rem] p-2">
                                    <h2 className="font-semibold text-[2rem]">{title}</h2>
                                    <div className="flex flex-row justify-between w-full py-2">
                                        <p className="text-gray-500">{location}</p>
                                        <p className="text-gray-500">{date}</p>
                                    </div>

                                    <ul className="bg-gray-100 rounded-lg p-2 dark:bg-gray-800">
                                        <p className="font-semibold">Tâches</p>
                                        {tasks.map((task) => (
                                            <li className="py-2"> - {task}</li>
                                        ))}
                                    </ul>
                                    <ul className='flex flex-wrap pt-2 mt-4 gap-2 sm:mt-auto'>
                                        {skills.map((tag, index) => (
                                            <li
                                                className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70'
                                                key={index}
                                            >
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </React.Fragment>
    )
}
