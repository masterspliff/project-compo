import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  const navigation = [
    "Home",
    "Products",
    "Services",
    "Company",
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-end p-8 mx-auto lg:justify-end xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-start w-full lg:w-auto xl:w-1/4">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-white dark:text-gray-100">
                    <span>
                      <Image
                        src="/img/logo.ico"
                        alt="N"
                        width={80}
                        height={80}
                        className="w-8"
                      />
                    </span>
                    <span>COMPOSHIELD</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-white focus:text-white focus:bg-white focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open ? (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href="/"
                      className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-white focus:text-white focus:bg-white dark:focus:bg-gray-800"
                    >
                      {item}
                    </Link>
                  ))}
                  <Link
                    href="/"
                    className="w-full px-6 py-2 mt-3 text-center text-white bg-white rounded-md lg:ml-5"
                  >
                    Contact Us
                  </Link>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:w-3/5 xl:w-3/4">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                 href="/"
                 className="inline-block px-4 py-2 text-lg font-normal text-white no-underline hover:bg-gray-500 rounded-md dark:text-gray-200 hover:text-black focus:text-white focus:bg-white focus:outline-none dark:focus:bg-gray-800"
                 >
                {menu}
</Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex">
            <Link
              href="/"
              className="px-6 py-2 text-white bg-emerald-800 rounded-md lg:mr-3"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
