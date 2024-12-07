import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center space-y-8">
      <h1 className="text-[clamp(7rem,30cqi,14rem)] font-extrabold uppercase leading-none tracking-tighter">
        Form
      </h1>
      <Button text="Studio" />
    </div>
  );
};

export default Hero;
