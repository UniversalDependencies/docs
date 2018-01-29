---
layout: base
title:  'Working Group on Enhanced Dependencies'
udver: '2'
---

# Working Group on Enhanced Dependencies

(Summary of discussions between Sebastian Schuster, Joakim Nivre, Guy Perrier, Djame Seddah, Bruno Guillaume and Marie Candito)

General objective of the working group:

* clarify status of enhanced dependencies
* provide modified guidelines sufficiently in advance, for people to use them for next v2.2 version 
  (cf. not decided yet: whether enhanced deps are included in the UD shared task of spring 2018)

Note: Within a v2 release, there cannot be major modifications of the current enhanced guidelines, but we do also include in this page discussion from a broader perspective

**Content:**

* [Discussion on status of enhanced dependencies](#discussion-on-status-of-enhanced-dependencies)
* [Treatment of semantically void syntactic dependencies ?](#treatment-of-semantically-void-syntactic-dependencies)
* [Proposed additional cases of enhanced edges](#additional-cases-of-enhanced-edges)
* [Neutralizing syntactic alternations](#neutralizing-syntactic-alternations)

**Main points to decide:**

* whether or not to leave the possibility to mark semantically void syntactic dependencies
* whether or not to neutralize (some) syntactic alternations
* consider obligatory control only, or leave the possibility to include arbitrary control too
* other??

## Discussion on status of enhanced dependencies 

The current UD documentation introduces enhanced dependencies as a way to facilitate shallow understanding tasks.
In order to define the next scope of enhanced dependencis, we should make more explicit their linguistic / practical status, starting from the current enhanced guidelines (enhanced v2.1).

1. Enhanced dependencies aim at easing natural language understanding tasks, meaning either constructing full semantic representations, or simply making explicit some sort of semantic information useful for downsteam tasks.

2. Yet, guiding the enhanced dependency design by purely practical concerns (i.e. adding/droping/renaming relations and modifying structures so that the resulting graphs are maximally useful for downstream tasks such as relation extraction) does not seem a valid option, because the exact downsteam tasks for UD users are unknown.

3. Moreover, existing semantic representations are maybe even more numerous than syntactic ones, so it seems that the enhanced dependencies should remain primarily syntactic (at least within v2), and make as few assumptions as possible about the nature of the semantic representations.

This leads to considering that enhanced dependencies (at least within v2) do remain a syntactic representation rather that a semantic one, and that they primarily include modifications that can help semantic interpretation, but that are syntactically constrained. 

This rules out (at least within v2) the semantically more ambitious objective to recover argument structure of predicates (as e.g. in DM).

This also implies that enhanced UD use grammatical functions/relations, not semantic roles (which would require predicate sense disambiguation anyway).
(From Joakim: we want to remain neutral with respect to the nature of semantic roles, so that people can define syntax-semantics interfaces for different frameworks. Siva Reddy’s work on UDepLambda defines an interface to lambda calculus with neo-Davidsonian representations. Others want to map to FrameNet or PropBank roles. I think it is best if we make as few assumptions as possible about the nature of the semantic representations)


To encompass both these constraints and the current enhanced dependencies (v2.1), enhanced dependencies could be viewed as aiming to (from Joakim):

1. Add syntactically conditioned constraints on semantic interpretation that are left implicit in the basic dependencies. Examples: control relations and co-reference in relative clauses, possibly also coordination scope.
2. potentially repackage information that is already available in basic dependencies to make it more easily accessible for downstream applications. Example: subtyping obl and advcl relations with adpositions and subordinate conjunctions.

(from Marie) The general objective would be obtain full and coherent sets of syntactic dependents of predicated, at least currently of verbs, in a syntactically controlled way. The "full" adjective stands for adding dependents that be such if the verb were finite. The "coherent" means to disantangle dependent sets e.g. in argument cluster coordination. More precisely this means to:

* add dependents that would be syntactic dependents if the verb were finite,
  and the dependents were neither extracted nor shared by coordination.
  This captures the addition of subjects of infinitive (already in EUD v2.1)
  but also subjects / objects of noun-modifying participles (see below).
  
* (already in EUD v2.1): bypass pronouns when syntax can resolve the coreference (relative clause modifying a noun)

* (already in EUD v2.1): duplicate the predicate in case of ellipsis, in order to have coherent sets of dependents
  _Paul bought a shirt on Monday, and a belt on Tuesday_
  _Mary gave a pencil to Paul and a ruler to Anna_

* (already in EUD v2.1): propagate conjuncts, making coordination scope more explicit:
From Joakim: I think one could speak about disambiguation of underspecified syntactic ambiguity here. I think most people would say that the distinction between (young (men and women) and ((young men) and women) is a syntactic ambiguity, but it gets neutralized because of the UD analysis of coordination. Spelling this out is then a valid goal in the enhanced dependencies. This is different from, say, quantifier scope, where most people would say that is a semantic ambiguity, not a syntactic one (although there are clearly frameworks that claim it is syntactic).
Marie: the types of propagated dependencies should maybe be constrained. E.g. it might not make sense for certain dependents such as parataxis? From a practical point of view, this leads to graphs that are very difficult to read.

* to be decided: neutralize (some) syntactic alternations and recover canonical grammatical functions

* repackaging information that is already available in basic dependencies to make it more easily accessible for downstream applications is a possibility. Example: subtyping obl and advcl relations with adpositions and subordinate conjunctions.

Guy : Joakim (item 2) and Marie (last item) propose to include repackaging information for downstream applications in the objectives of Enhanced UD. On the contrary, I think Enhanced UD must be independent of downstream applications. In my opinion, Enhanced UD is an abstraction of the basic dependencies that tends towards semantics at the maximum while remaining within the framework of the syntax. For instance, subtyping obl and advcl relations with adpositions and subordinate conjunctions has nothing to do with Enhanced UD. Moreover, this makes annotations less readable and the set of relations more complex and dependent on particular languages.


## Treatment of semantically void syntactic dependencies
**DECISION TO MAKE**

One key question to address is whether "void" syntactic dependencies should / could be removed, or at least marked as such, in the enhanced graphs, or whether this is postponed in further semantic processing.

This concerns basic edges that do not link a governor to one of its semantic argument (or the other way round).

* the dependent is itself semantically void (expletives)
* or the dependent can be contentful but is not a semantic argument of the governor. This would lead to drop certain dependencies in well-known syntactic-semantic mismatches:
  - raising : She seems to run fast --> drop the nsubj(seems, she) edge ?
  - predicative complement : _we believe these sources to be reliable_ --> drop the obj(believe, sources) edge ?
 
**PROS**: useful for semantic analysis

**CONS**: not fully coherent with the UD commitment to syntactic representations. Can create unconnected nodes

A compromise could be to use special suffixes or substrings on the label for such cases (in the absence of features on dependencies). The v2 "expl" label would count as one of the substrings that signal semantically empty edges.
Treebank providers could decide to provide such marks or not.
Treebank users could choose to use them or not.

For v3 version: For the expletives that do have the syntactic properties of subjects, the "expl" label could be replaced by a more consistent nsubj:expl label.

What about though mwes exhibiting regular syntactic structure, in particular frozen verbal mwes ? For instance in "X take Y with a grain of salt"  

Guy : regarding the expletives that have the role of subject or direct object, I think that we must consider first the syntactic function subject or object, which has the same characteristics as for any subject or object, because Enhanced UD is at the syntactic level and the property of expletive is secondary information that has more to do with semantics. That is why I propose to use the labels nsubj: expl and obj: expl. Therefore, the following examples, if we do not take into account the neutralization of syntactic alternations, must be annotated as follows :

It is arrived 3 candidates -  nsubj:expl(arrived,It), obj(arrived,candidates)

jag fann det förvånande att hon kom  (I found it surprising that she came) – obj:expl(fann,det), appos (det,kom)



## Additional cases of enhanced edges

Current enhancements do add dependents of infinitives in raising or control constructions, and do add dependents of coordinated verbs.

For subject of infinitives or gerunds, there are two possibilities:

1. Restrict cases to obligatory control (syntactic position of the subject of the infinitive/gerund is fixed, given the lexical item licensing the infinitival/gerund clause)
2. or extend to arbitrary control too (proposed in Candito et al depling 17)

Discussion on status seems to favor solution (1).

So ambiguous cases involving e.g. "to propose" or "to help"/"helpful" would not be covered, as in (from Nathan) "The staff was very helpful in finding the right dog for me.", the subject of "finding" would not be added.
Note: (Candito et al. Depling 17) provide empirical counts from a French corpus: for some arbitrary control cases at least, heuristics perform fairly well

With respect to current enhanced guidelines, we could add more cases determined by syntax:


### Other cases of control

Control nouns or adjectives

~~~ sdparse
Paul 's desire to swim
nsubj(swim, Paul)
~~~
~~~ sdparse
scholars ready to endorse anything
nsubj(endorse, scholars)
~~~

### Tough movement

Add on object dependent to the infinitive.
Open question (see section on status of enhanced dependencies) is whether to keep in enhanced graph the non-semantic link nsubj(difficult, fraud).

<table id="tough-movement"> <!--The fraud is difficult to prove .-->
<thead><tr><th>Basic</th><th>Enhanced</th></tr></thead>
<tbody><tr><td width="600">
<div class="conllu-parse">
# visual-style 4 2 nsubj color:green
1 The  _ _ _ _ 2 det _ _
2 fraud _ _ _ _ 4 nsubj  _ _
3 is    _ _ _ _ 4 cop  _ _
4 difficult   _ _ _ _ 0 root _ _
5 to     _ _ _ _ 6 mark   _ _
6 prove  _ _ _ _ 4 xcomp   _ _
7 .     _ _ _ _ 4 punct _ _
</div>
</td><td width="600">
<div class="conllu-parse">
# visual-style 6 2 obj color:blue
1 The  _ _ _ _ 2 det _ _
2 fraud _ _ _ _ 6 obj  _ _
3 is    _ _ _ _ 4 cop  _ _
4 difficult   _ _ _ _ 0 root _ _
5 to     _ _ _ _ 6 mark   _ _
6 prove  _ _ _ _ 4 xcomp   _ _
7 .     _ _ _ _ 4 punct _ _
</div>
</td></tr></tbody>
</table>


### Noun-modifying participles

~~~ sdparse
Those arriving early leave early
nsubj(arriving, Those)
~~~

For intransitive past participles, the modified noun is its subject. This is the case e.g. in the following French ex. (for "the cases {that} appeared in 2001 are now solved")

~~~ sdparse
Les cas apparus en 2001 sont maintenant résolus \n The cases appeared in 2001 are now solved
nsubj(apparus, cas)
~~~

For transitives, the modified noun corresponds to the object (if the verb were active, finite).
(Note: viewing the transitive participle as a passive homogenizes the treatment of noun-modifying participles: the modified noun can always be viewed as the subject of the participle, but when the participle is passive, its subject is its canonical object. If the neutralization of syntactic alternations ([see below](#neutralizing-syntactic-alternations)) is adopted, then the enhanced edge would bear nsubj:pass@obj). 

~~~ sdparse
The persons hired in 2007 are few
obj(hired, persons)
~~~

### Verb-modifying infinitival and participial clauses
**DECISION TO MAKE**

**NB: This is a non deterministic case (not fully determined by topology of syntaxtic tree). 
So discussion on status of enhanced dependencies could rule out these cases.**

Manual annotation could be used to add subjects of infinitives anywhere in the sentence, for cases not fully determined by syntax.
For instance an active infinitival or participial clause that modifies a matrix clause is very likely to have same subject as that of the matrix clause, if the matrix clause verb is active, with non-expletive subject.

~~~ sdparse
They finished early in order to have time to play
nsubj(have, They)
~~~
~~~ sdparse
she risked her life while saving other lives
nsubj(saving, risked)
~~~

## Neutralizing syntactic alternations
(proposed in Candito, Perrier, Guillaume, Seddah, LREC 2014; DEPLING 2017)

**DECISION TO MAKE**

Syntactic alternations (like passive) are known to cause variation in the observed verbal linking patterns in corpora, i.e. the grammatical functions born by the semantic arguments of a verb. Some syntactic alternations can be identified using morpho-syntactic clues, without resorting to semantic disambiguation. We propose in such cases to recover the canonical grammatical functions.

- useful to limit syntactic variation, and hence increase linking regularity 
- since labels are to remain syntactic (no semantic roles), the labels used in neutralized representation are grammatical functions. To keep maximal freedom whether to use or not neutralized labels, enhanced graphs could use complex labels when relevant, of the form _fff@ccc_ with _fff_ the label without neutralization, and _ccc_ after neutralization.
- only proposed (and implemented in some work for French and English) for alternations that are morpho-syntactically marked in some way.

**Issues:** 

From Sebastian: Need for a more cross-linguistic perspective. Can lead to inconsistencies within languages and across languages, depending on whether an alternation is marked or not.
Marie: added example from French (valid for romance languages): Depending on the verb, there are two possibilities for the inchoative version of a causative event like _"Paul a cassé le câble" (Paul broke the cable)_, one with a meaningless reflexive marker _Le câble s'est cassé (the cable SE-REFL is broken)_, and one without any mark (like in English): _Le câble a cassé (the cable has broken)_ _"the cable broke"_). With _casser (to break)_ both are possible while the former is much more frequent.

Marie:

* need to make more precise what morpho-syntactically marked means. Indeed it could be argued that the "unmarked" causative-inchoative alternation (Paul broke the cable / the cable broke) is indeed marked, since the transitivity changes.
* The restriction to morpho-syntactically marked alternations that we implemented in our work on French and English derives more feasibility constraints more than from linguistic principles 
* The question could be whether it is better to neutralize only some of the alternations, or none of them. I guess the inconsistencies that Sebastian mentions mean having different sets of enhanced grammatical functions for the same set of basic grammatical functions ("the vase(=nsubj@obj) REFL broke" versus "the vase(=nsubj) broke"). So I would say these are exactly the inconsistencies arising from the syntactic alternations themselves. 

The canonical functions are noted after '@' in the following graphs. (i.e. for a label _fff@ccc_,  _fff_ is the label without neutralization, and _ccc_ is the one obtained after neutralization.


<!--These conditions of sale are considered to have been accepted-->


<table id="passive-ex1"> <!--Money should be paid to them by the offender-->
<thead><tr><th>Basic</th><th>Enhanced-diat</th></tr></thead>
<tbody><tr><td width="600">
<div class="conllu-parse">
1 Money _ _ _ _ 4 nsubj:pass  _ _
2 should    _ _ _ _ 4 aux  _ _
3 be   _ _ _ _ 4 aux:pass _ _
4 paid     _ _ _ _ 0 root   _ _
5 to  _ _ _ _ 6 mark   _ _
6 them     _ _ _ _ 4 obl _ _
7 by     _ _ _ _ 9 mark _ _
8 the     _ _ _ _ 9 det _ _
9 offender     _ _ _ _ 4 obl _ _
</div>
</td><td width="600">
<div class="conllu-parse">
# visual-style 4 1 nsubj:pass@obj color:blue
# visual-style 4 9 obl@nsubj color:blue
1 Money _ _ _ _ 4 nsubj:pass@obj  _ _
2 should    _ _ _ _ 4 aux  _ _
3 be   _ _ _ _ 4 aux:pass _ _
4 paid     _ _ _ _ 0 root   _ _
5 to  _ _ _ _ 6 mark   _ _
6 them     _ _ _ _ 4 obl _ _
7 by     _ _ _ _ 9 mark _ _
8 the     _ _ _ _ 9 det _ _
9 offender     _ _ _ _ 4 obl@nsubj _ _
  </div>
</td></tr></tbody>
</table>

<!--Restitution money was ordered to be paid to them by the offender.-->


<table id="passive-ex2"> <!--She did n't order the buses to be used .-->
<thead><tr><th>Basic</th><th>Enhanced-diat</th></tr></thead>
<tbody><tr><td width="600">
<div class="conllu-parse">
# visual-style 4 6 obj color:green
1 She  _ _ _ _ 2 nsubj _ _
2 did _ _ _ _ 4 aux  _ _
3 n't    _ _ _ _ 4 advmod  _ _
4 order   _ _ _ _ 0 root _ _
5 the     _ _ _ _ 6 det   _ _
6 buses  _ _ _ _ 4 obj   _ _
7 to     _ _ _ _ 9 mark _ _
8 be     _ _ _ _ 9 aux:pass _ _
9 used     _ _ _ _ 4 xcomp _ _
10 .     _ _ _ _ 4 punct _ _
</div>
</td><td width="600">
<div class="conllu-parse">
# visual-style 9 6 nsubj:pass@obj color:blue
1 She  _ _ _ _ 2 nsubj _ _
2 did _ _ _ _ 4 aux  _ _
3 n't    _ _ _ _ 4 advmod  _ _
4 order   _ _ _ _ 0 root _ _
5 the     _ _ _ _ 6 det   _ _
6 buses  _ _ _ _ 9 nsubj:pass@obj   _ _
7 to     _ _ _ _ 9 mark _ _
8 be     _ _ _ _ 9 aux:pass _ _
9 used     _ _ _ _ 4 xcomp _ _
10 .     _ _ _ _ 4 punct _ _
</div>
</td></tr></tbody>
</table>

## Additive versus self-contained dependencies

Are the enhanced deps defined only as supersets of the basic deps or are the two sets (basic / enhanced) independent ?
In the former case, the DEPS column in CoNLL-U format only includes arcs that are not in the basic deps,
whereas in the latter case deps that are common to the two sets are to be repeated in the DEPS column.

Within v2: the answer in v2 has to be two independent sets of dependencies, given the current treatment of ellipsis and relative clauses (for which some basic deps are dropped in the enhanced representation).

**PROS of independent sets**: more general, already needed for enhanced-v1 
**CONS** : It might be needed to keep the information that a enhanced dep g-->d
       corresponds to the basic dep that provides a governor to d ?

## Relative clauses

Joakim:As regards the added and dropped relations in relative clauses, I happen to think this is plain wrong from a linguistic point of view. It is simply not true that “man” is an argument of “saw” in “the man who I saw”, because the sentence does not assert that I saw the man, it presupposes it. In other words, adding the relation from “saw” to “man” confuses modification and predication. Adding the coref link between “man” and “who” should therefore be sufficient and adequate in itself. At the same time, I am well aware that downstream application developers who cannot keep track of more than one relation at a time prefers to have the direct link from “saw” to “man”, so it is one of the compromises we may have to live with.


