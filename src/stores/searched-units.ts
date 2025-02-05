import getUnitsData from "@/api/services/get-units-data"
import { UnitType } from "@/types/unit"
import { create } from "zustand"


type searchedUnitsStore = {
    searchedUnits: UnitType[]
    setSearchedUnits: (units: UnitType[]) => void
}

export const useSearchedUnitsStore = create<searchedUnitsStore>((set) => {
    return {
        searchedUnits: getUnitsData(),
        setSearchedUnits: (units) =>
            set((state) => {
                return { searchedUnits: units }
            })
    }
})
