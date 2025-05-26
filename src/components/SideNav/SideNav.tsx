import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/shadcn-ui/sidebar";
import { SECTIONS } from "@/constants/SectionNavigationLinks";

const SideNav = () => {
  const { toggleSidebar } = useSidebar();

  const menuItemClickHandler = () => {
    toggleSidebar();
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            Curriculum Vitae - Vlad Mihai Vasile
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {SECTIONS.map((item) => (
                <>
                  {item.navigatable && (
                    <SidebarMenuItem key={item.navigatable.title}>
                      <SidebarMenuButton asChild>
                        <a
                          href={item.navigatable.url}
                          onClick={menuItemClickHandler}
                        >
                          <item.navigatable.icon />
                          <span>{item.navigatable.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )}
                </>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SideNav;
