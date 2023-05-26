// Note: This is the 4th gen section of the website
import Container from "./container";

const Nextgen = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            4th Generation Add-On Armor
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-300 lg:text-xl xl:text-2xl dark:text-gray-300">
              Composhield is a leading manufacturer of military defensive armor, providing robust protection for air, naval, and land systems. 
            </p>
            <div className="flex flex-col items-center justify-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a
              href="https://composhield.com/products"
              className="px-8 py-4 text-lg font-medium text-center text-white bg-emerald-800 rounded-md">
              Explore Our Products
            </a>
          </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
          <img
          src="/img/thegif.gif"
          width="1400"
          height="1400"
          className="object-cover"
          alt="Illustration of the 4th generation armor"
          />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Nextgen;
