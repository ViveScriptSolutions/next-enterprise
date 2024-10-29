import { Product } from "@/types/product.types";
import { Project } from "@/types/projects.types";
import { Service } from "@/types/service.types";

const category = {
  webDevelopment: "Web Development",
  mobileApp: "Mobile App",
  eCommerceSolutions: "E-commerce Solutions",
  customSoftware: "Custom Software/Tools",
  workflowAutomation: "Workflow Automation",
  dataAnalysis: "Data Analysis",
  aiIntegration: "AI Integration",
  googleSheets: "Google Sheets",
  hostingAndManagement: "Full-Service Hosting & Management",
  businessAutomation: "Business Automation",
};

export const projects: Project[] = [
  {
    id: "1",
    name: "E-commerce Website",
    slug: "e-commerce-website",
    description:
      "A fully responsive e-commerce website with payment integration, product catalog, and user accounts.",
    technologies: ["React", "Next.js", "Stripe", "TailwindCSS"],
    imageUrl: "/assets/images/appointment-img.png",
    demoUrl: "https://ecommerce-demo.com",
    repoUrl: "https://github.com/vivescript/ecommerce",
    details:
      "This project is a fully functional e-commerce platform that features product listings, a shopping cart, and user authentication. The site integrates with Stripe for payment processing and utilizes a React frontend for a seamless user experience.",
  },
  {
    id: "2",
    name: "Portfolio Website",
    description:
      "A modern portfolio website showcasing various projects and blogs. It features a blog section, contact form, and responsive design.",
    slug: "portfolio-website",
    technologies: ["Next.js", "Typescript", "TailwindCSS", "Markdown"],
    imageUrl: "/assets/images/appointment-img.png",
    demoUrl: "https://portfolio-demo.com",
    repoUrl: "https://github.com/vivescript/portfolio",
    details:
      "This portfolio site highlights different projects, including detailed project pages, a blog section, and a contact form. Built using Next.js, the site features responsive design and allows for easy management of projects and blog posts.",
  },
  // More projects can be added here
];

