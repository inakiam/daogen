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
	
	
	
	var a = [name.hashCode()];
	
	for (var i = 0; i < 10; i++){
		a.push(a[a.length - 1].toString().hashCode());
	}
	
	return a;
	
	
}

function pluralize(term){
	var plurals = [["Kni","fe","ves"]];
	var unPterm = term;
	var items;
	
	for(var i = 0; i < plurals.length;i++){
		items = plurals[i];
		term = (items[0] + items[1] == unPterm) ? items[0] + items[2] : term;
		
	}
		
	return (term == unPterm) ? term + "s" : term;
	
}

//This one can be touched in areas I marked as safe.
function daoName(rwxmode,seed){
	
	//Safe-to-edit vars
	var titles = ["Eccentric","Patriarch","Dao Lord","Immortal","Saint","Paragon"];
	var adj = ["Slow","Fast","Quick","Silent","Subtle","True","False","Light"];
	var pluralisers = ["Thousand","Hundred"]; //adjectives that make nouns plural
	var nouns = ["Knife","Kine"]//["Gold","Sun","World","Fire","Yin","Yang","Truth"];
	
	
	var bp = "The Diviniation is complete.<br /><br /> You are... "
	
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