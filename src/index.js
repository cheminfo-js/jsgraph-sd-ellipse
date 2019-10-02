import sum from 'ml-array-sum';
import variance from 'ml-array-variance';
import covariance from 'ml-array-xy-covariance';
/**
 *
 * @param {object} [points]
 * @param {Array} [points.x]
 * @param {Array} [points.y]
 * @param {object} [options={}]
 * @param {number} [options.nbSD=2]
 * @param {number} [options.props={fillColor='#FF0',fillOpacity=0.5,strokeWidth=0.00001,strokeColor='#F00',strokeDasharray=[1]}]
 */
export function getEllipse(points, options = {}) {
  const {
    nbSD = 2,
    props = {
      fillColor: '#FF0',
      fillOpacity: 0.5,
      strokeWidth: 0.00001,
      strokeColor: '#F00',
      strokeDasharray: [1],
    },
  } = options;
  let xCenter = sum(points.x) / points.x.length;
  let yCenter = sum(points.y) / points.y.length;

  let xCentered = points.x.map((x) => x - xCenter);
  let yCentered = points.y.map((y) => y - yCenter);

  let centeredXVariance = variance(xCentered);
  let centeredYVariance = variance(yCentered);
  let centeredCovariance = covariance({
    x: xCentered,
    y: yCentered,
  });

  let theta =
    -0.5 *
    Math.atan(
      (2 * centeredCovariance) / (centeredYVariance - centeredXVariance),
    );

  if (centeredXVariance < centeredYVariance) {
    theta += Math.PI / 2;
  }

  let c = Math.cos(theta);
  let s = Math.sin(theta);

  let xRotated = xCentered.map((x, index) => c * x + s * yCentered[index]);
  let yRotated = xCentered.map((x, index) => s * x - c * yCentered[index]);

  let a = Math.sqrt(variance(xRotated)) * nbSD;
  let b = Math.sqrt(variance(yRotated)) * nbSD;

  return {
    type: 'ellipse',
    layer: 0,
    properties: {
      ...props,
      transforms: [
        {
          type: 'rotate',
          center: {
            x: xCenter,
            y: yCenter,
          },
          angle: (theta / Math.PI) * 180,
          angleType: 'angleData',
        },
      ],
      position: [
        {
          x: xCenter,
          y: yCenter,
        },
      ],
      rx: a,
      ry: b,
    },
  };
}
