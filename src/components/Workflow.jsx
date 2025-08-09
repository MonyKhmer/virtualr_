import React from "react";
import codeImg from  "../assets/code.jpg";
import { checklistItems } from "../constants";
import { CheckCircle2 } from "lucide-react";

const WorkFlow = () => {
  return (
    <div className="mt-20">
        <h2 className="text-3xl mt-6 sm:text-5xl lg:text-6xl text-center tracking-wide">
            Accelerate your <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">coding workflow</span>
        </h2>
        <div className="flex flex-wrap justify-center mt-10">
            <div className="w-full p-2 lg:w-1/2">
                <img src={codeImg} alt="Code Image" />
            </div>
            <div className="pt-12 w-full lg:w-1/2">
                {checklistItems.map((item, index) => (
                    <div key={index} className="flex mb-12">
                        <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                            <CheckCircle2 />
                        </div>
                        <div className="">
                            <h5 className="text-xl mt-1 mb-2">{item.title}</h5>
                            <p className="text-md text-neutral-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
};

export default WorkFlow;
