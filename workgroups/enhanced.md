---
layout: base
title:  'Working Group on Enhanced Dependencies'
udver: '2'
---

# Working Group on Enhanced Dependencies


Proposals following (Candito, Perrier, Guillaume, Seddah, depling 2017).
(Any comments / other proposals are welcome, I don't know if this is the path UD people want to take. How we can proceed to make decisions?)

* [Additional cases of enhanced edges](#additional-cases-of-enhanced-edges)
* [Neutralizing syntactic alternations](#neutralizing-syntactic-alternations)
* [Discussion on status of enhanced dependencies](#discussion-on-status-of-enhanced-dependencies)

## Additional cases of enhanced edges

Current enhancements do add dependents of infinitives in raising or control constructions, and do add dependents of coordinated verbs.

We could go further by encouraging to add links to saturate the valency of verbs, in particular cases fully determined by syntax:

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

This is a non deterministic case (not fully determined by topology of syntaxtic tree).

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

Syntactic alternations (like passive) are known to cause variation in the observed verbal linking patterns in corpora, i.e. the grammatical functions born by the semantic arguments of a verb. Some syntactic alternations can be identified using morpho-syntactic clues, without resorting to semantic disambiguation.

We propose in such cases to recover the canonical grammatical functions. This can reduce the diversity of syntactic/semantic linking patterns for a given verb, and make subsequent semantic analysis more straightforward.

The canonical functions are noted after '@' in the following graphs. Users would then be free to use labels with or without alternation neutralization (i.e. for a label fff@ccc use either ccc or fff).


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

## Discussion on status of enhanced dependencies 

The current UD documentation introduces enhanced dependencies as a way to facilitate shallow understanding tasks.
There follows a list of enhancements, but no clear picture emerges of what enhanced dependencies are or should be.

The enhanced graph clearly moves towards a more semantic representation (e.g. by resolving coreference of relative pronouns), but the labels to use in enhanced graphs must remain syntactic labels: in the absence of word sense disambiguation, switching to semantic labels does not seem an option.

So the enhanced graphs lie in between a basic syntactic tree and a shallow semantic representation made of semantically-typed dependencies. 

Yet we could still be more precise concerning the status of enhanced nodes and enhanced edges:

### Status of enhanced nodes
- On one hand enhanced graphs do add nodes for elided predicates. 
- On the other hand, shall we keep semantically void nodes in enhanced graphs? (expletives? grammatical markers? ...)
- What about multi-word expressions ? cf. the enhanced++ treatment of complex prepositions. A binary handling of mwes vs litteral/compositional representation is problematic. Enhanced nodes could either form a semantic unit alone or part of a semantic unit.

### Status of enhanced edges
How far do we want to go towards the semantic side for enhanced graphs?
Can we move towards graphs that saturate the predicate-argument structures for verbs (and later for other open class categories) while still using syntactic labels? One key question to address is whether "void" syntactic dependencies should / could be removed in the enhanced graphs, or whether this is postponed in further semantic processing.

- This would lead to drop certain dependencies in well-known syntactic-semantic mismatches:
  - raising : She seems to run fast --> drop the nsubj(seems, she) edge ?
  - predicative complement : we believe these sources to be reliable --> drop the obj(believe, sources) edge ?

- what about though mwes exhibiting regular syntactic structure, in particular frozen verbal mwes ? For instance in "X take Y with a grain of salt"

- Enhanced deps could be defined as deep syntactic links between a predicate and a syntactic realization of a semantic argument of the predicate.
  - except within mwes ? 
  


