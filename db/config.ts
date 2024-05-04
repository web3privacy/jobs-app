import { defineDb, defineTable, column } from 'astro:db';

const Openings = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    jobname: column.text(),
    joburl: column.text(),
    jobcategory: column.text(),
    jobdescription: column.text({ optional: true }),
    joblocation: column.text({ optional: true }),
    companyname: column.text(),
    companyurl: column.text(),
    companycategory: column.text(),
  },
  indexes: [
    { on: ["jobname", "companyname"], unique: false },
  ]
})

export default defineDb({
  tables: { Openings },
})