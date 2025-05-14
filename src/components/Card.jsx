import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "motion/react";

// Download Link Component
const DownloadLink = ({ fileUrl }) => (
  <a
    href={fileUrl}
    download
    aria-label="Download File"
    className="flex items-center justify-center w-full h-full p-2 bg-blue-400 hover:bg-blue-900 transition-all rounded-md"
  >
    <MdOutlineFileDownload size="1em" color="#fff" />
  </a>
);

// Preview Link Component
const PreviewLink = ({ fileUrl }) => (
  <a
    href={fileUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Preview File"
    className="flex items-center justify-center w-full h-full p-2 bg-green-300 hover:bg-green-600 transition-all rounded-md"
  >
    <FaRegFileAlt size="1em" color="#fff" />
  </a>
);

export default function Card({ data, reference }) {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      animate={{ rotate: 360 }}
      drag
      whileDrag={{
        backgroundColor: "rgb(255, 255, 255)",
        color: "rgb(0, 0, 0)",
        scale: 1.1,
        transition: { duration: 1 }
      }}
      dragConstraints={reference}
      className="relative flex-shrink-0 w-full sm:w-60 h-auto sm:h-70 bg-zinc-700 rounded-[30px] py-10 px-8 overflow-hidden text-white p-5"
    >
      <FaRegFileAlt className="text-2xl sm:text-3xl" />
      <p className="text-xs sm:text-sm md:text-md mt-5 leading-tight font-semibold">
        {data.desc}x{" "}
      </p>

      <div className="footer absolute bottom-0 rounded-[30px] w-full left-0">
        <div className="flex items-center justify-between mb-3 py-2 px-8">
          <h5 className="text-xs sm:text-sm">{data.fileSize}</h5>
        </div>

     
        <div className="flex gap-4 m-2 justify-center">
        
          {data.fileUrl && !data.close && (
            <PreviewLink fileUrl={data.fileUrl} />
          )}

         
          {data.fileUrl && !data.close && (
            <DownloadLink fileUrl={data.fileUrl} />
          )}
        </div>

        {data.tag.isOpen && (
          <div
            className={`tag ${
              data.tag.tagColor === "blue"
                ? "bg-blue-600"
                : data.tag.tagColor === "green"
                ? "bg-green-600"
                : "bg-yellow-400"
            } w-full p-3 flex items-center justify-center`}
          >
            <h3 className="text-xs sm:text-sm md:text-lg">
              {data.tag.tagTitle}
            </h3>

            {data.progress !== undefined && (
              <div className="w-full m-2 h-1 bg-gray-400 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-all duration-300"
                  style={{
                    width: `${data.progress}%`,
                    backgroundColor:
                      data.progress <= 50
                        ? "red"
                        : data.progress <= 70
                        ? "yellow"
                        : "white",
                  }}
                ></div>
              </div>
            )}
            {data.progress !== undefined && (
              <div className="text-xs sm:text-sm md:text-md text-center mt-1">
                {data.progress}%
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
