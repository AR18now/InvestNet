import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import Interests from "../components/Interests/Interests";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Sidebar />
      <div className="main-content">
        <Header />
        <ProfileCard />
        <Interests />
      </div>
    </div>
  );
};

export default ProfilePage;
