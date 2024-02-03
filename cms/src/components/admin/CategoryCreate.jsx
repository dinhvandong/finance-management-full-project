import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/api';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Select } from 'antd';

const { Option } = Select;
const CategoryCreate = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const gotoCreateNew = () => {
    navigate('/admin/users/create-new');

  }
  const gotoUserList = () => {
    navigate('/admin/users');

  }
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleFileUpload = (file) => {
    // Handle the file upload logic here
    console.log(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const result = await createUser(formData);
    if (result.success === 200) {
      navigate('/admin/users');
    }

    // Reset form data
    setFormData({ name: '', email: '', password: '' });
  };

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    // Fetch the data from an API or any other source
    // For demonstration purposes, using a sample array of options
    const fetchData = async () => {
      // Simulating API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      const data = [
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
        { id: 3, name: 'Option 3' },
      ];
      
      setOptions(data);
    };

    fetchData();
  }, []);

  const handleChangeOption = (value) => {
    // Handle the selected value here
    setSelectedOption(value);
  };


  return (
    <div className='w-full h-auto flex flex-col p-3'>
      {/* <p className='text-sm ml-10'> <span className='text-gray-500'>Trang chủ /</span>&nbsp;Quản trị viên</p> */}
      <div className='flex items-center gap-3 my-5'>
        <button onClick={gotoUserList} className='text-lg font-semibold'>Danh sách</button>
        <button className='w-24 h-9 p-4 bg-white text-gray-500 border-black rounded flex justify-center items-center hover:shadow-lg'>Tạo mới</button>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto overflow-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium">
            Tên danh mục: <span className="text-lg text-red-500">*</span>
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
            Mã danh mục: <span className="text-lg text-red-500">*</span>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-medium">
            Chọn nhóm danh mục: <span className="text-lg text-red-500">*</span>
          </label>
          <Select  className="w-full  h-[40px]" value={selectedOption} onChange={handleChangeOption}>
            {options.map((option) => (
              <Option key={option.id} value={option.id}>
                {option.name}
              </Option>
            ))}
          </Select>

        </div>
        <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-medium">
            Chọn ảnh đại diện: <span className="text-lg text-red-500">*</span>
          </label>
          <Upload
            beforeUpload={() => false} // Prevent automatic file upload
            onChange={(info) => handleFileUpload(info.file)}
          >
            <Button icon={<UploadOutlined />}>Select File</Button>
          </Upload>
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 font-medium">
            Mô tả: <span className="text-lg text-red-500">*</span>
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 font-medium">
            ID của người dùng: <span className="text-lg text-red-500">*</span>
          </label>
          <input
            type="text"
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
          Tạo mới danh mục
        </button>
      </form>
    </div>

  );
}

export default CategoryCreate