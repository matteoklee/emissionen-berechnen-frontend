<template>
  <nav class="bg-white border-gray-200 border-b fixed z-10 top-0 w-full">
    <div class="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-3">
      <a href="/" class="flex items-center space-x-3">
        <Leaf color="#0A5E33" :size="24" class="" />
        <!-- 500:#22c55e 600: #16a34a 700: #15803d -->
        <span class="self-center text-xl font-medium">Emissionen-Berechnen.de</span>
      </a>

      <div class="ml-auto mr-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem class="mr-4">
              <NavigationMenuLink>
                <router-link to="/">Home</router-link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem class="mr-4">
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul
                  class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]"
                >
                  <li class="row-span-3">
                    <NavigationMenuLink as-child>
                      <a
                        class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="#cta"
                      >
                        <img src="https://www.radix-vue.com/logo.svg" class="h-6 w-6" />
                        <div class="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                        <p class="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>

                  <li>
                    <NavigationMenuLink as-child>
                      <a
                        href="#pricing"
                        class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div class="text-sm font-medium leading-none">Introduction</div>
                        <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Re-usable components built using Radix UI and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink as-child>
                      <a
                        href="#stats"
                        class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div class="text-sm font-medium leading-none">Installation</div>
                        <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          How to install dependencies and structure your app.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink as-child>
                      <a
                        href="#companies"
                        class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div class="text-sm font-medium leading-none">Typography</div>
                        <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Styles for headings, paragraphs, lists...etc
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem class="mr-4">
              <NavigationMenuLink>
                <router-link to="/about">About</router-link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div v-if="isSignedIn">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                alt="Avatar"
              />
              <AvatarFallback>Avatar</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <span class="block text-sm text-gray-900 dark:text-white">Matteo Kleemann</span>
              <span class="block text-sm text-gray-500 truncate dark:text-gray-400"
                >kleemann@emissionen-berechnen.de</span
              >
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Dashboard</DropdownMenuItem>
            <DropdownMenuItem>Einstellungen</DropdownMenuItem>
            <DropdownMenuItem>Abmelden</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div v-else>
        <div class="">
          <div v-if="isAuthenticated" class="inline-flex flex-row space-x-3">
            <Button variant="outlined" class="border" @click="submitLogout">Abmelden</Button>
            <router-link to="/calculator"
              ><Button variant="" class="">Berechnen</Button></router-link
            >
          </div>
          <div v-else class="inline-flex flex-row space-x-3">
            <router-link to="/login"
              ><Button variant="outlined" class="border">Anmelden</Button></router-link
            >
            <router-link to="/calculator"
              ><Button variant="" class="">Jetzt Starten</Button></router-link
            >
          </div>

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { User, Leaf } from 'lucide-vue-next'
import DropdownMenu from '@/components/ui/dropdown-menu/DropdownMenu.vue'
import DropdownMenuTrigger from '@/components/ui/dropdown-menu/DropdownMenuTrigger.vue'
import DropdownMenuContent from '@/components/ui/dropdown-menu/DropdownMenuContent.vue'
import DropdownMenuLabel from '@/components/ui/dropdown-menu/DropdownMenuLabel.vue'
import DropdownMenuItem from '@/components/ui/dropdown-menu/DropdownMenuItem.vue'
import NavigationMenu from '@/components/ui/navigation-menu/NavigationMenu.vue'
import NavigationMenuList from '@/components/ui/navigation-menu/NavigationMenuList.vue'
import NavigationMenuItem from '@/components/ui/navigation-menu/NavigationMenuItem.vue'
import NavigationMenuTrigger from '@/components/ui/navigation-menu/NavigationMenuTrigger.vue'
import NavigationMenuContent from '@/components/ui/navigation-menu/NavigationMenuContent.vue'
import NavigationMenuLink from '@/components/ui/navigation-menu/NavigationMenuLink.vue'
import DropdownMenuSeparator from '@/components/ui/dropdown-menu/DropdownMenuSeparator.vue'
import Avatar from '@/components/ui/avatar/Avatar.vue'
import AvatarImage from '@/components/ui/avatar/AvatarImage.vue'
import AvatarFallback from '@/components/ui/avatar/AvatarFallback.vue'
import Button from '@/components/ui/button/Button.vue'
import authService from "@/services/authService.js";
export default {
  name: 'Header',
  components: {
    Button,
    AvatarFallback,
    AvatarImage,
    Avatar,
    DropdownMenuSeparator,
    NavigationMenuLink,
    NavigationMenuContent,
    NavigationMenuTrigger,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenu,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenu,
    User,
    Leaf
  },
  data() {
    return {
      isSignedIn: false
    }
  },
  methods: {
    submitLogout() {
      authService.logout();
    }
  },
  computed: {
    isAuthenticated() {
      return authService.isAuthenticated();
    }
  }
}
</script>

<style scoped></style>
