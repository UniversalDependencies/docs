---
layout: base
title:  'Enhanced Dependencies'
permalink: u/overview/enhanced-syntax.html
udver: '2'
---

# Enhanced Dependencies

We always intended the Universal Dependencies representation to be used in shallow natural language understanding tasks such as relation extraction or biomedical event extraction. For such tasks, one is typically interested in the relation between certain entities, e.g., the relation between two persons or whether one protein interacts with another. UD is particularly well suited for such tasks as UD trees contain many direct relations between content words and many of the dependency labels provide a lot of information about the type of relation between two content words. However, for some constructions, the dependency path between two content words of interest is very long in a UD tree, which complicates determining how they the content words are related. Further, some dependency types such as [`obl`](u-dep/obl) or [`nmod`](u-dep/nmod) are used for many different types of arguments and modifiers, and are therefore not very informative on its own. For these reasons, we also provide guidelines for an _enhanced_ representation, which makes some of the implicit relations between words more explicit, and augments some of the dependency labels to facilitate the disambiguation of types of arguments and modifiers.


_Enhanced_ UD graphs may contain some or all of the following enhancements, which are described in the sections below.

* Null nodes for elided predicates
* Propagation of conjuncts
* Additional subject relations for control and raising constructions
* Coreference in relative clause constructions 
* Modifier labels that contain the preposition or other case-marking information  


Note that the _enhanced_ graph is not necessarily a supergraph of the basic tree, i.e., it is not required to contain all the basic dependency relations. For this reason, all relations of the enhanced graph (also the ones that are present in the basic UD tree) have to be included in the _DEPS_ column of a CoNLL-U file. See the specificiation of the [CoNLL-U](/format.html) file format for details.

## Ellipsis 

(See also the guidelines on [ellipsis](specific-syntax.html#ellipsis).)

In the _enhanced_ representation, we add special null nodes in clauses in which a predicate is elided.

~~~ sdparse
I like tea and you E5.1 coffee .

nsubj(like-2, I-1)
obj(like-2, tea-3)
nsubj(E5.1-6, you-5)
conj(like-2, E5.1-6)
obj(E5.1-6, coffee-7)
~~~ 

~~~ sdparse
Mary wants to buy a book and Jenny E8.1 E8.2 a CD .

nsubj(wants-2, Mary-1)
xcomp(wants-2, buy-4)
obj(buy-4, book-6)
conj(wants-2, E8.1-9)
nsubj(E8.1-9, Jenny-8)
xcomp(E8.1-9, E8.2-10)
obj(E8.2-10, CD-12)
~~~ 

Note that this is a case in which the _enhanced_ UD graph is not a supergraph of the _basic_ tree as the _basic_ tree contains `orphan` relations, which are not present in the _enhanced_ UD graph.

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


## Propagation of Conjuncts

In the _basic_ representation, the governor and dependents of a conjoined phrase are all attached to the first conjunct. This often leads to very long dependency paths between content words. The _enhanced_ representation therefore also contains dependencies between the other conjuncts and the governor and dependents of the phrase.

### Conjoined verbs and verb phrases

When two verbs share their objects (or other complements), the subject and the object of the conjoined verbs are attached to every conjunct.

~~~ sdparse
The store buys and sells cameras .

nsubj(buys, store)
nsubj(sells, store)
conj(buys, sells)
obj(buys, cameras)
obj(sells, cameras)
~~~

However, if the complements of the second verb are not shared, only the subject is attached to every conjunct.

~~~ sdparse
She was reading or watching a movie .

nsubj(reading, She)
nsubj(watching, She)
conj(reading, watching)
obj(watching, movie)
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
obj(bought, apples)
obj(bought, oranges)
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
obj(eating, mac)
conj(mac, cheese)
obj(eating, cheese)
~~~

However, as the distinction between distributive and collective readings is often context-dependent, we take the simplest approach and always attach all conjuncts to the predicate.

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
obj(read, that)
~~~


_Enhanced_ graph:

~~~ sdparse
The book that I read .

acl:relcl(book, read)
ref(book, that)
obj(read, book)
~~~

## Case Information

Adding prepositions (or case information) to the relation name of non-core dependents often makes it possible to disambiguate its  semantic role. We therefore augment `nmod`, `obl`, `acl` and `advcl` relation labels with the preposition or the case of the modifier.

~~~ sdparse
the house on the hill

nmod:on(house, hill)
case(hill, on)
~~~

~~~ sdparse
He went to a diner after leaving work .

obl:to(went, diner)
case(diner, to)
advcl:after(went, leaving)
mark(leaving, after)
~~~

~~~ sdparse
die Zerstörung der Stadt \n the destruction the.GEN city.GEN

nmod:gen(Zerstörung, Stadt)
~~~

## Additional enhancements

Some postprocessing steps such as demoting light nouns that behave like quantificational determiners (as described in [Schuster and Manning (2016)](http://www.lrec-conf.org/proceedings/lrec2016/pdf/779_Paper.pdf)) can improve the usability of the dependency graphs for downstream applications. However, as most of these additions are highly language-specific, we do not provide any universal guidelines for such a representation and anything beyond the above additions is not part of the UD standard and should not be added to the officially released treebanks.




