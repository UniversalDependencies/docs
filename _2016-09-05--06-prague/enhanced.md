---
layout: base
title:  'Enhanced Dependencies in UD v2'
---

# Enhanced Dependencies in UD v2

The first version of the guidelines provided very little guidance regarding the _enhanced_ representation and so far only very few treebanks contain additional dependencies. For v2, we propose the following guidelines for the _enhanced_ representation:


* We provide guidelines for the following additions:
 * Null nodes for elided predicates
 * Additional subject relations for control and raising constructions
 * Propagation of conjuncts
 * Arguments of passive verbs
 * Relative clauses 
* The _enhanced_ graph is not necessarily a supergraph of the basic tree, i.e., it is not required to contain all the relations of the original
* We leave it up to the treebank maintainers to decided whether and to what extent they want to add relations for the enhanced representation
 

## Ellipsis 

(See also the notes on [ellipsis](ellipsis.html))

In the _enhanced_ representation, we add special null nodes in clauses in which a predicate is elided.

~~~ sdparse
I like tea and you E5.1 coffee .

nsubj(like-2, I-1)
dobj(like-2, tea-3)
nsubj(E5.1-6, you-5)
conj(like-2, E5.1-6)
dobj(E5.1-6, coffee-7)
~~~ 

~~~ sdparse
Mary wants to buy a book and Jenny E8.1 E8.2 a CD .

nsubj(wants-2, Mary-1)
xcomp(wants-2, buy-4)
dobj(buy-4, book-6)
conj(wants-2, E8.1-9)
nsubj(E8.1-9, Jenny-8)
xcomp(E8.1-9, E8.2-10)
dobj(E8.2-10, CD-12)
~~~ 

Note that this is a case in which the _enhanced_ UD graph is not a supergraph of the _basic_ tree as the _basic_ tree contains composite relations (e.g., `conj>nsubj` between _wants_ and _Jenny_), which are not present in the _enhanced_ UD graph.

## Controlled/raised subjects

TODO

## Propagation of Conjuncts

In the _basic_ representation, the governor and dependents of a conjoined phrase are all attached to the first conjunct. The _enhanced_ representation also contains dependencies between the other conjuncts and the governor and dependents of the phrase.

### Conjoined verbs and verb phrases

When two verbs are conjoined, the subject and the object of the conjoined verbs are attached to every conjunct.

~~~ sdparse
The store buys and sells cameras .

nsubj(buys, store)
nsubj(sells, store)
conj(buys, sells)
dobj(buys, cameras)
dobj(sells, cameras)
~~~

When two verb phrases are conjoined, only the subject is attached to every conjunct.

~~~ sdparse
She was reading or watching a movie .

nsubj(reading, She)
nsubj(watching, She)
conj(reading, watching)
dobj(watching, movie)
~~~

### Conjoined subjects and objects

When the subject is a conjoined noun phrase, each of the conjuncts is attached to the predicate.

~~~ sdparse
Paul and Mary are running .

nsubj(running, Paul)
nsubj(running, Mary)
conj(Paul, Mary)
~~~

The same is true for conjoined objects.

~~~ sdparse
Paul bought apples and oranges .

nsubj(bought, Paul)
dobj(bought, apples)
dobj(bought, oranges)
conj(apples, oranges)
~~~

However, in case of unambiguous collective subjects or objects, no additional relations should be added.

~~~ sdparse
Paul and Mary are meeting .

nsubj(meeting, Paul)
conj(Paul, Mary)
~~~

~~~ sdparse
Mary is eating mac and cheese .

nsubj(eating, Mary)
dobj(eating, mac)
conj(mac, cheese)
~~~

When the subject is attached to a control or raising predicate, there is a dependency between the matrix verb and each conjunct and between the embedded verb and each conjunct.

~~~ sdparse
Mary and John wanted to buy a hat .

nsubj(wanted, Mary)
nsubj(wanted, John)
conj(Mary, John)
xcomp(wanted, buy)
nsubj(buy, Mary)
nsubj(buy, John)
~~~



### Conjoined modifiers


Each conjunct in a conjoined modifier phrase gets attached to the governor of the modifier phrase. For example, the following phrase contains a conjoined adjectival phrase that modifies a noun. In the enhanced representation, there is an additional `amod` relation between the noun _river_ and the second conjunct _wide_. 

~~~ sdparse
a long and wide river

amod(river, long)
amod(river, wide)
conj(long, wide)
~~~

## Arguments of passive verbs

(See also the notes on [core dependents](core-dependents.html) for a detailed discussion of the new analysis of passive constructions in the _basic_ representation.)

We propose that we no longer use a special `nsubjpass` relation in the _basic_ representation. However, the distiction between regular subjects and subjects in passive constructions is still highly useful for many NLP tasks. We therefore propose to use the relations `dobj:prom`, `iobj:prom`, and `nmod:agent` for the arguments of a passivized verb.  

~~~ sdparse
The book was written by the author .

dobj:prom(written, book)
nmod:agent(written, author)
~~~

~~~ sdparse
She was given the book.

iobj:prom(given, she)
dobj(given, book)
~~~

### To discuss

* Should the _enhanced_ UD graph still contain the original subject dependencies or should we only have `[di]obj:prom`?


## Relative clauses

TODO

acl:relcl
add additional subject or object relation

note: introduces a cycle

## Recommended order of annotations

We are aware that adding all of the discussed relations for the _enhanced_ representation will require a significant amount of work. Further, many treebanks have been automatically converted from existing treebanks and many of them might contain only some of the information that is needed to add the relations for the _enhanced_ representation. At the same time, we believe that having some of the additional relations is better than not having any additional relations at all. We therefore leave it up to the treebank maintainers how much of this proposal they want to implement.

However, maintainers should be aware that the different types of relations are not completely independent of each other and adding one type of information (e.g., null nodes) might require changes to existing additional relations. If the additional relations are added manually, we recommend the following order of annotations:

* Null nodes
* Propagation of conjuncts
* Controllers and raised subjects
* Relative clauses and passive arguments

## Additional enhancements

Some postprocessing steps such as adding case makers to the relation names of nominal modifiers (as described in [this paper](http://www.lrec-conf.org/proceedings/lrec2016/pdf/779_Paper.pdf)) can improve the usability of the dependency graphs for downstream applications. However, as most of these additions are hightly language-specific, we do not provide any universal guidelines for such a representation and anything beyond the above additions is not part of the UD standard and should not be added to the officially released treebanks.

