import { KeenAppsContext } from "@/context/keen.context";
import { useContext } from "react";

const FilterCard = () => {
  const { sortingType, setSortingType } = useContext(KeenAppsContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setSortingType(value);
  };
  return (
    <div className="flex justify-center py-4">
      <select
        value={sortingType || "all"}
        onChange={handleChange}
        className="select select-bordered "
      >
        
        <option value="all">Filter Timeline</option>
        <option value="calls">Calls</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>
    </div>
  );
};

export default FilterCard;
