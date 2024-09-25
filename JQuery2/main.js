  $(document).ready(function () {
            // Image click to show overlay
            $(".sidebar img").on("click", function () {
                let imgSrc = $(this).attr("src");
                $("#overlay-img").attr("src", imgSrc);
                $(".overlay").fadeIn();
            });

            // Close overlay
            $(".close-overlay").on("click", function () {
                $(".overlay").fadeOut();
            });

            // Fullscreen toggle using Fullscreen API
            $(".fullscreen-toggle").on("click", function () {
                let imgElement = document.getElementById("overlay-img");
                if (!document.fullscreenElement) {
                    if (imgElement.requestFullscreen) {
                        imgElement.requestFullscreen();
                    } else if (imgElement.mozRequestFullScreen) { // Firefox
                        imgElement.mozRequestFullScreen();
                    } else if (imgElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
                        imgElement.webkitRequestFullscreen();
                    } else if (imgElement.msRequestFullscreen) { // IE/Edge
                        imgElement.msRequestFullscreen();
                    }
                } else {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    }
                }
            });

            // Image navigation - Next
            $(".next").on("click", function () {
                let currentSrc = $("#overlay-img").attr("src");
                let images = $(".sidebar img");
                let currentIndex = images.index($("img[src='" + currentSrc + "']"));
                let nextIndex = (currentIndex + 1) % images.length;
                $("#overlay-img").attr("src", images.eq(nextIndex).attr("src"));
            });

            // Image navigation - Prev
            $(".prev").on("click", function () {
                let currentSrc = $("#overlay-img").attr("src");
                let images = $(".sidebar img");
                let currentIndex = images.index($("img[src='" + currentSrc + "']"));
                let prevIndex = (currentIndex - 1 + images.length) % images.length;
                $("#overlay-img").attr("src", images.eq(prevIndex).attr("src"));
            });
        });