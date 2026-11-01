/**
 * Timeless Grace - Custom Scripts
 * Consolidates all interactive features:
 * 1. Envelope Opening & Background Music
 * 2. Hero Video Autoplay & Intro Observer
 * 3. Scratch-to-Reveal Date Interactive Canvas
 * 4. Flip Countdown Timer
 * 5. Button Shimmer Effect
 * 6. Form Submission Helper
 */

/* ============================================================
   1. ENVELOPE OPENING & BACKGROUND MUSIC
   ============================================================ */
!function(){"use strict";var e=document.getElementById("weiOverlay"),t=document.getElementById("weiVideoWrap"),n=document.getElementById("weiVideo"),i=document.getElementById("weiAudio"),o=document.getElementById("weiAudioBtn"),a=document.getElementById("weiIconPause"),d=document.getElementById("weiIconPlay"),c=!1;function l(e){var t=document.getElementById("fadeVideo");t?e(t):setTimeout(function(){l(e)},100)}function s(){setTimeout(function(){l(function(e){e.currentTime=0;var t=e.play();t&&t.catch&&t.catch(function(e){console.log("fadeVideo play failed:",e)})})},2e3)}function u(){if(!c){c=!0,e.style.opacity="0",e.style.pointerEvents="none",setTimeout(function(){e.style.display="none"},1400),i.volume=1;var a=i.play();a&&a.catch&&a.catch(function(e){console.log("Audio play failed:",e)}),o.style.visibility="visible",o.style.opacity="1",s(),n.readyState>=2?d():(n.addEventListener("loadeddata",d,{once:!0}),n.load())}function d(){t.classList.add("wei-video-in"),requestAnimationFrame(function(){var e=n.play();e&&e.catch&&e.catch(function(e){console.log("Envelope video play failed:",e)})})}}e.addEventListener("click",u),e.addEventListener("touchstart",u,{passive:!0}),n.addEventListener("timeupdate",function(){n.duration&&n.currentTime>=n.duration-.8&&!n.dataset.fading&&(n.dataset.fading="1",window.dispatchEvent(new Event("webgencyIntroDone")),t.classList.remove("wei-video-in"),t.classList.add("wei-video-out"),setTimeout(function(){t.style.display="none"},1400))}),o.addEventListener("click",function(){if(i.paused){var e=i.play();e&&e.catch&&e.catch(function(){}),d.style.display="none",a.style.display="block"}else i.pause(),d.style.display="block",a.style.display="none"}),n.preload="auto",n.load()}();

/* ============================================================
   2. HERO VIDEO AUTOPLAY & INTRO OBSERVER
   ============================================================ */
(function() {
                                        var video = document.getElementById('wlivVideo');
                                        var wrap = document.getElementById('wlivWrap');
                                        var introDone = false
                                          , isVisible = false
                                          , hasPlayed = false;
                                        function tryPlay() {
                                            if (hasPlayed)
                                                return;
                                            if (!introDone || !isVisible)
                                                return;
                                            hasPlayed = true;
                                            video.play().catch(function() {
                                                document.addEventListener('touchstart', function once() {
                                                    video.play();
                                                    document.removeEventListener('touchstart', once);
                                                }, {
                                                    once: true
                                                });
                                            });
                                        }
                                        window.addEventListener('webgencyIntroDone', function() {
                                            introDone = true;
                                            tryPlay();
                                        });
                                        var obs = new IntersectionObserver(function(entries) {
                                            entries.forEach(function(e) {
                                                isVisible = e.isIntersecting;
                                                if (isVisible)
                                                    tryPlay();
                                            });
                                        }
                                        ,{
                                            threshold: 0.25
                                        });
                                        obs.observe(wrap);
                                    }
                                    )();

/* ============================================================
   3. SCRATCH-TO-REVEAL WEDDING DATE (CANVAS & CONFETTI)
   ============================================================ */
