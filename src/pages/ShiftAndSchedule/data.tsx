interface Records {
  id: number;
  
  scheduleShift: string;
  sat27: string;
  sun28: string;
  mon29: string;
  name: string;

}

interface ExpandableRecords {
  id: number;
  scheduleShift: string;
  sat27: string;
  sun28: string;
  mon29: string;
  name: string;
  subRows: Records[];
}

const records: Records[] = [
  {
    id: 1,
    name: "Burt",
    scheduleShift: "Morning",
    sat27: "8:00 am - 4:00 pm (8 hrs)",
    sun28: "Off",
    mon29: "9:00 am - 5:00 pm (8 hrs)"
  },
  {
    id: 2,
    name: "Bruno",
    scheduleShift: "Evening",
    sat27: "2:00 pm - 10:00 pm (8 hrs)",
    sun28: "2:00 pm - 10:00 pm (8 hrs)",
    mon29: "Off"
  },
  {
    id: 3,
    name: "Alvarado",
    scheduleShift: "Night",
    sat27: "10:00 pm - 6:00 am (8 hrs)",
    sun28: "Off",
    mon29: "10:00 pm - 6:00 am (8 hrs)"
  },
  {
    id: 4,
    name: "Lilia",
    scheduleShift: "Morning",
    sat27: "8:00 am - 4:00 pm (8 hrs)",
    sun28: "9:00 am - 5:00 pm (8 hrs)",
    mon29: "Off"
  },
  {
    id: 5,
    name: "Amanda",
    scheduleShift: "Evening",
    sat27: "1:00 pm - 9:00 pm (8 hrs)",
    sun28: "1:00 pm - 9:00 pm (8 hrs)",
    mon29: "1:00 pm - 9:00 pm (8 hrs)"
  },
  {
    id: 6,
    name: "Alexandra",
    scheduleShift: "Night",
    sat27: "11:00 pm - 7:00 am (8 hrs)",
    sun28: "Off",
    mon29: "11:00 pm - 7:00 am (8 hrs)"
  },
  {
    id: 7,
    name: "Diana",
    scheduleShift: "Morning",
    sat27: "8:30 am - 4:30 pm (8 hrs)",
    sun28: "Off",
    mon29: "9:30 am - 5:30 pm (8 hrs)"
  },
  {
    id: 8,
    name: "Goodman",
    scheduleShift: "Evening",
    sat27: "12:00 pm - 8:00 pm (8 hrs)",
    sun28: "12:00 pm - 8:00 pm (8 hrs)",
    mon29: "Off"
  },
  {
    id: 9,
    name: "Edith",
    scheduleShift: "Night",
    sat27: "10:00 pm - 6:00 am (8 hrs)",
    sun28: "10:00 pm - 6:00 am (8 hrs)",
    mon29: "Off"
  },
  {
    id: 10,
    name: "Juana",
    scheduleShift: "Morning",
    sat27: "7:00 am - 3:00 pm (8 hrs)",
    sun28: "8:00 am - 4:00 pm (8 hrs)",
    mon29: "9:00 am - 5:00 pm (8 hrs)"
  },
  // Add additional records here following the same randomized structure for each.
];



export { records};
