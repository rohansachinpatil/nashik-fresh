try {
    require('dotenv');
    console.log('dotenv ok');
    require('express');
    console.log('express ok');
    require('mongoose');
    console.log('mongoose ok');
    require('helmet');
    console.log('helmet ok');
} catch (e) {
    console.log(e);
}