!function(){"use strict";var t=JSON.parse(atob("eyJkYXkiOiIxMCIsIm1vbnRoIjoiSmFudWFyeSIsInllYXIiOiIyMDI3In0=")),e=[{tileId:"tdr-tile-day",scratchId:"tdr-cvs-day",numId:"tdr-numcvs-day",value:t.day,isMonth:!1},{tileId:"tdr-tile-month",scratchId:"tdr-cvs-month",numId:"tdr-numcvs-month",value:t.month,isMonth:!0},{tileId:"tdr-tile-year",scratchId:"tdr-cvs-year",numId:"tdr-numcvs-year",value:t.year,isMonth:!1}],a=0,n=!1;function o(t,e,a){return Math.max(t,Math.min(a,e))}function i(t,e,a){var n=t.createLinearGradient(0,0,e,a);n.addColorStop(0,"#FFFDF7"),n.addColorStop(.24,"#F9EEDC"),n.addColorStop(.52,"#EED8B8"),n.addColorStop(.78,"#D7B67F"),n.addColorStop(1,"#B98238"),t.fillStyle=n,t.fillRect(0,0,e,a);var o=t.createRadialGradient(.42*e,.25*a,0,.42*e,.25*a,.82*e);o.addColorStop(0,"rgba(255,255,252,0.98)"),o.addColorStop(.3,"rgba(255,247,229,0.58)"),o.addColorStop(.67,"rgba(245,222,185,0.12)"),o.addColorStop(1,"rgba(245,222,185,0)"),t.fillStyle=o,t.fillRect(0,0,e,a),t.globalAlpha=.085;for(var i=-a;i<e+a;i+=22)t.beginPath(),t.moveTo(i,0),t.lineTo(i+.72*a,a),t.strokeStyle="#FFF9EC",t.lineWidth=8,t.stroke();t.globalAlpha=.045;for(var r=11-a;r<e+a;r+=22)t.beginPath(),t.moveTo(r,0),t.lineTo(r+.72*a,a),t.strokeStyle="#A66C20",t.lineWidth=2,t.stroke();t.globalAlpha=1,[[.14*e,.18*a],[.5*e,.1*a],[.84*e,.22*a],[.22*e,.78*a],[.72*e,.82*a],[.88*e,.58*a],[.08*e,.52*a],[.62*e,.42*a],[.38*e,.62*a]].forEach(function(e,a){var n=e[0],o=e[1],i=a%3==0?7:5,r=t.createRadialGradient(n,o,0,n,o,i);r.addColorStop(0,"rgba(255,255,250,1)"),r.addColorStop(.4,"rgba(255,239,206,0.42)"),r.addColorStop(1,"rgba(255,230,183,0)"),t.fillStyle=r,t.globalAlpha=.34,t.beginPath(),t.arc(n,o,i,0,2*Math.PI),t.fill()}),t.globalAlpha=1,t.strokeStyle="rgba(255,253,246,0.88)",t.lineWidth=1.5,t.strokeRect(.75,.75,e-1.5,a-1.5),t.strokeStyle="rgba(171,108,29,0.22)",t.lineWidth=1,t.strokeRect(2.25,2.25,e-4.5,a-4.5)}function r(){document.getElementById("tdr-flash").classList.add("tdr-go"),function(){var t=document.getElementById("tdr-confetti"),e=t.getContext("2d");t.width=window.innerWidth,t.height=window.innerHeight;var a=["#B97820","#D5A54D","#E5C98F","#F4E8D3","#FFF9EF","#C38A35","rgba(183,120,32,0.58)","rgba(255,243,221,0.78)","#93601B","#EAD8B8"],n=Array.from({length:80},function(){return{x:Math.random()*t.width,y:-15-160*Math.random(),vy:1.1*Math.random()+.5,vx:.9*(Math.random()-.5),w:10*Math.random()+2.5,h:3.5*Math.random()+1.2,rot:Math.random()*Math.PI*2,rv:.055*(Math.random()-.5),color:a[Math.floor(Math.random()*a.length)],alpha:.6*Math.random()+.38,drift:Math.random()*Math.PI*2,ds:.016*Math.random()+.007,shape:Math.random()>.45?0:1}}),o=0,i=320;!function a(){e.clearRect(0,0,t.width,t.height);var r=Math.max(0,1-o/i);n.forEach(function(a){e.save(),e.globalAlpha=a.alpha*r,e.translate(a.x,a.y),e.rotate(a.rot),e.fillStyle=a.color,0===a.shape?e.fillRect(-a.w/2,-a.h/2,a.w,a.h):(e.beginPath(),e.arc(0,0,a.h,0,2*Math.PI),e.fill()),e.restore(),a.y+=a.vy,a.x+=a.vx+.4*Math.sin(a.drift),a.rot+=a.rv,a.drift+=a.ds,a.y>t.height+20&&(a.y=-15,a.x=Math.random()*t.width)}),++o<i?requestAnimationFrame(a):e.clearRect(0,0,t.width,t.height)}()}()}e.forEach(function(t){var e=document.getElementById(t.tileId),d=document.getElementById(t.scratchId),l=document.getElementById(t.numId),h=d.getContext("2d"),c=!1,s=!1;function u(){var a=e.getBoundingClientRect();d.width=Math.round(a.width),d.height=Math.round(a.height),s||i(h,d.width,d.height),function(t,e,a){var n=t.getContext("2d"),i=window.devicePixelRatio||1,r=t.clientWidth,d=t.clientHeight;if(0!==r&&0!==d){t.width=Math.round(r*i),t.height=Math.round(d*i),n.setTransform(i,0,0,i,0,0),n.clearRect(0,0,r,d);var l=window.innerWidth,h=a?o(20,.047*l,34):o(28,.065*l,38);n.font="400 "+h+"px 'Rufina', serif",n.textAlign="center",n.textBaseline="middle";var c=r/2,s=d/2;n.fillStyle="rgba(255,244,218,0.40)",n.fillText(e,c,s+1);var u=n.createLinearGradient(0,s-h/2,0,s+h/2);u.addColorStop(0,"#D6A64E"),u.addColorStop(.48,"#B8781F"),u.addColorStop(1,"#8C5715"),n.fillStyle=u,n.fillText(e,c,s)}}(l,t.value,t.isMonth)}function f(t,e){var a=d.getBoundingClientRect();return{x:(t-a.left)*(d.width/a.width),y:(e-a.top)*(d.height/a.height)}}function g(t,e){s||(h.globalCompositeOperation="destination-out",h.beginPath(),h.arc(t,e,36,0,2*Math.PI),h.fillStyle="rgba(0,0,0,1)",h.fill(),h.globalCompositeOperation="source-over",function(){if(Math.random()>.12)return;for(var t=h.getImageData(0,0,d.width,d.height).data,e=0,o=0,l=3;l<t.length;l+=12)o++,t[l]>10&&e++;(o-e)/o>.4&&function(){if(s)return;s=!0;var t=1,e=setInterval(function(){(t-=.055)<=0?(clearInterval(e),d.style.display="none"):(h.clearRect(0,0,d.width,d.height),h.globalAlpha=Math.max(0,t),i(h,d.width,d.height),h.globalAlpha=1)},22);3!==++a||n||(n=!0,setTimeout(r,550))}()}())}u(),window.addEventListener("resize",u),setTimeout(u,200),setTimeout(u,600),d.addEventListener("mousedown",function(t){c=!0;var e=f(t.clientX,t.clientY);g(e.x,e.y)}),d.addEventListener("mousemove",function(t){if(c){var e=f(t.clientX,t.clientY);g(e.x,e.y)}}),d.addEventListener("mouseup",function(){c=!1}),d.addEventListener("mouseleave",function(){c=!1}),d.addEventListener("touchstart",function(t){t.preventDefault(),t.stopPropagation(),c=!0;var e=t.touches[0],a=f(e.clientX,e.clientY);g(a.x,a.y)},{passive:!1}),d.addEventListener("touchmove",function(t){if(t.preventDefault(),t.stopPropagation(),c){var e=t.touches[0],a=f(e.clientX,e.clientY);g(a.x,a.y)}},{passive:!1}),d.addEventListener("touchend",function(t){t.preventDefault(),c=!1},{passive:!1})}),window.addEventListener("resize",function(){var t=document.getElementById("tdr-confetti");t.width=window.innerWidth,t.height=window.innerHeight})}();

