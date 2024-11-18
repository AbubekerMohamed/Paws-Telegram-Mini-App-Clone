"use client";

// import Wallet from "@/icons/Wallet";
import PawsLogo from "@/icons/fuas_logo.webp";
// import Community from "@/icons/Community";
// import Star from "@/icons/Star";
// import Image from "next/image";
// import ArrowRight from "@/icons/ArrowRight";
// import { sparkles } from "@/images";

// const HomeTab = () => {
//   return (
//     <div className={`home-tab-con transition-all duration-300`}>
//       {/* Connect Wallet Button */}
//       <button className="w-full flex justify-center mt-8">
//         <div className="bg-[#007aff] text-white px-3 py-0.5 rounded-full flex items-center gap-2">
//           <Wallet className="w-5 h-5" />
//           <span>Connect wallet</span>
//         </div>
//       </button>

//       {/* PAWS Balance */}
//       <div className="flex flex-col items-center mt-8">
//         <Image
//           src={PawsLogo}
//           alt="FUAS Logo"
//           width={200}
//           height={350}
//           className="w-34 h-34 mb-4 shadow-lg rounded-full bg-yellow-200 bg-opacity-25 animate-pulse tranition-all duration-500"
//         />

//         <div className="flex items-center gap-1 text-center">
//           <div className="text-6xl font-bold mb-1">4,646</div>
//           <div className="text-white text-2xl">FUAS</div>
//         </div>
//         <div className="flex items-center gap-1 text-[#868686] rounded-full px-4 py-1.5 mt-2 cursor-pointer">
//           <span>NEWCOMER</span>
//           <Image src={sparkles} alt="sparkles" width={18} height={18} />
//           <span>RANK</span>
//           <ArrowRight className="w-6 h-6" />
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="space-y-3 px-4 mt-8 mb-8">
//         <button className="shine-effect w-full bg-[#ffffff0d] border-[1px] border-[#2d2d2e] rounded-lg px-4 py-2 flex items-center justify-between">
//           <div className="flex items-center gap-3 font-medium">
//             <Community className="w-8 h-8" />
//             <span>Join our community</span>
//           </div>
//           <ArrowRight className="w-6 h-6 text-gray-400" />
//         </button>

//         <button className="w-full bg-[#ffffff0d] border-[1px] border-[#2d2d2e] rounded-lg px-4 py-2 flex items-center justify-between">
//           <div className="flex items-center gap-3 font-medium">
//             <Star className="w-8 h-8" />
//             <span>Check your rewards</span>
//           </div>
//           <ArrowRight className="w-6 h-6 text-gray-400" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HomeTab;
import React, { useState, useEffect } from "react";
import Hamster from "@/icons/Hamster";
import {
  binanceLogo,
  dailyCipher,
  dailyCombo,
  dailyReward,
  dollarCoin,
  hamsterCoin,
  mainCharacter,
} from "@/images";
import Info from "@/icons/Info";
import Settings from "@/icons/Settings";
import Mine from "@/icons/Mine";
import Friends from "@/icons/Friends";
import Coins from "@/icons/Coins";
import Image from "next/image";
import Wallet from "@/icons/Wallet";
import ArrowRight from "@/icons/ArrowRight";
import Star from "@/icons/Star";
import Community from "@/icons/Community";

