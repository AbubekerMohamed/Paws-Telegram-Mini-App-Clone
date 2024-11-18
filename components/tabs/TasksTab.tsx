"use client";

import Image from "next/image";
import { useState } from "react";

// Import your task icons
import TaskWallet from "@/icons/TaskWallet";
import TaskPaws from "@/icons/TaskPaws";
import TaskTwitter from "@/icons/TaskTwitter";
import { taskBlum, taskBoost } from "@/images";
import TaskTelegram from "@/icons/TaskTelegram";
import TaskInvite from "@/icons/TaskInvite";
import PawsLogo from "@/icons/PawsLogo";
// Import other task icons...

type Task = {
  icon: string | React.FC<{ className?: string }>;
  title: string;
  reward: string;
  isComponent?: boolean;
};

const TasksTab = () => {
  const [activeTab, setActiveTab] = useState<"in-game" | "partners">("in-game");

  const tasks: Task[] = [
    {
      icon: PawsLogo,
      title: "Put 🐾 in your name",
      reward: "+ 5,000 FUAS",
    },
    {
      icon: TaskPaws,
      title: "Tweet about FUAS",
      reward: "+ 2,000 FUAS",
    },
    {
      icon: taskBoost.src,
      title: "Boost FUAS channel",
      reward: "+ 2,500 FUAS",
    },
    {
      icon: TaskTelegram,
      title: "Follow channel",
      reward: "+ 1,000 FUAS",
    },
    {
      icon: TaskTwitter,
      title: "Follow twitter",
      reward: "+ 2,000 FUAS",
    },
    {
      icon: TaskInvite,
      title: "Invite 10 friends",
      reward: "+ 5,000 FUAS",
    },
    {
      icon: TaskWallet,
      title: "Connect wallet",
      reward: "+ 3,000 FUAS",
    },
    // Add more tasks as needed
  ];

  const partnerTasks: Task[] = [
    {
      icon: taskBlum.src,
      title: "Join Blum Channel",
      reward: "+ 1,000 FUAS",
    },
  ];

  return (
    <div className={`quests-tab-con px-4 transition-all duration-300`}>
      {/* Header */}
      <div className="pt-8">
        <h1 className="text-3xl font-bold mb-2">TASKS</h1>
        <div>
          <span className="text-xl font-semibold">GET REWARDS </span>
          <span className="text-xl text-gray-500">FOR</span>
        </div>
        <div className="text-xl text-gray-500">COMPLETING QUESTS</div>
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-0 mt-6">
        <button
          onClick={() => setActiveTab("in-game")}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition duration-300 
                        ${
                          activeTab === "in-game"
                            ? "bg-white text-black"
                            : "bg-[#151515] text-white"
                        }`}
        >
          In-game
        </button>
        <button
          onClick={() => setActiveTab("partners")}
          className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition duration-300 
                        ${
                          activeTab === "partners"
                            ? "bg-white text-black"
                            : "bg-[#151515] text-white"
                        }`}
        >
          Partners
          <div className="bg-[#5a5a5a] text-[#fefefe] size-4 rounded-full flex items-center justify-center text-[11px]">
            1
          </div>
        </button>
      </div>

      {/* Tasks List */}
      <div className="mt-4 mb-20 bg-[#151516] rounded-xl">
        {(activeTab === "in-game" ? tasks : partnerTasks).map((task, index) => (
          <div key={index} className="flex items-center">
            <div className="w-[72px] flex justify-center">
              {" "}
              {/* Fixed width container for icons */}
              <div className="w-10 h-10">
                {" "}
                {/* Fixed size container */}
                {typeof task.icon === "string" ? (
                  <Image
                    src={task.icon}
                    alt={task.title}
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <task.icon className="w-full h-full" />
                )}
              </div>
            </div>
            <div
              className={`flex items-center justify-between w-full py-4 pr-4 ${
                index !== 0 && "border-t border-[#222622]"
              }`}
            >
              <div>
                <div className="text-[17px]">{task.title}</div>
                <div className="text-gray-400 text-[14px]">{task.reward}</div>
              </div>
              <button className="h-8 bg-white text-black px-4 rounded-full text-sm font-medium flex items-center">
                Start
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksTab;
