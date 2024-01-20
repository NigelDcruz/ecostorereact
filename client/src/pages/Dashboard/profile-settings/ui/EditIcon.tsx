import React from "react";

import editIcon from '../../../../assets/icons/edit.svg'

type EditIconProps = {
  isOpen: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditIcon: React.FC<EditIconProps> = ({ isOpen, setEditMode }) => {
  return (
    <img src={editIcon} alt="Edit Icon" onClick={() => setEditMode(!isOpen)} className="h-7 w-7 cursor-pointer absolute right-4 top-5" />
  );
};

export default EditIcon;
