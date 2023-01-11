import projects from '../JSON/projects.json' assert {type: 'json'};
import courses from '../JSON/courses.json' assert {type: 'json'};

function generateProjectRow(num){
    const name = projects[num].name;
    const link = projects[num].link;
    const technologies = projects[num].technologies;
    const publishment = projects[num].publishment;

    const tableBody = document.querySelector('.projects__tbody');
    const tableRow = document.createElement("tr");
    tableRow.className = "projects__tr";

    const nameCell = document.createElement("td");
    nameCell.className = "projects__td";
    nameCell.innerHTML = `${name}`;
    tableRow.appendChild(nameCell);

    const gitHubCell = document.createElement("td");
    gitHubCell.className = "projects__td";
    gitHubCell.innerHTML = `<a href="${link}">${name}<a>`;
    tableRow.appendChild(gitHubCell);

    const technologiesCell = document.createElement("td");
    technologiesCell.className = "projects__td";
    technologiesCell.innerHTML = `${technologies}`;
    tableRow.appendChild(technologiesCell);

    const publishmentCell = document.createElement('td');
    publishmentCell.className = "projects__td";

    if(publishment === 'none'){
      publishmentCell.innerHTML = `${publishment}`;
    }else{
      publishmentCell.innerHTML = `<a href="${publishment}">published</a>`
    }

    tableRow.appendChild(publishmentCell);

    tableBody.appendChild(tableRow);
}


function fillProjectTable(){
  projects.reverse().map((value, index) => {
    generateProjectRow(index);
  })
}

fillProjectTable();
