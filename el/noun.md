---
layout: postag
title: 'NOUN'
shortdef: 'noun'
---


# NOUN : noun 

### Definition

Nouns typically denote entities such as persons, places, things, animals or ideas.

The tag <code>NOUN</code>  is intended for common nouns only. See [PROPN]() for proper nouns and [PRON]() for pronouns.

### Examples

*	Certain adjectives are considered nouns. As such they disallow the formation of comparatives (but not all adjectives allow for comparatives anyway)
      *	  Professions such as *αστυνομικός* / *astinomikos* "policeman", *στρατιωτικός* / *stratiotikos* "military officer". When the same words cooccur with another noun, such as *αστυνομικός σκύλος* / *astinomikos skilos* "police dog", they are assigned the tag [ADJ]().
      *	  *ακουστικό* / *akoustiko* "head phone/hearing aid", *κινητό* / *kinito* "mobile phone", *ενδότερα* / *endhotera* "inner parts", *πρωϊνό* / *proino* "breakfast", *μεσημεριανό* / *mesimeriano* "lunch", *βραδινό* / *vradhino* "dinner", *λαδερά* / *ladhera* "vegetable dishes cooked in olive oil", etc.
    
*	Diminutives (*υποκοριστικά* / *ipokoristika*) productively formed with suffixes such as  *–άκι* / *-aki*, *–ιτσα* / *-itsa*, *–ούλης* / *-oulis*, *-άκης* / *-akis* like *χταποδάκι* / *chtapodhaki* "little octopus", *παιδάκι* / *pedhaki* "little child", *μικρούλα* / *mikroula* "little girl",  *φωνίτσα* / *fonitsa* "little voice": they are assigned the lemma of the original noun and the feature [el-DegreeMod]() takes the value [Diminutive](). 
*	Magnifiers (*μεγεθυντικά* / *megethintika*)  productively formed with suffixes such as *-άρας* / *-aras*, *-αράς* / *-aras* like  *τρυπάρα* / *tripara* "large hole", *ψευταράς* / *pseftaras* "great lier": they are assigned the lemma of the original noun and the feature [el-DegreeMod]() takes the value [Magnifier]().
*	Lexicalised diminutives and magnifiers such as  *λακκάκι* ‘dimple’, *σουβλάκι* / *souvlaki* "roasted pieces of meat on a little spit", *παιχταράς* / *pechtaras* "excellent (football) player": they are not defined for the feature [el-DegreeMod](). 


Greek nouns inflect for [el-feat/Gender](), [el-feat/Number]() and [el-feat/Case]().

### References 

Karra, Athanasia.  2006. *Problems of inflection and of diminutives formatino in Modern Greek and the other European systems.* PhD Thesis (in Greek). University of Patras.   https://nemertes.library.upatras.gr/jspui/bitstream/10889/911/1/Nimertis_Karra.pdf 

