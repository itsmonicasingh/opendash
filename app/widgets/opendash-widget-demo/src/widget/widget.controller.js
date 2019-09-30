let $data;

// Widget Controller
// Learn more at: http://docs.opendash.de/guides/widgets.html#widgetcontroller

export default class WidgetController {

  static get $inject() {return ['opendash/services/data', '$element', '$scope', 'moment']; }

  constructor(dataService, $element, $scope, moment) {

    $data = dataService;
  }

  // Angular Component Lifecycle Hook
  // Anything related to this.config or this.state should happen after this hook is called
  $onInit() {
    
    // Access the widget config
    console.log(this.config);

    // Disable loading state
    this.state.loading = false

    // 2. CREATE A LOCAL VAR AND EXCESS IT IN THE WIDGET.TEMPLATE.HTML USING $ctrl
    this.test = 'xxx'

    // Tell open.DASH that the configuration is invalid
    // open.DASH will ask the user to configurate the widget
    // this.state.config = false;

    // Make the user aware of the widget by highlighting it
    // this.state.alert = true;
  }
}
