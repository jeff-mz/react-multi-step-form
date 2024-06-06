import { Link } from "react-router-dom";

function StepOne() {
  return (
    <div>
      <h1 className="text-2xl font-[700] mb-3 text-blue-marine  ">
        Personal info
      </h1>
      <p className="text-md text-gray-cool mb-4">
        Please provide your name, email address, and phone number.
      </p>
      <form>
        <div className="my-6">
          <label className="block text-sm text-blue-marine" htmlFor="name">
            Name
          </label>
          <input
            required={true}
            className="p-2 border border-gray-cool rounded-sm"
            type="text"
            placeholder="e.g Stephen King"
            id="name"
          />
        </div>
        <div className="my-6">
          <label className="block text-sm text-blue-marine" htmlFor="email">
            Email Address
          </label>
          <input
            required={true}
            className="p-2 border border-gray-cool rounded-sm"
            type="email"
            placeholder="e.g stephenking@lorem.com"
            id="email"
          />
        </div>
        <div className="my-6">
          <label className="block text-sm text-blue-marine" htmlFor="phone">
            Phone Number
          </label>
          <input
            required={true}
            className="p-2 border border-gray-cool rounded-sm"
            type="number"
            placeholder="e.g +1 234 567 890"
            id="phone"
          />
        </div>
        <button type="submit">
          <Link
            className=" bg-blue-marine text-alabaster px-5 py-3 my-2 rounded-md inline-block text-xs"
            to="/select-plans"
          >
            Next Step
          </Link>
        </button>
      </form>
    </div>
  );
}

export default StepOne;
