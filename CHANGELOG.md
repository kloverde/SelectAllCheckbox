# Release 3.0 (April 11, 2017)

* The select-all checkbox no longer changes the state of disabled checkboxes

* BREAKING CHANGE:  If you are using SelectAllCheckbox in an unusual scenario of ticking the
  select-all checkbox via script and then firing `change` to trigger the select-all action,
  you'll find that that no longer works.  IE has a known bug where it doesn't fire the change
  event when an indeterminate checkbox is clicked, meaning that until this release, this
  plugin was never fully compatible with IE.  To get around the issue, the plugin now listens
  for the `click` event on the select-all checkbox instead of `change`.  The other
  checkboxes continue to use the change event as they always have.

* The select-all checkbox initializes to the proper state (checked, unchecked, indeterminate)
  based on the state of the checkbox group when the plugin is initialized

* Added unit tests


## Release 2.0.1 (August 31, 2016)

* Fixed a bug where the 'select all' logic wasn't performing a check on the callback to
  see if it existed before calling it


## Release 2.0 (March 22, 2016)

This release contains the following breaking change:

* The callbacks which existed in version 1.0 no longer exist, and have been replaced by
  a single new callback:  onChangeCallback.  As the name implies, this callback's
  behavior differs from the callbacks of version 1.0.  Unlike the 1.0 callbacks which
  fired on click, onChangeCallback fires on change.  The prototype of the new callback
  is also different:  the first argument is now an array of jQuery objects.


## Release 1.0 (March 18, 2016)

* First release
