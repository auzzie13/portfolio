import React from "react";
import NavBar from "../components/NavBar";
import AboutMeCard from "../components/AboutMeCard";
import LanguagesCard from "../components/LanguagesCard";
import ResumeCard from "../components/ResumeCard";
import Weather from "../components/Weather";

function HomePage() {


  return (
    <div>
      <NavBar />
      <ResumeCard /> 
      <AboutMeCard  />
      <Weather />
      <LanguagesCard />
    </div>
  );
}

export default HomePage;
