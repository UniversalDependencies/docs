---
layout: base
title:  'Syntax'
permalink: u/overview/syntax.html
udver: '2'
---

# Syntax: General Principles

Syntactic annotation in the UD scheme consists of typed dependency relations between words. The _basic_ dependency representation forms a tree, where exactly one word is the head of the sentence, dependent on a notional ROOT and all other words are dependent
on another word in the sentence, as exemplified below (where we explicitly represent the root dependency which will
otherwise be left implicit).

~~~ sdparse
ROOT she wanted to buy and eat an apple
nsubj(wanted, she)
root(ROOT, wanted)
mark(buy, to)
xcomp(wanted, buy)
cc(eat, and)
conj(buy, eat)
det(apple, an)
obj(buy, apple)
~~~

In addition to the basic dependency representation, which is obligatory for all UD treebanks, it is possible to give an _enhanced_ dependency representation, which adds (and in a few cases changes) relations in order to give a more complete
basis for semantic interpretation. The enhanced representation is in general
not a tree but a general graph structure, as shown below (enhanced dependencies in blue).

~~~ conllu
# visual-style 5 2 nsubj color:blue
# visual-style 7 2 nsubj color:blue
# visual-style 3 7 xcomp color:blue
# visual-style 7 4 mark color:blue
# visual-style 7 9 obj color:blue
1	ROOT	_	_	_	_	0	root	_	_
2	she	_	_	_	_	3	nsubj	5:nsubj|7:nsubj	_
3	wanted	_	_	_	_	1	root	_	_
4	to	_	_	_	_	5	mark	7:mark	_
5	buy	_	_	_	_	3	xcomp	_	_
6	and	_	_	_	_	7	cc	_	_
7	eat	_	_	_	_	5	conj	3:xcomp	_
8	an	_	_	_	_	9	det	_	_
9	apple	_	_	_	_	5	obj	7:obj	_

~~~


In the rest of this document, we discuss the fundamental principles of our dependency annotation, focusing on aspects that are common to both the basic and the enhanced representation. For more information about basic and enhanced dependencies, we refer to the detailed annotation guidelines:

* Basic dependencies
    * [Simple clauses](simple-syntax.html)
    * [Complex clauses](complex-syntax.html)
    * [Nominal phrases](nominal-syntax.html)
    * [Other constructions](specific-syntax.html)
* [Enhanced dependencies](enhanced-syntax.html)

The goal of the typed dependency relations is a set of broadly observed "universal dependencies" that work across languages. Such dependencies seek to maximize parallelism by allowing the same grammatical relation to be annotated the same way across languages, while making enough crucial distinctions such that different things can be differentiated. Two things should be noted from the outset:

* The goal of parallelism has limits: The standard does not postulate and annotate "empty" things that do not appear in various languages, and it allows the use of language-specific refinements of universal dependencies to represent particular relations of language-particular importance.
* The notion of dependency has limits: Not all grammatical relations can be reduced to binary asymmetric relations between a syntactic head and a subordinate element, and some of our typed "dependency" relations therefore must be understood as convenient encodings of other relations without implications about syntactic headedness.

<!-- This holds in particular for relations used to analyze multiword expressions, coordination and function words.-->

We now try to lay down some general principles that should guide the use of universal dependencies to achieve as much parallelism as possible (but not more) across languages.

## The Primacy of Content Words

Dependency relations hold primarily between content words, rather than being indirect relations mediated by function words.

<div id="s1a" class="sd-parse">
The cat could have chased all the dogs down the street .
nsubj(chased, cat)
obj(chased, dogs)
obl(chased, street)
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
obj(chased, dogs)
obl(chased, street)
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
aux:pass(injured, been)
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
nummod(books, three)
</div>

We are aware that the choice to treat function words formally as dependents of content words is at odds with many versions of dependency grammar, which prefer the opposite relation for many syntactic constructions.
We prefer to view the relations between content words and function words, not as dependency relations in the narrow
sense, but as operations that modify the grammatical category of the content word so that it can participate in
different dependency relations with other content words. We refer to these relations as _functional relations_ or
_function word relations_ when we want to emphasize that they are different from dependency relations between content words.
This view makes function words functionally (but not structurally) similar to morphological operations and is compatible with Tesnière's notion of the nucleus as the locus of syntactic dependencies.

Nevertheless, there are four important exceptions to the rule that function words do not take dependents:

  1. Multiword function words
  2. Coordinated function words
  3. Function word modifiers
  4. Promotion by head elision

