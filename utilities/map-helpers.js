/**
 * @description Рассчитывает координаты центральной точки на карте
 * @param {object} points Массив точек на карте
 * @returns { lat: number, lon: number }
 */
const getCenterPointData = (points) => {
  const { length } = points;
  const { lat, lon } = points
    .reduce((acc, { latitude, longitude }) => ({ lat: (acc.lat + latitude), lon: (acc.lon + longitude) }), { lat: 0, lon: 0 });

  return [(lat / length).toFixed(6), (lon / length).toFixed(6)];
};

/**
 * @description Рассчитывает расстояние между двумя точками
 * @param {object} points Массив из координат двух точек
 * @returns {number}
 */
const getDistanceBetWeenPoints = ({ x1, x2, y1, y2 }) => Math.sqrt((Math.abs(x1 - x2)) ** 2 + (Math.abs(y1 - y2)) ** 2);

/**
 * @description Рассчитывает максимальное расстояние между точками
 * @param {object} points Массив из координат точек
 * @returns {number}
 */
const getMaxDistanceBetWeenPoints = (points) => Math.max(...points.map(({ latitude, longitude }) => getDistanceBetWeenPoints({
  x1: points[0].latitude,
  x2: latitude,
  y1: points[0].longitude,
  y2: longitude,
})));

/**
 * @description Рассчитывает zoom карты
 * @param {object} points Массив точек на карте
 * @returns {number}
 */
const getZoom = (points) => {
  if (points.length <= 1) return 10;

  switch (true) {
    case (getMaxDistanceBetWeenPoints(points) > 50): return 2;
    case (getMaxDistanceBetWeenPoints(points) > 10): return 4;
    case (getMaxDistanceBetWeenPoints(points) > 5): return 6;
    default: return 12;
  }
};

export {
  getCenterPointData,
  getZoom,
};
