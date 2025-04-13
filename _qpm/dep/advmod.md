---
udver: '2'
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
---


The [advmod]() dependency (adverbial modifiers of a word) is used when a non-clausal adverb or an adverbial phrase modifies a predicate or a modifier word. 
The same applies in Pomak:

~~~ sdparse
húbbe patkοváto kóne 
lit: well shod (a) horse
"a well shod horse" 
advmod (patkοváto, húbbe)   
~~~ 

In the Pomak treebank, the [advmod]() dependency is used between a negation word and the word it modifies (directed from the modified word to the negation word). As negative words are used in Pomak the negation particles, e.g. *ni, ne, na*, (that are morphologically labeled as PART):

~~~ sdparse
tja je ne reklála ni kaná 
lit: she did not say  no thing
"she did not say anything" 
advmod (reklála, ne)
advmod (kaná, ni)
~~~ 

In the same maner, the indefinite negative particle *nó* or *no* also depends on the word it modifies with the [advmod]() dependency:

~~~ sdparse
inýj so žyváli trimínana brátje nó kólko godíny   
"thus lived three brothers for unknown years"
advmod (kólko, nó)
~~~ 

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:20 CET -->
