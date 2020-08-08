$(document).ready(function(){

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [
		
		{
			title:"Abbey Road(NoN-Stop Version)",
			mp3:"music/The Beatles - Abbey Road.mp3",
	
		},
		{
			title:"Sgt. Pepper's...(Non-stop Version)",
			mp3:"music/The Beatles - Sgt. Pepper's ...(Non-stop Version).mp3",
	
		},
		{
			title:"Rubber Soul（Non-Stop Version)",
			mp3:"music/The Beatles - Rubber Soul（Non-Stop Version).mp3",}
		,
		{
			title:"Help!(Non-Stop Version) ",
			mp3:"music/The Beatles - Help!(Non-Stop Version) .mp3",}
		,
		{
			title:"1（Non-Stop Version）",
			mp3:"music/The Beatles -1（Non-Stop Version）.mp",}
	
		,
		{
			title:"Hey Jude",
			mp3:"music/The Beatles - Hey Jude.mp3",
		
		},
		{
			title:"Let It Be",
			mp3:"music/The Beatles - Let It Be.mp3",
	
		},
		{
			title:"Love Me Do",
			mp3:"music/The Beatles - Love Me Do.mp3",
	
		},
		{
			title:"Yellow Submarine",
			mp3:"music/The Beatles - Yellow Submarine.mp3",
			
		}
		,{
			title:"Yesterday",
			mp3:"music/The Beatles - Yesterday.mp3",
		
		}
		,{
			title:"Norwegian Wood",
			mp3:"music/The Beatles-Norwegian Wood.mp3",
		
		}
		,{
			title:"In My Life",
			mp3:"music/The Beatles - In My Life.mp3",
		
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