import React from "react";
import { useDispatch } from "react-redux";
import useShallowEqualSelector from "../../Hooks/shallowEqualSelector";
import './index.css';
import{AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { updateBagsCountAction } from "../../../store/bags/actions";

export default function Header() {
  const { bagsCount } = useShallowEqualSelector(
    ({ bags }) => bags
  );
  const dispatch = useDispatch();
  async function reduceBagsCount() {
    await dispatch(updateBagsCountAction(bagsCount + 1))
  }

  async function increaseBagsCount() {
    if(bagsCount > 0) {
      await dispatch(updateBagsCountAction(bagsCount - 1))
    }
  }
  return (
    <>
      <div className="header-main">
        <div className="body2">Booking Storage at:</div>
        <div className="body bold header-title">Cody's Cookie Store</div>
        <div className="header-number-of-bags">
          <div className="body">Number of bags</div>
          <div className="header-button-grid">
            <div className="header-box" onClick={()=>{increaseBagsCount()}}><AiOutlineMinus /></div>
            <div className="body header-count-box">{bagsCount}</div>
            <div className="header-box" onClick={()=>{reduceBagsCount()}}><AiOutlinePlus /></div>
          </div>
        </div>
      </div>
      <hr className="header-hr"/>
    </>
  );
}
