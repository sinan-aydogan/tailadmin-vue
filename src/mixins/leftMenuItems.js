export const leftMenuItems = {
    data(){
        return {
            menuList: [
                {
                    label: "Buttons",
                    icon: "",
                    link: "buttons",
                    linkType: "route",
                    type: "standard",
                    activeKey: ["buttons"],
                },
                {
                    label: "Layout Items",
                    icon: "window-maximize",
                    link: "",
                    linkType: "route",
                    type: "standard",
                    activeKey: ["content-boxes"],
                    items: [
                        {
                            label: "Layout Structure",
                            icon: "layer-group",
                            link: "layout-structure",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["sections"]
                        },
                        {
                            label: "Grid",
                            icon: "grip-horizontal",
                            link: "grid",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["sections"]
                        },
                        {
                            label: "Content Boxes",
                            icon: "window-restore",
                            link: "sections",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["sections"]
                        },
                        {
                            label: "Statistic Widgets",
                            icon: "chart-bar",
                            link: "statistic-widgets",
                            linkType: "route",
                            type: "standard",
                            activeKey: ["statistic-widgets"],
                        },
                    ],
                },
                {
                    label: "Charts",
                    icon: "chart-bar",
                    link: "charts",
                    linkType: "route",
                    type: "standard",
                    activeKey: ["charts"],
                },
                {
                    label: "Form Elements",
                    icon: "edit",
                    link: "forms",
                    linkType: "route",
                    type: "standard",
                    activeKey: ["forms"],
                },
                /* {
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
                 },*/
            ],
        }
    }
}