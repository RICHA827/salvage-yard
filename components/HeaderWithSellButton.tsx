"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";

const HeaderWithSellButton = () => {
  const pathname = usePathname();

  const showSellMyCarButton = pathname !== "/sell-my-car";

  return <Header showSellMyCarButton={showSellMyCarButton} />;
};

export default HeaderWithSellButton;
