---
layout: relation
title:  'xcomp'
shortdef : 'open clausal complement'
udver: '2'
---

The relation `xcomp`  (open clausal complement of a verb or an adjective) is a clausal complement without its own subject, usually serving as an object or a predicative. Its subject is determined by an argument external to the xcomp, most probably either by the object or the subject of the next higher clause, a situation often referred to as “obligatory control”. The clausal complement can be headed by various speech parts, such as a verb VERB, an adjective ADJ and a noun NOUN, while the xcomp taking predicate of the higher clause can be either a verb VERB or an adjective ADJ. Generally speaking, the xcomp referrers to a situation where the subject of both the main predicate and the clausal complement is the same, therefore it may be omitted. All the above are applied in Pomak, too:  

~~~ sdparse
dvéte séstry zafátiho da šáptot so usúlna 
the two sisters started to whisper softly
xcomp (zafátiho, šáptot) 
~~~ 

If the subject of the clausal complement is somehow not uncertain or ambiguous, i.e. it is not clear if it is the same as in the main predicate, then the ccomp relation is prefered: 

~~~ sdparse
čulǽkon tórnal je da vídi kadé nahode    
the man started to see where he is going  
(it is uncertain if he looked where somebody else went or if he is looking where he himslef is going).                                                     ~~~                                                                                

Another case that the xcomp label is used in constructions called “secondary predicates”:
   
~~~ sdparse   
dójdahme da u stórime memnǘn 
(we) went to make you happy
root (dójdahme)
advmod (dójdahme, stórime)
mark (stórime, da)
obj (stórime, u)
xcomp (stórime, memnǘn)
~~~ 

We could paraphrase the above sentence using a subordinate clause as follows:

~~~ sdparse  
níje dójdahme za da níje u stórime memnǘn 
we went, so as we make you happy
root (dójdahme)
csubj (dójdahme, níje)
advmod (dójdahme, stórime)
mark (stórime, da)
csubj (storime, níje)
obj (stórime, u)
xcomp (stórime, memnǘn)
~~~ 