export const productList: Product[] = [
  {
    id: "1",
    title: "E-commerce Website (full-stack)",
    slug: "develop-e-commerce-website",
    category: category.webDevelopment,
    technology: ["HTML", "CSS", "React", "Next.js", "JavaScript", "TypeScript"],
    tags: [
      "PSD",
      "HTML",
      "web-development",
      "website",
      "webapp",
      "e-commerce",
      "full-stack",
    ],
    basePrice: 4999.99,
    minimumDays: 60,
    description:
      "I will develop your dream e-commerce website, just give me your design, I will make your website live in 60 days. Your site will be developed in Next.js 14 along with other necessary technology. This package offer both front-end and backend development that includes admin panel and dashboard. I will develop a standard dashboard, if you have any specific requirement,let me know. For database you can chose either MongoDB, Firebase, or any of your choice. Choose Next.js or React for SEO-friendly development. Share your design (or preference) and place your ORDER NOW.",
    keyFeature: [
      "Fully responsive website",
      "SEO friendly",
      "Modular Reusable Design",
      "Next.js for better SEO",
      "Blog section",
      "Admin Panel",
    ],
    images: [
      "/assets/images/authentication-light.png",
      "/assets/images/appointments-bg.png",
      "/assets/images/authentication-dark.png",
    ],
    addOns: [
      {
        name: "Additional Revision",
        price: 0,
        additionalDays: 0,
        notes: "Included with the package",
      },
      { name: "Additional Page", price: 0, additionalDays: 0, notes: "" },
      {
        name: "Add Dark and Light Theme",
        price: 199,
        additionalDays: 3,
        notes: "",
      },
      {
        name: "Integration with Payment Gateway",
        price: 0,
        additionalDays: 0,
        notes: "Integration with Stripe, PayPal, etc.",
      },
      {
        name: "Custom Animation",
        price: 299,
        additionalDays: 5,
        notes: "Custom animations or effects for the website",
      },
      {
        name: "CMS Integration",
        price: 999,
        additionalDays: 14,
        notes:
          "Content Management System integration (WordPress, Strapi, etc.)",
      },
      {
        name: "Blog Setup",
        price: 0,
        additionalDays: 0,
        notes: "Includes basic blog setup and layout design",
      },
    ],
    faq: [
      {
        question: "Should I place an order if it is an urgent project?",
        answer:
          "No, don’t place an order if your project is urgent. Instead, email the details to info@vivescriptsolutions.com. Provide as much information as possible, including your deadline. We’ll respond quickly, but we recommend exploring alternative solutions in the meantime in case we are unable to take on your project.",
      },
      {
        question: "Should I place an order before any discussion with you?",
        answer:
          "Yes, feel free to place an order if this gig fits your needs. We’re committed to finding a solution for you, and if your project aligns with the gig’s criteria, we’ll make sure it’s a success.",
      },
      {
        question: "Do you offer fully responsive designs?",
        answer:
          "Absolutely! Every website I build will be fully responsive and work across all devices, from desktops to mobile phones.",
      },
      {
        question: "Can you work with Tailwind CSS or Vanilla CSS?",
        answer:
          "Yes, I can develop your site using either Tailwind CSS or Vanilla CSS, depending on your preferences or project requirements.",
      },
      {
        question:
          "Do you provide the source code after the project is completed?",
        answer:
          "Yes, I deliver the full source code after the project is done. This allows you or your developer to easily update or integrate it into other systems.",
      },
      {
        question: "What if I want the site built in Next.js?",
        answer:
          "I can absolutely build your site with Next.js. It’s a great choice for SEO optimization and modern web development.",
      },
      {
        question: "How long will it take to complete my website?",
        answer:
          "The minimum delivery time is 60 days, depending on the complexity of the project and your specific requirements.",
      },
      {
        question: "Can you ensure SEO-friendly code for my website?",
        answer:
          "Yes, I follow SEO best practices to ensure your website is optimized for search engines.",
      },
      {
        question: "What files do I need to share for the project? ",
        answer:
          "You’ll need to share your design files, whether they’re in Figma, XD, PSD, or PDF format.",
      },
    ],
  },
  {
    id: "2",
    title: "Static Website Development",
    slug: "static-website-development",
    category: category.webDevelopment,
    technology: ["HTML", "CSS", "React", "Next.js"],
    tags: [
      "static website",
      "HTML",
      "CSS",
      "marketing website",
      "contact form",
      "Next.js",
      "React",
    ],
    basePrice: 1999.99,
    minimumDays: 15,
    description:
      "I will develop a fully responsive static website tailored for marketing purposes. This site will be built using HTML, CSS, React, or Next.js, depending on your preferences. The website will include essential sections such as a landing page, services, about us, and a contact form, without the need for authentication, admin panels, or complex features. Perfect for businesses looking for a fast, lightweight, and SEO-friendly website. You can choose to develop the site using React or Next.js for optimal performance and SEO benefits. Share your design or requirements and place your ORDER NOW.",
    keyFeature: [
      "Responsive across all devices",
      "SEO-friendly code",
      "Includes contact form",
      "Fast loading speed",
      "Clean and structured code",
      "Built with HTML/CSS or React/Next.js",
    ],
    images: [
      "/assets/images/static-website/sample.webp",
      "/assets/images/static-website/sample1.webp",
      "/assets/images/static-website/sample2.webp",
      "/assets/images/static-website/sample3.webp",
      "/assets/images/static-website/sample4.webp",
    ],
    addOns: [
      { name: "Additional Revision", price: 49, additionalDays: 1, notes: "" },
      { name: "Additional Page", price: 29, additionalDays: 2, notes: "" },
      {
        name: "Add Dark and Light Theme",
        price: 199,
        additionalDays: 3,
        notes: "",
      },
      {
        name: "Custom Animation",
        price: 249,
        additionalDays: 5,
        notes: "Simple animations for enhanced user experience.",
      },
      {
        name: "Add Google Analytics",
        price: 49,
        additionalDays: 1,
        notes:
          "Google Analytics setup for tracking site traffic and user behavior.",
      },
      {
        name: "SEO Optimization",
        price: 199,
        additionalDays: 5,
        notes: "In-depth SEO setup for better ranking on search engines.",
      },
      {
        name: "Contact Form Integration with Email",
        price: 99,
        additionalDays: 1,
        notes: "Integrate contact form submissions with your email.",
      },
    ],
    faq: [
      {
        question: "What is included in the static website?",
        answer:
          "The static website will include essential pages like a landing page, services page, about us, and a contact form. It’s designed for marketing purposes and doesn’t include features like blogs, authentication, or admin panels.",
      },
      {
        question: "Can you ensure SEO-friendly code?",
        answer:
          "Yes, the website will be built following SEO best practices to ensure your site is optimized for search engines.",
      },
      {
        question: "Can you add animations or custom effects?",
        answer:
          "Yes, I can add custom animations for an additional fee. This helps enhance user experience and engagement on your website.",
      },
      {
        question: "Do you provide support after the website is delivered?",
        answer:
          "Yes, I offer support after delivery to ensure the website functions as intended. Any revisions or updates can be handled via additional services if necessary.",
      },
      {
        question: "Will the website be responsive?",
        answer:
          "Absolutely! The website will be fully responsive and optimized for viewing on all devices, including desktops, tablets, and smartphones.",
      },
      {
        question: "How long will it take to complete the static website?",
        answer:
          "The project will take a minimum of 15 days, depending on the complexity and number of pages required.",
      },
      {
        question: "Can I request changes during development?",
        answer:
          "Yes, minor revisions are included, but any significant changes or additional pages will incur additional costs as add-ons.",
      },
    ],
    videoUrl: "https://youtu.be/ZpQYosAwNpQ?si=_V4LhFKkcz6WKvV3",
  },
  {
    id: "3",
    title: "Landing Page Development",
    slug: "landing-page-development",
    category: category.webDevelopment,
    technology: ["HTML", "CSS", "React", "Next.js"],
    tags: [
      "landing page",
      "single-page",
      "lead generation",
      "SEO",
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "marketing page",
    ],
    basePrice: 999.99,
    minimumDays: 7,
    description:
      "I will design and develop a high-converting landing page to promote your product, service, or marketing campaign. The landing page will be built using HTML, CSS, React, or Next.js based on your preference. It will be fast, fully responsive, and SEO-optimized, helping you achieve your marketing goals. Perfect for businesses looking to launch a focused and effective marketing campaign. You can share your design or brief, and I’ll handle the rest. Place your ORDER NOW and get a professional landing page to capture leads or drive conversions.",
    keyFeature: [
      "High-converting design",
      "SEO-friendly code",
      "Fast loading and optimized for performance",
      "Responsive on all devices",
      "Built with HTML/CSS or React/Next.js",
      "Includes contact form or call-to-action",
    ],
    addOns: [
      { name: "Additional Revision", price: 49, additionalDays: 1, notes: "" },
      { name: "Custom Animation", price: 199, additionalDays: 3, notes: "" },
      { name: "Additional Section", price: 49, additionalDays: 2, notes: "" },
      {
        name: "SEO Optimization",
        price: 199,
        additionalDays: 3,
        notes: "Full SEO setup to improve search engine rankings.",
      },
      {
        name: "Add Google Analytics",
        price: 99,
        additionalDays: 1,
        notes:
          "Google Analytics setup to track visitor traffic and user behavior.",
      },
      {
        name: "Integrate Email Marketing Form",
        price: 149,
        additionalDays: 1,
        notes:
          "Connect a form to your email marketing platform (Mailchimp, etc.).",
      },
    ],
    faq: [
      {
        question: "What is included in the landing page development?",
        answer:
          "The landing page will include a high-converting design, a contact form or call-to-action, and will be optimized for performance and SEO. It will be fully responsive across all devices.",
      },
      {
        question: "Can I add custom animations to my landing page?",
        answer:
          "Yes, I offer custom animations as an add-on to enhance user experience and engagement on your landing page.",
      },
      {
        question: "Is the landing page SEO-friendly?",
        answer:
          "Yes, I follow SEO best practices to ensure your landing page ranks well on search engines.",
      },
      {
        question:
          "Can you integrate my landing page with my email marketing tool?",
        answer:
          "Yes, I can integrate your landing page with popular email marketing platforms like Mailchimp, allowing you to capture and manage leads effectively.",
      },
      {
        question: "How long will it take to develop the landing page?",
        answer:
          "The minimum delivery time is 7 days, depending on the complexity and any add-ons you select.",
      },
      {
        question: "Do you provide revisions?",
        answer:
          "Yes, I offer revisions as an add-on, allowing you to request changes after the initial delivery.",
      },
      {
        question: "What design files do I need to provide?",
        answer:
          "You can provide any design files, such as PSD, Figma, or XD, or simply share your design ideas, and I’ll bring them to life.",
      },
    ],
  },
  {
    id: "4",
    title: "Google Sheets Automation & Customization",
    slug: "google-sheets-automation-customization",
    category: category.googleSheets,
    technology: ["Google Sheets", "Google Apps Script", "JavaScript", "APIs"],
    tags: [
      "Google Sheets",
      "automation",
      "custom formulas",
      "data analysis",
      "reporting",
      "dashboards",
      "API integration",
      "spreadsheet solutions",
    ],
    basePrice: 299.99,
    minimumDays: 3,
    description:
      "I will automate and customize your Google Sheets to streamline your business processes, manage data more efficiently, and generate dynamic reports or dashboards. Whether you need custom formulas, data integration, automation through Google Apps Script, or third-party API integration, I can build a solution tailored to your needs. Perfect for businesses looking to simplify workflows, automate repetitive tasks, or generate insightful reports. Share your requirements, and I’ll develop a robust Google Sheets solution for you.",
    keyFeature: [
      "Custom formulas and functions",
      "Google Apps Script automation",
      "Data import/export automation",
      "Integration with external APIs",
      "Interactive dashboards and reports",
      "Automate repetitive tasks",
      "Real-time collaboration with Google Sheets",
    ],
    images: [
      "/assets/images/google-sheets-automation-1.png",
      "/assets/images/google-sheets-automation-2.png",
    ],
    addOns: [
      // { name: "Additional Automation", price: 99, additionalDays: 1, notes: "" },
      { name: "Custom Dashboard", price: 199, additionalDays: 2, notes: "" },
      {
        name: "API Integration",
        price: 299,
        additionalDays: 3,
        notes: "Integrate with third-party apps using Google Sheets API.",
      },
      {
        name: "Google Drive Integration",
        price: 99,
        additionalDays: 1,
        notes: "Automate interactions between Google Sheets and Google Drive.",
      },
      {
        name: "Custom Reporting Templates",
        price: 149,
        additionalDays: 1,
        notes: "Create personalized templates for recurring reports.",
      },
      // {
      //   name: "Data Validation & Error Checking",
      //   price: 79,
      //   additionalDays: 1,
      //   notes: "Ensure data accuracy by implementing validation rules.",
      // },
    ],
    faq: [
      {
        question: "What kind of automation can you create in Google Sheets?",
        answer:
          "I can automate repetitive tasks such as importing/exporting data, updating records, generating reports, and sending automated emails or alerts using Google Apps Script.",
      },
      {
        question: "Can you integrate Google Sheets with external apps?",
        answer:
          "Yes, I can integrate Google Sheets with third-party apps via APIs, allowing seamless data exchange and automation between platforms like CRMs, project management tools, and other software.",
      },
      {
        question: "What type of custom formulas can you create?",
        answer:
          "I can build complex custom formulas and functions to automate calculations, data transformations, and other specific needs that go beyond the default Google Sheets capabilities.",
      },
      {
        question: "Can you create dashboards in Google Sheets?",
        answer:
          "Yes, I can design dynamic dashboards that provide real-time data insights, visualizations, and key performance metrics directly within Google Sheets.",
      },
      {
        question:
          "How long does it take to complete a Google Sheets automation project?",
        answer:
          "The minimum delivery time is 3 days, but it can vary based on the complexity of the automation and any integrations required.",
      },
      {
        question: "Do you offer support after the project is completed?",
        answer:
          "Yes, I provide post-project support to ensure everything runs smoothly and to make any necessary adjustments or fixes.",
      },
      {
        question: "What kind of data validation can you implement?",
        answer:
          "I can add rules to ensure the accuracy and consistency of your data, including checking for errors, duplicates, or incomplete data entries.",
      },
    ],
  },
  {
    id: "5",
    title: "AI Integration for Workflow Automation",
    slug: "ai-integration-workflow-automation",
    category: category.aiIntegration,
    technology: ["OpenAI", "TensorFlow", "API", "Machine Learning"],
    tags: [
      "AI",
      "workflow automation",
      "machine learning",
      "artificial intelligence",
      "automation",
      "data processing",
      "AI integration",
      "predictive analytics",
    ],
    basePrice: 5999.99,
    minimumDays: 45,
    description:
      "I will integrate AI into your business workflows to automate tasks, streamline processes, and enhance decision-making. Whether you need machine learning models, AI-based customer support, predictive analytics, or intelligent data processing, I can develop a custom solution tailored to your needs. By leveraging AI, your business can improve efficiency, reduce operational costs, and unlock new growth opportunities. Share your requirements, and I'll create a fully customized AI solution for you.",
    keyFeature: [
      "AI-powered task automation",
      "Custom machine learning models",
      "Predictive analytics and insights",
      "Natural language processing for customer support",
      "Intelligent data processing and analysis",
      "Seamless integration with existing workflows",
      "Custom API integration for AI services",
    ],
    images: [
      "/assets/images/ai-integration-1.png",
      "/assets/images/ai-integration-2.png",
    ],
    addOns: [
      { name: "Additional AI Model", price: 499, additionalDays: 5, notes: "" },
      {
        name: "Advanced Predictive Analytics",
        price: 399,
        additionalDays: 3,
        notes: "",
      },
      // {
      //   name: "Natural Language Processing (NLP) Integration",
      //   price: 799,
      //   additionalDays: 7,
      //   notes: "Integrate AI-powered chatbots or customer support with NLP.",
      // },
      {
        name: "API Integration for AI Services",
        price: 299,
        additionalDays: 3,
        notes:
          "Integrate AI services into your existing workflows using custom APIs.",
      },
      {
        name: "Data Cleaning and Preprocessing",
        price: 199,
        additionalDays: 2,
        notes:
          "Prepare your data for machine learning models with automated data cleaning.",
      },
      {
        name: "Ongoing AI Model Training and Support",
        price: 599,
        additionalDays: 10,
        notes:
          "Provide ongoing support and training for AI models after project completion.",
      },
    ],
    faq: [
      {
        question: "What types of workflows can you automate using AI?",
        answer:
          "I can automate a wide range of workflows, including data processing, predictive analytics, customer support, marketing automation, and more. AI can improve the efficiency of repetitive tasks and help you make data-driven decisions.",
      },
      {
        question: "Can you integrate AI with my existing tools and software?",
        answer:
          "Yes, I can integrate AI with your existing systems, whether through APIs or custom solutions. This allows AI to work seamlessly within your current workflow, providing enhanced functionality without disrupting operations.",
      },
      {
        question: "What kind of AI models do you work with?",
        answer:
          "I work with machine learning models for tasks such as predictive analytics, natural language processing (NLP), image recognition, and more. I can build custom models or integrate pre-built models depending on your needs.",
      },
      {
        question: "How long does it take to integrate AI into my workflow?",
        answer:
          "The minimum delivery time is 45 days, depending on the complexity of the AI model and the specific requirements of your workflow. Some integrations may take longer if more advanced AI models or custom solutions are required.",
      },
      {
        question: "Can AI be used for customer support automation?",
        answer:
          "Yes, I can integrate AI-powered chatbots and natural language processing tools to automate customer support, helping your business respond to inquiries faster and more efficiently.",
      },
      {
        question: "What kind of data do you need to build AI models?",
        answer:
          "The data required depends on the type of AI model you need. For predictive analytics, I may need historical data; for customer support, interaction logs; and for NLP, text datasets. I'll guide you on the specific data requirements for your project.",
      },
      {
        question:
          "Will I receive the source code after the project is completed?",
        answer:
          "Yes, you will receive the full source code and all necessary documentation so that your team can maintain, update, or further develop the AI integration if needed.",
      },
      {
        question: "Do you provide training or ongoing support for AI models?",
        answer:
          "Yes, I offer ongoing support, including model retraining, performance monitoring, and updates, to ensure the AI solution continues to perform as needed.",
      },
    ],
  },
  {
    id: "6",
    title: "Custom Android App Development",
    slug: "custom-android-app-development",
    category: category.mobileApp,
    technology: [
      "Kotlin",
      "Firebase",
      "SQLite",
      "Android Studio",
      "ReactNative",
      "expo",
    ],
    tags: [
      "android-app-development",
      "mobile-app",
      "app-development",
      "android",
      "ReactNative",
      "expo",
      "custom-app",
      "mobile-solution",
    ],
    basePrice: 7999.99,
    minimumDays: 90,
    description:
      "I will develop a custom Android mobile app tailored to your specific business requirements. The app will include modern UI/UX design, optimized performance, and integration with third-party APIs as needed. Whether you're looking for a utility app, a business solution, or an app for customer engagement, I will guide you through the process from concept to deployment on the Google Play Store. Share your app idea, and let’s build something great together!",
    keyFeature: [
      "Custom Android app development",
      "Responsive UI/UX design",
      "API and backend integration",
      "Optimized for performance and security",
      "Google Play Store deployment",
      "Post-launch support and maintenance",
    ],
    images: [
      "/assets/images/android-app-1.png",
      "/assets/images/android-app-2.png",
    ],
    addOns: [
      { name: "Additional Screen", price: 199, additionalDays: 2, notes: "" },
      {
        name: "Push Notifications Integration",
        price: 299,
        additionalDays: 3,
        notes: "",
      },
      {
        name: "Backend Integration (Firebase)",
        price: 499,
        additionalDays: 5,
        notes:
          "Integrate with Firebase for authentication, database, and analytics.",
      },
      {
        name: "In-App Purchases",
        price: 599,
        additionalDays: 7,
        notes: "Monetize your app with in-app purchases.",
      },
      {
        name: "Google AdMob Integration",
        price: 399,
        additionalDays: 5,
        notes:
          "Enable ads in your app for revenue generation through Google AdMob.",
      },
      {
        name: "Multi-Language Support",
        price: 199,
        additionalDays: 3,
        notes:
          "Implement multi-language support for your app to reach a global audience.",
      },
      {
        name: "Social Media Login",
        price: 299,
        additionalDays: 3,
        notes:
          "Allow users to log in using social media accounts like Google or Facebook.",
      },
      {
        name: "Post-launch Bug Fixing and Updates",
        price: 599,
        additionalDays: 14,
        notes: "Includes bug fixing and app updates post-launch for 30 days.",
      },
    ],
    faq: [
      {
        question: "What types of Android apps can you develop?",
        answer:
          "I can develop a wide range of Android apps, from utility apps and business solutions to social media platforms and customer engagement tools.",
      },
      {
        question: "How do you ensure app performance and security?",
        answer:
          "I optimize the app for performance by minimizing memory usage, improving responsiveness, and following Android best practices. For security, I implement data encryption, secure APIs, and follow OWASP guidelines.",
      },
      {
        question: "Will you help me publish the app on Google Play Store?",
        answer:
          "Yes, I will assist with app deployment on the Google Play Store, including creating a developer account and submitting your app for review.",
      },
      {
        question: "Do you offer ongoing maintenance and support?",
        answer:
          "Yes, I offer post-launch support for bug fixes, app updates, and any further development needs for up to 30 days. Extended support can be arranged as needed.",
      },
      {
        question: "Can I integrate third-party APIs in my app?",
        answer:
          "Absolutely! I can integrate various third-party APIs like payment gateways, social media, maps, or any other APIs required for your app.",
      },
      {
        question: "Do you use Firebase for backend services?",
        answer:
          "Yes, Firebase is a great choice for Android app backends. It provides real-time databases, authentication, analytics, and other useful services. If required, I can also use other backend technologies.",
      },
      {
        question: "What files or assets do I need to share?",
        answer:
          "You’ll need to share app design files (if you have them), a detailed description of the app's functionality, and any specific branding elements like logos or images.",
      },
      {
        question: "Can I monetize my app with ads or in-app purchases?",
        answer:
          "Yes, I can integrate Google AdMob for ads or set up in-app purchases to monetize your app effectively.",
      },
    ],
  },

  // {
  //   id: "2",
  //   title: "Google Sheet API integrated with your Website",
  //   slug: "product2",
  //   technology: ["HTML", "CSS", "JavaScript", "TypeScript"],
  //   basePrice: 299,
  //   minimumDays: 9,
  //   description:
  //     "I will integrate Google Sheet API with your website (JavaScript). Also connect your Google Sheet with any other API. This includes creating Google Service accounts, Auth 2.0 authentication, and integration with Google Sheet API. Actually, you can add any other Google API's once I set everything. At present, I use Google Sheet as my Next.Js web database. There is a lot of API's you might want to integrate with. You can consider this for that also. Shopping APIs (Amazon (AWS, Shopping, Marketplace) API, eBay API, Google API, Etsy, PriceGrabber, PriceRunner, etc), Affiliate Network APIs (ClickBank, ShareASale, CJ Affiliate by Conversant, Affiliate Window, TradeDoubler, etc), Social Media and CRM APIs Above are just a few examples of APIs I have worked with. If you don't see your desired API in the list above, it does not mean I can not work with it. Please message us to discuss furthermore.lessabout the product details",
  //   images: ["/assets/images/authentication-dark.png"],
  // },
  // {
  //   id: "3",
  //   title: "One (1) hour of virtual assistant service and consultation",
  //   slug: "product3",
  //   technology: ["JavaScript", "Excel", "Googel Sheet", "PPT", "Web-app"],
  //   basePrice: 29.99,
  //   minimumDays: 1,
  //   description:
  //     "I'm an honest, dedicated, and hardworking person with plenty of experience in the admin job. I've worked in different roles over the course of my career including Admin Officer, Sales Admin, Accounts Assistant, and Project Manager. I can be the perfect candidate for your remote assistant. Along with that, I am an Excel Expert. I'm offering the following service for you: Project Manager Run campaign Recruit expert Maintain Payroll Virtual Assistance Response E-mail Customer Service Maintain and Remind Your Schedule Product Listing Internet Research Deep Tracking Create & Design Forms and Format Data Entry Create Excel-based Format for Different Purpose Preparing your Report Help in Decision Making by Data Analysis Preparing PowerPoint Presentation Cleaning and Format Word Document Create PowerPoint Slide Master Template Maintain your Social Media Accounts Basic SEO Graphics Design And Other Required Job What I Don't Do? Cold Calling Phone Response Please message me with any queries or questions. I'll be right there for you.",
  //   images: ["/assets/images/authentication-dark.png"],
  // },
  // {
  //   id: "4",
  //   title: "Excel Dashboard with relevant Graphs & Charts.",
  //   slug: "product4",
  //   technology: ["Excel", "Google Sheet", "VBA"],
  //   basePrice: 99.99,
  //   minimumDays: 10,
  //   description:
  //     "You'll get an Excel Dashboard for your business data. It can be your sales data or project summary. What tools will I use: 1. I'll use Excel Pivot-Table, Slicer, Graphs/Charts, Maps, etc.; 2. I'll use advance nested Formula and Function; 3. I'll use VBA in case the project required to; 4. I'll embed the web data with the Dashboard if needed; 5. I'll make your dashboard look like it with your brand image. What will you get from me: 1. A professional Excel Dashboard; 2. You can get all your business data in a single place; 3. I'll make the Dashboard user friendly so you can update it easily; 4. I'll assist/teach you how to use/maintain it with video/image instruction or live session; 5. I'll give you after-sales service for 3 months. Please share with me detailed requirements, sample data, and Place Order Now.",
  //   images: ["/assets/images/authentication-dark.png"],
  // },
];

