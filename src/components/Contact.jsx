import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import conactImg from "../assets/contact1.png";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, phone, email, subject, message, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [phone]: value,
      [email]: value,
      [subject]: value,
      [message]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const conformation = window.confirm(
      `Are you sure, You want to submit your Date : \nName: ${formData.name} \n Phone: ${formData.phone} \n Email: ${formData.email} \n Subject: ${formData.subject} \n Message: ${formData.message}
      `
    );
    if (conformation) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      console.log("Submission cancelled");
    }

    alert("Your Form Submitted Successfylly");
  };

  return (
    <div
      id="contact"
      className=" lg:container m-auto lg:px-0 px-3 md:pt-24 pt-[75px] border-b md:pb-28 pb-14"
    >
      <div className="features text-center flex flex-col gap-1 md:m-0 mb-4">
        <h3 className="text-[--headingColor] font-[500] uppercase text-lg">
          contact
        </h3>
        <h1 className="color-[--headingColor] flex flex-col md:gap-3 gap-0 lg:text-5xl leading-tight sm:text-3xl text-lg uppercase font-[700] ">
          contact wiht me
        </h1>
      </div>

      <div className="flex md:flex-row flex-col justify-center items-center md:pt-11 mt-4 gap-7 md:max-w-[90%] w-[100%] m-auto ">
        <div className="contactshadow flex flex-col items-start gap-7 formLeft p-6 md:w-[40%] w-full md:h-[90vh] h-[100%]">
          <div>
            <img
              src={conactImg}
              alt="contact img"
              width={"100%"}
              className="rounded"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-[700] md:text-[24px] text-sm m-0">
              Muhammad Qasim
            </h1>
            <h3 className="upperCase capitalize md:text-lg text-sm font-[600]">
              front-End Developer
            </h3>
            <p className=" capitalize md:text-sm text-xs font-[500]">
              I am available for freelance work. Connect <br /> with me via and
              call in to my account.
            </p>
            <p>
              <span className="md:text-lg text-sm font-[500] capitalize">
                phone:{" "}
              </span>
              <a href="#">+92 318 5531368</a>
            </p>
            <p>
              <span className="md:text-lg text-sm font-[500] capitalize">
                Email:{" "}
              </span>
              <a href="#">qasimtech777@gmail.com</a>
            </p>
          </div>

          <div>
            <div className="flex flex-col md:gap-3 gap-2">
              <h3 className="md:font-[500] font-[600] uppercase md:text-sm text-sm">
                find with me :
              </h3>
              <div className="flex md:gap-3 gap-2 justify-center items-center">
                <a
                  href="#"
                  className="homeSocialIcons hover:bg-[red] hover:text-white ease-in-out duration-300"
                >
                  <FaFacebookF className="md:w-full w-3" />
                </a>
                <a
                  href=""
                  className="homeSocialIcons hover:bg-[red] hover:text-white ease-in-out duration-300"
                >
                  <FaInstagram className="md:w-full w-3" />
                </a>
                <a
                  href=""
                  className="homeSocialIcons hover:bg-[red] hover:text-white ease-in-out duration-300"
                >
                  <FaLinkedinIn className="md:w-full w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="contactshadow formLeft p-6 md:w-[60%] w-full md:h-[90vh] h-[100%]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start gap-6"
          >
            <div className="flex md:flex-row flex-col justify-center md:gap-2 gap-6 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="upperCase">your name*</label>
                <input
                  type="text"
                  required
                  name="name"
                  id=""
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="upperCase">your phone</label>
                <input
                  type="text"
                  name="phone"
                  id=""
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="upperCase">Email*</label>
                <input
                  type="text"
                  name="email"
                  id=""
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="upperCase">subject*</label>
                <input
                  type="text"
                  name="subject"
                  id=""
                  onChange={handleChange}
                  value={formData.subject}
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="upperCase">you message</label>
                <textarea
                  cols={10}
                  rows={5}
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                />
              </div>
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="contactBtn w-full cursor-pointer"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
