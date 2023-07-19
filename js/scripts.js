// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {

    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
        $("body").addClass("iOS");
    } else {
        $("body").addClass("non_iOS");
    }

    // wait until window, stylesheets, images, links, and other media assets are loaded
    window.onload = function() {
            
        gsap.from(".animate", {
            duration: 0.6,
            y: 24,
            autoAlpha: 0,
            ease: "power1.Out",
            stagger: {
                grid: "auto",
                from: "start",
                each: 0.1
            }
        });
//
//        var childSplit = new SplitText("h1", {
//          type: "lines",
//          linesClass: "split-child"
//        });
//        
//        var parentSplit = new SplitText("h1", {
//          type: "lines",
//          linesClass: "split-parent"
//        });
//        
//        gsap.from(childSplit.lines, {
//          duration: 0.9,
//          yPercent: 200,
//          stagger: 0.24,
//          autoAlpha: 0
//        });
//
        const lightbox = GLightbox({
            selector: ".glightbox",
            autoplayVideos: false,
            autofocusVideos: true,
            videosWidth: "1280px",
            closeOnOutsideClick: false
        });

    };

});