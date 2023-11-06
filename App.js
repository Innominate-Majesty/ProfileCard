import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

//root of profile card
function App() {
  return (
    <div className="card">
      <ProfileCard/>
    </div>
  );
}

//profile card component -- holds all parts of the profile card
function ProfileCard() {
    return (
        <section className="cardd">
            <VenusProfile />
            <Venus Skill />
        </section>
    );
}

//VenusProfile - contains the image and introduction
function VenusProfile() {
    return (
        <div className="profile">
            <VenusImage />
            <VenusBio />
        </div>
    );
}

//VenusImage - displays the avatar/profile image
function VenusImage() {
    //  NEEDS UPDATING //
    return <img className="picture" src="" alt="Venus Profile Picture" />
}

//VenusBio
function VenusBio() {
    return (
        <div className="bio">
            <h1 className="name">Venus D</h1>
            <p className="biography">
                Computer Science student learning full-stack engineering skills. My dream is to develope a pscyhological game in the future. Currently looking for internships and mentorships.
            </p>
        </div>
    );
}

//VenusSkills - lists all the skills
function VenusSkills() {
    const skills = [
        { name: 'JavaScript', level: 'beginner' },
        { name: 'HTML & CSS', level: 'beginner' },
        { name: 'React', level: 'beginner' },
        { name: 'Java', level: 'beginner' },
        { name: 'Data Structures', level: 'beginner'},
    ];

    return (
        <ul className="skills">
            {skills.map((skill, index) => (<Skill key={index} name={skill.name} level={skill.level}  />))}
        </ul>
    ); 
}

function Skill({ name, level }) {
    return (
        <li className="skill">
            <span className="skill-name">{name}</span>
            <span className="skill-level">{name}</span>
        </li>
    );
}

//main rendering logic - for React
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
