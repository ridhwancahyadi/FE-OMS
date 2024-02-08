import React from "react";
import { Link } from "react-router-dom";
import YoutubeIcon from "../icons/YoutubeIcon";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";

const Footer = ({ fill }) => {
  return (
    <div className="mt-12 flex flex-col w-full items-center gap-[20px]">
      <div className="flex gap-[20px] ">
        <Link>
          <FacebookIcon fill={fill} />
        </Link>
        <Link>
          <InstagramIcon fill={fill} />
        </Link>
        <Link>
          <YoutubeIcon fill={fill} />
        </Link>
      </div>

      <div className="flex flex-col italic text-gray-400">
        <p className="text-xs">© 2024 UKMIK All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
