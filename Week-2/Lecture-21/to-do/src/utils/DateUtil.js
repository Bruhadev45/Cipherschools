const dateFormatter = new Intl.DateTimeFormat("en-IN",{
    hour12:true,
    hour:"numeric",
    minute:"2-digit",
    year:"numeric",
    month:"numeric",
    day:"2-digit",
});
export const formatDate = (date) => dateFormatter.format(date);

