Java.perform(function () {
    var MainActivity = Java.use('com.ctf.pathfinder.MainActivity');
    MainActivity.isHostValid.implementation = function (url) {
        console.log("✅ Bypassing host check for:", url);
        return true;
    };
});
