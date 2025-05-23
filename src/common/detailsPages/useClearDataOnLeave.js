import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useClearDataOnLeave = ({ clearAction }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(clearAction());
  }, []);
};