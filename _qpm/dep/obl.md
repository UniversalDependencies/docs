---
layout: relation
title:  'obl'
shortdef : 'oblique nominal'
udver: '2'
---  

The `obl` (oblique) relation is used for a nominal (noun, pronoun, noun phrase) functioning as a non core (oblique) argument or adjunct. It corresponds to an adverbial attaching to a verb, adjective or other adverb: 

This relation can be further specified by the case, in conjunction with which it may provide a uniform analysis for variant forms as adpositions that are governed a case: 
~~~ sdparse
dúmili so za tǽhnokne arkadašlýka 
(they) spoke about their (girl) friend               
obl (dúmili, arkadašlýka)
case (arkadašlýka, za)    
~~~

In Pomak annotating, this relation has also been applied to the so called “ethic dative”:
~~~ sdparse
dečómne je drago... 
the children like to... 
lit: children-to-the is-it pleasant...
obl (drágo, dečómne)  note:  “dečómne”  is in genetive/dative case

~~~
As remarked elsewhere, when both the strong and the weak type of the personal pronoun appear together, then the strong type is marked as obl (oblique) and the weak type as expl: 

~~~ sdparse
tébe ti je da rečéš 
it is up to you to say 
lit: you, you-to is-it to say-you
expl (tébe, ti)
obl (tébe, rečéš)
~~~
