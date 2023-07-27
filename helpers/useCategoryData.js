import { useEffect, useState } from 'react';

const useCategoryData = (data, gamePcs, workPcs, workSta, monitor) => {
  const [catData, setCatData] = useState([]);
  const [gamePc, setGamePc] = useState([]);
  const [workPc, setWorkPc] = useState([]);
  const [workStat, setWorkStat] = useState({});
  const [monitors, setMonitors] = useState([]);

  useEffect(() => {
    const tmpData = data?.map((item) => item);
    setCatData(tmpData);
    setGamePc(gamePcs);
    console.log("gamepc:", gamePc);
    setWorkPc(workPcs);
    console.log("workPc:", workPc);
    setWorkStat(workSta);
    console.log("workStat:", workStat);
    setMonitors(monitor);
    console.log("monitors:", monitors);
  }, [data, gamePcs, workPcs, workSta, monitor]);

  // You can return any values that you might need in your Categories component
  return {
    catData,
    gamePc,
    workPc,
    workStat,
    monitors,
  };
};

export default useCategoryData;