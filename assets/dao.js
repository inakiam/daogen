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

//Or this one.
function seeds(input){
	
	var name = input.origname.value;
	
	if(name == ""){
		
		return false;
		
	}
	
	var a = name.hashCode();
	var b = a.toString().hashCode();
	var c = b.toString().hashCode();
	var d = c.toString().hashCode();
	
	return [a,b,c,d];
	
	
}

//This one can be touched in areas I marked as safe.
function daoName(RWX,seed){
	
	//Deathblade - add daoist titles, adjectives, and nouns to the inside of the square brackets
	//on the appropraitely named vars. Use the format - words in quotes, separated by commas
	//that I have used. Make sure each word is separated by a comma. 
	
	//Safe-to-edit vars
	var titles = ["Eccentric","Patriarch","Dao Lord","Immortal","Saint","Paragon"];
	var adj = ["Slow","Fast","Quick","Silent","Subtle","True","False","Light"];
	var nouns = ["Gold","Sun","World","Fire","Yin","Yang","Truth"];
	
	var bp = "The Diviniation is complete.<br /><br /> You are... "
	
	
	//Touching anything below this breaks the program.

	if(!seed){
		//set adj or noun	
		var an = Math.floor(Math.random()*2) == 0 ? adj:nouns;
		
		var zeroDex = Math.floor(Math.random() * titles.length);
		var firstDex = Math.floor(Math.random()* an.length);
		var secDex = Math.floor(Math.random() * nouns.length);
		
		while (secDex == firstDex){
			secDex = Math.floor(Math.random() * nouns.length);
		}
	}
	
	else{
		
		var an = [adj,nouns][Math.abs(seed[0]%2)];
		
		var zeroDex = Math.abs(seed[1] % (titles.length - 1));
		var firstDex = Math.abs(seed[2] % (an.length - 1));
		var secDex = Math.abs(seed[3] % (nouns.length - 1));
		
		if (secDex == firstDex){
			
			secDex = secDex+1 % (nouns.length - 1);
			
		}
		
	}
	
	if(RWX){
		return bp + titles[zeroDex] + " " + toTitleCase(an[firstDex] + nouns[secDex]) + "!!!";
	}
	else{
		return bp + titles[zeroDex] + " " + toTitleCase(an[firstDex] + " " + nouns[secDex]) + "!!!";
	}
}