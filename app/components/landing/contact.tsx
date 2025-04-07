import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import LinkedIn from "~/icons/linkedin";
import Github from "~/icons/github";
import { MessageCircle } from "lucide-react";

// Schéma de validation pour le formulaire
const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse e-mail invalide"),
  subject: z.string().min(5, "Le sujet doit contenir au moins 5 caractères"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialisation du formulaire
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Soumission du formulaire
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Simuler une soumission de formulaire
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSubmitted(true);
      form.reset();

      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const contactMethods = [
    {
      icon: <LinkedIn />,
      title: "LinkedIn",
      details: "Mathieu Chambaud",
      url: "https://www.linkedin.com/in/mathieu-chambaud-9b4106170/",
    },
    {
      icon: <Github />,
      title: "GitHub",
      details: "Freki Managarm",
      url: "https://github.com/FrekiManagarm",
    },
    {
      icon: <MessageCircle />,
      title: "Email",
      details: "mathchambaud@icloud.com",
      url: "mailto:mathchambaud@icloud.com",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-b from-slate-800 to-slate-900"
    >
      <div className="container relative z-10 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
              Discutons
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">Me Contacter</h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Vous avez un projet en tête ou souhaitez simplement discuter ?
              N'hésitez pas à me contacter, je serai ravi d'échanger avec vous.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all shadow-lg hover:shadow-cyan-500/10 flex flex-col items-center text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mb-4 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-300">{method.details}</p>
              </motion.a>
            ))}
          </div>

          <div className="bg-slate-800/70 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 bg-gradient-to-br from-cyan-500 to-blue-600 p-8 md:p-12 flex items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Parlons de votre Projet
                  </h3>
                  <p className="text-white/90 mb-6">
                    Remplissez le formulaire ci-contre et je vous répondrai dans
                    les plus brefs délais.
                  </p>
                  <ul className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center text-white"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      >
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 text-white">
                          {method.icon}
                        </div>
                        <div>
                          <div className="font-medium">{method.title}</div>
                          <a
                            href={method.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-white/80 hover:text-white transition-colors"
                          >
                            {method.details}
                          </a>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:col-span-3 p-8 md:p-12">
                {isSubmitted ? (
                  <motion.div
                    className="bg-green-500/20 border border-green-500/30 p-6 rounded-lg text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 mx-auto text-green-400 mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Message Envoyé !
                    </h3>
                    <p className="text-gray-300">
                      Merci pour votre message. Je vous répondrai dans les plus
                      brefs délais.
                    </p>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <motion.div variants={itemVariants}>
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-white">
                                    Nom
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Votre nom"
                                      className="bg-slate-700/50 border-slate-600 text-white"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-400" />
                                </FormItem>
                              )}
                            />
                          </motion.div>

                          <motion.div variants={itemVariants}>
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-white">
                                    Email
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="votre@email.com"
                                      className="bg-slate-700/50 border-slate-600 text-white"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage className="text-red-400" />
                                </FormItem>
                              )}
                            />
                          </motion.div>
                        </div>

                        <motion.div variants={itemVariants}>
                          <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">
                                  Sujet
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Sujet de votre message"
                                    className="bg-slate-700/50 border-slate-600 text-white"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-red-400" />
                              </FormItem>
                            )}
                          />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">
                                  Message
                                </FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Votre message"
                                    className="bg-slate-700/50 border-slate-600 text-white min-h-[120px]"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-red-400" />
                              </FormItem>
                            )}
                          />
                        </motion.div>

                        <motion.div
                          variants={itemVariants}
                          className="flex justify-end"
                        >
                          <Button
                            type="submit"
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <svg
                                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                Envoi en cours...
                              </>
                            ) : (
                              "Envoyer"
                            )}
                          </Button>
                        </motion.div>
                      </motion.div>
                    </form>
                  </Form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
