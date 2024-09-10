---
layout: relation
title:  'punct'
shortdef : 'punctuation'
udver: '2'
---


The [punct]() dependency (punctuation) is used for any piece of punctuation in a clause, if punctuation is being retained in the typed dependencies. In the Pomak treebank, pairs of punctuation marks such as quotation marks or dashes are linked to the head of the enclosed sentence, while coordinated units are attached to the main one:

~~~ sdparse
magáre je stáro i jáko!   
"the donkey is old and strong!"
punct(stáro, !)      

káza afčáret, “kúčeto na háfna níta annóš” 
lit: says shepard-the “dog-the not bark neither once”
"says the shepard,  “the dog did not bark even once”"  
punct (háfna, “ )                      note:  [ “ ] quotation mark initial
punct (háfna, ” )                      note:  [ ” ] quotation mark final 

magáreso je debélo, stáro i jáko 
"the donkey is fat, old and strong"
punct (debélo, , )                     note: [ , ] comma
conj (debélo, stáro)
~~~ 

[punct]() also marks decimal numbers, while the whole number is represented with  [goeswith](): 

~~~ sdparse
fátiho annok sas 105,6 gram hašíše 
"they caught someone with 105.6 grams of hashish"
punct(105, , )                        note: [ , ] comma
goeswith(105,6)
~~~ 
  

[punct]()  also applies to nominals linked by a dush [ - ] as well as to cases of elision, where an initial vowel has been replaced by an apostrophe:
  
~~~ sdparse 
paminól je inagáne prez 'tam i vídel je Hamdí-stárok
lit: passed-he then from there and saw-he Hamdi-old
"he passed then from there and saw ol' Hamdi"
punct(tam, ')                      note: [ ' ] apostrophe / “ 'tam” is a colloquial form of “itam”
punct(Hamdi, - )                   note: [ - ] dush
flat:name(Hamdi, stárok)
~~~
<!-- Interlanguage links updated Ne 5. května 2024, 18:21:47 CEST -->
