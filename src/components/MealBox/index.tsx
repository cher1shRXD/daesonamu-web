import axios from "axios";
import { useEffect, useState } from "react";
import * as S from './style';

const MealBox = () => {

  const [meal, setMeal] = useState([]);

  const formatDate = (date: any) => {
    let dateFormat =
      date.getFullYear().toString() +
      (date.getMonth() + 1 < 9
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1
      ).toString() +
      (date.getDate() < 9 ? "0" + date.getDate() : date.getDate()).toString();
    return dateFormat;
  };

  const getMeal = async (date: any) => {
    await axios
      .get(
        `https://open.neis.go.kr/hub/mealServiceDietInfo?ATPT_OFCDC_SC_CODE=D10&SD_SCHUL_CODE=7240454&KEY=6cffaffd21244a9e93f6ae5430070ad0&MLSV_YMD=${date}&TYPE=JSON`
      )
      .then((response) => {
        setMeal(response.data.mealServiceDietInfo[1].row);
        console.log(response);
      })
      .catch(() => {
        setMeal([]);
      });
  };

  useEffect(() => {
    const today = formatDate(new Date());
    getMeal(today);
  }, []);


  return (
    <S.MealBox>
      {meal.map((item:any, idx:number) => (
        <S.Meal key={idx}>{item.DDISH_NM.replaceAll('<br/>','\n')}</S.Meal>
      ))}
    </S.MealBox>
  );
}

export default MealBox