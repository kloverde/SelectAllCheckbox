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
         // and "all".  JQuery does not fire a change event when you change a checkbox's
         // state via script.  If you want the callback to execute in that scenario (and
         // you'll want it to if you're using indeterminate mode), you must trigger the
         // change event manually with $("#id").trigger("change").
         onChangeCallback : null,

         // Controls whether the select-all checkbox displays as partially checked when a
         // subset of checkboxes are checked
         useIndeterminate : true
      }, options );

      const GROUP_STATE_NONE = "none",
            GROUP_STATE_SOME = "some",
            GROUP_STATE_ALL  = "all";

      const CHECKBOX_GROUP_SELECTOR = "input[type='checkbox'][name='" + settings.checkboxesName + "']";
      const PROP_CHECKED = "checked";

      const allBox = this;

      allBox.change( function() {
         const isAllChecked = allBox.prop( PROP_CHECKED );
         const changedBoxes = [];

         $( CHECKBOX_GROUP_SELECTOR ).each( function() {
            const jqueryThis = $( this );
            const isThisChecked = jqueryThis.prop( PROP_CHECKED );

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

            setParentCheckboxState( status );

            if( typeof settings.onChangeCallback === "function" ) {
               const changedBoxes = [1];
               changedBoxes[0] = box;

               settings.onChangeCallback( changedBoxes, status );
            }
         } );
      } );

      function setParentCheckboxState( status ) {
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
