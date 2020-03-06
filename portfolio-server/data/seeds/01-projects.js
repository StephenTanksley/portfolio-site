
exports.seed = async function(knex) {
  await knex('projects').insert([
    {
      id: 1,
      title: "Star Viewer",
      description: "Star Viewer is a Single Page Application built using React as my UI builder and Axios to handle requests. It was built to learn how to consume data from an API.",
      image_url: "http://starviewer.netlify.com"
    }, 
  ])
};
