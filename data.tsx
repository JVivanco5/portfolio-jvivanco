import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Mail, TrendingUp } from "lucide-react";
import { AiOutlineFilePdf, AiOutlinePython  } from "react-icons/ai";
import { FaNodeJs, FaCss3Alt, FaReact, FaJava, FaAngular, FaBootstrap } from "react-icons/fa";
import { RiJavascriptLine, RiHtml5Line, RiTailwindCssLine } from "react-icons/ri";
import { TbBrandVite, TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiFirebase } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { GrMysql } from "react-icons/gr";


export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/joaquinvivanco5/",
    },
    {
        id: 2,
        logo: <AiOutlineFilePdf size={30} strokeWidth={1} />,
        src: "https://drive.google.com/file/d/1MG3jIlqrTE1Q7-pBy309FXNu2SI4PrE_/view?usp=drive_link" ,
    },
    //  {
    //     id: 1,
    //     logo: <Youtube size={30} strokeWidth={1} />,
    //     src: "#!",
    // },
    // {
    //     id: 3,
    //     logo: <Twitter size={30} strokeWidth={1} />,
    //     src: "#!",
    // },
    // {
    //     id: 4,
    //     logo: <Rss size={30} strokeWidth={1} />,
    //     src: "#!",
    // },
    // {
    //     id: 5,
    //     logo: <Twitch size={30} strokeWidth={1} />,
    //     src: "#!",
    // },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/perfil",
    },
    {
        id: 3,
        title: "TrendingUp",
        icon: <TrendingUp size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 4,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 5,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    // {
    //     id: 5,
    //     title: "Home",
    //     icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    //     link: "/testimonials",
    // },
];

export const dataAboutPage = [
    // {
    //     id: 1,
    //     title: "Frontend Developer",
    //     subtitle: "TechSolutions",
    //     description: "Colabora con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.",
    //     date: "Nov 2023 ",
    // },
    {
        id: 1,
        title: "Duoc UC",
        subtitle: "Titulado Ingenieria Informática",
        description: "Titulado de la carrera de Ingeniería en Informática de Duoc UC",
        date: "Ene 2024",
    },
    {
        id: 2,
        title: "SCL Consultores",
        subtitle: "Práctica Profesional",
        description: "Encargado de resolver problemas técnicos en sistemas SAP, gestionando la asignación y resolución de tickets de soporte. Responsable de la mantención y control de entornos SAP S/4Hana para empresas de renombre en el país, asegurando la estabilidad y eficiencia de las operaciones. Además, se generaban y analizaban métricas de rendimiento y estado de los entornos de trabajo, las cuales eran enviadas de manera periódica al supervisor para su evaluación y toma de decisiones.",
        date: "Nov 2023",
    },
    {
        id: 3,
        title: "Asistente Informático",
        subtitle: "Watchman Security",
        description: "Encargado de realizar renovación y actualización de softwares varios, creación página web de empresa. Actualización, creación y migración de correos corporativos,asistencia técnica y consultas.        ",
        date: "Jul 2022",
    },
    {
        id: 4,
        title: "Duoc UC",
        subtitle: "",
        description: "Comienzo la carrera de Ingeniería en Informática",
        date: "Mar 2020 ",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 23,
        text: "Años",
        lineRight: true,
        lineRightMobile: true,
    },
    // {
    //     id: 1,
    //     endCounter: 80,
    //     text: "Clientes satisfechos",
    //     lineRight: true,
    //     lineRightMobile: false,
    // },
    // {
    //     id: 2,
    //     endCounter: 220,
    //     text: "Proyectos finalizados",
    //     lineRight: true,
    //     lineRightMobile: true,
    // },
    // {
    //     id: 3,
    //     endCounter: 30,
    //     text: "Premios ganadores",
    //     lineRight: false,
    //     lineRightMobile: false,
    // },
];

export const serviceData = [
    {
        icon: <FaNodeJs />,
        title: "NodeJs",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <RiJavascriptLine />,
        title: "Javascript",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <AiOutlinePython />,
        title: "Python",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <RiHtml5Line />,
        title: "HTML",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <FaCss3Alt />,
        title: "CSS",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
    {
        icon: <RiTailwindCssLine />,
        title: "Tailwind",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
    {
        icon: <FaReact />,
        title: "React",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
    {
        icon: <TbBrandVite />,
        title: "Vite",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
    {
        icon: <TbBrandNextjs />,
        title: "Next.js",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
    {
        icon: <FaJava />,
        title: "Java",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
    {
        icon: <SiMongodb />,
        title: "Mongo DB",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
    {
        icon: <SiFirebase />,
        title: "Firebase",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
    {
        icon: <IoLogoGithub />,
        title: "Github",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
    {
        icon: <FaAngular />,
        title: "Angular",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
    {
        icon: <FaBootstrap />,
        title: "Bootstrap",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
    {
        icon: <GrMysql />,
        title: "MySql",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Rescue-Me",
        image: "/mockups-rescueme.png",
        urlGithub: "https://github.com/JPabloNB/rescue-me",
        urlDemo: "#!",
    },
    // {
    //     id: 2,
    //     title: "Desarrollo Web Ágil",
    //     image: "/image-2.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 3,
    //     title: "Estrategias Web",
    //     image: "/image-3.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 4,
    //     title: "Ideas Creativas",
    //     image: "/image-4.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 5,
    //     title: "Webs Impactantes",
    //     image: "/image-5.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 6,
    //     title: "Web Dinámica",
    //     image: "/image-6.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 7,
    //     title: "Dark Web ",
    //     image: "/image-7.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 8,
    //     title: "E-commerce web",
    //     image: "/image-8.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];