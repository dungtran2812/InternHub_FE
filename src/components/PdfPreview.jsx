import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import * as pdfjs from 'pdfjs-dist';

// Đặt workerSrc cho pdfjs-dist
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js`;

const PdfPreview = ({ pdfUrl }) => {
  return (
    <div className="relative w-[350px] h-[500px] rounded-lg overflow-hidden shadow-lg">
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
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
  );
};

export default PdfPreview;
