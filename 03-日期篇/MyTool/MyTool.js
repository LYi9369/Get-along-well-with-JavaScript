(function (w) {
    w.myTool = {
        $: function $(id) {
            return typeof id === 'string' ? document.getElementById(id) : null;
        }
    };
})(window);
