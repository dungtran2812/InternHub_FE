import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

// Chỉ import GlobalWorkerOptions thay vì toàn bộ pdfjs-dist
import { GlobalWorkerOptions } from 'pdfjs-dist';

// Đặt workerSrc cho pdfjs-dist (phiên bản 3.11.174)
GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

const PdfPreview = ({ pdfUrl }) => {
  return (
    pdfUrl ? <div className="relative w-[350px] h-[500px] rounded-lg overflow-hidden shadow-lg">
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
        <Viewer fileUrl={pdfUrl} />
      </Worker>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80"></div>

      {/* Nội dung */}
      <div className="absolute bottom-0 left-0 p-4 text-white w-full">
        <p className="text-sm">Cập nhật lần cuối 07-03-2025 19:30 PM</p>

        {/* Nút Chia sẻ & Tải xuống */}
        <div className="flex gap-2 mt-2">
          <button className="bg-gray-700 px-3 py-1 rounded flex items-center">
            <span className="mr-1">📤</span> Chia sẻ
          </button>
          <button className="bg-gray-700 px-3 py-1 rounded flex items-center">
            <span className="mr-1">⬇️</span> <a href={pdfUrl} download>Tải xuống</a>
          </button>
        </div>
      </div>
    </div>
      :
      <div className="flex items-center justify-center h-full text-gray-500">
        <p>Không có tài liệu PDF để hiển thị.</p>
      </div>
  );
};

export default PdfPreview;
