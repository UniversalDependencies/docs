---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

An open clausal complement (<code>xcomp</code>) of a verb, or an adjective, is a predicative or clausal complement without its own subject. The reference of the subject is necessarily determined by an argument external to the <code>xcomp</code> (usually by the object, if there is one, or else by the subject of the next higher clause). This reference is often referred to as **obligatory control**, that is there should be no available interpretation where the subject of the lower clause may be distinct from the specified role of the upper clause (in case the subject may or must be distinct from the subject of the higher clause, <code>ccomp</code> should be used). 
The predicates of these clauses appear always as a non finite verbs or participle, and they are  core complements (arguments of the higher verb or adjective) rather than adjuncts/modifiers.

~~~ sdparse
Evitate di parlare/VERB tra voi 
xcomp(Evitate, parlare)
~~~
~~~ sdparse
Sapeva di essere umile/ADJ .
xcomp(Sapeva, umile)
cop(umile, essere)
~~~
~~~ sdparse
Abbiamo cercato di presentare/VERB una interpretazione diversa .
xcomp(cercato, presentare)
~~~
~~~ sdparse
Quale ditta è accusata di aver sfruttato/VERB il lavoro minorile ?
xcomp(accusata, sfruttato)
~~~

The <code>xcomp</code> relation is also used in constructions that are known as *secondary predicates* or *predicatives*.

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

**NB** <code>xcomp</code> can be used only when the element is a core argument of a clausal predicate. If the element is not a core argument <code>acl</code> should be used. Consider the example below, where we have a case of double predication (*Sono stati ritrovati.* They were found. *Erano sani e salvi.* They were safe and sound). But *sani e salvi* is not a core argument of *ritrovare*: leaving it out will neither affect grammaticality nor significantly alter the meaning of the verb.

~~~ sdparse
Sono stati ritrovati sani e salvi cinque americani
acl(ritrovati, sani)
cc(sani, e)
conj(sani, salvi)
~~~
<!-- Interlanguage links updated Út zář 29 20:32:03 CEST 2020 -->
