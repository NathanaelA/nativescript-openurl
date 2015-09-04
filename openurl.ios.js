/***********************************************************************************
 * (c) 2015, Master Technology
 * Licensed under the MIT license or contact me for a Commercial or Support License
 *
 * I do contract work in most languages, so let me solve your problems!
 *
 * Any questions please feel free to email me or put a issue up on the github repo.
 * Version 1.0.1                                       Nathan@master-technology.com
 **********************************************************************************/
"use strict";

var openUrl = function(Location) {
    try {
        var url = NSURL.URLWithString(Location.trim());
        if (UIApplication.sharedApplication().canOpenURL(url)) {
            return UIApplication.sharedApplication().openURL(url);
        }
    }
    catch (e) {
        // We Don't do anything with an error.  We just output it
        console.error("Error in OpenURL", e);
    }
    return false;
};

module.exports = openUrl;