import React from 'react'
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
const PaymentSuccess = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
          <div className="max-w-md rounded-lg bg-white p-8 shadow-lg text-center">
            <CheckCircle className="mx-auto text-green-500" size={60} />
            <h2 className="mt-4 text-2xl font-semibold text-gray-800">Thanh toán thành công!</h2>
            <p className="mt-2 text-gray-600">Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.</p>
            <Link
              to="/"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
            >
              Quay lại
            </Link>
          </div>
        </div>
      );
}

export default PaymentSuccess
