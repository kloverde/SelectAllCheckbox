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
