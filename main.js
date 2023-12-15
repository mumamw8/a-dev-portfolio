// projects data from ./projects.js
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
  urlElement.innerText = project.projectUrl === '#' ? 'Closed Project' : "View project";
  projectElement.appendChild(urlElement);

  // Add the project element to the container
  projectsContainer.appendChild(projectElement);
}
