import { defineDb, defineTable, column } from 'astro:db';

const Openings = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    wallet: column.text(),
    jobname: column.text(),
    joburl: column.text(),
    jobcategory: column.text(),
    jobdescription: column.text({ optional: true }),
    joblocation: column.text({ optional: true }),
    companyname: column.text(),
    companyurl: column.text(),
    companycategory: column.text({ optional: true }),
  },
  indexes: [
    { on: ["jobname", "companyname"], unique: true },
  ]
})

export default defineDb({
  tables: { Openings },
})