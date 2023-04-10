---
layout: relation
title:  'xcomp'
shortdef : 'open clausal complement'
udver: '2'
---

The [xcomp]() dependency   (open clausal complement of a verb or an adjective) is a clausal complement without its own subject, usually serving as an object or a predicative. Its subject is determined by an argument external to the xcomp, most probably either by the object or the subject of the next higher clause, a situation often referred to as “obligatory control”. The clausal complement can be headed by various speech parts, such as a [VERB](), an [ADJ]() and a [NOUN](), while the _xcomp_ taking predicate of the higher clause can be either a [VERB]() or an [ADJ](). Generally speaking, the _xcomp_ referrers to a situation where the subject of both the main predicate and the clausal complement is the same, therefore it has to be omitted. 

The phenomena described above have been encountered in the Pomak treebank:

~~~ sdparse
dvéte séstry zafátiho da šáptot so usúlna 
"the two sisters started to whisper softly"
xcomp(zafátiho, šáptot) 
~~~ 

<!--
If the subject of the clausal complement is somehow not uncertain or ambiguous, i.e. it is not clear if it is the same as in the main predicate, then the ccomp relation is prefered: 

~~~ sdparse
čulǽkon tórnal je da vídi kadé nahode    
the man started to see where he is going  
(it is uncertain if he looked where somebody else went or if he is looking where he himslef is going). 
~~~  
-->

[xcomp]() is used for marking obligatory secondary predication. 
   
~~~ sdparse   
dójdahme da u stórime memnǘn 
"(we) went, so as  to make you happy"
root(dójdahme)
advcl(dójdahme, stórime)
mark(stórime, da)
obj(stórime, u)
xcomp(stórime, memnǘn)
~~~ 
