window.SITE_MAP = {
  tiles: {
    taxes: {
      label: "Taxes",
      icon: "./ImagesAssets/taxes.png",
      mode: "route", // to a page
      // href: "form.html",
      href: "form.html?site=cpc",
    },
    schoolBus: {
      label: "School Zone Traffic Enforcement Lookup",
      icon: "./ImagesAssets/schoolBus.png",
      mode: "modal", // open inside iframe modal
      href: "https://www.trafficsafetycitations.com/pages/login",
      title: "School Bus Violations",
    },
    dispute: {
      label: "Dispute School Zone Ticket",
      icon: "./ImagesAssets/health.png",
      mode: "modal",
      href: "https://us.openforms.com/Form/f36438c9-85f3-44b3-ab4b-1fa98751ef1f",
      title: "Dispute School Zone Ticket",
    },
    parking: {
      label: "Parking Ticket Lookup",
      icon: "./ImagesAssets/carImage.png",
      mode: "modal",
      href: "/mvb/tickets/?cmd=search",
      title: "Parking Ticket",
    },
    health: {
      label: "Health and Sanitation Lookup",
      icon: "./ImagesAssets/health.png",
      mode: "modal",
      href: "/mvb/tickets/?cmd=search&show=sov",
      title: "Health and Sanitation",
    },
    notify: {
      label: "Subscribe to Property Notifications",
      icon: "./ImagesAssets/health.png",
      mode: "modal",
      href: "https://cospublic-fsfua6g5f6b6cgbd.eastus2-01.azurewebsites.net/resident_contact/",
      title: "Property Notifications",
    },
  },
};
