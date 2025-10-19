jQuery(function(a) {
    a(window).on("scroll", function() {
        if (a(this).scrollTop() > 150) {
            a(".navbar-area").addClass("is-sticky")
        } else {
            a(".navbar-area").removeClass("is-sticky")
        }
    });
    jQuery(".mean-menu").meanmenu({
        meanScreenWidth: "1199"
    });
    a(".language-option").each(function() {
        var i = a(this);
        i.find(".lang-name").html(i.find(".language-dropdown-menu a:nth-child(1)").text());
        var h = a(".language-dropdown-menu").children("a");
        i.find(".language-dropdown-menu").on("click", "a", function() {
            h.removeClass("selected");
            a(this).addClass("selected");
            a(this).closest(".language-option").find(".lang-name").html(a(this).text())
        })
    });
    a(function() {
        a("#sidemenu-nav").metisMenu()
    });
    a(".burger-menu").on("click", function() {
        a(this).toggleClass("active");
        a(".main-content").toggleClass("hide-sidemenu-area");
        a(".sidemenu-area").toggleClass("toggle-sidemenu-area");
        a(".top-navbar").toggleClass("toggle-navbar-area")
    });
    a(".responsive-burger-menu").on("click", function() {
        a(".responsive-burger-menu").toggleClass("active");
        a(".sidemenu-area").toggleClass("active-sidemenu-area")
    });
    a(".chat-list-header .header-right .favorite").on("click", function() {
        a(this).toggleClass("active")
    });
    a(".main-banner-area").mousemove(function(h) {
        var k = a(window).width();
        var l = a(window).height();
        var m = h.pageX - this.offsetLeft;
        var n = h.pageY - this.offsetTop;
        var i = m - k / 2;
        var j = n - l / 2;
        a(".main-banner-content").each(function() {
            var o = a(this).attr("data-speed");
            if (a(this).attr("data-revert")) {
                o *= -0.4
            }
            TweenMax.to(a(this), 1, {
                x: (1 - i * o),
                y: (1 - j * o)
            })
        })
    });
    a(".main-banner-area-with-bg-image").mousemove(function(h) {
        var k = a(window).width();
        var l = a(window).height();
        var m = h.pageX - this.offsetLeft;
        var n = h.pageY - this.offsetTop;
        var i = m - k / 2;
        var j = n - l / 2;
        a(".main-banner-content-with-search").each(function() {
            var o = a(this).attr("data-speed");
            if (a(this).attr("data-revert")) {
                o *= -0.4
            }
            TweenMax.to(a(this), 1, {
                x: (1 - i * o),
                y: (1 - j * o)
            })
        })
    });
    a(".main-banner-area-wrap").mousemove(function(h) {
        var k = a(window).width();
        var l = a(window).height();
        var m = h.pageX - this.offsetLeft;
        var n = h.pageY - this.offsetTop;
        var i = m - k / 2;
        var j = n - l / 2;
        a(".main-banner-content-wrap, .main-banner-wrap-image").each(function() {
            var o = a(this).attr("data-speed");
            if (a(this).attr("data-revert")) {
                o *= -0.4
            }
            TweenMax.to(a(this), 1, {
                x: (1 - i * o),
                y: (1 - j * o)
            })
        })
    });
    a(".top-category-slides").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoHeight: true,
        smartSpeed: 500,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1200: {
                items: 6
            }
        }
    });
    a(".review-slides").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoHeight: true,
        smartSpeed: 500,
        margin: 25,
        autoplayHoverPause: true,
        autoplay: true,
        navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });
    a(".blog-slides").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoHeight: true,
        smartSpeed: 500,
        margin: 25,
        autoplayHoverPause: true,
        autoplay: true,
        navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 1
            },
            1200: {
                items: 2
            }
        }
    });
    a(".partner-slides").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoHeight: true,
        smartSpeed: 500,
        margin: 25,
        autoplayHoverPause: true,
        autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 6
            }
        }
    });
    a(".popup-youtube").magnificPopup({
        disableOn: 320,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    // a(".newsletter-form").validator().on("submit", function(h) {
    //     if (h.isDefaultPrevented()) {
    //         c();
    //         f(false, "Please enter your email correctly.")
    //     } else {
    //         h.preventDefault()
    //     }
    // });
    // function b(h) {
    //     if (h.result === "success") {
    //         d()
    //     } else {
    //         c()
    //     }
    // }
    // function d() {
    //     a(".newsletter-form")[0].reset();
    //     f(true, "Thank you for subscribing!");
    //     setTimeout(function() {
    //         a("#validator-newsletter").addClass("hide")
    //     }, 4000)
    // }
    // function c() {
    //     a(".newsletter-form").addClass("animated shake");
    //     setTimeout(function() {
    //         a(".newsletter-form").removeClass("animated shake")
    //     }, 1000)
    // }
    // function f(j, h) {
    //     if (j) {
    //         var i = "validation-success"
    //     } else {
    //         var i = "validation-danger"
    //     }
    //     a("#validator-newsletter").removeClass().addClass(i).text(h)
    // }
    // a(".newsletter-form").ajaxChimp({
    //     url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
    //     callback: b
    // });



    // a(".newsletter-form").validator().on("submit", function (h) {
    //     if (h.isDefaultPrevented()) { 
    //         c(); 
    //         f(false, "Please fill out all fields correctly."); 
    //     } else { 
    //         h.preventDefault();
    
    //         var form = a(this);
    //         var name = form.find("input[name='name']").val().trim();
    //         var age = form.find("input[name='age']").val().trim();
    //         var gender = form.find("select[name='gender']").val();
    //         var nationality = form.find("input[name='nationality']").val().trim();
    //         var whatsapp = form.find("input[name='whatsapp']").val().trim();
    //         var whatsappPattern = /^\+?\d{7,15}$/;
    
    //         if (!name || !age || !gender || !nationality || !whatsapp) {
    //             c(); 
    //             f(false, "All fields are required.");
    //             return false;
    //         }
    
    //         if (!whatsappPattern.test(whatsapp)) {
    //             c();
    //             f(false, "Please enter a valid WhatsApp number.");
    //             return false;
    //         }
    
    //         // 构建消息
    //         var message = "EEZA Form Submission:\n" +
    //                       "Name: " + name + "\n" +
    //                       "Age: " + age + "\n" +
    //                       "Gender: " + gender + "\n" +
    //                       "Nationality: " + nationality + "\n" +
    //                       "WhatsApp: " + whatsapp;
    
    //         // 使用 encodeURIComponent
    //         var whatsappUrl = "https://wa.me/61412345678?text=" + encodeURIComponent(message); // 替换为接收号码
    //         window.open(whatsappUrl, "_blank");
    
    //         // 重置表单
    //         form[0].reset();
    //         f(true, "Your information is ready to send via WhatsApp.");
    //         setTimeout(function () { a("#validator-newsletter").addClass("hide"); }, 4000);
    
    //         return false; // 阻止默认提交，防止 validator 内部报错
    //     }
    // });
    





    function e() {
        var i = new Date("September 20, 2025 17:00:00 PDT");
        var i = (Date.parse(i)) / 1000;
        var l = new Date();
        var l = (Date.parse(l) / 1000);
        var n = i - l;
        var h = Math.floor(n / 86400);
        var j = Math.floor((n - (h * 86400)) / 3600);
        var k = Math.floor((n - (h * 86400) - (j * 3600)) / 60);
        var m = Math.floor((n - (h * 86400) - (j * 3600) - (k * 60)));
        if (j < "10") {
            j = "0" + j
        }
        if (k < "10") {
            k = "0" + k
        }
        if (m < "10") {
            m = "0" + m
        }
        a("#days").html(h + "<span>Days</span>");
        a("#hours").html(j + "<span>Hours</span>");
        a("#minutes").html(k + "<span>Minutes</span>");
        a("#seconds").html(m + "<span>Seconds</span>")
    }
    setInterval(function() {
        e()
    }, 0);
    a(".input-counter").each(function() {
        var m = jQuery(this)
          , j = m.find('input[type="text"]')
          , i = m.find(".plus-btn")
          , h = m.find(".minus-btn")
          , l = j.attr("min")
          , k = j.attr("max");
        i.on("click", function() {
            var o = parseFloat(j.val());
            if (o >= k) {
                var n = o
            } else {
                var n = o + 1
            }
            m.find("input").val(n);
            m.find("input").trigger("change")
        });
        h.on("click", function() {
            var o = parseFloat(j.val());
            if (o <= l) {
                var n = o
            } else {
                var n = o - 1
            }
            m.find("input").val(n);
            m.find("input").trigger("change")
        })
    });
    a(".blog-more-item").slice(0, 6).show();
    a("#loadmore").on("click", function(h) {
        h.preventDefault();
        a(".blog-more-item:hidden").slice(0, 3).slideDown()
    });
    a(".blog-more-item-two").slice(0, 8).show();
    a("#loadmore").on("click", function(h) {
        h.preventDefault();
        a(".blog-more-item-two:hidden").slice(0, 3).slideDown()
    });
    a(".job-more-item").slice(0, 8).show();
    a("#loadmore").on("click", function(h) {
        h.preventDefault();
        a(".job-more-item:hidden").slice(0, 3).slideDown()
    });
    a(".candidates-more-item").slice(0, 6).show();
    a("#loadmore").on("click", function(h) {
        h.preventDefault();
        a(".candidates-more-item:hidden").slice(0, 3).slideDown()
    });
    a(".featured-candidates-more-item").slice(0, 6).show();
    a("#loadmore").on("click", function(h) {
        h.preventDefault();
        a(".featured-candidates-more-item:hidden").slice(0, 1).slideDown()
    });
    a(".employer-more-item").slice(0, 9).show();
    a("#loadmore").on("click", function(h) {
        h.preventDefault();
        a(".employer-more-item:hidden").slice(0, 3).slideDown()
    });
    a(".job-list-map-sticky").stickySidebar({
        topSpacing: 100,
        bottomSpacing: 100
    });
    a(".featured-candidates-map-sticky").stickySidebar({
        topSpacing: 100,
        bottomSpacing: 100
    });
    a(".job-details-sticky").stickySidebar({
        topSpacing: 90,
        bottomSpacing: 90
    });
    a(".candidates-details-sticky").stickySidebar({
        topSpacing: 90,
        bottomSpacing: 90
    });
    a(".employers-details-sticky").stickySidebar({
        topSpacing: 90,
        bottomSpacing: 90
    });
    a(function() {
        a('[data-bs-toggle="tooltip"]').tooltip()
    });
    AOS.init();
    a(".selectize-filter").selectize({
        create: true,
        sortField: "text"
    });
    a(".sorting-filter").selectize({
        create: true,
        sortField: "text"
    });
    if (a(".wow").length) {
        var g = new WOW({
            mobile: false
        });
        g.init()
    }
    a(".odometer").appear(function(h) {
        var i = a(".odometer");
        i.each(function() {
            var j = a(this).attr("data-count");
            a(this).html(j)
        })
    });
    a(window).on("scroll", function() {
        var h = a(window).scrollTop();
        if (h > 600) {
            a(".go-top").addClass("active")
        }
        if (h < 600) {
            a(".go-top").removeClass("active")
        }
    });
    a(".go-top").on("click", function() {
        a("html, body").animate({
            scrollTop: "0"
        }, 500)
    });
    a(window).on("load", function() {
        a(".preloader-area").fadeOut()
    })
}(jQuery));






