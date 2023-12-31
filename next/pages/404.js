import React, { Component } from 'react';
import Link from 'next/link';

class ErrorPage extends Component {
    render() {
        return (
            <section className="error-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="error-content">
                                <img src="/images/404.png" alt="error" />

                                <h3>Page Not Found</h3>
                                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>

                                <Link href="/">
                                    <a className="default-btn">
                                        <i className='bx bx-rotate-left'></i>
                                        Return to Home
                                        <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ErrorPage;