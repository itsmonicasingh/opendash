// Styles:
import "../scss/style.scss";

// open.DASH:
import instance from "opendash";

// Plugins:
// import eudPlugin from 'opendash/plugins/eud';

// Translations:
import deTranslation from "opendash/translations/de";

// User Adapter:
import userAdapter from "@opendash/user-adapter-local";

// Data Adapter:
import demoDataAdapter from "./example.data-adapter.js";

// Widgets:
// none

// Config:
// instance.env('OD-EVENTS-LOG', true);

// Plugins:
// instance.use(eudPlugin);

// Translations:
instance.registerTranslation(deTranslation);

instance.registerUserAdapter(userAdapter);

instance.registerDataAdapter(demoDataAdapter);

//1. CREATE THIS FIRST
const widgets = [require("../widgets/opendash-widget-demo").default];

instance.registerWidgets(widgets);

// App initialisieren:
instance.start();

// App initialisieren:
const app = angular.module("app", [instance.name]);

app.run([
    "opendash/services/data",
    async $data => {
        await $data.wait();

        const history = await $data
            .get("activity")
            .history({ value: 100, unit: "d" });

        console.log(history);
    }
]);
