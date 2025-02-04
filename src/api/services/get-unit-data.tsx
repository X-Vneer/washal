import unitsData from "@/data/units.json"

const getUnitData =  (id: number) => {
  return unitsData.filter((unit) => {
    return unit.id == id
  })
}

export default getUnitData
