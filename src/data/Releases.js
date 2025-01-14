const DEV = {
  LIVE: {
    START: new Date("10/01/2000"),
    END: new Date("April 28, 2025 9:00:00"),
  },
  POSTLIVE: {
    START: new Date("April 28, 2024 9:00:00"),
    END: new Date("10/10/2100"),
  },

  "/admin/participants": new Date("10/01/2023"),
  "/admin/teams": new Date("10/01/2023"),
  "/admin/judges": new Date("10/01/2023"),
  "/admin/volunteers": new Date("10/01/2023"),
  "/admin/mentors": new Date("10/01/2023"),
  "/admin/admins": new Date("10/01/2023"),
  "/admin/committees": new Date("10/01/2023"),
  "/admin/sponsors": new Date("10/01/2023"),
  "/admin/panels": new Date("10/01/2023"),
  "/admin/feedback": new Date("10/01/2023"),
  "/admin/calendar": new Date("10/01/2023"),
  "/admin/contacts": new Date("10/01/2023"),
  "/admin/checkin": new Date("10/01/2023"),
  "/admin/judging": new Date("10/01/2023"),
  "/admin/statistics": new Date("10/01/2023"),

  "/form/participant": new Date("10/01/2025"),
  "/form/judge": new Date("10/01/2025"),
  "/form/volunteer": new Date("10/01/2025"),
  "/form/mentor": new Date("10/01/2025"),
  "/form/admin": new Date("10/01/2025"),
  "/form/committee": new Date("10/01/2025"),
  "/form/sponsor": new Date("10/01/2025"),
  "/form/panel": new Date("10/01/2025"),
  "/form/feedback": new Date("10/01/2023"),
  "/form/interest": new Date("10/01/2025"),

  "/user/checkin": new Date("10/01/2025"),
  "/user/dashboard": new Date("10/01/2025"),
  "/user/join": new Date("10/01/2025"),
};

const PRODUCTION = {
  LIVE: {
    START: new Date("10/01/2023"),
    END: new Date("April 28, 2025 9:00:00"),
  },
  "/admin/participants": new Date("10/01/2023"),
  "/admin/teams": new Date("10/01/2023"),
  "/admin/judges": new Date("10/01/2023"),
  "/admin/volunteers": new Date("10/01/2023"),
  "/admin/mentors": new Date("10/01/2023"),
  "/admin/admins": new Date("10/01/2023"),
  "/admin/committees": new Date("10/01/2023"),
  "/admin/sponsors": new Date("10/01/2023"),
  "/admin/panels": new Date("10/01/2023"),
  "/admin/feedback": new Date("10/01/2023"),
  "/admin/calendar": new Date("10/01/2023"),
  "/admin/contacts": new Date("10/01/2023"),
  "/admin/checkin": new Date("10/01/2023"),
  "/admin/judging": new Date("10/01/2023"),
  "/admin/statistics": new Date("10/01/2023"),

  "/form/participant": new Date("10/01/2025"),
  "/form/judge": new Date("10/01/2025"),
  "/form/volunteer": new Date("10/01/2025"),
  "/form/mentor": new Date("10/01/2025"),
  "/form/admin": new Date("10/01/2025"),
  "/form/committee": new Date("10/01/2025"),
  "/form/sponsor": new Date("10/01/2025"),
  "/form/panel": new Date("10/01/2025"),
  "/form/feedback": new Date("10/01/2023"),
  "/form/interest": new Date("10/01/2025"),

  "/user/checkin": new Date("4/20/2025"),
  "/user/dashboard": new Date("4/20/2025"),
  "/user/join": new Date("4/20/2025"),
};

export default process.env.NODE_ENV === "production" ? PRODUCTION : DEV;