var canSubmit = true; // 限制 30 秒内重复提交

var whatsappNumbers = [
"61410134880",
"61410110489",
"61410130410",
"61410142218",
"61415370363",
"61404424656",
"61415394213",
"61415569936",
];

function sendWhatsapp(form) {
    if (!canSubmit) {
        showFormMessage(false, "Please wait 30 seconds before submitting again.");
        return false;
    }

    var $form = jQuery(form);
    var name = $form.find("input[name='name']").val().trim();
    var age = $form.find("input[name='age']").val().trim();
    var gender = $form.find("select[name='gender']").val();
    var nationality = $form.find("input[name='nationality']").val().trim();
    var whatsapp = $form.find("input[name='whatsapp']").val().trim();

    // 自定义验证（不验证 WhatsApp 格式，只验证是否为空）
    if (!name) {
        showFormMessage(false, "Full Name is required.");
        return false;
    }
    if (!age) {
        showFormMessage(false, "Age is required.");
        return false;
    }
    if (!gender) {
        showFormMessage(false, "Please select Gender.");
        return false;
    }
    if (!nationality) {
        showFormMessage(false, "Nationality is required.");
        return false;
    }
    if (!whatsapp) {
        showFormMessage(false, "WhatsApp Number is required.");
        return false;
    }
 
    var message = "*EEZA Form Submission*\n\n" +
                  "*Name:* " + name + "\n" +
                  "*Age:* " + age + "\n" +
                  "*Gender:* " + gender + "\n" +
                  "*Nationality:* " + nationality + "\n" +
                  "*WhatsApp:* " + whatsapp;
 
    var randomIndex = Math.floor(Math.random() * whatsappNumbers.length);
    var selectedNumber = whatsappNumbers[randomIndex];

    var whatsappUrl = "https://wa.me/" + selectedNumber + "?text=" + encodeURIComponent(message);
    window.open(whatsappUrl, "_blank");

    $form[0].reset();
    showFormMessage(true, "Form submitted successfully! Please check WhatsApp.");
 
    canSubmit = false;
    setTimeout(function() {
        canSubmit = true;
    }, 30000);

    return false;
}
 
function showFormMessage(success, msg) {
    var $result = jQuery("#validator-newsletter");
    $result.removeClass().addClass(success ? "validation-success" : "validation-danger").text(msg).show();
    if (success) {
        setTimeout(function() { $result.addClass("hide"); }, 5000);
    }
}






 



