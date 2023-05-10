function eventToggler (props){
    var darkmodeOn = true;
    var darMode = <h1>Dark mode is on</h1>
    var lightMode = <h1>Light mode is on {props.button}</h1>

    function handle (){
        darkmodeOn = !darkmodeOn
        if(darkmodeOn == true){
            alert("dark mode is on");

        }else{
            alert("Light mode is on");
        };
    };
};

export default eventToggler;