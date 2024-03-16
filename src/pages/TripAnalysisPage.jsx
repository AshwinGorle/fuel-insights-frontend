import { async } from "@firebase/util";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../configs/config";
const TripAnalysisPage = () => {
  const [formData, setFormData] = useState({
    distanceTravel: 0,
    fuelConsuption: 0,
    vehicle: "HatchBack",
  });

  const [distanceTravel, setDistanceTravel] = useState(0);
  const [fuelConsuption, setFuelConsuption] = useState(0);
  const [vehicle, setVehicle] = useState("HatchBack");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [error, setError] = useState("");

  // function changeHandler(event) {
  //   const { name, value , gtype } = event.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: parseInt(value, 10), // Convert the input value to an integer
  //   }));
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("process analysis called");
    if (!(distanceTravel == 0 || fuelConsuption == 0)) {
      try {
        console.log(distanceTravel, fuelConsuption, vehicle);
        const response = await fetch(`${BASE_URL}fuel-economy/analysis`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          method: "POST",
          body: JSON.stringify({
            vehicleClass: vehicle,
            distanceTraveled: distanceTravel,
            fuelConsumed: fuelConsuption,
          }),
        });

        const data = await response.json();
        console.log("the analysisResult data---", data);
      } catch (err) {
        console.log("analysis error : ", err);
      }
    } else {
      setError("All fields are required!");
    }
  };

  function saveDataHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <div>
        <section className="bg-gray-50 bg-gradient-to-t from-gray-700 to-black">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Trip Analyis
                </h1>

                <form className="space-y-4 md:space-y-6">
                  {/* Distance travelled in km */}
                  <div>
                    <label
                      htmlFor="distanceTravel"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Distance travelled
                    </label>
                    <input
                      type="number"
                      name="distanceTravel"
                      id="distanceTravel"
                      onChange={(e) =>
                        setDistanceTravel(parseInt(e.target.value))
                      }
                      value={distanceTravel}
                      placeholder="enter the distance travelled in km"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>

                  {/* fuelConsuption */}
                  <div>
                    <label
                      htmlFor="fuelConsuption"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Fuel Consuption
                    </label>
                    <input
                      type="number"
                      name="fuelConsuption"
                      id="fuelConsuption"
                      onChange={(e) =>
                        setFuelConsuption(parseInt(e.target.value))
                      }
                      value={fuelConsuption}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="fuel consuption in litres"
                      required=""
                    />
                  </div>

                  {/* vehicle class */}
                  <div>
                    <label
                      htmlFor="vehicle"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Vehcile Class
                    </label>
                    <select
                      id="vehicle"
                      className="p-1 pr-4 bg-gray-600  border border-gray-300 text-gray-400  rounded-lg"
                      name="vehicle"
                      onChange={(e) => setVehicle(e.target.value)}
                      value={vehicle}
                    >
                      <option id="compact">Compact</option>
                      <option id="suv">SUV</option>
                      <option id="sedan">Sedan</option>
                      <option id="truck">Truck</option>
                      <option id="van">Van</option>
                      <option id="hatchback">Hatch Back</option>
                    </select>
                  </div>
                  <p className="text-red-500">{error ? error : ""}</p>
                  <div className="flex justify-center">
                    <button
                      onClick={(e) => handleSubmit(e)}
                      className=" text-white bg-blue-600 p-2 rounded-md"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TripAnalysisPage;
