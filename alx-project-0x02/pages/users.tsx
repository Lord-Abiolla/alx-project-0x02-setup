import React, {useEffect, useState} from 'react';
import { UserProps } from '@/interfaces';
import UserCard from '@/components/common/UserCard';
import Header from '@/components/layout/Header';

const User: React.FC = () => {
    const [users, setUsers] = useState<UserProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await res.json();

                const formatted: UserProps[] = data.map((item: any) => ({
                    name: item.name,
                    email: item.email,
                    address: {
                        street: item.address.street,
                        suite: item.address.suite,
                        city: item.address.city,
                        zipcode: item.address.zipcode,
                        geo: {
                            lat: item.address.geo.lat,
                            lng: item.address.geo.lng,
                        }
                    }
                }));

                setUsers(formatted);

            } catch(e) {
                console.error("Error occured", e);
            } finally {
                setLoading(false);
            }
        }

        getUsers();

    }, []);

    return (
        <div className='p-4'>
            <header>
                <Header />
            </header>

            <div className='p-6'>
                <h2>Adorable Users</h2>

                <div className='p-6'>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        users.map((user, index) => (
                            <UserCard
                                key={index}
                                name={user.name}
                                email={user.email}
                                address={user.address}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default User;
