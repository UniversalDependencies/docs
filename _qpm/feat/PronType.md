---
layout: feature
title: 'PronType'
shortdef: 'pronominal type'
udver: '2'
---

## PronType

This feature typically applies to [pronouns](../../u/pos/PRON), [determiners](../../upos/DET), pronominal [numerals](../../u/pos/NUM) (quantifiers)
 and pronominal [adverbs](../../u/pos/ADV).

In Pomak, the feature `PronType` is assigned to [PRON]() and [ADV](). 

### <a name="Prs">`Prs`</a>: personal or possessive personal pronoun or determiner

#### Examples

Personal pronouns:
* _ja_ "I", _ty_"you" , _toj_ "he", _tja_ "she", _to_ "it", _nýje_ "we", _výje_ "you", _tíje_ "they", _to_ "they", _to_ "they"
* _móne_ "me", _tébe_ "you", _tóga_ "him", _týje_ "her", _to_ "it", _námi_ "us", _vámi_ "you", _tæh_ "them", _to_ "them", _to_ "them"
* _mí_ "my", _tí_ "your", _mú_ "his", _jí_ "her", _mú_ "its", _nú_ "our", _vú_ "your", _mí_ "their"
* _mó_ "me", _tó_ "you", _go_ "him", _jé_ "her", _go_ "it", _nú_ "us", _vú_ "you", _gi_ "them"

Possessive pronouns:
* _moj_ "mine", _tvoj_ "yours", _tógav_ "his", _tójin_ "hers", _tógav_ "its", _naš_ "ours", _vaš_ "yours", _tǽhan_ "theirs"
* _mi_ "my", _ti_ "your", _mu_ "his", _ji_ "her", _mu_ "its", _nu_ "our", _vu_ "your", _mi_ "their"
* <b><u>note</u></b>: The same applies to possesive pronouns forms with an attached definite article. 


<!--### <a name="Rcp">`Rcp`</a>: reciprocal pronoun

#### Examples

The feature `Rcp`.-->


### <a name="Int">`Int`</a>: interrogative pronoun, determiner, numeral or adverb

This category includes the interrogative pronouns and the interrogative adverbs.

#### Examples: 

* _kutrí_ "who / which", _kakvóv_ "what kind / quality", _kólko_ "how much/many", _číjje_ "whose", _kač_ "how many"
* _kadé_ "where", _kugá_ "when", _kak_ "how"

### <a name="Rel">`Rel`</a>: relative pronoun, determiner, numeral or adverb


#### Examples: 

* _žýjes / žýjet / žýjen_ "the one here who... - proximal/ the one there who... - medial / the one over there who... - distal" "this... here who  - proximal / this.... there  - medial /- this... over there who -distal" 
* _kutrísa / kutríta / kutrína_ "whoever / whatever" "whoever here - proximal /whoever there - medial / whoever over there - distal" "the very same here - proximal / the very same there - medial / the very same over there - distal"
* _kakvóvsa / kakvóvta / kakvóvna_ "whatever kind / quality" 
* _kólkoso / kólkoto / kólkono_ "as much as here - proximal / as much as there - medial / as much as over there - distal", "whatever here - proximal / whatever there -medial / whatever over there - distal" 
* _číjjeso / číjjeto / číjjeno_ "whoever here - proximal / whoever there - medial / whoever over there - distal" 
* _kadésa / kadéta / kadéna_ "wherever here - proximal / wherever there - medial / wherever over there - distal" 
* _kugása / kugáta / kugána_ "όποτε" "whenever soon - proximal / whenever in the near future - medial / whenever in the future - distal"
* _káksa / kákta / kákna_ "how I/we- as I/me - speaker  - proximal / how you - as you - listener - medial / how he/she/it/they - a third party - distal"  

### <a name="Dem">`Dem`</a>: demonstrative pronoun, determiner, numeral or adverb


#### Examples

* _isazí / itazí / inazí_ "this one here - proximal / this one there -medial / that one over there - distal"  
* _isakvózen / itakvózen / inakvózen_ "such" "this kind of - proximal / that kind of - medial / any kind in general of - distal"  
* _itúzi / itúka / itám_ "here - the speaker - proximal / there - the listener - medial / over there - far away - distal"  
* _isýj / itýj / inýj_ "like this - the speaker - proximal / like this - listener - medial / like that - a third party - distal"  


### <a name="Tot">`Tot`</a>: total (collective) pronoun, determiner or adverb

<!--Ritvan are these pronouns or determiners?-->

The composite determiners and adverbs  formed by the particle `sǽ` and an interrogative pronoun or adverb respectively, e.g., _sǽ kutrí_ , _sǽ kadé_ , are tagged as follows:
-the particle is assigned the feature `PartType=Tot
-the pronoun or the adverb are assigned the feature `PronType=Int` 
.

#### Examples

* _síčko / síčkoso / síčkoto / síčkono_ "all / everything"   
* _vrit_ "all" "every" "the whole of"   
* _vrítsi_ "all"  
* _dájma_ "always" 

### <a name="Neg">`Neg`</a>: negative pronoun, determiner or adverb

<!--Ritvan are these pronouns or determiners?-->


The composite determiners and adverbs formed by the particle `ní` and an interrogative pronoun or adverb, e.g., ní kutrí_ , _ní kadé_ , are tagged as follows:
-the particle is assigned the feature `PartType=Neg`
-the pronoun or the adverb are assigned the feature `PronType=Int` 

### <a name="Ind">`Ind`</a>: indefinite pronoun, determiner, numeral or adverb

<!--Ritvan are these pronouns or determiners?-->


The composite determiners and adverbs formed by the particles `nǽ / nó / jéta`  and an interrogative pronoun or adverb, e.g., nǽ kakvóv_ "of some kind / quality - no matter what",
 _nó kutrí_ "someone" , _jéta kutrí_ "such-and-such" , _nǽ kak_ "somehow - no matter how" , are tagged as follows:
-the particle is assigned the feature `PartType=Ind`
-the pronoun or the adverb are assigned the feature `PronType=Int` 

#### Examples

* _nǽko_ "some" "any" 
* _nǽjde_ "somewhere" 

* _badín_ "someone"  
* _bannóš_ "sometime" 


### <a name="Emp">`Emp`</a>: emphatic determiner


Emphatic pro-adjectives (determiners) emphasize the nominal they depend on. There are similarities with reflexive and demonstrative pronouns / determiners.

#### Examples
* _samýj_ "alone"

<!-- Interlanguage links updated So kvě 14 19:02:35 CEST 2022 -->
