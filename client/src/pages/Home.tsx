import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUp,
  Download,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Instagram,
  Award,
  CheckCircle2,
  Send,
  Database,
  LineChart,
  Server,
  Star,
  Users,
  MessageSquare,
  X,
  Linkedin,
  ChevronDown,
  ChevronUp,
  FileText,
} from "lucide-react";
import { Mail, Github } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema } from "@shared/schema";
import { useContactMutation } from "@/hooks/use-portfolio";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import logo from "@/assets/NC2.png";
import resume from "@/assets/Nithish_Chouti.pdf";
// import myPhoto from "@/assets/my-photo.jpg"; // <-- 1. Import your photo here

// Static Data for "About Me" and Portfolio
const DATA = {
  profile: {
    name: "Nithish Chouti",
    college: "Indian Institute of Information Technology, Dharwad",
    degree: "B.Tech in Computer Science Engineering",
    focus: "AI, ML, Python, Data Analytics",
    interests: "Project Management, Analytics, Banking Sector",
    bio: " As a Computer Science graduate from IIIT Dharwad, I've built a strong technical foundation in AI, Machine Learning, and Python. My academic journey has been defined by leadership in course projects and research contributions. While my roots are in engineering, my passion lies in Project Management and Analytics within the Banking sector. I am currently preparing to launch my career in a Nationalized Bank, aiming to leverage my communication skills and technical acumen to deliver value and innovation.",
  },
  education: [
    {
      id: 1,
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Indian Institute of Information Technology (IIIT), Dharwad",
      year: "2021 - 2025",
      score: "CGPA: 9.03",
    },
    {
      id: 2,
      degree: "Senior Secondary (12th)",
      institution: "Delhi Public School, Nacharam, Telangana",
      year: "2021",
      score: "Percentage: 96.4%",
    },
    {
      id: 3,
      degree: "Secondary (10th)",
      institution: "Delhi Public School, Nacharam, Telangana",
      year: "2019",
      score: "Percentage: 96%",
    },
  ],
  skills: [
    { name: "Microsoft Word", category: "Tools", proficiency: 100 },
    { name: "Microsoft Excel", category: "Tools", proficiency: 80 },
    { name: "Power Point", category: "Tools", proficiency: 90 },
    { name: "Tableau", category: "Tools", proficiency: 50 },
    { name: "Power BI", category: "Tools", proficiency: 75 },
    { name: "ChatGPT + Gemini", category: "Tools", proficiency: 100 },
    { name: "Python", category: "Technical", proficiency: 90 },
    { name: "Data Analytics", category: "Technical", proficiency: 85 },
    { name: "AI/ML", category: "Technical", proficiency: 80 },
    { name: "SQL", category: "Technical", proficiency: 85 },
    { name: "Data Visualization", category: "Technical", proficiency: 85 },
    { name: "Project Management", category: "Soft Skills", proficiency: 90 },
    { name: "Team Leadership", category: "Soft Skills", proficiency: 95 },
    { name: "Communication", category: "Soft Skills", proficiency: 90 },
    { name: "Problem Solving", category: "Soft Skills", proficiency: 90 },
    { name: "Time Management", category: "Soft Skills", proficiency: 90 },
    { name: "Critical Thinking", category: "Soft Skills", proficiency: 90 },
    { name: "Adaptability", category: "Soft Skills", proficiency: 100 },
  ],
  experiences: [
    {
      id: 0,
      role: "Project Intern",
      company: "Vanderblit University, Tennessese",
      duration: "Jan 2025 - Aug 2025",
      description:
        "Collaborated in a four-member research team on expression-preserving face de-identification, focusing on privacy protection while minimizing bias in facial datasets under the guidance of Dr. Ashwin T. S. and Dr. Manjunath V.",
      certificate:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
    },
    {
      id: 1,
      role: "Research Intern",
      company: "National Institute Of Technology Sikkim",
      duration: "June 2024 - Aug 2024",
      description:
        "Conducted research on multi-criteria recommendation systems, contributing to model design, evaluation, and analysis, resulting in the publication of two peer-reviewed conference papers under Dr. Bam Bahadur Sinha.",
      certificate:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
    },
    {
      id: 2,
      role: "IAS - Summer Research Fellow",
      company: "Indian Institute of Technology Hyderabad",
      duration: "May 2024 - July 2024",
      description:
        "Developed and Evaluated semantic segmentation models for robotic vision applications as part of the project Vision Capabilities for a Bi-Pedaled Robot under Prof. Sumohana S. Channappayya.",
      certificate:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
    },
    {
      id: 3,
      role: "Research Intern",
      company: "Indian Institute of Information Technology, SriCity",
      duration: "Dec 2023 - Jan 2024",
      description:
        "Worked on autonomous navigation research with a focus on obstacle avoidance algorithms, contributing to path planning and experimental validation under Dr. Prabhu Prasad and Dr. Pavan Kumar.",
      certificate:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
    },
    {
      id: 4,
      role: "Non-Technical Team Lead",
      company: "Google Developer Student Club IIIT Dharwad",
      duration: "Aug 2023 - Oct 2024",
      description:
        "Led non-technical operations, event planning, and risk management for a student-led developer community, ensuring smooth execution of workshops, collaborations, and large-scale technical events.",
      certificate:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
    },
  ],
  projects: [
    {
      id: 1,
      title:
        "Leveraging Generative AI for Enhanced Question Generation in Reading Comprehension",
      category: "NLP",
      description:
        "We propose an advanced machine-generated question generation approach using Llama 3.1 to improve reading comprehension in digital learning environments. By optimizing token usage and contextual understanding, our method generates relevant plain questions, MCQs, and fill-in-the-blank questions, avoiding the generic outputs of earlier approaches. The questions are adaptive, content-aligned, and designed to enhance learner engagement and understanding, demonstrating Llama 3.1’s potential to support meaningful learning experiences.",
      techStack: ["Python", "NLP", "Ollama"],
      sourceCode: "https://github.com/nithishchouti/MiniProject2",
    },
    {
      id: 2,
      title: "Multimodal Information Retrieval Using Text and Image",
      category: "AI/ML",
      description:
        "This work presents a multimodal information retrieval system that supports text, image, and combined queries using Elasticsearch. The system integrates Sentence Transformers for text understanding and Vision Transformers for image processing. Evaluations on datasets from JEBE, Springer, and CVPR demonstrate strong performance, with all-MiniLM-L6-v2 achieving superior text retrieval results and Vision Transformers outperforming other image models, highlighting the system’s effectiveness across modalities.",
      techStack: ["Python", "NLP", "Transformers"],
      sourceCode: "https://github.com/C-NikhilKarthik/MIRAX",
    },
    {
      id: 3,
      title: "Semantic Segmentation using DeepLabV3+ with MobileNet Backbones",
      category: "Deep Learning",
      description:
        "The project focuses on semantic segmentation, a vital task in computer vision that involves classifying each pixel in an image into a specific category. This capability is essential for applications like autonomous driving, medical imaging, and environmental monitoring, where understanding visual scenes at a granular level is crucial.",
      techStack: ["CNN", "ML", "DL"],
      sourceCode: "https://github.com/nithishchouti/Semantic-Segmentation",
    },
    {
      id: 4,
      title: "Chatbot using Knowledge Graphs and RAG",
      category: "RAG",
      description:
        "Collaborated in a team of five to develop an LLM agent (chatbot) using Knowledge Graph RAG, implemented with the LangChain framework. Designed and managed a Neo4j graph database while building a Streamlit-based user interface. Integrated a data analysis tool, general search engine, and QA system using Graph RAG to enhance the chatbot’s capabilities. Additionally, developed a visualization tool with Microsoft LIDA to generate insightful plots from uploaded CSV files.",
      techStack: ["LangChain", "Microsoft LIDA", "Python"],
      sourceCode: "https://github.com/nithishchouti/Chatbot-using-KNRAG",
    },
  ],
  highlights: [
    {
      id: 0,
      title:
        "Leveraging Generative AI for Enhanced Question Generation in Reading Comprehension",
      type: "Publication",
      date: "July 2025",
      description:
        "Published in the 2025 International Conference on Computing, Intelligence, and Application (CIACON), this work introduces an advanced Automatic Question Generation framework built on LLaMA 3.1. The system generates plain, MCQ, and fill-in-the-blank questions using optimized long-context handling, Sense2Vec, KeyBERT, and MMR for semantic relevance and diversity. Evaluated on the SQuAD 1.1 dataset, the model achieved an F1 score of 0.8, demonstrating its effectiveness in producing high-quality, pedagogically aligned questions for digital learning environments.",
      links: "https://ieeexplore.ieee.org/document/11189701",
    },
    {
      id: 1,
      title:
        "Deep Learning-Based Multi-Criteria Recommender System: Leveraging Autoencoders for Improved Personalization",
      type: "Publication",
      date: "October 2024",
      description:
        "Presented at the 2024 International Conference on Computing, Sciences and Communications (ICCSC), this work introduces a deep learning–based Multi-Criteria Recommender System using autoencoders to model complex user–item interactions. Evaluated on the TripAdvisor multi-criteria dataset, the proposed approach outperformed traditional methods, achieving a lower RMSE of 0.975 and delivering more accurate, personalized recommendations by effectively capturing diverse user preferences.",
      links: "https://ieeexplore.ieee.org/document/10830367",
    },
    {
      id: 2,
      title:
        "Enhancing Multi-Criteria Recommendation Systems with Hot Deck Imputation and User-Specific Similarity Measures",
      type: "Publication",
      date: "August 2024",
      description:
        "Presented at the International Conference on Artificial Intelligence: Theory and Applications (AITA 2024), this work addresses sparse data challenges in recommender systems by categorizing users into cold-start, middle, and heavy users based on rating behavior. By combining multi-criteria similarity measures with hot deck imputation, the approach enhances data completeness and captures individual user preferences more effectively, resulting in more accurate and personalized recommendations.",
      links: "https://www.publications.scrs.in/chapter/978-81-955020-9-7/30",
    },
    {
      id: 3,
      title:
        "Implementation and Comparison of Path Planning Algorithms for Autonomous Navigation",
      type: "Publication",
      date: "August 2024",
      description:
        "Presented at the 2nd IEEE Conference on Engineering Informatics (ICEI 2024), this study evaluates path planning algorithms for autonomous navigation on the TurtleBot3 platform using ROS. A comparative analysis of Dynamic Window Approach (DWA) and A* highlights their strengths in local obstacle avoidance and global path optimization. Experimental results from simulated and real-world environments show notable performance improvements, with the combined approach achieving gains of approximately 3.53% in path distance, 6.62% in travel time, and 30.17% in travel distance, contributing to more reliable and efficient mobile robot navigation.",
      links: "https://ieeexplore.ieee.org/document/10912251",
    },
    {
      id: 4,
      title:
        "Heart Health Insights: Analysing Data and Visualising Predictive Factors for Cardiovascular Disease",
      type: "Publication",
      date: "November 2024",
      description:
        "Presented at the 2nd IEEE Conference on Engineering Informatics (ICEI 2024), this study explores data analytics and machine learning techniques for early prediction of cardiovascular diseases. Using a dataset of 1,190 records, multiple models—including decision trees, SVM, random forest, and logistic regression—were evaluated, with PCA applied to identify key risk factors. The findings demonstrate the effectiveness of data-driven approaches in improving early detection and prevention of heart disease.",
      links: "https://ieeexplore.ieee.org/document/10912220",
    },
    // {
    //   id: 5,
    //   title: "FinTech Workshop Lead",
    //   type: "Event",
    //   date: "2023-11-05",
    //   description: "",
    //   links: "",
    // },
    {
      id: 5,
      title: "Global Power Platform Bootcamp 2025",
      type: "Event",
      date: "February 2025",
      description: `🚀 An Inspiring Experience at Global Power Platform Bootcamp – Hyderabad 2025! 🎤✨

Attending the Global Power Platform Bootcamp 2025 in Hyderabad was an eye-opener into the world of AI-driven automation, low-code development, and enterprise governance. The sessions were packed with practical insights and industry expertise.

🔥 Key Insights from the Sessions:

🔹 Project Scout – AI-powered Document Search  
• Intelligent document retrieval using SharePoint + Power Apps  
• Advanced search with metadata and tags  
• Productivity enhancement through automation  

🔹 Pro-Code in Power Apps  
• PowerApps Component Framework (PCF) for UI customization  
• Canvas & Model-Driven Apps  
• Seamless data integration  

🔹 Microsoft Fabric & OneLake  
• No data duplication  
• Data mesh & medallion architecture  
• Cross-capacity data reuse  

🔹 Power Platform Governance & COE  
• Center of Excellence best practices  
• Security, compliance, and scalability  

🔹 Power Platform for D365 CE  
• Business automation with Power Apps & Power Automate  
• Power BI insights  

🔹 Microsoft Copilot Studio  
• AI-powered copilots  
• Autonomous AI agents  

💡 Key Learning: Power Platform enables AI-driven, low-code digital transformation.`,
      links:
        "https://www.linkedin.com/posts/nithish-chouti-179425228_powerplatform-techinnovation-digitaltransformation-activity-7299278129842266112-jpnt?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkD9K0BTl1XvuD6Y5qGOSfKSnKp1UGlni4",
    },
    {
      id: 6,
      title: "IIIT Dharwad Conclave 2024 Lead",
      type: "Event",
      date: "December 2024",
      description: `✨ Reflecting on an Incredible Journey: Leading the IIIT Dharwad Conclave 2024! ✨

As a 4th-year Computer Science student, taking on the role of Lead for the IIIT Dharwad Conclave 2024 has been a fulfilling and transformative experience. From managing diverse teams and making critical decisions to addressing challenges with resilience and optimism—this event has taught me invaluable lessons in leadership and collaboration.

What truly made this journey remarkable was the passionate team and community that stood by each step. I am immensely grateful to our Director Prof. Mahadeva Prasanna Sir, Manjunath Vanahalli Sir, Ujwal Doddamani Sir, our dedicated faculty, supportive staff, and every student who contributed to this event's success. A big thank you to each of them for creating an atmosphere where innovation and teamwork thrived.

It was a privilege to meet and interact with delegates from across India. Engaging in discussions and exchanging insights with such a diverse group was an eye-opener, reinforcing the event’s theme: "Breaking Barriers and Setting New Standards."

Here’s to everyone who made #IIITDharwadConclave2024 possible, and a final shout-out to my incredible team for your enthusiasm and support. Together, we’ve set a new benchmark for what we can achieve. Looking forward to more opportunities where we can continue to Explore. Experience. Excel.`,
      links:
        "https://www.linkedin.com/posts/nithish-chouti-179425228_iiitdharwadconclave2024-iiitdharwad-leadershipjourney-activity-7262016178384977920-ECgD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADkD9K0BTl1XvuD6Y5qGOSfKSnKp1UGlni4",
    },
    // {
    //   id: 5,
    //   title: "FinTech Workshop Lead",
    //   type: "Event",
    //   date: "2023-11-05",
    //   description: "",
    //   links: ``,
    // },
  ],
  certifications: [
    {
      id: 0,
      name: "Google Project Management",
      issuer: "Google",
      date: "2025",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/LE6LKCP1LTOM",
    },
    {
      id: 1,
      name: "Google AI Essentials",
      issuer: "Google",
      date: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/PW3GXSLYR4RN",
    },
    {
      id: 2,
      name: "Machine Learning",
      issuer: "Stanford University",
      date: "2024",
      link: "https://www.coursera.org/account/accomplishments/specialization/2R9CCBJDMZNZ",
    },
    {
      id: 3,
      name: "Agile Job Simulation",
      issuer: "JPMorgan Chase & Co.",
      date: "2023",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/5QiaMtZ4k8ngYKn4D_JPMorgan%20Chase%20&%20Co._87K9dRZkJhszzCupW_1699851061654_completion_certificate.pdf",
    },
    {
      id: 4,
      name: "Software Engineering Job Simulation",
      issuer: "JPMorgan Chase & Co.",
      date: "2023",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_87K9dRZkJhszzCupW_1700391488317_completion_certificate.pdf",
    },
    {
      id: 5,
      name: "Data Analytics and Visualization Job Simulation",
      issuer: "Accenture North America",
      date: "2023",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_87K9dRZkJhszzCupW_1702191335483_completion_certificate.pdf",
    },
    {
      id: 6,
      name: "Entrepreneurship Cell IIIT Dharwad",
      issuer: "E-Cell",
      date: "2024",
      link: "https://drive.google.com/file/d/1QjD71ZyWt-HC--G76X6TxyRsouy4DeDM/view?usp=drive_link",
    },

    {
      id: 7,
      name: "Deploy and Maintain Power BI Assets and Capstone project",
      issuer: "Microsoft via Coursera",
      date: "2025",
      link: "https://www.coursera.org/account/accomplishments/verify/UBEWBZCDV541",
    },
    {
      id: 8,
      name: "Creative Designing in Power BI",
      issuer: "Microsoft via Coursera",
      date: "2025",
      link: "https://www.coursera.org/account/accomplishments/verify/O1BRFDK8UTV7",
    },
    {
      id: 9,
      name: "Data Analysis and Visualization with Power BI",
      issuer: "Microsoft via Coursera",
      date: "2025",
      link: "https://www.coursera.org/account/accomplishments/verify/NBH03JZ4FKKN",
    },
    {
      id: 10,
      name: "Data Modeling in Power BI",
      issuer: "Microsoft via Coursera",
      date: "2025",
      link: "https://www.coursera.org/account/accomplishments/verify/BHQOABG4GQES",
    },
    {
      id: 11,
      name: "Extract, Transform and Load Data in Power BI",
      issuer: "Microsoft via Coursera",
      date: "2025",
      link: "https://www.coursera.org/account/accomplishments/verify/KNYGQ6631X2C",
    },
    {
      id: 12,
      name: "Harnessing the Power of Data with Power BI",
      issuer: "Microsoft via Coursera",
      date: "2025",
      link: "https://www.coursera.org/account/accomplishments/verify/DIWG89A2R1P6",
    },
    {
      id: 13,
      name: "Preparing Data for Analysis with Microsoft Excel",
      issuer: "Amazon Web Services",
      date: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/K7XIELT49BB9",
    },
    {
      id: 14,
      name: "Capstone: Applying Project Management in the Real World",
      issuer: "Google",
      date: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/ZLM81HFYGO90",
    },
    {
      id: 15,
      name: "Agile Project Management",
      issuer: "Google",
      date: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/3ZAGPYDGST1V",
    },
    {
      id: 16,
      name: "Project Execution: Running the Project",
      issuer: "Google",
      date: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/PB9J2KEC2SX9",
    },
    {
      id: 17,
      name: "Project Planning: Putting It All Together",
      issuer: "Google",
      date: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/VZTP9NG3PBFP",
    },
    {
      id: 18,
      name: "Project Initiation: Starting a Successful Project",
      issuer: "Google",
      date: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/AKPZW3LYTWRP",
    },
    {
      id: 19,
      name: "Foundations of Project Management",
      issuer: "Google",
      date: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/74RN2FMHBMN3",
    },
    {
      id: 20,
      name: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      issuer: "DeepLearning.AI",
      date: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/NMU76ZVEWP5D",
    },
    {
      id: 21,
      name: "Advanced Learning Algorithms",
      issuer: "DeepLearning.AI",
      date: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/EBB4QSRXT7JW",
    },
    {
      id: 22,
      name: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI",
      date: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/HPLQXDHJFYUG",
    },
    {
      id: 23,
      name: "Liquid Trees",
      issuer: "Liquid Trees",
      date: "2024",
      link: "https://drive.google.com/file/d/1Gz74AbYli9oDGXjtqTSxMS3AFhyt2FJq/view?usp=drive_link",
    },
    {
      id: 24,
      name: "The Complete 2023 Data Science Bootcamp",
      issuer: "Udemy",
      date: "2023",
      link: "https://drive.google.com/file/d/1PUnaELzW0XojUMHSpE9D3KoXLMfp3xio/view?usp=drive_link",
    },
  ],
  gallery: [
    logo, // <-- 2. Add the imported variable here
    // myPhoto,
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  ],
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  const contactMutation = useContactMutation();
  const [zoomItem, setZoomItem] = useState<{
    type: "project" | "highlight" | "image" | "certificate";
    data: any;
  } | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const form = useForm({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    contactMutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-primary/20 absolute inset-0 animate-ping" />
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-background shadow-2xl relative z-10">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 text-center"
            >
              <h1 className="text-3xl md:text-5xl font-bold font-display text-primary">
                Nithish Chouti
              </h1>
              <p className="text-muted-foreground mt-2">Portfolio</p>
            </motion.div>
          </motion.div>
        ) : (
          <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />

            {/* === HERO SECTION === */}
            <section
              id="home"
              className="relative min-h-[90vh] flex items-center justify-center pt-20 px-4 md:px-6 overflow-hidden"
            >
              <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10" />

              <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="space-y-6 text-center md:text-left"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mx-auto md:mx-0">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Believe. Begin. Become.
                  </div>

                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                    Hello, I am
                  </h3>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                    <span className="text-primary">Nithish Chouti</span>
                  </h1>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                    SBI Junior Associate
                  </h3>

                  <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                    {/* Aspiring Banking, Technology & Management Professional <br /> */}
                    Banking | Project Management | Technology | Analytics |
                    Entrepreneurship
                  </p>
                  {/* <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              {DATA.profile.college} Graduate specializing in {DATA.profile.interests}. 
              Bridging the gap between Technology and Financial Services.
            </p> */}

                  <div className="flex flex-wrap gap-4 pt-2">
                    <ScrollLink to="about" smooth={true} offset={-80}>
                      <Button
                        size="lg"
                        className="rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                      >
                        Know More About Me{" "}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </ScrollLink>
                    <ScrollLink to="contact" smooth={true} offset={-80}>
                      <Button
                        size="lg"
                        variant="outline"
                        className="rounded-full bg-white/50 backdrop-blur-sm hover:bg-white border-primary/20"
                      >
                        Contact Me
                      </Button>
                    </ScrollLink>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative"
                >
                  <div className="aspect-square relative rounded-full overflow-hidden border-8 border-white shadow-2xl max-w-md mx-auto bg-gradient-to-br from-slate-100 to-slate-200">
                    <img
                      src={logo}
                      alt="Professional portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3"
            >
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold uppercase">Education</p>
                <p className="font-bold text-slate-800">IIIT Dharwad</p>
              </div>
            </motion.div> */}

                  {/* <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute top-10 -right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3"
            >
              <div className="bg-green-100 p-2 rounded-lg text-green-600">
                <LineChart className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold uppercase">Focus</p>
                <p className="font-bold text-slate-800">Analytics</p>
              </div>
            </motion.div> */}
                </motion.div>
              </div>
            </section>

            {/* === ABOUT SECTION === */}
            <section id="about" className="py-24 bg-background">
              <div className="container max-w-6xl mx-auto px-4 md:px-6">
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start"
                >
                  {/* Left Side: Intro & Skills */}
                  <motion.div variants={fadeInUp} className="space-y-8">
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-4xl font-bold font-display">
                        Bridging Tech & Finance
                      </h2>
                      <div className="w-20 h-1 bg-primary rounded-full" />

                      <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                        <p>{DATA.profile.bio}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "Banking Awareness",
                        "Project Management",
                        "Data Analytics",
                        "Python & ML",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 font-medium"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <a href={resume} download="Nithish_Chouti.pdf">
                        <Button
                          variant="outline"
                          className="gap-2 w-full sm:w-auto"
                        >
                          <Download className="w-4 h-4" />
                          Download Resume
                        </Button>
                      </a>
                    </div>
                  </motion.div>

                  {/* Right Side: Education */}
                  <motion.div variants={fadeInUp} className="space-y-8">
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-4xl font-bold font-display">
                        Education
                      </h2>
                      <div className="w-20 h-1 bg-primary rounded-full" />
                      <p className="text-muted-foreground text-lg">
                        My academic background and qualifications.
                      </p>
                    </div>

                    <div className="space-y-6">
                      {DATA.education.map((edu) => (
                        <Card
                          key={edu.id}
                          className="border-border/50 shadow-sm hover:shadow-md transition-shadow bg-card"
                        >
                          <CardContent className="p-6 flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0 mt-1">
                              <GraduationCap className="w-8 h-8" />
                            </div>
                            <div className="space-y-1">
                              <h3 className="font-bold text-lg leading-tight">
                                {edu.institution}
                              </h3>
                              <p className="text-primary font-medium">
                                {edu.degree}
                              </p>
                              <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                                <span>{edu.year}</span>
                                <span className="text-border">•</span>
                                <span>{edu.score}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* === EXPERIENCE SECTION === */}
            <section id="experience" className="py-24 bg-muted/30">
              <motion.div
                className="container max-w-5xl mx-auto px-4 md:px-6"
                onViewportLeave={() => setShowAllExperiences(false)}
              >
                <div className="text-center mb-16 space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold font-display">
                    Experience Journey
                  </h2>
                  <p className="text-muted-foreground">
                    My professional and academic milestones
                  </p>
                </div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                  {DATA.experiences
                    .slice(0, showAllExperiences ? undefined : 4)
                    .map((exp, i) => (
                      <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                          <Briefcase className="w-4 h-4" />
                        </div>

                        <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border-border/50 shadow-md hover:shadow-lg transition-shadow bg-card">
                          <div className="flex flex-col gap-1 mb-2">
                            <span className="text-sm font-bold text-primary tracking-wider uppercase">
                              {exp.duration}
                            </span>
                            <h3 className="text-xl font-bold">{exp.role}</h3>
                            <p className="text-muted-foreground font-medium">
                              {exp.company}
                            </p>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {exp.description}
                          </p>
                          {/* @ts-ignore */}
                          {exp.certificate && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="mt-4 gap-2 text-xs h-8 rounded-full"
                              onClick={(e) => {
                                e.stopPropagation();
                                setZoomItem({
                                  type: "certificate",
                                  data: exp.certificate,
                                });
                              }}
                            >
                              <FileText className="w-3 h-3" /> View Certificate
                            </Button>
                          )}
                        </Card>
                      </motion.div>
                    ))}
                </div>

                {DATA.experiences.length > 4 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-center mt-12"
                  >
                    <Button
                      variant="outline"
                      onClick={() => setShowAllExperiences(!showAllExperiences)}
                      className="rounded-full gap-2 bg-background/50 backdrop-blur-sm hover:bg-background border-primary/20 hover:border-primary/50 transition-all shadow-sm"
                    >
                      {showAllExperiences ? (
                        <>
                          View Less <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          View More <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            </section>

            {/* === PROJECTS SECTION === */}
            <section id="projects" className="py-24 bg-background border-t">
              <div className="container max-w-6xl mx-auto px-4 md:px-6">
                <div className="space-y-4 mb-12 text-center">
                  <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight">
                    Featured Projects
                  </h2>
                  {/* <p className="text-muted-foreground max-w-lg mx-auto">
              Innovative solutions in{" "}
              <span className="text-primary font-medium">Fintech</span> and{" "}
              <span className="text-primary font-medium">Data Analytics</span>.
            </p> */}
                </div>

                <div className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide snap-x snap-mandatory">
                  {DATA.projects.map((project, i) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="min-w-[300px] md:min-w-[400px] snap-center cursor-pointer"
                      onClick={() =>
                        setZoomItem({ type: "project", data: project })
                      }
                    >
                      <Card className="group h-full flex flex-col overflow-hidden border-border/40 shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl bg-card">
                        <CardContent className="flex flex-col flex-grow p-8">
                          <div className="flex items-start justify-between mb-4">
                            <div className="bg-primary/10 p-2 rounded-lg text-primary">
                              <Database className="w-6 h-6" />
                            </div>
                            <Badge
                              variant="outline"
                              className="text-[10px] uppercase tracking-wider"
                            >
                              {project.category}
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-auto">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="text-[11px] font-mono text-primary/70 bg-primary/5 px-2 py-0.5 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* === HIGHLIGHTS SECTION === */}
            <section id="highlights" className="py-24 bg-muted/30">
              <div className="container max-w-6xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold font-display">
                    Featured Highlights
                  </h2>
                  <p className="text-muted-foreground">
                    My journey through posts, events, and achievements.
                  </p>
                </div>

                {/* Row 1: Latest Updates & Highlights */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6 px-1">
                    Latest Updates
                  </h3>
                  <div className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide snap-x snap-mandatory">
                    {DATA.highlights
                      .filter((h) => h.type !== "Publication")
                      .map((highlight, i) => (
                        <motion.div
                          key={highlight.id}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="min-w-[280px] md:min-w-[320px] snap-center cursor-pointer"
                          onClick={() =>
                            setZoomItem({ type: "highlight", data: highlight })
                          }
                        >
                          <Card className="h-full border-border/50 shadow-md hover:shadow-lg transition-all rounded-xl overflow-hidden bg-card">
                            <CardContent className="p-6 space-y-4">
                              <div className="flex justify-between items-start">
                                <Badge
                                  variant="outline"
                                  className="border-primary/30 text-primary bg-primary/5"
                                >
                                  {highlight.type}
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                  {highlight.date}
                                </span>
                              </div>
                              <h3 className="text-lg font-bold leading-tight">
                                {highlight.title}
                              </h3>
                              <p className="text-muted-foreground text-sm line-clamp-3">
                                {highlight.description}
                              </p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </div>

                {/* Row 2: Publications */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 px-1">Publications</h3>
                  <div className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide snap-x snap-mandatory">
                    {DATA.highlights
                      .filter((h) => h.type === "Publication")
                      .map((highlight, i) => (
                        <motion.div
                          key={highlight.id}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="min-w-[280px] md:min-w-[320px] snap-center cursor-pointer"
                          onClick={() =>
                            setZoomItem({ type: "highlight", data: highlight })
                          }
                        >
                          <Card className="h-full border-border/50 shadow-md hover:shadow-lg transition-all rounded-xl overflow-hidden bg-card">
                            <CardContent className="p-6 space-y-4">
                              <div className="flex justify-between items-start">
                                <Badge
                                  variant="outline"
                                  className="border-primary/30 text-primary bg-primary/5"
                                >
                                  {highlight.type}
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                  {highlight.date}
                                </span>
                              </div>
                              <h3 className="text-lg font-bold leading-tight">
                                {highlight.title}
                              </h3>
                              <p className="text-muted-foreground text-sm line-clamp-3">
                                {highlight.description}
                              </p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </div>
              </div>
            </section>

            {/* === SKILLS & CERTIFICATIONS === */}
            <section id="skills" className="py-24 bg-background border-t">
              <div className="container max-w-6xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold font-display">
                        Soft Skills & Technical Proficiency
                      </h2>
                      <p className="text-muted-foreground">
                        Tools and technologies I leverage to solve problems.
                      </p>
                    </div>

                    <Tabs defaultValue="Soft Skills" className="w-full">
                      <TabsList className="bg-muted border w-full justify-start p-1 mb-6">
                        {["Soft Skills", "Technical", "Tools"].map((tab) => (
                          <TabsTrigger
                            key={tab}
                            value={tab}
                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                          >
                            {tab}
                          </TabsTrigger>
                        ))}
                      </TabsList>

                      {["Soft Skills", "Technical", "Tools"].map((category) => (
                        <TabsContent
                          key={category}
                          value={category}
                          className="space-y-4 mt-0"
                        >
                          {DATA.skills
                            .filter((s) => s.category === category)
                            .map((skill, idx) => (
                              <div key={idx} className="space-y-2">
                                <div className="flex justify-between text-sm font-medium">
                                  <span>{skill.name}</span>
                                  <span className="text-muted-foreground">
                                    {skill.proficiency}%
                                  </span>
                                </div>
                                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{
                                      width: `${skill.proficiency}%`,
                                    }}
                                    transition={{
                                      duration: 1,
                                      ease: "easeOut",
                                    }}
                                    className="h-full bg-primary rounded-full"
                                  />
                                </div>
                              </div>
                            ))}
                        </TabsContent>
                      ))}
                    </Tabs>
                  </div>

                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold font-display">
                        Certifications
                      </h2>
                      <p className="text-muted-foreground">
                        Validated knowledge and achievements.
                      </p>
                    </div>
                    <div className="max-h-[500px] overflow-y-auto pr-4 space-y-4 scrollbar-thin scrollbar-thumb-primary/20">
                      {DATA.certifications.map((cert) => (
                        <motion.a
                          key={cert.id}
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          className="block"
                        >
                          <div className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors flex items-start gap-4 cursor-pointer">
                            <div className="bg-primary/10 p-2 rounded-lg text-primary mt-1">
                              <Award className="w-6 h-6" />
                            </div>

                            <div>
                              <h4 className="font-bold text-lg">{cert.name}</h4>
                              <p className="text-muted-foreground text-sm mb-1">
                                {cert.issuer} • {cert.date}
                              </p>
                              <span className="text-primary text-sm font-medium">
                                View Certificate →
                              </span>
                            </div>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* === COLLABORATE SECTION === */}
            <section
              id="collaborate"
              className="py-24 bg-primary text-white overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -ml-48 -mb-48" />

              <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="inline-flex p-3 rounded-2xl bg-white/20 backdrop-blur-sm mb-4">
                    <Users className="w-10 h-10" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold font-display">
                    Collaborate & Discuss Ideas
                  </h2>
                  <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                    I am keen on collaborating with entrepreneurs and
                    visionaries to discuss and develop innovative ideas in the
                    Tech, Banking and Agriculture space.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <ScrollLink to="contact" smooth={true} offset={-80}>
                      <Button
                        size="lg"
                        variant="secondary"
                        className="bg-white text-primary hover:bg-blue-50 font-bold px-8 py-6 rounded-xl text-lg"
                      >
                        <MessageSquare className="mr-2 w-5 h-5" /> Let's
                        Brainstorm
                      </Button>
                    </ScrollLink>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* === GALLERY SECTION === */}
            <section id="gallery" className="py-24 bg-background border-t">
              <div className="container max-w-6xl mx-auto px-4 md:px-6">
                <div className="text-center mb-12 space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold font-display">
                    Gallery
                  </h2>
                  <p className="text-muted-foreground">
                    Moments and memories from my journey.
                  </p>
                </div>

                <div className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide snap-x snap-mandatory">
                  {DATA.gallery.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="min-w-[280px] md:min-w-[350px] aspect-[4/3] relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all group snap-center"
                      onClick={() => setZoomItem({ type: "image", data: img })}
                    >
                      <img
                        src={img}
                        alt={`Gallery ${i}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* === CONTACT SECTION === */}
            <section id="contact" className="py-24 bg-muted/30">
              <div className="container max-w-4xl mx-auto px-4 md:px-6">
                <div className="text-center mb-12 space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold font-display">
                    Get In Touch
                  </h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Interested in connecting, networking or discussing a project
                    or a potential role? I'd love to hear from you. Feel free to
                    reach out to me using my social media profiles, the form
                    below or via my email.
                  </p>
                </div>

                <Card className="border-border/50 shadow-2xl rounded-2xl overflow-hidden bg-card">
                  <div className="grid grid-cols-1 md:grid-cols-5">
                    {/* === SOCIAL MEDIA CONTACT === */}
                    <div className="md:col-span-2 bg-primary p-8 text-primary-foreground">
                      <h3 className="text-xl font-bold mb-6">
                        Connect with me on
                      </h3>

                      <div className="space-y-4">
                        {/* LinkedIn */}
                        <a
                          href="https://www.linkedin.com/in/nithish-chouti-179425228"
                          target="_blank"
                          rel="noopener"
                          className="flex items-center gap-4 bg-white/20 px-4 py-3 rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
                        >
                          <Linkedin className="w-5 h-5" />
                          <span className="font-medium">LinkedIn</span>
                        </a>

                        {/* GitHub */}
                        <a
                          href="https://github.com/nithishchouti"
                          target="_blank"
                          rel="noopener"
                          className="flex items-center gap-4 bg-white/20 px-4 py-3 rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
                        >
                          <Github className="w-5 h-5" />
                          <span className="font-medium">GitHub</span>
                        </a>

                        {/* Gmail */}
                        <a
                          href="mailto:nithishchouti2003@gmail.com"
                          className="flex items-center gap-4 bg-white/20 px-4 py-3 rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
                        >
                          <Mail className="w-5 h-5" />
                          <span className="font-medium">Gmail</span>
                        </a>

                        {/* Instagram */}
                        <a
                          href="https://www.instagram.com/nithish_chouti/"
                          target="_blank"
                          rel="noopener"
                          className="flex items-center gap-4 bg-white/20 px-4 py-3 rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
                        >
                          <Instagram className="w-5 h-5" />
                          <span className="font-medium">Instagram</span>
                        </a>

                        {/* X */}
                        <a
                          href="https://x.com/NithishChouti"
                          target="_blank"
                          rel="noopener"
                          className="flex items-center gap-4 bg-white/20 px-4 py-3 rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
                        >
                          <X className="w-5 h-5" />
                          <span className="font-medium">X</span>
                        </a>
                      </div>
                    </div>

                    <div className="md:col-span-3 p-8">
                      <Form {...form}>
                        <form
                          onSubmit={form.handleSubmit(onSubmit)}
                          className="space-y-6"
                        >
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Your Name"
                                    {...field}
                                    className="rounded-lg bg-background"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="your@email.com"
                                    {...field}
                                    className="rounded-lg bg-background"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Your Message</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="How can I help you?"
                                    className="min-h-[120px] rounded-lg bg-background"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button
                            type="submit"
                            className="w-full py-6 rounded-xl text-lg font-bold shadow-lg"
                            disabled={contactMutation.isPending}
                          >
                            {contactMutation.isPending
                              ? "Sending..."
                              : "Send Message"}{" "}
                            <Send className="ml-2 w-5 h-5" />
                          </Button>
                        </form>
                      </Form>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <Footer />

            {/* === SCROLL TO TOP BUTTON === */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  onClick={scrollToTop}
                  className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-6 h-6" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* === ZOOM OVERLAY === */}
            <AnimatePresence>
              {zoomItem && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
                  onClick={() => setZoomItem(null)}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative max-w-4xl w-full bg-card rounded-3xl shadow-2xl overflow-y-auto max-h-[85vh] border border-border"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="absolute top-4 right-4 p-2 rounded-full bg-background/50 hover:bg-background transition-colors z-10"
                      onClick={() => setZoomItem(null)}
                    >
                      <X className="w-6 h-6" />
                    </button>

                    {zoomItem.type === "image" && (
                      <img
                        src={zoomItem.data}
                        alt="Zoomed"
                        className="w-full h-auto max-h-[80vh] object-contain"
                      />
                    )}

                    {zoomItem.type === "certificate" && (
                      <div className="p-4 flex justify-center items-center w-full h-full bg-black/5 min-h-[50vh]">
                        <img
                          src={zoomItem.data}
                          alt="Certificate"
                          className="max-w-full max-h-[80vh] object-contain rounded shadow-sm"
                        />
                      </div>
                    )}

                    {zoomItem.type === "project" && (
                      <div className="p-6 md:p-12 space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                            <Database className="w-8 h-8" />
                          </div>
                          <div>
                            <Badge variant="outline" className="mb-2">
                              {zoomItem.data.category}
                            </Badge>
                            <h3 className="text-3xl md:text-4xl font-bold font-display">
                              {zoomItem.data.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {zoomItem.data.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {zoomItem.data.techStack.map((tech: string) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="px-4 py-1 text-sm"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="pt-6 border-t flex gap-4">
                          <a
                            href={zoomItem.data.sourceCode}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="rounded-xl px-8 py-6 h-auto text-lg">
                              Source Code
                            </Button>
                          </a>
                        </div>
                      </div>
                    )}

                    {zoomItem.type === "highlight" && (
                      <div className="p-6 md:p-12 space-y-6">
                        <div className="flex justify-between items-start">
                          <Badge className="px-4 py-1 text-sm">
                            {zoomItem.data.type}
                          </Badge>
                          <span className="text-sm font-medium text-muted-foreground">
                            {zoomItem.data.date}
                          </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold font-display">
                          {zoomItem.data.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                          {zoomItem.data.description}
                        </p>
                        <div className="pt-6 border-t">
                          <a
                            href={zoomItem.data.links}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="rounded-xl px-8 py-6 h-auto text-lg">
                              View More Details
                            </Button>
                          </a>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
