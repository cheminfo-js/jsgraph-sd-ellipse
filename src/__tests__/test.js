import { getEllipse } from '..';

describe('getEllipse', () => {
  it('should return an annotation', () => {
    let result = getEllipse({
      x: [1, 2, 3, 4, 5, 6],
      y: [1, 4, 2, 5, 3, 6],
    });

    expect(result).toEqual({
      type: 'ellipse',
      layer: 0,
      properties: {
        fillColor: '#FF0',
        fillOpacity: 0.5,
        strokeWidth: 0.00001,
        strokeColor: '#F00',
        strokeDasharray: [1],
        transforms: [
          {
            type: 'rotate',
            center: {
              x: 3.5,
              y: 3.5,
            },
            angle: -45,
            angleType: 'angleData',
          },
        ],
        position: [
          {
            x: 3.5,
            y: 3.5,
          },
        ],
        rx: 2,
        ry: 4.898979485566357,
      },
    });
  });
});