### Multiword Function Words

The word forms that make up a fixed function-word multiword expression (MWE) are connected
using the special dependency relation [u-dep/fixed]() (see below). By convention, the first word is always taken as the head, so when the multiword expression is a functional element,
the initial word form will then superficially look like a function word with dependents.

<div id="s6" class="sd-parse">
We had a nice time in spite of the rain .
case(rain,in)
fixed(in,spite)
fixed(in,of)
obl(had,rain)
</div>

Deciding whether an expression in a language should be treated as a fixed multiword expression is something that has to be decided for each language, and in some cases this will require somewhat arbitrary conventions, because it involves choosing a cut point along a path of grammaticalization. Nevertheless, most languages have some very common multiword expressions that effectively behave like other function words as linkers, marks, or case particles, and it would be highly undesirable not to recognize them as a multi-word function word. Examples in English include _in spite of_ (like _despite_), _as well as_ (like _and_), and _prior to_ (like _before_).

### Coordinated Function Words

Head coordination is a syntactic process that can apply to almost any word category, including
function words like conjunctions and prepositions. In such cases, the standard analysis of coordination is used and function words have dependents.

<div id="s4a" class="sd-parse">
She drove to and from work .
case(work,to)
conj(to, from)
cc(from, and)
</div>

<div id="s4b" class="sd-parse">
I will do that if and when it happens .
mark(happens,if)
conj(if, when)
cc(when, and)
</div>

### Function Word Modifiers

Certain types of function words can take a restricted class of modifiers, mainly light adverbials (including negation).
Typical cases are modified determiners like _not every (linguist)_ and _exactly two (papers)_
and modifiers of subordinating conjunctions.

<div id="s7a" class="sd-parse">
not every linguist
det(linguist, every)
advmod(every, not)
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
_pure function words_, includes auxiliary verbs, case markers (adpositions), and articles, but needs to be defined
explicitly for each language. When pure function words appear with modifiers other than negation, we take the modifier
to apply to the entire phrase and therefore attach it to the head word of the function word, as illustrated in
the following example.

<div id="s7d" class="sd-parse">
right before midnight
case(midnight, before)
advmod(midnight, right)
</div>

The analysis here is that _right_ modifies the entire phrase _before midnight_ and therefore attaches to _midnight_,
which is the head of this phrase. (It is a general property of dependency trees that phrase modification is
structurally indistinguishable from head modification.) Further support for this analysis comes from the possibility
of replacing _before midnight_ by the adverb _then_.

<div id="s7e" class="sd-parse">
right then
advmod(then, right)
</div>

Making sure that pure function words do not have dependents of their own facilitates
comparison with languages where the corresponding properties are expressed morphologically as well as conversion
to the enhanced representation where this difference is neutralized.

To sum up, our treatment of function word modifiers can be expressed in three principles:

  1. Pure function words can only be modified by negation.
  2. Other function words can also take (other) light adverbial modifiers.
  3. When in doubt, prefer a flat structure where function words attach to a content word.

Note also that the language-specific documentation should specify what words (if any) are treated as pure function words
in that language.

### Promotion by Head Elision

When the natural head of a function word is elided, the function word will be "promoted"
to the function normally assumed by the content word head. This type of analysis should
in general be preferred over an analysis using the [u-dep/orphan]() relation, because it disrupts
the structure less. The orphan analysis of ellipsis should only be used when there is no function word
that can be promoted. The following examples illustrate promotion of auxiliaries, prepositions
and subordinating conjunctions (but only the first example illustrates the exception
from the rule than function words have no dependents).

<div id="s5a" class="sd-parse">
Bill could not answer , but Ann could .
nsubj(answer, Bill)
aux(answer, could-2)
conj(answer, could-8)
nsubj(could-8, Ann)
</div>

<div id="s5b" class="sd-parse">
The address she wrote to .
acl:relcl(address, wrote)
nsubj(wrote, she)
obl(wrote, to)
</div>

<div id="s5c" class="sd-parse">
I know how .
nsubj(know, I)
ccomp(know, how)
</div>

## The Taxonomy of Typed Dependencies

We now review some of the key ideas underlying our taxonomy of typed dependency relations, focusing first on the central
dependency relations between content words.

### Core Arguments vs. Oblique Modifiers

