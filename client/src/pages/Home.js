import React from "react";
import NavBar from "../components/NavBar";
import AboutMeCard from "../components/AboutMeCard";
import LanguagesCard from "../components/LanguagesCard";
import ResumeCard from "../components/ResumeCard";

function HomePage() {


  return (
    <div>
      <NavBar />
      <LanguagesCard />
      <AboutMeCard  />
      <ResumeCard /> 
    </div>
  );
}

export default HomePage;
