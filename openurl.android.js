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

var application = require("application");

var getContext = function() {
    if (application.android.context) {
        return (application.android.context);
    }
    var ctx = java.lang.Class.forName("android.app.AppGlobals").getMethod("getInitialApplication", null).invoke(null, null);
    if (ctx) return ctx;

    ctx = java.lang.Class.forName("android.app.ActivityThread").getMethod("currentApplication", null).invoke(null, null);
    return ctx;
};


var OpenUrl = function(Location, context) {
    var intent = new android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse(Location));
    if (!context) {
        context = getContext();
        intent.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
    }

    try {
        context.startActivity(intent);
    } catch (e) {
        // We Don't do anything with an error.  We just silently ignore it.
        return false;
    }
    return true;
};

module.exports = OpenUrl;