import { useEffect } from "react";

const useTitle = (path) => {
  useEffect(() => {
    document.title = path + " / X";
  }, []);
};

export default useTitle;
