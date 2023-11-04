import Link from "next/link";
import React, { Component } from "react";

export default class StickyButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  render() {
    const { is_visible } = this.state;
    return (
      <>
        {is_visible && (
          <section
            className="free-trial-area sticky bg-f4f5fe"
            style={{ background: "transparent" }}
          >
            <div className="container">
              <div className="free-trial-content">
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                  className="d-lg-none"
                >
                  <div>
                    <Link href="/signup">
                      <a className="default-btn">
                        <i className="bx bxs-hot"></i>
                        Try PlugtoChat
                        <span></span>
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/contact">
                      <a className="default-btn">
                        <i className="bx bxs-hot"></i>
                        Talk to An Expert
                        <span></span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
}
