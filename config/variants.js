// which tiles show per site

(function () {
  function resolveVariant() {
    const qp = new URLSearchParams(location.search).get("site");
    if (qp) return qp.toLowerCase();
    const host = location.hostname.toLowerCase();
    if (host.includes("cpc")) return "cpc";
    if (host.includes("dev")) return "dev";
    return "mvb"; // default
  }

  window.VARIANTS = {
    cpc: {
      tiles: ["taxes", "schoolBus", "dispute"], // what to display
      order: ["taxes", "schoolBus", "dispute", "parking", "health"], // tile order
    },

    mvb: {
      tiles: ["schoolBus", "dispute"],
      order: ["schoolBus", "dispute", "parking", "health"],
    },
    dev: {
      tiles: ["taxes", "schoolBus", "dispute", "parking", "health"],
      order: ["taxes", "schoolBus", "dispute", "parking", "health"],
    },
  };

  window.resolveVariant = resolveVariant;
})();
