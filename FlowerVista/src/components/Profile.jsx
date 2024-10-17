import React from 'react';
import '../styles/profile.css'; // Assuming you have your custom CSS here

const Profile = () => {
    return (
        <div className="container-fluid profile-h d-flex">
            {/* Sidebar */}
            <div className="sidebar bg-light p-3">
                <div className="mb-3">
                    <h5>Container 1</h5>
                    <p>Content for the first container.</p>
                </div>
                <div>
                    <h5>Container 2</h5>
                    <p>Content for the second container.</p>
                </div>
            </div>

            {/* Display Page */}
            <div className="display-page flex-grow-1 p-3">
                <h2>Profile Display Page</h2>
                <p>This is the content area where profile details will be shown.</p>
            </div>
        </div>
    );
};

export default Profile;
