function Pagination() {
  return (
    <div className="w-full h-[150px] custom-pagination p-8 md:pl-4 flex items-start justify-center md:w-[200px] md:flex-col md:h-[500px] md:rounded-md md:justify-start">
      <div className="my-4 text-left w-[100px]  ">
        <p className="text-base md:text-left border-blue-light text-blue-marine w-[30px] h-[30px] mx-4 rounded-full border text-center flex items-center justify-center ">
          1
        </p>
      </div>

      <div className="my-4 text-left w-[100px] ">
        <p className="text-base md:text-left border-blue-light text-blue-marine w-[30px] h-[30px] mx-4 rounded-full border text-center flex items-center justify-center ">
          2
        </p>
      </div>

      <div className="my-4 text-left w-[100px] ">
        <p className="text-base md:text-left border-blue-light text-blue-marine w-[30px] h-[30px] mx-4 rounded-full border text-center flex items-center justify-center ">
          3
        </p>
      </div>

      <div className="my-4 text-left w-[100px] ">
        <p className="text-base md:text-left border-blue-light text-blue-marine w-[30px] h-[30px] mx-4 rounded-full border text-center flex items-center justify-center ">
          4
        </p>
      </div>
    </div>
  );
}

export default Pagination;
