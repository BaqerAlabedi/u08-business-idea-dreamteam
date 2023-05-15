import React from "react";

interface ProfilbildProps {
  imageUrl: string;
}

const Profilbild: React.FC<ProfilbildProps> = ({ imageUrl }) => {
	return <img src={imageUrl} alt="Profile" className="w-32 h-32 rounded-full" />;
};

export default Profilbild;
