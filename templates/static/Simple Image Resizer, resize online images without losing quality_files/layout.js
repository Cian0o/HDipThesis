const MAX_POLL_CHARS_NUMBER = 500;
const pageUrl = window.location.pathname;

// cookies
const SHOW_FEEDBACK_AFTER_RESIZE_FORM_COOKIE = 'SHOW_FEEDBACK_AFTER_RESIZE_FORM_COOKIE';
const SHOW_FEEDBACK_AFTER_RESIZE_FORM_COOKIE_VALUE = 'not_show';

// over writable variables
let siteName = '-';
let siteNameNPS = '';
let eventName = '';
let eventBase = '';
let parametersDimensions = '';
let inputDimensions = '';
let widthInput = null;
let heightInput = null;
let widthValue = null;
let heightValue = null;
let assetId = '';
let uploadedFilesArray = [];
let expires = '';

const isAndroid = () => {
    return /Android/i.test(navigator.userAgent);
}

// create cookie
const createCookie = (name, value, days) => {
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}

// delete cookie
const deleteCookie = (name) => {
    const date = new Date();
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
    expires = '; expires' + date.toUTCString();
    document.cookie = name + '=' + expires + '; path=/';
}

// read cookie
const readCookie = (name) => {
    let nameEQ = name + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length)
        }
    }
    return null;
}

// close cookies popup
// document.getElementById('cookies-popup-close-id').addEventListener('click', () => {
//     document.getElementById('cookies-popup-id').style.display = 'none';
// })

const isPageEligibleToTrackEvents = () => {

    if (
        pageUrl === '/' ||
        pageUrl === '/image-compressor' ||
        pageUrl === '/optimize-image-action' ||
        pageUrl === '/convert-jpg-to-pdf' ||
        pageUrl === '/convert-jpg-to-png'
    ) {
        return true;
    } else {
        return false;
    }
}

// event adblock
$(document).ready(() => {
    setTimeout(() => {
        let ad = document.querySelector('ins.adsbygoogle');
        let adblock_score = '';

        if (ad && ad.innerHTML.replace(/\s/g, '').length === 0) {
            adblock_score = 1
        } else {
            adblock_score = 0
        }
        if (pageUrl === '/' || pageUrl === '/upload') {
            siteName = 'resizer_adblock';
        } else if (pageUrl === '/image-compressor' || pageUrl === '/compress-image-action') {
            siteName = 'compressor_adblock';
        } else if (pageUrl === '/image-optimizer' || pageUrl === '/optimize-image-action') {
            siteName = 'optimizer_adblock';
        } else if (pageUrl === '/online-image-converter' || pageUrl === '/convert-image-action') {
            siteName = 'converter_adblock';
        } else if (pageUrl === '/convert-jpg-to-pdf' || pageUrl === '/convert-jpg-to-pdf-action') {
            siteName = 'convert-jpg-to-png_adblock'
        } else if (pageUrl === '/convert-jpg-to-png' || pageUrl === '/convert-jpg-to-png-action') {
            siteName = 'convert-jpg-to-pdf_adblock'
        }
        gtag('event', siteName, {
            'adBlock': adblock_score
        });

    }, 2000);
})

// event _open
$(document).ready(() => {
    if (pageUrl === '/') {
        siteName = 'resizer_open';
    } else if (pageUrl === '/image-compressor') {
        siteName = 'compressor_open';
    } else if (pageUrl === '/image-optimizer') {
        siteName = 'optimizer_open';
    } else if (pageUrl === '/online-image-converter') {
        siteName = 'converter_open';
    } else if (pageUrl === '/converter') {
        siteName = 'new_converter_open';
    } else if (pageUrl === '/convert-jpg-to-pdf') {
        siteName = 'convert-jpg-to-png_open'
    } else if (pageUrl === '/convert-jpg-to-png') {
        siteName = 'convert-jpg-to-pdf_open'
    }
    gtag('event', siteName);
})

