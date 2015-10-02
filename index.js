(function (global, __it) {

    global.it = function(description, fn, timeout) {

        if(fn.length) {
            return __it(description, fn, timeout);
        }

        return __it(description, function(done) {

            var res = fn();

            if(res && res.then instanceof Function) {
                res.then(done).catch(done.fail);
            } else {
                done();
                return res;
            }
        }, timeout);
    };

})(global, it);
