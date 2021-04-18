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
      <div class="top-menu">
        <!--Left Menu Trigger-->
        <div
          class="trigger"
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
        <div class="search-box">
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
          />
        </div>
        <!--User Menu-->
        <div class="user-menu">
          <drop-down align="right" width="48">
            <template #trigger>
              <button
                class="trigger-button"
              >
                <!--Staff info-->
                <div
                  class="staff-info"
                >
                  <span
                      class="staff-name"
                  >
                    Sinan AYDOĞAN
                  </span>
                  <span
                      class="staff-title"
                  >
                    Quality Engineer
                  </span>
                </div>
                <!--Staff picture-->
                <span
                  class="staff-photo"
                >
                  <button
                      class="trigger-button"
                  >
                    <img
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
              <div class="dropdown-header">
                Manage Account
              </div>
              <div class="dropdown-list-container">
                <button
                    class="dropdown-item"
                    v-for="(item,index) in topMenuList"
                    :key="index"
                    :href="item.link">
                  {{ item.label }}
                </button>
              </div>
            </template>
          </drop-down>

          <!--Notification and Logout Buttons-->
          <div class="action-section">
            <!--Notifications-->
            <drop-down align="right" width="48">
              <template #trigger>
                <button class="trigger-button">
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
                  <div class="dropdown-header">
                    Pending Works
                  </div>
                <div class="dropdown-list-container">
                  <!--To-Do-->
                  <button href="test"  class="dropdown-item">2 To-Do's</button>
                  <!--Calibration-->
                  <button href="test" class="dropdown-item">5 Calibration Task's</button>
                  <!--Messages-->
                  <div class="border-t border-gray-100" ></div>
                  <button href="test" class="dropdown-item">9 Messages</button>
                </div>
              </template>
            </drop-down>
            <!--Logout-->
            <form @submit.prevent="logout">
              <button
                class="logout-button"
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
            <h2 class="text-gray-600 ml-0.5 text-4xl font-semibold">
              <!-- <slot name="sub-header"></slot> -->
              Dashboard
            </h2>
          </header>
          <!--Shortcuts-->
          <div class="flex flex-wrap items-start justify-end -mb-3">
            <!-- <slot name="action-buttons"></slot> -->
            <a
              href="#"
              class="inline-flex px-5 py-3 mb-3 text-white bg-green-500 border border-green-600 rounded-md hover:text-green-700 focus:text-green-700 hover:bg-green-100 focus:bg-green-100"
              >+Create New Item</a
            >
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

          <!-- <slot></slot> -->
          <grid-section col="3" gap="4">
            <content-card width="2">
              <template #title>
                
              </template>
              <template #content>
                Whithout Title <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
                posuere, mauris et dapibus tincidunt, turpis risus lacinia dolor,
                sit amet ornare odio orci nec ipsum. Maecenas molestie ornare
                molestie.
              </template>
            </content-card>

            <content-card width="1">
              <template #title>
                With Title
              </template>
              <template #content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
                posuere, mauris et dapibus tincidunt, turpis risus lacinia dolor,
                sit amet ornare odio orci nec ipsum. Maecenas molestie ornare
                molestie.
              </template>
            </content-card>



            <content-card width="1">
              <template #title>
                With Sub Title
              </template>
              <template #subTitle>
                This is a sub title
              </template>
              <template #content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
                posuere, mauris et dapibus tincidunt, turpis risus lacinia dolor,
                sit amet ornare odio orci nec ipsum. Maecenas molestie ornare
                molestie.
              </template>
            </content-card>

            <content-card width="1" line="true">
              <template #title>
                With Line Seperator
              </template>
              <template #content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
                posuere, mauris et dapibus tincidunt, turpis risus lacinia dolor,
                sit amet ornare odio orci nec ipsum. Maecenas molestie ornare
                molestie.
              </template>
            </content-card>

            <content-card width="1" :radius="cardRadius" color="blue" border="true">
              <template #title>
                With corner radius and border
              </template>
              <template #content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
                posuere, mauris et dapibus tincidunt, turpis risus lacinia dolor,
                sit amet ornare odio orci nec ipsum. Maecenas molestie ornare
                molestie.
                <div class="text-2xl font-bold text-center">
                  5 variations
                </div>
                <ul class="flex justify-center gap-2 mt-4">
                  <li class="bg-blue-500 p-2 rounded-full items-center flex justify-center cursor-pointer" @click="cardRadius=0">
                    <div v-if="cardRadius===0" class="flex font-bold m-1 w-10 h-10 justify-center items-center bg-white">0</div>
                  </li>
                  <li class="bg-blue-500 p-2 rounded-full items-center flex justify-center cursor-pointer" @click="cardRadius=1">
                    <div v-if="cardRadius===1" class="flex font-bold m-1 w-10 h-10 justify-center items-center bg-white rounded-sm z-10">1</div>
                  </li>
                  <li class="bg-blue-500 p-2 rounded-full items-center flex justify-center cursor-pointer" @click="cardRadius=2">
                    <div v-if="cardRadius===2" class="flex font-bold m-1 w-10 h-10 justify-center items-center bg-white rounded-md z-10">2</div>
                  </li>
                  <li class="bg-blue-500 p-2 rounded-full items-center flex justify-center cursor-pointer" @click="cardRadius=3">
                    <div v-if="cardRadius===3" class="flex font-bold m-1 w-10 h-10 justify-center items-center bg-white rounded-lg z-10">3</div>
                  </li>
                  <li class="bg-blue-500 p-2 rounded-full items-center flex justify-center cursor-pointer" @click="cardRadius=4">
                    <div v-if="cardRadius===4" class="flex font-bold m-1 w-10 h-10 justify-center items-center bg-white rounded-xl z-10">4</div>
                  </li>
                  <li class="bg-blue-500 p-2 rounded-full items-center flex justify-center cursor-pointer" @click="cardRadius=5">
                    <div v-if="cardRadius===5" class="flex font-bold m-1 w-10 h-10 justify-center items-center bg-white rounded-full z-10">5</div>
                  </li>
                </ul>
              </template>
            </content-card>

            <content-card width="2" :color="cardColor" line="true">
              <template #title>
                Changeable Backgrounds
              </template>
              <template #content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dapibus metus enim. In vestibulum sit amet felis vitae ornare. Sed
                posuere, mauris et dapibus tincidunt, turpis risus lacinia dolor,
                sit amet ornare odio orci nec ipsum. Maecenas molestie ornare
                molestie.
                <div class="text-2xl font-bold text-center">
                  7 colors
                </div>
                  <ul class="flex justify-center gap-2 mt-4">
                    <li class="bg-red-500 p-2 w-5 h-5 rounded-full items-center flex justify-center cursor-pointer" @click="cardColor='red'">
                      <div v-if="cardColor==='red'" class="flex-shrink-0 w-2 h-2 bg-white rounded-full z-10"></div>
                    </li>
                    <li class="bg-blue-500 p-2 w-5 h-5 rounded-full items-center flex justify-center cursor-pointer" @click="cardColor='blue'">
                      <div v-if="cardColor==='blue'" class="flex-shrink-0 w-2 h-2 bg-white rounded-full z-10"></div>
                    </li>
                    <li class="bg-indigo-500 p-2 w-5 h-5 rounded-full items-center flex justify-center cursor-pointer" @click="cardColor='indigo'">
                      <div v-if="cardColor==='indigo'" class="flex-shrink-0 w-2 h-2 bg-white rounded-full z-10"></div>
                    </li>
                    <li class="bg-yellow-500 p-2 w-5 h-5 rounded-full items-center flex justify-center cursor-pointer" @click="cardColor='yellow'">
                      <div v-if="cardColor==='yellow'" class="flex-shrink-0 w-2 h-2 bg-white rounded-full z-10"></div>
                    </li>
                    <li class="bg-black p-2 w-5 h-5 rounded-full items-center flex justify-center cursor-pointer" :class="{'bg-gray-600' : cardColor === 'black'}" @click="cardColor='black'">
                      <div v-if="cardColor==='black'" class="flex-shrink-0 w-2 h-2 bg-white rounded-full z-10"></div>
                    </li>
                    <li class="bg-gray-500 p-2 w-5 h-5 rounded-full items-center flex justify-center cursor-pointer" @click="cardColor='gray'">
                      <div v-if="cardColor==='gray'" class="flex-shrink-0 w-2 h-2 bg-white rounded-full z-10"></div>
                    </li>
                  </ul>
              </template>
            </content-card>
                            {{ windowWidth }}
          </grid-section>
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
import LeftMenu from "@/layouts/LeftMenu";
import LeftMenuItem from "@/layouts/LeftMenuItem";
import DropDown from "@/components/Misc/DropDown";
import GridSection from "@/layouts/GridSection";
import ContentCard from "@/components/Card/ContentCard";
import GitHubIcon from "@/components/icon/GitHub";
import { widthMixin } from "@/mixins/windowSizeMixin";

export default {
  components: {
    LeftMenu,
    LeftMenuItem,
    DropDown,
    GridSection,
    ContentCard,
    GitHubIcon,
  },
  mixins : [widthMixin],
  data() {
    return {
      cardColor: 'red',
      cardRadius : 2,
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
            },
          ],
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
      topMenuList: [
        {
          label: "Profile",
          link: "profile",
        }
      ],
    };
  },
  watch:{
    windowWidth(){
      if(this.windowWidth < 1024) {
        this.showingLeftMenu = false;
      }else{
        this.showingLeftMenu = true;
      }
    }
  }
}
</script>
