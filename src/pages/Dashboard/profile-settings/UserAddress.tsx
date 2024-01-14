import React, { useState } from "react";
import EditIcon from "./ui/EditIcon";

const UserAddress: React.FC = () => {
    const [editMode, setEditMode] = useState(false);
    return (
      <div>
        <EditIcon isOpen={editMode} setEditMode={setEditMode} />
  
        {editMode ? (
          <form className="grid grid-cols-12 gap-4 mt-4">
            <div className="col-span-6">
              <label className="font-medium text-md" htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                className="border border-slate-100 rounded-md py-2 px-3 w-full"
              />
            </div>
            <div className="col-span-6">
              <label className="font-medium text-md" htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="border border-slate-100 rounded-md py-2 px-3 w-full"
              />
            </div>
            <div className="col-span-6">
              <label className="font-medium text-md" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="border border-slate-100 rounded-md py-2 px-3 w-full"
              />
            </div>
            <div className="col-span-6">
              <label className="font-medium text-md" htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                className="border border-slate-100 rounded-md py-2 px-3 w-full"
              />
            </div>
            <div className="col-span-12">
              <button className="bg-slate-100 text-slate-600 px-4 py-2 rounded-md">
                Update Profile
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="grid grid-cols-2 mt-4">
              <div className="col-span-1">
                <h4 className="font-medium text-md">First Name</h4>
                <p>User 1</p>
  
                <h4 className="font-medium text-md mt-4">Email</h4>
                <p>username@email.com</p>
              </div>
              <div className="col-span-1">
                <h4 className="font-medium text-md">Last Name</h4>
                <p>User 1</p>
  
                <h4 className="font-medium text-md mt-4">Phone Number</h4>
                <p>+9423810234</p>
              </div>
            </div>
          </>
        )}
      </div>
    );
};

export default UserAddress;
