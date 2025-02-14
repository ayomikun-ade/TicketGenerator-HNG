import { Link, useNavigate } from "react-router";
import Header from "../components/Header";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { toast, ToastContainer } from "react-toastify";
import StepTwo from "../components/AttendeeDetails/StepTwo";

const attendeeSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  specialRequest: z
    .string()
    .max(120, { message: "Special request must be at most 250 characters." })
    .optional(),
  profilePictureUrl: z
    .string()
    .min(1, { message: "Profile picture is required" }),
});

const AttendeeDetails = () => {
  const [name, setName] = useState(() => localStorage.getItem("name") || "");
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
  const [specialRequest, setSpecialRequest] = useState(
    () => localStorage.getItem("specialRequest") || ""
  );
  const [profilePictureUrl, setProfilePictureUrl] = useState(
    () => localStorage.getItem("profilePictureUrl") || ""
  );
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("specialRequest", specialRequest);
    localStorage.setItem("profilePictureUrl", profilePictureUrl);
  }, [name, email, specialRequest, profilePictureUrl]);

  const handleSaveDetails = (e) => {
    e.preventDefault();
    const result = attendeeSchema.safeParse({
      name,
      email,
      specialRequest,
      profilePictureUrl,
    });

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message, { autoClose: 2500, theme: "dark" });
      });
      return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("specialRequest", specialRequest);
    localStorage.setItem("profilePictureUrl", profilePictureUrl);

    toast.success("Details saved successfully!", {
      autoClose: 2000,
      theme: "dark",
    });
    setTimeout(() => {
      navigate("/ticket");
    }, [2000]);
  };

  const handleImageUpload = async (file) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ticket-gen");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dk4gmufzn/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.secure_url) {
        setProfilePictureUrl(data.secure_url);

        toast.success("Image uploaded successfully!", {
          autoClose: 2000,
          theme: "dark",
        });
        setUploading(false);
      } else {
        toast.error("Image upload failed.", { autoClose: 2500, theme: "dark" });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Error uploading image.", { autoClose: 2500, theme: "dark" });
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleImageUpload(files[0]); // Upload the first file
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleManualUpload = async () => {
    if (window.showOpenFilePicker) {
      try {
        const [fileHandle] = await window.showOpenFilePicker({
          types: [
            {
              description: "Images",
              accept: { "image/*": [".png", ".jpg", ".jpeg"] },
            },
          ],
          multiple: false,
        });

        const file = await fileHandle.getFile();
        handleImageUpload(file);
      } catch (error) {
        toast.error("File selection cancelled", { theme: "dark" });
        console.error(error);
      }
    } else {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="relative outline-none font-main mx-5 text-sm md:text-base flex justify-center min-h-screen max-w-[1440px] md:mx-auto md:w-full">
      <ToastContainer />
      <Header />
      <div className="bg-[#041e23] text-white flex flex-col -center items-center gap-8 max-w-[700px] w-full py-8 px-6 md:p-12 mb-10 md:mb-36 mt-36 rounded-[24px] border border-[#0e464f]">
        <StepTwo />
        <section className="md:bg-[#08252b] w-full flex flex-col justify-center items-start gap-8 md:p-6 rounded-[32px] md:border md:border-[#0e464f]">
          <div className="bg-[#052228] w-full flex flex-col justify-between gap-8 text-neutral-50 px-6 py-6 pb-12 rounded-3xl md:w-[556px] border-[1px] border-[#07373f]">
            <p className="font-step text-base leading-6 text-neutral-50">
              Upload Profile Photo
            </p>
            <div>
              <div
                className={`relative h-[200px] text-center w-full md:bg-black md:bg-opacity-20 ${
                  isDragging
                    ? "border-dashed scale-110 border-2 border-[#24a0b5]"
                    : ""
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {profilePictureUrl ? (
                  <div
                    tabIndex={0}
                    aria-label="Upload profile picture. Drag and drop or click to upload."
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleManualUpload();
                      }
                    }}
                    className={`text-base font-normal absolute outline-none right-0 left-0 font-step md:font-main leading-6 w-60 h-60 ${
                      profilePictureUrl ? `overflow-hidden` : `p-6`
                    } flex flex-col gap-4 mx-auto -my-6 justify-center items-center rounded-[32px] focus:border-opacity-90 border-4 border-[#24a0b5] border-opacity-50`}
                  >
                    <img
                      src={profilePictureUrl}
                      alt="Profile"
                      className="h-full w-full object-cover rounded-xl"
                    />
                    {isHovered && (
                      <button
                        disabled={uploading}
                        onClick={handleManualUpload}
                        className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white rounded-xl"
                      >
                        <img
                          src="/cloud-download.svg"
                          alt=""
                          className="mb-2"
                        />
                        <p>
                          {uploading
                            ? "Uploading..."
                            : "Drag & drop or click to upload"}
                        </p>
                      </button>
                    )}
                  </div>
                ) : (
                  <button
                    disabled={uploading}
                    onClick={handleManualUpload}
                    className="bg-[#0e464f] text-base font-normal absolute right-0 left-0 font-step md:font-main leading-6 w-60 h-60 p-6 flex flex-col gap-4 mx-auto -my-6 justify-center items-center rounded-[32px] border-4 border-[#24a0b5] border-opacity-50"
                  >
                    <img src="/cloud-download.svg" alt="" />
                    <p>
                      {uploading
                        ? "Uploading..."
                        : "Drag & drop or click to upload"}
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      className="hidden"
                      onChange={(e) => handleImageUpload(e.target.files[0])}
                    />
                  </button>
                )}
              </div>
            </div>
          </div>
          <hr className="bg-[#08373f] h-1 w-full border-none" />
          <form
            // onSubmit={handleSaveDetails}
            className="w-full font-step flex flex-col gap-8"
          >
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="font-step text-neutral-50 font-normal mb-2"
              >
                Enter your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none outline-none h-12 p-3 rounded-xl border-[1px] border-[#07373f] bg-transparent focus:border-[#24a0b5] caret-[#24a0b5]"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="font-step text-neutral-50 font-normal mb-2"
              >
                Enter your email *
              </label>
              <p className="has-[:focus]:border-[#26899c] outline-none flex items-center gap-2 h-12 p-3 rounded-xl border-[1px] border-[#07373f] bg-transparent focus:border-[#24a0b5]">
                <img src="/envelope.svg" alt="" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="hello@avioflagos.io"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none w-full placeholder:font-light outline-none bg-transparent focus:caret-[#24a0b5]"
                />
              </p>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="special"
                className="font-step text-neutral-50 font-normal mb-2"
              >
                Special request?
              </label>
              <textarea
                name="special"
                id="special"
                placeholder="Textarea"
                rows={3}
                maxLength={120}
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
                className="resize-none outline-none h-[127px] p-3 rounded-xl border-[1px] border-[#07373f] bg-transparent focus:border-[#24a0b5] caret-[#26899c]"
              ></textarea>
            </div>
            <div className="flex flex-col-reverse md:flex-row w-full justify-between gap-6 font-main leading-6">
              <Link
                to="/"
                className="bg-transparent text-[#24a0b5] w-full p-3 text-center rounded-lg border-[1px] border-[#24a0b5] hover:bg-[#24a0b5] hover:text-white"
              >
                Back
              </Link>
              <button
                // type="submit"
                onClick={handleSaveDetails}
                className="bg-[#24a0b5] w-full p-3 text-center rounded-lg border-[1px] border-[#24a0b5] hover:text-[#24a0b5] hover:bg-transparent"
              >
                Get My Free Ticket
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AttendeeDetails;
