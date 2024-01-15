import React, { useEffect, useState } from "react";

import defaultProfileImage from "../../../assets/icons/defaultProfile.svg";
import ProfileSection from "./ui/ProfileSection";
import UserDetails from "./UserDetails";
import UserAddress from "./UserAddress";

const SettingsPage: React.FC = () => {
  const [profilePic, setprofilePic] = useState("");

  useEffect(() => {
    const profilePic = localStorage.getItem("profilePic");
    if (profilePic) {
      setprofilePic(profilePic);
    }
  }, []);

  return (
    <div className="grid grid-cols-12 m-4 mt-0 pt-4 h-full">
      <div className="col-span-3">
        <img
          src={profilePic ? profilePic : defaultProfileImage}
          alt="Profile Image"
          className="h-40 w-40 rounded-full object-cover mx-auto"
        />
        <div className="flex justify-center mt-4">
          <button className="bg-slate-100 text-slate-600 px-4 py-2 rounded-md">
            {profilePic ? "Change Image" : "Upload Image"}
          </button>
        </div>
      </div>

      <div className="col-span-9">
        <ProfileSection sectionTitle="User Details">
          <UserDetails />
        </ProfileSection>

        <ProfileSection sectionTitle="Delivery Address">
          <UserAddress />
        </ProfileSection>

        <ProfileSection sectionTitle="Payment Details">
          <UserAddress />
        </ProfileSection>

      </div>
    </div>
  );
};

export default SettingsPage;
