import { karla } from "@/app/font";
import { Timeline } from "@/components/ui/timeline";

const Experience = () => {
  const data = [
    {
      title: "Freelance",
      content: (
        <div>
          <p className="mb-8 lg:text-3xl  font-normal text-white  ">
            Frontend Engineer, Web Developer
          </p>
          <p className="mb-8 lg:text-3xl  font-normal text-white  ">
            July 2023 - Present
          </p>
          <div className={`grid  gap-4 ${karla.className}`}>
            <p className="text-sm lg:text-xl">
              Designed and developed responsive websites and web applications
              for clients across various industries using Next.js, React,
              Tailwind CSS, and ShadCN UI.
            </p>
            <p className="text-sm lg:text-xl">
              Delivered technical and customer support, including bug fixes,
              onboarding, and post-launch maintenance.
            </p>
            <p className="text-sm lg:text-xl">
              Collaborated with clients to translate business needs into
              functional digital solutions, including dashboards, landing pages,
              and e-commerce platforms.
            </p>
            <p className="text-sm lg:text-xl">
              Managed hosting, domain setup, and basic SEO optimization to
              ensure performance and discoverability.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "FixaRwanda",
      content: (
        <div>
          <p className="mb-8 lg:text-3xl  font-normal text-white  ">
            Frontend Developer
          </p>
          <p className="mb-8 lg:text-3xl  font-normal text-white  ">
            April 2025 - September 2025
          </p>
          <div className={`grid  gap-4 ${karla.className}`}>
            <p className="text-sm lg:text-xl">
              Develop, and maintain Fixa&apos;s HRM and Payroll Platforms and
              Uphold best practices for coding, testing, and deployment.
            </p>
            <p className="text-sm lg:text-xl">
              Contributed to the development using Next.js, Tailwind CSS, ShadCN
              UI, and TanStack Query.
            </p>
            <p className="text-sm lg:text-xl">
              Support in the oversight system architecture, ensuring
              scalability, security, and reliability.
            </p>
            <p className="text-sm lg:text-xl">
              Implemented responsive and accessible UI components, improving
              user experience across mobile and desktop platforms.
            </p>
            <p className="text-sm lg:text-xl">
              Collaborated with senior developers and product teams to deliver
              scalable features aligned with business goals.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Bento Africa",
      content: (
        <div>
          <p className="mb-8 lg:text-3xl  font-normal text-white  ">
            Frontend Developer, Technical Support Engineer
          </p>
          <p className="mb-8 lg:text-3xl  font-normal text-white  ">
            May 2024 - April 2025
          </p>
          <div className={`grid  gap-4 ${karla.className}`}>
            <p className="text-sm lg:text-xl">
              Collaborated with cross-functional teams to develop and implement
              technical solutions and worked closely with UX/UI designers to
              create visually appealing and user-friendly interfaces using vue
              js.
            </p>
            <p className="text-sm lg:text-xl">
              Created and updated technical documentation for internal and
              customer use. Optimized web applications for maximum speed and
              scalability.
            </p>
            <p className="text-sm lg:text-xl">
              Diagnosed and resolved complex technical issues, providing
              top-notch support to users.
            </p>
            <p className="text-sm lg:text-xl">
              Implemented responsive and accessible UI components, improving
              user experience across mobile and desktop platforms.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "HNG Internship",
      content: (
        <div>
          <p className="mb-8 lg:text-3xl  font-normal text-white  ">
            Frontend Intern
          </p>
          <p className="mb-8 lg:text-3xl  font-normal text-white  ">
            July 2024 - August 2024
          </p>
          <div className={`grid  gap-4 ${karla.className}`}>
            <p className="text-sm lg:text-xl">
              Lead the front-end team of over 25 front-end developers in
              developing an MVP - Telex (Telex keeps you informed on events like
              signups, errors, performance and User activity in real-time,
              delivering notifications in a chat-like format), assigning tasks
              and previewing code before merging them.
            </p>
            <p className="text-sm lg:text-xl">
              Built the user management flow of telex that handles every user in
              an organization, invites sent to join the organization and
              controlling their roles and responsibilities.
            </p>
            <p className="text-sm lg:text-xl">
              Worked with technologies like JavaScript, React JS, Next JS,
              Typescript, firebase and redux toolkit in delivering several
              software solutions (Telex, a link sharing platform and an
              e-commerce website)
            </p>
          </div>
        </div>
      ),
    },

    // {
    //   title: "Changelog",
    //   content: (
    //     <div>
    //       <p className="mb-4 text-xs font-normal md:text-sm text-white">
    //         Deployed 5 new components on Aceternity today
    //       </p>
    //       <div className="mb-8">
    //         <div className="flex items-center gap-2 text-xs md:text-sm text-white">
    //           ✅ Card grid component
    //         </div>
    //         <div className="flex items-center gap-2 text-xs md:text-sm text-white">
    //           ✅ Startup template Aceternity
    //         </div>
    //         <div className="flex items-center gap-2 text-xs md:text-sm text-white">
    //           ✅ Random file upload lol
    //         </div>
    //         <div className="flex items-center gap-2 text-xs md:text-sm text-white">
    //           ✅ Himesh Reshammiya Music CD
    //         </div>
    //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm ">
    //           ✅ Salman Bhai Fan Club registrations open
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-2 gap-4">
    //         <Image
    //           src="https://assets.aceternity.com/pro/hero-sections.png"
    //           alt="hero template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    //         />
    //         <Image
    //           src="https://assets.aceternity.com/features-section.png"
    //           alt="feature template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    //         />
    //         <Image
    //           src="https://assets.aceternity.com/pro/bento-grids.png"
    //           alt="bento template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    //         />
    //         <Image
    //           src="https://assets.aceternity.com/cards.png"
    //           alt="cards template"
    //           width={500}
    //           height={500}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    //         />
    //       </div>
    //     </div>
    //   ),
    // },
  ];
  return (
    <div className="relative w-full overflow-clip max-w-[1288px]  m-auto">
      <Timeline data={data} />
    </div>
  );
};

export default Experience;
