const columns = [
    { name: "NAME", uid: "name", sortable: true },
    { name: "STOCK", uid: "stock", sortable: true },
    { name: "AVAILABILITY", uid: "is_available", sortable: true },
    { name: "ACTIONS", uid: "actions" },
];

const availabilityStatusOptions = [
    { name: "Available", uid: "available" },
    { name: "Not Available", uid: "not available" },
];

export { columns, availabilityStatusOptions };