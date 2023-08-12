---
layout: relation
title: 'expl'
shortdef: 'expletive'
udver: '2'
---

This relation captures expletive or pleonastic nominals. 
In the Pomak sentence below, the impersonal verb _dúmi_ accepts a clausal subject but it also supports an expletive.  

~~~ sdparse
dúmi só óti  si našól líry 
said it that he found golden.sovereigns
`it is said  that he has found golden.sovereigns'
           
expl:impers (dúmi, só)
csubj(dúmi, našól)
~~~ 


The`expl` relation is used to annotate clitic doubling. 
Languages such as  Pomak, standardly allow doubling of a lexical nominal and a pronominal clitic, with the former still appearing in its regular role as an argument of the predicate. In these cases, if only one of the lexical nominal 
and the clitic appear in a clause, then whichever appears will be given the grammatical role of [obj](), [iobj](), [obl]() – parallel to the treatment of 
lexical nominals and pronouns in other languages, modulo the clitic pronoun having a different position in the sentence.  However, if both occur, 
the lexical nominal will be given the grammatical role of [obj](), [iobj](), [obl]() , and the clitic will be treated as a pronominal copy, 
which does not receive its own semantic role, and hence will get the role `expl`.

In the examples below, digits are used to indicate co-reference co-reference:

~~~ sdparse
bábo,   móne   mó   búla   upári!
granny, me-1   me-1 sister burns
'Granny, my sister burns me!'
   
obj (upári, móne)
expl (upári, mó)                           
~~~

~~~ sdparse
dádah     ji    go     Fatní    kitápete 
gave.1st  her-1 them-2 Faatni-1 books-the-2
`I gave Fatni the books' 
 
expl(dádah, ji)
iobj(dádah, Fatní)
expl(dádah, go)
obj(dádah, kitápete)
~~~

In the case of ethic datives, both the strong and the weak type of the personal pronoun may appear together. Again, 
 the strong type is marked as [obl]() and the weak type as [expl](): 

~~~ sdparse
tébe-1 ti-1   je  da rečéš
you    you    is  to say
`it is up to you to say' 
  
expl (rečéš, ti)
obl (rečéš, tébe)
~~~
<!--
~~~ sdparse
móne mí só    umarí,  móža    i   da zádremom
me   me REFL  tired,  can.1st and to sleep 
'I am tired, I can sleep.'  
                    
obj (umarí, móne)
expl (móne, mí)                           
~~~  
-->


UD recognizes several functions of reflexive pronouns (clitics) that are usually distinguished with the help of subtypes
of the `expl` relation (see also the report from the [2015 Uppsala discussion of clitics](/workgroups/2015-08-23-uppsala/clitics.html) where
this approach was approved):

* [expl:pv]() for reflexive clitics attached to inherently reflexive verbs (also called pronominal verbs in some grammars)
* [expl:pass]() for reflexive clitics attached to transitive verbs and acting as a voice marker (passive or mediopassive)
* [expl:impers]() for impersonal usage (works also with intransitive verbs)

The relevant documentation for Pomak is available.




~~~


<!-- Interlanguage links updated Út 9. května 2023, 20:04:14 CEST -->