/* ============================================================
   4. FLIP COUNTDOWN TIMER
   ============================================================ */
!function(){"use strict";var e=new Date(2026,12,20,0,0,0),t=document.getElementById("wcb-num-days"),n=document.getElementById("wcb-num-hours"),o=document.getElementById("wcb-num-mins"),c=document.getElementById("wcb-num-secs"),s={days:null,hours:null,minutes:null,seconds:null},r=!1;function i(e,t){e.textContent!==t&&(e.classList.add("wcb-flip-out"),setTimeout(function(){e.classList.remove("wcb-flip-out"),e.classList.add("wcb-flip-in"),e.textContent=t,e.offsetHeight,e.classList.remove("wcb-flip-in")},520))}function l(){var r=new Date,l=e-r;if(l<0)document.getElementById("wcbContainer").innerHTML="See you there!";else{var a=String(Math.floor(l/864e5)),u=String(Math.floor(l%864e5/36e5)).padStart(2,"0"),d=String(Math.floor(l%36e5/6e4)).padStart(2,"0"),m=String(Math.floor(l%6e4/1e3)).padStart(2,"0");a!==s.days&&(i(t,a),s.days=a),u!==s.hours&&(i(n,u),s.hours=u),d!==s.minutes&&(i(o,d),s.minutes=d),m!==s.seconds&&(i(c,m),s.seconds=m)}}function a(){r||(r=!0,document.querySelectorAll(".wcb-number").forEach(function(e){e.classList.add("wcb-revealed")}),document.querySelectorAll(".wcb-label").forEach(function(e){e.classList.add("wcb-revealed")}),document.querySelectorAll(".wcb-separator").forEach(function(e){e.classList.add("wcb-revealed")}))}l(),setInterval(l,1e3);var u=new IntersectionObserver(function(e){e[0].isIntersecting&&(a(),u.disconnect())},{threshold:.4});u.observe(document.getElementById("wcbContainer")),setTimeout(function(){var e=document.getElementById("wcbContainer").getBoundingClientRect();e.top<window.innerHeight&&e.bottom>0&&a()},200)}();

