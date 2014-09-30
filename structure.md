---
layout: base
title:  'Structure'
---

# Syntax: General Principles

Syntactic annotation in the UD scheme consists of typed dependency relations between words. 
Each word is either the dependent of one other word in the sentence or of a notional ROOT of the sentence. This means that the dependencies can be thought of as a directed acyclic graph which is a tree (i.e., which has a single root).
The goal of the typed dependency relations is a set of broadly observed "universal dependencies" that work across languages. Such dependencies seek to maximize parallelism by allowing the same grammatical relation to be annotated the same way across languages, while making enough crucial distinctions such that different things can be differentiated.
The goal of parallelism has limits: The standard does not postulate and annotate "empty" things that do not appear in various languages, and it allows the use of language-specific refinements of universal dependencies to represent particular relations of language-particular importance. We now try to lay down some general principles that should guide the use of universal 
dependencies to achieve as much parallelism as possible (but not more) across languages. 
(More specific guidelines can be found in the documentation of the specific 
[dependency relations](http://universaldependencies.github.io/docs/u/dep/index.html).)

## The Primacy of Content Words

Dependency relations hold primarily between content words, rather than being indirect relations mediated by function words.

<div id="s1a" class="sd-parse">
The cat could have chased all the dogs down the street .
nsubj(chased, cat)
dobj(chased, dogs)
nmod(chased, street)
</div>

Function words attach as direct dependents of the most closely related content word.

<div id="s1b" class="sd-parse">
The cat could have chased all the dogs down the street .
det(cat, The)
aux(chased, could)
aux(chased, have)
det(dogs, all)
det(dogs, the-7)
case(street, down)
det(street, the-10)
</div>

Punctuation attaches to the head of the clause or phrase to which they belong.

<div id="s1c" class="sd-parse">
The cat could have chased all the dogs down the street .
punct(chased, .)
</div>

Putting this together gives a complete dependency tree where internal nodes
are content words and where function words and punctuation appear as leaves.

<div id="s1" class="sd-parse">
The cat could have chased all the dogs down the street .
nsubj(chased, cat)
dobj(chased, dogs)
nmod(chased, street)
det(cat, The)
aux(chased, could)
aux(chased, have)
det(dogs, all)
det(dogs, the-7)
case(street, down)
det(street, the-10)
punct(chased, .)
</div>

Preferring content words as heads maximizes parallelism between languages because content words vary less than function words between languages. In particular, one commonly finds the same grammatical relation being expressed by morphology in some languages or constructions and by function words in other languages or constructions, while some languages may not mark the information at all (such as not marking tense or definiteness).

<div id="s2a" class="sd-parse">
On a dormi ...
nsubj(dormi, On)
aux(dormi, a)
</div>

<div id="s2b" class="sd-parse">
We slept ...
nsubj(slept, We)
</div>

<div id="s2c" class="sd-parse">
Ivan is the best dancer
nsubj(dancer, Ivan)
cop(dancer, is)
det(dancer, the)
amod(dancer, best)
</div>

<div id="s2d" class="sd-parse">
Ivan lučšij tancor
nsubj(tancor, Ivan)
amod(tancor, lučšij)
</div>


## The Status of Function Words

The primacy of content words implies that function words normally do not have dependents of their own. 
In particular, it means that multiple function words related to the same content word always appear as 
siblings, never in a nested structure, regardless of their interpretation.
A typical case is that of auxiliary verbs, which never depend on each other.

<div id="s3a" class="sd-parse">
She could have been injured .
aux(injured, could)
aux(injured, have)
auxpass(injured, been)
</div>

Note that copula verbs are also counted as auxiliaries in this respect. In copula constructions, auxiliaries
will therefore often be attached to predicates that are not verbs. 

<div id="s3b" class="sd-parse">
She could have been sick .
aux(sick, could)
aux(sick, have)
cop(sick, been)
</div>

Similarly, multiple determiners are always attached to the head noun.

<div id="s3c" class="sd-parse">
All these three books .
det(books, All)
det(books, these)
num(books, three)
</div>

However, there are four important exceptions to the rule that function words do not 
take dependents:

  1. Multiword function words
  2. Coordinated function words
  3. Function word modifiers
  4. Promotion by head elision

### Multiword Function Words

The word forms that make up a fixed multiword expression are connected into a head-initial structure
using the special dependency relation [u-dep/mwe]() (see below). When the multiword expression is a functional element,
the initial word form will then superficially look like a function word with dependents.

<div id="s6" class="sd-parse">
We had a nice time in spite of the rain .
case(rain,in)
mwe(in,spite)
mwe(in,of)
nmod(had,rain)
</div>

Deciding whether an expression in a language should be treated as a `mwe` is something that has to be decided for each language, and in some cases this will require somewhat arbitrary conventions, because it involves choosing a cut point along a path of grammaticalization. Nevertheless, most languages have some very common multiword expressions that effectively behave like other function words as linkers, marks, or case particles, and it would be highly undesirable not to recognize them as a multi-word function word. Examples in English include _in spite of_ (like _despite_), _as well as_ (like _and_), and _prior to_ (like _before_).

### Coordinated Function Words

Head coordination is a syntactic process that can apply to almost any word category, including
function words like conjunctions and prepositions. 

<div id="s4a" class="sd-parse">
She drove to and from work .
case(work,to)
conj(to, from)
cc(to, and)
</div>

<div id="s4b" class="sd-parse">
I will do that if and when it happens .
mark(happens,if)
conj(if, when)
cc(if, and)
</div>

### Function Word Modifiers

Certain types of function words can take a restricted class of modifiers, mainly negation ([u-dep/neg]()) and light adverbials
([u-dep/advmod]() or [u-dep/nmod]()). Typical cases are modified determiners like _not every (linguist)_ and _exactly two (papers)_
and modifiers of subordinating conjunctions.

<div id="s7a" class="sd-parse">
not every linguist
det(linguist, every)
neg(every, not)
</div>

<div id="s7b" class="sd-parse">
exactly two papers
det(papers, two)
advmod(two, exactly)
</div>

<div id="s7c" class="sd-parse">
just when you thought it was over
mark(thought, when)
advmod(when, just)
</div>

Negation can modify any function word, but other types of modifiers are disallowed for function words that express
properties of the head word often expressed morphologically in other languages. This class, which we refer to as
_pure function words_, includes auxiliary verbs, case markers (adposition), and articles, but needs to be defined
explicitly for each language. When pure function words appear with modifiers other than negation, we take the modifier
to apply to the entire phrase and therefore attaches it to the head word of the function word, as illustrated in
the following example.

<div id="s7d" class="sd-parse">
right before midnight
case(midnight, before)
advmod(midnight, right)
</div>

The analysis here is that _right_ modifies the entire phrase _after midnight_ and therefore attaches to _midnight_, 
which is the head of this phrase. (It is a general property of dependency trees that phrase modification is 
structurally indistinguishable from head modification.) Further support for this analysis comes from the possibility
of replacing _after midnight_ by the adverb _then_.

<div id="s7e" class="sd-parse">
right then
advmod(then, right)
</div>

Making sure that pure function words do not have dependents of their own facilitates the
comparison with languages where the corresponding properties are expressed morphologically as well as the conversion
to the enhanced representation where this difference is neutralized.

To sum up, our treatment of function word modifiers can be expressed in three principles:

  1. Pure function words can only be modified by negation (`neg`).
  2. Other function words can also take light adverbial modifiers (`advmod`, `nmod`)
  3. When in doubt, prefer a flat structure where function words attach to a content word.

Note also that the language-specific documentation should specify what words (if any) are treated as pure function words 
in that language.

### Promotion by Head Elision

When the natural head of a function word is elided, the function word will be "promoted"
to the function normally assumed by the content word head. This type of analysis should 
in general be preferred over an analysis using the [u-dep/remnant]() relation, because it disrupts
the structure less. The remnant analysis should be used only when there is no function word 
that can be promoted. The following examples illustrate promotion of auxiliaries, prepositions
and subordinating conjunctions.

<div id="s5a" class="sd-parse">
Bill could not answer , but Ann could .
nsubj(answer, Bill)
aux(answer, could-2)
conj(answer, could-8)
nsubj(could-8, Ann)
</div>

<div id="s5b" class="sd-parse">
The address she wrote to .
relcl(address, wrote)
nsubj(wrote, she)
nmod(wrote, to)
</div>

<div id="s5c" class="sd-parse">
I know how .
nsubj(know, I)
ccomp(know, how)
</div>

## Key ideas of the relation taxonomy

### Core arguments vs. oblique modifiers

The UD taxonomy is centered around the fairly clear distinction between core arguments
(subjects, objects, clausal complements) versus other dependents.
It does not make a distinction between adjuncts and oblique arguments.
This latter distinction is taken to be sufficiently subtle, unclear, and argued over
that it is eliminated (echoing the viewpoint of the original Penn Treebank annotators).

### A mixed functional-structural system

One major role of dependencies is to represent function, but the Universal Dependencies also encode structural notions. On the structural side, languages are taken to principally involve three things: nominal phrases (which are the usual means of entity expression, but may also be used for other things), clauses headed by a predicate (most commonly a verb, but it may be other things, such as an adjective or adverb), and miscellaneous other kinds of modifier words, which may themselves allow some modification, but do not expand into the same rich structures as nominal phrases and predicates. This three way distinction is generally encoded in dependency names.  For example, if a verb is taking an adverbial modifier, it may bear one of three relations [u-dep/nmod](), [u-dep/advcl](), or [u-dep/advmod]() depending on which of these three sorts it is:

<div id="fss1" class="sd-parse">
John talked in the movie theatre
case(theatre, in)
det(theatre, the)
compound(theatre, movie)
nmod(talked, theatre)
</div>

<div id="fss2" class="sd-parse">
John talked while we were watching the movie
mark(watching, while)
nsubj(watching, we)
aux(watching, were)
advcl(talked, watching)
det(movie, the)
dobj(watching, movie)
</div>

<div id="fss3" class="sd-parse">
John talked very quickly
advmod(quickly, very)
advmod(talked, quickly)
</div>

Similarly, the core grammatical relations differentiate core arguments that are clauses (e.g., csubj, ccomp) from those that are nominal phrases (e.g., nsubj, dobj).

### Voice

Relation names attempt to differentiate canonical voice (where the proto-agent argument is the subject) from non-canonical voice constructions (where another argument is the subject). This is marked as appropriate on both the subject argument (e.g., nsubjpass) and auxiliaries indicating this (auxpass). Marking both is helpful, as either may be missing.
 
## Special Relations

Some of the universal relations do not really encode syntactic dependency relations but are used to represent 
punctuation, various kinds of multiword units, or unanalyzable segments. The use of these relations is subject 
to special restrictions explained below.

### Punctuation 

Tokens with the relation [u-dep/punct]() always attach to content words (except in cases of ellipsis) and can never have dependents.
Since `punct` is not a normal dependency relation, the usual criteria for determining the head word do not apply. 
Instead, we use the following principles:

1. A punctuation mark separating coordinated units is attached to the first conjunct.
2. A punctuation mark preceding or following a subordinated unit is attached to this unit.
3. Within the relevant unit, a punctuation mark is attached at the highest possible node that preserves projectivity.
4. Paired punctuation marks (quotes and brackets) should be attached to the same word unless that would create non-projectivity. This word is usually the head of the phrase enclosed in the paired punctuation.

<div id="punct1" class="sd-parse">
We have apples , pears , oranges , and bananas .
dobj(have, apples)
conj(apples, pears)
conj(apples, oranges)
conj(apples, bananas)
cc(apples, and)
punct(apples, ,-4)
punct(apples, ,-6)
punct(apples, ,-8)
</div>

<div id="punct2" class="sd-parse">
Der Mann , den Sie gestern kennengelernt haben , kam wieder .
punct(kennengelernt, ,-3)
punct(kennengelernt, ,-9)
punct(kam, .)
</div>

<div id="punct3" class="sd-parse">
A.K.A. , AKA , or a\/k\/a may refer to : “ Also known as ” , used to introduce pseudonyms , aliases , etc. ( Compare f.k.a. for “ formerly known as ” . )
punct(A.K.A., ,-2)
punct(A.K.A., ,-4)
punct(refer, :)
punct(known-13, “-11)
punct(known-13, ”-15)
punct(used, ,-16)
punct(pseudonyms, ,-21)
punct(pseudonyms, ,-23)
punct(Compare, (-25)
punct(Compare, )-35)
punct(known-31, “-29)
punct(known-31, ”-33)
punct(Compare, .-34)
</div>

### Multiword Structures

The following types of expressions are annotated in a head-initial structure, where all non-first elements
depend on the first, and where only the first element can have dependents:

1. Fixed multiword expressions ([u-dep/mwe]())
2. Multiword names ([u-dep/name]())
3. Foreign phrases ([u-dep/foreign]())

<div id="s8a" class="sd-parse">
We had a nice time in spite of the rain .
case(rain,in)
mwe(in,spite)
mwe(in,of)
nmod(had,rain)
</div>

<div id="s8b" class="sd-parse">
Martin Luther King had a dream .
nsubj(had,Martin)
name(Martin,Luther)
name(Luther,King)
</div>

<div id="s8c" class="sd-parse">
She said qwe rty yui .
dobj(said,qwe)
foreign(qwe,rty)
foreign(qwe,yui)
</div>

In contrast, compounds are annotated to show their modification structure, including a regular concept of head:

<div id="s9" class="sd-parse">
I bought a computer disk drive enclosure .
nsubj(bought, I)
det(enclosure, a)
compound(drive, computer)
compound(drive, disk)
compound(enclosure, drive)
dobj(bought, enclosure)
</div>
