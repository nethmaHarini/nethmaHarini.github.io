// Google Analytics 4 Setup (Optional - Activate when ready)
// To activate: Set VITE_GA_MEASUREMENT_ID in your .env file

export const initGA4 = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!measurementId) {
    console.log(
      "GA4: Measurement ID not configured. Set VITE_GA_MEASUREMENT_ID in .env to enable.",
    );
    return;
  }

  // Load Google Analytics script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", measurementId, {
    send_page_view: true,
    cookie_flags: "SameSite=None;Secure",
  });

  console.log("GA4: Initialized with ID:", measurementId);
};

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  if (window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
};

// Track outbound links (GitHub, LinkedIn, etc.)
export const trackOutboundLink = (url, label) => {
  trackEvent("click", {
    event_category: "outbound",
    event_label: label || url,
    transport_type: "beacon",
  });
};

// Track contact form submissions
export const trackFormSubmission = (formName) => {
  trackEvent("form_submission", {
    form_name: formName,
  });
};

// Track project clicks
export const trackProjectClick = (projectName) => {
  trackEvent("project_click", {
    project_name: projectName,
  });
};
