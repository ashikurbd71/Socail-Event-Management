import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Authcontext } from "../Provider/AuthPorvider";
import toast from "react-hot-toast";

const Media = () => {
  const { Googlesigin, Gitsigin } = useContext(Authcontext);

  const handleprovider = (media) => {
    media()
      .then((result) => {
        console.log(result.user);

        return toast.success("Login SuccessFuly");
      })

      .catch((error) => {
        console.log(error);
        return toast.error(error.message);
      });
  };
  return (
    <div>
      <div className="mt- flex justify-center gap-4">
        <button
          onClick={() => handleprovider(Googlesigin)}
          className="btn bg-[#fff] btn-outline "
        >
          <FaGoogle></FaGoogle>
          <span> Google</span>
        </button>

        <button
          onClick={() => handleprovider(Gitsigin)}
          className="btn bg-[#fff] btn-outline "
        >
          <FaGithub></FaGithub>
          <span> Github</span>
        </button>
      </div>
    </div>
  );
};

export default Media;
