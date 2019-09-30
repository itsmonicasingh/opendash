import _ from "lodash";
import moment from "moment";
import Parse from "parse";

Parse.serverURL = "https://parseapi.back4app.com";
Parse.initialize(
    "yZaq7fXs1LeiWRIg92FOEV9J9eUSEAQismJCT0Sd",
    "9NVQksTB150MsdBf4aQcnXboXwMIMTrOXlReT0Gk"
);

const SensingUpload = Parse.Object.extend("SensingUpload");

export default class DataAdapter {
    async init(ctx) {
        ctx.create({
            id: "activity",
            name: "Activity",
            meta: {},
            valueTypes: [
                {
                    name: "Activity",
                    type: "String",
                    unit: "-"
                },
                {
                    name: "Accuracy",
                    type: "Number",
                    unit: "%"
                }
            ]
        });

        ctx.create({
            id: "gActivityTransition",
            name: "gActivityTransition",
            meta: {},
            valueTypes: [
                {
                    name: "Start",
                    type: "Number",
                    unit: "ms"
                },
                {
                    name: "Duration",
                    type: "Number",
                    unit: "ms"
                },
                {
                    name: "Type",
                    type: "String",
                    unit: "Activity"
                }
            ]
        });
    }

    async history(ctx, options) {
        const result = [];

        const query = new Parse.Query(SensingUpload)
            .equalTo("user", "Saja")
            .equalTo("name", options.id)
            .limit(10000);

        const data = await query.find();

        const values = data.map(object => object.toJSON().values);

        if (options.id === "activity") {
            for (const value of values) {
                for (const actualValue of value) {
                    result.push(actualValue);
                }
            }
        }

        console.log(result);

        return result;

        // if (options) {
        //     if (options.start && options.end) {
        //         valueCount = options.start.diff(options.end, "h");
        //         d = options.start.clone();
        //     }

        //     if (options.since) {
        //         valueCount = moment().diff(options.since, "h");
        //         d = options.since.clone();
        //     }
        // }

        // for (let i = 0; i < valueCount; i++) {
        //     d.add(1, "h");
        //     v = Math.abs(_.random(v - 3, v + 3));
        //     result.push({
        //         date: d.clone().valueOf(),
        //         value: [v]
        //     });
        // }

        // return result;
    }

    async update(ctx, payload) {
        return true;
    }
}

async function fakeHTTPRequest() {
    return [
        {
            id: "demo.device.1",
            name: "Maschine 1",
            icon: "/assets/vendor/opendash/assets/smarthome/default_20.png",
            meta: {
                group: "Hall 1"
            }
        },
        {
            id: "demo.device.2",
            name: "Maschine 2",
            icon: "/assets/vendor/opendash/assets/smarthome/default_20.png",
            meta: {
                group: "Halle 1"
            }
        },
        {
            id: "demo.device.3",
            name: "Maschine 3",
            icon: "/assets/vendor/opendash/assets/smarthome/default_20.png",
            meta: {
                group: "Halle 2"
            }
        },
        {
            id: "demo.device.4",
            name: "Maschine 4",
            icon: "/assets/vendor/opendash/assets/smarthome/default_20.png",
            meta: {
                group: "Halle 3"
            }
        },
        {
            id: "demo.device.5",
            name: "Maschine 5",
            icon: "/assets/vendor/opendash/assets/smarthome/default_20.png",
            meta: {
                group: "Halle 3"
            }
        },
        {
            id: "demo.device.6",
            name: "Maschine 6",
            icon: "/assets/vendor/opendash/assets/smarthome/default_20.png",
            meta: {
                group: "Halle 3"
            }
        },
        {
            id: "demo.sensor.1",
            parents: ["demo.device.1"],
            name: "Power Meter",
            meta: {
                lowestHistoricalResolution: 3600,
                hasHistory: true,
                hasLive: true,
                status: true
            },
            value: {
                date: new Date().valueOf(),
                value: [30]
            }
        },
        {
            id: "demo.sensor.2-1",
            parents: ["demo.device.2"],
            name: "Power Meter",
            meta: {
                lowestHistoricalResolution: 3600,
                hasHistory: true,
                hasLive: true,
                status: true
            },
            value: {
                date: new Date().valueOf(),
                value: [30]
            }
        },
        {
            id: "demo.sensor.2-2",
            parents: ["demo.device.2"],
            name: "Temperatur",
            meta: {
                lowestHistoricalResolution: 3600,
                hasHistory: true,
                hasLive: true,
                status: true
            },
            value: {
                date: new Date().valueOf(),
                value: [30]
            }
        },
        {
            id: "demo.sensor.3",
            parents: ["demo.device.3"],
            name: "Power Meter",
            meta: {
                lowestHistoricalResolution: 3600,
                hasHistory: true,
                hasLive: true,
                status: true
            },
            value: {
                date: new Date().valueOf(),
                value: [30]
            }
        },
        {
            id: "demo.sensor.4",
            parents: ["demo.device.4"],
            name: "Power Meter",
            meta: {
                lowestHistoricalResolution: 3600,
                hasHistory: true,
                hasLive: true,
                status: true
            },
            value: {
                date: new Date().valueOf(),
                value: [30]
            }
        },
        {
            id: "demo.sensor.5-1",
            parents: ["demo.device.5"],
            name: "Power Meter",
            meta: {
                lowestHistoricalResolution: 3600,
                hasHistory: true,
                hasLive: true,
                status: true
            },
            value: {
                date: new Date().valueOf(),
                value: [30]
            }
        },
        {
            id: "demo.sensor.5-2",
            parents: ["demo.device.5"],
            name: "Temperatur",
            meta: {
                lowestHistoricalResolution: 3600,
                hasHistory: true,
                hasLive: true,
                status: true
            },
            value: {
                date: new Date().valueOf(),
                value: [30]
            }
        },
        {
            id: "demo.sensor.6",
            parents: ["demo.device.6"],
            name: "Power Meter",
            meta: {
                lowestHistoricalResolution: 3600,
                hasHistory: true,
                hasLive: true,
                status: true
            },
            value: {
                date: new Date().valueOf(),
                value: [30]
            }
        }
    ];
}
