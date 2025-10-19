import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p className="">
          More ways to shop:{" "}
          <a className="text-primary" href="#">
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a href="#" className="text-primary">
            other retailer
          </a>{" "}
          near you. Or call 0008 0000 4019 66.
        </p>
        <img src="/logo.svg" alt="Apple logo  " />
      </div>
      <hr />
      <div className="links">
        <p>Copyright © 2024 Apple Inc. All rights reserved. </p>
        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
