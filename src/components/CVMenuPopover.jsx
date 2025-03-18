import * as React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Command, CommandList } from "@/components/ui/command";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveCV } from "@/utils/saveCV";
import PdfPreview from "./PdfPreview";
import { message, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { setResume } from "@/features/user";

const CVMenuPopover = () => {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.rootReducer.user.resume);
  const accessToken = useSelector((state) => state.rootReducer.user.accessToken);
  const [file, setFile] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleUpload = async ({ file, onSuccess, onError }) => {
    try {
        message.loading({ content: "Uploading...", key: "upload" });
        const formData = new FormData();
        formData.append('file', file); // Append the file to the form data
        const { resume } = await saveCV(formData, accessToken); // Call saveCV with formData
        if (resume) {
          dispatch(setResume(resume));
            message.success({ content: "Upload thành công!", key: "upload" });
            onSuccess("ok");
        } else {
            message.error({ content: "Upload thất bại!", key: "upload" });
            onError(new Error("Upload failed"));
        }
    } catch (error) {
        message.error("Đã xảy ra lỗi khi upload!");
        onError(error);
    }
};
const handleRemove = () => {
  setFile(null);
};

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">Tùy Chỉnh CV</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px]">
        <Command>
          <CommandList>
            <p className="text-lg font-semibold text-center text-gray-800">
              Cập Nhật CV
            </p>
            <Upload
              listType="picture-card"
              customRequest={handleUpload}
              fileList={file ? [file] : []}
              onPreview={() => window.open(file?.url, "_blank")}
              onRemove={handleRemove}
              showUploadList={{
                showRemoveIcon: true,
              }}
            >
              {!file && (
                <div className="flex flex-col items-center">
                  <PlusOutlined className="text-xl" />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
            <p className="text-center text-gray-700 mt-4">
              Hoặc Sử Dụng CV Hiện Tại
            </p>
            <div>
              <div className="mt-5 w-[350px]">
                <Link to={resume}>
                  <PdfPreview pdfUrl={resume} />
                </Link>
              </div>
              <button onClick={() => setOpen(false)} className="w-full mt-4 bg-primary text-white rounded-md py-2">
                Sử Dụng CV Hiện Tại
              </button>
            </div>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CVMenuPopover; 