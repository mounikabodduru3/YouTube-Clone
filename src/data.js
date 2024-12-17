export const API_KEY = 'AIzaSyAdI1Cw73ih0XS2pbM8YpTtyEFU3KGpJ3g';

export const value_converter = (value) =>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000) + "M";
    }
    else if (value>=100)
    {
        return Math.floor(value/1000) + "K"
    }
    else{
        return value
    }
}