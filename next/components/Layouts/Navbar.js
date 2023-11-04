import React, { Component } from "react";
import Link from "../../utils/ActiveLink";

class Navbar extends Component {
  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <>
        <div id="navbar" className="navbar-area">
          <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img
                      src="/images/logo.png"
                      alt="logo"
                      height="50px"
                      width="175px"
                    />
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link href="/" activeClassName="active">
                        <a className="nav-link">Home</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="#">
                        <a
                          className="nav-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          Use Cases <i className="bx bx-chevron-down"></i>
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/use-cases/market-places"
                            activeClassName="active"
                          >
                            <a className="nav-link">Market Places</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/use-cases/virtual-events"
                            activeClassName="active"
                          >
                            <a className="nav-link">Virtual Events</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/use-cases/health-care"
                            activeClassName="active"
                          >
                            <a className="nav-link">Health Care</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/use-cases/hiring-job-platforms"
                            activeClassName="active"
                          >
                            <a className="nav-link">Hiring & Job Platforms</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/use-cases/bpo-kpo"
                            activeClassName="active"
                          >
                            <a className="nav-link">Bpo & Kpo</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/use-cases/education"
                            activeClassName="active"
                          >
                            <a className="nav-link">Education </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/use-cases/social-communities"
                            activeClassName="active"
                          >
                            <a className="nav-link">Social Communities</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/use-cases/on-demand-services"
                            activeClassName="active"
                          >
                            <a className="nav-link">On Demand-Services</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/use-cases/remote-work"
                            activeClassName="active"
                          >
                            <a className="nav-link">Remote Work</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    
                    <li className="nav-item">
                      <Link href="#">
                        <a
                          className="nav-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          Integrations<i className="bx bx-chevron-down"></i>
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/demo" activeClassName="active">
                            <a className="nav-link">Facebook</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/contact" activeClassName="active">
                            <a className="nav-link">Whatsapp</a>
                          </Link>
                        </li>
                        
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link href="/features" activeClassName="active">
                        <a className="nav-link">Features</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/pricing" activeClassName="active">
                        <a className="nav-link">Pricing</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="#">
                        <a
                          className="nav-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          Demo <i className="bx bx-chevron-down"></i>
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/demo" activeClassName="active">
                            <a className="nav-link">Feature Explorer</a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/contact" activeClassName="active">
                            <a className="nav-link">Request Live Demo</a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link href="/blog" activeClassName="active">
                        <a className="nav-link">Blog</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="others-options ms-auto">
                  <Link href="https://plugtochat.com:5001/auth/login" >
                    <a className="default-btn" >
                      <i className="bx bx-log-in" ></i> Log In <span></span>
                    </a>
                  </Link>

                  {/* <a className="default-btn" href="/signup">
                                            <i className="bx bxs-hot"></i> Try for free <span></span>
                                        </a> */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