// event _start
// rest of pages is handled in separate files (different event triggers)
$(document).ready(() => {
    if (isPageEligibleToTrackEvents()) {
        document.getElementById('submit-resize-button').addEventListener('click', () => {
            eventName = '_start';
            if (pageUrl === '/') {
                eventBase = 'resizer';
            } else if (pageUrl === '/image-compressor') {
                eventBase = 'compressor';
            }
            siteName = eventBase + eventName
            gtag('event', siteName);
        })
    }
})

// event menu_button
const navLinks = document.getElementsByClassName('nav-link');
if (navLinks) {
    Array.from(navLinks).forEach((link) => {
        link.addEventListener('click', () => {
            getNavLinkId(link);
        })
    })
}

const getNavLinkId = (link) => {
    let originSiteName = pageUrl.split('/')[1];
    let directedTo = '';
    directedTo = link.getAttribute('id').split('-')[0];
    eventName = 'menu_button_' + directedTo;
    gtag('event', eventName, {
        'origin_site': originSiteName
    });
}

// event menu_button_logo
const logoIcon = document.getElementsByName('logo-nav-name');
eventName = 'menu_button_logo';
if (logoIcon) {
    Array.from(logoIcon).forEach((logo) => {
        logo.addEventListener('click', () => {
            let pageId = pageUrl.split('/')[1];
            gtag('event', eventName, {
                'origin_site': pageId
            });
        })
    })
}

// event menu_button_become_tester
const becomeTester = document.getElementById('become-tester-id');
if (becomeTester) {
    eventName = 'menu_button_become_tester'
    becomeTester.addEventListener('click', () => {
        gtag('event', eventName)
    })
}

// event menu_button_banner
const googlePlayBtn = document.getElementsByName('google-play-btn');
eventName = 'menu_button_banner';
assetId = 'google-banner-id';
if (googlePlayBtn) {
    Array.from(googlePlayBtn).forEach((btn) => {
        btn.addEventListener('click', () => {
            gtag('event', eventName, {
                'asset_id': assetId
            });
        })
    })
}

// events: resizer_parameters_percentage, resizer_parameters_dimensions
// optimizer_parameters_dimensions, compressor_parameters_dimensions, converter_parameters_format
$(document).ready(() => {

    if (pageUrl === '/') {
        document.getElementById('submit-resize-button').addEventListener('click', () => {
            widthInput = document.getElementById('width');
            heightInput = document.getElementById('height');
            widthValue = widthInput.value;
            heightValue = heightInput.value;

            let parametersPercentage = '';
            if (document.getElementById('percent-method').checked) {
                parametersPercentage = document.getElementById('percent-resize').value;
                eventBase = 'resizer';
                eventName = '_parameters_percentage';

                gtag('event', eventBase + eventName, {
                    'parameter_percentage': parametersPercentage
                });

            } else if (widthInput && heightInput) {
                parametersDimensions = widthValue + "-" + heightValue;
                eventName = '_parameters_dimensions';

                gtag('event', eventBase + eventName, {
                    '_parameters_dimensions': parametersDimensions
                });
            }
        })
    }

    if (pageUrl === '/image-optimizer') {
        document.getElementById('fileUploader').addEventListener('click', () => {
            widthInput = document.getElementById('width');
            heightInput = document.getElementById('height');
            widthValue = widthInput.value;
            heightValue = heightInput.value;
            eventBase = 'optimizer';
            eventName = '_parameters_dimensions';

            if (widthValue && heightValue) {
                parametersDimensions = widthValue + "-" + heightValue;

                gtag('event', eventBase + eventName, {
                    '_parameters_dimensions': parametersDimensions
                });
            }
        })
    }
    if (pageUrl === '/image-compressor') {
        document.getElementById('submit-resize-button').addEventListener('click', () => {
            widthInput = document.getElementById('width');
            heightInput = document.getElementById('height');
            widthValue = widthInput.value;
            heightValue = heightInput.value;
            eventBase = 'compressor';
            eventName = '_parameters_dimensions';

            if (widthValue && heightValue) {
                parametersDimensions = widthValue + "-" + heightValue;

                gtag('event', eventBase + eventName, {
                    '_parameters_dimensions': parametersDimensions
                });
            }
        })
    }
    if (pageUrl === '/online-image-converter' || pageUrl === '/convert-jpg-to-pdf' || pageUrl === '/convert-jpg-to-png') {
        document.getElementById('submit-resize-button').addEventListener('click', () => {
            let select = document.getElementById('targetFormatId');
            let selectedFormat = select.options[select.selectedIndex].value;
            let parameterFormat = '';
            if (selectedFormat) {
                parameterFormat = selectedFormat;
            }
            eventName = 'converter_parameters_format';

            gtag('event', eventName, {
                'parameter_format': parameterFormat
            });
        })
    }
})

