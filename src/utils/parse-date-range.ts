import { getLocalTimeZone, today } from "@internationalized/date"

export const parseDateRange = (
  from: string | undefined | null,
  to: string | undefined | null,
) => {

  if (to && from) {
    const count =
      (new Date(to).getTime() - new Date(from).getTime()) / (60 * 60 * 24 * 1000)

    const label =
      count === 1
        ? `ليلة واحدة`
        : count === 2
          ? "ليلتان"
          : count <= 10
            ? `${count} ليالي`
            : `${count} ليلة`
    return {
      range: [from, to],
      nights: count,
      label: label,
    }
  }
  else {
    if (!from || (from && new Date(from) < new Date()))
      return {
        range: [
          today(getLocalTimeZone()).toString(),
          today(getLocalTimeZone()).add({ days: 1 }).toString(),
        ],
        nights: 1,
        label: "ليلة واحدة",
      }

    // if (!to)
    return {
      range: [
        today(getLocalTimeZone()).toString(),
        today(getLocalTimeZone()).add({ days: 1 }).toString(),
      ],
      nights: 1,
      label: "ليلة واحدة",
    }
  }
}
