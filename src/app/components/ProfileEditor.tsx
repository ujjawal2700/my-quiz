"use client"
import React, { useState, useRef } from 'react';
import { FaUser, FaCamera, FaCheck } from 'react-icons/fa';

const ProfileEditor = () => {
  const [name, setName] = useState('John Doe');
  const [username, setUsername] = useState('johndoe123');
  const [image, setImage] = useState('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80');
  const [nameError, setNameError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [imageError, setImageError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const fileInputRef = useRef(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    if (newName.length > 50) {
      setNameError('Name should not exceed 50 characters');
    } else if (!/^[a-zA-Z\s]*$/.test(newName)) {
      setNameError('Name should only contain alphabets and spaces');
    } else {
      setNameError('');
      setName(newName);
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = e.target.value;
    if (newUsername.length > 20) {
      setUsernameError('Username should not exceed 20 characters');
    } else if (!/^[a-zA-Z0-9_]*$/.test(newUsername)) {
      setUsernameError('Username should only contain alphanumeric characters and underscores');
    } else {
      setUsernameError('');
      setUsername(newUsername);
      // Simulating username availability check
      setTimeout(() => {
        if (newUsername === 'taken') {
          setUsernameError('This username is already taken');
        }
      }, 500);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          if (e.target && typeof e.target.result === 'string') {
            setImage(e.target.result);
          }
          setImageError('');
        };
        reader.readAsDataURL(file);
      } else {
        setImageError('Please upload a valid image file');
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target && typeof e.target.result === 'string') {
          setImage(e.target.result);
        }
        setImageError('');
      };
      reader.readAsDataURL(file);
    } else {
      setImageError('Please drop a valid image file');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nameError && !usernameError && !imageError) {
      setSuccessMessage('Profile updated successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Edit Your Profile</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${nameError ? 'border-red-300' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
                aria-invalid={nameError ? 'true' : 'false'}
                aria-describedby="name-error"
              />
              {nameError && <p id="name-error" className="mt-2 text-sm text-red-600">{nameError}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${usernameError ? 'border-red-300' : 'border-gray-300'} placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                aria-invalid={usernameError ? 'true' : 'false'}
                aria-describedby="username-error"
              />
              {usernameError && <p id="username-error" className="mt-2 text-sm text-red-600">{usernameError}</p>}
            </div>
          </div>

          <div className="mt-4">
          <div
              className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer transition-all hover:border-indigo-500"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
                accept="image/*"
              />
              <div className="space-y-1 text-center">
                <div className="mx-auto h-24 w-24 rounded-full overflow-hidden bg-gray-100">
                  {image ? (
                    <img src={image} alt="Profile" className="h-full w-full object-cover" />
                  ) : (
                    <FaUser className="h-full w-full text-gray-300" />
                  )}
                </div>
                <div className="flex text-sm text-gray-600">
                  <FaCamera className="mr-2" />
                  <span>Upload a photo</span>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
            {imageError && <p className="mt-2 text-sm text-red-600">{imageError}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              Update Profile
            </button>
          </div>
        </form>

        {successMessage && (
          <div className="mt-4 p-2 bg-green-100 text-green-700 rounded-md flex items-center justify-center">
            <FaCheck className="mr-2" />
            {successMessage}
          </div>
        )}

        <div className="mt-6 bg-gray-50 p-4 rounded-md">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Preview</h3>
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-100">
              <img src={image} alt="Profile Preview" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{name}</p>
              <p className="text-sm text-gray-500">@{username}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditor;