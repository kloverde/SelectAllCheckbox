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
         checkboxesName    : "checkboxes",
         useIndeterminate  : true,
         selectAllCallback : null,
         selectCallback    : null
      }, options );

      var checkboxesSelector = "input[type='checkbox'][name='" + settings.checkboxesName + "']";
      var allBox = this;

      allBox.click( function() {
         $( checkboxesSelector ).each( function() {
            $( this ).prop( "checked", allBox.prop("checked") );
         } );

         if( typeof settings.selectAllCallback === "function" ) {
            settings.selectAllCallback( allBox, allBox.prop("checked") ? "all" : "none" );
         }
      } );

      $( checkboxesSelector ).each( function() { 
         $( this ).click( function() {
            var someChecked    = false,
                someNotChecked = false;

            var status = "none";

            $( checkboxesSelector ).each( function() {
               if( $(this).prop("checked") === true ) {
                  someChecked = true;
               } else {
                  someNotChecked = true;
               }
            } );

            if( someChecked && someNotChecked ) {
               status = "some";
            } else if( someChecked && !someNotChecked ) {
               status = "all";
            } else if( !someChecked ) {
               status = "none";
            }

            setParentCheckboxState( status );

            if( typeof settings.selectCallback === "function" ) {
               settings.selectCallback( this, status );
            }
         } );
      } );

      function setParentCheckboxState( status ) {
         if( status === "some" ) {
            allBox.prop( "checked", false );

            if( settings.useIndeterminate ) {
               allBox.prop( "indeterminate", true );
            }
         } else if( status === "all" ) {
            allBox.prop( "indeterminate", false );
            allBox.prop( "checked", true );
         } else if( status === "none" ) {
            allBox.prop( "indeterminate", false );
            allBox.prop( "checked", false );
         }
      }

      return this;
   };
}( jQuery ));
