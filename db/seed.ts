import { db, Openings } from 'astro:db';

export default async function () {
  await db.insert(Openings).values([
    {
      wallet: "0x1234567890",
      jobname: "Community manager",
      joburl: "https://sienna.network/jobs/",
      jobcategory: "MARKETING",
      companyname: "Sienna",
      companyurl: "https://sienna.network/jobs/",
      companycategory: "DeFi"
    },
    {
      wallet: "0x1234567890",
      jobname: "Security Engineering Lead",
      joburl: "https://jobs.lever.co/Espresso/135f4767-f690-41f8-9ab0-95fd9d398677",
      jobcategory: "SECURITY",
      companyname: "Espresso Systems",
      companyurl: "https://jobs.lever.co/Espresso",
      companycategory: "DeFi"
    },
    {
      wallet: "0x1234567890",
      jobname: "Software Engineer - Infrastructure",
      joburl: "https://jobs.lever.co/Espresso/bf359a02-5579-4d8b-a254-23c989f67af5",
      jobcategory: "ENGINEERING",
      companyname: "Espresso Systems",
      companyurl: "https://jobs.lever.co/Espresso",
      companycategory: "DeFi"
    },
    {
      wallet: "0x1234567890",
      jobname: "Front End Developer",
      joburl: "https://www.silentresearchlabs.org/jobs/backend-system-engineer",
      jobcategory: "ENGINEERING",
      companyname: "Silent Research Labs",
      companyurl: "https://www.silentresearchlabs.org/company/careers",
      companycategory: "DeFi"
    },
    {
      wallet: "0x1234567890",
      jobname: "BackEnd Engineer",
      joburl: "https://www.silentresearchlabs.org/jobs/backend-system-engineer",
      jobcategory: "ENGINEERING",
      companyname: "Silent Research Labs",
      companyurl: "https://www.silentresearchlabs.org/company/careers",
      companycategory: "DeFi"
    },
    {
      wallet: "0x1234567890",
      jobname: "Digital Designer",
      joburl: "https://www.silentresearchlabs.org/jobs/digital-designer",
      jobcategory: "PRODUCT",
      companyname: "Silent Research Labs",
      companyurl: "https://www.silentresearchlabs.org/company/careers",
      companycategory: "DeFi"
    }
  ])
}