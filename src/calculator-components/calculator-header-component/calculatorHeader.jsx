export const CalculatorHeader = () => {
  return (
    <div className="w-full flex justify-between items-start mt-2 mb-0">
      <div className="brand-and-model flex flex-col justify-between gap-1.5 mt-0.5  items-start">
        <img src="/logo.png" className="w-24 opacity-90" alt="img" />
        <h2 className="text-white text-xl font-medium opacity-80">HS-8LV</h2>
      </div>
      <img src="/solar.jpg" className="w-32 rounded-md" alt="img" />
    </div>
  );
};
