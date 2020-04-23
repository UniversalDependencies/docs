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
* [Propagation of conjuncts](#propagation-of-conjuncts)
* [Additional subject relations for control and raising constructions](#controlledraised-subjects)
* [Coreference in relative clause constructions](#relative-clauses)
* [Modifier labels that contain the preposition or other case-marking information](#case-information)

Note that the _enhanced_ graph is not necessarily a supergraph of the basic tree, i.e., the graph is not required to contain all the basic dependency relations. For this reason, all relations of the enhanced graph (also the ones that are present in the basic UD tree) have to be included in the _DEPS_ column of a CoNLL-U file. See the specificiation of the [CoNLL-U](/format.html) file format for details.

Furthermore, the dependency relation labels in the enhanced graph in DEPS may contain certain extensions that are not permitted
in the basic relation type in the DEPREL column. The regular expression restricting relation labels in DEPREL is pretty simple;
the label can contain only lowercase English letters and at most one colon, which separates the universal and the language-specific
part of the label: `^[a-z]+(:[a-z]+)?$`. In contrast, the relation label in DEPS may contain up to three colons, separating up to
four sections. One of the sections (never the first one) may also contain lowercase Unicode letters and the underscore character:
`^[a-z]+(:[a-z]+)?(:[\p{Ll}\p{Lm}\p{Lo}\p{M}]+(_[\p{Ll}\p{Lm}\p{Lo}\p{M}]+)*)?(:[a-z]+)?$`.
Only the first section, the universal relation, is mandatory. The other sections are optional but if they appear, they must appear
in the order described below. We provide a more detailed explanation of the extra sections later on this page; here is a summary:

1. Universal dependency relation. In addition to the [37 relations](http://universaldependencies.org/u/dep/index.html)
   defined in the basic representation, the relation can also be <tt><a href="#relative-clauses">ref</a></tt>.
2. Documented [relation subtype](/ext-dep-index.html) (either language-specific or more general) from the basic representation.
3. [Case information](#case-information) –
   adposition or conjunction that occurs as a `case` or `mark` dependent of the node whose relation to its
   parent is being enhanced. Note that this is the only part where non-ASCII letters are permitted within the enhanced relation label.
   The word should be normalized (lowercased, no typos), i.e., in general we take its lemma. However, if the case/mark dependent is
   a fixed multi-word expression, the lemma of the expression is not necessarily composed of lemmas of the individual member words.
   For instance, the string representing the English expression “As Opposed To” is `as_opposed_to`. That is, the casing is normalized
   from “As” to “as” etc., but “opposed” is not replaced by its lemma “oppose” because the expression is fixed. We use the underscore
   character (“_”) to connect member words.
4. [Case information](#case-information) –
   morphological case of the node whose relation to its parent is being enhanced. Value corresponds to the value of
   the Case feature but it is lowercased (e.g., `gen` instead of `Gen`). Unlike in morphological features, multivalues with comma
   (`Case=Acc,Dat`) are not allowed. Case information in enhanced relations must be fully disambiguated.


## Ellipsis

(See also the guidelines on [ellipsis](specific-syntax.html#ellipsis).)

In the _enhanced_ representation, we add special null nodes in clauses in which a predicate is elided.

<table id="ellipsis-example1"> <!--I like tea and you E5.1 rum .-->
<tbody><tr><td width="600">
<div class="conllu-parse">
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
<div class="conllu-parse">
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
<div class="conllu-parse">
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
<div class="conllu-parse">
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


## Propagation of Conjuncts

In the _basic_ representation, the governor and dependents of a conjoined phrase are all attached to the first conjunct. This often leads to very long dependency paths between content words. The _enhanced_ representation therefore also contains dependencies between the other conjuncts and the governor and dependents of the phrase.

### Conjoined verbs and verb phrases

When two verbs share their objects (or other complements), the subject and the object of the conjoined verbs are attached to every conjunct.

<table> <!--The store buys and sells cameras .-->
<tbody><tr><td width="600">
<div class="conllu-parse">
1 The     _ _ _ _ 2 det   _ _
2 store   _ _ _ _ 3 nsubj _ _
3 buys    _ _ _ _ 0 root  _ _
4 and     _ _ _ _ 5 cc    _ _
5 sells   _ _ _ _ 3 conj  _ _
6 cameras _ _ _ _ 3 obj   _ _
7 .       _ _ _ _ 3 punct _ _
</div>
</td><td width="600">
<div class="conllu-parse">
# visual-style 5 2 nsubj color:blue
# visual-style 5 6 obj color:blue
1 The     _ _ _ _ 2 det   _ _
2 store   _ _ _ _ 3 nsubj 5:nsubj _
3 buys    _ _ _ _ 0 root  _ _
4 and     _ _ _ _ 5 cc    _ _
5 sells   _ _ _ _ 3 conj  _ _
6 cameras _ _ _ _ 3 obj   5:obj _
7 .       _ _ _ _ 3 punct _ _
</div>
</td></tr></tbody>
</table>

However, if the complements of the second verb are not shared, only the shared dependents are attached to every conjunct.

<table> <!--She was reading or watching a movie .-->
<tbody><tr><td width="600">
<div class="conllu-parse">
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
<div class="conllu-parse">
# visual-style 5 1 nsubj color:blue
# visual-style 5 2 aux color:blue
1 She      _ _ _ _ 3 nsubj 5:nsubj _
2 was      _ _ _ _ 3 aux   5:aux _
3 reading  _ _ _ _ 0 root  _ _
4 or       _ _ _ _ 5 cc    _ _
5 watching _ _ _ _ 3 conj  _ _
6 a        _ _ _ _ 7 det   _ _
7 movie    _ _ _ _ 5 obj   _ _
8 .        _ _ _ _ 3 punct _ _
</div>
</td></tr></tbody>
</table>

Similarly, the enhanced representation can also distinguish private dependents of the first verb. Note however that in this case it cannot be inferred from the basic representation automatically.

<table> <!--She was reading or watching a movie .-->
<tbody><tr><td width="600">
<div class="conllu-parse">
1 She      _ _ _ _ 3 nsubj _ _
2 was      _ _ _ _ 3 aux   _ _
3 watching _ _ _ _ 0 root  _ _
4 a        _ _ _ _ 5 det   _ _
5 movie    _ _ _ _ 3 obj   _ _
6 or       _ _ _ _ 7 cc    _ _
7 reading  _ _ _ _ 3 conj  _ _
8 .        _ _ _ _ 3 punct _ _
</div>
</td><td width="600">
<div class="conllu-parse">
# visual-style 7 1 nsubj color:blue
# visual-style 7 2 aux color:blue
1 She      _ _ _ _ 3 nsubj 7:nsubj _
2 was      _ _ _ _ 3 aux   7:aux _
3 watching _ _ _ _ 0 root  _ _
4 a        _ _ _ _ 5 det   _ _
5 movie    _ _ _ _ 3 obj   _ _
6 or       _ _ _ _ 7 cc    _ _
7 reading  _ _ _ _ 3 conj  _ _
8 .        _ _ _ _ 3 punct _ _
</div>
</td></tr></tbody>
</table>

### Conjoined subjects and objects

When the subject is a conjoined noun phrase, each of the conjuncts is attached to the predicate.

<table> <!--Paul and Mary are running .-->
<tbody><tr><td width="600">
<div class="conllu-parse">
1 Paul    _ _ _ _ 5 nsubj _ _
2 and     _ _ _ _ 3 cc    _ _
3 Mary    _ _ _ _ 1 conj  _ _
4 are     _ _ _ _ 5 aux   _ _
5 running _ _ _ _ 0 root  _ _
6 .       _ _ _ _ 5 punct _ _
</div>
</td><td width="600">
<div class="conllu-parse">
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
<div class="conllu-parse">
1 Paul    _ _ _ _ 2 nsubj _ _
2 bought  _ _ _ _ 0 root  _ _
3 apples  _ _ _ _ 2 obj   _ _
4 and     _ _ _ _ 5 cc    _ _
5 oranges _ _ _ _ 3 conj  _ _
6 .       _ _ _ _ 2 punct _ _
</div>
</td><td width="600">
<div class="conllu-parse">
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
<div class="conllu-parse">
1 Paul    _ _ _ _ 5 nsubj _ _
2 and     _ _ _ _ 3 cc    _ _
3 Mary    _ _ _ _ 1 conj  _ _
4 are     _ _ _ _ 5 aux   _ _
5 meeting _ _ _ _ 0 root  _ _
6 .       _ _ _ _ 5 punct _ _
</div>
</td><td width="600">
<div class="conllu-parse">
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
<div class="conllu-parse">
1 Mary   _ _ _ _ 3 nsubj _ _
2 is     _ _ _ _ 3 aux    _ _
3 eating _ _ _ _ 0 root  _ _
4 mac    _ _ _ _ 3 obj   _ _
5 and    _ _ _ _ 6 cc  _ _
6 cheese _ _ _ _ 4 conj  _ _
7 .      _ _ _ _ 3 punct _ _
</div>
</td><td width="600">
<div class="conllu-parse">
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
<div class="conllu-parse">
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
<div class="conllu-parse">
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
<div class="conllu-parse">
1 a     _ _ _ _ 5 det  _ _
2 long  _ _ _ _ 5 amod _ _
3 and   _ _ _ _ 4 cc   _ _
4 wide  _ _ _ _ 2 conj _ _
5 river _ _ _ _ 0 root _ _
</div>
</td><td width="600">
<div class="conllu-parse">
# visual-style 5 4 amod color:blue
1 a     _ _ _ _ 5 det  _ _
2 long  _ _ _ _ 5 amod _ _
3 and   _ _ _ _ 4 cc   _ _
4 wide  _ _ _ _ 2 conj 5:amod _
5 river _ _ _ _ 0 root _ _
</div>
</td></tr></tbody>
</table>


## Controlled/raised subjects

The _basic_ trees lack a subject dependency between a controlled verb and its controller or between an embedded verb and its raised subject. In the _enhanced_ graph, there is an additional dependency between the embedded verb and the subject of the matrix clause.

<table id="control-raising-example1"> <!--Mary wants to buy a book .-->
<thead><tr><th>Basic</th><th>Enhanced</th></tr></thead>
<tbody><tr><td width="600">
<div class="conllu-parse">
1 Mary  _ _ _ _ 2 nsubj _ _
2 wants _ _ _ _ 0 root  _ _
3 to    _ _ _ _ 4 mark  _ _
4 buy   _ _ _ _ 2 xcomp _ _
5 a     _ _ _ _ 6 det   _ _
6 book  _ _ _ _ 4 obj   _ _
7 .     _ _ _ _ 2 punct _ _
</div>
</td><td width="600">
<div class="conllu-parse">
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
<div class="conllu-parse">
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
<div class="conllu-parse">
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


## Relative clauses

In _basic_ trees, relative pronouns are attached to the main predicate of the relative clause (typically with a `nsubj` or `obj` relation). In the corresponding _enhanced_ graphs, the relative pronoun is attached to its antecedent with the special `ref` relation and the antecedent is attached as an argument to the main predicate of the relative clause. In the case where there is no explicit relative pronoun, only the latter arc is added. Note that such graphs contain a cycle.

<table> <!--the boy who lived-->
<tbody><tr><td width="600">
<div class="conllu-parse">
# visual-style 4 3 nsubj color:green
1 the   the   DET _ Definite=Def|PronType=Art 2 det       _ _
2 boy   boy   NOUN _ Gender=Masc|Number=Sing 0 root      _ _
3 who   who   PRON _ PronType=Rel 4 nsubj     _ _
4 lived lived VERB _ Mood=Ind|Tense=Past|VerbForm=Fin 2 acl:relcl _ _
</div>
</td><td width="600">
<div class="conllu-parse">
# visual-style 4 2 nsubj color:blue
# visual-style 2 3 ref color:blue
1 the   the   DET  _ Definite=Def|PronType=Art 2 det       _ _
2 boy   boy   NOUN _ Gender=Masc|Number=Sing 0 root      4:nsubj _
3 who   who   PRON _ PronType=Rel 2 ref       _ _
4 lived lived VERB _ Mood=Ind|Tense=Past|VerbForm=Fin 2 acl:relcl _ _
</div>
</td></tr></tbody>
</table>

<table> <!--the book that I read-->
<tbody><tr><td width="600">
<div class="conllu-parse">
# visual-style 5 3 obj color:green
1 the   the  DET  _ Definite=Def|PronType=Art 2 det       _ _
2 book  book NOUN _ Gender=Neut|Number=Sing 0 root      _ _
3 that  that PRON _ PronType=Rel 5 obj       _ _
4 I     I    PRON _ Number=Sing|Person=1|PronType=Prs 5 nsubj     _ _
5 read  read VERB _ Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin 2 acl:relcl _ _
</div>
</td><td width="600">
<div class="conllu-parse">
# visual-style 5 2 obj color:blue
# visual-style 2 3 ref color:blue
1 the   the DET _ Definite=Def|PronType=Art 2 det       _ _
2 book  book NOUN _ Gender=Neut|Number=Sing 0 root      5:obj _
3 that  that PRON _ PronType=Rel 2 ref       _ _
4 I     I PRON _ Number=Sing|Person=1|PronType=Prs 5 nsubj     _ _
5 read  read VERB _ Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin 2 acl:relcl _ _
</div>
</td></tr></tbody>
</table>

<table> <!--the book I read-->
<tbody><tr><td width="600">
<div class="conllu-parse">
1 the   the  DET  _ Definite=Def|PronType=Art 2 det       _ _
2 book  book NOUN _ Gender=Neut|Number=Sing 0 root      _ _
3 I     I    PRON _ Number=Sing|Person=1|PronType=Prs 4 nsubj     _ _
4 read  read VERB _ Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin 2 acl:relcl _ _
</div>
</td><td width="600">
<div class="conllu-parse">
# visual-style 4 2 obj color:blue
1 the   the DET _ Definite=Def|PronType=Art 2 det       _ _
2 book  book NOUN _ Gender=Neut|Number=Sing 0 root      4:obj _
3 I     I PRON _ Number=Sing|Person=1|PronType=Prs 4 nsubj     _ _
4 read  read VERB _ Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin 2 acl:relcl _ _
</div>
</td></tr></tbody>
</table>

Adverbial relativizers receive the same treatment.

<table> <!--the episode where Monica sings-->
<tbody><tr><td width="600">
<div class="conllu-parse">
# visual-style 5 3 advmod color:green
1 the the DET DT Definite=Def|PronType=Art 2 det _ _
2 episode episode NOUN NN Number=Sing 0 root _ _
3 where where ADV WRB PronType=Rel 5 advmod _ _
4 Monica Monica PROPN NNP Number=Sing 5 nsubj _ _
5 sings sing NOUN NNS Number=Plur 2 acl:relcl _ _
</div>
</td><td width="600">
<div class="conllu-parse">
# visual-style 2 3 ref color:blue
# visual-style 5 2 obl color:blue
1 the the DET DT Definite=Def|PronType=Art 2 det _ _
2 episode episode NOUN NN Number=Sing 0 root 5:obl _
3 where where ADV WRB PronType=Rel 2 ref _ _
4 Monica Monica PROPN NNP Number=Sing 5 nsubj _ _
5 sings sing NOUN NNS Number=Plur 2 acl:relcl _ _
</div>
</td></tr></tbody>
</table>

The enhanced relations include deep syntactic relations. Therefore, in case marking languages the enhanced dependencies may link verb dependents that are not in the expected morphological case, required by surface syntax. In the following Czech example, the relative modifier phrase _v&nbsp;němž_ “in which” is obligatorily in the locative case form (`Case=Loc`). If it were a main clause, the referent _dům_ “house” would have to be in locative too: _v&nbsp;domě_ “in house”. However, here it is in the nominative (`Case=Nom`), and the enhanced dependency `obl` going to a nominative dependent is something we would not expect to see, given the morpho-syntactic rules of the language.

<table> <!--dům, v němž žijeme = the house we live in (lit. house, in that we-live)-->
<tbody><tr><td width="600">
<div class="conllu-parse">
# visual-style 5 4 obl color:green
1 dům house NOUN _ Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing 0 root       _ _
2 , , PUNCT _ _ 5 punct      _ _
3 v in ADP _ _ 4 case       _ _
4 němž that PRON _ Case=Loc|Gender=Masc|Number=Sing|PronType=Rel 5 obl     _ _
5 žijeme live VERB _ Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 1 acl:relcl _ _
</div>
</td><td width="600">
<div class="conllu-parse">
# visual-style 5 1 obl color:blue
# visual-style 1 4 ref color:blue
1 dům house NOUN _ Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing  0 root 5:obl _
2 , , PUNCT _ _ 5 punct      _ _
3 v in ADP _ _ 4 case       _ _
4 němž that PRON _ Case=Loc|Gender=Masc|Number=Sing|PronType=Rel 1 ref     _ _
5 žijeme live VERB _ Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 1 acl:relcl _ _
</div>
</td></tr></tbody>
</table>

The relative element does not always depend directly on the predicate of the relative clause.
It may be embedded deeper as in the following example.

<table> <!--muž, v jehož domě žijeme = the man whose house we live in (lit. man, in whose house we-live)-->
<tbody><tr><td width="600">
<div class="conllu-parse">
# visual-style 5 4 det color:green
1 muž man NOUN _ Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing 0 root       _ _
2 , , PUNCT _ _ 6 punct      _ _
3 v in ADP _ _ 5 case       _ _
4 jehož whose DET _ Gender[psor]=Masc|Number[psor]=Plur|Poss=Yes|PronType=Rel 5 det     _ _
5 domě house NOUN _ Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing 6 obl _ _
6 žijeme live VERB _ Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 1 acl:relcl _ _
</div>
</td><td width="600">
<div class="conllu-parse">
# visual-style 5 1 nmod color:blue
# visual-style 1 4 ref color:blue
1 muž man NOUN _ Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing 0 root 5:nmod _
2 , , PUNCT _ _ 6 punct      _ _
3 v in ADP _ _ 5 case       _ _
4 jehož whose DET _ Gender[psor]=Masc|Number[psor]=Plur|Poss=Yes|PronType=Rel 1 ref     _ _
5 domě house NOUN _ Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing 6 obl _ _
6 žijeme live VERB _ Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 1 acl:relcl _ _
</div>
</td></tr></tbody>
</table>

If the relative clause has a nominal predicate, the relative pronoun may occupy the head position
within the clause. In such cases no relation should be added from its parent to its co-referential
element (because they are the same node). We should only add a `nsubj` relation from the antecedent
to the `nsubj` of the relative clause (and remove the corresponding `nsubj` relation between the
relative pronoun and the subject). The `acl:relcl` should remain the same as in basic
dependencies.

<!-- https://github.com/UniversalDependencies/docs/issues/531 -->
<table> <!--He became chairman, which he still is-->
<tbody><tr><td width="600">
<div class="conllu-parse">
# visual-style 5 6 nsubj color:green
1 He       he       PRON  _ Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs 2 nsubj _ _
2 became   become   VERB  _ Mood=Ind|Tense=Past|VerbForm=Fin 0 root _ _
3 chairman chairman NOUN  _ Number=Sing 2 xcomp _ SpaceAfter=No
4 ,        ,        PUNCT _ _ 5 punct _ _
5 which    which    PRON  _ PronType=Rel 3 acl:relcl _ _
6 he       he       PRON  _ Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs 5 nsubj _ _
7 still    still    ADV   _ _ 5 advmod _ _
8 is       be       AUX   _ Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin 5 cop _ SpaceAfter=No
9 .        .        PUNCT _ _ 2 punct _ _
</div>
</td><td width="600">
<div class="conllu-parse">
# visual-style 3 6 nsubj color:blue
# visual-style 3 5 ref color:blue
1 He       he       PRON  _ Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs 2 nsubj _ _
2 became   become   VERB  _ Mood=Ind|Tense=Past|VerbForm=Fin 0 root _ _
3 chairman chairman NOUN  _ Number=Sing 2 xcomp _ SpaceAfter=No
4 ,        ,        PUNCT _ _ 5 punct _ _
5 which    which    PRON  _ PronType=Rel 3 acl:relcl 3:ref _
6 he       he       PRON  _ Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs 3 nsubj _ _
7 still    still    ADV   _ _ 5 advmod _ _
8 is       be       AUX   _ Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin 5 cop _ SpaceAfter=No
9 .        .        PUNCT _ _ 2 punct _ _
</div>
</td></tr></tbody>
</table>


## Case Information

Adding prepositions (or case information) to the relation name of non-core dependents often makes it possible to disambiguate its
semantic role. We therefore augment certain relation labels with the case information of the modifier.
The augmented relations are `nmod`, `acl`, `obl` and `advcl`; if it makes sense in the language, some core relations may also be
augmented: `obj`, `iobj`, `ccomp`.
Case information may be represented by the lemma of an adposition attached via a `case` relation.
For clauses, the corresponding information may be represented by the lemma of a `mark` dependent instead.
<!-- DZ: Do we really want to include cc dependents here? How are they related to case? Don't we want to make them augment conj relations instead? -->
Case information may also be represented by the value of the morphological feature [Case](/u/feat/Case.html).
In some languages, there is both the adposition and the morphological case, and their combination must be reflected in the enhanced relation.

The following formal rules apply (copied from the summary at the beginning of this page):

* Adposition or conjunction that occurs as a `case` or `mark` <!--or `cc` ?--> dependent of the node whose relation to its
  parent is being enhanced. Note that this is the only part where non-ASCII letters are permitted within the enhanced relation label.
  The word should be normalized (lowercased, no typos), i.e., in general we take its lemma. However, if the case/mark dependent is
  a fixed multi-word expression, the lemma of the expression is not necessarily composed of lemmas of the individual member words.
  For instance, the string representing the English expression “As Opposed To” is `as_opposed_to`. That is, the casing is normalized
  from “As” to “as” etc., but “opposed” is not replaced by its lemma “oppose” because the expression is fixed. We use the underscore
  character (“_”) to connect member words.
  * Multiple `case` or `mark` nodes may occur even if it is not a fixed expression. For example, a type of adverbial clause
    in Dutch uses two markers _om_ and _te_, the first one roughly corresponding to English “so that”, the second one being
    an infinitive marker. The incoming dependency of the subordinate clause will then be labeled `advcl:om_te`.
* Morphological case of the node whose relation to its parent is being enhanced. Value corresponds to the value of
  the Case feature but it is lowercased (e.g., `gen` instead of `Gen`). Unlike in morphological features, multivalues with comma
  (`Case=Acc,Dat`) are not allowed. Case information in enhanced relations must be fully disambiguated.

<table> <!--the house on the hill-->
<tbody><tr><td width="600">
<div class="conllu-parse">
# visual-style 2 5 nmod color:green
1 the   _ _ _ _ 2 det  _ _
2 house _ _ _ _ 0 root _ _
3 on    _ _ _ _ 5 case _ _
4 the   _ _ _ _ 5 det  _ _
5 hill  _ _ _ _ 2 nmod _ _
</div>
</td><td width="600">
<div class="conllu-parse">
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
<div class="conllu-parse">
# visual-style 2 5 obl color:green
# visual-style 2 7 advcl color:green
1  He      _ _ _ _ 2 nsubj _ _
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
<div class="conllu-parse">
# visual-style 2 5 obl:to color:blue
# visual-style 2 7 advcl:after color:blue
1  He      _ _ _ _ 2 nsubj       _ _
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
<div class="conllu-parse">
# visual-style 2 4 nmod color:green
# text = the destruction of the city
1  die        the         DET  _ Case=Gen 2 det  _ _
2  Zerstörung destruction NOUN _ Case=Nom 0 root _ _
3  der        the         DET  _ Case=Gen 4 det  _ _
4  Stadt      city        NOUN _ Case=Gen 2 nmod _ _
</div>
</td><td width="600">
<div class="conllu-parse">
# visual-style 2 4 nmod:gen color:blue
# text = the destruction of the city
1  die        the         DET  _ Case=Gen 2 det      _ _
2  Zerstörung destruction NOUN _ Case=Nom 0 root     _ _
3  der        the         DET  _ Case=Gen 4 det      _ _
4  Stadt      city        NOUN _ Case=Gen 2 nmod:gen _ _
</div>
</td></tr></tbody>
</table>

<table> <!--Er sitzt auf dem Boden. \n He sits on the floor.-->
<tbody><tr><td width="600">
<div class="conllu-parse">
# visual-style 2 5 obl color:green
# text = He sits on the floor
1  Er     he     PRON  _ Case=Nom 2 nsubj _ _
2  sitzt  sits   NOUN  _ _        0 root  _ _
3  auf    on     ADP   _ _        5 case  _ _
4  dem    the    DET   _ Case=Dat 5 det   _ _
5  Boden  floor  NOUN  _ Case=Dat 2 obl   _ SpaceAfter=No
6  .      .      PUNCT _ _        2 punct _ _
</div>
</td><td width="600">
<div class="conllu-parse">
# visual-style 2 5 obl:auf:dat color:blue
# text = He sits on the floor
1  Er     he     PRON  _ Case=Nom 2 nsubj       _ _
2  sitzt  sits   NOUN  _ _        0 root        _ _
3  auf    on     ADP   _ _        5 case        _ _
4  dem    the    DET   _ Case=Dat 5 det         _ _
5  Boden  floor  NOUN  _ Case=Dat 2 obl:auf:dat _ SpaceAfter=No
6  .      .      PUNCT _ _        2 punct       _ _
</div>
</td></tr></tbody>
</table>

<table> <!--Er setzt sich auf den Boden. \n He sits down on the floor.-->
<tbody><tr><td width="600">
<div class="conllu-parse">
# visual-style 2 6 obl color:green
# text = He sits down on the floor
1  Er     he      PRON  _ Case=Nom 2 nsubj   _ _
2  setzt  sets    NOUN  _ _        0 root    _ _
3  sich   himself PRON  _ Case=Acc 2 expl:pv _ _
4  auf    on      ADP   _ _        6 case    _ _
5  den    the     DET   _ Case=Acc 6 det     _ _
6  Boden  floor   NOUN  _ Case=Acc 2 obl     _ SpaceAfter=No
7  .      .       PUNCT _ _        2 punct   _ _
</div>
</td><td width="600">
<div class="conllu-parse">
# visual-style 2 6 obl:auf:acc color:blue
# text = He sits down on the floor
1  Er     he      PRON  _ Case=Nom 2 nsubj       _ _
2  setzt  sets    NOUN  _ _        0 root        _ _
3  sich   himself PRON  _ Case=Acc 2 expl:pv     _ _
4  auf    on      ADP   _ _        6 case        _ _
5  den    the     DET   _ Case=Acc 6 det         _ _
6  Boden  floor   NOUN  _ Case=Acc 2 obl:auf:acc _ SpaceAfter=No
7  .      .       PUNCT _ _        2 punct       _ _
</div>
</td></tr></tbody>
</table>

<table> <!--В течение долгого времени изучал язык майя. \n For a long time he studied the Maya language.-->
<tbody><tr><td width="600">
<div class="conllu-parse">
# visual-style 5 4 obl:tmod color:green
# visual-style 6 7 nmod color:green
# text = For a long time he studied the Maya language.
1  В        In        ADP    _  _         4  case      _  _
2  течение  duration  NOUN   _  Case=Loc  1  fixed     _  _
3  долгого  long      ADJ    _  Case=Gen  4  amod      _  _
4  времени  time      NOUN   _  Case=Gen  5  obl:tmod  _  _
5  изучал   studied   VERB   _  _         0  root      _  _
6  язык     language  NOUN   _  Case=Acc  5  obj       _  _
7  майя     Maya      PROPN  _  Case=Gen  6  nmod      _  SpaceAfter=No
8  .        .         PUNCT  _  _         5  punct     _  _
</div>
</td><td width="600">
<div class="conllu-parse">
# visual-style 5 4 obl:tmod:в_течение:gen color:blue
# visual-style 6 7 nmod:gen color:blue
# text = For a long time he studied the Maya language.
1  В        In        ADP    _  _         4  case                    _  _
2  течение  duration  NOUN   _  Case=Loc  1  fixed                   _  _
3  долгого  long      ADJ    _  Case=Gen  4  amod                    _  _
4  времени  time      NOUN   _  Case=Gen  5  obl:tmod:в_течение:gen  _  _
5  изучал   studied   VERB   _  _         0  root                    _  _
6  язык     language  NOUN   _  Case=Acc  5  obj                     _  _
7  майя     Maya      PROPN  _  Case=Gen  6  nmod:gen                _  SpaceAfter=No
8  .        .         PUNCT  _  _         5  punct                   _  _
</div>
</td></tr></tbody>
</table>

## Additional enhancements

Some postprocessing steps such as demoting light nouns that behave like quantificational determiners (as, for example, described in [Schuster and Manning (2016)](http://www.lrec-conf.org/proceedings/lrec2016/pdf/779_Paper.pdf)) can improve the usability of the dependency graphs for downstream applications. However, as most of these additions are highly language-specific, we do not provide any universal guidelines for such a representation and anything beyond the above additions is not part of the UD standard and should not be added to the officially released treebanks.
