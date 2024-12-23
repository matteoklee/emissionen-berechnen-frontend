<template>
  <Sidebar collapsible="icon">
    <SidebarHeader>Hallo</SidebarHeader>
    <SidebarContent>
      <SidebarGroup />
      <SidebarGroup />
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <User2 /> Username
                <ChevronUp class="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                side="top"
                class="w-full"
            >
              <DropdownMenuItem>
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  </Sidebar>
</template>

<script>
import Sidebar from "@/components/ui/sidebar/Sidebar.vue";
import SidebarHeader from "@/components/ui/sidebar/SidebarHeader.vue";
import SidebarContent from "@/components/ui/sidebar/SidebarContent.vue";
import SidebarGroup from "@/components/ui/sidebar/SidebarGroup.vue";
import SidebarFooter from "@/components/ui/sidebar/SidebarFooter.vue";
import {ChevronUp, User2} from "lucide-vue-next";
import SidebarMenu from "@/components/ui/sidebar/SidebarMenu.vue";
import SidebarMenuItem from "@/components/ui/sidebar/SidebarMenuItem.vue";
import DropdownMenu from "@/components/ui/dropdown-menu/DropdownMenu.vue";
import DropdownMenuTrigger from "@/components/ui/dropdown-menu/DropdownMenuTrigger.vue";
import SidebarMenuButton from "@/components/ui/sidebar/SidebarMenuButton.vue";
import DropdownMenuContent from "@/components/ui/dropdown-menu/DropdownMenuContent.vue";
import DropdownMenuItem from "@/components/ui/dropdown-menu/DropdownMenuItem.vue";

export default {
  name: "DashboardSidebar",
  components: {
    DropdownMenuItem,
    DropdownMenuContent,
    SidebarMenuButton,
    DropdownMenuTrigger,
    DropdownMenu,
    SidebarMenuItem,
    SidebarMenu, SidebarFooter, SidebarGroup, SidebarContent, SidebarHeader, Sidebar, User2, ChevronUp}
}
</script>

<style scoped>

</style>
