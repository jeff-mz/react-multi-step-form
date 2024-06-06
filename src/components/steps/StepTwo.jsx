import icon1 from "../../assets/images/icon-arcade.svg";
import icon2 from "../../assets/images/icon-advanced.svg";
import icon3 from "../../assets/images/icon-pro.svg";
import { Link } from "react-router-dom";

function StepTwo({ isMonthly, setIsMonthly, dispatch, state }) {
  return (
    <div>
      <h1 className="font-bold text-2xl text-blue-marine">Select your plan </h1>
      <p className=" text-gray-cool my-4">
        You have the option of monthly or yearly billing
      </p>

      {/* cards  */}
      <div
        onClick={() => {
          dispatch({ payload: "plan", data: { type: "Arcade", price: 9 } });
        }}
        className="flex  p-4 bg-alabaster my-2 hover:border hover:border-blue-marine rounded-md"
      >
        <img src={icon1} alt="icon" />
        <div className="ml-4">
          <p className=" text-blue-marine font-bold">Arcade</p>
          <p className="text-gray-cool text-sm">$9/mo</p>
          <p
            className={`text-blue-marine  text-xs ${
              isMonthly ? "hidden" : "block"
            }`}
          >
            2 months free
          </p>
        </div>
      </div>

      <div
        onClick={() => {
          dispatch({ payload: "plan", data: { type: "Advanced", price: 12 } });
        }}
        className="flex  p-4 bg-alabaster my-2 hover:border hover:border-blue-marine rounded-md"
      >
        <img src={icon2} alt="icon" />
        <div className="ml-4">
          <p className=" text-blue-marine font-bold">Advanced</p>
          <p className="text-gray-cool text-sm">$12/mo</p>
          <p
            className={`text-blue-marine  text-xs ${
              isMonthly ? "hidden" : "block"
            }`}
          >
            2 months free
          </p>
        </div>
      </div>

      <div
        onClick={() => {
          dispatch({ payload: "plan", data: { type: "Pro", price: 15 } });
        }}
        className="flex  p-4 bg-alabaster my-2 hover:border hover:border-blue-marine rounded-md"
      >
        <img src={icon3} alt="icon" />
        <div className="ml-4">
          <p className=" text-blue-marine font-bold">Pro</p>
          <p className="text-gray-cool text-sm">$15/mo</p>
          <p
            className={`text-blue-marine  text-xs ${
              isMonthly ? "hidden" : "block"
            }`}
          >
            2 months free
          </p>
        </div>
      </div>

      {/* account type Button  */}
      <div className="bg-magnolia p-4 flex justify-evenly items-center">
        <span
          className={`${isMonthly ? "text-blue-marine" : "text-gray-cool"}`}
        >
          Monthly
        </span>
        <button
          onClick={() => {
            dispatch({
              payload: "accType",
              data: `${isMonthly ? "monthly" : "yearly"}`,
            });
            setIsMonthly((prevState) => {
              return (prevState = !isMonthly);
            });
          }}
          className="flex items-center  bg-blue-marine w-[55px] relative h-[26px] rounded-full"
        >
          <div
            style={{
              transition: "all 0.5s ease",
              position: "absolute",
              left: `${isMonthly ? "5px" : "25px"}`,
            }}
            className="w-[20px] h-[20px] rounded-full bg-white "
          ></div>
        </button>
        <span
          className={`${!isMonthly ? "text-blue-marine" : "text-gray-cool"}`}
        >
          Yearly
        </span>
      </div>

      <div className="flex justify-between items-center my-6">
        <Link
          className=" text-gray-cool px-5 py-3 my-2 inline-block text-md"
          to="/"
        >
          Go back
        </Link>
        <Link
          className=" bg-blue-marine text-alabaster px-5 py-3 my-2 rounded-md inline-block text-xs"
          to="/add-ons"
        >
          Next Step
        </Link>
      </div>
    </div>
  );
}

export default StepTwo;
