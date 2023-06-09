import { Input } from "./input";

export const CalculatorScreen = ({ historyInpValue, mainInpValue }) => {
  const historyInpClasses =
    "w-full px-1 pt-2 bg-transparent text-right font-medium text-2xl";
  const mainInpClasses =
    "w-full px-1 py-3 bg-transparent text-right font-medium text-3xl";
  return (
    <div className="inputs rounded-md w-full bg-neutral-300/95 text-black">
      <Input value={historyInpValue} classes={historyInpClasses} />
      <Input value={mainInpValue} classes={mainInpClasses} />
    </div>
  );
};
