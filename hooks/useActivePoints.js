// external imports
import { useState } from "react";

// interal imports
// public
import state from "../public/data/state.json";

/**
 * @description Хук управления состоянием
 * @returns {
 *   { address: string, budgets: string[], latitude: number, longitude: number },
 *   { address: string, budgets: string[], latitude: number, longitude: number },
 *   {function},
 * }
 */
const useActivePoints = () => {
  const points = state.pickPoints;
  const [activePoints, setActivePoints] = useState([]);

  const togglePoint = (point) => {
    const hasCurrentAddress = activePoints.some(({ address }) => (address === point.address));

    if (hasCurrentAddress) {
      const formattedActivePoints = activePoints.map((activePoint) => {
        if (activePoint.address === point.address) {
          const hasCurrentBudget = activePoint.budgets.includes(point.budget);

          if (hasCurrentBudget) {
            if (activePoint.budgets.length > 1) return {
              ...activePoint,
              budgets: activePoint.budgets.filter((budget) => budget !== point.budget),
            };

            return null;
          }

          return {
            address: point.address,
            budgets: [...activePoint.budgets, point.budget],
            latitude: point.latitude,
            longitude: point.longitude,
          };
        }

        return activePoint;
      }).filter(Boolean);

      setActivePoints(formattedActivePoints);
    } else setActivePoints((prevState) => [
      ...prevState,
      {
        address: point.address,
        budgets: [point.budget],
        latitude: point.latitude,
        longitude: point.longitude,
      }
    ]);
  };

  return {
    activePoints,
    points,
    togglePoint,
  };
};

export default useActivePoints;
