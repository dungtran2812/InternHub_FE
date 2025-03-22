import React from 'react'
import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { Button } from 'antd';
const PaymentFailed = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 px-4">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md">
            <AlertCircle className="text-red-500 w-16 h-16 mb-4" />
            <h2 className="text-2xl font-semibold text-red-600">Thanh toán thất bại</h2>
            <p className="text-gray-600 mt-2">Có lỗi xảy ra trong quá trình thanh toán. Vui lòng thử lại.</p>
            <Button 
              className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
              onClick={() => navigate(-1)}
            >
              Quay lại
            </Button>
          </div>
        </div>
      );
}

export default PaymentFailed