The UD taxonomy is centered around the fairly clear distinction between core arguments (subjects, objects, clausal complements) versus other dependents.
It does not make a distinction between adjuncts (general modifiers) versus oblique arguments (arguments said to be selected by a head but not expressed as a core argument).
The rest of this section expands on the linguistic basis of these choices, and may be skipped.

#### The definition of core arguments

The core/oblique distinction is ultimately an information packaging distinction. All or nearly all languages have a basic way of expressing the one or two arguments of most verbs (intransitive and transitive verbs), and this unmarked form of argument expression is as a core argument. If additional arguments can appear that are treated similarly to these arguments, they may also be regarded as core arguments. (Some languages have no additional core arguments, while other languages allow multiple object arguments, for instance.) Status as a core argument is decoupled from the semantic roles of participants. Normally, depending on the meaning of a verb, many different semantic roles can be expressed by the same means of encoding core arguments. Nevertheless, there is a correlation: agent and patient or theme roles of predicates in their unmarked valence are normally realized as core arguments.

Syntactically, there is not a single criterion which can be used crosslinguistically to distinguish core arguments from obliques, though there are often good and useful criteria for particular languages. These include:

* Verbs usually only agree with core arguments
* Oblique arguments may usually or always appear marked by an adposition while core arguments appear as bare nominals
* Certain cases, traditionally called nominative, accusative, and absolutive typically mark core arguments
* Core arguments in many languages occupy special positions in the clause, often adjacent to the verb
* Syntactic phenomena such as being the controller of a subordinate clause argument or the target of relativization are limited to core arguments in some languages

At the end of the day, the distinction must be drawn and documented on language particular grounds. For example, many languages have certain verbs which take arguments in oblique cases such as dative or an experiencer case, but these arguments should be regarded as core arguments based on their syntactic behavior being parallel to the arguments of other transitive verbs.

#### Avoiding an argument/adjunct distinction

Many grammatical frameworks suggest that some obliques are selected by or are arguments of a head (for instance, a source argument of _from the Queen_ is an argument of the head _receive_), while other obliques are general adjuncts, which can appear with any predicate without the head selecting for them (for instance, a temporal argument such as _after the holidays_).

However, the argument/adjunct distinction is subtle, unclear, and frequently argued over. For instance, syntacticians at certain times have argued for various obliques to be arguments, while at other times arguing that they are adjuncts, particularly for certain semantic roles such as oblique instruments or sources. We take the distinction to be sufficiently subtle (and its existence as a categorical distinction sufficiently questionable) that the best practical solution is to eliminate it. This approach echoes the viewpoint of the original Penn Treebank annotators.

The core-oblique distinction is generally accepted in language typology as being both more relevant and easier to apply cross-linguistically than the argument-adjunct distinction. See, for example:

* Avery D. Andrews. 2007. The Major Functions of the Noun Phrase. In Timothy Shopen (ed.) Language Typology and Syntactic Description: Clause Structure (2nd ed), Cambridge University Press, Cambridge, United Kingdom, pp. 132-223. (1st edition, 1985.)
* Sandra A. Thompson. 1997. Discourse Motivations for the Core-Oblique Distinction as a Language Universal. In Akio Kamio (ed.) Directions in Functional Linguistics. Benjamins, Amsterdam, the Netherlands, pp. 59-82.

### A Mixed Functional-Structural System

One major role of dependencies is to represent function, but the Universal Dependencies also encode structural notions.
On the structural side, languages are taken to principally involve three things:

* Nominal phrases (which are the usual means of entity expression, but may also be used for other things)
* Clauses headed by a predicate (most commonly a verb, but it may be other things, such as an adjective or adverb, or even a predicate nominal, such as _He is **a wreck**_)
* Miscellaneous other kinds of modifier words, which may themselves allow some modification, but do not expand into the same rich structures as nominal phrases and predicates.

This three-way distinction is generally encoded in dependency names. For example, if a verb is taking an adverbial modifier, it may bear one of three relations [u-dep/obl](), [u-dep/advcl](), or [u-dep/advmod]() depending on which of these three sorts it is:

<div id="fss1" class="sd-parse">
John talked in the movie theatre
case(theatre, in)
det(theatre, the)
compound(theatre, movie)
obl(talked, theatre)
</div>

<div id="fss2" class="sd-parse">
John talked while we were watching the movie
mark(watching, while)
nsubj(watching, we)
aux(watching, were)
advcl(talked, watching)
det(movie, the)
obj(watching, movie)
</div>

<div id="fss3" class="sd-parse">
John talked very quickly
advmod(quickly, very)
advmod(talked, quickly)
</div>