// event _input_file_dimensions
$('input').change(function () {
    let fr = new FileReader();
    eventName = '_input_file_dimensions';

    fr.onload = function () {
        if (pageUrl === '/') {
            eventBase = 'resizer';
        } else if (pageUrl === '/image-compressor') {
            eventBase = 'compressor';
        } else if (pageUrl === '/image-optimizer') {
            eventBase = 'optimizer';
        } else if (pageUrl === '/online-image-converter') {
            eventBase = 'converter';
        } else if (pageUrl === '/converter') {
            eventBase = 'newConvert';
        } else if (pageUrl === '/convert-jpg-to-pdf') {
            eventBase = 'convert-jpg-to-pdf';
        } else if (pageUrl === '/convert-jpg-to-png') {
            eventBase = 'convert-jpg-to-png_input';
        }
        let img = new Image();

        img.onload = () => {
            if (img.width && img.height) {
                inputDimensions = img.width + '-' + img.height;
            }

            gtag('event', eventBase + eventName, {
                'input_file_dimensions': inputDimensions
            });
        };
        img.src = fr.result;
    };
    fr.readAsDataURL(this.files[0]);
});

// events: input_file_size, input_file_type
$(document).ready(() => {
    document.getElementsByName('photo').forEach((input) => {
        input.addEventListener('input', (event) => {
            inputFiles(event.target.files)
        })
    })
})

const inputFiles = (files) => {
    Object.values(files).forEach((file) => {
        uploadedFilesArray.push(file);
        let inputFileSize = Math.round(uploadedFilesArray[0].size / 1000);
        let inputFileType = '';
        let uploadedPhotoSize = '';

        if (pageUrl === '/') {
            eventBase = 'resizer_input_file';
        } else if (pageUrl === '/image-compressor') {
            eventBase = 'compressor_input_file';
        } else if (pageUrl === '/image-optimizer') {
            eventBase = 'optimizer_input_file';
        } else if (pageUrl === '/online-image-converter') {
            eventBase = 'converter_input_file';
        } else if (pageUrl === '/converter') {
            eventBase = 'newConvert_input';
        } else if (pageUrl === '/convert-jpg-to-pdf') {
            eventBase = 'convert-jpg-to-pdf_input';
        } else if (pageUrl === '/convert-jpg-to-png') {
            eventBase = 'convert-jpg-to-png_input';
        }

        eventName = eventBase + '_size ';
        if (inputFileSize) {
            uploadedPhotoSize = inputFileSize / 1000;
        }

        gtag('event', eventName, {
            'input_file_size': uploadedPhotoSize
        });

        eventName = eventBase + '_type ';
        inputFileType = uploadedFilesArray[0].type.split('/')[1]

        gtag('event', eventName, {
            'input_file_type': inputFileType
        });
    })
}

// event download
window.onload = () => {
    const downloadLink = document.getElementById('download-id');

    if (downloadLink) {
        downloadLink.addEventListener('click', () => {
            if (pageUrl === '/upload') {
                siteName = 'resizer_download';
            } else if (pageUrl === '/compress-image-action') {
                siteName = 'compressor_download';
            } else if (pageUrl === '/optimize-image-action') {
                siteName = 'optimizer_download';
            } else if (pageUrl === '/convert-image-action') {
                siteName = 'converter_download';
            } else if (pageUrl === '/convert-jpg-to-pdf-action') {
                siteName = 'convert-jpg-to-pdf_download'
            } else if (pageUrl === '/convert-jpg-to-png-action') {
                siteName = 'convert-jpg-to-png_download'
            }
            gtag('event', siteName);
        })
    }
}

