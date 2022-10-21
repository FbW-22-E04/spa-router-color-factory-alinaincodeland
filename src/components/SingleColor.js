import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleColor = () => {
  const { color } = useParams();
  const navigate = useNavigate();

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="flex justify-center items-center h-screen"
    >
      <div className="text-[3rem] text-center text-white">
        <p>THIS IS {color.toUpperCase()}</p>
        <p className="my-[10rem]">ISN'T IT BEAUTIFUL</p>
        <p className="underline" onClick={() => navigate("/")}>
          GO BACK!
        </p>
      </div>
    </div>
  );
};

export default SingleColor;