export const services: Service[] = [
  {
    id: "1",
    title: "Web Development",
    subTitle: "Crafting Digital Experiences That Engage",
    slug: "web-development",
    description:
      "Transform your online presence with our expert web development services. We specialize in creating custom websites tailored to your unique business needs. Our focus on responsive design and SEO optimization ensures your site not only looks great but also ranks well on search engines. Partner with us to bring your vision to life and drive user engagement.",
    brief:
      "We offer end-to-end web development services, creating websites that are fast, responsive, and tailored to meet your business goals. Whether it's a static site, dynamic e-commerce platform, or a custom web application, we ensure your online presence is optimized for user engagement and search engine visibility.",
    keyPoints: [
      "Custom website design",
      "Responsive and mobile-friendly",
      "SEO-optimized development",
      "E-commerce integration",
      "Web application development",
      "CMS platforms like WordPress, Shopify, and more",
    ],
    imageUrl: "/images/services/web-development.jpg",
    videoUrl: "https://www.youtube.com/embed/exampleVideoId",
    cta: {
      text: "Send project brief",
      link: "/contact",
    },
    faq: [
      {
        question: "What technologies do you use for web development?",
        answer:
          "We use modern frameworks and technologies like React, Next.js, Node.js, PHP, and CMS platforms like WordPress and Shopify, based on your project requirements.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "The timeline depends on the complexity of the project. On average, a standard website takes 4-6 weeks, while more complex sites or applications may take longer.",
      },
    ],
  },
  {
    id: "2",
    title: "Mobile App Development (Android)",
    subTitle: "Innovative Solutions for Your Mobile Needs",
    slug: "mobile-app-development-android",
    description:
      "Elevate your business with our bespoke Android app development services. We design and build user-friendly mobile applications that not only meet your business objectives but also engage your audience. From initial concept to deployment on the Google Play Store, we ensure a seamless experience that propels your brand forward.",
    brief:
      "We specialize in Android mobile app development, providing custom solutions that are user-friendly, scalable, and optimized for performance. Whether you're building a consumer-facing app or an enterprise solution, we ensure that your app meets your business requirements and is ready for the Google Play Store.",
    keyPoints: [
      "Native Android app development",
      "Custom mobile app solutions",
      "User-friendly and intuitive UI/UX design",
      "Integration with backend systems",
      "Google Play Store deployment",
      "Ongoing support and maintenance",
    ],
    imageUrl: "/images/services/mobile-app-development.jpg",
    videoUrl: "https://www.youtube.com/embed/exampleVideoId",
    cta: {
      text: "Send App Details",
      link: "/contact",
    },
    faq: [
      {
        question: "Do you develop apps for other platforms?",
        answer:
          "While we specialize in Android development, we can also create cross-platform apps using React Native or Flutter to target both Android and iOS devices.",
      },
      {
        question: "What is the process for mobile app development?",
        answer:
          "Our process includes initial consultation, design, development, testing, and deployment to the Google Play Store. We work closely with you throughout to ensure the app aligns with your vision.",
      },
    ],
  },
  {
    id: "3",
    title: "Google Sheets & Excel Expert Services",
    subTitle: "Transform Data Into Powerful Insights",
    slug: "google-sheet-excel-expert-services",
    description:
      "Unlock the full potential of your data with our Google Sheets and Excel expert services. We offer tailored solutions that automate workflows, enhance data organization, and generate insightful reports. With our expertise, you can streamline processes, improve accuracy, and make data-driven decisions that propel your business forward.",
    brief:
      "Our spreadsheet application services help businesses automate tasks, organize data, and generate insights using tools like Google Sheets, Excel, and more. Whether it's financial modeling, reporting, data analysis, or automating workflows, we create tailored solutions that save you time and improve accuracy.",
    keyPoints: [
      "Google Sheets automation",
      "Excel-based data analysis",
      "Custom spreadsheet solutions",
      "Financial modeling and reporting",
      "Integrations with third-party tools (Zapier, Google Workspace, etc.)",
      "Macros and advanced formulas",
    ],
    imageUrl: "/images/services/spreadsheet-applications.jpg",
    videoUrl: "https://www.youtube.com/embed/exampleVideoId",
    cta: {
      text: "How can we help you",
      link: "/contact",
    },
    faq: [
      {
        question: "Can you help automate tasks within spreadsheets?",
        answer:
          "Yes, we specialize in automating repetitive tasks in spreadsheets, such as generating reports, cleaning up data, and performing advanced calculations using macros or scripts.",
      },
      {
        question:
          "What types of businesses can benefit from spreadsheet automation?",
        answer:
          "Any business dealing with large amounts of data, financial reporting, or repetitive tasks can benefit from spreadsheet automation. We work with companies across industries, including finance, logistics, and marketing.",
      },
    ],
  },
  {
    id: "4",
    title: "Workflow Automation",
    subTitle: "Streamline Processes and Enhance Efficiency",
    slug: "workflow-automation",
    description:
      "Optimize your operations with our workflow automation solutions. We help businesses eliminate manual tasks, integrate various services, and streamline workflows through intelligent automation. Our goal is to increase your productivity while minimizing errors, so you can focus on what matters most—growing your business.",
    brief:
      "Boost productivity and reduce manual errors with our tailored workflow automation solutions. We help businesses automate repetitive tasks, integrate tools and services, and streamline operations using intelligent automation technologies.",
    keyPoints: [
      "Automated task management",
      "Third-party service integrations (Slack, Zapier, etc.)",
      "Custom workflow solutions",
      "Cloud automation",
      "Minimize human error and increase productivity",
    ],
    imageUrl: "/images/services/workflow-automation.jpg",
    videoUrl: "https://www.youtube.com/embed/exampleVideoId",
    cta: {
      text: "Tell Us Details",
      link: "/contact",
    },
    faq: [
      {
        question: "What kind of workflows can you automate?",
        answer:
          "We automate a variety of workflows, including employee onboarding, customer support, invoicing, and data entry tasks. Custom workflows can also be designed to fit your specific needs.",
      },
      {
        question: "Do I need coding knowledge to manage automated workflows?",
        answer:
          "No. Once the automation is set up, you can manage it without any coding experience. We provide easy-to-use interfaces or dashboards as needed.",
      },
    ],
  },
  {
    id: "5",
    title: "Business Data Analysis",
    subTitle: "Drive Growth Through Data Insights",
    slug: "business-data-analysis",
    description:
      "Transform raw data into actionable insights with our business data analysis services. We utilize advanced analytical tools to create custom reports and dashboards that highlight trends and performance metrics. Empower your decision-making process with data-driven strategies that fuel business growth.",
    brief:
      "Our business data analysis services provide actionable insights to help you make informed decisions. Using advanced tools like spreadsheets, BI software, and accounting tools, we turn raw data into meaningful reports and dashboards that drive business growth.",
    keyPoints: [
      "Data-driven decision making",
      "Custom reports and dashboards",
      "Trend analysis",
      "Spreadsheet automation",
      "Integration with accounting and CRM tools",
    ],
    imageUrl: "/images/services/data-analysis.jpg",
    videoUrl: "https://www.youtube.com/embed/exampleVideoId",
    cta: {
      text: "Send Details",
      link: "/contact",
    },
    faq: [
      {
        question: "What types of data can you analyze?",
        answer:
          "We analyze a wide range of business data, including sales, marketing, customer behavior, and financial data. Our goal is to uncover insights that drive performance and growth.",
      },
      {
        question: "What tools do you use for data analysis?",
        answer:
          "We use tools like Excel, Google Sheets, Power BI, Tableau, and accounting software integrations (QuickBooks, Xero, etc.) to perform deep analyses and generate custom reports.",
      },
    ],
  },
  // {
  //   id: "6",
  //   title: "Google Workspace Configuration",
  //   subTitle: "Optimize Your Team's Productivity",
  //   slug: "google-workspace-configuration",
  //   description:
  //     "Transform your business into a streamlined powerhouse with our Google Workspace Configuration service. We tailor Google Workspace to fit your unique needs, ensuring every team member has the tools to collaborate effectively and securely. Say goodbye to chaos and hello to organized workflows with our comprehensive setup, training, and ongoing support.",
  //   brief:
  //     "Streamline your business operations with Google Workspace. We configure Google Workspace for seamless collaboration, communication, and data security across your organization. From setting up user accounts to optimizing apps like Gmail, Drive, and Meet, we ensure your workspace is running efficiently.",
  //   keyPoints: [
  //     "Google Workspace account setup",
  //     "Email and calendar configuration",
  //     "Drive storage organization",
  //     "Security and permissions management",
  //     "Optimization of Google apps for productivity",
  //   ],
  //   imageUrl: "/images/services/google-workspace.jpg",
  //   videoUrl: "https://www.youtube.com/embed/exampleVideoId",
  //   cta: {
  //     text: "Start Now",
  //     link: "/contact",
  //   },
  //   faq: [
  //     {
  //       question: "How do I set up Google Workspace for my business?",
  //       answer:
  //         "We handle the entire setup process, including domain verification, user account creation, and configuration of apps like Gmail, Drive, Calendar, and Meet.",
  //     },
  //     {
  //       question: "Is Google Workspace secure for my business?",
  //       answer:
  //         "Yes, Google Workspace provides enterprise-level security features like 2-step verification, data encryption, and admin-controlled permissions to ensure the security of your data.",
  //     },
  //   ],
  // },
  {
    id: "7",
    title: "AI Integration",
    subTitle: "Harness the Power of AI for Growth",
    slug: "ai-integration",
    description:
      "Revolutionize your business processes with our AI Integration service. We develop customized AI solutions that fit your specific needs, enabling you to automate tedious tasks, gain insights through predictive analysis, and enhance customer interactions. Our expert team guides you through the entire process, ensuring a smooth implementation that drives innovation and efficiency.",
    brief:
      "Unlock the potential of artificial intelligence to enhance your business. From automation to predictive analysis, our AI solutions help you innovate and optimize operations, delivering measurable results.",
    keyPoints: [
      "Custom AI solutions",
      "AI-powered automation",
      "Predictive analysis",
      "Natural language processing",
      "AI chatbots and virtual assistants",
    ],
    imageUrl: "/images/services/ai-integration.jpg",
    videoUrl: "https://www.youtube.com/embed/exampleVideoId",
    cta: {
      text: "Start Now",
      link: "/contact",
    },
    faq: [
      {
        question: "How can AI improve my business operations?",
        answer:
          "AI can automate routine tasks, analyze large sets of data for decision-making, and enhance customer service with chatbots and virtual assistants, increasing overall efficiency.",
      },
      {
        question: "Do I need a large budget for AI implementation?",
        answer:
          "Not necessarily. AI solutions can be tailored to fit your budget and scale as your business grows. We offer cost-effective AI integrations for businesses of all sizes.",
      },
    ],
  },
];

export const adminEmails: string[] = ["vivescriptsolutions@gmail.com"];
