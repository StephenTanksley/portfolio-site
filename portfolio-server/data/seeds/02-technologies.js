exports.seed = async function(knex) {
  await knex('technologies').insert([
    {
      id: 1,
      name: "HTML",
      description: "Hypertext Markup Language. The 'frame' of a website to be interpreted and built by the browser.",
    },
    {
      id: 2,
      name: "CSS",
      description: "Cascading Style Sheets. If HTML is the skeleton, .",
    },
    {
      id: 3,
      name: "JavaScript",
      description: "JavaScript allows a website to be dynamic as opposed to merely static using HTML/CSS."
    },
  ])
};