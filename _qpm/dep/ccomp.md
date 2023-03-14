---
layout: relation
title:  'ccomp'
shortdef : 'clausal complement'
udver: '2'
---

 The relation `ccomp` (clausal complement of a verb or adjective) refers to a dependent clause, which is a core argument and functions as an object of a verb or an adjective. Such clausal complements may be finite or non-finite and they are also used in reported speech. Besides, this dependency (ccomp) is similar to open clausal complement (xcomp), but their main difference is the fact that the former refers to a situation where the subject of the main predicate and subject of the clausal complement are not the same, while the latter refers to a situation where the subject of both the main predicate and the clausal complement is the same, therefore it may be omitted. All the above are applied in Pomak, too:
 
~~~ sdparse
 meselǽna víka óti je ugradéna 1775te 
 the tale says that it was built in 1775 
 lit: tale-the (myth) says that is she-built 1775-in     
 ccomp (víka, ugradéna) 
~~~

With a speech verb like víkom (to say) the content of reported speech in considered part of the verb's valency and is attached as ccopm. The same applies when there is a direct quotation, even in an inverted order, or the quoted content is a sentence fragment: 

~~~ sdparse
bába víka “køprǘjeno ugradéna 1775te” 
granny says “the bridge was built in 1775”
ccomp (víka, ugradéna)
~~~
    
 However, if the speech verb interrupts the reported speech content, then parataxis label is used instead:
    
 ~~~ sdparse
 “køprǘjeno” bába víka “ugradéna je 1775te” 
 “the bridge” granny says “was built in 1775”
 parataxis (víka, ugradéna)
 ~~~
    
The ccomp relation is also prefered, if the subject of the clausal complement is somehow not uncertain or ambiguous, i.e. it is not clear if it is the same as in the main predicate, then: 
 
  ~~~ sdparse
 čulǽkon tórnal je da vídi kadé nahode    
 the man started to see where he is going  

 (it is uncertain if he looked where somebody else went or if he is looking where he himslef is going). 
  ~~~
 
