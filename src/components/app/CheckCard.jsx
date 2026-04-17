import { KeenAppsContext } from "@/context/keen.context";
import { useContext } from "react";
import { FaPhoneAlt, FaRegCommentDots, FaTrash, FaVideo } from "react-icons/fa";

const CheckCard = () => {
  const { timeline, sortingType } = useContext(KeenAppsContext);

  const filteredWishList = timeline.filter((item) => {
    if (!sortingType || sortingType === "all") return true;
    return item.type.toLowerCase() === sortingType;
  });

  console.log(filteredWishList, "Filtered Timeline");

  return (
    <div className="py-10 flex flex-col gap-5">
      {filteredWishList.length > 0 ? (
        filteredWishList.map((item, index) => {
          const type = item.type?.toLowerCase();

          return (
            <div
              key={index}
              className="bg-white shadow-sm rounded-lg px-5 py-5 border
               border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div
                    className="w-12 h-12 bg-gray-50 rounded-2xl flex
                   items-center justify-center text-2xl"
                  >
                    {type === "video" && <FaVideo className="text-blue-500" />}
                    {type === "calls" && (
                      <FaPhoneAlt className="text-green-500" />
                    )}
                    {type === "text" && (
                      <FaRegCommentDots className="text-orange-500" />
                    )}
                  </div>

                  <div>
                    <h6 className="font-bold text-[#244D3F]">
                      {item.type}: {item.name}
                    </h6>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                </div>

                <button className="btn btn-ghost text-red-400 hover:text-red-600">
                  <FaTrash size={16} />
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-center text-gray-400">No Data Found</p>
      )}
    </div>
  );
};

export default CheckCard;
