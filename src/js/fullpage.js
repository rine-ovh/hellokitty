$(document).ready(function() {
    new fullpage('#fullpage', {
        autoScrolling: true,
        licenseKey: 'gplv3-license',
        menu: '#menu',
        anchors: ['introduction','presentation', 'varities', 'dark-mode'],
        scrollOverflow: true,
        scrolloverflowmacstyle: false,
    });

});