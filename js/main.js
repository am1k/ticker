(function() {
    function Ticker( element ) {
        this.el = document.getElementById( element );
        this.init();
    }

    Ticker.prototype = {
        init: function() {
            this.items = this.el.getElementsByTagName( "li" );
            this.itemsLength = this.items.length;
            this.wrapper = document.getElementById( "ticker-wrapper-inner" );
            this.timer = null;
            this.clone();
            this.tick();
        },

        clone: function(){
            var self = this;
            var cloneElement;
            var li = [].slice.call(self.items);
            for(var i=0; i<li.length; i++){
                cloneElement = li[i].cloneNode(true);
                self.wrapper.appendChild(cloneElement);
            }
        },

        tick: function() {
            var self = this;
            var li = [].slice.call(self.items);
            self.timer = setInterval(function() {
                if(self.wrapper.offsetLeft > - li[self.itemsLength-1].offsetWidth){
                    var itemLeft = self.wrapper.offsetLeft;
                    self.wrapper.style.left = itemLeft - 5 + 'px';   //change position view

                }
                else if(self.wrapper.offsetLeft <= - li[self.itemsLength].offsetWidth){
                    console.log(111);
                    self.wrapper.appendChild(li[0]);
                    li.push(li.shift());
                    self.wrapper.style.left = 0;
                }
            }, 100 );
        }
    };

    document.addEventListener( "DOMContentLoaded", function() {
        var news = new Ticker( "ticker" );

    });


})();