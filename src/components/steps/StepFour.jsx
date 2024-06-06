import { Link } from "react-router-dom";
function StepFour({ isMonthly, state }) {
  return (
    <div>
      <h1 className="font-bold text-blue-marine text-xl">Finishing up </h1>
      <p className="text-gray-cool my-4 text-base font-medium">
        Double-check everything looks Ok before conforming{" "}
      </p>

      {/* card  */}
      <div className="bg-alabaster my-4 p-4 rounded-md">
        <div className="flex  items-center justify-between font-bold text-blue-marine text-[14px]">
          <span className="">
            {state.plan} ({isMonthly ? "monthly" : "yearly"})
          </span>
          <span className="">
            {isMonthly ? state.planPrice * 10 : state.pricePlan * 12}$/yr
          </span>
        </div>
        <Link
          to="/select-plans"
          className="underline text-sm text-gray-cool block border-b border-b-gray-light pb-4"
        >
          Change
        </Link>
        {/* cards services  */}
        {state.onlineService && (
          <div className="flex  items-center justify-between my-2">
            <span className="text-xs text-gray-cool">onlineService</span>
            <span className=" text-blue-marine text-base">10$/yr</span>
          </div>
        )}
        {state.customizableProfile && (
          <div className="flex  items-center justify-between my-2">
            <span className="text-xs text-gray-cool">customizableProfile</span>
            <span className=" text-blue-marine text-base">10$/yr</span>
          </div>
        )}
        {state.largerStorage && (
          <div className="flex  items-center justify-between my-2">
            <span className="text-xs text-gray-cool">largerStorage</span>
            <span className=" text-blue-marine text-base">11$/yr</span>
          </div>
        )}

        <div className="flex  items-center justify-between text-sm text-blue-marine ">
          <span>Total: </span>
          <span>{state.planPrice}$/yr</span>
        </div>
      </div>

      <div className="flex justify-between items-center my-6">
        <Link
          className=" text-gray-cool px-5 py-3 my-2 inline-block text-md"
          to="/add-ons"
        >
          Go back
        </Link>
        <Link
          className=" bg-blue-marine text-alabaster px-5 py-3 my-2 rounded-md inline-block text-xs"
          to="/final"
        >
          Confirm
        </Link>
      </div>
    </div>
  );
}

export default StepFour;
