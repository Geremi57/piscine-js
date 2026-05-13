const matchCron = (cron, date) => {
    const minute = date.getMinutes();
    const hour = date.getHours();
    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1; 

let dayOfWeek = date.getDay();
  if (dayOfWeek === 0) {
        dayOfWeek = 7;
   }
    const dateParts = [
        minute,
        hour,
        dayOfMonth,
        month,
        dayOfWeek
    ];

    const cronParts = cron.split(" ");

    for (let i = 0; i < cronParts.length; i++) {

        const cronValue = cronParts[i];
        const dateValue = dateParts[i];

        if (cronValue === "*") {
            continue;
        }
        const cronNumber = Number(cronValue);
        if (cronNumber !== dateValue) {
            return false;
        }
    }

    return true;
};