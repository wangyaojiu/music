
    var whetherrepeat = false;

var path2 = "http://oss.rizzoli7.com"; 
    $("#img").attr("src", 'path2'+ 'http://rizzoli7.com/images/'+Math.floor(Math.random()*11)+'.jpg');

	$(function () {
		var Accordion = function (el, multiple) {
			this.el = el || {};
			this.multiple = multiple || false;

			// Variables privadas
			var links = this.el.find('.link');
			// Evento
			links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
		}

		Accordion.prototype.dropdown = function (e) {
			var $el = e.data.el;
			$this = $(this),
					$next = $this.next();

			$next.slideToggle();
			$this.parent().toggleClass('open');

			if (!e.data.multiple) {
				$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
			}
			;
		}

		var accordion = new Accordion($('#accordion'), false);


		// $("#mode").height($(".fa-1x").height()*1.5);
		$("#mode").width($(".fa-1x").width()*1.2);
		$("#mode").css('display','block');
        //
        // //

	});


    allmuisc = [{
        "album": "被禁忌的游戏", "music": [
            "李志 - 黑色信封.mp3      ",
            "李志 - 阿兰.mp3      ",
            "李志 - 离婚.mp3               ",
			"李志 - 欢愉.mp3      ",
            "李志 - 卡夫卡.mp3               ",
			"李志 - 被禁忌的游戏.mp3      ",
            "李志 - 罗庄的冬天.mp3               ",
            "李志 - 红色气球.mp3               "
            ]
            
        },{
        "album": "梵高先生", "music": [
            "李志 - 你离开了南京，从此没有人和我说话.mp3      ",
            "李志 - 董卓瑶.mp3               ",
			"李志 - 春末的南方城市.mp3      ",
            "李志 - 来了.mp3      ",
            "李志 - 暧昧.mp3               ",
			"李志 - 想起了他.mp3      ",
            "李志 - 梵高先生.mp3               ",
            "李志 - 斜.mp3               "
        ]
    },
        {
            "album": "这个世界会好吗", "music": [
            "李志 - 妈妈.mp3      ",
            "李志 - 喀纳斯.mp3               ",
			"李志 - 和你在一起.mp3      ",
            "李志 - 我们不能失去信仰——献给刘艺.mp3               ",
			"李志 - 翁庆年的六英镑.mp3      ",
            "李志 - 海的女儿.mp3      ",
            "李志 - 交河.mp3               ",
            "李志 - 这个世界会好吗2015.mp3               "
            ]
        },
        {
            "album": "工体东路没有人", "music": [
            "和你在一起.mp3               ",
			"来了.mp3      ",
            "阿兰.mp3               ",
			"春末的南方城市.mp3      ",
            "他们.mp3               ",
            "暧昧.mp3               ",
			"结婚.mp3      ",
            "这个世界会好吗.mp3               ",
			"董卓瑶.mp3      ",
            "青春.mp3               ",
            "想起了她.mp3               "
            ]
        },
        {
            "album": "二零零九年十月十六日事件", "music": [
            "黑色信封 - 李志和他的乐队们.mp3      ",
            "董卓瑶 - 李志和他的乐队们.mp3               ",
			"春末的南方城市 - 李志和他的乐队们.mp3      ",
            "来了 - 李志和他的乐队们.mp3               ",
			"广场 - 李志和他的乐队们.mp3      ",
            "青春 - 李志和他的乐队们.mp3               ",
			"他们 - 李志和他的乐队们.mp3      ",
            "被禁忌的游戏 - 李志和他的乐队们.mp3               ",
            "这个世界会好吗 - 李志和他的乐队们.mp3               ",
			"妈妈 - 李志和他的乐队们.mp3      ",
            "听妈妈讲过去的事情 - 李志和他的乐队们.mp3               ",
			"陀螺 - 李志和他的乐队们.mp3      ",
            "鸟语 - 李志和他的乐队们.mp3               ",
			"狐狸 - 李志和他的乐队们.mp3      ",
            "达摩流浪者 - 李志和他的乐队们.mp3               ",
			"结婚 - 李志和他的乐队们.mp3      ",
            "来自我心 - 李志和他的乐队们.mp3               ",
			"虎口脱险 - 李志和他的乐队们.mp3      ",
            "恋恋风尘 - 李志和他的乐队们.mp3               ",
			"倒影 - 李志和他的乐队们.mp3      ",
            "鸵鸟 - 李志和他的乐队们.mp3               ",
			"天空之城 - 李志和他的乐队们.mp3      ",
            "苍井空 - 李志和他的乐队们.mp3               ",
            "意味 - 李志和他的乐队们.mp3               ",
			"家乡 - 李志和他的乐队们.mp3      ",
            "1990年的春天 - 李志和他的乐队们.mp3               ",
            "冬妮娅 - 李志和他的乐队们.mp3               "
            ]
        },
        {
            "album": "我爱南京", "music": [
            "李志 - 意味.mp3      ",
            "李志 - 苍井空.mp3               ",
			"李志 - 结婚.mp3      ",
            "李志 - 鸵鸟.mp3               ",
			"李志 - 天空之城.mp3      ",
            "李志 - 倒影.mp3               ",
			"李志 - 爱.mp3      ",
            "李志 - 家乡.mp3               ",
            "李志 - 1990年的春天.mp3               ",
			"李志 - 冬妮娅.mp3      ",
            "李志 - 听妈妈讲那过去的事情.mp3               ",
			"李志 - 美丽的梭罗河.mp3      ",
            "李志 - 米店.mp3               ",
			"李志 - 思念观世音.mp3      ",
            "李志 - 在那遥远的地方.mp3               ",
            "李志 - 再见.mp3               "
            ]
        },
        {
            "album": "你好，郑州", "music": [
            "李志 - 墙上的向日葵.mp3      ",
            "铅笔 - 李志.mp3               ",
			"关于郑州的记忆 - 李志.mp3      ",
            "李志 - 忽然.mp3               ",
			"李志 - 秋天的老狼.mp3      ",
            "李志 - 带亲.mp3               ",
			"她 - 李志.mp3      ",
            "李志,邵夷贝 - 路.mp3               ",
			"李志 - 夜.mp3               ",
            "李志 - 铅笔(吉松浩版).mp3               "
            ]
        },
        {
            "album": "F", "music": [
            "李志 - 寻找.mp3      ",
            "李志 - 尽头.mp3               ",
			"李志 - 门.mp3      ",
            "李志 - 下雨.mp3               ",
			"李志 - 山阴路的夏天.mp3      ",
            "李志 - 你的早晨.mp3      ",
            "李志 - 杭州.mp3               ",
			"李志 - 日.mp3               "
            ]
        },     
        {
            "album": "Imagine", "music": [
            "青春.mp3      ",
            "离婚.mp3               ",
			"我们不能失去信仰.mp3      ",
            "喀纳斯.mp3               ",
			"天空之城.mp3      ",
            "她.mp3               ",
			"秋天的老狼.mp3      ",
            "被禁忌的游戏.mp3               ",
			"斜.mp3               ",
			"门.mp3               ",
			"尽头.mp3      ",
            "女神.mp3               ",
			"杭州.mp3      ",
            "翁庆年的六英镑.mp3               ",
			"红色气球.mp3      ",
            "1990的春天.mp3               ",
            "结尾.mp3               "
            ]
        },     
		{
            "album": "108 个关键词", "music": [
            "下雨.mp3      ",
            "人民不需要自由.mp3               ",
			"倒影.mp3      ",
            "关于郑州的记忆.mp3               ",
			"和你在一起合唱.mp3      ",
            "墙上的向日葵.mp3      ",
            "她+我们不能失去信仰+1990年的春天.mp3               ",
            "姐姐.mp3               ",
			"尽头.mp3      ",
            "山阴路的夏天.mp3      ",
            "广场.mp3               ",
			"忽然.mp3      ",
            "来了.mp3               ",
			"董卓瑶.mp3      ",
            "阿兰.mp3               ",
			"青春.mp3      "
			]
        }, 
        {
            "album": "勾三搭四", "music": [
            "A spring day in 1990(1990年的春天)2013-李志.mp3      ",
            "Raining(下雨)2013-李志.mp3               ",
			"It's Your Morning&Sky City&A Vague Talk(你的早晨&天空之城&暧昧)2013-李志.mp3      ",
            "Be With You(和你在一起)2013-李志.mp3               ",
			"Sunflower on the wall(墙上的向日葵)2013-李志.mp3      ",
            "Mama(妈妈)2013-李志.mp3               ",
			"Nanjing Summer Day(山阴路的夏天)2013-李志.mp3      ",
            "Implication(意味)2013-李志.mp3               ",
            "Bias(斜)2013-李志.mp3               ",
			"A Southern City in a Late Spring Day(春末的南方城市)2013-李志.mp3      ",
            "It Has Come(来了)2013-李志.mp3               ",
			"Hangzhou&No Faith to Lose(杭州&我们不能失去信仰)2013-李志.mp3      ",
            "Divorce(离婚)2013-李志.mp3               ",
			"Laolang in Autumn(秋天的老狼)2013-李志.mp3      ",
            "Weng's 6 Pounds(翁庆年的六英镑)2013-李志.mp3               ",
			"Ms Dong(董卓瑶)2013-李志.mp3      ",
            "The Forbidden Game(被禁忌的游戏)2013-李志.mp3               ",
			"Has Man a Future(这个世界会好吗)2013-李志.mp3      ",
            "Pencil(铅笔)2013-李志.mp3               ",
			"Gate(门)2013-李志.mp3      ",
            "Black Envelop(黑色信封)2013-李志.mp3               "
            ]
        }, 
        {
            "album": "1701", "music": [
            "李志 - 大象.mp3      ",
            "李志 - 鼠说.mp3               ",
			"李志 - 定西.mp3      ",
            "李志 - 看见.mp3               ",
			"李志 - 不多.mp3      ",
            "李志 - 热河.mp3               ",
			"李志 - 好威武支持有希望.mp3      ",
			"李志 - 方式.mp3               "
            ]
        },  
        {
            "album": "iO", "music": [
            "李志 - 杭州(2014i／O版).mp3      ",
            "李志 - 墙上的向日葵(2014i／O版).mp3               ",
			"李志 - 铅笔(2014i／O版).mp3      ",
            "李志 - 来了(2014i／O版).mp3               ",
			"李志 - 下雨&董卓瑶&忽然(2014i／O版).mp3      ",
            "这个世界会好吗(IO版).mp3               ",
			"李志 - 妈妈(2014i／O版).mp3      ",
            "李志 - 定西(2014i／O版).mp3               ",
			"李志 - 方式(2014i／O版).mp3               ",
			"李志 - 鸵鸟&天空之城&我们不能失去信仰(2014i／O版).mp3               ",
            "李志 - 山阴路的夏天(2014i／O版).mp3               "
            ]
        },   
        {
            "album": "看见（2015现场版）", "music": [
            "李志 - 看见 2015现场版.mp3      ",
            "李志 - 黑色信封 2015现场版.mp3               ",
			"李志 - 苍井空 2015现场版.mp3      ",
            "李志 - 春末的南方城市 2015现场版.mp3               ",
			"李志 - 你离开了南京，从此没有人和我说话 2015现场版.mp3      ",
            "李志 - 下雨（看见Live）.mp3               ",
			"李志 - 热河 2015现场版.mp3      ",
            "李志 - 董卓瑶 2015现场版.mp3               ",
			"李志 - 离婚（看见Live）.mp3               ",
            "李志 - 梵高先生 2015伴奏版.mp3               "
            ]
        },  
        {
            "album": "动静", "music": [
            "李志 - 好威武支持有希望+倒影+青春+人民币 (2015动静版).mp3      ",
            "李志 - 你的早晨 (2015动静版).mp3               ",
			"李志,丁薇 - 普希金 (2015动静版).mp3      ",
            "李志 - 和你在一起 (2015动静版).mp3      ",
            "李志 - 忽然 (2015动静版).mp3               ",
			"李志 - 定西 (2015动静版).mp3      ",
            "地方 (2015动静版).mp3               ",
			"这个世界会好吗 (2015动静版).mp3               ",
			"李志 - 墙上的向日葵 (2015动静版).mp3               ",
            "李志 - 尽头 (2015动静版).mp3               "
            ]
        },    
        {
            "album": "北京不插电现场", "music": [
            "李志 - 黑色信封 (2016 unplugged).mp3      ",
            "李志 - 鸵鸟 (2016 unplugged).mp3               ",
			"李志 - 大象 (2016 unplugged).mp3      ",
            "李志 - 定西 (2016 unplugged).mp3               ",
			"李志 - 这个世界会好吗 (2016 unplugged).mp3      ",
            "结婚 (2016 unplugged) 朱格乐,张怡然,姚斌.mp3               ",
			"关于郑州的记忆 (2016 unplugged).mp3      ",
            "李志 - 杭州 (2016 unplugged).mp3               ",
			"李志,朱格乐,张怡然 - 热河 (2016 unplugged).mp3               ",
			"李志 - 春末的南方城市 (2016 unplugged).mp3               ",
			"李志 - 鼠说 (2016 unplugged).mp3               ",
            "李志,张怡然 - 山阴路的夏天 (2016 unplugged).mp3               "
            ]
        },   
        {
            "album": "8", "music": [
            "李志 - 歌声与微笑.mp3      ",
            "李志 - 蜗牛与黄鹂鸟.mp3               ",
			"李志 - 兰花草.mp3      ",
            "李志 - 数鸭子.mp3               ",
			"李志 - 朋友越多越快乐.mp3      ",
            "李志 - Hey Jude.mp3               ",
			"李志 - 采蘑菇的小姑娘.mp3      ",
            "李志 - 小螺号.mp3               "
            ]
        },   
        {
            "album": "在每一条伤心的应天大街上", "music": [
            "李志 - 在每一条伤心的应天大街上.mp3      ",
            "李志 - 一头偶像.mp3               ",
			"李志 - 克兰河.mp3      ",
            "李志 - 死人.mp3               ",
			"李志 - 一个夜晚.mp3      ",
            "李志 - 哦吼.mp3               ",
			"李志 - 彩色派对.mp3      ",
			"李志 - 你好明天.mp3      "
            ]
        },   
        {
            "album": "电声与管弦乐", "music": [
            "李志 - 序曲.mp3      ",
            "李志 - 杭州.mp3               ",
			"李志 - 尽头.mp3      ",
            "李志 - 定西.mp3               ",
			"李志 - 春末的南方城市.mp3      ",
            "李志 - 黑色信封.mp3               ",
			"李志 - 铅笔.mp3      ",
            "李志 - 和你在一起.mp3               ",
			"李志 - 墙上的向日葵.mp3               ",
			"李志 - 大象.mp3               ",
			"李志 - 门.mp3               ",
            "李志 - 回答.mp3               "
            ]
        }, 
        {
            "album": "爵士乐与不插电新编", "music": [
            "一个夜晚 (相信未来版).mp3      ",
            "关于郑州的记忆 (相信未来版)-李志.mp3               ",
			"卡夫卡 (相信未来版)-李志.mp3      ",
            "死人 (相信未来版).mp3               ",
			"热河 (相信未来版)-李志.mp3      ",
            "爱 (相信未来版)-李志.mp3               ",
			"看见 (相信未来版)-李志.mp3      ",
            "离婚 (相信未来版)-李志.mp3               ",
			"翁庆年的六英镑 (相信未来版).mp3               ",
			"董卓瑶 (相信未来版)-李志.mp3               ",
			"鸵鸟 (相信未来版).mp3               "
            ]
        }, 
        {
            "album": "电声与管弦乐Ⅱ", "music": [
            "一头偶像 (相信未来版).mp3      ",
            "你好明天 (相信未来版).mp3               ",
			"哦吼 (相信未来版).mp3      ",
            "天空之城 (相信未来版).mp3               ",
			"家乡 (相信未来版).mp3      ",
            "寻找 (相信未来版).mp3               ",
			"山阴路的夏天 (相信未来版).mp3      ",
			"相信未来序曲 (乐曲).mp3      ",
            "这个世界会好吗 (相信未来版).mp3               "
            ]
        },
		{
            "album": "洗心革面", "music": [
            "不多-洗心革面.mp3      ",
            "被禁忌的游戏-洗心革面.mp3               ",
			"春末的南方城市-洗心革面.mp3      ",
            "倒影-洗心革面.mp3               ",
			"定西-洗心革面.mp3      ",
            "董卓瑶-洗心革面.mp3               ",
			"大象-洗心革面.mp3      ",
			"方式-洗心革面.mp3      ",
            "关于郑州的记忆-洗心革面.mp3               ",
			"杭州-洗心革面.mp3",
			"和你在一起-洗心革面.mp3",
			"黑色信封-洗心革面.mp3",
			"忽然-洗心革面.mp3",
			"结婚-洗心革面.mp3",
			"尽头-洗心革面.mp3",
			"来了-洗心革面.mp3",
			"路-洗心革面.mp3",
			"门-洗心革面.mp3",
			"你好明天-洗心革面.mp3",
			"你离开了南京从此没有人和我说话-洗心革面.mp3",
			"柠檬加冰(纯音乐)-洗心革面.mp3",
			"哦吼-洗心革面.mp3",
			"墙上的向日葵-洗心革面.mp3",
			"热河-洗心革面.mp3",
			"山阴路的夏天-洗心革面.mp3",
			"死人-洗心革面.mp3",
			"四月十六(纯音乐)-洗心革面.mp3",
			"天空之城-洗心革面.mp3",
			"鸵鸟-洗心革面.mp3",
			"我失去了她-木马、李志.mp3",
			"寻找-洗心革面.mp3",
			"一个夜晚-洗心革面.mp3",
			"这个世界会好吗-洗心革面.mp3"
            ]
        },
        {
            "album": "其他(无损音质加载较慢)", "music": [
            "郭源潮 - 宋冬野.mp3     ",
             "关忆北 - 宋冬野.mp3      ",
              "No Fear In My Heart - 朴树.mp3      ",
               "东风破 - 周杰伦.mp3      ",
                "安和桥 - 宋冬野.mp3      "
                        ]
        }
        ];
    function trim(s) {
        return s.replace(/(^\s*)|(\s*$)/g, "");
    }
	
	var musicpath = [];       //存储所有播放路径和曲目名称
    var allmusicpath = [];
	for(var i in allmuisc){
		for(j in allmuisc[i].music){
			musicpath.push(['http://oss.rizzoli7.com' + "/" + allmuisc[i].album + "/" + trim(allmuisc[i].music[j]),trim(allmuisc[i].music[j])]);
			allmusicpath.push(['http://oss.rizzoli7.com' + "/" + allmuisc[i].album + "/" + trim(allmuisc[i].music[j]),trim(allmuisc[i].music[j])]);
		}
	}



	function randomsort(a, b) {
		return Math.random() > .5 ? -1 : 1;
	};
	var playlist = [];   //存储播放id
	for (var i = 0; i < musicpath.length; i++) {
		playlist.push(i);
	}
	playlist.sort(randomsort);

	var myAudio = $("#player")[0];


    current_music_id = 0; //当前播放id


	current_music_path= musicpath[playlist[current_music_id]][0];//当前播放路径
	$("#title").text(musicpath[playlist[current_music_id]][1].replace(".mp3","").replace(".flac","").replace(".m4a", "").replace(".wav", ""));

	myAudio.src = current_music_path;
	// var pagetitle = musicpath[playlist[current_music_id]][1].replace(".mp3", "").replace(".flac", "").replace(".m4a", "").replace(".wav", "")+" || 我爱南京专属LiveHouse"
    // $(document).attr("title",pagetitle);//修改title值


	function play() {
		myAudio.play();
		$("#onoff").html('<i class="fa fa-pause fa-3x"></i>');

		delta = 0.2;
		// $(document).attr("title",musicpath[playlist[current_music_id]][1].replace(".mp3", "").replace(".flac", "").replace(".m4a", "").replace(".wav", "")+" || 我爱南京专属LiveHouse");//修改title值
	}

	function pause() {
		myAudio.pause();
		$("#onoff").html('<i class="fa fa-play fa-3x"></i>');
		delta = 0;

	}

	function turnonoff() {
		if (myAudio.paused) { /*如果已经暂停*/
			play();   //播放

		} else {
			pause();  //暂停
		}
	}

	function repeatonoff() {
        if(whetherrepeat){
            // 如果单曲循环
            $("#mode").attr("src", "http://rizzoli7.com/images/Shuffle.png");
            whetherrepeat = false;
        }else {
            // 如果随机播放
            $("#mode").attr("src", "http://rizzoli7.com/images/Repeat.png");
            whetherrepeat = true;

        }
    }

    function lastone() {
        if (current_music_id == 0) {
            current_music_id = musicpath.length-1;
        } else {
            current_music_id -= 1;
            $("#img").attr("src", 'http://rizzoli7.com/images/' + Math.floor(Math.random() * 19) + '.jpg');

		}
		current_music_path = musicpath[playlist[current_music_id]][0];
		$("#title").text(musicpath[playlist[current_music_id]][1].replace(".mp3", "").replace(".flac", "").replace(".m4a", "").replace(".wav", ""));
		myAudio.src = current_music_path;
		play();
	}

    function nextone() {
        if (current_music_id == musicpath.length - 1) {
            current_music_id = 0;
        } else {
            current_music_id += 1;
            $("#img").attr("src", 'http://rizzoli7.com/images/' + Math.floor(Math.random() * 19) + '.jpg');
        }
        current_music_path = musicpath[playlist[current_music_id]][0];
        $("#title").text(musicpath[playlist[current_music_id]][1].replace(".mp3", "").replace(".flac", "").replace(".m4a", "").replace(".wav", ""));
        myAudio.src = current_music_path;
        play();
    }


    //进度条控制
    setInterval(present, 100);	//每0.1秒计算进度条长度
    $(".basebar").mousedown(function (ev) {  //拖拽进度条控制进度
        var posX = ev.offsetX;
        var targetLeft = $(this).offset().left;
        var basebarwidth = $(".basebar").width();
        var percentage = (posX) / basebarwidth * 100;
        myAudio.currentTime = myAudio.duration * percentage / 100;
    });

    function present() {
        var length = myAudio.currentTime / myAudio.duration * 100;
        $('.progressbar').width(length + '%');//设置进度条长度
        //自动下一曲
        // if (myAudio.currentTime == myAudio.duration) {
        // 	nextone();
        // }

        if(myAudio.ended || myAudio.currentTime == myAudio.duration){
            if (whetherrepeat) {
                // 如果重复播放，则直接播放
                myAudio.play();
                return;
            } else {
                // 如果随机，继续下一曲
                nextone();
            }
        }
        $("#currenttime").html(s_to_hs(parseInt(myAudio.currentTime)));
        $("#totaltime").html(s_to_hs(parseInt(myAudio.duration)));

    };
   
	function s_to_hs(s) {
		//计算分钟
		//算法：将秒数除以60，然后下舍入，既得到分钟数
		var h;
		h = Math.floor(s / 60);
		//计算秒
		//算法：取得秒%60的余数，既得到秒数
		s = s % 60;
		//将变量转换为字符串
		h += '';
		s += '';
		//如果只有一位数，前面增加一个0
		h = (h.length == 1) ? '0' + h : h;
		s = (s.length == 1) ? '0' + s : s;
		if(isNaN(h)){
		    return "&infin;"
        }
		return h + ':' + s;
	};
	String.prototype.replaceAll = function (exp, newStr) {
		return this.replace(new RegExp(exp, "gm"), newStr);
	};
	String.prototype.format = function (args) {
		var result = this;
		if (arguments.length < 1) {
			return result;
		}

		var data = arguments; // 如果模板参数是数组
		if (arguments.length == 1 && typeof (args) == "object") {
			// 如果模板参数是对象
			data = args;
		}
		for (var key in data) {
			var value = data[key];
			if (undefined != value) {
				result = result.replaceAll("\\{" + key + "\\}", value);
			}
		}
		return result;
	};

	function StringFormat() {
		if (arguments.length == 0)
			return null;
		var str = arguments[0];
		for (var i = 1; i < arguments.length; i++) {
			var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
			str = str.replace(re, arguments[i]);
		}
		return str;
	};
	$(function () {
		$("#accordion").empty();
		var playlisttemp = '';
		var htmlrender = '<li>' +
				'<div class="link">' +
				'<i>{0}</i>' +
				'<div class="album">{1}</div>' +
				'<i class="fa fa-chevron-down"></i>' +
				'</div>' +
				'<ul class="submenu">' +
				' {2}' +
				'</ul>' +
				'</li>';
		for (var i in allmuisc) {
			var id = i;
			var albumname = allmuisc[i].album;
			var lis = "<li><a class='playall' albumname='"+albumname+"' style='text-align: left;  background: #4D4D4D;'>>> 播放全部</a></li>";
			for (j in allmuisc[i].music) {
				href = 'http://oss.rizzoli7.com' + "/" + allmuisc[i].album + "/" + trim(allmuisc[i].music[j]);
				musicname = trim(allmuisc[i].music[j]);
				lis = lis + '<li><a class="url" hrefsrc="' + href + '">' + musicname + '</a></li>';
			}

			playlisttemp += htmlrender.format(parseInt(id) + 1, albumname, lis);

		}
		$("#accordion").append(playlisttemp);


		var Accordion = function (el, multiple) {
			this.el = el || {};
			this.multiple = multiple || false;

			// Variables privadas
			var links = this.el.find('.link');
			// Evento
			links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
		}

		Accordion.prototype.dropdown = function (e) {
			var $el = e.data.el;
			$this = $(this),
					$next = $this.next();

			$next.slideToggle();
			$this.parent().toggleClass('open');

			if (!e.data.multiple) {
				$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
			}
			;
		}

        var accordion = new Accordion($('#accordion'), false);

        $("a.url").bind("click", function () {
            myAudio.src = this.getAttribute("hrefsrc");
            $("#title").text(this.innerHTML.replace(".mp3", "").replace(".flac", "").replace(".m4a", "").replace(".wav", ""));
            $("#img").attr("src", 'http://rizzoli7.com/images/' + Math.floor(Math.random() * 19) + '.jpg');

            play();


        });

        $("a.playall").bind("click", function () {

            var albumname = this.getAttribute("albumname");
            console.log(albumname);
            musicpath_new = [];
            for(var i=0;i<allmusicpath.length;i++){
                if(allmusicpath[i][0].indexOf(albumname)>0){

                    musicpath_new.push( 'http://oss.rizzoli7.com' +"/"+albumname+"/"+trim(allmusicpath[i][1]),trim(allmusicpath[i][1])]);

                }
            }
            console.log(musicpath_new);
            //替换新的musicpath
            musicpath = musicpath_new;

            playlist = [];   //清空playlist
            //重新添加播放顺序
            for (var i = 0; i < musicpath.length; i++) {
                playlist.push(i);
            }
            // playlist.sort(randomsort); //顺序播放不随机
            //重置current id和path
            current_music_id = 0;
            current_music_path = musicpath[playlist[current_music_id]][0];//当前播放路径
            $("#title").text(musicpath[playlist[current_music_id]][1].replace(".mp3", "").replace(".flac", "").replace(".m4a", "").replace(".wav", ""));

            myAudio.src = current_music_path;

            console.log(current_music_id);
            console.log(current_music_path);
            play();



            // myAudio.src = this.getAttribute("albumname");
            // $("#title").text(this.innerHTML.replace(".mp3", "").replace(".flac", "").replace(".m4a", "").replace(".wav", ""));
            // $("#img").attr("src", 'images/' + Math.floor(Math.random() * 11) + '.jpg');
            //
            // play();


        });
        $("#randomall").bind("click", function () {

        musicpath_new = [];
        for (var i = 0; i < allmusicpath.length; i++) {
            musicpath_new.push(allmusicpath[i]);

        }
        console.log(musicpath_new);
        //替换新的musicpath
        musicpath = musicpath_new;

        playlist = [];   //清空playlist
        //重新添加播放顺序
        for (var i = 0; i < musicpath.length; i++) {
            playlist.push(i);
        }
        playlist.sort(randomsort);
        //重置current id和path
        current_music_id = 0;
        current_music_path = musicpath[playlist[current_music_id]][0];//当前播放路径
        $("#title").text(musicpath[playlist[current_music_id]][1].replace(".mp3", "").replace(".flac", "").replace(".m4a", "").replace(".wav", ""));

        myAudio.src = current_music_path;

        console.log(current_music_id);
        console.log(current_music_path);
        play();


    });

    });