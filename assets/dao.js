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
	var plurals = [["Butterfl","y","ies"],["Cockroach","","es"],["Deer","",""],["Dragonfl","y","ies"],["Fox","","es"],["G","oose","eese"],["Mosquito","","es"],["Ox","","en"],["Phoenix","","es"],["Sta","ff","ves"],["Wol","f","ves"],["Leech","","es"],["Loach","","es"],["Hero","","es"],["Eternit","y","ies"],["Serenit","y","ies"],["Vort","ex","ices"],["Volcano","","es"],["Kni","fe","ves"],["Deit","y","ies"],["Cris","is","es"],["North","",""],["South","",""],["East","",""],["West","",""],["Darkness","","es"],["Chopsticks","",""],["Bag"," of Holding","s of holding"],["Meat Jell","y","ies"],["Yellow Springs","",""],["Feng-Shui Compass","","es"]];
	var unPterm = term;
	var items;
	
	for(var i = 0; i < plurals.length;i++){
		items = plurals[i];
		if (items[0] + items[1] == unPterm) {
			term = items[0] + items[2];
			return term;
		} 
		
	}
		
	return term + "s";
	
}

function s(){
	
	c = [["Butterfl","y","ies"],["Cockroach","","es"],["Deer","",""],["Dragonfl","y","ies"],["Fox","","es"],["G","oose","eese"],["Mosquito","","es"],["Ox","","en"],["Phoenix","","es"],["Sta","ff","ves"],["Wol","f","ves"],["Leech","","es"],["Loach","","es"],["Hero","","es"],["Eternit","y","ies"],["Serenit","y","ies"],["Vort","ex","ices"],["Volcano","","es"],["Kni","fe","ves"],["Deit","y","ies"],["Cris","is","es"],["North","",""],["South","",""],["East","",""],["West","",""]];
	
	for(var i =0;i<c.length;i++){console.log("\"" + c[i][0] + c[i][1] + "\",");}
	
	
}

