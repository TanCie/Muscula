import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import Button from "./Button";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-center gap-3">
        <p className="text-xl sm:text-4xl md:text-5xl font-semibold text-amber-200">
          {index}
        </p>
        <h4 className="text-lg sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-lg mx-auto">{description}</p>
    </div>
  );
}

export default function Generator(props) {
  const {
    poison,
    setPoison,
    muscles,
    setMuscles,
    goal,
    setGoal,
    updateWorkout,
  } = props;

  const [showModal, setShowModal] = useState(false);
  //let showModal = false;

  function toggleModal() {
    setShowModal(!showModal);
  }

  // most important func
  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    if (muscles.length > 2) {
      return;
    }

    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setShowModal(false);
    }
  }

  return (
    <SectionWrapper
      id={"generate"}
      header={"generate your workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to endure"}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {Object.keys(WORKOUTS).map((type, typeIndex) => (
          <button
            onClick={() => {
              setMuscles([]);
              setPoison(type);
            }}
            className={
              "bg-accent border duration-200 hover:border-amber-600 py-3 rounded-lg" +
              (type === poison ? " border-amber-600" : " border-amber-400")
            }
            key={typeIndex}
          >
            <p className=" capitalize"> {type.replaceAll("_", " ")} </p>
          </button>
        ))}
      </div>
      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles for annihilation"}
      />
      <div className=" bg-accent flex flex-col border border-solid border-amber-600 rounded-lg">
        <button
          onClick={toggleModal}
          className="relative p-3 flex justify-center items-center"
        >
          <p className="capitalize">
            {muscles.length == 0 ? "Select muscle groups" : muscles.join(", ")}
          </p>
          <i className="fa-solid fa-caret-down absolute top-1/2 right-3 -translate-y-1/2"></i>
        </button>
        {showModal && (
          <div className="flex flex-col p-3">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => (
              <button
                onClick={() => {
                  updateMuscles(muscleGroup);
                }}
                key={muscleGroupIndex}
                className={
                  "hover:text-amber-400 duration-200 " +
                  (muscles.includes(muscleGroup) ? "text-amber-400" : " ")
                }
              >
                <p className="uppercase">{muscleGroup}</p>
              </button>
            ))}
          </div>
        )}
      </div>
      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => (
          <button
            onClick={() => {
              setGoal(scheme);
            }}
            className={
              "bg-accent border duration-200 hover:border-amber-600 py-3 rounded-lg" +
              (scheme === goal ? " border-amber-600" : " border-amber-400")
            }
            key={schemeIndex}
          >
            <p className=" capitalize px-2 md:text-base">
              {scheme.replaceAll("_", " ")}
            </p>
          </button>
        ))}
      </div>
      <Button func={updateWorkout} text={"Formulate"} />
    </SectionWrapper>
  );
}
