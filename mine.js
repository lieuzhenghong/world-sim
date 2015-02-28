//Resource constructor function

function resource(resource_name, resource_type) {
	this.resourceName = resource_name;
	this.resourceType = resource_type;
}


function mine(ore_type){
	//create an object of ore
	var ore = new resource(ore_type, "ore");
	console.log(ore);
	new_player.inventory.push(ore);
	console.log(new_player.inventory);
}