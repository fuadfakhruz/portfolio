// pages/index.js
import Navbar from "./navbar";
import Background from "./background";
import Hero from "./hero";
import MyComponent from "./button";

export default function Home() {
  return (
    <div className="bg-white" id="list">
      <Navbar />
      <Background />
      <div>
        <Hero />
      </div>
      <div className="-mt-72 mx-48">
        <MyComponent />
      </div>
    </div>
  );
}
