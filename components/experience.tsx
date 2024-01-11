"use client"

import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import ExperienceItem from "./experience-item";

export default function Experience() {
    const { ref } = useSectionInView("Expérience");
    const { theme } = useTheme();

    return (
        <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
            <SectionHeading>Mes expériences</SectionHeading>
            <VerticalTimeline lineColor="" animate={true}>
                {experiencesData.map((item) => {
                    return (
                        <ExperienceItem date={item.date} description={item.description} icon={item.icon} location={item.location} logo={item.logo} skills={item.skills} tasks={item.tasks} title={item.title} />
                    )
                })}
            </VerticalTimeline>

        </section>
    );
}