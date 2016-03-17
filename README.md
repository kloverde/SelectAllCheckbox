SelectAllCheckbox
=================

See LICENSE for this software's licensing terms.

SelectAllCheckbox is a jQuery plugin which makes it easy to create "select all"
checkboxes for checkbox groups.

## Features

* Select/deselect all checkboxes in a group via a select-all checkbox which you designate
* When checkboxes are individually checked/unchecked, the select-all checkbox's status updates accordingly between checked, indeterminate (partially checked) and checked
* Indeterminate mode can be disabled via configuration if desired
* Supports any number of checkbox groups
* Configuration accepts a callback for the select-all checkbox and a callback for its children
* Callbacks receive the clicked checkbox as an object, plus the status of the checkbox group (all/some/none checked)


## Using

Invoke the plugin on the select-all checkbox.  There are four settings, all of which are optional:

| Property          | Description  |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `checkboxesName`    | The name of the checkbox group to bind the select-all checkbox to.  This is the "name" attribute in your HTML.  The default value is "checkboxes". |
| `selectAllCallback` | A callback to execute when the select-all checkbox is clicked.  There is no default value. |
| `selectCallback`    | A callback to execute when one of the checkboxes (other than select-all) is clicked.  There is no default value. |
| `useIndeterminate`  | A boolean which determines whether the select-all checkbox displays as partially checked when only a subset of checkboxes are checked.  The default value is `true`. |


The callback functions receive two arguments:

1.  The clicked checkbox, as an object 
2.  A string representing how many checkboxes in the group are checked.  Values are `some`, `all` and `none` (note:  `some` is not returned for the select-all callback)


#### Example


```javascript

$( "#selectAllCheckbox" ).selectAllCheckbox( {
   checkboxesName    : "checkboxes",
   selectAllCallback : function( checkbox, checkedState ) { stuff },
   selectCallback    : functionName
});

```

See the included HTML file for a complete demo.


## Thanks

Do you like this library?  Want to toss a few bucks my way to say thanks?  I accept donations at https://paypal.me/KurtisLoVerde/5.  Or, a simple e-mail saying thanks works just as well (I can be reached at github@loverde.org).  Happy coding!
