<template>
  <div class="flex h-screen bg-gray-100">
    <!--Left Menu-->
    <left-menu :showingLeftMenu="showingLeftMenu" class="bg-gray-800">
      <div
        v-for="(item, index) in menuList"
        :key="index"
        class="flex flex-col px-2 py-1"
      >
        <left-menu-item
          :item="item"
          :showingLeftMenu="showingLeftMenu"
        ></left-menu-item>
      </div>
    </left-menu>
    <!--Content-->
    <div class="flex-grow overflow-y-auto text-gray-800">
      <!--Top Menu-->
      <div class="flex items-center h-20 px-6 bg-white sm:px-10">
        <!--Left Menu Trigger-->
        <div
          class="mr-8 cursor-pointer"
          @click="showingLeftMenu = !showingLeftMenu"
        >
          <svg
            class="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <!--Search Box-->
        <div class="relative w-full max-w-md sm:-ml-2">
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            type="text"
            role="search"
            placeholder="Search..."
            class="w-full py-2 pl-10 pr-4 placeholder-gray-400 border-4 border-transparent rounded-lg focus:bg-gray-50"
          />
        </div>
        <!--User Menu-->
        <div class="flex items-center flex-shrink-0 ml-auto">
          <drop-down align="right" width="48">
            <template #trigger>
              <button
                class="relative inline-flex items-center p-2 rounded-lg hover:bg-gray-100 focus:bg-gray-100"
              >
                <!--Staff info-->
                <div
                  class="hidden md:flex md:flex-col md:items-end md:leading-tight"
                >
                  <span class="font-semibold">Sinan AYDOĞAN</span>
                  <span class="text-sm text-gray-600">Quality Engineer</span>
                </div>
                <!--Staff picture-->
                <span
                  class="w-12 h-12 ml-2 mr-2 overflow-hidden bg-gray-100 rounded-full sm:ml-3"
                >
                  <button
                    class="flex text-sm transition duration-150 ease-in-out border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300"
                  >
                    <img
                      class="object-cover w-full h-full rounded-full"
                      src="https://randomuser.me/api/portraits/men/39.jpg"
                      alt="Sinan AYDOĞAN"
                    />
                  </button>
                </span>
                <!--Right arrow-->
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="hidden w-6 h-6 text-gray-300 sm:block"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </template>

            <template #content>
              <!-- Account Management -->
              <div class="block px-4 py-2 text-xs text-gray-400">
                Manage Account
              </div>

              <button href="profil">Profile</button>

              <div class="border-t border-gray-100"></div>
            </template>
          </drop-down>
          <!--Small User's Info-->
          <div class="flex items-center -mr-2 sm:hidden">
            <button
              @click="showingNavigationDropdown = !showingNavigationDropdown"
              class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            >
              <svg
                class="w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  :class="{
                    hidden: showingNavigationDropdown,
                    'inline-flex': !showingNavigationDropdown,
                  }"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  :class="{
                    hidden: !showingNavigationDropdown,
                    'inline-flex': showingNavigationDropdown,
                  }"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <!-- Responsive Navigation Menu -->
          <div
            :class="{
              block: showingNavigationDropdown,
              hidden: !showingNavigationDropdown,
            }"
            class="sm:hidden"
          >
            <div class="pt-2 pb-3 space-y-1">
              <nav-link href="test" active="test"> Dashboard </nav-link>
            </div>

            <!-- Responsive Settings Options -->
            <div class="pt-4 pb-1 border-t border-gray-200">
              <div class="flex items-center px-4">
                <div class="flex-shrink-0 mr-3">
                  <img
                    class="object-cover w-10 h-10 rounded-full"
                    src="https://randomuser.me/api/portraits/men/39.jpg"
                    alt="username"
                  />
                </div>

                <div>
                  <div class="text-base font-medium text-gray-800">
                    Sinan AYDOĞAN
                  </div>
                  <div class="text-sm font-medium text-gray-500">
                    iletisim@sinanaydogan.com.tr
                  </div>
                </div>
              </div>

              <div class="mt-3 space-y-1">
                <nav-link href="profil" active="profil"> Profile </nav-link>
              </div>
            </div>
          </div>
          <!--Notification and Logout Buttons-->
          <div class="flex pl-3 ml-3 -mr-4 space-x-1 border-l">
            <!--Notifications-->
            <drop-down align="right" width="48">
              <template #trigger>
                <button
                  class="relative p-2 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600"
                >
                  <span class="sr-only">Notifications</span>
                  <span
                    class="absolute top-0 right-0 w-2 h-2 mt-1 mr-2 bg-red-500 rounded-full"
                  ></span>
                  <span
                    class="absolute top-0 right-0 w-2 h-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"
                  ></span>
                  <svg
                    aria-hidden="true"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
              </template>
              <template #content>
                <!--Pending Works-->
                <div class="block px-4 py-2 text-xs text-gray-400">
                  Pending works
                </div>
                <!--To-Do-->
                <button href="test">2 To-Do's</button>
                <!--Calibration-->
                <button href="test">5 Calibration Task's</button>
                <!--Messages-->
                <div class="border-t border-gray-100"></div>
                <button href="test">9 Messages</button>
              </template>
            </drop-down>
            <!--Logout-->
            <form @submit.prevent="logout">
              <button
                class="relative flex flex-row p-2 text-white bg-red-500 rounded-full hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600"
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 20 24"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      <!--Content-->
      <div class="p-6 space-y-6 sm:p-10">
        <!--Content Header-->
        <div
          class="flex flex-col justify-between space-y-6 md:space-y-0 md:flex-row"
        >
          <!--Page Header-->
          <header class="mr-6">
            <!--Page Heading-->
            <h1 class="mb-2 text-4xl font-semibold">
              <slot name="header"></slot>
            </h1>
            <!--Page subheading-->
            <h2 class="text-gray-600 ml-0.5">
              <slot name="sub-header"></slot>
            </h2>
          </header>
          <!--Shortcuts-->
          <div class="flex flex-wrap items-start justify-end -mb-3">
            <slot name="action-buttons"></slot>
          </div>
        </div>
        <!--Content-->
        <main class="flex flex-col">
          <!--        <div v-if="$page.props.flash.message" class="alert">
            <Message
              :severity="$page.props.flash.message.type"
              :life="10000"
              :sticky="false"
              >{{ $page.props.flash.message.content }}</Message
            >
          </div> -->

          <slot></slot>
        </main>
        <section
          class="flex items-center justify-end space-x-1 font-semibold text-right text-gray-500"
        >
          <a
            href="https://laraquality.dev/"
            class="text-blue-600 hover:underline"
            >TailAdmin v-beta.0.0.1</a
          >
          <span>by</span>
          <a
            href="https://sinanaydogan.com.tr"
            class="text-teal-400 hover:underline"
            >Sinan AYDOĞAN</a
          >
          <a
            href="https://github.com/sinan-aydogan/LaraQuality-i"
            class="flex items-center text-blue-600 hover:underline"
            target="_blank"
            ><git-hub-icon class="w-5 h-5"
          /></a>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from "./LeftMenu";
