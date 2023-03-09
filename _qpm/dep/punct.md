---
layout: relation
title:  'punct'
shortdef : 'punctuation'
udver: '2'
---


The label punct (punctuation) is used for any piece of punctuation in a clause, if punctuation is being retained in the typed dependencies. In Pomak annotating, pairs of punctuation marks such as quotation marks or dashes are linked to the head of the enclosed sentence, while coordinated units are attached to the main one:

~~~ sdparse
magáre je stáro i jáko !   
the donkey is old and strong !
punct (stáro, !)      

káza afčáret, “ kúčeto na háfna níta annóš” 
says the shepard,  “ the dog did not bark even once”  
lit: says shepard-the “dog-the not bark neither once”
punct (háfna, “ )                      note:  [ “ ] quotation mark initial
punct (háfna, ” )                      note:  [ ” ] quotation mark final 

magáreso je debélo, stáro i jáko 
the donkey is fat, old and strong
punct (debélo, , )                     note: [ , ] comma
conj (debélo, stáro)
~~~ 

The punct relation marks also decimal numbers, while the whole number is labeled as goeswith: 

~~~ sdparse
fátiho annok sas 105,6 gram hašíše 
they caught someone with 105.6 grams of hashish
punct (105, , )                        note: [ , ] comma
goeswith (105,6)
~~~ 
  

The punct reltion applies also to nominals linked by a dush [ - ] as well as to cases of elision, where an initial vowel has been replaced by an apostrophe:
  
~~~ sdparse 
paminól je inagáne prez 'tam i vídel je Hamdí-stárok
he passed then from there and saw ol' Hamdi
lit: passed-he then from there and saw-he Hamdi-old
punct (tam, ')                      note: [ ' ] apostrophe / “ 'tam” is a colloquial form of “itam”
punct (Hamdi, - )                   note: [ - ] dush
flat:name (Hamdi, stárok)
~~~
