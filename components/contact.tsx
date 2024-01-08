"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Contact() {
    const { ref } = useSectionInView("Contact");
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    const formRef = useRef<HTMLFormElement>(null);

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact</SectionHeading>

            <p className="text-gray-700 -mt-6 dark:text-white/80">
                Contactez moi directement via{" "}
                <a className="underline" href="mailto:mathchambaud2000@gmail.com">
                    mathchambaud2000@gmail.com
                </a>{" "}
                ou par ce formulaire.
            </p>

            <form
                ref={formRef}
                className="mt-10 flex flex-col dark:text-black"
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);

                    if (error) {
                        toast.error(error);
                        return;
                    }

                    toast.success("Email envoyé !");
                    formRef.current?.reset()
                    setTimeOfLastClick(Date.now())
                }}
            >
                <input
                    className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Votre email"
                />
                <textarea
                    className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="message"
                    placeholder="Votre message"
                    required
                    maxLength={5000}
                />
                <SubmitBtn />
            </form>
        </motion.section>
    );
}