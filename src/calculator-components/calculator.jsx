import { useState } from "react";
import "./calculator.css";
import { Button } from "./button-component/button";
import { CalculatorHeader } from "./calculator-header-component/calculatorHeader";
import { CalculatorScreen } from "./calculator-screen-component/calculatorScreen";
export const Calculator = () => {
  const outlineBtnClasses =
    "w-16 h-16 rounded-lg border-2 border-neutral-500 hover:bg-neutral-500/30 max-sm:hover:bg-transparent active:opacity-90 max-sm:active:opacity-100 transition-all";
  const fillBtnClasses =
    "w-16 h-16 rounded-lg bg-neutral-600 hover:bg-neutral-600/80 active:bg-neutral-600/70 transition-all max-sm:hover:bg-neutral-600 max-sm:active:bg-neutral-600";
  const equalsBtnClasses =
    "w-full bg-teal-500 hover:bg-teal-600 transition-all active:opacity-90 max-sm:hover:bg-teal-500 max-sm:active:opacity-100  h-16 rounded-lg";
  const redBtnClasses =
    "w-full h-16 rounded-lg bg-red-500 hover:bg-red-600 transition-all active:opacity-90 max-sm:hover:bg-red-500 max-sm:active:opacity-100";

  const [mainInpValue, setMainInpValue] = useState("");
  const [historyInpValue, setHistoryInpValue] = useState("");

  const takeInp = (e) => {
    if (mainInpValue === "Error") {
      return;
    }
    if (
      (mainInpValue === "" && e.target.innerText === "+") ||
      (mainInpValue === "" && e.target.innerText === "-") ||
      (mainInpValue === "" && e.target.innerText === "*") ||
      (mainInpValue === "" && e.target.innerText === "/") ||
      (mainInpValue === "" && e.target.innerText === ".")
    ) {
      return;
    } else {
      setMainInpValue(mainInpValue + e.target.innerText);
    }
  };

  const calculate = () => {
    if (mainInpValue === "Error" || !mainInpValue) {
      return;
    }
    try {
      let cal = eval(mainInpValue);
      let result = String(cal);
      setMainInpValue(result);
      setHistoryInpValue(mainInpValue);
    } catch (error) {
      setMainInpValue("Error");
    }
  };
  const clearAll = () => {
    setMainInpValue("");
    setHistoryInpValue("");
  };
  const backspace = () => {
    if (mainInpValue === "Error") {
      return;
    }
    setMainInpValue(mainInpValue.slice(0, -1));
  };
  return (
    <div className="main-container mx-auto mt-28 max-sm:my-7 flex flex-col justify-center items-center gap-6 p-6 px-7 rounded-3xl bg-neutral-800">
      <CalculatorHeader />
      <CalculatorScreen
        mainInpValue={mainInpValue}
        historyInpValue={historyInpValue}
      />
      <div className="btns w-full text-white text-3xl flex flex-col justify items-center gap-3">
        <div className="w-full flex justify-between items-center gap-3">
          <Button title={"AC"} func={clearAll} classes={redBtnClasses} />
          <div
            onClick={backspace}
            className={`backspace-btn flex justify-center items-center cursor-pointer ${redBtnClasses} `}
          >
            <img src="/backspace.png" className="w-8 mr-0.5 " alt="" />
          </div>
          <Button title={"/"} func={takeInp} classes={fillBtnClasses} />
        </div>
        <div className="w-full flex justify-between items-center gap-3">
          <Button title={"7"} func={takeInp} classes={outlineBtnClasses} />
          <Button title={"8"} func={takeInp} classes={outlineBtnClasses} />
          <Button title={"9"} func={takeInp} classes={outlineBtnClasses} />
          <Button title={"*"} func={takeInp} classes={fillBtnClasses} />
        </div>
        <div className="w-full flex justify-between items-center gap-3">
          <Button title={"4"} func={takeInp} classes={outlineBtnClasses} />
          <Button title={"5"} func={takeInp} classes={outlineBtnClasses} />
          <Button title={"6"} func={takeInp} classes={outlineBtnClasses} />
          <Button title={"+"} func={takeInp} classes={fillBtnClasses} />
        </div>
        <div className="w-full flex justify-between items-center gap-3">
          <Button title={"1"} func={takeInp} classes={outlineBtnClasses} />
          <Button title={"2"} func={takeInp} classes={outlineBtnClasses} />
          <Button title={"3"} func={takeInp} classes={outlineBtnClasses} />
          <Button title={"-"} func={takeInp} classes={fillBtnClasses} />
        </div>
        <div className="w-full flex justify-between items-center gap-3">
          <Button title={"."} func={takeInp} classes={fillBtnClasses} />
          <Button title={"0"} func={takeInp} classes={outlineBtnClasses} />
          <Button title={"="} func={calculate} classes={equalsBtnClasses} />
        </div>
      </div>
    </div>
  );
};
