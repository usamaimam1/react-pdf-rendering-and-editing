import { Disclosure } from "@headlessui/react";

export default function NavBar({
  logo,
  companyName = "PDF Editor App",
}: {
  logo?: string;
  companyName: string;
}) {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src={logo} alt="Your Company" />
              <div className="flex px-6 text-white">{companyName}</div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
