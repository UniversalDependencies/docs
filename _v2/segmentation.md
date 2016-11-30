---
layout: base
title:  'Segmentation in UD v2'
udver: '2'
---

# Word segmentation in UD v2

The UD scheme makes a distinction between **tokens**, word-like elements that can be identified using simple rules, often relying (only) on whitespace and punctuation, and **words**, which are the linguistically relevant word units needed for morphological and syntactic analysis. In v1, it was assumed that words would never contain spaces, and that "multitoken words" should always be handled using special relations like [u-dep/fixed]() and [u-dep/goeswith](). For v2, we relax this assumption in two ways:

* Allow words with spaces for languages where spaces mark something else than word boundaries (for example, syllable boundaries as in Vietnamese)
* Allow words with spaces (in any language) for an approved (and restricted) list of exceptions like numbers (“100 000”) and abbreviations (“i. e.”)

Throughout the remainder of this text, the symbol `⎵` will be used to indicate orthographic space.

## Problems with current treatment of word segmentation

There are two main problems with the current treatment of word segmentation:

* The first is that for some languages (Vietnamese being the prototypical example) spaces do not mark word boundaries, but rather syllable boundaries. 
* In other languages, some kind of spacing character is used as a delimiter in numerals, or is optionally used in abbreviations. 

### Spaces as syllable delimiters 

There is unanimous agreement that words with spaces should be allowed in the Vietnamese treebank, because the alternative of treating all polysyllabic words as multiword expressions would artificially make Vietnamese look very different from all other languages. As far as we know, Vietnamese is the only language where this is necessary, but still all tools will need to be able to support having spaces in CoNLL-U columns. Consider the following example, "Minh is (a) teacher.", where <i>giáo viên</i> is a bisyllabic word meaning "teacher". (Currently using underscore, "giáo⎵viên", because even the tree visualization tool cannot work with word-internal spaces.)

~~~ conllu

1	Minh	Minh	PROPN	_	_	3	nsubj	_	_
2	là	là	VERB	_	_	3	cop	_	_
3	giáo⎵viên	giáo⎵viên	NOUN	_	_	0	root	_	_
4	.	.	PUNCT	_	_	3	punct	_	_

~~~

If a language allows spaces inside words on a language-wide basis, this must be declared in the language-specific documentation.

### Other cases

For the remainder of the languages, we should essentially maintain the ban on spaces in words. However, we propose that for a highly restricted closed class of orthographic phenomena, we may make exceptions (with prior approval).

#### Spaces as numeral separators

In the existing French treebank, space delimited numerals, e.g. "100 000" are collapsed into a single numeral, "... de 8 500 à 20 000 euros." becomes:

~~~ conllu

1	de	de	ADP	_	_	2	case	_	_
2	8500	8500	NUM	_	_	0	nmod	_	_
3	à	à	ADP	_	_	5	case	_	_
4	20000	20000	NUM	_	_	5	nummod	_	_
5	euros	euro	NOUN	_	Gender=Masc|Number=Plur	0	nmod	_	_

~~~

We do not see that this is an improvement over simply allowing the space, and the alternative (to have each 000 as a 
separate token and use `goeswith` or `mwe`) is unwieldy and does not exactly fit, e.g. writing 100 000 is not an 
orthographic error, but rather orthographically normative, and neither is it a fixed expression.

The new tokenisation would be:

~~~ sdparse

de 8⎵500 à 20⎵000 euros \n from 8,500 to 20,000 euros

~~~

#### Spaces in normalising abbreviations

Spaces should be allowed in order to normalise abbreviations, in Swedish "e.g." can be written either "t.ex." or "t ex"

With space "t ex":

~~~ sdparse

Idrottsmateriel t_ex spikskor , kompass , kartfodral \n Sporting.goods e.⎵g. spiked.shoes , compass , map.holder

~~~

Without space "t.ex.":

~~~ sdparse

Det gäller t.ex. säsongarbetslösa byggnadsarbetare . \n This applies.to e.g. seasonally.unemployed building.workers .

~~~

#### Spaces between a syntactic word and a bound morpheme

In Tuvan, in some tenses, the person/number agreement is written separate from the verbal morpheme. We propose allowing these to be tokenised as one unit

~~~sdparse

Мен Кызылга чурттап турган⎵мен .  \n I Kyzyl.to living standing.am
nsubj(чурттап, Мен)
aux(чурттап, турган⎵мен)
nmod(чурттап, Кызылга)

~~~

