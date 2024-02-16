const getRandomNumber = (min, max) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Generate = () =>{
    const minEl = document.getElementById('min');
    const maxEl = document.getElementById('max');
    const min = Number(minEl.value);
    const max = Number(maxEl.value);

    if (minEl.value === '' || maxEl.value === ''){
        alert('Enter the Min and Max numbers!...');
        return;
    }

    if (min > max){
        alert('Min number should be less than max number');
        return;
    }


    const placeholderEl = document.querySelector('#placeholder');
    placeholderEl.textContent = getRandomNumber(min, max);
}

const btnEl = document.getElementById('Button');
btnEl.addEventListener('click', Generate);
