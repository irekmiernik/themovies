import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useClearDataOnLeave } from "../useClearDataOnLeave";
import { MainPage } from "../MainPage";


export const DetailsPages = ({ statusSelector, fetchAction, clearAction, children }) => {

  const status = useSelector(statusSelector);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchAction(id));
  }, [dispatch, id, fetchAction]);

  useClearDataOnLeave({ clearAction });
  return (
    <MainPage status={status}>
      {children}
    </MainPage>
  )
}