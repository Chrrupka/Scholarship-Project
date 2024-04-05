import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/CommonStyles.css';
import ApplicationDetails from "./components/StudentPanel/ApplicationDetails/ApplicationDetails";
import SignIn from "./components/SignIn/SignIn";
import Criteria from "./components/StudentPanel/Criteria/Criteria";
import News from "./components/StudentPanel/News/News";
import ScholarshipForm from "./components/StudentPanel/ScholarshipForm/ScholarshipForm";
import Status from "./components/StudentPanel/Status/Status";
import Archive from "./components/StudentPanel/Archive/Archive";
import CurrentApplications from "./components/AdminPanel/CurrentApplications/CurrentApplications";
import AdminArchive from "./components/AdminPanel/AdminArchive/AdminArchive";
import AdminApplicationDetails from "./components/AdminPanel/CurrentApplications/ApplicationDetails/AdminApplicationDetails";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignIn/>} />
                <Route path="/criteria" element={<Criteria/>} />
                <Route path="/news" element={<News/>} />
                <Route path="/form" element={<ScholarshipForm/>} />
                <Route path="/status" element={<Status/>} />
                <Route path="/archive" element={<Archive/>} />
                <Route path="/applications" element={<CurrentApplications/>} />
                <Route path="/details/:id" element={<ApplicationDetails />} />
                <Route path="/sign_in" element={<SignIn/>} />
                <Route path="/admin_archive" element={<AdminArchive/>}/>
                <Route path="/admin_applications" element={<CurrentApplications/>}/>
                <Route path="/admin_details/:id" element={<AdminApplicationDetails/>}/>

            </Routes>
        </Router>
    );
}

export default App;
