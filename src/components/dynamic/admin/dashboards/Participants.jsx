"use client";

import { useState } from "react";
import Dashboard from "../Dashboard.jsx";
// import {
//   FILTERS,
//   HEADERS,
//   TAGS,
//   DROPDOWN,
//   STATUSES,
// } from "@/data/dynamic/admin/Participants";

const Participants = () => {
  const [participants, setParticipants] = useState(null);

  return (
    <Dashboard participants={participants} setParticipants={setParticipants} />
    // <div className="h-full font-poppins flex flex-col py-4 gap-3">
    //   <div className="flex">
    //     <Title title="Participants" />
    //     <Filters
    //       filters={filters}
    //       setFilters={setFilters}
    //       setObjects={setParticipants}
    //       objects={participants}
    //       input={input.input}
    //     />
    //   </div>
    //   <Toolbar
    //     input={input}
    //     setInput={setInput}
    //     tags={TAGS}
    //     setObjects={setParticipants}
    //     objects={participants}
    //     filters={filters}
    //     file="PARTICIPANTS"
    //     headers={headers}
    //     page="participants"
    //   />
    //   <Table
    //     headers={headers}
    //     empty="No Participants Available"
    //     setHeaders={setHeaders}
    //     setObjects={setParticipants}
    //     objects={participants}
    //     Dropdown={DROPDOWN}
    //     statuses={STATUSES}
    //   />
    // </div>
  );
};

export default Participants;
