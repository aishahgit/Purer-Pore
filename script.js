document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginLink").addEventListener("click", function() {
        window.location.href = "login.html";
    });
});

// toggle

$(document).ready(function(){
    $('.fa-bars').click(function(){
       $(this).toggleClass('fa-times');
       $('nav').toggleClass('nav-toggle');
    });
    $('nav ul li a').click(function(){
    $('.fa-bars').removeClass('fa-times');
     $('nav').removeClass('nav-toggle');
    });
});



// quiz

function nextQuestion() {
    document.querySelectorAll('.question')[0].style.display = 'none';
    document.querySelectorAll('.question')[1].style.display = 'block';
}

function showResult() {
    const stateOptions = document.getElementsByName('skinState');
    let skinState = '';
    for (const option of stateOptions) {
        if (option.checked) {
            skinState = option.value;
            break;
           
        }
    }

    const concernsOptions = document.getElementsByName('skinConcerns');
    const skinConcerns = [];
    for (const option of concernsOptions) {
        if (option.checked) {
            skinConcerns.push(option.value);
        }
    }
  
    

    let skincareRoutine = '';
if (skinState === 'oily') {
skincareRoutine = 'Use non-comedogenic cleanser, gel-based moisturizer, light-weight serum, and 50PA++ sunscreen.';
} else if (skinState === 'combination') {
skincareRoutine = 'Use gentle cleanser, oil-free moisturizer, and exfoliate T-zone with salicylic acid. and 50PA++ sunscreen.';
} else if (skinState === 'dry') {
skincareRoutine = 'Use hydrating cleanser, rich cream moisturizer, and incorporate hyaluronic acid serum. and 50PA++ sunscreen.';
}

if (skinConcerns.includes('acne')) {
skincareRoutine += ' Consider benzoyl peroxide spot treatment.';
}
if (skinConcerns.includes('acneTZone')) {
skincareRoutine += ' Apply salicylic acid in the T-zone.';
}
if (skinConcerns.includes('dryness')) {
skincareRoutine += ' Use a hydrating mask weekly.';
}

document.getElementById('skincareRoutine').innerText = skincareRoutine;
document.getElementById('result').style.display = 'block';



setTimeout(() => {
document.querySelectorAll('.question')[0].style.display = 'block';
document.querySelectorAll('.question')[1].style.display = 'none';
document.getElementById('skincareRoutine').style.display = 'none';
document.getElementById('result').style.display = 'none';
}, 50000);
}

// routine
let previewContainers = document.querySelectorAll('.index-category-box-preview');
let previewBoxes = document.querySelectorAll('.preview');

document.querySelectorAll('.index-category .index-category-box').forEach(product => {
    product.onclick = () => {
        let name = product.getAttribute('data-name');
        previewContainers.forEach(previewContainer => {
            let previewBox = previewContainer.querySelector(`[data-target="${name}"]`);
            if (previewBox) {
                previewContainer.style.display = 'flex';
                previewBoxes.forEach(box => box.classList.remove('active'));
                previewBox.classList.add('active');
            }
        });
    };
});

previewContainers.forEach(previewContainer => {
    let closeButton = previewContainer.querySelector('.fa-times');
    closeButton.onclick = () => {
        previewContainer.style.display = 'none';
        previewBoxes.forEach(box => box.classList.remove('active'));
    };
});


 previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick  = () =>{
      close.classList.remove('active');
      previewContainer.style.display = 'none';
    };

 });

// diff
 previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick  = () =>{
      close.classList.remove('active');
      previewContainer.style.display = 'none';
    };

 });
 
    
    
