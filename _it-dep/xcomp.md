---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
---

An open clausal complement (<code>xcomp</code>) of a verb, or an adjective, is a predicative or clausal complement without its own subject. 
The reference of the subject is necessarily determined by an argument external to the <code>xcomp</code> (normally by the object of the next higher clause, if there is one, or else by the subject of the next higher clause). This reference is often referred to as **obligatory control**, that is there should be no available interpretation where the subject of the lower clause may be distinct from the specified role of the upper clause (in case the subject may or must be distinct from the subject of the higher clause, <code>ccomp</code> should be used). 
These clauses appear always with non finite verbs or participle, and they are complements (arguments of the higher verb or adjective) rather than adjuncts/modifiers.

~~~ sdparse
Evitate di parlare tra voi 
xcomp(Evitate, parlare)
~~~
~~~ sdparse
Sapeva di essere umile .
xcomp(Sapeva, umile)
~~~
~~~ sdparse
Abbiamo cercato di presentare una interpretazione diversa .
xcomp(cercato, presentare)
~~~
~~~ sdparse
Quale ditta è accusata di aver sfruttaro il lavoro minorile ?
xcomp(accusata, sfruttato)
~~~

The <code>xcomp</code> relation is also used in constructions that are known as *secondary predicates* or *predicatives*, only in cases where the element is a core argument of a clausal predicate. 

~~~ sdparse
Il sindaco rende nota la consegna .
xcomp(rende, nota)
~~~
~~~ sdparse
Lo smog risulta nocivo a la salute .
xcomp(risulta, nocivo)
~~~
~~~ sdparse
Ogni fosso si presume comune .
xcomp(presume, comune)
~~~
~~~ sdparse
Il caso è diventato un' emergenza .
xcomp(diventato, emergenza)
~~~
