import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Hello</h1>
            <h2>This is the homepage</h2>
            <Link to="/test_deploy2/hello">Link</Link>
            <Link to="/hello">Hello Link</Link>
        </div>
    )
}

export default Home