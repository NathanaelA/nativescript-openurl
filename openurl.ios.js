/***********************************************************************************
 * (c) 2015, Master Technology
 * Licensed under the MIT license or contact me for a Commercial or Support License
 *
 * I do contract work in most languages, so let me solve your problems!
 *
 * Any questions please feel free to email me or put a issue up on the github repo.
 * Version 1.0.0                                       Nathan@master-technology.com
 **********************************************************************************/
"use strict";

var OpenUrl = function(Location) {
    var url = NSURL.URLWithString(Location);
    if (UIApplication.sharedApplication().canOpenURL(url)) {
        return UIApplication.sharedApplication().openURL(url);
    }
    return false;
};

module.exports = OpenUrl;