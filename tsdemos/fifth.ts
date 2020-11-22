function failure():never{
    throw new Error('I am the Error');
}

if(10>1){
    console.log('Success');
}
else{
    failure();
}