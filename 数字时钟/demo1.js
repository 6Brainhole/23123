function Index() {
    this.dom={
        img:$('img'),
        btn:$('.btn')
    }
    this.bindEvent();
}
Index.prototype.bindEvent=functon(){
    var img =this.dom.img;
    var btn =this.dom.btn;
    var len= img.length;
    var self = this;
    btn.on('click',function(){
          var endNum = 0;
        for(var i=0;i<len;i++){
            (functon(i){
                setTimeout(function(){
                    this.monition(img[i], '1s', function(){
                        $(dom).css({
                            'tansform':'scale(0)',
                        })
                    },function(){
                        self.monition(this,'1s',function(){
                            $(this).css({
                                'transform':'scale(1)',
                                'opacity':0,
                            })
                        },function(){
                            endNum ++;
                            if(endNum ==len){
                                self.show();

                            }
                        })
                    })
                },Math.random()*1000);
            })(i)
          
        }
    })
}
Index.prototype.show = function(){
     var img =this.dom.img;
    var btn =this.dom.btn;
    var len= img.length;
    for(var i =0; i<len; i++){
        $(img[i].css({
            'transform':'translateZ(-'+Math.random()*500+'px)',
            'tansition':'',
        });
        (function(i){
            set
        })(i)
    }
}
Index.prototype.monition = function(dom, time, doFun, cc) {
    var self = this;
    $(dom).css('transition', time);
    doFun.call(dom);
    var call = false;
    $(dom).on('transitionend', function(){
        cb && cb. call(dom);
    })
}
new Index();