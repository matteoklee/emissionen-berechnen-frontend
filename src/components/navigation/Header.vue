<template>
  <nav class="bg-white border-gray-200 border-b z-20 sticky top-0 w-full">
    <div class="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-3 w-full">
      <a href="/" class="flex items-center space-x-3">
        <Leaf color="#0A5E33" :size="24" class="" />
        <!-- 500:#22c55e 600: #16a34a 700: #15803d -->
        <span class="self-center text-xl font-medium">Emissionen-Berechnen.de</span>
      </a>

      <div class="hidden md:flex items-center space-x-4 ml-auto">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem class="">
              <NavigationMenuLink>
                <router-link to="/">Home</router-link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem class="">
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
            <NavigationMenuItem class="mr-4" v-if="isSignedIn">
              <NavigationMenuLink>
                <router-link to="/calculator">Rechner</router-link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div class="md:hidden">
        <DropdownMenu :modal="false" class="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden">
          <DropdownMenuTrigger>
            <button
                @click="toggleMobileMenu"
                class="p-2 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <Menu :size="24" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent class="w-screen">
            <DropdownMenuItem>
              <router-link to="/">Home</router-link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <router-link to="/about">About</router-link>
            </DropdownMenuItem>
            <DropdownMenuItem v-if="isSignedIn">
              <router-link to="/calculator">Rechner</router-link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <div v-if="isSignedIn">
              <DropdownMenuLabel>
                <span class="block text-sm font-medium">{{ userData.username }}</span>
                <span class="block text-sm text-gray-500 truncate">{{ userData.email }}</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <router-link to="/dashboard">Dashboard</router-link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <router-link to="/profile">Profil</router-link>
              </DropdownMenuItem>
              <DropdownMenuItem v-if="isSignedIn" @click="submitLogout">Abmelden</DropdownMenuItem>
            </div>
            <div v-else>
              <DropdownMenuItem><router-link to="/login">Anmelden</router-link></DropdownMenuItem>
            </div>

          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div class="ml-2 hidden md:flex">
        <DropdownMenu v-if="isSignedIn" :modal="false">
          <DropdownMenuTrigger as-child>
            <Avatar>
              <AvatarImage src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="Avatar" />
              <AvatarFallback>Avatar</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
            <span class="block text-sm text-gray-900 dark:text-white">{{
                userData.username != null ? userData.username : 'username'
              }}</span>
              <span class="block text-sm text-gray-500 truncate dark:text-gray-400">{{
                  userData.email != null ? userData.email : 'email@example.com'
                }}</span>
              <div v-if="userRoles != null">
                <div
                    v-for="role in userRoles"
                    :key="role"
                    class="inline-flex flex-row justify-center items-center mt-2"
                >
                  <Badge variant="primary" class="bg-gray-900 text-white">
                    {{ role != null ? role : 'unknown role' }}</Badge
                  >
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><router-link to="/dashboard">Dashboard</router-link></DropdownMenuItem>
            <DropdownMenuItem><router-link to="/profile">Profil</router-link></DropdownMenuItem>
            <DropdownMenuItem @click="submitLogout">Abmelden</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>

      <div class="hidden md:flex">
        <div class="">
          <div v-if="!isSignedIn" class="inline-flex flex-row space-x-3">
            <router-link to="/login"
              ><Button variant="outlined" class="border">Anmelden</Button></router-link
            >
            <router-link to="/register"
              ><Button variant="" class="">Registrieren</Button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { User, Leaf, Menu } from 'lucide-vue-next';
import DropdownMenu from '@/components/ui/dropdown-menu/DropdownMenu.vue';
import DropdownMenuTrigger from '@/components/ui/dropdown-menu/DropdownMenuTrigger.vue';
import DropdownMenuContent from '@/components/ui/dropdown-menu/DropdownMenuContent.vue';
import DropdownMenuLabel from '@/components/ui/dropdown-menu/DropdownMenuLabel.vue';
import DropdownMenuItem from '@/components/ui/dropdown-menu/DropdownMenuItem.vue';
import NavigationMenu from '@/components/ui/navigation-menu/NavigationMenu.vue';
import NavigationMenuList from '@/components/ui/navigation-menu/NavigationMenuList.vue';
import NavigationMenuItem from '@/components/ui/navigation-menu/NavigationMenuItem.vue';
import NavigationMenuTrigger from '@/components/ui/navigation-menu/NavigationMenuTrigger.vue';
import NavigationMenuContent from '@/components/ui/navigation-menu/NavigationMenuContent.vue';
import NavigationMenuLink from '@/components/ui/navigation-menu/NavigationMenuLink.vue';
import DropdownMenuSeparator from '@/components/ui/dropdown-menu/DropdownMenuSeparator.vue';
import Avatar from '@/components/ui/avatar/Avatar.vue';
import AvatarImage from '@/components/ui/avatar/AvatarImage.vue';
import AvatarFallback from '@/components/ui/avatar/AvatarFallback.vue';
import Button from '@/components/ui/button/Button.vue';
import authService from '@/services/authService.js';
import { eventBus } from '@/services/util/eventBus.js';
import userService from '@/services/userService.js';
import Badge from '@/components/ui/badge/Badge.vue';
import { toast } from 'vue-sonner';
export default {
  name: 'Header',
  components: {
    Badge,
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
    Leaf,
    Menu
  },
  data() {
    return {
      isSignedIn: false,
      userData: [],
      userRoles: [],
      isMobileMenuOpen: false
    };
  },
  async mounted() {
    this.isSignedIn = authService.checkAuthStatus();
    if (this.isSignedIn) {
      //const userData = await userService.getUserInfo();
      //userService.updateUserData(userData);
      this.getUserData();
      this.getRoles();
    }
  },
  created() {
    eventBus.on('auth-changed', (status) => {
      this.isSignedIn = status;
      this.getUserData();
      this.getRoles();
    });
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    submitLogout() {
      authService.logout();
      userService.clearUserData();
      eventBus.emit('auth-changed', false);
      this.$router.push('/');
      toast.info('Abmeldung erfolgreich.', {
        description: 'Du wurdest abgemeldet',
        duration: 5000,
        action: {
          label: 'Ok',
          onClick: () => {
            console.log('close toast');
          }
        }
      });
    },
    getUserData() {
      this.userData = userService.getStoredUserData();
    },
    getRoles() {
      const defaultKeycloakRoles = [
        'offline_access',
        'uma_authorization',
        'default-roles-emissionen-berechnen-realm',
        'account_manage-account-links',
        'account_view-profile',
        'account_manage-account'
      ];

      this.userRoles = userService.getStoredUserRoles();
      if (this.userRoles != null) {
        this.userRoles = this.userRoles
          .map((role) => role.replace(/^ROLE_/, ''))
          .filter((role) => !defaultKeycloakRoles.includes(role.toLowerCase()))
          .map((role) => role.toUpperCase());
      }
    }
  }
};
</script>

<style scoped></style>
