var dataPoints = {};
var videoStartTimestamps = {};
var stats = {};
var config = {
	'key': 'abc',
	'dataSource': 'bb_c-max_day_1_part_2'
}
var lastDataTimestamp, lastVideoTimestamp;

brightcove.createExperiences();
var videoPlayer, $outputContainer;
function onTemplateReady() {
	
}

function onTemplateLoad(id) {
	$outputContainer = $('#outputContainer');
	var player = brightcove.api.getExperience(id);
	var APIModules = brightcove.api.modules.APIModules;
	videoPlayer = player.getModule(APIModules.VIDEO_PLAYER);
	
    var modVP = player.getModule(APIModules.VIDEO_PLAYER);
    var modExp = player.getModule(APIModules.EXPERIENCE);
    var modCon = player.getModule(APIModules.CONTENT);
    
    var e = brightcove.api.events.MediaEvent;
    
    modVP.addEventListener(e.PLAY, function(evt){
	    console.log('play: ' + evt.position);
	    socket.emit('play', evt.position + videoStartTimestamps[config.dataSource]);
    });
    
    modVP.addEventListener(e.PROGRESS, function(evt){
	    //lastVideoTimestamp = evt.position + videoStartTimestamps[config.dataSource];   
    });
    
    modVP.addEventListener(e.STOP, function(){
	    console.log('pause');   
	    socket.emit('pause');
    });
    
    modVP.addEventListener(e.SEEK_NOTIFY, function(evt){
	    socket.emit('play', evt.position + videoStartTimestamps[config.dataSource]);
	     videoPlayer.getIsPlaying( function(isPlaying) {
		    if (!isPlaying) {
		       socket.emit('pause');
		       $outputContainer.empty();
		    }
		    
		 });
    });
    /*
    setInterval(function(){
	    var dif = Math.abs(lastVideoTimestamp - lastDataTimestamp);
	    console.log(dif);
	    if (dif > 1){
		    videoPlayer.seek(lastDataTimestamp - videoStartTimestamps[config.dataSource]);
		    if(status.state == 'playing'){	
		       videoPlayer.play();
		    }
		    
	    }
    },1000);
    */

    
}

console.log('Using Socket Server: ' + socketServer);
var socket = io.connect(socketServer, {port: 80});


videoStartTimestamps['bb_c-max_day_1_part_2'] = 1375907919.25;


socket.on('connect', function(){
	socket.emit('init', config.key);
});

socket.on('ready', function(dataSource){
	if(!dataSource){
		socket.emit('setDataSource', config.dataSource);
	}
	else{
		console.log('Data source already set to ', dataSource)
	}
});

socket.on('output', function(data){
	//console.log(data);
	var content = "";
	$.each(data.records, function(i, obj){
		dataPoints[obj.name] = obj.value;			
	});
	
	lastDataTimestamp = data.records[0].timestamp;
	content = "<div>timestamp: <b>" + lastDataTimestamp + "</b>";
	
	for (var item in dataPoints) {
		if(dataPoints.hasOwnProperty(item)){
			content += "<div>" + item + ": <b>" + dataPoints[item] + "</b></div>";
		}
	};
	
	$outputContainer.html(content);
});

socket.on('message', function(msg){
	console.log('Message: ', msg);
});

socket.on('status', function(s){
	console.log('Status: ', s);
	status = s;
});




function compare(a,b) {
	if (a.name < b.name){
		return -1;
	}
	if (a.name > b.name){
		return 1;
	}
	return 0;
}






































