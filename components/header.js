import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Header({ simple, hideAuth }) {
  let title = process.env.APP_NAME;
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              {/* <FontAwesomeIcon
                icon={["fas", "shopping-basket"]}
                className="d-inline-block"
              /> */}
              <span className="ms-2 mb-0 h4 text-primary fw-bold">
                Evidence Protection system
              </span>
            </a>
          </Link>

          <div className="d-flex">
            {hideAuth && (
              <>
                <Link href="/auth/login">
                  <a className="btn btn-outline-primary d-none d-md-block">
                    Login
                  </a>
                </Link>
                <Link href="/auth/sign-up">
                  <a className="btn btn-primary d-none d-md-block ms-2">
                    Sign up
                  </a>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
