import { useCookies } from "react-cookie";

import guest from "./../assets/img/guest.png";
import logo from "./../assets/img/logo.png";

const Header = () => {
  const [cookies] = useCookies(["user"]);

  return (
    <header className="my-section animate-top-down text-secondary bg-primary">
      <div className="flex items-center">
        <div className="flex items-center">
          <span>
            <img className="h-12 w-12" src={logo} alt="Logo do sistema" />
          </span>
          <a href="/">
            <h1 className="ml-2 text-3xl font-bold hover:underline hover:text-secondary/80">
              Fradesco
            </h1>
          </a>
        </div>

        <div className="ml-auto">
          <div className="flex items-center">
            <span className="m-1 w-32 hover:underline truncate text-right hover:animate-rotate-z hover:text-secondary/80">
              {cookies.user != null ? (
                <a href="/account/dashboard">
                  {cookies.user.name && `${cookies.user.name}`}
                  {cookies.user.companyName && `${cookies.user.companyName}`}
                </a>
              ) : (
                <a href="/account">Guest User</a>
              )}
            </span>
            <img
              className="m-1 h-10 w-10 rounded-full"
              src={guest}
              alt="Profile image"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
