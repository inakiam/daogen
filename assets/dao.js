//Don't touch this function.
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}


//or this
String.prototype.hashCode = function() {
  var hash = 0, i, chr, len;
  if (this.length === 0) return hash;
  for (i = 0, len = this.length; i < len; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

function genderswap(){
	
	if(document.getElementById("gender").className == "male"){

		document.getElementById("gender").className = "female";
		
	}
	else if(document.getElementById("gender").className == "female") {
		
		document.getElementById("gender").className = "neuter";
		
	}
	else{
		
		document.getElementById("gender").className = "male";
		
	}
	
}

//Or this one.
function seeds(input){
	
	var name = input.origname.value;
	
	if(name == ""){
		
		return false;
		
	}
	
	
	
	var a = [name.hashCode()];
	
	for (var i = 0; i < 10; i++){
		a.push(a[a.length - 1].toString().hashCode());
	}
	
	return a;
	
	
}

function pluralize(term){
	var plurals = [["Butterfl","y","ies"],["Cockroach","","es"],["Deer","",""],["Dragonfl","y","ies"],["Fox","","es"],["G","oose","eese"],["Mosquito","","es"],["Ox","","en"],["Phoenix","","es"],["Sta","ff","ves"],["Wol","f","ves"],["Leech","","es"],["Loach","","es"],["Hero","","es"],["Eternit","y","ies"],["Serenit","y","ies"],["Vort","ex","ices"],["Volcano","","es"],["Kni","fe","ves"],["Deit","y","ies"],["Cris","is","es"],["North","",""],["South","",""],["East","",""],["West","",""]];
	var unPterm = term;
	var items;
	
	for(var i = 0; i < plurals.length;i++){
		items = plurals[i];
		term = (items[0] + items[1] == unPterm) ? items[0] + items[2] : term;
		
	}
		
	return (term == unPterm) ? term + "s" : term;
	
}

function s(){
	
	c = [["Butterfl","y","ies"],["Cockroach","","es"],["Deer","",""],["Dragonfl","y","ies"],["Fox","","es"],["G","oose","eese"],["Mosquito","","es"],["Ox","","en"],["Phoenix","","es"],["Sta","ff","ves"],["Wol","f","ves"],["Leech","","es"],["Loach","","es"],["Hero","","es"],["Eternit","y","ies"],["Serenit","y","ies"],["Vort","ex","ices"],["Volcano","","es"],["Kni","fe","ves"],["Deit","y","ies"],["Cris","is","es"],["North","",""],["South","",""],["East","",""],["West","",""]];
	
	for(var i =0;i<c.length;i++){console.log("\"" + c[i][0] + c[i][1] + "\",");}
	
	
}

function setTitles(){
	
	var nullTitles = ["Hero","Cultivator","Scholar","Alchemist","Eccentric","Daoist","Dragoneer","Honor Guard","Herbalist","Dao Child","Dao General","Clan Chief","Overseer","Dao Protector","Dharma Protector","Elder","Guru","Grand Dragoneer","Immortal","Reverend","Sect Leader","Pontifex","Sect Founder","Supreme General","Ancestor","Sage","Saint","Underworld Judge","Bodhisattva ","Paragon","Demon Sealer"];

	var genderTitles = [["Swordsman","Swordswoman"],["Master","Mistress"],["Lord","Lady"],["King","Queen"],["Grandmaster","Grandmistress"],["Dao Emperor","Dao Empress"],["Dao Master","Dao Mistress"],["Chieftan","Cheiftess"],["Abbot","Abess"],["Greatfather","Greatmother"],["Dao Lord","Dao Lady"],["Patriarch","Matriarch"],["Priest","Priestess"],["Monk","Nun"],["Prince","Princess"],["Grandpa","Granny"],["Crown Prince","Crown Princess"]];
	
	var index;
	
	var finalTitles = nullTitles;
	
	if(document.getElementById("gender").className == "neuter"){
		
		return finalTitles;
		
	}
	
	index = document.getElementById("gender").className == "male" ? 0 : 1;
	
	for(var i = 0; i < genderTitles.length; i++){
	
		finalTitles.push(genderTitles[i][index]);
		
	}
	
	return finalTitles;
	
}

//This one can be touched in areas I marked as safe.
function daoName(rwxmode,seed){
	
	//Safe-to-edit vars
	var titles = setTitles();
	
	
	var adj = ["Abstruse","Angry","Arcadian","Archaic","Azure","Bashful","Berserk","Black","Blood-colored","Blue","Bronze","Capricious","Celestial","Cerulean","Clairvoyant","Cosmic","Courageous","Cowardly","Crafty","Crimson","Curious","Cyan","Demonic","Devilish","Dharmic","Divine","Dreadful","Enlightened","Enraged","Ethereal","Faceless","Fiendish","Furious","Garrulous","Ghostly","Golden","Gossamer","Greedy","Green","Heartbroken","Heavenly","Indigo","Jade","Jubilant","Loquacious","Lovesick","Lucky","Magenta","Magical","Magnanimous","Melancholic","Mystic","Necromantic","Nefarious","Occult","Onyx","Orange","Prideful","Profound","Psychic","Purple","Red","Renegade","Saffron","Sagacious","Serene","Shameless","Silver","Sublime","Supernal","Supreme","Transcendant","Vampiric","Vermilion","Voracious","White","Yang","Yellow","Yin","Yin-Yang","Youthful","Murderous","Vengeful","Killer","Benevolent","Chivalrous","Gallant","Heroic","Magnanimous","Intrepid","Reckless","Slashing","Stabbing","Glittering","Jumping","Running","Leaping","Flying","Floating","Sleeping","Eternal","Serene","Volcanic","Elemental","Icy","Burning","Freezing","Tranquil","Hellish","Underworld","Netherworld","Reborn","Deadly","Cross-legged","Lunar","Solar","Stellar","Universal","One","Neverending","Feathered","Furry","Obese","Gargantuan","Gigantic","Mythical","Ancient","Primeval","Primordial","Chaotic","Venerable","All-knowing","Omniscient","Nirvanic","Fragrant","Spicy","Revolting","Handsome","Bearded","Long-haired","Undying","Undead","Diamond","Violet","Righteous","Drunken","Invincible","Poisonous","Venemous","Toxic","Spinning","Whirling","Psycopathic","Granite","Stone","Wooden","Fiery","Raging","Empty","Original","Ophidian","Iridian","Subtle","True","False","Legendary","Fluid","Flowing","Liquid","Illusory","Ascendant","Shoeless","Earless","Eyeless","One-armed","One-legged","Crippled","Headless","Half-handed","Masked","Hooded","Cloaked","Heroic","Beautiful","Perverted","Licentious","Tentacled","Spiked","Shelled","Bejewelled","Gilt","Armored","Totemic","Karmic","Hidden","Iron","Copper","Platinum","Earthly","Ochre"];
	
	var pluralisers = ["Two","Three","Five","Seven","Nine","Ten","Eleven","Thirteen","Hundred","Thousand","Myriad","Infinite","Many","Manifold","Infinite","Nintey-Nine"];
	
	var nouns = ["Alligator","Ant","Axe","Bat","Bear","Beetle","Broadsword","Cat","Caterpillar","Centipede","Chameleon","Cleaver","Cobra","Crane","Cricket","Crocodile","Dagger","Dog","Dove","Dragon","Drake","Eagle","Egret","Elephant","Fan","Flea","Frog","Gorilla","Grasshopper","Greatsword","Gryphon","Hare","Hawk","Hornet","Hummingbird","Jackal","Jaguar","Leopard","Lion","Lizard","Llama","Locust","Mace","Mantis","Millipede","Moth","Newt","Owl","Panda","Parrot","Peacock","Penguin","Pigeon","Pill","Porcupine","Qilin","Saber","Salamander","Scorpion","Shadow","Shield","Snake","Sparrow","Spear","Spider","Swan","Sword","Tarantula","Tiger","Toad","Tortoise","Toucan","Turtle","Unicorn","Viper","Wasp","Vampire","Mermaid","Manticore","Demon","Devil","Immortal","Ghost","Wyvern","Earthworm","Killer","Assassin","Pearl","Love","Hate","Mountain","Forest","River","Sea","Ocean","Lake","Cloud","Thunderclap","Tempest","Rainstorm","Flood","Tree","Flower","Rose","Chrysanthemum","Lotus","Orchid","Boulder","Heart","Fist","Blood","Moon","Sun","Star","Starlight","Meteor","Whirlpool","Windstorm","Hailstorm","Planet","Torture","Ice","Fire","Earth ","Metal","Air","Water","Darkness","Light ","Mansion","Pagoda","Spring","Summer","Fall","Winter","Bridge","Cauldron","God","Destruction","Murder","Salvation","Reincarnation","Shade","Death","Jade","Serpent","Python","Chaos","Nirvana","Mirror","Chopsticks","Wine","Alcohol","Flagon","Arrow","Chariot","Millionaire","Billionaire","Trillionaire","Quadrillionaire","Allheaven","Origin","Scholar","Revenant","Immortal","","Seahorse","Porcupine","Hound","Divinity","Chariot","Butterfly","Cockroach","Deer","Dragonfly","Fox","Goose","Mosquito","Ox","Phoenix","Staff","Wolf","Leech","Loach","Hero","Eternity","Serenity","Vortex","Volcano","Knife","Deity","Crisis","North","South","East","West"];
	
	
	var bp = "The Divination is complete.<br /><br /> You are... "
	
	var an;//chose which arrar is first part of name.
	var indices = [];
	
	var title;
	
	if(!seed){
		//set adj or noun	
		an = [adj,nouns,pluralisers][Math.floor(Math.random()*3)];
		
		indices = [Math.floor(Math.random() * titles.length), Math.floor(Math.random()* an.length), Math.floor(Math.random() * nouns.length)];
		
	}
	
	else{
		
		an = [adj,nouns,pluralisers][Math.abs(seed[0]%3)];
		
		indices = [Math.abs(seed[1] % (titles.length - 1)), Math.abs(seed[2] % (an.length - 1)),  Math.abs(seed[3] % (nouns.length - 1))]
		
		
	}
	
	//prevent duplicate titles.
	if (indices[1] == indices[2]){
			
		indices[2] = indices[2] + 1 % (nouns.length - 1);
			
	}
	
	title = [titles[indices[0]], an[indices[1]], (an == pluralisers) ? pluralize(nouns[indices[2]]) : nouns[indices[2]]]

	
	if(rwxmode){
		return bp + title[0] + " " + toTitleCase(title[1] + title[2]) + "!!!";
	}
	else{
		return  bp + title[0] + " " + toTitleCase(title[1] + " " + title[2]) + "!!!";
	}
}