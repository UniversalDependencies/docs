---
udver: '2'
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
---


The advmod label (adverbial modifiers of a word) is a non-clausal adverb or an adverbial phrase that is modifying a predicate or a modifier word. 
The same applies in Pomak, too:

~~~ sdparse
húbbe patkοváto kóne 
a well shod horse 
lit: well shod (a) horse
advmod (patkοváto, húbbe)   
~~~ 

In Pomak annotating, this label is also applied to the relation between a negation word and the word it modifies. Thus, Pomak negation particles  such as  ni, ne, na, (that are morphologically labeled as PART) are marked as advmod instead of the neg tag used by former UD versions:

~~~ sdparse
tja je ne reklála ni kaná 
she did not say anything 
lit: she did not say  no thing
advmod (reklála, ne)
advmod (kaná, ni)
~~~ 

In the same maner, the indefinite negative particle nó or no is also marked as advmod

~~~ sdparse
inýj so žyváli trimínana brátje nó kólko godíny   
thus lived three brothers for unknown years
~~~ 

