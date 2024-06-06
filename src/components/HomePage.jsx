import { Routes, Route } from "react-router-dom";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";
import StepFive from "./steps/StepFive";
import Pagination from "./Pagination";
import { useReducer, useState } from "react";
const cardItem = {
  accType: "",
  plan: "",
  planPrice: null,
  onlineService: false,
  largerStorage: false,
  customizableProfile: false,
};
const reducer = (state, action) => {
  switch (action.payload) {
    case "plan":
      return { ...state, plan: action.data.type, planPrice: action.data.price };
    case "accType":
      return { ...state, accType: action.data };
    case "onlineService":
      return { ...state, onlineService: !state.onlineService };
    case "largerStorage":
      return { ...state, largerStorage: !state.largerStorage };
    case "customizableProfile":
      return { ...state, customizableProfile: !state.customizableProfile };
  }
};
function HomePage() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [state, dispatch] = useReducer(reducer, cardItem);

  return (
    <main className="w-full flex flex-col md:flex-row items-center relative md:static md:justify-center md:items-center md:rounded-xl md:w-[80%] md:bg-white md:p-3  lg:w-[720px] lg:p-4">
      <Pagination />

      <div className="w-[90%]  rounded-md bg-white absolute top-[88px] md:static md:w-[70%] md:h-[500px] p-8">
        <Routes>
          <Route index path="/" element={<StepOne />} />
          <Route
            path="/select-plans"
            element={
              <StepTwo
                isMonthly={isMonthly}
                setIsMonthly={setIsMonthly}
                dispatch={dispatch}
                state={state}
              />
            }
          />
          <Route
            path="/add-ons"
            element={
              <StepThree
                isMonthly={isMonthly}
                dispatch={dispatch}
                state={state}
              />
            }
          />
          <Route
            path="/summary"
            element={<StepFour isMonthly={isMonthly} state={state} />}
          />
          <Route index path="/final" element={<StepFive />} />
        </Routes>
      </div>
    </main>
  );
}

export default HomePage;
