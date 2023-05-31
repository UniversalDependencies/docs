---
layout: relation
title:  'ccomp'
shortdef : 'clausal complement'
udver: '2'
---

The [ccomp]() dependency (clausal complement of a verb or adjective) is assigned to the head of a dependent clause, which is a core argument and functions as an object of a verb or an adjective. Such clausal complements may be finite or non-finite. [ccomp]() is also used for the case of reported speech. 

Hint: [ccomp]() is similar to open clausal complement [xcomp](), but they differ in that ccomp models a situation where the subject of the main predicate and the subject of the clausal complement are not always the same, while xcomp models a situation where the subject of both the main predicate and the clausal complement are always the same (the subject of clausal complement has to be omitted in this case). 

Examples of the application of the above in the Pomak treebank follow:
 
~~~ sdparse
 meselǽna víka óti je ugradéna 1775te 
 lit: tale-the (myth) says that is she-built 1775-in 
 "the tale says that it was built in 1775" 
 ccomp(víka, ugradéna) 
~~~

With a speech verb like *víkom* "to say" the content of reported speech in considered part of the verb's valency and is attached as a ccomp. The same applies when there is a direct quotation, even in an inverted order, or the quoted content is a sentence fragment: 

~~~ sdparse
bába víka “køprǘjeno ugradéna 1775te” 
"granny says “the bridge was built in 1775”"
ccomp(víka, ugradéna)
~~~
    
 However, if the speech verb interrupts the reported speech content, then the [parataxis]() dependency is used instead:
    
 ~~~ sdparse
 “køprǘjeno” bába víka “ugradéna je 1775te” 
 "“the bridge” granny says “was built in 1775”"
 parataxis(víka, ugradéna)
 ~~~
    

<!-- Interlanguage links updated Út 9. května 2023, 20:04:04 CEST -->
