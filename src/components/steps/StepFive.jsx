import img from "../../assets/images/icon-thank-you.svg";
function StepFive() {
  return (
    <div>
      <img
        src={img}
        alt="thank you icon "
        className="my-8 mt-12 w-[50px] mx-auto"
      />
      <h1 className="text-center font-bold text-2xl text-blue-marine my-2">
        Thank you!
      </h1>
      <p className="text-center text-gray-cool text-sm p-2 ">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default StepFive;