Similarly, the core grammatical relations differentiate core arguments that are clauses (e.g., [u-dep/csubj](), [u-dep/ccomp]()) from those that are nominal phrases (e.g., [u-dep/nsubj](), [u-dep/obj]()).

<!-- ### Voice

Relation names attempt to differentiate canonical voice (where the proto-agent argument is the subject) from non-canonical voice constructions (where another argument is the subject). This is marked as appropriate on both the subject argument (e.g., nsubjpass) and auxiliaries indicating this (auxpass). Marking both is helpful, as either may be missing.
-->

### Clausal Dependents

To classify dependents of the main predicate in a clause, the UD taxonomy obeys the following principles:

- differentiate core arguments from noncore arguments and adjuncts (see "Core arguments vs. oblique modifiers" above)
- differentiate subjects from complements
- differentiate clauses with obligatory control from clauses with other types of subject licensing
- differentiate attachment to predicates from attachment to nominal phrases
- capture clausal modifiers of nouns that do not take the form of a relative clause

Additional distinctions (for example, with respect to voice) can be captured via language-specific subtypes
(such as `nsubj:pass` for the subject of a passivized verb).
Note that the UD taxonomy does not attempt to differentiate finite from nonfinite clauses.

### Coordination

We treat coordinate structures asymmetrically:
The head of the relation is the first conjunct and all the other conjuncts depend on it via the [u-dep/conj]() relation.
Coordinating conjunctions and punctuation delimiting the conjuncts are attached using the [u-dep/cc]() and [u-dep/punct]() relations respectively to the immediately **following** conjunct.

~~~ sdparse
He came home , took a shower and immediately went to bed .
conj(came, took)
conj(came, went)
punct(took, ,-4)
cc(went, and)
~~~

### Multiword Expressions

Multiword expressions (MWEs) are combinations of words that (in some respect and to different degrees) behave
as lexical units rather than compositional syntactic phrases. The UD taxonomy contains three special relations
for analyzing MWEs:

* [u-dep/fixed]() is used to analyze fixed grammaticized function-word MWEs like _in spite of_ (see above)
* [u-dep/flat]() is used to analyze exocentric semi-fixed MWEs like _Barack Obama_ with no clear head
* [u-dep/compound]() is used to analyze (headed or endocentric) compounds like _noun phrase_, with head _phrase_

Structures analyzed with [u-dep/fixed]() and [u-dep/flat]() are headless by definition and are consistently
annotated by attaching all non-first elements to the first and only allowing outgoing dependents from the first element.

<div id="s8a" class="sd-parse">
We had a nice time in spite of the rain .
case(rain,in)
fixed(in,spite)
fixed(in,of)
obl(had,rain)
</div>

<div id="s8b" class="sd-parse">
Martin Luther King had a dream .
nsubj(had,Martin)
flat(Martin,Luther)
flat(Martin,King)
</div>

By contrast, [compounds](compound) are annotated to show their modification structure, including a regular concept of head:

<div id="s9" class="sd-parse">
I bought a computer disk drive enclosure .
nsubj(bought, I)
det(enclosure, a)
compound(drive, computer)
compound(drive, disk)
compound(enclosure, drive)
obj(bought, enclosure)
</div>

### Special Relations

Besides core dependency relations, functional relations, and relations for analyzing coordination, MWEs and punctuation,
the UD taxonomy includes a number of special relations for handling things like orthographic errors in text, disfluencies in speech, and list structures without internal syntactic structure.

<!--Some of the universal relations do not really encode syntactic dependency relations but are used to represent
punctuation, various kinds of multiword units, or unanalyzable segments. The use of these relations is subject
to special restrictions explained below.

Tokens with the relation [u-dep/punct]() always attach to content words (except in cases of ellipsis) and can never have dependents.

Since `punct` is not a normal dependency relation, the usual criteria for determining the head word do not apply.
Instead, we use the following principles:

1. A punctuation mark separating coordinated units is attached to the first conjunct.
2. A punctuation mark preceding or following a subordinated unit is attached to this unit.
3. Within the relevant unit, a punctuation mark is attached at the highest possible node that preserves projectivity.
4. Paired punctuation marks (quotes and brackets) should be attached to the same word unless that would create non-projectivity. This word is usually the head of the phrase enclosed in the paired punctuation.

<div id="punct1" class="sd-parse">
We have apples , pears , oranges , and bananas .
obj(have, apples)
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
-->
