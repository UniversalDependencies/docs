---
layout: base
title:  'Ellipsis in UD v2'
udver: '2'
---

# Archived discussion on Ellipsis in UD v2

> #Notice
> This is an archive page. The final documentation is here http://universaldependencies.org/u/overview/specific-syntax.html#ellipsis


The `remnant` relation turned out to be a non-optimal way for analyzing complex ellipitical constructions. We therefore introduce the following changes in UD v2:

* The `remnant` relation is discarded
* In the case of simple head ellipsis, a dependent is promoted 
* In case of predicate ellipsis, we also use promotion but introduce a new relation `orphan` for non-standard dependency relations that arise
* The complex cases of ellipsis should be analyzed with NULL nodes in the _enhanced_ representation

## Problems with the `remnant` analysis

The [old analysis](http://universaldependencies.org/docs/u/dep/remnant.html) of elliptical constructions using the `remnant` relation does not work well when the second clause contains additional modifiers of the elided predicate.

~~~ sdparse
They had left the company , many for good .

nsubj(left, They)
obj(left, company)
remnant(They, many)
obl(many, good)
~~~

In this example, _for good_ is modifying the elided _left_ of the second clause. However, as no similar modifier exists in the first clause, _for good_ cannot be attached with a _remnant_ relation and no reasonable analysis of this sentence is possible. In practice, annotators attached the extra modifier to the subject of the second clause, which incorrectly suggests that _for good_ is modifying the subject _many_.

Additional issues of the `remnant` analysis are:

* The dependency trees contain a lot of non-projective dependencies, which complicates parsing.
* The requirement that every argument/modifier of the elided predicate has an antecedent, makes it impossible to analyze cross-sentence elliptical constructions. (This would require relations crossing sentence boundaries.)

## Head ellipsis in UD v2

In the following cases of head ellipsis, we promote a dependent of the elided head.

### Nominals

If the head nominal is elided, we promote dependents in the following order: `amod` > `nummod` > `det` > `nmod` > `case`.

Examples:

~~~ sdparse
Er kauft sich ein grünes Auto und sie kauft sich ein rotes . \n He buys himself a green car and she buys herself a red .

nsubj(kauft-2, Er-1)
det(Auto-6, ein-4)
amod(Auto-6, grünes-5)
obj(kauft-2, Auto-6)
conj(kauft-2, kauft-9)
nsubj(kauft-9, sie-8)
obj(kauft-9, rotes-12)
det(rotes-12, ein-11)
~~~

~~~ sdparse
She saw every animal at the zoo but he saw only some .

nsubj(saw-2, She-1)
det(animal-4, every-3)
obj(saw-2, animal-4)
conj(saw-2, saw-10)
advmod(some-12, only-11)
obj(saw-10, some-12)
~~~

~~~ sdparse
She saw three monkeys and he saw two .

nsubj(saw-2, She-1)
nummod(monkeys-4, three-3)
obj(saw-2, monkeys-4)
conj(saw-2, saw-7)
obj(saw-7, two-8)
~~~

### Clauses

If the main predicate is elided, we use simple promotion only if there is an `aux` or `cop`, or a `mark` in the case of an infinitival marker.

Example:

~~~ sdparse
Sue likes pasta and Peter does , too . 

nsubj(likes-2, Sue-1)
obj(likes-2, pasta-3)
conj(likes-2, does-6)
nsubj(does-6, Peter-5)
advmod(does-6, too-8)
~~~

~~~ sdparse
Sue is hungry and Peter is , too . 

nsubj(hungry-3, Sue-1)
cop(hungry-3, is-2)
conj(hungry-3, is-6)
nsubj(is-6, Peter-5)
advmod(is-6, too-8)
~~~

~~~ sdparse
They will do it if they want to .

nsubj(will-2, They-1)
aux(do-3, will-2)
obj(it-4, do-3)
advcl(do-3, want-7)
nsubj(want-7, they-6)
xcomp(want-7, to-8)
~~~

## Predicate ellipsis in _Basic_ UD v2

In more complicated cases where a predicate is elided but no `aux` or `cop` is present, promotion would lead to very unnatural and confusing relations. For example, in the following sentence, _you_ would be the subject of _coffee_, suggesting that the second clause contains a copular construction rather than an elided predicate.

~~~ sdparse
I like tea and you coffee .

nsubj(like-2, I-1)
obj(like-2, tea-3)
nsubj(coffee-6, you-5)
conj(like-2, coffee-6)
~~~ 

We considered two alternative proposals for dealing with such cases in UD basic dependencies, one that make use of composite relations (but do not introduce any new relations) and one that instead adds a new relation named `orphan` to preserve intuitions about constituency. In the end we adopted alternative 2.

### Predicate ellipis 1: composite relations (rejected variant)

The first alternative is to attach orphans to their grandparent with a composite relation of the form `headrel>orphanrel`.

Example:

~~~ sdparse
I like tea and you coffee .

nsubj(like-2, I-1)
obj(like-2, tea-3)
conj>nsubj(like-2, you-5)
conj>obj(like-2, coffee-6)
~~~ 

If the grandparent is also elided, the relation is composed of all three relations and the orphan is attached to its great-grandparent. 

Example:

~~~ sdparse
Mary wants to buy a book and Jenny a CD .

nsubj(wants-2, Mary-1)
xcomp(wants-2, buy-4)
obj(buy-4, book-6)
conj>nsubj(wants-2, Jenny-8)
conj>xcomp>obj(wants-2, CD-10)
~~~ 

Unlike the analysis using the `remnant` relation, this proposal also allows us to analyze sentences in which the second clause contains additional modifiers.

~~~ sdparse
They had left the company , many for good .

nsubj(left, They)
obj(left, company)
conj>nsubj(left, many)
conj>nmod(left, good)
~~~

This approach can also be used when the antecedent of the elided node is in another sentence. The artificial ROOT node is now allowed to have more than one child, but only if all are attached via composite relations, starting with `root>`.

~~~ sdparse
Mary wants to buy a book . ROOT And Jenny a CD .

nsubj(wants-2, Mary-1)
xcomp(wants-2, buy-4)
obj(buy-4, book-6)
root>nsubj(ROOT, Jenny)
root>xcomp>obj(ROOT, CD)
~~~ 

### Predicate ellipis 2: orphan instead of remnant (approved variant)

The second alternative preserves the integrity of the second conjunct as a single subtree by (arbitrarily) promoting one of the orphans to the (subclause) root and attaching the others with a new dummy relation `orphan`. Here are the same examples annotated according to this alternative:

~~~ sdparse
I like tea and you coffee .

nsubj(like-2, I-1)
obj(like-2, tea-3)
conj(like-2, you-5)
cc(you-5, and-4)
orphan(you-5, coffee-6)
~~~ 

~~~ sdparse
Mary wants to buy a book and Jenny a CD .

nsubj(wants-2, Mary-1)
xcomp(wants-2, buy-4)
obj(buy-4, book-6)
conj(wants-2, Jenny-8)
orphan(Jenny-8, CD-10)
~~~ 

~~~ sdparse
They had left the company , many for good .

nsubj(left, They)
obj(left, company)
conj(left, many)
orphan(many, good)
~~~

~~~ sdparse
Mary wants to buy a book . ROOT And Jenny a CD .

nsubj(wants-2, Mary-1)
xcomp(wants-2, buy-4)
obj(buy-4, book-6)
root(ROOT, Jenny)
orphan(Jenny, CD)
~~~ 

Note that the `orphan` relation is only used when an ordinary relation would be misleading (for example, when attaching an object to a subject). In particular, the ordinary `cc` relation should be used for the coordinating conjunction, which attaches to the pseudo-constituent formed through the `orphan` dependency. 

All things considered, alternative 2 was judged to be the best analysis because it preserves the integrity of clauses, avoids the introduction of complex labels, and harmonizes well with the promotion analysis used for simpler cases of ellipsis. 

## Predicate ellipsis in _Enhanced_ UD v2

While we hold on to the principle that _basic_ UD trees have to be strict surface syntax trees, we propose to relax this requirement in the _enhanced_ representation and to allow special null nodes for sentences with elided predicates. These nodes have special word indices of the form _Ea.b_, where _a_ is the index of the token that would precede the elided word and _b_ is a counter. (See also the description of the [changes](conll-u.html) to the CoNLL-U file format.) Whenever the _basic_ representation contains an instance of the `orphan` relation, the _enhanced_ representation contains additional null nodes so that all orphans can be attached to their real (ellided) parent.

For example, the sentences from the previous section are analyzed as following in the _enhanced_ representation. (The special null nodes are labelled with _Ea.b_ .) 

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
xcomp(8.1-9, E8.2-10)
obj(E8.2-10, CD-12)
~~~ 

~~~ sdparse
They had left the company , many E7.1 for good .

nsubj(left, They)
obj(left, company)
conj(left, E7.1)
nsubj(E7.1, many)
nmod(E7.1, good)
~~~

In the first example, the node _E5.1_ is added for the elided predicate _like_. In the second example, we add one node for the elided matrix verb _wants_ (_E8.1_) and one node for the elided embedded verb _buy_ (_E8.2_). As the elided marker _to_ does not have any dependents, we do not add a null node for it. 








