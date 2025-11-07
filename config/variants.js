// which tiles show per site

(function () {
  function resolveVariant() {
    const qp = new URLSearchParams(location.search).get("site");
    if (qp) return qp.toLowerCase();
    const host = location.hostname.toLowerCase();
    // Commenting this out because of cpcviolationlookup domain.  
    // After we change the domain, we will need to uncomment this.
    // if (host.includes("cpc")) return "cpc";
    if (host.includes("dev")) return "dev";
    return "mvb"; // default
  }

  window.VARIANTS = {
    cpc: {
      tiles: ["taxes", "schoolBus", "dispute", "notify"], // what to display
      order: ["taxes", "schoolBus", "dispute", "parking", "health", "notify"], // tile order
    },

    mvb: {
      tiles: ["schoolBus", "notify"],
      order: ["schoolBus", "parking", "health", "notify"],
    },
    dev: {
      tiles: ["taxes", "schoolBus", "dispute", "parking", "health", "notify"],
      order: ["taxes", "schoolBus", "dispute", "parking", "health", "notify"],
    },
  };

  window.resolveVariant = resolveVariant;
})();
