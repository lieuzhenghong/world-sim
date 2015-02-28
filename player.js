//Creates a player object constructor 

var Player = function(name,inventory,skills) {
	this.playerName = name;
	this.inventory = inventory;
	this.skills = skills;

};

Player.prototype.gather = function(resource_name, resource_type){
		//Creates a new Resource object
		var new_resource = new Resource(resource_name, resource_type);
		player.inventory.push(new_resource);
		console.log(player.inventory.length);
		//Print inventory 
		document.getElementById('console_log').innerHTML += "<p>" + player.inventory[player.inventory.length - 1].resourceName + "g athered! </p>";

		//The following is code to make it auto scroll
		var objDiv = document.getElementById("console_log");
		objDiv.scrollTop = objDiv.scrollHeight;
}



//Resource constructor

var Resource = function(resource_name, resource_type) {
	this.resourceName = resource_name;
	this.resourceType = resource_type;
};

var player = new Player("Player One", [], []);

//Resource display

Player.prototype.refresh = function(){
	document.getElementById('inventory_pane')
}