const App: React.FC = () => {
  const levelNames = [
    "Bronze", // From 0 to 4999 coins
    "Silver", // From 5000 coins to 24,999 coins
    "Gold", // From 25,000 coins to 99,999 coins
    "Platinum", // From 100,000 coins to 999,999 coins
    "Diamond", // From 1,000,000 coins to 2,000,000 coins
    "Epic", // From 2,000,000 coins to 10,000,000 coins
    "Legendary", // From 10,000,000 coins to 50,000,000 coins
    "Master", // From 50,000,000 coins to 100,000,000 coins
    "GrandMaster", // From 100,000,000 coins to 1,000,000,000 coins
    "Lord", // From 1,000,000,000 coins to ∞
  ];

  const levelMinPoints = [
    0, // Bronze
    5000, // Silver
    25000, // Gold
    100000, // Platinum
    1000000, // Diamond
    2000000, // Epic
    10000000, // Legendary
    50000000, // Master
    100000000, // GrandMaster
    1000000000, // Lord
  ];

  const [levelIndex, setLevelIndex] = useState(6);
  const [points, setPoints] = useState(1267);
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>(
    []
  );
  const pointsToAdd = 10;
  const profitPerHour = 16420;

  const [dailyRewardTimeLeft, setDailyRewardTimeLeft] = useState("");
  const [dailyCipherTimeLeft, setDailyCipherTimeLeft] = useState("");
  const [dailyComboTimeLeft, setDailyComboTimeLeft] = useState("");

  const calculateTimeLeft = (targetHour: number) => {
    const now = new Date();
    const target = new Date(now);
    target.setUTCHours(targetHour, 0, 0, 0);

    if (now.getUTCHours() >= targetHour) {
      target.setUTCDate(target.getUTCDate() + 1);
    }

    const diff = target.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    const paddedHours = hours.toString().padStart(2, "0");
    const paddedMinutes = minutes.toString().padStart(2, "0");

    return `${paddedHours}:${paddedMinutes}`;
  };

  useEffect(() => {
    const updateCountdowns = () => {
      setDailyRewardTimeLeft(calculateTimeLeft(0));
      setDailyCipherTimeLeft(calculateTimeLeft(19));
      setDailyComboTimeLeft(calculateTimeLeft(12));
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${
      -y / 10
    }deg) rotateY(${x / 10}deg)`;
    setTimeout(() => {
      card.style.transform = "";
    }, 100);

    setPoints(points + pointsToAdd);
    setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
  };

  const handleAnimationEnd = (id: number) => {
    setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id));
  };

  const calculateProgress = () => {
    if (levelIndex >= levelNames.length - 1) {
      return 100;
    }
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    const progress =
      ((points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
    return Math.min(progress, 100);
  };

  useEffect(() => {
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    if (points >= nextLevelMin && levelIndex < levelNames.length - 1) {
      setLevelIndex(levelIndex + 1);
    } else if (points < currentLevelMin && levelIndex > 0) {
      setLevelIndex(levelIndex - 1);
    }
  }, [points, levelIndex, levelMinPoints, levelNames.length]);

  const formatProfitPerHour = (profit: number) => {
    if (profit >= 1000000000) return `+${(profit / 1000000000).toFixed(2)}B`;
    if (profit >= 1000000) return `+${(profit / 1000000).toFixed(2)}M`;
    if (profit >= 1000) return `+${(profit / 1000).toFixed(2)}K`;
    return `+${profit}`;
  };

  useEffect(() => {
    const pointsPerSecond = Math.floor(profitPerHour / 3600);
    const interval = setInterval(() => {
      setPoints((prevPoints) => prevPoints + pointsPerSecond);
    }, 1000);
    return () => clearInterval(interval);
  }, [profitPerHour]);

  return (
    <div
      className={`home-tab-con transition-all duration-300 bg-black flex justify-center`}
    >
      <div className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl">
        <div className="px-4 z-10">
          <div className="flex items-center space-x-2 pt-4">
            <div className="p-1 rounded-lg bg-[#1d2025]">
              <Hamster size={24} className="text-[#d4d4d4]" />
            </div>
            <div>
              <p className="text-sm">You (CEO)</p>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-4 mt-1">
            <div className="flex items-center w-1/3">
              <div className="w-full">
                <div className="flex justify-between">
                  <p className="text-sm">{levelNames[levelIndex]}</p>
                  <p className="text-sm">
                    {levelIndex + 1}{" "}
                    <span className="text-[#95908a]">
                      / {levelNames.length}
                    </span>
                  </p>
                </div>
                <div className="flex items-center mt-1 border-2 border-[#43433b] rounded-full">
                  <div className="w-full h-2 bg-[#43433b]/[0.6] rounded-full">
                    <div
                      className="progress-gradient h-2 rounded-full"
                      style={{ width: `${calculateProgress()}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center w-2/3 border-2 border-[#43433b] rounded-full px-4 py-[2px] bg-[#43433b]/[0.6] max-w-64">
              <Image
                width={100}
                height={100}
                src={binanceLogo}
                alt="Exchange"
                className="w-8 h-8"
              />
              <div className="h-[32px] w-[2px] bg-[#43433b] mx-2"></div>
              <div className="flex-1 text-center">
                <p className="text-xs text-[#85827d] font-medium">
                  Profit per hour
                </p>
                <div className="flex items-center justify-center space-x-1">
                  <Image
                    width={100}
                    height={100}
                    src={dollarCoin}
                    alt="Dollar Coin"
                    className="w-[18px] h-[18px]"
                  />
                  <p className="text-sm">
                    {formatProfitPerHour(profitPerHour)}
                  </p>
                  <Info size={20} className="text-[#43433b]" />
                </div>
              </div>
              <div className="h-[32px] w-[2px] bg-[#43433b] mx-2"></div>
              <Settings className="text-white" />
            </div>
          </div>
        </div>

        <div className="flex-grow mt-4 bg-[#f3ba2f] rounded-t-[48px] relative top-glow z-0">
          <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#1d2025] rounded-t-[46px]">
            <div className="px-4 mt-6 flex justify-between gap-2">
              <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
                <div className="dot"></div>
                <Image
                  width={100}
                  height={100}
                  src={dailyReward}
                  alt="Daily Reward"
                  className="mx-auto w-12 h-12"
                />
                <p className="text-[10px] text-center text-white mt-1">
                  Daily reward
                </p>
                <p className="text-[10px] font-medium text-center text-gray-400 mt-2">
                  {dailyRewardTimeLeft}
                </p>
              </div>
              <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
                <div className="dot"></div>
                <Image
                  width={100}
                  height={100}
                  src={dailyCipher}
                  alt="Daily Cipher"
                  className="mx-auto w-12 h-12"
                />
                <p className="text-[10px] text-center text-white mt-1">
                  Daily cipher
                </p>
                <p className="text-[10px] font-medium text-center text-gray-400 mt-2">
                  {dailyCipherTimeLeft}
                </p>
              </div>
              <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
                <div className="dot"></div>
                <Image
                  width={100}
                  height={100}
                  src={dailyCombo}
                  alt="Daily Combo"
                  className="mx-auto w-12 h-12"
                />
                <p className="text-[10px] text-center text-white mt-1">
                  Daily combo
                </p>
                <p className="text-[10px] font-medium text-center text-gray-400 mt-2">
                  {dailyComboTimeLeft}
                </p>
              </div>
            </div>

            <div className=" flex-col px-4 mt-4 flex justify-center items-center">
              <p className="text-xs  text-center text-gray-600 mt-2">
                Total Earned FUAS
              </p>
              <div className="px-4 py-2 flex items-center space-x-2">
                <Image
                  width={100}
                  height={100}
                  src={dollarCoin}
                  alt="Dollar Coin"
                  className="w-10 h-10"
                />
                <p className="text-4xl text-white">{points.toLocaleString()}</p>
              </div>
            </div>

            <div className="px-4 mt-4 flex justify-center">
              <div
                className="w-80 h-80 p-4 rounded-full circle-outer"
                onClick={handleCardClick}
              >
                <div className="w-full h-full rounded-full circle-inner">
                  <Image
                    width={100}
                    height={100}
                    src={PawsLogo}
                    alt="Main Character"
                    className="w-full h-full shadow-lg rounded-full bg-yellow-200 bg-opacity-25 animate-pulse tranition-all duration-500"
                  />
                </div>
              </div>
            </div>
            {/* Connect Wallet Button */}
            <button className="w-full flex justify-center mt-8">
              <div className="bg-[#007aff] text-white px-3 py-0.5 rounded-full flex items-center gap-2">
                <Wallet className="w-5 h-5" />
                <span>Connect wallet</span>
              </div>
            </button>
            {/* <div className="flex justify-center flex-col">
              <button className="shine-effect w-full bg-[#ffffff0d] border-[1px] border-[#2d2d2e] rounded-lg mx-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-3 font-medium">
                  <Community className="w-8 h-8" />
                  <span>Join our community</span>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400" />
              </button>

              <button className="w-full bg-[#ffffff0d] border-[1px] border-[#2d2d2e] rounded-lg mx-12 pt-2 flex items-center justify-between">
                <div className="flex items-center gap-3 font-medium">
                  <Star className="w-8 h-8" />
                  <span>Check your rewards</span>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
      {clicks.map((click) => (
        <div
          key={click.id}
          className="absolute text-5xl font-bold opacity-0 text-white pointer-events-none"
          style={{
            top: `${click.y - 42}px`,
            left: `${click.x - 28}px`,
            animation: `float 1s ease-out`,
          }}
          onAnimationEnd={() => handleAnimationEnd(click.id)}
        >
          {pointsToAdd}
        </div>
      ))}
    </div>
  );
};

export default App;
