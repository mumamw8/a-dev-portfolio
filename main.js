const projects = [
  {
      title: 'Listr',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
      techStack: ['Next.js', 'PostgreSQL'],
      projectUrl: 'https://github.com/mumamw8/listr-app.git',
  },
  {
      title: 'Mock Portfolio Site',
      imageUrl: 'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      techStack: ['React'],
      projectUrl: 'https://mumamw8.github.io/alif-portfolio/',
  },
  {
      title: 'micro C compiler',
      imageUrl: 'https://images.unsplash.com/photo-1538503529202-7a0e79cbb6f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      techStack: ['C'],
      projectUrl: 'https://github.com/mumamw8/Prog4.git',
  },
]
const projectsContainer = document.getElementById("projects");

// Loop through the projects array and create an HTML element for each one
for (let i = 0; i < projects.length; i++) {
  const project = projects[i];

  const hrefElement = document.createElement("a");

  const projectElement = document.createElement("div");

  // Add the project title
  const titleElement = document.createElement("h2");
  titleElement.innerText = project.title;
  projectElement.appendChild(titleElement);

  // Add the project image
  const imageElement = document.createElement("img");
  imageElement.src = project.imageUrl;
  projectElement.appendChild(imageElement);

  // Add the tech stack
  const techStackElement = document.createElement("ul");
  for (let j = 0; j < project.techStack.length; j++) {
    const tech = project.techStack[j];
    const techElement = document.createElement("li");
    techElement.innerText = tech;
    techStackElement.appendChild(techElement);
  }
  projectElement.appendChild(techStackElement);

  // Add the project URL
  const urlElement = document.createElement("a");
  urlElement.href = project.projectUrl;
  urlElement.innerText = "View project";
  projectElement.appendChild(urlElement);

  // Add the project element to the container
  projectsContainer.appendChild(projectElement);
}