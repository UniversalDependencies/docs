---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

An open clausal complement (`xcomp`) of a verb or an adjective is a predicative or clausal complement without its own subject (the subject is neither expressed lexically nor morphologically). The reference of the subject is necessarily determined by an argument external to the xcomp. In theories of grammar, this is often referred to as *obligatory control*. The types of structures that currently take this relation in the Slovene treebank are listed below. 

The open clausal complement relation (`xcomp`) applies to all **infinitive** and **supine** constructions that appear next to finite verb forms of aspectual and modal verbs, verbs of motion, and all other lexical verbs that take the infinitive. The head of the relation is the finite verb form, and the dependent is the verb in the infinitive or supine. Currently **all constructions combining finite verb forms with infinitives** are given the `xcomp` relation (regardless of the meaning and whether the infinitive can be omitted from the sentence).

~~~ sdparse
Za delovno mesto stažista je moral izpolnjevati dva pogoja . \n For work position of-trainee aux-PAST he-had-to meet two requirements . 
xcomp(moral,izpolnjevati)
xcomp(he-had-to,meet)
~~~
~~~ sdparse
Tam se je dalo kaj naučiti \n There REFLEX aux-PAST you-could something learn
xcomp(dalo,naučiti)
xcomp(you-could,learn)
~~~
~~~ sdparse
Avgust je skušal uvesti dedno pravico do prestola \n August was trying to-establish hereditary right to the-throne
xcomp(skušal,uvesti)
xcomp(trying,to-establish)
~~~

In addition to the structures listed above, the relation is also used for **nominal or adjectival complements next to verbs with little semantic content**, such as *ostati, postati, zdeti se; izkazati se, veljati, imenovati* + the preposition *ZA*, where the complement describes the result of some action and cannot be omitted, since the sentence becomes ungrammatical without it. 
~~~ sdparse
Voda ostaja najboljši dodatek za gnojevko \n Water remains the-best additive for compost
xcomp(ostaja,dodatek)
xcomp(remains,additive)
~~~
~~~ sdparse
Potem je svet postal lepši . \n Then aux-PAST world became more-beautiful .
xcomp(postal,lepši)
xcomp(became,more-beautiful)
~~~
~~~ sdparse
Velja za najpomembnejšo špansko blagovno znamko luksuznih izdelkov . \n It-is-known as the-most-important Spanish brand of-luxury products .
xcomp(Velja,znamko)
case(znamko,za)
xcomp(It-is-known,brand)
case(brand,as)
~~~
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:43:30 CET -->
