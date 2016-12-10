---
layout: base
title:  'Enhanced Dependencies'
permalink: u/overview/enhanced-syntax.html
udver: '2'
---

# Enhanced Dependencies

We always intended the Universal Dependencies representation to be used in shallow natural language understanding tasks such as relation extraction or biomedical event extraction. For such tasks, one is typically interested in the relation between certain entities, e.g., the relation between two persons or whether one protein interacts with another. UD is particularly well suited for such tasks as UD trees contain many direct dependencies between content words and many of the dependency labels provide a lot of information about the type of relation between two content words. However, for some constructions, the dependency path between two content words of interest can be very long in a UD tree, which complicates determining how the content words are related. Further, some dependency types such as [`obl`](u-dep/obl) or [`nmod`](u-dep/nmod) are used for many different types of arguments and modifiers, and therefore they are not very informative on their own. For these reasons, we also provide guidelines for an _enhanced_ representation, which makes some of the implicit relations between words more explicit, and augments some of the dependency labels to facilitate the disambiguation of types of arguments and modifiers.


_Enhanced_ UD graphs may contain some or all of the following enhancements, which are described in the sections below.

* [Null nodes for elided predicates](#ellipsis)
* [Additional subject relations for control and raising constructions](#controlledraised-subjects)
* [Propagation of conjuncts](#propagation-of-conjuncts)
* [Coreference in relative clause constructions](#relative-clauses)
* [Modifier labels that contain the preposition or other case-marking information](#case-information)

Note that the _enhanced_ graph is not necessarily a supergraph of the basic tree, i.e., the graph is not required to contain all the basic dependency relations. For this reason, all relations of the enhanced graph (also the ones that are present in the basic UD tree) have to be included in the _DEPS_ column of a CoNLL-U file. See the specificiation of the [CoNLL-U](/format.html) file format for details.

## Ellipsis 

(See also the guidelines on [ellipsis](specific-syntax.html#ellipsis).)

In the _enhanced_ representation, we add special null nodes in clauses in which a predicate is elided.

<table id="ellipsis-example1"> <!--I like tea and you E5.1 rum .-->
<thead><tr><th>Basic</th><th>Enhanced</th></tr></thead>
<tbody><tr><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 5 6 orphan color:green
# visual-style 2 5 conj color:green
# visual-style 5 4 cc color:green
1 I      _ _ _ _ 2 nsubj  _ _
2 like   _ _ _ _ 0 root   _ _
3 tea    _ _ _ _ 2 obj    _ _
4 and    _ _ _ _ 5 cc     _ _
5 you    _ _ _ _ 2 conj   _ _
6 coffee _ _ _ _ 5 orphan _ _
7 .      _ _ _ _ 2 punct  _ _
</div>
</td><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 6 7 obj color:blue
# visual-style 6 5 nsubj color:blue
# visual-style 2 6 conj color:blue
# visual-style 6 4 cc color:blue
1 I      _ _ _ _ 2 nsubj _ _
2 like   _ _ _ _ 0 root  _ _
3 tea    _ _ _ _ 2 obj   _ _
4 and    _ _ _ _ 6 cc    _ _
5 you    _ _ _ _ 6 nsubj _ _
6 E5.1   _ _ _ _ 2 conj  _ _
7 coffee _ _ _ _ 6 obj   _ _
8 .      _ _ _ _ 2 punct _ _
</div>
</td></tr></tbody>
</table>

<table id="ellipsis-example2"> <!--Mary wants to buy a book and Jenny E8.1 E8.2 a CD .-->
<tbody><tr><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 8 10 orphan color:green
# visual-style 2 8 conj color:green
# visual-style 8 7 cc color:green
1  Mary  _ _ _ _ 2  nsubj  _ _
2  wants _ _ _ _ 0  root   _ _
3  to    _ _ _ _ 4  mark   _ _
4  buy   _ _ _ _ 2  xcomp  _ _
5  a     _ _ _ _ 6  det    _ _
6  book  _ _ _ _ 4  obj    _ _
7  and   _ _ _ _ 8  cc     _ _
8  Jenny _ _ _ _ 2  conj   _ _
9  a     _ _ _ _ 10 det    _ _
10 CD    _ _ _ _ 8  orphan _ _
11 .     _ _ _ _ 2  punct  _ _
</div>
</td><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 9 8 nsubj color:blue
# visual-style 10 12 obj color:blue
# visual-style 9 10 xcomp color:blue
# visual-style 9 7 cc color:blue
# visual-style 4 1 nsubj color:blue
# visual-style 10 8 nsubj color:blue
1  Mary  _ _ _ _ 2  nsubj 4:nsubj _
2  wants _ _ _ _ 0  root  _ _
3  to    _ _ _ _ 4  mark  _ _
4  buy   _ _ _ _ 2  xcomp _ _
5  a     _ _ _ _ 6  det   _ _
6  book  _ _ _ _ 4  obj   _ _
7  and   _ _ _ _ 9  cc     _ _
8  Jenny _ _ _ _ 9  nsubj 10:nsubj _
9  E8.1  _ _ _ _ 2  conj  _ _
10 E8.2  _ _ _ _ 9  xcomp _ _
11 a     _ _ _ _ 12 det   _ _
12 CD    _ _ _ _ 10 obj   _ _
13 .     _ _ _ _ 2  punct _ _
</div>
</td></tr></tbody>
</table>

Note that this is a case in which the _enhanced_ UD graph is not a supergraph of the _basic_ tree as the _basic_ tree contains `orphan` relations, which are not present in the _enhanced_ UD graph.

## Controlled/raised subjects

The _basic_ trees lack a subject dependency between a controlled verb and its controller or between an embedded verb and its raised subject. In the _enhanced_ graph, there is an additional dependency between the embedded verb and the subject of the matrix clause.

<table id="control-raising-example1"> <!--Mary wants to buy a book .-->
<tbody><tr><td width="600">
<div class="conllu-parse" tabs="no">
1 Mary  _ _ _ _ 2 nsubj _ _
2 wants _ _ _ _ 0 root  _ _
3 to    _ _ _ _ 4 mark  _ _
4 buy   _ _ _ _ 2 xcomp _ _
5 a     _ _ _ _ 6 det   _ _
6 book  _ _ _ _ 4 obj   _ _
7 .     _ _ _ _ 2 punct _ _
</div>
</td><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 4 1 nsubj color:blue
1 Mary  _ _ _ _ 2 nsubj 4:nsubj _
2 wants _ _ _ _ 0 root  _ _
3 to    _ _ _ _ 4 mark  _ _
4 buy   _ _ _ _ 2 xcomp _ _
5 a     _ _ _ _ 6 det   _ _
6 book  _ _ _ _ 4 obj   _ _
7 .     _ _ _ _ 2 punct _ _
</div>
</td></tr></tbody>
</table>

<table id="control-raising-example2"> <!--She seems to be reading a book .-->
<tbody><tr><td width="600">
<div class="conllu-parse" tabs="no">
1 She     _ _ _ _ 2 nsubj _ _
2 seems   _ _ _ _ 0 root  _ _
3 to      _ _ _ _ 5 mark  _ _
4 be      _ _ _ _ 5 aux   _ _
5 reading _ _ _ _ 2 xcomp _ _
6 a       _ _ _ _ 7 det   _ _
7 book    _ _ _ _ 5 obj   _ _
8 .       _ _ _ _ 2 punct _ _
</div>
</td><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 5 1 nsubj color:blue
1 She     _ _ _ _ 2 nsubj 5:nsubj _
2 seems   _ _ _ _ 0 root  _ _
3 to      _ _ _ _ 5 mark  _ _
4 be      _ _ _ _ 5 aux   _ _
5 reading _ _ _ _ 2 xcomp _ _
6 a       _ _ _ _ 7 det   _ _
7 book    _ _ _ _ 5 obj   _ _
8 .       _ _ _ _ 2 punct _ _
</div>
</td></tr></tbody>
</table>


## Propagation of Conjuncts

In the _basic_ representation, the governor and dependents of a conjoined phrase are all attached to the first conjunct. This often leads to very long dependency paths between content words. The _enhanced_ representation therefore also contains dependencies between the other conjuncts and the governor and dependents of the phrase.

### Conjoined verbs and verb phrases

When two verbs share their objects (or other complements), the subject and the object of the conjoined verbs are attached to every conjunct.

<table> <!--The store buys and sells cameras .-->
<tbody><tr><td width="600">
<div class="conllu-parse" tabs="no">
1 The     _ _ _ _ 2 det   _ _
2 store   _ _ _ _ 3 nsubj _ _
3 buys    _ _ _ _ 0 root  _ _
4 and     _ _ _ _ 5 cc    _ _
5 sells   _ _ _ _ 3 conj  _ _
6 cameras _ _ _ _ 5 obj   _ _
7 .       _ _ _ _ 3 punct _ _
</div>
</td><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 5 2 nsubj color:blue
# visual-style 3 6 obj color:blue
1 The     _ _ _ _ 2 det   _ _
2 store   _ _ _ _ 3 nsubj 5:nsubj _
3 buys    _ _ _ _ 0 root  _ _
4 and     _ _ _ _ 5 cc    _ _
5 sells   _ _ _ _ 3 conj  _ _
6 cameras _ _ _ _ 5 obj   3:obj _
7 .       _ _ _ _ 3 punct _ _
</div>
</td></tr></tbody>
</table>

However, if the complements of the second verb are not shared, only the subject is attached to every conjunct.

<table> <!--She was reading or watching a movie .-->
<tbody><tr><td width="600">
<div class="conllu-parse" tabs="no">
1 She      _ _ _ _ 3 nsubj _ _
2 was      _ _ _ _ 3 aux   _ _
3 reading  _ _ _ _ 0 root  _ _
4 or       _ _ _ _ 5 cc    _ _
5 watching _ _ _ _ 3 conj  _ _
6 a        _ _ _ _ 7 det   _ _
7 movie    _ _ _ _ 5 obj   _ _
8 .        _ _ _ _ 3 punct _ _
</div>
</td><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 5 1 nsubj color:blue
1 She      _ _ _ _ 3 nsubj 5:nsubj _
2 was      _ _ _ _ 3 aux   _ _
3 reading  _ _ _ _ 0 root  _ _
4 or       _ _ _ _ 5 cc    _ _
5 watching _ _ _ _ 3 conj  _ _
6 a        _ _ _ _ 7 det   _ _
7 movie    _ _ _ _ 5 obj   _ _
8 .        _ _ _ _ 3 punct _ _
</div>
</td></tr></tbody>
</table>

### Conjoined subjects and objects

When the subject is a conjoined noun phrase, each of the conjuncts is attached to the predicate.

<table> <!--Paul and Mary are running .-->
<tbody><tr><td width="600">
<div class="conllu-parse" tabs="no">
1 Paul    _ _ _ _ 5 nsubj _ _
2 and     _ _ _ _ 3 cc    _ _
3 Mary    _ _ _ _ 1 conj  _ _
4 are     _ _ _ _ 5 aux   _ _
5 running _ _ _ _ 0 root  _ _
6 .       _ _ _ _ 5 punct _ _
</div>
</td><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 5 3 nsubj color:blue
1 Paul    _ _ _ _ 5 nsubj _ _
2 and     _ _ _ _ 3 cc    _ _
3 Mary    _ _ _ _ 1 conj  5:nsubj _
4 are     _ _ _ _ 5 aux   _ _
5 running _ _ _ _ 0 root  _ _
6 .       _ _ _ _ 5 punct _ _
</div>
</td></tr></tbody>
</table>

The same is true for conjoined objects.

<table> <!--Paul bought apples and oranges .-->
<tbody><tr><td width="600">
<div class="conllu-parse" tabs="no">
1 Paul    _ _ _ _ 2 nsubj _ _
2 bought  _ _ _ _ 0 root  _ _
3 apples  _ _ _ _ 2 obj   _ _
4 and     _ _ _ _ 5 cc    _ _
5 oranges _ _ _ _ 3 conj  _ _
6 .       _ _ _ _ 2 punct _ _
</div>
</td><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 2 5 obj color:blue
1 Paul    _ _ _ _ 2 nsubj _ _
2 bought  _ _ _ _ 0 root  _ _
3 apples  _ _ _ _ 2 obj   _ _
4 and     _ _ _ _ 5 cc    _ _
5 oranges _ _ _ _ 3 conj  2:obj _
6 .       _ _ _ _ 2 punct _ _
</div>
</td></tr></tbody>
</table>

This leads to slightly strange dependencies in the case of collective subjects or objects:

<table> <!--Paul and Mary are meeting .-->
<tbody><tr><td width="600">
<div class="conllu-parse" tabs="no">
1 Paul    _ _ _ _ 5 nsubj _ _
2 and     _ _ _ _ 3 cc    _ _
3 Mary    _ _ _ _ 1 conj  _ _
4 are     _ _ _ _ 5 aux   _ _
5 meeting _ _ _ _ 0 root  _ _
6 .       _ _ _ _ 5 punct _ _
</div>
</td><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 5 3 nsubj color:blue
1 Paul    _ _ _ _ 5 nsubj _ _
2 and     _ _ _ _ 3 cc    _ _
3 Mary    _ _ _ _ 1 conj  5:nsubj _
4 are     _ _ _ _ 5 aux   _ _
5 meeting _ _ _ _ 0 root  _ _
6 .       _ _ _ _ 5 punct _ _
</div>
</td></tr></tbody>
</table>

<table> <!--Mary is eating mac and cheese .-->
<tbody><tr><td width="600">
<div class="conllu-parse" tabs="no">
1 Mary   _ _ _ _ 3 nsubj _ _
2 is     _ _ _ _ 3 aux    _ _
3 eating _ _ _ _ 0 root  _ _
4 mac    _ _ _ _ 3 obj   _ _
5 and    _ _ _ _ 6 cc  _ _
6 cheese _ _ _ _ 4 conj  _ _
7 .      _ _ _ _ 3 punct _ _
</div>
</td><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 3 6 obj color:blue
1 Mary   _ _ _ _ 3 nsubj _ _
2 is     _ _ _ _ 3 aux    _ _
3 eating _ _ _ _ 0 root  _ _
4 mac    _ _ _ _ 3 obj   _ _
5 and    _ _ _ _ 6 cc  _ _
6 cheese _ _ _ _ 4 conj  3:obj _
7 .      _ _ _ _ 3 punct _ _
</div>
</td></tr></tbody>
</table>

However, as the distinction between distributive and collective readings is often context-dependent, we take the simplest approach and always attach all conjuncts to the predicate.

When the subject is attached to a control or raising predicate, there is a dependency between the matrix verb and each conjunct and between the embedded verb and each conjunct.

<table> <!--Mary and John wanted to buy a hat .-->
<tbody><tr><td width="600">
<div class="conllu-parse" tabs="no">
1 Mary   _ _ _ _ 4 nsubj _ _
2 and    _ _ _ _ 3 cc    _ _
3 John   _ _ _ _ 1 conj  _ _
4 wanted _ _ _ _ 0 root  _ _
5 to     _ _ _ _ 6 mark  _ _
6 buy    _ _ _ _ 4 xcomp _ _
7 a      _ _ _ _ 8 det   _ _
8 hat    _ _ _ _ 6 obj   _ _
9 .      _ _ _ _ 4 punct _ _
</div>
</td><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 4 3 nsubj color:blue
# visual-style 6 1 nsubj color:blue
# visual-style 6 3 nsubj color:blue
1 Mary   _ _ _ _ 4 nsubj 6:nsubj _
2 and    _ _ _ _ 3 cc    _ _
3 John   _ _ _ _ 1 conj  4:nsubj|6:nsubj _
4 wanted _ _ _ _ 0 root  _ _
5 to     _ _ _ _ 6 mark  _ _
6 buy    _ _ _ _ 4 xcomp _ _
7 a      _ _ _ _ 8 det   _ _
8 hat    _ _ _ _ 6 obj   _ _
9 .      _ _ _ _ 4 punct _ _
</div>
</td></tr></tbody>
</table>

### Conjoined modifiers

Each conjunct in a conjoined modifier phrase gets attached to the governor of the modifier phrase. For example, the following phrase contains a conjoined adjectival phrase that modifies a noun. In the enhanced representation, there is an additional `amod` relation between the noun _river_ and the second conjunct _wide_. 

<table> <!--a long and wide river-->
<tbody><tr><td width="600">
<div class="conllu-parse" tabs="no">
1 a     _ _ _ _ 5 det  _ _
2 long  _ _ _ _ 5 amod _ _
3 and   _ _ _ _ 4 cc   _ _
4 wide  _ _ _ _ 2 conj _ _
5 river _ _ _ _ 0 root _ _
</div>
</td><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 5 4 amod color:blue
1 a     _ _ _ _ 5 det  _ _
2 long  _ _ _ _ 5 amod _ _
3 and   _ _ _ _ 4 cc   _ _
4 wide  _ _ _ _ 2 conj 5:amod _
5 river _ _ _ _ 0 root _ _
</div>
</td></tr></tbody>
</table>

## Relative clauses

In _basic_ trees, relative pronouns are attached to the main predicate of the relative clause (typically with a `nsubj` or `dobj` relation). In the corresponding _enhanced_ graphs, the relative pronoun is attached to what it is referring to with the special `ref` relation and the governor of the relative clause is attached as an argument to the main predicate of the relative clause. Note that such graphs contain a cycle.

<table> <!--the boy who lived-->
<tbody><tr><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 4 3 nsubj color:green
1 the   _ _ _ _ 2 det       _ _
2 boy   _ _ _ _ 0 root      _ _
3 who   _ _ _ _ 4 nsubj     _ _
4 lived _ _ _ _ 2 acl:relcl _ _
</div>
</td><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 4 2 nsubj color:blue
# visual-style 2 3 ref color:blue
1 the   _ _ _ _ 2 det       _ _
2 boy   _ _ _ _ 0 root      4:nsubj _
3 who   _ _ _ _ 2 ref       _ _
4 lived _ _ _ _ 2 acl:relcl _ _
</div>
</td></tr></tbody>
</table>

<table> <!--the book that I read-->
<tbody><tr><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 5 3 obj color:green
1 the   _ _ _ _ 2 det       _ _
2 book  _ _ _ _ 0 root      _ _
3 that  _ _ _ _ 5 obj       _ _
4 I     _ _ _ _ 5 nsubj     _ _
5 read  _ _ _ _ 2 acl:relcl _ _
</div>
</td><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 5 2 obj color:blue
# visual-style 2 3 ref color:blue
1 the   _ _ _ _ 2 det       _ _
2 book  _ _ _ _ 0 root      5:obj _
3 that  _ _ _ _ 2 ref       _ _
4 I     _ _ _ _ 5 nsubj     _ _
5 read  _ _ _ _ 2 acl:relcl _ _
</div>
</td></tr></tbody>
</table>

## Case Information

Adding prepositions (or case information) to the relation name of non-core dependents often makes it possible to disambiguate its semantic role. We therefore augment `nmod`, `obl`, `acl` and `advcl` relation labels with the preposition or the case of the modifier.

<table> <!--the house on the hill-->
<tbody><tr><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 2 5 nmod color:green
1 the   _ _ _ _ 2 det  _ _
2 house _ _ _ _ 0 root _ _
3 on    _ _ _ _ 5 case _ _
4 the   _ _ _ _ 5 det  _ _
5 hill  _ _ _ _ 2 nmod _ _
</div>
</td><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 2 5 nmod:on color:blue
1 the   _ _ _ _ 2 det     _ _
2 house _ _ _ _ 0 root    _ _
3 on    _ _ _ _ 5 case    _ _
4 the   _ _ _ _ 5 det     _ _
5 hill  _ _ _ _ 2 nmod:on _ _
</div>
</td></tr></tbody>
</table>

<table> <!--He went to a diner after leaving work .-->
<tbody><tr><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 2 5 obl color:green
# visual-style 2 7 advcl color:green
1  He      _ _ _ _ 2 det   _ _
2  went    _ _ _ _ 0 root  _ _
3  to      _ _ _ _ 5 case  _ _
4  the     _ _ _ _ 5 det   _ _
5  dinner  _ _ _ _ 2 obl   _ _
6  after   _ _ _ _ 7 mark  _ _
7  leaving _ _ _ _ 2 advcl _ _
8  work    _ _ _ _ 7 obj   _ _
9  .       _ _ _ _ 2 punct _ _
</div>
</td><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 2 5 obl:to color:blue
# visual-style 2 7 advcl:after color:blue
1  He      _ _ _ _ 2 det         _ _
2  went    _ _ _ _ 0 root        _ _
3  to      _ _ _ _ 5 case        _ _
4  the     _ _ _ _ 5 det         _ _
5  dinner  _ _ _ _ 2 obl:to      _ _
6  after   _ _ _ _ 7 mark        _ _
7  leaving _ _ _ _ 2 advcl:after _ _
8  work    _ _ _ _ 7 obj         _ _
9  .       _ _ _ _ 2 punct       _ _
</div>
</td></tr></tbody>
</table>

<table> <!--die Zerstörung der Stadt \n the destruction the.GEN city.GEN-->
<tbody><tr><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 2 4 nmod color:green
# text = the destruction of the city
1  die        the         DET  _ Case=Gen 2 det  _ _
2  Zerstörung destruction NOUN _ Case=Nom 0 root _ _
3  der        the         DET  _ Case=Gen 4 det  _ _
4  Stadt      city        NOUN _ Case=Gen 2 nmod _ _
</div>
</td><td width="600">
<div class="conllu-parse" tabs="no">
# visual-style 2 4 nmod:gen color:blue
# text = the destruction of the city
1  die        the         DET  _ Case=Gen 2 det      _ _
2  Zerstörung destruction NOUN _ Case=Nom 0 root     _ _
3  der        the         DET  _ Case=Gen 4 det      _ _
4  Stadt      city        NOUN _ Case=Gen 2 nmod:gen _ _
</div>
</td></tr></tbody>
</table>

## Additional enhancements

Some postprocessing steps such as demoting light nouns that behave like quantificational determiners (as, for example, described in [Schuster and Manning (2016)](http://www.lrec-conf.org/proceedings/lrec2016/pdf/779_Paper.pdf)) can improve the usability of the dependency graphs for downstream applications. However, as most of these additions are highly language-specific, we do not provide any universal guidelines for such a representation and anything beyond the above additions is not part of the UD standard and should not be added to the officially released treebanks.
