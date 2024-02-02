import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUserById, updateUser } from '../../services/api';

const CategoryEdit = (props) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const { id } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const gotoCreateNew = () => {
        navigate('/admin/users/create-new');
    }
    const gotoUserList = () => {
        navigate('/admin/users');
    }
    const [formData, setFormData] = useState({
        id: '',
        username: '',
        email: '',
        password: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormData({ id: id });
        const result = await updateUser(formData);
        if (result.success === 200) {
            navigate('/admin/users');
        }
        setFormData({ name: '', email: '', password: '' });
    };
    useEffect(() => {
        const fetchUserById = async () => {
            try {
                const user = await getUserById(id);
                setFormData(user);
                setUser(user);
            } catch (error) {
            }
        };
        fetchUserById();
    }, []);
    return (
        <div className='w-full h-auto flex flex-col p-3'>
            {/* <p className='text-sm ml-10'> <span className='text-gray-500'>Trang chủ /</span>&nbsp;Quản trị viên</p> */}
            <div className='flex items-center gap-3 my-5'>
                <button onClick={gotoUserList} className='text-lg font-semibold'>Danh sách</button>
                <button onClick={gotoCreateNew} className='w-24 h-9 p-4 bg-white text-gray-500 border-black rounded flex justify-center items-center hover:shadow-lg'>Tạo mới</button>
            </div>
            <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto overflow-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 font-medium">
                        Username: <span className="text-lg text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 font-medium">
                        Email: <span className="text-lg text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2 font-medium">
                        Password <span className="text-lg text-red-500">*</span>
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block mb-2 font-medium">
                        Phone Number: <span className="text-lg text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    Sign Up
                </button>
            </form>
        </div>

    );
}

export default CategoryEdit