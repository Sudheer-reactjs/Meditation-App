"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import LogoCard from "./LogoCard";
import { NavMain } from "./NavMain";

// Sample data for the sidebar menu
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      title: "Vehicles",
      url: "#",
      items: [
        { title: "Vehicle List", url: "/vehicle-list" },
        { title: "Vehicle Assignments", url: "/vehicle-assignments" },
        { title: "Meter History", url: "/meter-history" },
        { title: "Expense History", url: "/expense-history" },
        { title: "Replacement Analysis", url: "/replacement-analysis" },
        { title: "Telematics Devices", url: "/telematics-devices" },
      ],
    },
    {
      title: "Inspections",
      url: "/inspections",
    },
    {
      title: "Issues",
      url: "/issues",
    },
    
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="bg-[#1B2236] py-6 px-4 !border-0">
      <SidebarHeader className="p-0">
        <LogoCard />
      </SidebarHeader>
      <SidebarContent className="p-0">
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
