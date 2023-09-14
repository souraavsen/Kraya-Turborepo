import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const HandleRedirectToAuth: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("../auth");
  }, []);

  return <div></div>;
};
