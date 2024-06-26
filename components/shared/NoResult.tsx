import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const NoResult = ({ title, description, link, linkText }: Props) => {
  return (
    <div
      className="flex-center mt-10 w-full flex-col
    "
    >
      <Image
        src="/assets/images/light-illustration.png"
        alt="no result illustration"
        width={270}
        height={200}
        className="block object-contain dark:hidden"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        alt="no result illustration"
        width={270}
        height={200}
        className="hidden object-contain dark:flex"
      />

      <h2 className="h2-bold text-gray600_light900 mt-8">{title}</h2>

      <p className="body-regular text-gray600_light700 my-3.5 max-w-md text-center">
        {description}
      </p>

      <Link href={link} className=" flex justify-end max-sm:w-full">
        <Button className="hover:hover-primary-gradient primary-gradient mt-5 min-h-[46px] rounded-lg px-4 py-3 !text-light-900">
          {linkText}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;
