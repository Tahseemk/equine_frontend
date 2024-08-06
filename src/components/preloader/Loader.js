import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const Loading = ({ loading }) => {
  return (
    <div
      className="flex justify-center items-center h-full"
      style={{ display: loading ? "flex" : "none" }}
    >
      <ScaleLoader
        color="#34D399"
        loading={loading}
        height={40}
        width={4}
        radius={5}
        margin={2}
      />
    </div>
  );
};

export default Loading;
