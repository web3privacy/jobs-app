import { db, Openings } from 'astro:db';

export default async function () {
    await db.insert(Openings).values([
        {
          jobname: "Community manager",
          joburl: "https://sienna.network/jobs/",
          jobcategory: "MARKETING",
          companyname: "Sienna",
          companyurl: "https://sienna.network/jobs/",
          companycategory: "DeFi"
        },
        {
          jobname: "Security Engineering Lead",
          joburl: "https://jobs.lever.co/Espresso/135f4767-f690-41f8-9ab0-95fd9d398677",
          jobcategory: "SECURITY",
          companyname: "Espresso Systems",
          companyurl: "https://jobs.lever.co/Espresso",
          companycategory: "DeFi"
        },
        {
          jobname: "Software Engineer - Infrastructure",
          joburl: "https://jobs.lever.co/Espresso/bf359a02-5579-4d8b-a254-23c989f67af5",
          jobcategory: "ENGINEERING",
          companyname: "Espresso Systems",
          companyurl: "https://jobs.lever.co/Espresso",
          companycategory: "DeFi"
        },
        {
          jobname: "Front End Developer",
          joburl: "https://www.silentresearchlabs.org/jobs/backend-system-engineer",
          jobcategory: "ENGINEERING",
          companyname: "Silent Research Labs",
          companyurl: "https://www.silentresearchlabs.org/company/careers",
          companycategory: "DeFi"
        },
        {
          jobname: "BackEnd Engineer",
          joburl: "https://www.silentresearchlabs.org/jobs/backend-system-engineer",
          jobcategory: "ENGINEERING",
          companyname: "Silent Research Labs",
          companyurl: "https://www.silentresearchlabs.org/company/careers",
          companycategory: "DeFi"
        },
        {
          jobname: "Digital Designer",
          joburl: "https://www.silentresearchlabs.org/jobs/digital-designer",
          jobcategory: "PRODUCT",
          companyname: "Silent Research Labs",
          companyurl: "https://www.silentresearchlabs.org/company/careers",
          companycategory: "DeFi"
        },
        {
          jobname: "Growth Marketer",
          joburl: "https://www.silentresearchlabs.org/jobs/growth-marketer",
          jobcategory: "MARKETING",
          companyname: "Silent Research Labs",
          companyurl: "https://www.silentresearchlabs.org/company/careers",
          companycategory: "DeFi"
        },
        {
          jobname: "Legal Counsel",
          joburl: "https://www.silentresearchlabs.org/jobs/legal-counsel",
          jobcategory: "OTHER",
          companyname: "Silent Research Labs",
          companyurl: "https://www.silentresearchlabs.org/company/careers",
          companycategory: "DeFi"
        },
        {
          jobname: "Blockchain Architect",
          joburl: "https://wellfound.com/jobs/2221049-blockchain-architect",
          jobcategory: "ENGINEERING",
          companyname: " Panther Protocol",
          companyurl: "https://wellfound.com/company/panther-protocol/jobs",
          companycategory: "DeFi"
        },
        {
          jobname: "Full Stack Developer",
          joburl: "https://wellfound.com/jobs/2227585-full-stack-developer",
          jobcategory: "ENGINEERING",
          companyname: "Panther Protocol",
          companyurl: "https://wellfound.com/company/panther-protocol/jobs",
          companycategory: "DeFi"
        },
        {
          jobname: "Lead Front-end Developer",
          joburl: "https://wellfound.com/jobs/2227586-lead-front-end-developer",
          jobcategory: "ENGINEERING",
          companyname: "Panther Protocol",
          companyurl: "https://wellfound.com/company/panther-protocol/jobs",
          companycategory: "DeFi"
        },
        {
          jobname: "Rust Engineer",
          joburl: "https://wellfound.com/jobs/1863129-rust-engineer",
          jobcategory: "ENGINEERING",
          companyname: "Webb",
          companyurl: "https://wellfound.com/company/webb-4/jobs",
          companycategory: "DeFi"
        },
        {
          jobname: "Senior Cryptography Engineer",
          joburl: "https://wellfound.com/jobs/1241036-senior-cryptography-engineer",
          jobcategory: "CRYPTOGRAPHY",
          companyname: "Webb",
          companyurl: "https://wellfound.com/company/webb-4/jobs",
          companycategory: "DeFi"
        },
        {
          jobname: "Chief Technology Officer ",
          joburl: "https://wellfound.com/jobs/1635055-chief-technology-officer",
          jobcategory: "ENGINEERING",
          companyname: "Webb",
          companyurl: "https://wellfound.com/company/webb-4/jobs",
          companycategory: "DeFi"
        },
        {
          jobname: "Product Manager ",
          joburl: "https://wellfound.com/jobs/1654000-product-manager",
          jobcategory: "PRODUCT",
          companyname: "Webb",
          companyurl: "https://wellfound.com/company/webb-4/jobs",
          companycategory: "DeFi"
        },
        {
          jobname: "Cryptography Engineer",
          joburl: "https://jobs.lever.co/renegade/d356c32f-7089-4460-89ac-88e351c024cd",
          jobcategory: "CRYPTOGRAPHY",
          companyname: "Renegade",
          companyurl: "https://jobs.lever.co/renegade/",
          companycategory: "DeFi"
        },
        {
          jobname: "Full-Stack Engineer",
          joburl: "https://jobs.lever.co/renegade/797c3a64-eb3d-4cf6-94e7-9eb22d602fcb",
          jobcategory: "ENGINEERING",
          companyname: "Renegade",
          companyurl: "https://jobs.lever.co/renegade/",
          companycategory: "DeFi"
        },
        {
          jobname: "Systems Engineer",
          joburl: "https://jobs.lever.co/renegade/f2a7662d-3f0b-47a6-a9e6-c570e42cfb34",
          jobcategory: "ENGINEERING",
          companyname: "Renegade",
          companyurl: "https://jobs.lever.co/renegade/",
          companycategory: "DeFi"
        },
        {
          jobname: "Interface Designer",
          joburl: "https://jobs.lever.co/renegade/7e2d53d1-5b44-4865-8b3f-e01ca969df4e",
          jobcategory: "PRODUCT",
          companyname: "Renegade",
          companyurl: "https://jobs.lever.co/renegade/",
          companycategory: "DeFi"
        },
        {
          jobname: "Technical Writer",
          joburl: "https://jobs.lever.co/renegade/fd980ba9-48de-4175-a74f-d83e02acbb82",
          jobcategory: "MARKETING",
          companyname: "Renegade",
          companyurl: "https://jobs.lever.co/renegade/",
          companycategory: "DeFi"
        },
        {
          jobname: "Generalist",
          joburl: "https://jobs.lever.co/renegade/ff82656d-c8bf-484b-95a0-378f2795443d",
          jobcategory: "OTHER",
          companyname: "Renegade",
          companyurl: "https://jobs.lever.co/renegade/",
          companycategory: "DeFi"
        },
        {
          jobname: "UI UX Graphic Designer",
          joburl: "https://definer.freshteam.com/jobs/_xHgZlVUfKwQ/ui-ux-graphic-designer-remote",
          jobcategory: "MARKETING",
          companyname: "DeFiner",
          companyurl: "https://definer.freshteam.com/jobs",
          companycategory: "DeFi"
        },
        {
          jobname: "Full Stack Developer",
          joburl: "https://definer.freshteam.com/jobs/vHT0qxyd93Mn/definer-full-stack-developer-remote",
          jobcategory: "ENGINEERING",
          companyname: "DeFiner",
          companyurl: "https://definer.freshteam.com/jobs",
          companycategory: "DeFi"
        },
        {
          jobname: "Entry Level Data Scientist",
          joburl: "https://definer.freshteam.com/jobs/t-xkJgq0RfpW/entry-level-data-scientist",
          jobcategory: "PRODUCT",
          companyname: "DeFiner",
          companyurl: "https://definer.freshteam.com/jobs",
          companycategory: "DeFi"
        },
        {
          jobname: "Community Manager",
          joburl: "https://www.beldex.io/careers#En",
          jobcategory: "MARKETING",
          companyname: "Beldex",
          companyurl: "https://www.beldex.io/careers#En",
          companycategory: "Currency"
        },
        {
          jobname: "Consultant / Advisor",
          joburl: "https://www.beldex.io/careers#En",
          jobcategory: "OPERATIONS",
          companyname: "Beldex",
          companyurl: "https://www.beldex.io/careers#En",
          companycategory: "Currency"
        },
        {
          jobname: "Blockchain Core Developer",
          joburl: "https://www.beldex.io/careers#En",
          jobcategory: "ENGINEERING",
          companyname: "Beldex",
          companyurl: "https://www.beldex.io/careers#En",
          companycategory: "Currency"
        },
        {
          jobname: "Rust Engineer",
          joburl: "https://nym.teamtailor.com/jobs/3559512-rust-engineer",
          jobcategory: "ENGINEERING",
          companyname: "Nym",
          companyurl: "https://nym.teamtailor.com/",
          companycategory: "Infra"
        },
        {
          jobname: "Full Stack Engineer",
          joburl: "https://nym.teamtailor.com/jobs/3559420-full-stack-engineer",
          jobcategory: "ENGINEERING",
          companyname: "Nym",
          companyurl: "https://nym.teamtailor.com/",
          companycategory: "Infra"
        },
        {
          jobname: "Lead JavaScript Developer",
          joburl: "https://nym.teamtailor.com/jobs/3085170-lead-javascript-developer-open-source",
          jobcategory: "ENGINEERING",
          companyname: "Nym",
          companyurl: "https://nym.teamtailor.com/",
          companycategory: "Infra"
        },
        {
          jobname: "Creative Intern",
          joburl: "https://nym.teamtailor.com/jobs/4302618-creative-intern",
          jobcategory: "MARKETING",
          companyname: "Nym",
          companyurl: "https://nym.teamtailor.com/",
          companycategory: "Infra"
        },
        {
          jobname: "Support Engineer",
          joburl: "https://jobs.lever.co/litprotocol/2260c34e-ca2b-4339-b1af-c05180a033f6",
          jobcategory: "ENGINEERING",
          companyname: "Lit",
          companyurl: "https://jobs.lever.co/litprotocol",
          companycategory: "Infra"
        },
        {
          jobname: "Senior Backend Developer",
          joburl: "https://www.mysterium.network/senior-backend-developer",
          jobcategory: "ENGINEERING",
          companyname: "Mysterium Network",
          companyurl: "https://www.mysterium.network/careers",
          companycategory: "Infra"
        },
        {
          jobname: "DevOps Engineer",
          joburl: "https://ata.careers/atanetwork/DevOps-Engineer-c151b3048c124fab9506ff2dd626983f",
          jobcategory: "ENGINEERING",
          companyname: "Automata Network",
          companyurl: "https://ata.careers/",
          companycategory: "Infra"
        },
        {
          jobname: "Full-Stack Developer",
          joburl: "https://jobs.smartrecruiters.com/IntegriteeAG/743999851317541-full-stack-developer",
          jobcategory: "ENGINEERING",
          companyname: "Integritee",
          companyurl: "https://www.integritee.network/about#join",
          companycategory: "Infra"
        },
        {
          jobname: "Senior DevOps Engineer",
          joburl: "https://jobs.smartrecruiters.com/IntegriteeAG/743999851317371-senior-devops-engineer",
          jobcategory: "ENGINEERING",
          companyname: "Integritee",
          companyurl: "https://www.integritee.network/about#join",
          companycategory: "Infra"
        },
        {
          jobname: "Rust Core Developer",
          joburl: "https://jobs.smartrecruiters.com/IntegriteeAG/743999851315676-rust-core-developer",
          jobcategory: "ENGINEERING",
          companyname: "Integritee",
          companyurl: "https://www.integritee.network/about#join",
          companycategory: "Infra"
        },
        {
          jobname: "Rust App-Developer",
          joburl: "https://jobs.smartrecruiters.com/IntegriteeAG/743999851316681-rust-app-developer",
          jobcategory: "ENGINEERING",
          companyname: "Integritee",
          companyurl: "https://www.integritee.network/about#join",
          companycategory: "Infra"
        },
        {
          jobname: "Senior Researcher",
          joburl: "https://www.nulink.org/careers/senior-researcher",
          jobcategory: "RESEARCH",
          companyname: "Nulink",
          companyurl: "https://www.nulink.org/careers",
          companycategory: "Infra"
        },
        {
          jobname: "Senior Developer",
          joburl: "https://www.nulink.org/careers/senior-developer",
          jobcategory: "ENGINEERING",
          companyname: "Nulink",
          companyurl: "https://www.nulink.org/careers",
          companycategory: "Infra"
        },
        {
          jobname: "Marketing Manager",
          joburl: "https://www.nulink.org/careers/marketing-manager",
          jobcategory: "MARKETING",
          companyname: "Nulink",
          companyurl: "https://www.nulink.org/careers",
          companycategory: "Infra"
        },
        {
          jobname: "Marketing Intelligence Analyst",
          joburl: "https://www.linkedin.com/jobs/view/3880434571/",
          jobcategory: "MARKETING",
          companyname: "Horizen",
          companyurl: "https://www.horizen.io/careers/#section-open-positions",
          companycategory: "Infra"
        },
        {
          jobname: "Principal Engineer",
          joburl: "https://www.linkedin.com/jobs/search/?currentJobId=3909789364",
          jobcategory: "ENGINEERING",
          companyname: "Horizen",
          companyurl: "https://www.horizen.io/careers/#section-open-positions",
          companycategory: "Infra"
        },
        {
          jobname: "Web3 Business Development Manager - EMEA",
          joburl: "https://www.linkedin.com/jobs/view/3874392728/",
          jobcategory: "SALES",
          companyname: "Horizen",
          companyurl: "https://www.horizen.io/careers/#section-open-positions",
          companycategory: "Infra"
        },
        {
          jobname: "Senior Cryptographic Engineer",
          joburl: "https://www.linkedin.com/jobs/view/3823031648/",
          jobcategory: "CRYPTOGRAPHY",
          companyname: "Horizen",
          companyurl: "https://www.horizen.io/careers/#section-open-positions",
          companycategory: "Infra"
        },
        {
          jobname: "Web3 Business Development Manager - APAC",
          joburl: "https://www.linkedin.com/jobs/view/3874904524/",
          jobcategory: "SALES",
          companyname: "Horizen",
          companyurl: "https://www.horizen.io/careers/#section-open-positions",
          companycategory: "Infra"
        },
        {
          jobname: "General Application",
          joburl: "https://boards.greenhouse.io/penumbralabs/jobs/4884093004",
          jobcategory: "OTHER",
          companyname: "Penumbra",
          companyurl: "https://boards.greenhouse.io/penumbralabs",
          companycategory: "Infra"
        },
        {
          jobname: "Frontend Engineer",
          joburl: "https://boards.greenhouse.io/penumbralabs/jobs/5151794004",
          jobcategory: "ENGINEERING",
          companyname: "Penumbra",
          companyurl: "https://boards.greenhouse.io/penumbralabs",
          companycategory: "Infra"
        },
        {
          jobname: "Head of Product",
          joburl: "https://apply.workable.com/mina-foundation/j/D4690C4B5D/",
          jobcategory: "PRODUCT",
          companyname: "Mina",
          companyurl: "https://apply.workable.com/mina-foundation/",
          companycategory: "Infra"
        },
        {
          jobname: "Head Of Growth/Business Development",
          joburl: "https://apply.workable.com/mina-foundation/j/F9257844C7/",
          jobcategory: "SALES",
          companyname: "Mina",
          companyurl: "https://apply.workable.com/mina-foundation/",
          companycategory: "Infra"
        },
        {
          jobname: "Senior Developer Relations Engineer",
          joburl: "https://apply.workable.com/mina-foundation/j/43304D9360/",
          jobcategory: "ENGINEERING",
          companyname: "Mina",
          companyurl: "https://apply.workable.com/mina-foundation/",
          companycategory: "Infra"
        },
        {
          jobname: "Senior Technical Product Manager",
          joburl: "https://apply.workable.com/mina-foundation/j/290A5EEDB8/",
          jobcategory: "PRODUCT",
          companyname: "Mina",
          companyurl: "https://apply.workable.com/mina-foundation/",
          companycategory: "Infra"
        },
        {
          jobname: "Developer Relations Engineer",
          joburl: "https://boards.greenhouse.io/oasisnetwork/jobs/4346429005",
          jobcategory: "ENGINEERING",
          companyname: "Oasis Network",
          companyurl: "https://boards.greenhouse.io/oasisnetwork",
          companycategory: "Infra"
        },
        {
          jobname: "Developer Relations Manager",
          joburl: "https://boards.greenhouse.io/oasisnetwork/jobs/4348296005",
          jobcategory: "ENGINEERING",
          companyname: "Oasis Network",
          companyurl: "https://boards.greenhouse.io/oasisnetwork",
          companycategory: "Infra"
        },
        {
          jobname: "Developer Relations Manager",
          joburl: "https://boards.greenhouse.io/oasisnetwork/jobs/4358939005",
          jobcategory: "ENGINEERING",
          companyname: "Oasis Network",
          companyurl: "https://boards.greenhouse.io/oasisnetwork",
          companycategory: "Infra"
        },
        {
          jobname: "Senior Software Engineer - Core Platform",
          joburl: "https://boards.greenhouse.io/oasisnetwork/jobs/4395552005",
          jobcategory: "ENGINEERING",
          companyname: "Oasis Network",
          companyurl: "https://boards.greenhouse.io/oasisnetwork",
          companycategory: "Infra"
        },
        {
          jobname: "Senior Software Engineer - Smart Contracts",
          joburl: "https://boards.greenhouse.io/oasisnetwork/jobs/4369218005",
          jobcategory: "ENGINEERING",
          companyname: "Oasis Network",
          companyurl: "https://boards.greenhouse.io/oasisnetwork",
          companycategory: "Infra"
        },
        {
          jobname: "Senior Software Engineer - Core Platform",
          joburl: "https://boards.greenhouse.io/oasisnetwork/jobs/4395553005",
          jobcategory: "ENGINEERING",
          companyname: "Oasis Network",
          companyurl: "https://boards.greenhouse.io/oasisnetwork",
          companycategory: "Infra"
        },
        {
          jobname: "Senior Software Engineer - Core Platform",
          joburl: "https://boards.greenhouse.io/oasisnetwork/jobs/4395552005",
          jobcategory: "ENGINEERING",
          companyname: "Oasis Network",
          companyurl: "https://boards.greenhouse.io/oasisnetwork",
          companycategory: "Infra"
        },
        {
          jobname: "Communications Lead",
          joburl: "https://boards.greenhouse.io/oasisnetwork/jobs/4397677005",
          jobcategory: "MARKETING",
          companyname: "Oasis Network",
          companyurl: "https://boards.greenhouse.io/oasisnetwork",
          companycategory: "Infra"
        },
        {
          jobname: "Communications Lead",
          joburl: "https://boards.greenhouse.io/oasisnetwork/jobs/4397675005",
          jobcategory: "MARKETING",
          companyname: "Oasis Network",
          companyurl: "https://boards.greenhouse.io/oasisnetwork",
          companycategory: "Infra"
        },
        {
          jobname: "Content Writer",
          joburl: "https://boards.greenhouse.io/oasisnetwork/jobs/4397672005",
          jobcategory: "MARKETING",
          companyname: "Oasis Network",
          companyurl: "https://boards.greenhouse.io/oasisnetwork",
          companycategory: "Infra"
        },
        {
          jobname: "Content Writer",
          joburl: "https://boards.greenhouse.io/oasisnetwork/jobs/4397674005",
          jobcategory: "MARKETING",
          companyname: "Oasis Network",
          companyurl: "https://boards.greenhouse.io/oasisnetwork",
          companycategory: "Infra"
        },
        {
          jobname: "Events Coordinator",
          joburl: "https://boards.greenhouse.io/oasisnetwork/jobs/4396828005",
          jobcategory: "MARKETING",
          companyname: "Oasis Network",
          companyurl: "https://boards.greenhouse.io/oasisnetwork",
          companycategory: "Infra"
        },
        {
          jobname: "Social Media Manager",
          joburl: "https://boards.greenhouse.io/oasisnetwork/jobs/4397687005",
          jobcategory: "MARKETING",
          companyname: "Oasis Network",
          companyurl: "https://boards.greenhouse.io/oasisnetwork",
          companycategory: "Infra"
        },
        {
          jobname: "Video Creator",
          joburl: "https://boards.greenhouse.io/oasisnetwork/jobs/4369216005",
          jobcategory: "MARKETING",
          companyname: "Oasis Network",
          companyurl: "https://boards.greenhouse.io/oasisnetwork",
          companycategory: "Infra"
        },
        {
          jobname: "Project Manager",
          joburl: "https://boards.greenhouse.io/oasisnetwork/jobs/4402278005",
          jobcategory: "OPERATIONS",
          companyname: "Oasis Network",
          companyurl: "https://boards.greenhouse.io/oasisnetwork",
          companycategory: "Infra"
        },
        {
          jobname: "General Application",
          joburl: "https://docs.google.com/forms/d/e/1FAIpQLScL1y9P8me7OvgCAyxnktZfJTI1ymMKit4vihNogBA0LGLYjQ/viewform",
          jobcategory: "OTHER",
          companyname: "Edge",
          companyurl: "https://edge.network/en/careers/",
          companycategory: "Infra"
        },
        {
          jobname: "Full stack engineer",
          joburl: "https://forms.gle/4CVr9CvubFhD3jG17",
          jobcategory: "ENGINEERING",
          companyname: "Edge",
          companyurl: "https://edge.network/en/careers/",
          companycategory: "Infra"
        },
        {
          jobname: "Front end engineer",
          joburl: "https://forms.gle/4CVr9CvubFhD3jG17",
          jobcategory: "ENGINEERING",
          companyname: "Edge",
          companyurl: "https://edge.network/en/careers/",
          companycategory: "Infra"
        },
        {
          jobname: "New business manager",
          joburl: "https://forms.gle/4CVr9CvubFhD3jG17",
          jobcategory: "SALES",
          companyname: "Edge",
          companyurl: "https://edge.network/en/careers/",
          companycategory: "Infra"
        },
        {
          jobname: "Marketing director",
          joburl: "https://forms.gle/4CVr9CvubFhD3jG17",
          jobcategory: "MARKETING",
          companyname: "Edge",
          companyurl: "https://edge.network/en/careers/",
          companycategory: "Infra"
        },
        {
          jobname: "Senior PHP+Node engineer",
          joburl: "https://forms.gle/4CVr9CvubFhD3jG17",
          jobcategory: "ENGINEERING",
          companyname: "Edge",
          companyurl: "https://edge.network/en/careers/",
          companycategory: "Infra"
        },
        {
          jobname: "Product manager",
          joburl: "https://forms.gle/4CVr9CvubFhD3jG17",
          jobcategory: "PRODUCT",
          companyname: "Edge",
          companyurl: "https://edge.network/en/careers/",
          companycategory: "Infra"
        },
        {
          jobname: "Zero Knowledge Proof Researcher",
          joburl: "https://boards.greenhouse.io/nomos/jobs/5664663",
          jobcategory: "CRYPTOGRAPHY",
          companyname: "Nomos",
          companyurl: "https://nomos.tech/join-us/",
          companycategory: "Infra"
        },
        {
          jobname: "Backend Engineer",
          joburl: "https://boards.greenhouse.io/ritual/jobs/4083926007",
          jobcategory: "ENGINEERING",
          companyname: "Ritual",
          companyurl: "https://boards.greenhouse.io/ritual",
          companycategory: "Infra"
        },
        {
          jobname: "Growth Engineer",
          joburl: "https://boards.greenhouse.io/ritual/jobs/4324604007",
          jobcategory: "MARKETING",
          companyname: "Ritual",
          companyurl: "https://boards.greenhouse.io/ritual",
          companycategory: "Infra"
        },
        {
          jobname: "Machine Learning Engineer",
          joburl: "https://boards.greenhouse.io/ritual/jobs/4029531007",
          jobcategory: "ENGINEERING",
          companyname: "Ritual",
          companyurl: "https://boards.greenhouse.io/ritual",
          companycategory: "Infra"
        },
        {
          jobname: "Smart Contract Engineer",
          joburl: "https://boards.greenhouse.io/ritual/jobs/4135728007",
          jobcategory: "ENGINEERING",
          companyname: "Ritual",
          companyurl: "https://boards.greenhouse.io/ritual",
          companycategory: "Infra"
        },
        {
          jobname: "General Application",
          joburl: "https://boards.greenhouse.io/ritual/jobs/4135918007",
          jobcategory: "OTHER",
          companyname: "Ritual",
          companyurl: "https://boards.greenhouse.io/ritual",
          companycategory: "Infra"
        },
        {
          jobname: "Research Intern",
          joburl: "https://boards.greenhouse.io/ritual/jobs/4358496007",
          jobcategory: "RESEARCH",
          companyname: "Ritual",
          companyurl: "https://boards.greenhouse.io/ritual",
          companycategory: "Infra"
        },
        {
          jobname: "Software Engineer Intern",
          joburl: "https://boards.greenhouse.io/ritual/jobs/4068271007",
          jobcategory: "ENGINEERING",
          companyname: "Ritual",
          companyurl: "https://boards.greenhouse.io/ritual",
          companycategory: "Infra"
        },
        {
          jobname: "Product Design Manager - UX/UI",
          joburl: "https://boards.greenhouse.io/digitalasset/jobs/5718042",
          jobcategory: "PRODUCT",
          companyname: "Daml",
          companyurl: "https://boards.greenhouse.io/digitalasset",
          companycategory: "Infra"
        },
        {
          jobname: "Product Design Manager - New York",
          joburl: "https://boards.greenhouse.io/digitalasset/jobs/5718042",
          jobcategory: "PRODUCT",
          companyname: "Daml",
          companyurl: "https://boards.greenhouse.io/digitalasset",
          companycategory: "Infra"
        },
        {
          jobname: "Developer",
          joburl: "https://darkrenaissance.github.io/darkfi/dev/contrib/contrib.html#employment",
          jobcategory: "ENGINEERING",
          companyname: "DarkFi",
          companyurl: "https://darkrenaissance.github.io/darkfi/dev/contrib/contrib.html#employment",
          companycategory: "Infra"
        },
        {
          jobname: "Proving Systems Security Engineer",
          joburl: "https://boards.eu.greenhouse.io/aztec/jobs/4258022101",
          jobcategory: "SECURITY",
          companyname: "Aztec",
          companyurl: "https://boards.eu.greenhouse.io/aztec",
          companycategory: "layer2"
        },
        {
          jobname: "Ecosystem Lead",
          joburl: "https://boards.eu.greenhouse.io/aztec/jobs/4303324101",
          jobcategory: "PRODUCT",
          companyname: "Aztec",
          companyurl: "https://boards.eu.greenhouse.io/aztec",
          companycategory: "layer2"
        },
        {
          jobname: "Chief Marketing Officer",
          joburl: "https://boards.eu.greenhouse.io/aztec/jobs/4292939101",
          jobcategory: "MARKETING",
          companyname: "Aztec",
          companyurl: "https://boards.eu.greenhouse.io/aztec",
          companycategory: "layer2"
        },
        {
          jobname: "Software Engineer (Noir Generalist)",
          joburl: "https://boards.eu.greenhouse.io/aztec/jobs/4328851101",
          jobcategory: "ENGINEERING",
          companyname: "Aztec",
          companyurl: "https://boards.eu.greenhouse.io/aztec",
          companycategory: "layer2"
        },
        {
          jobname: "Backend Blockchain Engineer",
          joburl: "https://www.linkedin.com/jobs/view/3869617724/",
          jobcategory: "ENGINEERING",
          companyname: "COTI",
          companyurl: "https://coti.io/careers",
          companycategory: "layer2"
        },
        {
          jobname: "Head of Marketing",
          joburl: "https://polybase.notion.site/Head-of-Marketing-fa176c7548b944d4870fa4bab9b58ddc",
          jobcategory: "MARKETING",
          companyname: "Polybase",
          companyurl: "https://polybaselabs.com/careers",
          companycategory: "layer2"
        },
        {
          jobname: "C#/.NET DEVELOPER",
          joburl: "https://forms.monday.com/forms/c74d845ed91d937c4cea5d229e203cd5?r=use1",
          jobcategory: "ENGINEERING",
          companyname: "Wasabi Wallet",
          companyurl: "https://wasabiwallet.io/contribution.html",
          companycategory: "Wallet"
        },
        {
          jobname: "Lead Security Engineer",
          joburl: "https://framelabs.notion.site/Lead-Security-Engineer-f790bb2de22f4b51b8e656080004389d",
          jobcategory: "SECURITY",
          companyname: "Frame",
          companyurl: "https://framelabs.notion.site/Join-Frame-Labs-bf796117a50040159b61c092ad89870d",
          companycategory: "Wallet"
        },
        {
          jobname: "Senior Engineer",
          joburl: "https://framelabs.notion.site/Senior-Engineer-a40cc11086af41db932e1419d2ddd82b",
          jobcategory: "ENGINEERING",
          companyname: "Frame",
          companyurl: "https://framelabs.notion.site/Join-Frame-Labs-bf796117a50040159b61c092ad89870d",
          companycategory: "Wallet"
        },
        {
          jobname: "Full-stack Engineer",
          joburl: "https://framelabs.notion.site/Full-stack-Engineer-4ec2d924306e49998aef1f37cf47a918",
          jobcategory: "ENGINEERING",
          companyname: "Frame",
          companyurl: "https://framelabs.notion.site/Join-Frame-Labs-bf796117a50040159b61c092ad89870d",
          companycategory: "Wallet"
        },
        {
          jobname: "web3 Engineer",
          joburl: "https://framelabs.notion.site/web3-Engineer-1298f5c79915463cb72693f2fea083d1",
          jobcategory: "ENGINEERING",
          companyname: "Frame",
          companyurl: "https://framelabs.notion.site/Join-Frame-Labs-bf796117a50040159b61c092ad89870d",
          companycategory: "Wallet"
        },
        {
          jobname: "Marketing Lead - APAC",
          joburl: "https://careers.alephzero.org/companies/aleph-zero/jobs/33199728-marketing-lead-apac-m-f-div#content",
          jobcategory: "MARKETING",
          companyname: "Aleph Zero",
          companyurl: "https://careers.alephzero.org/companies/aleph-zero#content",
          companycategory: "Infra"
        },
        {
          jobname: "Frontend Engineer",
          joburl: "https://careers.alephzero.org/companies/aleph-zero/jobs/21105112-frontend-engineer-m-f-div#content",
          jobcategory: "ENGINEERING",
          companyname: "Aleph Zero",
          companyurl: "https://careers.alephzero.org/companies/aleph-zero#content",
          companycategory: "Infra"
        },
        {
          jobname: "Software Developer - Rust",
          joburl: "https://careers.alephzero.org/companies/aleph-zero/jobs/20944514-software-developer-rust-m-f-div#content",
          jobcategory: "ENGINEERING",
          companyname: "Aleph Zero",
          companyurl: "https://careers.alephzero.org/companies/aleph-zero#content",
          companycategory: "Infra"
        },
        {
          jobname: "Rust Developer",
          joburl: "https://ethernity.cloud/rust-developer.pdf",
          jobcategory: "ENGINEERING",
          companyname: "Ethernity Cloud",
          companyurl: "https://ethernity.cloud/company#careers",
          companycategory: "Computing"
        },
        {
          jobname: "Python Developer",
          joburl: "https://ethernity.cloud/python-developer.pdf",
          jobcategory: "ENGINEERING",
          companyname: "Ethernity Cloud",
          companyurl: "https://ethernity.cloud/company#careers",
          companycategory: "Computing"
        },
        {
          jobname: "DevOps Engineer",
          joburl: "https://ethernity.cloud/devops.pdf",
          jobcategory: "ENGINEERING",
          companyname: "Ethernity Cloud",
          companyurl: "https://ethernity.cloud/company#careers",
          companycategory: "Computing"
        },
        {
          jobname: "System V&V Engineer",
          joburl: "https://chain-reaction.io/careers/co/tel-aviv-yokneam/DA.448/system-vv-engineer/all/",
          jobcategory: "ENGINEERING",
          companyname: "Chain Reaction",
          companyurl: "https://chain-reaction.io/careers/",
          companycategory: "Computing"
        },
        {
          jobname: "Embedded Software Engineer",
          joburl: "https://chain-reaction.io/careers/co/tel-aviv-yokneam/16.54C/embedded-software-engineer/all/",
          jobcategory: "ENGINEERING",
          companyname: "Chain Reaction",
          companyurl: "https://chain-reaction.io/careers/",
          companycategory: "Computing"
        },
        {
          jobname: "Head of Treasury",
          joburl: "https://apply.workable.com/nillion/j/1DC2C5B847/",
          jobcategory: "FINANCIAL",
          companyname: "nillion",
          companyurl: "https://apply.workable.com/nillion/",
          companycategory: "Computing"
        },
        {
          jobname: "Senior Site Reliability Engineer ",
          joburl: "https://apply.workable.com/nillion/j/3BAA97E447/",
          jobcategory: "ENGINEERING",
          companyname: "nillion",
          companyurl: "https://apply.workable.com/nillion/",
          companycategory: "Computing"
        },
        {
          jobname: "General Counsel ",
          joburl: "https://apply.workable.com/nillion/j/236F04047D/",
          jobcategory: "LEGAL",
          companyname: "nillion",
          companyurl: "https://apply.workable.com/nillion/",
          companycategory: "Computing"
        },
        {
          jobname: "Solutions Engineer",
          joburl: "https://apply.workable.com/nillion/j/448AEE2508/",
          jobcategory: "ENGINEERING",
          companyname: "nillion",
          companyurl: "https://apply.workable.com/nillion/",
          companycategory: "Computing"
        },
        {
          jobname: "Decentralized Infrastructure Engineer",
          joburl: "https://apply.workable.com/nillion/j/29B4D07606/",
          jobcategory: "ENGINEERING",
          companyname: "nillion",
          companyurl: "https://apply.workable.com/nillion/",
          companycategory: "Computing"
        },
        {
          jobname: "Senior Distributed Systems Engineer",
          joburl: "https://apply.workable.com/nillion/j/56D46BA9D6/",
          jobcategory: "ENGINEERING",
          companyname: "nillion",
          companyurl: "https://apply.workable.com/nillion/",
          companycategory: "Computing"
        },
        {
          jobname: "Software Engineer",
          joburl: "https://jobs.lever.co/ARPA/9c350538-5ab5-4e34-9aaf-15ecc91b784e",
          jobcategory: "ENGINEERING",
          companyname: "ARPA",
          companyurl: "https://jobs.lever.co/ARPA",
          companycategory: "Computing"
        },
        {
          jobname: "Operations Analyst",
          joburl: "https://jobs.lever.co/ARPA/e54fe7e5-931f-4175-8610-a73fd998cbbd",
          jobcategory: "OPERATIONS",
          companyname: "ARPA",
          companyurl: "https://jobs.lever.co/ARPA",
          companycategory: "Computing"
        },
        {
          jobname: "Personal Assistant",
          joburl: "https://jobs.lever.co/ARPA/64e198a0-652b-465f-85b6-2e3db1a865a0",
          jobcategory: "OPERATIONS",
          companyname: "ARPA",
          companyurl: "https://jobs.lever.co/ARPA",
          companycategory: "Computing"
        },
        {
          jobname: "Digital Asset Hedge Fund Operations Associate",
          joburl: "https://jobs.lever.co/ARPA/71a817fc-afc9-424a-bba8-06a3aceb5a99",
          jobcategory: "OPERATIONS",
          companyname: "ARPA",
          companyurl: "https://jobs.lever.co/ARPA",
          companycategory: "Computing"
        },
        {
          jobname: "Business Operations Associate",
          joburl: "https://jobs.lever.co/ARPA/c9b402b9-c572-4abb-ac14-0c85045f0448",
          jobcategory: "MARKETING",
          companyname: "ARPA",
          companyurl: "https://jobs.lever.co/ARPA",
          companycategory: "Computing"
        },
        {
          jobname: "Global Growth & Marketing Analyst Manager",
          joburl: "https://jobs.lever.co/ARPA/6d6376af-6c16-454b-ad9c-17ef6a9b9e1a",
          jobcategory: "MARKETING",
          companyname: "ARPA",
          companyurl: "https://jobs.lever.co/ARPA",
          companycategory: "Computing"
        },
        {
          jobname: "Product Owner",
          joburl: "https://jobs.lever.co/ARPA/4faa3385-ee1e-4d2b-992b-91c620bc6492",
          jobcategory: "PRODUCT",
          companyname: "ARPA",
          companyurl: "https://jobs.lever.co/ARPA",
          companycategory: "Computing"
        },
        {
          jobname: "Head of Growth",
          joburl: "https://foundation.xyz/jobs/#jobCollapse1",
          jobcategory: "MARKETING",
          companyname: "Foundation",
          companyurl: "https://foundation.xyz/jobs/",
          companycategory: "Hardware"
        },
        {
          jobname: "Rust UI & Apps Engineer",
          joburl: "https://foundation.xyz/jobs/#jobCollapse2",
          jobcategory: "PRODUCT",
          companyname: "Foundation",
          companyurl: "https://foundation.xyz/jobs/",
          companycategory: "Hardware"
        },
        {
          jobname: "Embedded Rust Device Driver Engineer",
          joburl: "https://foundation.xyz/jobs/#jobCollapse4",
          jobcategory: "ENGINEERING",
          companyname: "Foundation",
          companyurl: "https://foundation.xyz/jobs/",
          companycategory: "Hardware"
        },
        {
          jobname: "Quality Engineer",
          joburl: "https://jobs.lever.co/sprucesystems/d05ebda3-49d3-46f2-8905-fb6b988de6ba",
          jobcategory: "ENGINEERING",
          companyname: "SpruceID",
          companyurl: "https://jobs.lever.co/sprucesystems",
          companycategory: "DID"
        },
        {
          jobname: "React Native Developer",
          joburl: "https://jobs.lever.co/sprucesystems/dc335f4f-569d-4da8-a433-1f7d7a4aeef7",
          jobcategory: "ENGINEERING",
          companyname: "SpruceID",
          companyurl: "https://jobs.lever.co/sprucesystems",
          companycategory: "DID"
        },
        {
          jobname: "Site Reliability Engineer",
          joburl: "https://jobs.lever.co/sprucesystems/cc0863b6-f021-4e9f-b45b-4b407fc7515a",
          jobcategory: "ENGINEERING",
          companyname: "SpruceID",
          companyurl: "https://jobs.lever.co/sprucesystems",
          companycategory: "DID"
        },
        {
          jobname: "Software Engineer - Android",
          joburl: "https://jobs.lever.co/sprucesystems/d9129120-2757-4882-aec2-0d1a73441df6",
          jobcategory: "ENGINEERING",
          companyname: "SpruceID",
          companyurl: "https://jobs.lever.co/sprucesystems",
          companycategory: "DID"
        },
        {
          jobname: "Software Engineer - Cross-Platform Rust",
          joburl: "https://jobs.lever.co/sprucesystems/cf2bb70b-a33a-48d9-8d83-2f547850eaf4",
          jobcategory: "ENGINEERING",
          companyname: "SpruceID",
          companyurl: "https://jobs.lever.co/sprucesystems",
          companycategory: "DID"
        },
        {
          jobname: "Business Development - B2B",
          joburl: "https://jobs.lever.co/sprucesystems/09636ad4-682c-42e5-b0f6-95718fad6b23",
          jobcategory: "OPERATIONS",
          companyname: "SpruceID",
          companyurl: "https://jobs.lever.co/sprucesystems",
          companycategory: "DID"
        },
        {
          jobname: "Business Development - Public Sector",
          joburl: "https://jobs.lever.co/sprucesystems/5f8b67a7-1003-478c-9be0-44562ff17a0f",
          jobcategory: "OPERATIONS",
          companyname: "SpruceID",
          companyurl: "https://jobs.lever.co/sprucesystems",
          companycategory: "DID"
        },
        {
          jobname: "Senior Product Manager",
          joburl: "https://jobs.lever.co/sprucesystems/72d43811-c6b0-478d-b647-b4caa03ce6d1",
          jobcategory: "PRODUCT",
          companyname: "SpruceID",
          companyurl: "https://jobs.lever.co/sprucesystems",
          companycategory: "DID"
        },
        {
          jobname: "Technical Success Manager",
          joburl: "https://jobs.lever.co/sprucesystems/c29dc4c8-5fe9-4b2d-8e15-b412c6c3d1ec",
          jobcategory: "PRODUCT",
          companyname: "SpruceID",
          companyurl: "https://jobs.lever.co/sprucesystems",
          companycategory: "DID"
        },
        {
          jobname: "Marketing Lead",
          joburl: "https://cliqueofficial.notion.site/Marketing-Lead-8a74a9cc9d064829bf947f8775130a2e",
          jobcategory: "MARKETING",
          companyname: "Clique",
          companyurl: "https://cliqueofficial.notion.site/Clique-Careers-baf09f37cf2f412dad6fff88e61854b2",
          companycategory: "DID"
        },
        {
          jobname: "B2C Product Growth Lead",
          joburl: "https://cliqueofficial.notion.site/B2C-Product-Growth-Lead-a51db100789d4d349c8392aedb26481e",
          jobcategory: "MARKETING",
          companyname: "Clique",
          companyurl: "https://cliqueofficial.notion.site/Clique-Careers-baf09f37cf2f412dad6fff88e61854b2",
          companycategory: "DID"
        },
        {
          jobname: "B2B Product Manager",
          joburl: "https://cliqueofficial.notion.site/B2B-Product-Manager-dd5d13d9e56e49ee8d1f03eddc05eebe",
          jobcategory: "PRODUCT",
          companyname: "Clique",
          companyurl: "https://cliqueofficial.notion.site/Clique-Careers-baf09f37cf2f412dad6fff88e61854b2",
          companycategory: "DID"
        },
        {
          jobname: "Growth Operations",
          joburl: "https://cliqueofficial.notion.site/Growth-Operations-9cc08e57000f4890ae55d68e2a8ab2af",
          jobcategory: "OPERATIONS",
          companyname: "Clique",
          companyurl: "https://cliqueofficial.notion.site/Clique-Careers-baf09f37cf2f412dad6fff88e61854b2",
          companycategory: "DID"
        },
        {
          jobname: "DeFi Strategy Lead",
          joburl: "https://cliqueofficial.notion.site/DeFi-Strategy-Lead-c5b7b3ab37e645d3908a81fd6f647e55",
          jobcategory: "MARKETING",
          companyname: "Clique",
          companyurl: "https://cliqueofficial.notion.site/Clique-Careers-baf09f37cf2f412dad6fff88e61854b2",
          companycategory: "DID"
        },
        {
          jobname: "Cryptography Engineer",
          joburl: "https://cliqueofficial.notion.site/Cryptography-Engineer-eb197a293b4a47619c478da6dc12ef14",
          jobcategory: "ENGINEERING",
          companyname: "Clique",
          companyurl: "https://cliqueofficial.notion.site/Clique-Careers-baf09f37cf2f412dad6fff88e61854b2",
          companycategory: "DID"
        },
        {
          jobname: "Backend & Infra Engineer",
          joburl: "https://cliqueofficial.notion.site/Backend-Infra-Engineer-6f3259cd79c640a4b57413d8429da07a",
          jobcategory: "ENGINEERING",
          companyname: "Clique",
          companyurl: "https://cliqueofficial.notion.site/Clique-Careers-baf09f37cf2f412dad6fff88e61854b2",
          companycategory: "DID"
        },
        {
          jobname: "Senior Smart Contract Engineer",
          joburl: "https://cliqueofficial.notion.site/Senior-Smart-Contract-Engineer-d55d2f4b35334f8da46360879dfefbe7",
          jobcategory: "ENGINEERING",
          companyname: "Clique",
          companyurl: "https://cliqueofficial.notion.site/Clique-Careers-baf09f37cf2f412dad6fff88e61854b2",
          companycategory: "DID"
        },
        {
          jobname: "Developer Relations",
          joburl: "https://cliqueofficial.notion.site/Developer-Relations-cc30192067d64c85b7506fb8923a7524",
          jobcategory: "ENGINEERING",
          companyname: "Clique",
          companyurl: "https://cliqueofficial.notion.site/Clique-Careers-baf09f37cf2f412dad6fff88e61854b2",
          companycategory: "DID"
        },
        {
          jobname: "PWA Engineer",
          joburl: "https://cliqueofficial.notion.site/PWA-Engineer-280cd46d71a94340beb5163bcccec04c",
          jobcategory: "ENGINEERING",
          companyname: "Clique",
          companyurl: "https://cliqueofficial.notion.site/Clique-Careers-baf09f37cf2f412dad6fff88e61854b2",
          companycategory: "DID"
        },
        {
          jobname: "Testing Engineer",
          joburl: "https://cliqueofficial.notion.site/Testing-Engineer-df4eb3b12c2e4fe7854edcaa83ff2054",
          jobcategory: "QA",
          companyname: "Clique",
          companyurl: "https://cliqueofficial.notion.site/Clique-Careers-baf09f37cf2f412dad6fff88e61854b2",
          companycategory: "DID"
        },
        {
          jobname: "Full-Stack Engineer",
          joburl: "https://cliqueofficial.notion.site/Full-Stack-Engineer-Browser-Extension-Specialist-04a192fd1b454be9bc2d2e9bf48a277b",
          jobcategory: "ENGINEERING",
          companyname: "Clique",
          companyurl: "https://cliqueofficial.notion.site/Clique-Careers-baf09f37cf2f412dad6fff88e61854b2",
          companycategory: "DID"
        },
        {
          jobname: "Sales Executive",
          joburl: "https://sphereon.com/job-openings-sales-executive/",
          jobcategory: "SALES",
          companyname: "Sphereon",
          companyurl: "https://sphereon.com/blockchain-job-openings-at-sphereon/",
          companycategory: "DID"
        },
        {
          jobname: "Developer (senior)",
          joburl: "https://sphereon.com/job-openings-for-software-developers/",
          jobcategory: "ENGINEERING",
          companyname: "Sphereon",
          companyurl: "https://sphereon.com/blockchain-job-openings-at-sphereon/",
          companycategory: "DID"
        },
        {
          jobname: "Blockchain developer",
          joburl: "https://sphereon.com/job-openings-for-software-developers/",
          jobcategory: "ENGINEERING",
          companyname: "Sphereon",
          companyurl: "https://sphereon.com/blockchain-job-openings-at-sphereon/",
          companycategory: "DID"
        },
        {
          jobname: "Software Engineer",
          joburl: "https://zkpass.gitbook.io/zkpass/supports/were-hiring",
          jobcategory: "ENGINEERING",
          companyname: "zkPass",
          companyurl: "https://zkpass.gitbook.io/zkpass/supports/were-hiring",
          companycategory: "DID"
        },
        {
          jobname: "UX/UI Designer",
          joburl: "https://zkpass.gitbook.io/zkpass/supports/were-hiring",
          jobcategory: "PRODUCT",
          companyname: "zkPass",
          companyurl: "https://zkpass.gitbook.io/zkpass/supports/were-hiring",
          companycategory: "DID"
        },
        {
          jobname: "Software Developer Rust",
          joburl: "https://www.kilt.io/about-us/careers",
          jobcategory: "ENGINEERING",
          companyname: "KILT",
          companyurl: "https://www.kilt.io/about-us/careers",
          companycategory: "DID"
        },
        {
          jobname: "Backend & DevOps Engineer",
          joburl: "https://www.chainport.io/jobs",
          jobcategory: "ENGINEERING",
          companyname: "Chainport",
          companyurl: "https://www.chainport.io/jobs",
          companycategory: "Bridge"
        },
        {
          jobname: "Cyber Security Specialist",
          joburl: "https://www.chainport.io/jobs",
          jobcategory: "SECURITY",
          companyname: "Chainport",
          companyurl: "https://www.chainport.io/jobs",
          companycategory: "Bridge"
        },
        {
          jobname: "Marketing Manager",
          joburl: "https://www.chainport.io/jobs",
          jobcategory: "MARKETING",
          companyname: "Chainport",
          companyurl: "https://www.chainport.io/jobs",
          companycategory: "Bridge"
        },
        {
          jobname: "QA & Support Lead Engineer",
          joburl: "https://www.chainport.io/jobs",
          jobcategory: "ENGINEERING",
          companyname: "Chainport",
          companyurl: "https://www.chainport.io/jobs",
          companycategory: "Bridge"
        },
        {
          jobname: "Senior Front-End Engineer",
          joburl: "https://www.chainport.io/jobs",
          jobcategory: "ENGINEERING",
          companyname: "Chainport",
          companyurl: "https://www.chainport.io/jobs",
          companycategory: "Bridge"
        },
        {
          jobname: "Protocol Engineer - Chat Messaging",
          joburl: "https://boards.greenhouse.io/waku/jobs/5607301",
          jobcategory: "ENGINEERING",
          companyname: "Waku",
          companyurl: "https://waku.org/join-us/",
          companycategory: "Messenging"
        },
        {
          jobname: "Business Development",
          joburl: "https://carbon.website/job/business-development/",
          jobcategory: "SALES",
          companyname: "Carbon",
          companyurl: "https://carbon.website/jobs/",
          companycategory: "Browser"
        },
        {
          jobname: "UX Designer",
          joburl: "https://carbon.website/job/ux-designer/",
          jobcategory: "PRODUCT",
          companyname: "Carbon",
          companyurl: "https://carbon.website/jobs/",
          companycategory: "Browser"
        },
        {
          jobname: "Chromium Developer",
          joburl: "https://carbon.website/job/chromium-developer/",
          jobcategory: "ENGINEERING",
          companyname: "Carbon",
          companyurl: "https://carbon.website/jobs/",
          companycategory: "Browser"
        },
        {
          jobname: "iOS Engineer",
          joburl: "https://www.pumabrowser.com/careers/ios-engineer",
          jobcategory: "ENGINEERING",
          companyname: "Puma Browser",
          companyurl: "https://www.pumabrowser.com/careers",
          companycategory: "Browser"
        },
        {
          jobname: "Android Engineer",
          joburl: "https://www.pumabrowser.com/careers/android-engineer",
          jobcategory: "ENGINEERING",
          companyname: "Puma Browser",
          companyurl: "https://www.pumabrowser.com/careers",
          companycategory: "Browser"
        },
        {
          jobname: "Head of Memes & Growth ",
          joburl: "https://www.pumabrowser.com/careers/head-of-memes-growth",
          jobcategory: "MARKETING",
          companyname: "Puma Browser",
          companyurl: "https://www.pumabrowser.com/careers",
          companycategory: "Browser"
        },
        {
          jobname: "GrapheneOS Remote Developer",
          joburl: "https://grapheneos.org/hiring",
          jobcategory: "ENGINEERING",
          companyname: "Graphene OS",
          companyurl: "https://grapheneos.org/hiring",
          companycategory: "OS"
        },
        {
          jobname: "Technical Business Development Lead",
          joburl: "https://boards.greenhouse.io/codex/jobs/5453088",
          jobcategory: "SALES",
          companyname: "Codex",
          companyurl: "https://codex.storage/join-us",
          companycategory: "Storage"
        },
        {
          jobname: "Zero Knowledge Researcher - Codex",
          joburl: "https://boards.greenhouse.io/codex/jobs/5921381",
          jobcategory: "CRYPTOGRAPHY",
          companyname: "Codex",
          companyurl: "https://codex.storage/join-us",
          companycategory: "Storage"
        },
        {
          jobname: "Researcher & Developer (GO and Solidity)",
          joburl: "https://www.ethswarm.org/jobs/research-team-researcher-developer",
          jobcategory: "ENGINEERING",
          companyname: "Swarm",
          companyurl: "https://www.ethswarm.org/jobs",
          companycategory: "Storage"
        },
        {
          jobname: "QA Engineer",
          joburl: "https://www.ethswarm.org/jobs/qa-engineer",
          jobcategory: "QA",
          companyname: "Swarm",
          companyurl: "https://www.ethswarm.org/jobs",
          companycategory: "Storage"
        },
        {
          jobname: "Senior Software Engineer",
          joburl: "https://www.ethswarm.org/jobs/senior-software-engineer-go",
          jobcategory: "ENGINEERING",
          companyname: "Swarm",
          companyurl: "https://www.ethswarm.org/jobs",
          companycategory: "Storage"
        },
        {
          jobname: "Grant Manager",
          joburl: "https://www.ethswarm.org/jobs/grant-manager",
          jobcategory: "OPERATIONS",
          companyname: "Swarm",
          companyurl: "https://www.ethswarm.org/jobs",
          companycategory: "Storage"
        },
        {
          jobname: "Browser extension developer",
          joburl: "https://www.ethswarm.org/jobs/browser-extension-developer",
          jobcategory: "ENGINEERING",
          companyname: "Swarm",
          companyurl: "https://www.ethswarm.org/jobs",
          companycategory: "Storage"
        },
        {
          jobname: "JavaScript Developer",
          joburl: "https://www.ethswarm.org/jobs/javascript-developer-fairdrive",
          jobcategory: "ENGINEERING",
          companyname: "Swarm",
          companyurl: "https://www.ethswarm.org/jobs",
          companycategory: "Storage"
        },
        {
          jobname: "Site Reliability - DevOps Engineer",
          joburl: "https://storj.bamboohr.com/careers/74?source=aWQ9MzM=",
          jobcategory: "ENGINEERING",
          companyname: "Storj",
          companyurl: "https://www.storj.io/careers#open-positions",
          companycategory: "Storage"
        },
        {
          jobname: "Channel Sales Leader",
          joburl: "https://storj.bamboohr.com/careers/75?source=aWQ9MTg=",
          jobcategory: "SALES",
          companyname: "Storj",
          companyurl: "https://www.storj.io/careers#open-positions",
          companycategory: "Storage"
        },
        {
          jobname: "Forward Deployed Engineer",
          joburl: "https://jobs.ashbyhq.com/privy/be704bc4-74b7-45cc-9bab-bc150a6b2858",
          jobcategory: "ENGINEERING",
          companyname: "Privy",
          companyurl: "https://jobs.ashbyhq.com/privy",
          companycategory: "Other"
        },
        {
          jobname: "Senior/Staff Software Engineer - Security",
          joburl: "https://jobs.ashbyhq.com/privy/3615fe17-f10c-477e-a246-43eb8fac4cb1",
          jobcategory: "SECURITY",
          companyname: "Privy",
          companyurl: "https://jobs.ashbyhq.com/privy",
          companycategory: "Other"
        },
        {
          jobname: "Senior/Staff Software Engineer - Backend",
          joburl: "https://jobs.ashbyhq.com/privy/de86a764-558f-4729-8f7e-81371c80bb21",
          jobcategory: "ENGINEERING",
          companyname: "Privy",
          companyurl: "https://jobs.ashbyhq.com/privy",
          companycategory: "Other"
        },
        {
          jobname: "Senior/Staff Software Engineer - Fullstack",
          joburl: "https://jobs.ashbyhq.com/privy/8aeff2e1-1fdf-4123-ae81-3867507c239e",
          jobcategory: "ENGINEERING",
          companyname: "Privy",
          companyurl: "https://jobs.ashbyhq.com/privy",
          companycategory: "Other"
        },
        {
          jobname: "Senior/Staff Software Engineer - Security",
          joburl: "https://jobs.ashbyhq.com/privy/c46f2751-8b05-472c-aaac-9b095baf41b5",
          jobcategory: "SECURITY",
          companyname: "Privy",
          companyurl: "https://jobs.ashbyhq.com/privy",
          companycategory: "Other"
        },
        {
          jobname: "Software Engineer - Go-to-Market",
          joburl: "https://jobs.ashbyhq.com/privy/e870656b-975b-4bdf-8572-aba9b7b51366",
          jobcategory: "ENGINEERING",
          companyname: "Privy",
          companyurl: "https://jobs.ashbyhq.com/privy",
          companycategory: "Other"
        },
        {
          jobname: "General Application",
          joburl: "https://jobs.ashbyhq.com/privy/f3ff2818-e67a-4999-a8da-a86079b218aa",
          jobcategory: "OTHER",
          companyname: "Privy",
          companyurl: "https://jobs.ashbyhq.com/privy",
          companycategory: "Other"
        },
        {
          jobname: "Junior Performance Marketing",
          joburl: "https://ethermail.breezy.hr/p/41e88ec99d4101-junior-performance-marketing",
          jobcategory: "MARKETING",
          companyname: "EtherMail",
          companyurl: "https://ethermail.breezy.hr/",
          companycategory: "Other"
        },
        {
          jobname: "Sales Associate",
          joburl: "https://ethermail.breezy.hr/p/58dbd4f0073201-sales-associate",
          jobcategory: "SALES",
          companyname: "EtherMail",
          companyurl: "https://ethermail.breezy.hr/",
          companycategory: "Other"
        },
        {
          jobname: "Senior iOS Developer",
          joburl: "https://ethermail.breezy.hr/p/eebf0c43212401-senior-ios-developer",
          jobcategory: "ENGINEERING",
          companyname: "EtherMail",
          companyurl: "https://ethermail.breezy.hr/",
          companycategory: "Other"
        },
        {
          jobname: "Web3 Community and CRM Manager",
          joburl: "https://ethermail.breezy.hr/p/7b7fde48b97d01-web3-community-and-crm-manager",
          jobcategory: "MARKETING",
          companyname: "EtherMail",
          companyurl: "https://ethermail.breezy.hr/",
          companycategory: "Other"
        },
        {
          jobname: "Head Finance & Accounting",
          joburl: "https://ethermail.breezy.hr/p/5510fef8101401-head-finance-accounting",
          jobcategory: "FINANCIAL",
          companyname: "EtherMail",
          companyurl: "https://ethermail.breezy.hr/",
          companycategory: "Other"
        },
        {
          jobname: "Backend Developer",
          joburl: "https://ethermail.breezy.hr/p/022c5c5d57a101-backend-developer",
          jobcategory: "ENGINEERING",
          companyname: "EtherMail",
          companyurl: "https://ethermail.breezy.hr/",
          companycategory: "Other"
        },
        {
          jobname: "Data Analyst",
          joburl: "https://ethermail.breezy.hr/p/570edb9f2c8201-data-analyst",
          jobcategory: "RESEARCH",
          companyname: "EtherMail",
          companyurl: "https://ethermail.breezy.hr/",
          companycategory: "Other"
        },
        {
          jobname: "Enterprise Marketing & Event Success Specialist",
          joburl: "https://ethermail.breezy.hr/p/65fdc0a8414f01-enterprise-marketing-event-success-specialist",
          jobcategory: "MARKETING",
          companyname: "EtherMail",
          companyurl: "https://ethermail.breezy.hr/",
          companycategory: "Other"
        },
        {
          jobname: "Senior Protocol Engineer",
          joburl: "https://mailchain.xyz/careers?gh_jid=4041747101",
          jobcategory: "ENGINEERING",
          companyname: "Mailchain",
          companyurl: "https://mailchain.com/careers",
          companycategory: "Other"
        },
        {
          jobname: "General Application",
          joburl: "https://mailchain.xyz/careers?gh_jid=4091945101",
          jobcategory: "OTHER",
          companyname: "Mailchain",
          companyurl: "https://mailchain.com/careers",
          companycategory: "Other"
        },
        {
          jobname: "Python Backend Developer",
          joburl: "https://rotki.com/jobs/backend",
          jobcategory: "ENGINEERING",
          companyname: "Rotki",
          companyurl: "https://rotki.com/jobs/",
          companycategory: "Other"
        },
        {
          jobname: "Vue.js - TypeScript Developer",
          joburl: "https://rotki.com/jobs/frontend",
          jobcategory: "ENGINEERING",
          companyname: "Rotki",
          companyurl: "https://rotki.com/jobs/",
          companycategory: "Other"
        },
        {
          jobname: "UI/UX designer",
          joburl: "https://rotki.com/jobs/ui-ux",
          jobcategory: "PRODUCT",
          companyname: "Rotki",
          companyurl: "https://rotki.com/jobs/",
          companycategory: "Other"
        },
        {
          jobname: "ZK Cryptography Engineer",
          joburl: "https://boards.greenhouse.io/o1labs/jobs/5149186004",
          jobcategory: "CRYPTOGRAPHY",
          companyname: "O(1) Labs",
          companyurl: "https://boards.greenhouse.io/o1labs",
          companycategory: "Labs"
        },
        {
          jobname: "Ecosystem Exploration Engineer",
          joburl: "https://boards.greenhouse.io/o1labs/jobs/5141177004",
          jobcategory: "ENGINEERING",
          companyname: "O(1) Labs",
          companyurl: "https://boards.greenhouse.io/o1labs",
          companycategory: "Labs"
        },
        {
          jobname: "Engineering manager - Exploration team",
          joburl: "https://boards.greenhouse.io/o1labs/jobs/5150922004",
          jobcategory: "ENGINEERING",
          companyname: "O(1) Labs",
          companyurl: "https://boards.greenhouse.io/o1labs",
          companycategory: "Labs"
        },
        {
          jobname: "Protocol Engineer",
          joburl: "https://boards.greenhouse.io/o1labs/jobs/4082783004",
          jobcategory: "ENGINEERING",
          companyname: "O(1) Labs",
          companyurl: "https://boards.greenhouse.io/o1labs",
          companycategory: "Labs"
        },
        {
          jobname: "ZK Applications Solutions Architect",
          joburl: "https://boards.greenhouse.io/o1labs/jobs/5138503004",
          jobcategory: "ENGINEERING",
          companyname: "O(1) Labs",
          companyurl: "https://boards.greenhouse.io/o1labs",
          companycategory: "Labs"
        },
        {
          jobname: "Marketing and Communications Manager",
          joburl: "https://boards.greenhouse.io/o1labs/jobs/5091373004",
          jobcategory: "MARKETING",
          companyname: "O(1) Labs",
          companyurl: "https://boards.greenhouse.io/o1labs",
          companycategory: "Labs"
        },
        {
          jobname: "Protocol Product Manager",
          joburl: "https://boards.greenhouse.io/o1labs/jobs/5127243004",
          jobcategory: "PRODUCT",
          companyname: "O(1) Labs",
          companyurl: "https://boards.greenhouse.io/o1labs",
          companycategory: "Labs"
        },
        {
          jobname: "SDK Engineer",
          joburl: "https://boards.greenhouse.io/o1labs/jobs/4088137004",
          jobcategory: "ENGINEERING",
          companyname: "O(1) Labs",
          companyurl: "https://boards.greenhouse.io/o1labs",
          companycategory: "Labs"
        },
        {
          jobname: "Research Cryptographer & Mathematician",
          joburl: "https://heliax.dev/jobs/research-cryptographer-mathematician",
          jobcategory: "CRYPTOGRAPHY",
          companyname: "Heliax",
          companyurl: "https://heliax.dev/jobs",
          companycategory: "Labs"
        },
        {
          jobname: "Distributed Systems Theorist",
          joburl: "https://heliax.dev/jobs/distributed-systems-theorist",
          jobcategory: "RESEARCH",
          companyname: "Heliax",
          companyurl: "https://heliax.dev/jobs",
          companycategory: "Labs"
        },
        {
          jobname: "Engineering Security Lead",
          joburl: "https://heliax.dev/jobs/engineering-security-lead",
          jobcategory: "SECURITY",
          companyname: "Heliax",
          companyurl: "https://heliax.dev/jobs",
          companycategory: "Labs"
        },
        {
          jobname: "Senior Engineer",
          joburl: "https://heliax.dev/jobs/senior-engineer",
          jobcategory: "ENGINEERING",
          companyname: "Heliax",
          companyurl: "https://heliax.dev/jobs",
          companycategory: "Labs"
        },
        {
          jobname: "Community Manager (Anoma/Namada)",
          joburl: "https://heliax.dev/jobs/community-manager",
          jobcategory: "MARKETING",
          companyname: "Heliax",
          companyurl: "https://heliax.dev/jobs",
          companycategory: "Labs"
        },
        {
          jobname: "Anoma Application Researcher",
          joburl: "https://heliax.dev/jobs/anoma-application-researcher",
          jobcategory: "RESEARCH",
          companyname: "Heliax",
          companyurl: "https://heliax.dev/jobs",
          companycategory: "Labs"
        },
        {
          jobname: "Ecosystem Partnerships Lead",
          joburl: "https://heliax.dev/jobs/ecosystem-partnerships-lead",
          jobcategory: "SALES",
          companyname: "Heliax",
          companyurl: "https://heliax.dev/jobs",
          companycategory: "Labs"
        },
        {
          jobname: "General Application",
          joburl: "https://docs.google.com/forms/d/e/1FAIpQLSfTfzqkyp01uRTUl2kLVpwgjDCvCRiJiawcetrF9COjVjwCQg/viewform",
          jobcategory: "OTHER",
          companyname: "Heliax",
          companyurl: "https://heliax.dev/jobs",
          companycategory: "Labs"
        },
        {
          jobname: "Developer Relations - Sygma",
          joburl: "https://boards.greenhouse.io/chainsafesystems/jobs/5130627004",
          jobcategory: "ENGINEERING",
          companyname: "ChainSafe",
          companyurl: "https://chainsafe.io/careers#cta",
          companycategory: "Labs"
        },
        {
          jobname: "Head of Protocol Engineering",
          joburl: "https://boards.greenhouse.io/chainsafesystems/jobs/5087051004",
          jobcategory: "ENGINEERING",
          companyname: "ChainSafe",
          companyurl: "https://chainsafe.io/careers#cta",
          companycategory: "Labs"
        },
        {
          jobname: "Protocol Engineer - Gossamer/Polkadot (Go)",
          joburl: "https://boards.greenhouse.io/chainsafesystems/jobs/5095606004",
          jobcategory: "ENGINEERING",
          companyname: "ChainSafe",
          companyurl: "https://chainsafe.io/careers#cta",
          companycategory: "Labs"
        },
        {
          jobname: "Senior Product Manager - Lodestar/Ethereum",
          joburl: "https://boards.greenhouse.io/chainsafesystems/jobs/5140281004",
          jobcategory: "ENGINEERING",
          companyname: "ChainSafe",
          companyurl: "https://chainsafe.io/careers#cta",
          companycategory: "Labs"
        },
        {
          jobname: "Blockchain ZK Engineer (Cross Chain Interoperability Protocol)",
          joburl: "https://boards.greenhouse.io/chainsafesystems/jobs/5164223004",
          jobcategory: "ENGINEERING",
          companyname: "ChainSafe",
          companyurl: "https://chainsafe.io/careers#cta",
          companycategory: "Labs"
        },
        {
          jobname: "Web3 SRE Lead - Bridge Ops Team",
          joburl: "https://boards.greenhouse.io/chainsafesystems/jobs/5004247004",
          jobcategory: "ENGINEERING",
          companyname: "ChainSafe",
          companyurl: "https://chainsafe.io/careers#cta",
          companycategory: "Labs"
        },
        {
          jobname: "Office & Operations Coordinator ",
          joburl: "https://boards.greenhouse.io/chainsafesystems/jobs/5088148004",
          jobcategory: "OPERATIONS",
          companyname: "ChainSafe",
          companyurl: "https://chainsafe.io/careers#cta",
          companycategory: "Labs"
        },
        {
          jobname: "Developer",
          joburl: "https://synonym.to/team",
          jobcategory: "ENGINEERING",
          companyname: "Synonym",
          companyurl: "https://synonym.to/team",
          companycategory: "Labs"
        },
        {
          jobname: "Head of Legal",
          joburl: "https://boards.greenhouse.io/xmtp/jobs/4987831004",
          jobcategory: "LEGAL",
          companyname: "XMTP",
          companyurl: "https://blog.xmtp.com/careers/",
          companycategory: "Labs"
        },
        {
          jobname: "Senior/Staff Software Engineer",
          joburl: "https://boards.greenhouse.io/xmtp/jobs/5158238004?ref=blog.xmtp.com",
          jobcategory: "ENGINEERING",
          companyname: "XMTP",
          companyurl: "https://blog.xmtp.com/careers/",
          companycategory: "Labs"
        },
        {
          jobname: "Russian Language Community Manager",
          joburl: "https://jobs.lever.co/MantaNetwork/77e5faf9-7168-47ae-aae8-d518cf7f13e8",
          jobcategory: "MARKETING",
          companyname: "p0x Labs",
          companyurl: "https://jobs.lever.co/MantaNetwork",
          companycategory: "Labs"
        },
        {
          jobname: "Cryptography Engineer",
          joburl: "https://jobs.lever.co/MantaNetwork/4d5abd3e-80da-49dd-b576-8f0a1250f56a",
          jobcategory: "CRYPTOGRAPHY",
          companyname: "p0x Labs",
          companyurl: "https://jobs.lever.co/MantaNetwork",
          companycategory: "Labs"
        },
        {
          jobname: "Senior Blockchain Engineer (Rollup)",
          joburl: "https://jobs.lever.co/MantaNetwork/b77c1844-8018-4a7c-a34b-61b865fca7ce",
          jobcategory: "ENGINEERING",
          companyname: "p0x Labs",
          companyurl: "https://jobs.lever.co/MantaNetwork",
          companycategory: "Labs"
        },
        {
          jobname: "Senior Blockchain Security Engineer",
          joburl: "https://jobs.lever.co/MantaNetwork/d06720a5-08ff-42c7-bb22-201d511676df",
          jobcategory: "SECURITY",
          companyname: "p0x Labs",
          companyurl: "https://jobs.lever.co/MantaNetwork",
          companycategory: "Labs"
        },
        {
          jobname: "Community Manager",
          joburl: "https://jobs.lever.co/MantaNetwork/53c66d9f-ab2b-4270-bc30-aa1c3e912028",
          jobcategory: "MARKETING",
          companyname: "p0x Labs",
          companyurl: "https://jobs.lever.co/MantaNetwork",
          companycategory: "Labs"
        },
        {
          jobname: "Community Manager (Korea)",
          joburl: "https://jobs.lever.co/MantaNetwork/cff03de4-ee16-4944-8d5a-2399db4d843c",
          jobcategory: "MARKETING",
          companyname: "p0x Labs",
          companyurl: "https://jobs.lever.co/MantaNetwork",
          companycategory: "Labs"
        },
        {
          jobname: "Marketing Associate",
          joburl: "https://jobs.lever.co/MantaNetwork/3e2cc613-3b39-47d5-96b4-da0a8f28a123",
          jobcategory: "MARKETING",
          companyname: "p0x Labs",
          companyurl: "https://jobs.lever.co/MantaNetwork",
          companycategory: "Labs"
        },
        {
          jobname: "Technical Content Writer",
          joburl: "https://jobs.lever.co/MantaNetwork/ee99ecca-aafa-4505-92bb-d57df151c2db",
          jobcategory: "MARKETING",
          companyname: "p0x Labs",
          companyurl: "https://jobs.lever.co/MantaNetwork",
          companycategory: "Labs"
        },
        {
          jobname: "Strategy Officer",
          joburl: "https://jobs.lever.co/MantaNetwork/48981509-5b7e-4ebf-a9d7-6ad972e62e94",
          jobcategory: "MARKETING",
          companyname: "p0x Labs",
          companyurl: "https://jobs.lever.co/MantaNetwork",
          companycategory: "Labs"
        },
        {
          jobname: "Product Manager",
          joburl: "https://jobs.lever.co/MantaNetwork/04581756-7424-4cd5-8c0e-6a2e294374ac",
          jobcategory: "PRODUCT",
          companyname: "p0x Labs",
          companyurl: "https://jobs.lever.co/MantaNetwork",
          companycategory: "Labs"
        },
        {
          jobname: "C++ Developer (Cryptography)",
          joburl: "https://nil.foundation/careers/jobs?jobId=P1ZaI_Tx7oei",
          jobcategory: "CRYPTOGRAPHY",
          companyname: "nil Foundation",
          companyurl: "https://nil.foundation/careers/jobs",
          companycategory: "Labs"
        },
        {
          jobname: "Cryptography Researcher",
          joburl: "",
          jobcategory: "RESEARCH",
          companyname: "nil Foundation",
          companyurl: "https://nil.foundation/careers/jobs",
          companycategory: "Labs"
        },
        {
          jobname: "Decentralized Applications Developer",
          joburl: "https://nil.foundation/careers/jobs?jobId=k-rjW4Y07Oce",
          jobcategory: "ENGINEERING",
          companyname: "nil Foundation",
          companyurl: "https://nil.foundation/careers/jobs",
          companycategory: "Labs"
        },
        {
          jobname: "Decentralized Systems Researcher",
          joburl: "https://nil.foundation/careers/jobs?jobId=EsCDSlJdtwl5",
          jobcategory: "RESEARCH",
          companyname: "nil Foundation",
          companyurl: "https://nil.foundation/careers/jobs",
          companycategory: "Labs"
        },
        {
          jobname: "Engineering Director - Engineering manager",
          joburl: "https://nil.foundation/careers/jobs?jobId=P028ELR8t25y",
          jobcategory: "ENGINEERING",
          companyname: "nil Foundation",
          companyurl: "https://nil.foundation/careers/jobs",
          companycategory: "Labs"
        },
        {
          jobname: "Research Analyst",
          joburl: "https://nil.foundation/careers/jobs?jobId=lvuCF87ZKVN6",
          jobcategory: "RESEARCH",
          companyname: "nil Foundation",
          companyurl: "https://nil.foundation/careers/jobs",
          companycategory: "Labs"
        },
        {
          jobname: "Senior C++ Developer",
          joburl: "https://nil.foundation/careers/jobs?jobId=IpNIuwrbvK2s",
          jobcategory: "ENGINEERING",
          companyname: "nil Foundation",
          companyurl: "https://nil.foundation/careers/jobs",
          companycategory: "Labs"
        },
        {
          jobname: "Senior Go Developer",
          joburl: "https://nil.foundation/careers/jobs?jobId=i6jHoMRVSmtn",
          jobcategory: "ENGINEERING",
          companyname: "nil Foundation",
          companyurl: "https://nil.foundation/careers/jobs",
          companycategory: "Labs"
        },
        {
          jobname: "Developer Advocate",
          joburl: "https://nil.foundation/careers/jobs?jobId=G6kpKrDN9dEJ",
          jobcategory: "ENGINEERING",
          companyname: "nil Foundation",
          companyurl: "https://nil.foundation/careers/jobs",
          companycategory: "Labs"
        },
        {
          jobname: "Head of DevRel",
          joburl: "https://nil.foundation/careers/jobs?jobId=ED8N-i_eiVbU",
          jobcategory: "ENGINEERING",
          companyname: "nil Foundation",
          companyurl: "https://nil.foundation/careers/jobs",
          companycategory: "Labs"
        },
        {
          jobname: "Head Of Business Development",
          joburl: "https://nil.foundation/careers/jobs?jobId=Ov_R2SNwii0-",
          jobcategory: "SALES",
          companyname: "nil Foundation",
          companyurl: "https://nil.foundation/careers/jobs",
          companycategory: "Labs"
        },
        {
          jobname: "Head of Ecosystem",
          joburl: "https://nil.foundation/careers/jobs?jobId=f5KSNsuUZ99v",
          jobcategory: "MARKETING",
          companyname: "nil Foundation",
          companyurl: "https://nil.foundation/careers/jobs",
          companycategory: "Labs"
        },
        {
          jobname: "Libp2p Networking Engineer",
          joburl: "https://boards.greenhouse.io/logos/jobs/5688077",
          jobcategory: "ENGINEERING",
          companyname: "Vac",
          companyurl: "https://vac.dev/join-us",
          companycategory: "Other"
        },
        {
          jobname: "Test Automation Engineer (Vac QA)",
          joburl: "https://boards.greenhouse.io/vac/jobs/5700917",
          jobcategory: "ENGINEERING",
          companyname: "Vac",
          companyurl: "https://vac.dev/join-us",
          companycategory: "Other"
        },
        {
          jobname: "Zero Knowledge Research Engineer (Vac ACZ)",
          joburl: "https://boards.greenhouse.io/logos/jobs/5543923",
          jobcategory: "RESEARCH",
          companyname: "Vac",
          companyurl: "https://vac.dev/join-us",
          companycategory: "Other"
        },
        {
          jobname: "Zero Knowledge Research Engineer (Vac Nescience)",
          joburl: "https://boards.greenhouse.io/logos/jobs/5543854",
          jobcategory: "RESEARCH",
          companyname: "Vac",
          companyurl: "https://vac.dev/join-us",
          companycategory: "Other"
        },
        {
          jobname: "Zero Knowledge Researcher (Vac Nescience)",
          joburl: "https://boards.greenhouse.io/logos/jobs/4460860",
          jobcategory: "RESEARCH",
          companyname: "Vac",
          companyurl: "https://vac.dev/join-us",
          companycategory: "Other"
        },
        {
          jobname: "General Application",
          joburl: "https://dusk.network/career/other-roles/",
          jobcategory: "OTHER",
          companyname: "Dusk",
          companyurl: "https://dusk.network/career/other-roles/",
          companycategory: "DarkFi"
        },
        {
          jobname: "Senior Software Engineer - KMS",
          joburl: "https://jobs.zama.ai/companies/zama/jobs/software-engineer-secure-enclaves_paris",
          jobcategory: "ENGINEERING",
          companyname: "Zama",
          companyurl: "https://jobs.zama.ai/",
          companycategory: "Infra"
        },
        {
          jobname: "Blockchain Engineer - Backend",
          joburl: "https://jobs.zama.ai/companies/zama/jobs/blockchain-engineer-backend_paris",
          jobcategory: "ENGINEERING",
          companyname: "Zama",
          companyurl: "https://jobs.zama.ai/",
          companycategory: "Infra"
        },
        {
          jobname: "FPGA - Hardware Engineer",
          joburl: "https://jobs.zama.ai/companies/zama/jobs/rtl-design-engineer_paris",
          jobcategory: "ENGINEERING",
          companyname: "Zama",
          companyurl: "https://jobs.zama.ai/",
          companycategory: "Infra"
        },
        {
          jobname: "Business Development Director - Financial Institutions",
          joburl: "https://jobs.zama.ai/companies/zama/jobs/business-development-director-us-blockchain_paris",
          jobcategory: "SALES",
          companyname: "Zama",
          companyurl: "https://jobs.zama.ai/",
          companycategory: "Infra"
        },
        {
          jobname: "Homomorphic Encryption Researcher",
          joburl: "https://jobs.zama.ai/companies/zama/jobs/senior-researcher-cryptography_paris",
          jobcategory: "RESEARCH",
          companyname: "Zama",
          companyurl: "https://jobs.zama.ai/",
          companycategory: "Infra"
        },
        {
          jobname: "Marketing Lead - Blockchain",
          joburl: "https://jobs.zama.ai/companies/zama/jobs/marketing-lead-blockchain_paris",
          jobcategory: "MARKETING",
          companyname: "Zama",
          companyurl: "https://jobs.zama.ai/",
          companycategory: "Infra"
        },
        {
          jobname: "Web Developer",
          joburl: "https://kelp.notion.site/Web-Developer-Svelte-SvelteKit-GraphQL-Tailwind-100-Remote-4a890c0a7c6c4208a68ff2eb25648c46",
          jobcategory: "ENGINEERING",
          companyname: "Kelp",
          companyurl: "https://kelp.notion.site/Kelp-Anagolay-Careers-c27cebdedf29461abda591bc23bad3f6",
          companycategory: "DID"
        },
        {
          jobname: "Backend Developer",
          joburl: "https://kelp.notion.site/Backend-Developer-TypeScript-GraphQL-NodeJS-100-Remote-c2eb6a29bc8e41dab370d5e8f0c83327",
          jobcategory: "ENGINEERING",
          companyname: "Kelp",
          companyurl: "https://kelp.notion.site/Kelp-Anagolay-Careers-c27cebdedf29461abda591bc23bad3f6",
          companycategory: "DID"
        },
        {
          jobname: "Marketing & Community Architect",
          joburl: "https://kelp.notion.site/Marketing-Community-Architect-351c7c1ffcc24a2c9e1a13a48b47cc42",
          jobcategory: "MARKETING",
          companyname: "Kelp",
          companyurl: "https://kelp.notion.site/Kelp-Anagolay-Careers-c27cebdedf29461abda591bc23bad3f6",
          companycategory: "DID"
        },
        {
          jobname: "Technical Writer",
          joburl: "https://kelp.notion.site/Technical-Writer-1807fce2f97b4ba19da2454931ad5224",
          jobcategory: "MARKETING",
          companyname: "Kelp",
          companyurl: "https://kelp.notion.site/Kelp-Anagolay-Careers-c27cebdedf29461abda591bc23bad3f6",
          companycategory: "DID"
        },
        {
          jobname: "Head of Sales",
          joburl: "https://careers.cheqd.io/jobs/SWe0EVpvHKqR/head-of-sales-bd-remote",
          jobcategory: "SALES",
          companyname: "Cheqd",
          companyurl: "https://careers.cheqd.io/jobs",
          companycategory: "DID"
        },
        {
          jobname: "Senior Full Stack Engineer",
          joburl: "https://careers.cheqd.io/jobs/qQtSrlFazgQ3/senior-full-stack-engineer-remote",
          jobcategory: "ENGINEERING",
          companyname: "Cheqd",
          companyurl: "https://careers.cheqd.io/jobs",
          companycategory: "DID"
        },
        {
          jobname: "Test Automation & Quality Assurance Engineer",
          joburl: "https://careers.cheqd.io/jobs/L25O5vqsXfcW/test-automation-quality-assurance-engineer",
          jobcategory: "ENGINEERING",
          companyname: "Cheqd",
          companyurl: "https://careers.cheqd.io/jobs",
          companycategory: "DID"
        },
        {
          jobname: "Backend Developer",
          joburl: "https://angel.co/company/transferchain/jobs/668540-backend-developer",
          jobcategory: "ENGINEERING",
          companyname: "TransferChain",
          companyurl: "https://transferchain.io/careers",
          companycategory: "Storage"
        },
        {
          jobname: "Frontend Developer",
          joburl: "https://angel.co/company/transferchain/jobs/668542-frontend-developer",
          jobcategory: "ENGINEERING",
          companyname: "TransferChain",
          companyurl: "https://transferchain.io/careers",
          companycategory: "Storage"
        },
        {
          jobname: "DevOps Engineer",
          joburl: "https://angel.co/company/transferchain/jobs/770496-devops-engineer",
          jobcategory: "ENGINEERING",
          companyname: "TransferChain",
          companyurl: "https://transferchain.io/careers",
          companycategory: "Storage"
        },
        {
          jobname: "Market Segmentation and Customer Retention Specialist",
          joburl: "https://angel.co/company/transferchain/jobs/676453-market-segmentation-and-customer-retention-specialist",
          jobcategory: "MARKETING",
          companyname: "TransferChain",
          companyurl: "https://transferchain.io/careers",
          companycategory: "Storage"
        },
        {
          jobname: "General Application",
          joburl: "https://angel.co/company/transferchain/jobs/673388-general-application",
          jobcategory: "OTHER",
          companyname: "TransferChain",
          companyurl: "https://transferchain.io/careers",
          companycategory: "Storage"
        },
        {
          jobname: "General Application",
          joburl: "https://join.com/companies/doxychain/spontaneous-application",
          jobcategory: "OTHER",
          companyname: "DoxyChain",
          companyurl: "https://join.com/companies/doxychain",
          companycategory: "Other"
        },
        {
          jobname: "Junior Software Engineer",
          joburl: "https://jobs.lever.co/osomprivacy/ba042a15-eee4-410a-9c8c-7cb01d1e8391",
          jobcategory: "ENGINEERING",
          companyname: "OSOM",
          companyurl: "https://www.osomprivacy.com/jobs",
          companycategory: "Labs"
        },
        {
          jobname: "Modem Specialist",
          joburl: "https://jobs.lever.co/osomprivacy/220b2725-2787-4e01-a430-ecf4a1e5b628",
          jobcategory: "ENGINEERING",
          companyname: "OSOM",
          companyurl: "https://www.osomprivacy.com/jobs",
          companycategory: "Labs"
        },
        {
          jobname: "Modem - Cellular System Test Engineer",
          joburl: "https://jobs.lever.co/osomprivacy/acf278c2-592c-4b9d-b351-3473313f7135",
          jobcategory: "ENGINEERING",
          companyname: "OSOM",
          companyurl: "https://www.osomprivacy.com/jobs",
          companycategory: "Labs"
        },
        {
          jobname: "Program Manager - Software",
          joburl: "https://jobs.lever.co/osomprivacy/03f3bc37-11f7-4938-8d29-04c55ce1dc9f",
          jobcategory: "ENGINEERING",
          companyname: "OSOM",
          companyurl: "https://www.osomprivacy.com/jobs",
          companycategory: "Labs"
        },
        {
          jobname: " Senior Cryptographer",
          joburl: "https://www.fyeo.io/careers-senior-cryptographer",
          jobcategory: "CRYPTOGRAPHY",
          companyname: "FYEO",
          companyurl: "https://www.fyeo.io/careers",
          companycategory: "DID"
        },
        {
          jobname: "Senior Blockchain Developer",
          joburl: "https://www.fyeo.io/careers-senior-blockchain-developer",
          jobcategory: "ENGINEERING",
          companyname: "FYEO",
          companyurl: "https://www.fyeo.io/careers",
          companycategory: "DID"
        },
        {
          jobname: " React/NodeJS/GraphQL Engineer",
          joburl: "https://www.fyeo.io/careers-react-nodejs-graphql-engineer",
          jobcategory: "ENGINEERING",
          companyname: "FYEO",
          companyurl: "https://www.fyeo.io/careers",
          companycategory: "DID"
        },
        {
          jobname: " DevOps Engineer",
          joburl: "https://www.fyeo.io/careers-devops-engineer",
          jobcategory: "ENGINEERING",
          companyname: "FYEO",
          companyurl: "https://www.fyeo.io/careers",
          companycategory: "DID"
        },
        {
          jobname: " Python Backend Engineer",
          joburl: "https://www.fyeo.io/careers-python-backend-engineer",
          jobcategory: "ENGINEERING",
          companyname: "FYEO",
          companyurl: "https://www.fyeo.io/careers",
          companycategory: "DID"
        },
        {
          jobname: " Senior Web Engineer - Browser Extension Lead",
          joburl: "https://www.fyeo.io/senior-web-engineer-browser-extension-lead",
          jobcategory: "ENGINEERING",
          companyname: "FYEO",
          companyurl: "https://www.fyeo.io/careers",
          companycategory: "DID"
        },
        {
          jobname: " OSINT Security Analyst",
          joburl: "https://www.fyeo.io/careers-osint-security-analyst",
          jobcategory: "SECURITY",
          companyname: "FYEO",
          companyurl: "https://www.fyeo.io/careers",
          companycategory: "DID"
        },
        {
          jobname: "Head of Growth",
          joburl: "https://www.fyeo.io/careers-head-of-growth",
          jobcategory: "MARKETING",
          companyname: "FYEO",
          companyurl: "https://www.fyeo.io/careers",
          companycategory: "DID"
        },
        {
          jobname: " Product Manager - FYEO Identity",
          joburl: "https://www.fyeo.io/careers-product-manager-fyeo-id",
          jobcategory: "PRODUCT",
          companyname: "FYEO",
          companyurl: "https://www.fyeo.io/careers",
          companycategory: "DID"
        },
        {
          jobname: " Product Manager - FYEO Domain Intelligence",
          joburl: "https://www.fyeo.io/careers-product-manager-fyeo-di",
          jobcategory: "PRODUCT",
          companyname: "FYEO",
          companyurl: "https://www.fyeo.io/careers",
          companycategory: "DID"
        },
        {
          jobname: "Business Development Lead",
          joburl: "https://www.fyeo.io/careers-blockchain-business-development-lead",
          jobcategory: "SALES",
          companyname: "FYEO",
          companyurl: "https://www.fyeo.io/careers",
          companycategory: "DID"
        }
      ])
}