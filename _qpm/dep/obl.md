---
layout: relation
title:  'obl'
shortdef : 'oblique nominal'
udver: '2'
---  

The [obl]() dependency (oblique) is used for a nominal (noun, pronoun, noun phrase) functioning as a non core (oblique) argument or adjunct. It corresponds to an adverbial attaching to a verb, adjective or other adverb: 

This relation can be further specified by the case, in conjunction with which it may provide a uniform analysis for variant forms as adpositions that are governed a case: 
~~~ sdparse
dúmili so za tǽhnokne arkadašlýka 
"(they) spoke about their (girl) friend"               
obl (dúmili, arkadašlýka)
case (arkadašlýka, za)    
~~~

In the Pomak treebank, the [obl]() dependency  has been applied to the so-called “ethic dative”:
~~~ sdparse
dečómne je drago... 
lit: children-to-the is-it pleasant...
"the children like to..." 
obl (drágo, dečómne)                       note:  *dečómne*  is in genetive/dative case
~~~

In the case of an ethic dative, when the strong and the weak type of the personal pronoun co-occur, then the strong type is assigned the [obl]() dependency  and the weak type the [expl]() one: 

~~~ sdparse
tébe ti je da rečéš 
lit: you, you-to is-it to say-you
"it is up to you to say" 
expl (tébe, ti)
obl (tébe, rečéš)
~~~
<!-- Interlanguage links updated Út 9. května 2023, 20:04:27 CEST -->
