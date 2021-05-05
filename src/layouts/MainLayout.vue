<template>
  <div class="flex h-screen bg-gray-100">
    <!--Left Area / Left Menu -->
    <left-menu
        :showingLeftMenu="showingLeftMenu"
        v-if="hiddenLeftMenu === 'false'"
        class="bg-gray-800">
      <div
          v-for="(item, index) in menuList"
          :key="index"
          class="flex flex-col px-2 py-1"
      >
        <left-menu-item
            :item="item"
            :showingLeftMenu="showingLeftMenu"
            @showLeftMenuEmit="showingLeftMenu = 'true'"
        ></left-menu-item>
      </div>
    </left-menu>
    <!--Main Area-->
    <div class="main-area">
      <!--Top Menu-->
      <div class="top-menu">
        <!--Left Menu Trigger-->
        <div
          class="trigger"
          @click="leftMenuTrigger"
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
      <div class="content-container">
        <!--Content Header-->
        <div
          class="container-header"
        >
          <!--Page Header-->
          <header class="page-header">
            <!--Page Title-->
            <h1 class="page-title">
              <slot name="header"></slot>
            </h1>
            <!--Page SubTitle-->
            <h2 class="page-subtitle">
               <slot name="subHeader"></slot>
            </h2>
          </header>
          <!--Page Action Buttons-->
          <div v-if="actionButtons === true" class="page-action-buttons">
            <!-- <slot name="action-buttons"></slot> -->
            <Button color="green" size="full" radius="3" link="sdsds">+Create New Item</Button>
            <Button color="red" size="full" radius="3">Delete</Button>
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
        <footer
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
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from "@/layouts/LeftMenu";
import LeftMenuItem from "@/layouts/LeftMenuItem";
import DropDown from "@/components/Misc/DropDown";
import Button from "@/components/Button/Button";
import GitHubIcon from "@/components/icon/GitHub";
import { windowSize } from "@/mixins/windowSizeMixin";
import {leftMenuItems} from "@/mixins/leftMenuItems";

export default {
  props : {
    actionButtons : {
      require:false,
      default:false
    }
  },
  components: {
    LeftMenu,
    LeftMenuItem,
    DropDown,
    Button,
    GitHubIcon,
  },
  mixins : [windowSize,leftMenuItems],
  data() {
    return {
      showingLeftMenu: localStorage.showingLeftMenu,
      hiddenLeftMenu: localStorage.hiddenLeftMenu,
      showingNavigationDropdown: false,
      topMenuList: [
        {
          label: "Profile",
          link: "profile",
        }
      ],
    };
  },
  created() {
    if(this.windowWidth <1024){
      if(!localStorage.hiddenLeftMenu){
        this.hiddenLeftMenu = 'true';
        this.showingLeftMenu = 'false';
      }
    }else{
      if(!localStorage.showingLeftMenu){
        this.showingLeftMenu = 'true';
        this.hiddenLeftMenu = 'false';
      }
    }
    this.leftMenuStorage();
  },
  methods:{
    leftMenuTrigger(){
      if(this.windowWidth < 1024){
        if(this.hiddenLeftMenu === 'true'){
          this.hiddenLeftMenu = 'false';
          this.showingLeftMenu = 'true';
        } else {
          this.hiddenLeftMenu = 'true';
          this.showingLeftMenu = 'false';
        }
      }else{
        if(this.showingLeftMenu === 'true'){
          this.showingLeftMenu = 'false'
        } else {
          this.showingLeftMenu = 'true'
        }
        this.hiddenLeftMenu = 'false';
      }
      this.leftMenuStorage();
    },
    leftMenuStorage(){
      localStorage.setItem('showingLeftMenu',this.showingLeftMenu)
      localStorage.setItem('hiddenLeftMenu',this.hiddenLeftMenu)
    }
  },
  watch:{
    windowWidth(){
      if(this.windowWidth < 1024) {
        this.hiddenLeftMenu = 'true';
      }else {
        this.hiddenLeftMenu = 'false';
      }
      this.leftMenuStorage();
    }
  }
}
</script>
