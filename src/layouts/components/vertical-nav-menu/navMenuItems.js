/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: TripCarte Pwa
  Author: TripCarte.Asia
  Author URL: http://www.tripcarte.asia/
==========================================================================================*/


export default [
  // {
  //   url: "/apps/email",
  //   name: "Email",
  //   slug: "email",
  //   icon: "MailIcon",
  //   i18n: "Email",
  // },
  {
    url: null,
    name: "Dashboard",
    tag: "2",
    tagColor: "warning",
    icon: "HomeIcon",
    i18n: "Dashboard",
    submenu: [
      {
        url: '/dashboard/ecommerce',
        name: "Travel-Agent",
        slug: "dashboard-ecommerce",
        i18n: "Merchant(Admin)",
      },
      {
        url: '/dashboard/analytics',
        name: "Analytics",
        slug: "dashboard-analytics",
        i18n: "TC Agent | Partners",
      },
    ]
  },
  {
    header: "Apps",
    icon: "PackageIcon",
    i18n: "Apps",
    items: [
      {
        url: "/apps/email",
        name: "Email",
        slug: "email",
        icon: "MailIcon",
        i18n: "Email",
      },
      {
        url: "/apps/chat",
        name: "Chat Messenger",
        slug: "chat",
        icon: "MessageSquareIcon",
        i18n: "Chat Messenger",
      },
      {
        url: "/apps/todo",
        name: "Add Listings",
        slug: "todo",
        icon: "CheckSquareIcon",
        i18n: "Add Listings",
      },
      {
        url: "/apps/calendar/vue-simple-calendar",
        name: "Booking Schedule | Appointment",
        slug: "calendar-simple-calendar",
        icon: "CalendarIcon",
        tagColor: "success",
        i18n: "Calendar",
      },
      {
        url: null,
        name: "View Listings",
        icon: "ShoppingCartIcon",
        i18n: "View Listings",
        submenu: [
          {
            url: '/apps/eCommerce/shop',
            name: "Merchant Area",
            slug: "ecommerce-shop",
            i18n: "Merchant Area",
          },
          {
            url: '/apps/eCommerce/item/',
            name: "Promotions",
            slug: "ecommerce-item-detail-view",
            i18n: "Promotions",
          },
          {
            url: '/apps/eCommerce/wish-list',
            name: "Save Bookmark",
            slug: "ecommerce-wish-list",
            i18n: "Save Bookmark",
          },
          {
            url: '/apps/eCommerce/checkout',
            name: "Payment Gateway",
            slug: "ecommerce-checkout",
            i18n: "Book Now(add2cart)",
          },
        ]
      },
      {
        url: null,
        name: "Merchant",
        icon: "UserIcon",
        i18n: "Merchant",
        submenu: [
          {
            url: '/apps/user/user-list',
            name: "View All Merchant",
            slug: "app-user-list",
            i18n: "View All Merchant",
          },
          {
            url: '/apps/user/user-view/268',
            name: "View All Agent",
            slug: "app-user-view",
            i18n: "View All Agent",
          },
          {
            url: '/apps/user/user-edit/268',
            name: "Update All Agent",
            slug: "app-user-edit",
            i18n: "Update All Agent",
          },
        ]
      },
    ]
  },
  {
    header: "Listings | Inventories",
    icon: "LayersIcon",
    i18n: "Listings | Inventories",
    items: [
      {
        url: null,
        name: "Business Analytics Data",
        tag: "new",
        tagColor: "primary",
        icon: "ListIcon",
        i18n: "Business Analytics Data",
        submenu: [
          {
            url: '/ui-elements/data-list/list-view',
            name: "Services(ListView)",
            slug: "data-list-list-view",
            i18n: "Services(ListView)",
          },
          {
            url: '/ui-elements/data-list/thumb-view',
            name: "Listings ThumbView",
            slug: "data-list-thumb-view",
            i18n: "Listings ThumbView",
          },
        ]
      },
      {
        url: null,
        name: "Agreement",
        icon: "LayoutIcon",
        i18n: "Agreement",
        submenu: [
          {
            url: '/ui-elements/grid/vuesax',
            name: "Terms & Agreement",
            slug: "grid-vuesax",
            i18n: "Terms & Agreement",
          },
          {
            url: '/ui-elements/grid/tailwind',
            name: "Privacy Policy",
            slug: "grid-tailwind",
            i18n: "Privacy Policy",
          },
        ]
      },
      {
        url: "/ui-elements/colors",
        name: "Attractions and Merchants",
        slug: "colors",
        icon: "DropletIcon",
        i18n: "Attractions and Merchants",
      },
      {
        url: null,
        name: "Tripcarte API Partners",
        icon: "CreditCardIcon",
        i18n: "Tripcarte API Partners",
        submenu: [
          {
            url: '/ui-elements/card/basic',
            name: "Tripcarte Travel Agent Partners",
            slug: "basic-cards",
            i18n: "Tripcarte Travel Agent Partners",
          },
          {
            url: '/ui-elements/card/statistics',
            name: "Statistics",
            slug: "statistics-cards",
            i18n: "Statistics",
          },
          {
            url: '/ui-elements/card/analytics',
            name: "Analytics",
            slug: "analytics-cards",
            i18n: "Analytics",
          },
          {
            url: '/ui-elements/card/card-actions',
            name: "New Notification",
            slug: "card-actions",
            i18n: "New Notification",
          },
          {
            url: '/ui-elements/card/card-colors',
            name: "New | Upcoming Booking",
            slug: "card-colors",
            i18n: "New | Upcoming Booking",
          }
        ]
      },
      {
        url: null,
        name: "Tripcarte Management",
        icon: "ArchiveIcon",
        i18n: "Tripcarte Management",
        submenu: [
          {
            url: '/components/alert',
            name: "Finance",
            slug: "component-alert",
            i18n: "Finance",
          },
          {
            url: '/components/avatar',
            name: "Customer Service",
            slug: "component-avatar",
            i18n: "Customer Service",
          },
          {
            url: '/components/breadcrumb',
            name: "Management",
            slug: "component-breadcrumb",
            i18n: "Management",
          },
          {
            url: '/components/button',
            name: "Attractions and Merchants",
            slug: "component-button",
            i18n: "Attractions and Merchants",
          },
          {
            url: '/components/button-group',
            name: "Total Pending Payout",
            slug: "component-button-group",
            i18n: "Total Pending Payout",
          },
          {
            url: '/components/chip',
            name: "Total Redemption this Week",
            slug: "component-chip",
            i18n: "Total Redemption this Week",
          },
          {
            url: '/components/collapse',
            name: "Collapse",
            slug: "component-collapse",
            i18n: "Collapse",
          },
          {
            url: '/components/dialogs',
            name: "Dialogs",
            slug: "component-dialog",
            i18n: "Dialogs",
          },
          {
            url: '/components/divider',
            name: "Divider",
            slug: "component-divider",
            i18n: "Divider",
          },
          {
            url: '/components/dropdown',
            name: "DropDown",
            slug: "component-drop-down",
            i18n: "DropDown",
          },
          {
            url: '/components/list',
            name: "List",
            slug: "component-list",
            i18n: "List",
          },
          {
            url: '/components/loading',
            name: "Loading",
            slug: "component-loading",
            i18n: "Loading",
          },
          {
            url: '/components/navbar',
            name: "Navbar",
            slug: "component-navbar",
            i18n: "Navbar",
          },
          {
            url: '/components/notifications',
            name: "Notifications",
            slug: "component-notifications",
            i18n: "Notifications",
          },
          {
            url: '/components/pagination',
            name: "Pagination",
            slug: "component-pagination",
            i18n: "Pagination",
          },
          {
            url: '/components/popup',
            name: "Popup",
            slug: "component-popup",
            i18n: "Popup",
          },
          {
            url: '/components/progress',
            name: "Progress",
            slug: "component-progress",
            i18n: "Progress",
          },
          {
            url: '/components/sidebar',
            name: "Sidebar",
            slug: "component-sidebar",
            i18n: "Sidebar",
          },
          {
            url: '/components/slider',
            name: "Slider",
            slug: "component-slider",
            i18n: "Slider",
          },
          {
            url: '/components/tabs',
            name: "Tabs",
            slug: "component-tabs",
            i18n: "Tabs",
          },
          {
            url: '/components/tooltip',
            name: "Tooltip",
            slug: "component-tooltip",
            i18n: "Tooltip",
          },
          {
            url: '/components/upload',
            name: "Upload",
            slug: "component-upload",
            i18n: "Upload",
          },
        ]
      },
      {
        url: null,
        name: "Add New Redemption",
        icon: "PlusCircleIcon",
        i18n: "Add New Redemption",
        submenu: [
          {
            url: '/extensions/select',
            name: "Total Pending Payout",
            icon: "PocketIcon",
            slug: "pending",
            i18n: "Total Pending Payout",
          },
          {
            url: '/extensions/quill-editor',
            name: "Editor",
            icon: "EditIcon",
            slug: "extra-component-quill-editor",
            i18n: "Editor",
          },
          {
            url: '/extensions/drag-and-drop',
            name: "Total Redemption this Week",
            icon: "DropletIcon",
            slug: "extra-component-drag-and-drop",
            i18n: "Total Redemption this Week",
          },
          {
            url: '/extensions/datepicker',
            name: "Booking Schedule",
            icon: "CalendarIcon",
            slug: "extra-component-datepicker",
            i18n: "Booking Schedule",
          },
          {
            url: '/extensions/datetime-picker',
            name: "Total Redemption this Year",
            icon: "ClockIcon",
            slug: "extra-component-datetime-picker",
            i18n: "Total Redemption this Year",
          },
          {
            url: '/extensions/access-control',
            name: "Total Reviews Collected",
            slug: "extra-component-access-control",
            i18n: "Total Reviews Collected",
          },
          {
            url: '/extensions/i18n',
            name: "Current Products Sold",
            slug: "extra-component-i18n",
            i18n: "Current Products Sold",
          },
          {
            url: '/extensions/carousel',
            name: "Platforms Sold On",
            icon: "LayersIcon",
            slug: "extra-component-carousel",
            i18n: "Platforms Sold On",
          },
          {
            url: '/extensions/clipboard',
            name: "POS Redemption System",
            icon: "CopyIcon",
            slug: "extra-component-clipboard",
            i18n: "POS Redemption System",
          },
          {
            url: '/extensions/context-menu',
            name: "Redemption Reports",
            icon: "MoreHorizontalIcon",
            slug: "extra-component-context-menu",
            i18n: "Redemption Reports",
          },
          {
            url: '/extensions/star-ratings',
            name: "View all redeemed orders",
            icon: "StarIcon",
            slug: "extra-component-star-ratings",
            i18n: "View all redeemed orders",
          },
          {
            url: '/extensions/autocomplete',
            name: "Search Invoices",
            icon: "Edit3Icon",
            slug: "extra-component-autocomplete",
            i18n: "Search Invoices",
          },
          {
            url: '/extensions/tree',
            name: "PDF / XLS Export",
            icon: "GitPullRequestIcon",
            slug: "extra-component-tree",
            i18n: "PDF / XLS Export",
          },
          // {
          //   name: "Import/Export",
          //   i18n: "Import/Export",
          //   submenu: [

          //   ]
          // },
          {
            url: "/import-export/import",
            name: "Import PDF / XLS",
            icon: "HomeIcon",
            slug: "import",
            i18n: "Import PDF / XLS"
          },
          {
            url: "/import-export/export",
            name: "Export XLS/ PDF",
            icon: "HomeIcon",
            slug: "export",
            i18n: "Export XLS/ PDF"
          },
          {
            url: "/import-export/export-selected",
            name: "Export Selected Docs",
            icon: "HomeIcon",
            slug: "export-selected",
            i18n: "Export Selected Docs"
          }
        ]
      },
    ]
  },
  {
    header: "New Registration",
    icon: "Edit3Icon",
    i18n: "New Registration",
    items: [
      {
        url: null,
        name: "Push Notification",
        icon: "CopyIcon",
        i18n: "Push Notification",
        submenu: [
          // {
          //  url: '/forms/form-elements/select',
          //  name: "Select",
          //  slug: "form-element-select",
          //  i18n: "Select",
          // },
          {
            url: '/forms/form-elements/switch',
            name: "Switch",
            slug: "form-element-switch",
            i18n: "Switch",
          },
          {
            url: '/forms/form-elements/checkbox',
            name: "Checkbox",
            slug: "form-element-checkbox",
            i18n: "Checkbox",
          },
          {
            url: '/forms/form-elements/radio',
            name: "Radio",
            slug: "form-element-radio",
            i18n: "Radio",
          },
          {
            url: '/forms/form-elements/input',
            name: "Input",
            slug: "form-element-input",
            i18n: "Input",
          },
          {
            url: '/forms/form-elements/number-input',
            name: "Number Input",
            slug: "form-element-number-input",
            i18n: "NumberInput",
          },
          {
            url: '/forms/form-elements/textarea',
            name: "Textarea",
            slug: "form-element-textarea",
            i18n: "Textarea",
          },
        ]
      },
      {
        url: '/forms/form-layouts',
        name: "Form Layouts",
        icon: "PackageIcon",
        slug: "forms-form-layouts",
        i18n: "FormLayouts",
      },
      {
        url: '/forms/form-wizard',
        name: "Form Wizard",
        icon: "PackageIcon",
        slug: "extra-component-form-wizard",
        i18n: "FormWizard",
      },
      {
        url: '/forms/form-validation',
        name: "Form Validation",
        icon: "CheckCircleIcon",
        slug: "extra-component-form-validation",
        i18n: "FormValidation",
      },
      {
        url: '/forms/form-input-group',
        name: "Form Input Group",
        icon: "MenuIcon",
        slug: "extra-component-form-input-group",
        i18n: "FormInputGroup",
      },
      {
        url: "/ui-elements/table",
        name: "Table",
        slug: "table",
        icon: "GridIcon",
        i18n: "Table",
      },
      {
        url: "/ui-elements/ag-grid-table",
        name: "agGrid Table",
        slug: "ag-grid-table",
        icon: "GridIcon",
        i18n: "agGridTable",
      },
    ]
  },
  {
    header: "Pages",
    icon: "FileIcon",
    i18n: "Pages",
    items: [
      {
        url: '/pages/profile',
        slug: 'page-profile',
        name: "Profile",
        icon: "UserIcon",
        i18n: "Profile",
      },
      {
        url: '/pages/user-settings',
        slug: 'page-user-settings',
        name: "User Settings",
        icon: "SettingsIcon",
        i18n: "UserSettings",
      },
      {
        url: '/pages/faq',
        slug: 'page-faq',
        name: "FAQ",
        icon: "HelpCircleIcon",
        i18n: "FAQ",
      },
      {
        url: '/pages/knowledge-base',
        slug: 'page-knowledge-base',
        name: "Knowledge Base",
        icon: "InfoIcon",
        i18n: "KnowledgeBase",
      },
      {
        url: '/pages/search',
        slug: 'page-search',
        name: "Search",
        icon: "SearchIcon",
        i18n: "Search",
      },
      {
        url: '/pages/invoice',
        slug: 'page-invoice',
        name: "Invoice",
        icon: "InfoIcon",
        i18n: "Invoice",
      },
      {
        url: null,
        name: "Authentication",
        icon: "PieChartIcon",
        i18n: "Authentication",
        submenu: [
          {
            url: '/pages/login',
            name: "Login",
            slug: "pages-login",
            i18n: "Login",
            target: '_blank',
          },
          {
            url: '/pages/register',
            name: "Register",
            slug: "pages-register",
            i18n: "Register",
            target: '_blank',
          },
          {
            url: '/pages/forgot-password',
            name: "Forgot Password",
            slug: "pages-forgot-password",
            i18n: "ForgotPassword",
            target: '_blank',
          },
          {
            url: '/pages/reset-password',
            name: "Reset Password",
            slug: "pages-reset-password",
            i18n: "ResetPassword",
            target: '_blank',
          },
          {
            url: '/pages/lock-screen',
            name: "Lock Screen",
            slug: "pages-lock-screen",
            i18n: "LockScreen",
            target: '_blank',
          },
        ]
      },
      {
        url: null,
        name: "Miscellaneous",
        icon: "CoffeeIcon",
        i18n: "Miscellaneous",
        submenu: [
          {
            url: '/pages/not-authorized',
            name: "Not Authorized",
            slug: "page-not-authorized",
            icon: "XCircleIcon",
            i18n: "NotAuthorized",
            target: '_blank',
          },
          {
            url: '/pages/maintenance',
            name: "Maintenance",
            slug: "page-maintenance",
            icon: "AnchorIcon",
            i18n: "Maintenance",
            target: '_blank',
          },
          {
            url: '/pages/comingsoon',
            slug: 'page-coming-soon',
            name: "Coming Soon",
            icon: "ClockIcon",
            i18n: "ComingSoon",
            target: '_blank',
          },
          {
            url: '/pages/error-404',
            name: "404",
            slug: "page-error-404",
            i18n: "404",
            target: '_blank',
          },
          {
            url: '/pages/error-500',
            name: "500",
            slug: "page-error-500",
            i18n: "500",
            target: '_blank',
          }
        ]
      },
    ]
  },
  {
    header: "Charts & Maps",
    icon: "PieChartIcon",
    i18n: "ChartsAndMaps",
    items: [
      {
        url: null,
        name: "Charts",
        icon: "PieChartIcon",
        tag: '3',
        tagColor: 'success',
        i18n: "Charts",
        submenu: [
          {
            url: '/charts-and-maps/charts/apex-charts',
            name: "Apex Charts",
            slug: "extra-component-charts-apex-charts",
            i18n: "ApexCharts",
          },
          {
            url: '/charts-and-maps/charts/chartjs',
            name: "chartjs",
            slug: "extra-component-charts-chartjs",
            i18n: "chartjs",
          },
          {
            url: '/charts-and-maps/charts/echarts',
            name: "echarts",
            slug: "extra-component-charts-echarts",
            i18n: "echarts",
          },
        ]
      },
      {
        url: '/charts-and-maps/maps/google-map',
        name: "Google Map",
        icon: "MapIcon",
        slug: "extra-component-maps-google-map",
        i18n: "GoogleMap",
      },
    ]
  },
  {
    header: "Others",
    icon: "MoreHorizontalIcon",
    i18n: "Others",
    items: [
      {
        url: null,
        name: "Menu Levels",
        icon: "MenuIcon",
        i18n: "MenuLevels",
        submenu: [
          {
            url: null,
            name: "Menu Level 2.1",
            i18n: "MenuLevel2p1",
          },
          {
            url: null,
            name: "Menu Level 2.2",
            i18n: "MenuLevel2p2",
            submenu: [
              {
                url: null,
                name: "Menu Level 3.1",
                i18n: "MenuLevel3p1",
              },
              {
                url: null,
                name: "Menu Level 3.2",
                i18n: "MenuLevel3p2",
              },
            ]
          },
        ]
      },
      {
        url: null,
        name: "Disabled Menu",
        icon: "EyeOffIcon",
        i18n: "DisabledMenu",
        isDisabled: true,
      },
      {
        url: null,
        name: "Support",
        icon: "SmileIcon",
        i18n: "Support",
        submenu: [
          {
            url: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/',
            name: "Documentation",
            icon: "BookOpenIcon",
            slug: "external",
            i18n: "Documentation",
            target: "_blank"
          },
          {
            url: 'https://pixinvent.ticksy.com/',
            name: "Raise Support",
            icon: "LifeBuoyIcon",
            slug: "external",
            i18n: "RaiseSupport",
            target: "_blank"
          },
        ]
      },
    ]
  },
]
