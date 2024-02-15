import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { API_URL_IMAGE, createCategory, createUser, getGroups, uploadFile } from '../../services/api';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import noImage from '../../assets/avatar-default-icon.png'

const { Option } = Select;
const NotificationCreate = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(noImage);
  const gotoCategoryList = () => {
    navigate('/admin/notifications');

  }
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    priority: '',
    type: '',
    userID: 0
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleFileUpload = async (file) => {
    // Handle the file upload logic here
    const response = await uploadFile(file);
    const fileResponse = API_URL_IMAGE + response.data;
    setFile(fileResponse);
    console.log("upload-file", response);
    setFormData(prevFormData => ({
      ...prevFormData,
      icon: fileResponse
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const result = await createCategory(selectedOption, formData);
    if (result.success === 200) {
      navigate('/admin/categories');
    }
    // Reset form data
    setFormData({
      title: '',
      content: '',
      priority: '',
      type: '',
      userID: 0
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGroups();
      setOptions(data);
    };
    fetchData();
  }, []);

  const handleChangeOption = (value) => {
    // Handle the selected value here
    console.log("valueOption", value);
    setSelectedOption(value);

    setFormData(prevFormData => ({
      ...prevFormData,
      groupID: value
    }));
  };


  return (
    <div className='w-full h-auto flex flex-col p-3'>
      {/* <p className='text-sm ml-10'> <span className='text-gray-500'>Trang chủ /</span>&nbsp;Quản trị viên</p> */}
      <div className='flex items-center gap-3 my-5'>
        <button onClick={gotoCategoryList} className='text-lg font-semibold'>Danh sách</button>
        <button className='w-24 h-9 p-4 bg-white text-gray-500 border-black rounded flex justify-center items-center hover:shadow-lg'>Tạo mới</button>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto overflow-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 font-medium">
            Tiêu đề: <span className="text-lg text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block mb-2 font-medium">
            Nội dung: <span className="text-lg text-red-500">*</span>
          </label>
          <input
            type="text"
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="priority" className="block mb-2 font-medium">
            Chọn độ ưu tiên: <span className="text-lg text-red-500">*</span>
          </label>
          <Select className="w-full  h-[40px]" value={selectedOption} onChange={handleChangeOption}>
            {options.map((option) => (
              <Option key={option.id} value={option.id}>
                {option.name}
              </Option>
            ))}
          </Select>

        </div>

        <div className="mb-4">
          <label htmlFor="group" className="block mb-2 font-medium">
            Chọn loại thông báo: <span className="text-lg text-red-500">*</span>
          </label>
          <Select className="w-full  h-[40px]" value={selectedOption} onChange={handleChangeOption}>
            {options.map((option) => (
              <Option key={option.id} value={option.id}>
                {option.name}
              </Option>
            ))}
          </Select>

        </div>

        <div className="mb-4">
          <label htmlFor="userID" className="block mb-2 font-medium">
            ID của người nhận: <span className="text-lg text-red-500">*</span>
          </label>
          <input
            type="text"
            id="userID"
            name="userID"
            value={formData.userID}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Tạo mới thông báo
        </button>
      </form>
    </div>

  );
}

export default NotificationCreate