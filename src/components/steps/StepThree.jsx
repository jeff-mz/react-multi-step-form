import { Link } from "react-router-dom";
function StepThree({ isMonthly, dispatch, state }) {
  return (
    <div>
      <h1 className="font-bold text-blue-marine text-xl">Pick add-ons</h1>
      <p className="text-gray-cool my-4 text-base font-medium">
        Add-ons help your gaming experience.
      </p>

      {/* cards */}
      <div className="bg-alabaster my-4 p-4  border border-gray-light rounded-md">
        <input
          onChange={() => {
            dispatch({ payload: "onlineService" });
          }}
          type="checkbox"
          name="checkbox"
          id="service"
          className="m-4"
        />
        <div className="inline-block">
          <label
            className="text-base text-blue-marine font-bold"
            htmlFor="service"
          >
            Online service
          </label>
          <p className="text-xs text-gray-cool">
            Access to multiplayer games{" "}
            <span className=" text-blue-pastal text-[10px]">
              {isMonthly ? "+$1/mo" : " $10/yr"}
            </span>
          </p>
        </div>
      </div>

      <div className="bg-alabaster my-4 p-4  border border-gray-light rounded-md">
        <input
          onChange={() => {
            dispatch({ payload: "largerStorage" });
          }}
          type="checkbox"
          name="checkbox"
          id="storage"
          className="m-4"
        />
        <div className="inline-block">
          <label
            className="text-base text-blue-marine font-bold"
            htmlFor="storage"
          >
            Larger storage
          </label>
          <p className="text-xs text-gray-cool">
            Extra 1BT of cloud save
            <span className=" text-blue-pastal text-[10px]">
              {isMonthly ? "+$2/mo" : "$20/yr"}
            </span>
          </p>
        </div>
      </div>

      <div className="bg-alabaster my-4 p-4  border border-gray-light rounded-md">
        <input
          onChange={() => {
            dispatch({ payload: "customizableProfile" });
          }}
          type="checkbox"
          name="checkbox"
          id="profile"
          className="m-4"
        />
        <div className="inline-block">
          <label
            className="text-base text-blue-marine font-bold"
            htmlFor="profile"
          >
            Customizable profile
          </label>
          <p className="text-xs text-gray-cool">
            Customize theme on profile
            <span className=" text-blue-pastal text-[10px]">
              {isMonthly ? "+$2/mo" : "$20/yr"}
            </span>
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center my-6">
        <Link
          className=" text-gray-cool px-5 py-3 my-2 inline-block text-md"
          to="/select-plans"
        >
          Go back
        </Link>
        <Link
          className=" bg-blue-marine text-alabaster px-5 py-3 my-2 rounded-md inline-block text-xs"
          to="/summary"
        >
          Next Step
        </Link>
      </div>
    </div>
  );
}

export default StepThree;
