const InfoBanner = () => {
  return (
    <h2 className="text-center sm:pt-30 sm:pb-5 pt-24 pb-6 font-bold bg-gradient-to-r from-gray-800 to-slate-950  text-slate-400 text-sm sm:text-xl">
      These products come from{" "}
      <a
        href="https://fakestoreapi.com/"
        className=" hover:text-blue-800 underline "
        target="_blank"
        rel="noopener noreferrer"
      >
        Fake Store API
      </a>
    </h2>
  );
};

export default InfoBanner;
