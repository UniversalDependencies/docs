---
layout: relation
title: 'cop'
shortdef: 'copula'
---

A copula is the relation between the complement of a copular verb and
the copular verb *to be* (only). In Portuguese, `cop` covers verb 'ser' and 'estar'. We normally take a copula as a dependent of its
complement (_predicativo do sujeito_) .

~~~ sdparse
Nigéria é campeã
nsubj(campeã, Nigéria)
cop(campeã, é)
~~~

~~~ sdparse
As 15 pessoas são membros da Peta 
nsubj(membros, pessoas)
cop(membros, são)
~~~

The copula *ser/estar* is not treated as the head of a clause, but rather the dependent of a lexical predicate, as exemplified above.

Such an analysis is motivated by the fact that many languages
often or always lack an overt copula in such constructions, as in Russian and Greek.

In informal Portuguese or specific textual genres (as news headlines and conversation), this may also arise.

~~~ sdparse
E-mail grátis se você tem wifi
nsubj(grátis, E-mail)
~~~

This analysis is adopted also when the predicate is a prepositional phrase, in which case the nominal part of the prepositional phrase is the head of the clause.

~~~ sdparse
Susan está em forma
nsubj(forma, Susan)
cop(forma, é)
case(forma, em)
~~~

<!--
A parallel can also be drawn to so-called raising-to-object or small clause constructions in English.
Under the basic analysis proposed for SD, the predicate complement is not linked to its subject argument, but in the enhanced representation (see below), 
the linkage is then parallel to the treatment in a zero
copula language:

~~~ sdparse
I judge Ivan the best dancer
nsubj(judge-2, I-1)
dobj(judge-2, Ivan-3)
xcomp(judge-2, dancer-6)
det(dancer-6, the-4)
amod(dancer-6, best-5)
nsubj(dancer-6, Ivan-3)
~~~
-->

If the copula is accompanied by other verbal auxiliaries for tense, aspect, etc., then they are also given a flat structure, and taken as dependents of the lexical predicate:

~~~ sdparse
a nossa opção estratégica tem sido a mais correcta
nsubj(correta, opção)
cop(correta, sido)
aux(correta, tem)
~~~

The motivation for this choice is that this structure is parallel to the flat structure which we give to auxiliary verbs accompanying verbs. 
In particular, in languages such as English and Portuguese, it is often very difficult to decide whether to regard a participle as a verb or an adjective.  
Perhaps the following sentence is such a case:

~~~ sdparse
os aparelhos estão a ser equipados com um sistema de iluminação
nsubj(equipados, aparelhos)
cop(equipados, estão)
aux(equipados, ser)
~~~

While a part of speech has to be decided in such cases, it would be unfortunate if the choice of part of speech also changed the dependency structure.

Finally, `ccomp` is used with copulas. Only in this case, the structure is different, and we take the form of *be* as a head:

~~~ sdparse
O importante é manter a calma.
ccomp(é, manter)
nsubj(é, importante)
~~~

~~~ sdparse
O problema é que ele nunca tentou.
ccomp(é, tentou)
nsubj(é, problema)
~~~

If we took the main verb as the head, it would have two subjects, which would be unworkable. Examples like the above *could* be analyzed reversed with the initial noun phrase as the predicate, but in addition to this seeming undesirable, it would fail to be a solution if there were a clause on both sides of *be*, such as in: _Não tentar resolver um problema é reconhecer a derrota_.

Note that it is possible to have `cop` constructions without subject.

~~~ sdparse
É muito engraçado .
cop(engraçado, é)
advmod(engraçado, muito)
punct(engraçado, .)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:14 CEST 2020 -->
