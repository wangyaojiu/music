$(document).ready(function(){

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [
		
		
		{
			title:"The Wall",
			mp3:"http://u.musiccc.cn/Pink%20Floyd%20-(%E6%95%B4%E8%BD%A8)%20The%20Wall.mp3",
	
		},
		{
			title:"The Dark Side of the Moon",
			mp3:"music/Pink Floyd -(整轨) The Dark Side of the Moon.mp3",
			
		}
		,
		{
			title:"Wish You Were Here",
			mp3:"music/Pink Floyd - (整轨)Wish You Were Here.mp3",
		
		},
		{
			title:"The Division Bell",
			mp3:"music/Pink Floyd -(整轨)The Division Bell.mp3",
	
		}
		,
		{
			title:"Meddle",
			mp3:"music/Pink Floyd -(整轨)Meddle.mp3",
	
		}
		,
		{
			title:"Atom Heart Mother",
			mp3:"music/Pink Floyd -(整轨)Atom Heart Mother.mp3",
	
		}
		
	], {
		swfPath: "../../dist/jplayer",
		supplied: "oga, mp3",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});
});