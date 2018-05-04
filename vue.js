var app = new Vue({
    el: '.vue',
    data: {
        show_text: true,
        message: 'Message',
        message_input_show: 'Do Enter',
        message_input: '',
        src: 'https://steemit-production-imageproxy-upload.s3.amazonaws.com/DQmReM2aoZysGbehUrN6RWkRfRLjaVuR3xL3XFpiY17x7QB',
        image: 'http://lorempixel.com/300/200/',
        text: "Hello people",
        html_text: "<b>Hello</b> people",
        show_p_1: true,
        parrafo_x: 1,
        show_p: true,
        show_p_message: 'Ocultar Mensaje',
        countries: ['Mexico', 'USA', 'Canada'],
        country_objs: [{name: 'Mexico'}, {name:'USA'}, {name:'Canada'}],
        country_obj: {name: 'Mexico', capital: 'DF'},
    },
    updated: function () {
        if(this.parrafo_x > 4){
            this.parrafo_x = 1;
        }

        if(this.show_p === true){
            this.show_p_message = 'Ocultar Mensaje';
        }else{
            this.show_p_message = 'Mostrar Mensaje';
        }
    }
});