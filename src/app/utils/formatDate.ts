export function formatDate(date: string, includeRelative = false) {
  // Handle present dates (e.g., "2025-05-present")
  if (date.includes("-present")) {
    const [year, month] = date.split("-");
    return `${new Date(parseInt(year), parseInt(month) - 1).toLocaleString(
      "en-us",
      { month: "long" }
    )} ${year}-Present`;
  }

  // Handle date ranges in format YYYY-MM/YYYY-MM or YYYY-MM/MM
  if (date.includes("/")) {
    const [startDate, endDate] = date.split("/");
    const [startYear, startMonth] = startDate.split("-");

    // If endDate contains a year (YYYY-MM format)
    let endYear, endMonth;
    if (endDate.includes("-")) {
      [endYear, endMonth] = endDate.split("-");
    } else {
      // If endDate is just a month (MM format)
      endYear = startYear;
      endMonth = endDate;
    }

    const formattedStartDate = new Date(
      parseInt(startYear),
      parseInt(startMonth) - 1
    ).toLocaleString("en-us", { month: "long" });

    const formattedEndDate = new Date(
      parseInt(endYear),
      parseInt(endMonth) - 1
    ).toLocaleString("en-us", { month: "long" });

    if (startYear === endYear) {
      return `${formattedStartDate}-${formattedEndDate} ${startYear}`;
    } else {
      return `${formattedStartDate} ${startYear}-${formattedEndDate} ${endYear}`;
    }
  }

  // Handle simple dates (YYYY-MM)
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const currentDate = new Date();
  const targetDate = new Date(date);
  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  // Check if the date string contains a day (YYYY-MM-DD vs YYYY-MM)
  const isMonthYearOnly = date.split("T")[0].split("-").length === 2;

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    ...(isMonthYearOnly ? {} : { day: "numeric" }),
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
