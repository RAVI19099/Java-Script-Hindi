var person = {
    name:'john',
    ask:function(){
        console.log(this)
    }
}

new (person.ask.bind(person));
