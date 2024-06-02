// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import All from './Components/All';
import Fsd from './Components/Fsd';
import Cybersecurity from './Components/Cybersecurity';
import Datascience from './Components/Datascience';
import Cloudcomputing from './Components/Cloudcomputing';

function App() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand btn btn-link" to="/all">All</Link>
                        <Link className="navbar-brand btn btn-link" to="/fsd">Full Stack Development</Link>
                        <Link className="navbar-brand btn btn-link" to="/cybersecurity">Cybersecurity</Link>
                        <Link className="navbar-brand btn btn-link" to="/datascience">Data Science</Link>
                        <Link className="navbar-brand btn btn-link" to="/cloudcomputing">Cloud Computing</Link>
                    </div>
                </nav>

                <div className="container">
                    <Routes>
                        <Route path="/all" element={<All />} />
                        <Route path="/fsd" element={<Fsd />} />
                        <Route path="/cybersecurity" element={<Cybersecurity />} />
                        <Route path="/datascience" element={<Datascience />} />
                        <Route path="/cloudcomputing" element={<Cloudcomputing />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
