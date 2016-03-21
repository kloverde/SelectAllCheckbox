SelectAllCheckbox
=================

See LICENSE for this software's licensing terms.

SelectAllCheckbox is a jQuery plugin which makes it easy to create "select all" checkboxes for checkbox groups.


## Features

* Select/deselect all checkboxes in a group via a select-all checkbox which you designate
* When checkboxes are individually checked/unchecked, the select-all checkbox's status updates accordingly between checked, indeterminate (partially checked) and checked
* Indeterminate mode can be disabled via configuration if desired
* Supports any number of checkbox groups
* Configuration accepts a callback for the select-all checkbox and a callback for its children
* The callback receives the changed checkbox as an array of jQuery objects, plus the status of the checkbox group (all/some/none checked)


## Using

Invoke the plugin on the select-all checkbox.  There are three settings, all of which are optional:

| Property | Description | Default Value |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `checkboxesName` | The name of the checkbox group to bind the select-all checkbox to.  This is the "name" attribute in your HTML.  If you have more than one select-all checkbox group, then you must provide a value. | "checkboxes" |
| `onChangeCallback` | A callback to execute when a checkbox's state changes.  The plugin captures the `change` event and executes this function as its last action of the event handling.  If you want this function to fire after changing a checkbox's value via script, you must manually fire the `change` event (jQuery wonn't do it for you). | none |
| `useIndeterminate` | A boolean which determines whether the select-all checkbox displays as partially checked when only a subset of checkboxes are checked | true |


The callback functions receives two arguments:

1.  The affected checkboxes as an array of jQuery objects 
2.  A string representing how many checkboxes in the group are checked.  Values are `none`, `some` and `all`.


#### Example


```javascript

$( "#selectAll" ).selectAllCheckbox( {
   checkboxesName   : "theCheckboxes",
   onChangeCallback : function( checkboxes, checkedState ) { stuff },
} );

```

See the included HTML file for a complete demo.


## Thanks

Do you like this library?  Want to toss a few bucks my way to say thanks?  I accept donations at https://paypal.me/KurtisLoVerde/5.  Thank you for your support!
