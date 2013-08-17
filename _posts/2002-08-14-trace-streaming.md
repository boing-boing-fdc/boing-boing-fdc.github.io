---
layout: page
title: Streaming Tool
section: trace-streaming
---
<script language="JavaScript" type="text/javascript" src="http://admin.brightcove.com/js/BrightcoveExperiences.js"></script> 
<script type="text/javascript" src="http://playbacktool-pl475c6m.dotcloud.com/socket.io/socket.io.js"></script>
<script>var socketServer = "http://playbacktool-pl475c6m.dotcloud.com";</script>
<script src="/assets/js/videoControl.js" type="text/javascript"></script>

<div id='videoContainer' class='section'>
	<object id="vid" class="BrightcoveExperience">
	  <param name="bgcolor" value="#FFFFFF" />
	  <param name="width" value="711" />
	  <param name="height" value="400" />
	  <param name="playerID" value="2602619980001" />
	  <param name="playerKey" value="AQ~~,AAACD9TFb9E~,Hj-V_V-Zn65AVKxn2Rxj2BjPC66fuRfm" />
	  <param name="isVid" value="true" />
	  <param name="isUI" value="true" />
	  <param name="dynamicStreaming" value="true" />
	    <param name="@videoPlayer" value="2604921695001" />
	  
	  <param name="includeAPI" value="true" />
	  <param name="templateLoadHandler" value="onTemplateLoad" />
	  <param name="templateReadyHandler" value="onTemplateReady" />
	</object>
</div>

<div id="outputContainer" class='section'></div>
