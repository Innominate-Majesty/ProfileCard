import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import profilepic from './images/profilepic.png'

//root of profile card
function App() {
  return (
    <div className="card">
      <ProfileCard/>
    </div>
  );
}

export default App;

//profile card component -- holds all parts of the profile card
function ProfileCard() {
    return (
        <section className="cardd">
            <VenusProfile />
            <VenusSkills />
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
    return <img className="picture" src={profilepic} alt="Venus Profile Picture" />
}

//VenusBio
function VenusBio() {
    return (
        <div className="bio">
            <h1 className="name">Venus </h1>
            <p className="biography">
                Computer Science student learning full-stack engineering skills. My dream is to develope a pscyhological game in the future. Currently looking for internships and mentorships.
            </p>
        </div>
    );
}

//VenusSkills - lists all the skills
function VenusSkills() {
    const skills = [
        { name: ' Java  ', icon: ' 🌺🌺🌺' },
        { name: ' Data Structures ', icon: ' 🌺🌺🌺' },
        { name: ' OOP  ', icon: ' 🌺🌺🌺' },
        { name: ' JavaScript  ', icon: ' 🌺🌺🌺' },
        { name: ' HTML & CSS  ', icon: ' 🌺🌺🌺' },
        { name: ' React  ', icon: ' 🌺'}
    ];

    return (
        <ul className="skills">
            {skills.map((skill, index) => (<Skill key={index} name={skill.name} icon={skill.icon}  />))}
        </ul>
    ); 
}

function Skill({ name, icon }) {
    return (
        <li className="skill">
            <span className="skill-name">{name}</span>
            {icon && <span className="skill-icon">{icon}</span>}
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
