# NativeScript OpenUrl

A NativeScript module providing basic open url action for Android and iOS.

## License

This is released under the MIT License, meaning you are free to include this in any type of program -- However for entities that need a support and/or a commercial license please contact me (nathan@master-technology.com).

## Installation

Run `tns plugin add nativescript-openurl` from inside your project's main directory


## Usage

To use the openurl module you must first `require()` it.

```js
var OpenUrl = require( "nativescript-openurl", context );
```

### Methods
#### OpenUrl(Location, \<context>);
##### Parameters
* Location: Location you want to open in a browser
* Context: Android only - Optional, if you don't provide a context it will automatically determine a valid context  
* RETURNS: False if failed to open, true if opening.
 
```js
// my-page.js
var OpenUrl = require("nativescript-openurl");
OpenUrl("http://www.master-technology.com");

```

This should open your browser with that location.