function setTitles(){
	
	var nullTitles = [,"Cultivator","Scholar","Alchemist","Eccentric","Daoist","Dragoneer","Honor Guard","Herbalist","Dao Child","Dao General","Clan Chief","Overseer","Dao Protector","Dharma Protector","Elder","Guru","Grand Dragoneer","Immortal","Reverend","Crown Prince","Sect Leader","Pontifex","Sect Founder","Supreme General","Sage","Saint","Underworld Judge","Bodhisattva ","Paragon","Demon Sealer"];

	var genderTitles = [["Swordsman","Swordswoman"],["Master","Mistress"],["Lord","Lady"],["King","Queen"],["Grandmaster","Grandmistress"],["Dao Emperor","Dao Empress"],["Dao Master","Dao Mistress"],["Chieftan","Cheiftess"],["Abbot","Abess"],["Greatfather","Greatmother"],["Dao Lord","Dao Lady"],["Patriarch","Matriarch"],["Priest","Priestess"],["Ancestor","Ancestress"],["Monk","Nun"],["Prince","Princess"],["Grandpa","Granny"],["Hero","Heroine"]];
	
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
	
	
	var adj = ["Abstruse","Accursed","Adamant","All-knowing","Allheaven","Alternative","Amarinthine","Ancient","Angry","Animal","Antediluvian","Antimony","Antithetical","Apocalyptic","Apocryphal","Apotropaic","Aquiline","Arcadian","Archaic","Archetypal","Armored","Ascendant","Ashen","Astral","Azure","Azure-robed","Backstabbing","Barbarian","Bashful","Bearded","Beautiful","Bejewelled","Beloved","Benevolent","Benighted","Berserk","Bespoken","Black","Black-robed","Blood-colored","Bloodless","Bloody","Blue","Booming","Broken","Bronze","Burning","Capricious","Celestial","Cerulean","Chaotic","Chivalrous","Clairvoyant","Cloaked","Complete","Copper","Corrupt","Cosmic","Courageous","Cowardly","Crafty","Crimson","Crimson-robed","Crippled","Cross-legged","Crumbling","Curious","Cyan","Deadly","Deathless","Deciduous","Defiant","Demonic","Devilish","Dharmic","Diamond","Divine","Domineering","Dreadful","Drunken","Earless","Earthly","Ebon","Elemental","Empty","Empyrean","Enclosed","Enlightened","Enraged","Entropic","Essential","Eternal","Ethereal","Eutrophic","Evergreen","Explosive","Eyeless","Faceless","False","Farsighted","Fearful","Feathered","Feckless","Ferrous","Fiendish","Fiery","Five-Elements","Floating","Flowing","Fluid","Flying","Forgotten","Fragrant","Freezing","Furious","Furry","Gallant","Gargantuan","Garrulous","Geomantic","Ghostly","Gigantic","Gilt","Glittering","Godly","Golden","Gossamer","Granite","Graven","Greedy","Green","Grey","Half-handed","Handsome","Hateful","Headless","Heartbroken","Heavenly","Hellish","Heretical","Heroic","Heterodox","Hidden","Hooded","Hopeless","Icy","Illusory","Imperial","Indigo","Intransigent","Intrepid","Invincible","Iridian","Iron","Irredeemable","Irreverent","Jade","Jadeite","Jubilant","Jumping","Karmic","Killer","Leaping","Legendary","Licentious","Liquid","Loathsome","Lone","Long-haired","Loquacious","Loveless","Lovely","Lovesick","Lower","Lucky","Lunar","Magenta","Magical","Magnanimous","Magnanimous","Martial","Masked","Melancholic","Monochrome","Murderous","Mystic","Mythical","Near","Necromantic","Nefarious","Netherworld","Neverending","Nirvanic","Obese","Occult","Ochre","Omniscient","One","One-armed","One-legged","Onyx","Ophidian","Orange","Original","Orthodox","Overbearing","Overwhelming","Parochial","Peaceful","Penultimate","Penumbral","Perverted","Pious","Platinum","Pock-marked","Poisonous","Porcelain","Precipital","Prideful","Primeval","Primordial","Profound","Psychedelic","Psychic","Psycopathic","Pure","Purple","Purposeful","Raging","Rampaging","Reborn","Reckless","Red","Renegade","Revolting","Righteous","Rumbling","Running","Saffron","Sagacious","Salty","Sepulchral","Serene","Shameless","Shelled","Shoeless","Silver","Slashing","Sleeping","Solar","Sole","Sorrowful","Soulless","Sourceless","Spicy","Spiked","Spinning","Squamous","Stabbing","Stellar","Stone","Sublime","Subtle","Sulphurous","Supernal","Supreme","Symmetrical","Tattooed","Tenebral","Teneral","Tentacled","Tesselated","Timeless","Totemic","Toxic","Tranquil","Tranquil","Transcendant","True","Tyrannical","Tyrian","Ultimate","Umbral","Unaging","Uncreated","Undead","Underworld","Undying","Universal","Upper","Vampiric","Vegetal","Venemous","Venerable","Vengeful","Verdurous","Vermilion","Violet","Volcanic","Voracious","Whirling","White","White-robed","Wooden","Yang","Yellow","Yin","Yin-Yang","Youthful"];
	
	var pluralisers = ["Two","Three","Five","Seven","Nine","Ten","Eleven","Thirteen","Hundred","Thousand","Myriad","Infinite","Many","Manifold","Infinite","Nintey-Nine","10,000","Thirty-Six","Sixty","Sixty-Four","Multitudinous","Endless"];
	
	var nouns = ["Darkness","Chopsticks","Air","Alcohol","Alligator","Ant","Arrow","Assassin","Asura","Avalanch","Axe","Bat","Bear","Beetle","Billionaire","Blood","Boulder","Bridge","Broadsword","Canopy","Cat","Caterpillar","Cauldron","Centipede","Chameleon","Chaos","Chariot","Chrysanthemum","Cleaver","Cloud","Cobra","Crane","Cricket","Crocodile","Dagger","Dao","Daoist","Death","Deity","Demon","Despair","Destruction","Devil","Divinity","Dog","Dove","Dragon","Drake","Eagle","Earth ","Earthworm","Egret","Elephant","Fall","Fan","Fire","Fist","Flagon","Flea","Flood","Flower","Forest","Frog","Ghost","God","God","Gorilla","Grasshopper","Greatsword","Gryphon","Hailstorm","Hare","Hate","Hawk","Heart","Hope","Hornet","Hound","Hummingbird","Hurricane","Ice","Immortal","Inferno","Jackal","Jade","Jaguar","Killer","Lake","Land","Leopard","Light","Lion","Lizard","Llama","Locust","Lotus","Love","Mace","Mansion","Manticore","Mantis","Mermaid","Metal","Meteor","Millionaire","Millipede","Mirror","Moon","Moth","Mountain","Murder","Neo-demon","Newt","Nirvana","Ocean","Ogre","Orchid","Origin","Owl","Pagoda","Panda","Parrot","Peacock","Pearl","Penguin","Pigeon","Pill","Planet","Porcupine","Porcupine","Purgatory","Python","Qilin","Quadrillionaire","Rainstorm","Reincarnation","Revenant","River","Rose","Saber","Salamander","Salvation","Scholar","Scorpion","Sea","Seahorse","Serpent","Shade","Shadow","Shield","Slaughter","Snake","Soul","Sparrow","Spear","Spider","Spring","Star","Starlight","Summer","Sun","Swan","Sword","Tarantula","Tempest","Thunderclap","Thunderstorm","Tiger","Toad","Tornado","Tortoise","Torture","Toucan","Tree","Trillionaire","Turtle","Umbrella","Unicorn","Vampire","Viper","Volcano","Wasp","Water","Whirlpool","Windstorm","Wine","Winter","Wyvern"];
	
	var ttwNouns = ["Black Hole","Dao Fruit","Flood Dragon","Flying Rain-Dragon","Hopping Vampire","Incense Stick","Lightning Bolt","Medicinal Herb","Medicinal Pill","Medicinal Plant","Nirvana Fruit","Promissory Note","Scroll Painting","Sea Dragon","Sea Turtle","Shooting Star","Spirit Fruit","Spirit Stone","Starry Sky","Wild Boar","Wooden Sword","Xuanwu Turtle","Yellow Springs","Pill Bottle","Feng-Shui Compass","Bag of Holding","Meat Jelly"];
	
	
	//normalise the noun/adj picked
	var adjLim = .8 * adj.length/(adj.length + pluralisers.length);
	var nounLim = nouns.length/(nouns.length + ttwNouns.length);
	
	
	var bp = "The Divination is complete.<br /><br /> You are... "
	
	var ap;//chose which arrar is first part of name.
	var nt;//chose which is second
	var indices = [];
	
	var title;
	
	if(!seed){
		//set adj or noun	NEED TO ALTER THESE CONDITIONS TO REFLECT LIST SIZE
		ap = [adj,pluralisers][Math.random() <= adjLim ? 0 : 1];
		nt = [nouns,ttwNouns][Math.random() <= nounLim ? 0 : 1];
		
		indices = [Math.floor(Math.random() * titles.length), Math.floor(Math.random()* ap.length), Math.floor(Math.random() * nt.length)];
		
	}
	
	else{
		
		ap = [adj,pluralisers][(Math.abs(seed[0]/2147483647) <= adjLim) ? 0 : 1];
		nt = [nouns,ttwNouns][(Math.abs(seed[4]/2147483647) <= nounLim) ? 0 : 1];
		
		indices = [Math.abs(seed[1] % (titles.length - 1)), Math.abs(seed[2] % (ap.length - 1)),  Math.abs(seed[3] % (nt.length - 1))]
		
		
	}
	
	//prevent duplicate titles.
	if (indices[1] == indices[2]){
			
		indices[2] = indices[2] + 1 % (nt.length - 1);
			
	}
	
	title = [titles[indices[0]], ap[indices[1]], (ap == pluralisers) ? pluralize(nt[indices[2]]) : nt[indices[2]]]
	
	if((rwxmode) && ((nt != ttwNouns))){
		return bp + title[0] + " " + toTitleCase(title[1] + title[2]) + "!!!";
	}
	else{
		return  bp + title[0] + " " + toTitleCase(title[1] + " " + title[2]) + "!!!";
	}
}