/* ============================================================
   5. BUTTON SHINE EFFECT
   ============================================================ */
document.addEventListener('DOMContentLoaded', function() {
    var rec = document.getElementById('rec2684633403');
    if (!rec) return;
    var buttons = rec.querySelectorAll('[data-animate-btn-effect] .tn-atom');
    Array.prototype.forEach.call(buttons, function(button) {
        var buttonEffect = button.querySelector('.t-btn_wrap-effects');
        if (!buttonEffect) {
            button.insertAdjacentHTML('beforeend', '<div class="t-btn_wrap-effects"><div class="t-btn_effects"></div></div>');
            buttonEffect = button.querySelector('.t-btn_wrap-effects');
        }
        if (button.offsetWidth > 230) {
            buttonEffect.classList.add('t-btn_wrap-effects_md');
        }
        if (button.offsetWidth > 750) {
            buttonEffect.classList.remove('t-btn_wrap-effects_md');
            buttonEffect.classList.add('t-btn_wrap-effects_lg');
        }
    });
});

/* ============================================================
   6. FUNCTIONAL RSVP FORM ENGINE
   ============================================================ */

/**
 * RSVP Configuration
 * To connect to your Google Sheet & Email notifications:
 * 1. Deploy the provided google-apps-script.js as a Web App in Google Apps Script.
 * 2. Paste your deployed Web App URL into `scriptUrl` below.
 */
