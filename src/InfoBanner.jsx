const InfoBanner = () => {
  return (
    <h2 className="text-center sm:pt-30 sm:pb-1 pt-24  bg-gradient-to-r from-green-700 to-lime-800  text-slate-400 text-xs sm:text-xs ">
      Products from{" "}
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
