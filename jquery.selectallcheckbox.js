/*
 * SelectAllCheckbox
 * https://www.github.com/kloverde/jquery-SelectAllCheckbox
 *
 * This software is licensed under the 3-clause BSD license.
 *
 * Copyright (c) 2016 Kurtis LoVerde
 * All rights reserved
 */

(function( $ ) {
   $.fn.selectAllCheckbox = function( options ) {
      var settings = $.extend( {
         // The HTML "name" attribute of the checkbox group
         checkboxesName : "checkboxes",

         // A user-defined function to execute when a checkbox in the group changes state.
         // The function must accept two arguments:  the first is an array of the changed
         // checkboxes as jQuery objects.  The second argument is a string representing
         // the checked state of the checkbox group:  possible values are "none", "some"
         // and "all".
         onChangeCallback : null,

         // Controls whether the select-all checkbox displays as partially checked when a
         // subset of checkboxes are checked
         useIndeterminate : true
      }, options );

      var GROUP_STATE_NONE = "none",
          GROUP_STATE_SOME = "some",
          GROUP_STATE_ALL  = "all";

      var CHECKBOX_GROUP_SELECTOR = "input[type='checkbox'][name='" + settings.checkboxesName + "']";
      var PROP_CHECKED = "checked";

      var allBox = this;

      // The select-all checkbox's change handler:
      // Selects or deselects all checkboxes and invokes the user-supplied callback.
      // If you set a checkbox's state via script, you must trigger change() on the
      // modified checkbox to ensure the select-all checkbox's state is updated.
      // JQuery does not fire change() for you.
      allBox.change( function() {
         var isAllChecked = allBox.prop( PROP_CHECKED );
         var changedBoxes = [];

         $( CHECKBOX_GROUP_SELECTOR ).each( function() {
            var jqueryThis = $( this );
            var isThisChecked = jqueryThis.prop( PROP_CHECKED );

            if( isThisChecked !== isAllChecked ) {
               jqueryThis.prop( PROP_CHECKED, isAllChecked );
               changedBoxes.push( jqueryThis );
            }
         } );

         if( changedBoxes.length > 0 ) {
            settings.onChangeCallback( changedBoxes, isAllChecked ? GROUP_STATE_ALL : GROUP_STATE_NONE );
         }
      } );

      $( CHECKBOX_GROUP_SELECTOR ).each( function() {
         var box = $( this );

         // The checkbox change handler:
         // Updates the select-all checkbox's state and invokes the user-supplied callback.
         // If you set a checkbox's state via script, you must trigger change() on the
         // modified checkbox to ensure the select-all checkbox's state is updated.
         // JQuery does not fire change() for you.
         box.change( function() {
            var someChecked    = false,
                someNotChecked = false;

            var status = GROUP_STATE_NONE;

            $( CHECKBOX_GROUP_SELECTOR ).each( function() {
               if( $(this).prop(PROP_CHECKED) === true ) {
                  someChecked = true;
               } else {
                  someNotChecked = true;
               }
            } );

            if( someChecked && someNotChecked ) {
               status = GROUP_STATE_SOME;
            } else if( someChecked && !someNotChecked ) {
               status = GROUP_STATE_ALL;
            } else if( !someChecked ) {
               status = GROUP_STATE_NONE;
            }

            updateSelectAllCheckboxState( status );

            if( typeof settings.onChangeCallback === "function" ) {
               var changedBoxes = [ box ];
               settings.onChangeCallback( changedBoxes, status );
            }
         } );
      } );

      // Sets the select-all checkbox to checked, unchecked or partially checked.
      // If you set a checkbox's state via script, you must trigger change() on the
      // modified checkbox to ensure the select-all checkbox's state is updated.
      // JQuery does not fire change() for you.
      function updateSelectAllCheckboxState( status ) {
         if( status === "some" ) {
            allBox.prop( PROP_CHECKED, false );

            if( settings.useIndeterminate ) {
               allBox.prop( "indeterminate", true );
            }
         } else if( status === "all" ) {
            allBox.prop( "indeterminate", false );
            allBox.prop( PROP_CHECKED, true );
         } else if( status === "none" ) {
            allBox.prop( "indeterminate", false );
            allBox.prop( PROP_CHECKED, false );
         }
      }

      return allBox;
   };
}( jQuery ));
