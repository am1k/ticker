(function() {
    function Ticker( element ) {
        this.el = document.getElementById( element );
        this.init();
    }

    Ticker.prototype = {
        init: function() {
            this.items = this.el.getElementsByTagName( "li" );
            this.wrapper = document.getElementById( "ticker-wrapper-inner" );
            this.timer = null;
            this.tick();
        },

        tick: function() {
            var self = this;
            var li = [].slice.call(self.items);
            self.timer = setInterval(function() {
                if(self.wrapper.offsetLeft > -li[0].offsetWidth){
                    var itemLeft = self.wrapper.offsetLeft;
                    self.wrapper.style.left = itemLeft - 5 + 'px';   //change position view
                }
                else if(self.wrapper.offsetLeft <= - li[0].offsetWidth){
                    self.wrapper.appendChild(li[0]);
                    li.push(li.shift());
                    self.wrapper.style.left = 0;
                }

            }, 50 );
        }
    };

    document.addEventListener( "DOMContentLoaded", function() {
        var news = new Ticker( "ticker" );

    });


})();