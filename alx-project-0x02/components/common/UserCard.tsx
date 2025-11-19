import { UserProps } from "@/interfaces";
import React from "react";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
    return (
        <div className="border p-4 rounded-md shadow-sm mb-4 bg-white">
            <h6 className="text-xl font-semibold mb-2">{name}</h6>
            <p className="text-gray-700 mb-2">{email}</p>
            <span>
                {`${address.street}, ${address.suite}, ${address.city}, ${address.zipcode} ${address.geo.lat} ${address.geo.lng}`}
            </span>
        </div>
    )
}

export default UserCard;