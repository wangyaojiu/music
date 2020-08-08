$(document).ready(function(){

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [
		
		
		{
			title:"Heroin",
			mp3:"http://u.musiccc.cn/The%20Velvet%20Underground%2CNico%20-%20Heroin%20%5BAlbum%20Version%20(Stereo)%5D.mp3",
	
		},

		{
			title:"Heroin (Live In San Francisco ／ 1969)",
			mp3:"music/The Velvet Underground - Heroin (Live In San Francisco ／ 1969).mp3",
			
		},

		{
			title:"I Found a Reason",
			mp3:"http://u.musiccc.cn/The%20Velvet%20Underground%20-%20I%20Found%20a%20Reason.mp3",
			
		}
		,

		{
			title:"Pale Blue Eyes",
			mp3:"http://u.musiccc.cn/Pale%20Blue%20Eyes.mp3",
			
		}
		,

		{
			title:"The Black Angel's Death Song",
			mp3:"http://u.musiccc.cn/The%20Velvet%20Underground%2CNico%20-%20The%20Black%20Angel's%20Death%20Song%20%5BAlbum%20Version%20(Stereo)%5D.mp3",
		
		}
		,
		{
			title:"Sunday Morning",
			mp3:"http://u.musiccc.cn/The%20Velvet%20Underground%2CNico%20-%20Sunday%20Morning.mp3",
	
		}
		,
		{
			title:"After Hours",
			mp3:"http://u.musiccc.cn/The%20Velvet%20Underground%20-%20After%20Hours.mp3",
	
		}
		,
		{
			title:"Candy Says",
			mp3:"http://u.musiccc.cn/The%20Velvet%20Underground%20-%20Candy%20Says.mp3",
	
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