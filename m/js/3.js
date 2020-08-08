$(document).ready(function(){

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [
		
		
		{
			title:"An American Prayer(Non-Stop Version)",
			mp3:"music/The Doors - An American Prayer(Non-Stop Version).mp3",
		
		},
		{
			title:"Break On Through",
			mp3:"music/The Doors - Break On Through (To The Other Side).mp3",
		
		},
		{
			title:"Soul Kitchen",
			mp3:"music/The Doors - Soul Kitchen.mp3",
	
		},
		{
			title:"The Crystal Ship",
			mp3:"music/The Doors - The Crystal Ship.mp3",
	
		},
		{
			title:"Twentieth Century Fox",
			mp3:"music/The Doors - Twentieth Century Fox.mp3",
			
		}
		,{
			title:"Alabama Song",
			mp3:"music/The Doors - Alabama Song (Whisky Bar).mp3",
		
		}
		,{
			title:"Light My Fire",
			mp3:"music/The Doors - Light My Fire.mp3",
		
		},{
			title:"Back Door Man",
			mp3:"music/The Doors - Back Door Man.mp3",
		
		},{
			title:"I Looked At You",
			mp3:"music/The Doors - I Looked At You.mp3",
		
		},{
			title:"End Of The Night",
			mp3:"music/The Doors - End Of The Night.mp3",
		
		},{
			title:"Take It As It Comes",
			mp3:"music/The Doors - Take It As It Comes.mp3",
		
		},{
			title:"The End",
			mp3:"music/The End.mp3",
		
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