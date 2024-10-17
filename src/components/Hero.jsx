import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center w-full mx-auto p-6 bg-img">
      <div className="flex flex-col gap-5">
        <p>IT'S TIME TO GET</p>
        <h1 className=" uppercase font-semibold text-5xl sm:text-4xl md:text-5xl lg:text-7xl">
          FIT <span className=" text-amber-400">Chisel & Toned</span>
        </h1>
      </div>
      <p className="text-sm md:text-lg max-w-[900px] font-light ">
        Elevate your fitness journey with{" "}
        <span className="text-amber-400 font-medium">Muscula</span>. Customize
        your workouts by selecting your desired muscle groups and tracking your
        repetitions. Achieve optimal physical form, one workout at a time.
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Get Started"}
      />
    </div>
  );
}
