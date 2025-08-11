import React from "react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <div className="mt-20 border-t border-neutral-700 py-10">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        <div>
          <h3 className="text-md mb-4 font-semibold">Resource</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a className="text-neutral-500 hover:text-white transition-colors duration-200" href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md mb-4 font-semibold">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a className="text-neutral-500 hover:text-white transition-colors duration-200" href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md mb-4 font-semibold">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a className="text-neutral-500 hover:text-white transition-colors duration-200" href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Footer;
