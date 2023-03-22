window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {
        document.getElementById('navbar').classList.add('scrolled');
    } else {
        document.getElementById('navbar').classList.remove('scrolled');
    }
}

// AOS
AOS.init({
    duration: 800,
});

// Fetch projects data from JSON file
fetch('data/projects.json')
.then(response => response.json())
.then(data => {
    // Render each project in the HTML
    var container = document.getElementById('projects-container');
    data.projects.map((project, i) => {
        var projectDiv = document.createElement('div');
        projectDiv.className = 'col-lg-4 col-sm-6';
        projectDiv.setAttribute('data-aos', 'fade-up');
        projectDiv.setAttribute('data-aos-delay', '100');
        projectDiv.setAttribute('key', i);
        var innerHTML = `
            <div class="project">
                <img src="imgs/${project.image}" class="img-fluid">
                <div class="content">
                <h2 class="mt-auto">${project.date}</h2>
                <p>${project.description}</p>
                <a href="${project.github}" target="_blank" class="btn btn-outline-light rounded-pill me-3">View Project</a>
                <a href="${project.preview}" target="_blank" class="btn btn-outline-light rounded-pill">Preview Project</a>
                </div>
            </div>
        `;
        projectDiv.innerHTML = innerHTML;
        container.appendChild(projectDiv);
    });
})
.catch(error => {
    console.error('Error fetching projects data:', error);
});

// Fetch skills data from JSON file
fetch('data/skills.json')
.then(response => response.json())
.then(data => {
    // Render each skill in the HTML
    var container = document.getElementById('skills-container');
    data.skills.map((skill, i) => {
        var skillDiv = document.createElement('div');
        skillDiv.className = 'col-lg-3 col-sm-4';
        skillDiv.setAttribute('data-aos', 'fade-up');
        skillDiv.setAttribute('data-aos-delay', '100');
        skillDiv.setAttribute('key', i);
        var innerHTML = `
            <div class="skill border">
                <i class="fa-brands fa-html5"></i> <span> ${skill.name} </span>
            </div>
        `;
        skillDiv.innerHTML = innerHTML;
        container.appendChild(skillDiv);
    });
})
.catch(error => {
    console.error('Error fetching skills data:', error);
});