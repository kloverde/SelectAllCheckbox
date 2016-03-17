SelectAllCheckbox
=================

See LICENSE for this software's licensing information.

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

Invoke the plugin on the select-all checkbox.  In the configuration, supply the name of your checkbox group (the "name" attribute in your HTML), and the callbacks you want to execute, if any.

```javascript

$( "#selectAllCheckbox" ).selectAllCheckbox(
      {
         "checkboxesName"    : "checkboxes",
         "selectAllCallback" : function() { alert("wee!"); },
         "selectCallback"    : functionName
      }
);

```

See the included HTML file for a complete demo.


## Thanks

Do you like this library?  Want to toss a few bucks my way to say thanks?  I accept donations at https://paypal.me/KurtisLoVerde/5.  Or, a simple e-mail saying thanks works just as well (github@loverde.org).  Happy coding!