const isUserAlreadySendFeedbackAfterResize = () => {
    let showFeedbackAfterResizeFormCookie = readCookie(SHOW_FEEDBACK_AFTER_RESIZE_FORM_COOKIE);

    if (showFeedbackAfterResizeFormCookie === null) {
        return false;
    } else {
        return showFeedbackAfterResizeFormCookie === SHOW_FEEDBACK_AFTER_RESIZE_FORM_COOKIE_VALUE;
    }
}

const isPageEligibleToShowPollAfterAction = () => {
    if (
        pageUrl === '/upload' ||
        pageUrl === '/compress-image-action' ||
        pageUrl === '/optimize-image-action' ||
        pageUrl === '/convert-image-action' ||
        pageUrl === '/convert-jpg-to-pdf-action' ||
        pageUrl === '/convert-jpg-to-png-action'
    ) {
        return true;
    } else {
        return false;
    }
}


// User Recommendation poll handling

const closeUserRecommendationPoll = () => {
    const likelyToRecommendPoll = document.getElementById('likely-to-recommend-poll-id');
    likelyToRecommendPoll.style.display = 'none';
}

$(document).ready(() => {

    function submitUserRecommendationPol(event) {
        const spinnerContainer = document.getElementById('spinner-container-recommend-poll');
        const userChosenNumber = event.target.innerHTML;
        event.preventDefault();
        closeUserRecommendationPoll();

        $('#loading-spinner').show();
        spinnerContainer.style.display = 'block';
        $.ajax({
            type: 'POST',
            url: '/submit-user-recommendation-poll',
            contentType: 'application/json;charset=UTF-8',
            dataType: 'json',
            data: JSON.stringify({userAnswerKey: userChosenNumber}),
            success: function (data) {
                if (data.success) {
                    const likelyToRecommendPoll = document.getElementById('likely-to-recommend-poll-id');
                    const successMessage = document.getElementById('user-recommendation-poll-success-message-id');
                    let surveyScore = null;
                    if (userChosenNumber) {
                        surveyScore = userChosenNumber
                    }

                    likelyToRecommendPoll.style.display = 'none';
                    successMessage.style.display = 'block';

                    createCookie(SHOW_FEEDBACK_AFTER_RESIZE_FORM_COOKIE, SHOW_FEEDBACK_AFTER_RESIZE_FORM_COOKIE_VALUE, 365);

                    if (pageUrl === '/upload') {
                        siteNameNPS = 'resizer_NPS_survey_sent'
                    } else if (pageUrl === '/compress-image-action') {
                        siteNameNPS = 'compressor_NPS_survey_sent';
                    } else if (pageUrl === '/optimize-image-action') {
                        siteNameNPS = 'optimizer_NPS_survey_sent';
                    } else if (pageUrl === '/convert-image-action') {
                        siteNameNPS = 'converter_NPS_survey_sent';
                    } else if (pageUrl === '/convert-jpg-to-png-action') {
                        siteNameNPS = 'convert-jpg-to-png_NPS_survey_sent';
                    } else if (pageUrl === '/convert-jpg-to-pdf-action') {
                        siteNameNPS = 'convert-jpg-to-pdf_NPS_survey_sent';
                    }
                    gtag('event', siteNameNPS, {
                        'NPS_score': surveyScore
                    })
                }

            },

            error: function () {
                throw new Error('Sorry something went wrong.')
            }
        }).done(function () {
            $('#loading-spinner').hide();
            spinnerContainer.style.display = 'none';
        })
    }

    document.getElementsByName('num').forEach((button) => {
        button.addEventListener('click', submitUserRecommendationPol)
    })
})


