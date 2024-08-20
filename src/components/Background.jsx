const Background = () => {
  return (
    <div
      className="absolute w-full h-full flex justify-evenly -z-50"
      aria-hidden="true"
    >
      {Array(3)
        .fill()
        .map((val, idx) => {
          return <div key={idx} className="w-px h-full bg-white/10"></div>;
        })}
    </div>
  );
};

export default Background;
