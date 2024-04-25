import React from 'react'

const Alert = ({ message }) => {
    return (
        <div className="bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md  relative  mt-[-12rem]" role="alert" >
        <div className="flex">
          <div className="py-1"><svg className="fill-current h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1.414-3.414A6 6 0 1 0 8 4.828V10a1 1 0 0 0 2 0V4.828l2.207 2.207a1 1 0 1 0 1.414-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L10 4.828z" clipRule="evenodd"/></svg></div>
          <div>
            <p className="font-bold">Alert</p>
            <p className="text-sm">{message}</p>
          </div>
        </div>
      </div>
    );
  };

export default Alert