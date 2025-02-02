import { getLocalTimeZone, today } from "@internationalized/date"

export const parseDateRange = (
  from: string | undefined | null,
  to: string | undefined | null,
) => {
  if (!from || (from && new Date(from) < new Date()))
    return {
      range: [
        today(getLocalTimeZone()).toString(),
        today(getLocalTimeZone()).add({ days: 1 }).toString(),
      ],
      nights: 1,
      label: "ليلة واحدة",
    }

  if (!to)
    return {
      range: [
        today(getLocalTimeZone()).toString(),
        today(getLocalTimeZone()).add({ days: 1 }).toString(),
      ],
      nights: 1,
      label: "ليلة واحدة",
    }

  const count =
    // @ts-expect-error
    (new Date(to) - new Date(from)) / (60 * 60 * 24 * 1000)

  const label =
    count === 1
      ? `ليلة واحدة`
      : count === 2
        ? "ليلتان"
        : count <= 10
          ? "ليالي"
          : " ليلة"
  return {
    range: [from, to],
    nights: count,
    label: label,
  }
}
