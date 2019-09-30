import _ from 'lodash';
import moment from 'moment';

export default class DataAdapter {
    async init(ctx) {
        const data = await fakeHTTPRequest();

        data.forEach(item => {
            if (item.value) {
                item.valueTypes = [
                    {
                        name: 'Value',
                        type: 'Number',
                    },
                ];

                ctx.create(item);
            } else {
                ctx.createContainer(item);
            }
        });

        let sensors = data.filter(item => item.value);

        sensors = sensors.map(sensor => ctx.get(sensor.id));

        setInterval(() => {
            sensors.forEach(sensor => {
                sensor.set('value', {
                    date: new Date().valueOf(),
                    value: [Math.abs(_.random(sensor.value.value[0] - 3, sensor.value.value[0] + 3))],
                });
            });
        }, 1000);
    }

    async history(ctx, options) {
        const result = [];
        let valueCount = 1;
        let d = moment();
        let v = 10;

        if (options) {
            if (options.start && options.end) {
                valueCount = options.start.diff(options.end, 'h');
                d = options.start.clone();
            }

            if (options.since) {
                valueCount = moment().diff(options.since, 'h');
                d = options.since.clone();
            }
        }

        for (let i = 0; i < valueCount; i++) {
            d.add(1, 'h');
            v = Math.abs(_.random(v - 3, v + 3));
            result.push({
                date: d.clone().valueOf(),
                value: [v],
            });
        }

        return result;
    }

    async update(ctx, payload) {
        return true;
    }
}

async function fakeHTTPRequest() {
    return [
        {
            id: 'demo.device.1',
            name: 'Maschine 1',
            icon: '/assets/vendor/opendash/assets/smarthome/default_20.png',
            meta: {
                group: 'Hall 1',
            }
        },
        {
            id: 'demo.device.2',
            name: 'Maschine 2',
            icon: '/assets/vendor/opendash/assets/smarthome/default_20.png',
            meta: {
                group: 'Halle 1',
            }
        },
        {
            id: 'demo.device.3',
            name: 'Maschine 3',
            icon: '/assets/vendor/opendash/assets/smarthome/default_20.png',
            meta: {
                group: 'Halle 2',
            }
        },
        {
            id: 'demo.device.4',
            name: 'Maschine 4',
            icon: '/assets/vendor/opendash/assets/smarthome/default_20.png',
            meta: {
                group: 'Halle 3',
            }
        },
        {
            id: 'demo.device.5',
            name: 'Maschine 5',
            icon: '/assets/vendor/opendash/assets/smarthome/default_20.png',
            meta: {
                group: 'Halle 3',
            }
        },
        {
            id: 'demo.device.6',
            name: 'Maschine 6',
            icon: '/assets/vendor/opendash/assets/smarthome/default_20.png',
            meta: {
                group: 'Halle 3',
            }
        },
        {
            id: 'demo.sensor.1',
            parents: ['demo.device.1'],
            name: 'Power Meter',
            meta: {
                lowestHistoricalResolution: 3600,
                hasHistory: true,
                hasLive: true,
                status: true,
            },
            value: {
                date: new Date().valueOf(),
                value: [30],
            }
        },
        {
            id: 'demo.sensor.2-1',
            parents: ['demo.device.2'],
            name: 'Power Meter',
            meta: {
                lowestHistoricalResolution: 3600,
                hasHistory: true,
                hasLive: true,
                status: true,
            },
            value: {
                date: new Date().valueOf(),
                value: [30],
            }
        },
        {
            id: 'demo.sensor.2-2',
            parents: ['demo.device.2'],
            name: 'Temperatur',
            meta: {
                lowestHistoricalResolution: 3600,
                hasHistory: true,
                hasLive: true,
                status: true,
            },
            value: {
                date: new Date().valueOf(),
                value: [30],
            }
        },
        {
            id: 'demo.sensor.3',
            parents: ['demo.device.3'],
            name: 'Power Meter',
            meta: {
                lowestHistoricalResolution: 3600,
                hasHistory: true,
                hasLive: true,
                status: true,
            },
            value: {
                date: new Date().valueOf(),
                value: [30],
            }
        },
        {
            id: 'demo.sensor.4',
            parents: ['demo.device.4'],
            name: 'Power Meter',
            meta: {
                lowestHistoricalResolution: 3600,
                hasHistory: true,
                hasLive: true,
                status: true,
            },
            value: {
                date: new Date().valueOf(),
                value: [30],
            }
        },
        {
            id: 'demo.sensor.5-1',
            parents: ['demo.device.5'],
            name: 'Power Meter',
            meta: {
                lowestHistoricalResolution: 3600,
                hasHistory: true,
                hasLive: true,
                status: true,
            },
            value: {
                date: new Date().valueOf(),
                value: [30],
            }
        },
        {
            id: 'demo.sensor.5-2',
            parents: ['demo.device.5'],
            name: 'Temperatur',
            meta: {
                lowestHistoricalResolution: 3600,
                hasHistory: true,
                hasLive: true,
                status: true,
            },
            value: {
                date: new Date().valueOf(),
                value: [30],
            }
        },
        {
            id: 'demo.sensor.6',
            parents: ['demo.device.6'],
            name: 'Power Meter',
            meta: {
                lowestHistoricalResolution: 3600,
                hasHistory: true,
                hasLive: true,
                status: true,
            },
            value: {
                date: new Date().valueOf(),
                value: [30],
            }
        },
    ];
}
