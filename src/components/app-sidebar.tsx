import { Home, Inbox, BookMarked    } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Main",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Messages",
    url: "/dashboard/messages",
    icon: Inbox,
  },

 
  {
    title: "Blog",
    url: "/dashboard/blog",
    icon: BookMarked ,
  },

  
  {
    title: "Blogs",
    url: "/dashboard/blogs",
    icon: BookMarked ,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>D&R</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="py-2" >
                      <item.icon size={35} />
                      <span className="text-lg">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
