import "./calculator.css";
export const Calculator = () => {
  const outlineBtn =
    "w-16 h-16 rounded-lg border-2 border-neutral-500 hover:bg-neutral-500/30 max-sm:hover:bg-transparent active:opacity-90 max-sm:active:opacity-100 transition-all";
  const fillBtn =
    "w-16 h-16 rounded-lg bg-neutral-600 hover:bg-neutral-600/80 active:bg-neutral-600/70 transition-all max-sm:hover:bg-neutral-600 max-sm:active:bg-neutral-600";
  return (
    <div className="main-container mx-auto my-28 max-sm:my-7 flex flex-col justify-center items-center gap-6 p-6 px-7 rounded-3xl bg-neutral-800">
      <div className="w-full flex justify-between items-start mt-2 mb-0">
        <div className="flex flex-col justify-between gap-2  items-start">
          <img src="/logo.png" className="w-24" alt="img" />
          <h2 className="text-white text-xl font-medium">HS-8LV</h2>
        </div>
        <img src="/solar.jpg" className="w-32 rounded-md" alt="img" />
      </div>
      <div className="inputs rounded-md w-full bg-neutral-300/95 text-black">
        <input
          disabled
          className="w-full px-1 pt-2 bg-transparent text-right text-2xl"
          id="history-inp"
        />
        <input
          disabled
          className="w-full px-1 py-3 bg-transparent text-right text-3xl"
          id="main-inp"
        />
      </div>
      <div className="btns w-full text-white text-3xl flex flex-col justify items-center gap-4">
        <div className="w-full flex justify-between items-center gap-3">
          <button className="w-full h-16 rounded-lg  bg-red-500 hover:bg-red-600 transition-all active:opacity-90 max-sm:hover:bg-red-500 max-sm:active:opacity-100">
            AC
          </button>
          <div className="w-full h-16 flex justify-center items-center rounded-lg  bg-red-500 hover:bg-red-600 transition-all active:opacity-90 max-sm:hover:bg-red-500 cursor-pointer max-sm:active:opacity-100">
            <img src="/backspace.png" className="w-8 mr-0.5 " alt="" />
          </div>
          <button className={`fill-btn ${fillBtn}`}>/</button>
        </div>
        <div className="w-full flex justify-between items-center gap-3">
          <button className={`outline-btn ${outlineBtn}`}>7</button>
          <button className={`outline-btn ${outlineBtn}`}>8</button>
          <button className={`outline-btn ${outlineBtn}`}>9</button>
          <button className={`fill-btn ${fillBtn}`}>*</button>
        </div>
        <div className="w-full flex justify-between items-center gap-3">
          <button className={`outline-btn ${outlineBtn}`}>4</button>
          <button className={`outline-btn ${outlineBtn}`}>5</button>
          <button className={`outline-btn ${outlineBtn}`}>6</button>
          <button className={`fill-btn ${fillBtn}`}>+</button>
        </div>
        <div className="w-full flex justify-between items-center gap-3">
          <button className={`outline-btn ${outlineBtn}`}>1</button>
          <button className={`outline-btn ${outlineBtn}`}>2</button>
          <button className={`outline-btn ${outlineBtn}`}>3</button>
          <button className={`fill-btn ${fillBtn}`}>-</button>
        </div>
        <div className="w-full flex justify-between items-center gap-3">
          <button className={`fill-btn ${fillBtn}`}>.</button>
          <button className={`outline-btn ${outlineBtn}`}>0</button>

          <button className="w-full bg-teal-500 hover:bg-teal-600 transition-all active:opacity-90 max-sm:hover:bg-teal-500 max-sm:active:opacity-100  h-16 rounded-lg">
            =
          </button>
        </div>
      </div>
    </div>
  );
};
