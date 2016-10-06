---
layout: base
title:  'Enhanced Dependencies in UD v2'
---

# Enhanced Dependencies in UD v2

The first version of the guidelines provided very little guidance regarding the _enhanced_ representation and so far only very few treebanks contain additional dependencies. For v2, we propose the following guidelines for the _enhanced_ representation:

* The enhanced representation should include:
    - Null nodes for elided predicates
    - Propagation of conjuncts
    - Additional subject relations for control and raising constructions
    - Arguments of passives (and other valency-changing constructions)
    - Coreference in relative clause constructions 
    - Modifier labels that contain the preposition or other case-marking information  
* The _enhanced_ graph is not necessarily a supergraph of the basic tree, i.e., it is not required to contain all the basic dependency relations
* In principle, everything in the enhanced representation is an optional addition to the basic representation, but we specify a recommended order for adding information (as guidance to treebank developers)
 

## Ellipsis 

(See also the notes on [ellipsis](ellipsis.html).)

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

The _basic_ trees lack a subject dependency between a controlled verb and its controller or between an embedded verb and its raised subject. In the _enhanced_ graph, there is an additional dependency between the embedded verb and the subject of the matrix clause.

~~~ sdparse
Mary wants to buy a book .

nsubj(wants, Mary)
xcomp(wants, buy)
nsubj(buy, Mary)
~~~~


~~~ sdparse
She seems to be reading a book .

nsubj(seems, She)
xcomp(seems, reading)
nsubj(reading, She)
~~~

### To discuss

* Should we use a special relation (e.g., `nsubj:xsubj`) for these additional relations?

## Propagation of Conjuncts

In the _basic_ representation, the governor and dependents of a conjoined phrase are all attached to the first conjunct. The _enhanced_ representation also contains dependencies between the other conjuncts and the governor and dependents of the phrase.

### Conjoined verbs and verb phrases

When two verbs share their objects (or other complements), the subject and the object of the conjoined verbs are attached to every conjunct.

~~~ sdparse
The store buys and sells cameras .

nsubj(buys, store)
nsubj(sells, store)
conj(buys, sells)
dobj(buys, cameras)
dobj(sells, cameras)
~~~

However, if the complements of the second verb are not shared, only the subject is attached to every conjunct.

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

This leads to slightly strange dependencies in the case of collective subjects or objects:

~~~ sdparse
Paul and Mary are meeting .

nsubj(meeting, Paul)
nsubj(meeting, Mary)
conj(Paul, Mary)
~~~

~~~ sdparse
Mary is eating mac and cheese .

nsubj(eating, Mary)
dobj(eating, mac)
conj(mac, cheese)
dobj(eating, cheese)
~~~

However, as the distinction between distributive and collective readings is often context-dependent, we propose to take the simplest approach and to always attach all conjuncts to the predicate.

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

We propose that we no longer use a special `nsubjpass` relation in the _basic_ representation. However, the distiction between regular subjects and subjects in passive constructions is still highly useful for many NLP tasks. We therefore propose to use the relations `nsubj:pass` (for languages without `dobj`/`iobj` distinction), `nsubj:passdir`, `nsubj:passind`, and `anom:agent` for the arguments of a passivized verb.  

~~~ sdparse
The book was written by the author .

nsubj:passdir(written, book)
anom:agent(written, author)
~~~

~~~ sdparse
She was given the book .

nsubj:passind(given, She)
dobj(given, book)
~~~

### To discuss

* Should the _enhanced_ UD graph still contain the original subject dependencies or should we only have `nsubj:pass(dir|ind)`?
* Should this treatment be extended to other valency-changing constructions like causatives and antipassives?

Example [tr] (_Bilge made Deniz wash the car._):

~~~ sdparse
Bilge arabayı Denize yıkattı . \n Bilge the.car Deniz made.wash .

nsubj:cau(yıkattı, Denize)
dobj(yıkattı, arabayı)
nsubj(yıkattı, Bilge)
~~~

## Relative clauses

In _basic_ trees, relative pronouns are attached to the main predicate of the relative clause (typically with a `nsubj` or `dobj` relation). In the corresponding _enhanced_ graphs, the relative pronoun is attached to what it is referring to with the special `ref` relation and the governor of the relative clause is attached as an argument to the main predicate of the relative clause. Note that such graphs contain a cycle.


_Basic_ tree:

~~~ sdparse
The boy who lived .

acl:relcl(boy, lived)
nsubj(lived, who)
~~~


_Enhanced_ graph:

~~~ sdparse
The boy who lived .

acl:relcl(boy, lived)
ref(boy, who)
nsubj(lived, boy)
~~~

_Basic_ tree:

~~~ sdparse
The book that I read .

acl:relcl(book, read)
dobj(read, that)
~~~


_Enhanced_ graph:

~~~ sdparse
The book that I read .

acl:relcl(book, read)
ref(book, that)
dobj(read, book)
~~~

## Case Information

Adding prepositions (or case information) to the relation name of non-core dependents often makes it possible to disambiguate its  semantic role. We therefore augment `anom`, `advnom`, `acl` and `advcl` relation labels with the preposition or the case of the modifier.

~~~ sdparse
the house on the hill

anom:on(house, hill)
case(hill, on)
~~~

~~~ sdparse
He went to a diner after leaving work .

advnom:to(went, diner)
case(diner, to)
advcl:after(went, leaving)
mark(leaving, after)
~~~

~~~ sdparse
die Zerstörung der Stadt \n the destruction the.GEN city.GEN

anom:gen(Zerstörung, Stadt)
~~~

### To discuss

* Should we use special relation names (e.g., `nsubj:xsubj`) for the indirect relations? 
* Should this treatment be extended to relative pronouns that refer to adnominal or adverbial modifiers? 
* What should we do with dependents of the relative pronoun such as case markers?

Examples:

~~~ sdparse
The house in which I used to live .

acl:relcl(house, used)
advnom(live, house)
case(which, in)
~~~

~~~ sdparse
The city where I used to live .

acl:relcl(city, used)
advnom(live, city)
~~~

## Recommended order of annotations

We are aware that adding all of the discussed relations for the _enhanced_ representation will require a significant amount of work. Further, many treebanks have been automatically converted from existing treebanks and many of them might contain only some of the information that is needed to add the relations for the _enhanced_ representation. At the same time, we believe that having some of the additional relations is better than not having any additional relations at all. We therefore leave it up to the treebank maintainers how much of this proposal they want to implement.

However, maintainers should be aware that the different types of relations are not completely independent of each other and adding one type of information (e.g., null nodes) might require changes to existing additional relations. If the additional relations are added manually, we recommend the following order of annotations:

* Null nodes
* Propagation of conjuncts
* Controllers and raised subjects
* Relative clauses, passive arguments, and augmentation of relation names with case information 

## Additional enhancements

Some postprocessing steps such as demoting light nouns that behave like quantificational determiners (as described in [this paper](http://www.lrec-conf.org/proceedings/lrec2016/pdf/779_Paper.pdf)) can improve the usability of the dependency graphs for downstream applications. However, as most of these additions are highly language-specific, we do not provide any universal guidelines for such a representation and anything beyond the above additions is not part of the UD standard and should not be added to the officially released treebanks.

