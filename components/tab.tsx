"use client";

import { useState, useTransition } from "react";

import routerStore from "@/store";
import { tabs } from "@/constants/member-info";
import TabButton from "@/components/tab-button";

const Tab = () => {
  const { setRouter } = routerStore();
  const [tab, setTab] = useState(tabs[0].name);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (name: string, href: string) => {
    startTransition(() => {
      setRouter(href);
      setTab(name);
    });
  };

  return (
    <div className="pt-12 flex items-center justify-evenly ">
      {tabs.map((item) => (
        <TabButton
          key={item.id}
          selectTab={() => handleTabChange(item.name, item.href)}
          active={item.name === tab}
        >
          {item.name}
        </TabButton>
      ))}
    </div>
  );
};

export default Tab;
