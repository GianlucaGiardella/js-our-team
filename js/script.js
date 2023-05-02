const teamContainer = document.createElement("div");
teamContainer.className = "team";
document.querySelector(".container").appendChild(teamContainer);

const teamMembers = [
    {
        fullName: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg",
    },
    {
        fullName: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg",
    },
    {
        fullName: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg",
    },
    {
        fullName: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg",
    },
    {
        fullName: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg",
    },
    {
        fullName: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg",
    },
];

createCard(teamMembers, teamContainer);



// FUNCTIONS DEFINITION
function createCard(team, container) {
    for (let member of team) {
        container.innerHTML += addInfo(member);
    }
}

function addInfo(member) {
return `
<div class="card">
    <div class="name">${member.fullName}</div>
    <div class="role">${member.role}</div>
    <img src="img/${member.photo}" alt="Photo of ${member.fullName}">
</div>
`;
}