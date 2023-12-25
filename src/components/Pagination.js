import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-white">
      <div className="flex justify-between w-[670px] py-2 gap-4 items-center ">
        <div className="flex gap-x-2">
          {page > 1 && (
            <button
              className="rounded-md border-2 px-4 py-1 "
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}

          {page < totalPages && (
            <button
              className="rounded-md border-2 px-4 py-1 "
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>
           
            <div className="flex justify-center items-center text-blue-600 font-bold lg:text-sm sm:text-xs">
              <p>
                Designed and Developed by ❤️ Divyam Vijay
              </p>
            </div>

        <p className="text-sm font-bold">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