import LeftMenuItem from "./LeftMenuItem";
import DropDown from "../components/Misc/DropDown";
import NavLink from "../components/Misc/NavLink";
import GitHubIcon from "../components/icon/GitHub";

export default {
  components: {
    LeftMenu,
    LeftMenuItem,
    DropDown,
    NavLink,
    GitHubIcon,
  },
  data() {
    return {
      showingLeftMenu: true,
      showingNavigationDropdown: false,
      menuList: [
        {
          label: "Apps",
          icon: "rocket",
          link: "apps",
          linkType: "route",
          type: "standard",
          activeKey: ["apps"],
          items: [
            {
              label: "To-Do List",
              icon: "tasks",
              link: "todo",
              linkType: "route",
              type: "standard",
              activeKey: ["todo"],
            },
            {
              label: "Mail Box",
              icon: "envelope",
              link: "todo",
              linkType: "route",
              type: "standard",
              activeKey: ["todo"],
            },
            {
              label: "Calendar",
              icon: "calendar-alt",
              link: "todo",
              linkType: "route",
              type: "standard",
              activeKey: ["todo"],
            },
          ],
        },
        {
          label: "Sections",
          icon: "window-restore",
          link: "sections",
          linkType: "route",
          type: "standard",
          activeKey: ["sections"],
           items: [
            {
              label: "Content Boxes",
              icon: "window-maximize",
              link: "content-boxes",
              linkType: "route",
              type: "standard",
              activeKey: ["content-boxes"],
            },
            {
              label: "Statistics Widgets",
              icon: "chart-bar",
              link: "statistic-widgets",
              linkType: "route",
              type: "standard",
              activeKey: ["statistic-widgets"],
            }]
        },
        {
          label: "Form Elements",
          icon: "edit",
          link: "forms",
          linkType: "route",
          type: "standard",
          activeKey: ["forms"],
        },
      ],
    };
  },
};
</script>