var RSVP_CONFIG = {
    // Paste your Google Apps Script Web App URL here (e.g., https://script.google.com/macros/s/.../exec):
    scriptUrl: "https://script.google.com/macros/s/AKfycbxEBfwfz40GJTEbS1fyCrHp7WNFb29JixWAhkct_yKe1FHSCrvpySALvelesQnV7-_ykA/exec",

    // Custom success message displayed inside the RSVP popup:
    successTitle: "RSVP Confirmed!",
    successMessage: "Your response has been received with love.",

    // Error message displayed if network or server error occurs:
    errorMessage: "Unable to submit your RSVP. Please check your connection and try again."
};

document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("form2684633703") || document.querySelector("form.t-form");
    if (!form) return;

    var nameInput = form.querySelector('input[name="Your Full Name"]');
    var attendanceHidden = form.querySelector('input.t-checkboxes__hiddeninput[name="Will you come?"]');
    var checkboxes = form.querySelectorAll('.t-checkboxes__item input[type="checkbox"]');
    var guestsInput = form.querySelector('input[name="Number of guests attending"]');
    var submitBtn = form.querySelector('button.t-submit');
    var btnTextSpan = submitBtn ? submitBtn.querySelector('.t-btnflex__text') : null;
    var originalBtnText = btnTextSpan ? btnTextSpan.textContent : "Submit";

    // 1. Checkbox Mutual Exclusion (ensure only one option is checked at a time)
    Array.prototype.forEach.call(checkboxes, function (cb) {
        cb.addEventListener("change", function () {
            if (this.checked) {
                Array.prototype.forEach.call(checkboxes, function (otherCb) {
                    if (otherCb !== cb) otherCb.checked = false;
                });
                if (attendanceHidden) attendanceHidden.value = this.value;
                clearFieldError("error_4823796998031");
            } else {
                if (attendanceHidden) attendanceHidden.value = "";
            }
        });
    });

    if (nameInput) {
        nameInput.addEventListener("input", function () {
            if (this.value.trim()) clearFieldError("error_4823796998030");
        });
    }

    // 2. Form Submission Handler
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        e.stopPropagation();

        clearAllErrors(form);

        var fullName = nameInput ? nameInput.value.trim() : "";
        var attendance = "";

        // Check which attendance option is selected
        var checkedCb = form.querySelector('.t-checkboxes__item input[type="checkbox"]:checked');
        if (checkedCb) {
            attendance = checkedCb.value.trim();
        } else if (attendanceHidden && attendanceHidden.value.trim()) {
            attendance = attendanceHidden.value.trim();
        }

        var guests = guestsInput ? guestsInput.value.trim() : "";

        // Validation
        var hasError = false;

        if (!fullName) {
            showFieldError("error_4823796998030", "Please enter your full name");
            if (nameInput) nameInput.focus();
            hasError = true;
        }

        if (!attendance) {
            showFieldError("error_4823796998031", "Please indicate whether you will attend");
            hasError = true;
        }

        if (hasError) {
            showFormError(form, "Please complete the required fields above.");
            return;
        }

        // Default guest count if not specified
        if (!guests) {
            guests = (attendance.toLowerCase().indexOf("yes") !== -1) ? "1" : "0";
        }

        var payload = {
            fullName: fullName,
            attendance: attendance,
            guests: guests,
            submittedAt: new Date().toISOString()
        };

        // If Web App URL is still the placeholder, show a clear guidance message
        if (!RSVP_CONFIG.scriptUrl || RSVP_CONFIG.scriptUrl === "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL") {
            showFormError(
                form,
                "Setup Required: Please paste your deployed Google Apps Script Web App URL into custom.js (RSVP_CONFIG.scriptUrl) to record live RSVPs."
            );
            return;
        }

        // Show loading state on button
        setButtonLoading(true);

        // Send POST request to Google Apps Script endpoint
        fetch(RSVP_CONFIG.scriptUrl, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify(payload)
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            setButtonLoading(false);
            if (data && data.result === "success") {
                renderSuccessView(form, fullName);
            } else {
                var msg = (data && data.message) ? data.message : RSVP_CONFIG.errorMessage;
                showFormError(form, msg);
            }
        })
        .catch(function (error) {
            console.error("RSVP submit error:", error);
            setButtonLoading(false);
            showFormError(form, RSVP_CONFIG.errorMessage);
        });
    });

    function setButtonLoading(loading) {
        if (!submitBtn) return;
        if (loading) {
            submitBtn.disabled = true;
            submitBtn.style.opacity = "0.75";
            submitBtn.style.cursor = "wait";
            if (btnTextSpan) btnTextSpan.textContent = "Sending...";
        } else {
            submitBtn.disabled = false;
            submitBtn.style.opacity = "1";
            submitBtn.style.cursor = "pointer";
            if (btnTextSpan) btnTextSpan.textContent = originalBtnText;
        }
    }

    function showFieldError(errorId, message) {
        var el = document.getElementById(errorId);
        if (el) {
            el.textContent = message;
            el.style.display = "block";
            el.style.color = "#d32f2f";
            el.style.fontSize = "13px";
            el.style.marginTop = "4px";
        }
    }

    function clearFieldError(errorId) {
        var el = document.getElementById(errorId);
        if (el) {
            el.textContent = "";
            el.style.display = "none";
        }
    }

    function showFormError(formEl, message) {
        var errorBoxes = formEl.querySelectorAll(".js-errorbox-all");
        Array.prototype.forEach.call(errorBoxes, function (box) {
            box.style.display = "block";
            var item = box.querySelector(".js-rule-error-all") || box.querySelector(".t-form__errorbox-item");
            if (item) {
                item.textContent = message;
                item.style.display = "block";
            }
        });
    }

    function clearAllErrors(formEl) {
        var fieldErrors = formEl.querySelectorAll(".t-input-error");
        Array.prototype.forEach.call(fieldErrors, function (fe) {
            fe.textContent = "";
            fe.style.display = "none";
        });
        var errorBoxes = formEl.querySelectorAll(".js-errorbox-all");
        Array.prototype.forEach.call(errorBoxes, function (box) {
            box.style.display = "none";
        });
    }

    function escapeHtml(text) {
        var map = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };
        return String(text).replace(/[&<>"']/g, function (m) { return map[m]; });
    }

    function renderSuccessView(formEl, name) {
        var inputsBox = formEl.querySelector(".t-form__inputsbox");
        var middleError = formEl.querySelector(".t-form__errorbox-middle");
        var bottomError = formEl.querySelector(".t-form__errorbox-bottom");
        var successBox = formEl.querySelector(".js-successbox");
        var popupDescr = document.querySelector("#rec2684633703 .t702__descr");

        if (inputsBox) inputsBox.style.display = "none";
        if (middleError) middleError.style.display = "none";
        if (bottomError) bottomError.style.display = "none";
        if (popupDescr) popupDescr.style.display = "none";

        if (successBox) {
            successBox.style.display = "block";
            successBox.innerHTML = 
                '<div style="text-align: center; padding: 28px 16px; color: #4a4a4a;">' +
                    '<div style="width: 58px; height: 58px; margin: 0 auto 16px auto; background-color: #faf6ee; border: 2px solid #cfab66; border-radius: 50%; display: flex; align-items: center; justify-content: center;">' +
                        '<svg style="width: 30px; height: 30px; fill: #cfab66;" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>' +
                    '</div>' +
                    '<div style="font-size: 22px; font-weight: 600; color: #222; margin-bottom: 8px; font-family: var(--t-text-font, Arial);">' +
                        escapeHtml(RSVP_CONFIG.successTitle) +
                    '</div>' +
                    '<div style="font-size: 15px; line-height: 1.6; color: #666; font-family: var(--t-text-font, Arial);">' +
                        'Thank you, <strong style="color: #cfab66;">' + escapeHtml(name) + '</strong>!<br>' +
                        escapeHtml(RSVP_CONFIG.successMessage) +
                    '</div>' +
                '</div>';
        }
    }
});