const checkAndDisplayUserRecommendationPoll = () => {
    if (isUserAlreadySendFeedbackAfterResize()) {
        return false;
    }
    if (!isPageEligibleToShowPollAfterAction()) {
        return false;
    }

    const likelyToRecommendPoll = document.getElementById('likely-to-recommend-poll-id');
    likelyToRecommendPoll.style.display = 'block';

    // event _NPS_survey_show
    if (pageUrl === '/upload') {
        siteNameNPS = 'resizer_NPS_survey_show'
    } else if (pageUrl === '/compress-image-action') {
        siteNameNPS = 'compressor_NPS_survey_show';
    } else if (pageUrl === '/optimize-image-action') {
        siteNameNPS = 'optimizer_NPS_survey_show';
    } else if (pageUrl === '/convert-image-action') {
        siteNameNPS = 'converter_NPS_survey_show';
    } else if (pageUrl === '/convert-jpg-to-png-action') {
        siteNameNPS = 'convert-jpg-to-png_NPS_survey_show';
    } else if (pageUrl === '/convert-jpg-to-pdf-action') {
        siteNameNPS = 'convert-jpg-to-pdf_NPS_survey_show';
    }
    gtag('event', siteName)
}

const closeUserFeedbackSuccessMessage = () => {
    const userSuccessMessage = document.getElementById('user-recommendation-poll-success-message-id');
    userSuccessMessage.style.display = 'none';
}

const closeWhyThisRatePoll = () => {
    const whyThisRatePoll = document.getElementById('why-this-rate-id');
    whyThisRatePoll.style.display = 'none';
}

//
//    function isTextRatePollValidated() {
//        var whyThisRateInput = document.getElementById('rate-input-id').value;
//        if (whyThisRateInput.length === 0) {
//            return false;
//        } else if (whyThisRateInput.length > MAX_POLL_CHARS_NUMBER) {
//            return false;
//        } else if (whyThisRateInput.length >= 10 && whyThisRateInput.length <= MAX_POLL_CHARS_NUMBER) {
//            return true;
//        }
//    }

//    function activateSubmitButton() {
//        if (isTextRatePollValidated()) {
//            document.getElementById('rate-poll-submit-btn-id').classList.add('active')
//        }
//    }

const getInputValidationError = () => {
    const whyThisRateInput = document.getElementById('rate-input-id').value;
    if (whyThisRateInput.length === 0) {
        return 'This field is required.'
    } else if (whyThisRateInput.length > 0 && whyThisRateInput.length < 10) {
        return 'Your message is too short. Type at least 10 characters.'
    } else if (whyThisRateInput.length > MAX_POLL_CHARS_NUMBER) {
        return 'Your message is too long. Type maximum 500 characters.'
    }
    return '';
}

const showInputValidationError = (elementId, validationError) => {
    document.getElementById(elementId).textContent = validationError;
}

//    document.getElementById('rate-poll-submit-btn-id').addEventListener('click', submitRatePoll)
//
//    function submitRatePoll(e) {
//        e.preventDefault();
//
//        if (isTextRatePollValidated()) {
//            activateSubmitButton();
//            showInputValidationError('error-mess-id', getInputValidationError())
//            closeWhyThisRatePoll()
//            console.log('Form submitted!')
//        } else {
//            showInputValidationError('error-mess-id', getInputValidationError())
//            console.log('Not submitted!')
//        }
//    }


checkAndDisplayUserRecommendationPoll();


function triggerSelectFileDialog() {
    document.getElementById('fileInput').click();
}

function updateFileInput() {
    document.getElementById('filePath').value = document.getElementById('fileInput').value;
}

//    {##}
//{#         $("#").on("click", function () {#}
//{#            _gaq.push(['_trackEvent', 'download-resize', "-", "-"]);#}
//{#           console.log("download resize image, clicked with _gaq.push()")#}
//{#        });#}
const closeFlashMessage = () => {
    const elements = document.getElementsByClassName('block-message');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
}

function percentMethodSelected() {
    $('#percent').show();
    $('#dimensions').hide();
    $('#percent-method').attr('checked', true);
}

function dimensionsMethodSelected() {
    $('#percent').hide();
    $('#dimensions').show();
    $('#dimensions-method').attr('checked', true);
}