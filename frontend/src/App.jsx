import React from "react";
import { HeroSection, Header, Work, AboutMe, Tech, Contact } from "./components";
import { LiquidEther } from "./assets/components";

const App = () => {
  return (
    <div className="w-full h-screen relative bg-black">
      <LiquidEther
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        mouseForce={25}
        cursorSize={120}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.6}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.7}
        autoIntensity={2.8}
        takeoverDuration={0.3}
        autoResumeDelay={1000}
        autoRampDuration={0.8}
      />
      <HeroSection />
      <Header />
      <AboutMe/>
      <Tech/>
      <Work/>
      <Contact/>
    </div>
  );
};

export default App;
