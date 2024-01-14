import React, { ReactNode } from "react";

interface ProfileSectionProps {
    sectionTitle: string;
    children: ReactNode;
}

const ProfileSection: React.FC<ProfileSectionProps> = (props) => {

  return (
    <section className="border-b shadow py-3 px-5 mb-2 relative">
      <h2 className="font-medium text-lg">{props.sectionTitle}</h2>
      {props.children}
    </section>
  );
};

export default ProfileSection;
