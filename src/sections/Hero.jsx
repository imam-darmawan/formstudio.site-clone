import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center space-y-8">
      <h1 className="text-[clamp(2rem,30cqi,20rem)] leading-none uppercase">
        Form
      </h1>
      <Button text="Studio" />
    </div>
  );
};

export default Hero;
