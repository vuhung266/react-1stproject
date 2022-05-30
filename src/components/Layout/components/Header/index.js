import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import AccountItem from "../../../AccountItem";
import { useEffect, useState } from "react";
import { Wrapper as PopperWrapper } from "../../../Popper";
const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 3000);
  }, []);

  return (
    <nav className={cx("navbar navbar-expand-lg navbar-light bg-light")}>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to={"/"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/following"}>
              Following
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/profile"}>
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/search"}>
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/upload"}>
              Upload
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <Tippy
            interactive
            visible={searchResult.length > 0}
            render={(attrs) => (
              <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                <PopperWrapper>
					<h4 className={cx('search-title')}>Accounts</h4>
					<AccountItem></AccountItem>
					<AccountItem></AccountItem>
					<AccountItem></AccountItem>
				</PopperWrapper>
              </div>
            )}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              aria-label="Search"
            />
          </Tippy>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
