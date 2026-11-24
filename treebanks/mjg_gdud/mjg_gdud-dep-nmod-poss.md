---
layout: base
title:  'Statistics of nmod:poss in UD_Tu-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Tu-GDUD: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="mjg_gdud-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="mjg_gdud-dep-nmod-tmod.html">nmod:tmod</a></tt>.

26 nodes (4%) are attached to their parents as `nmod:poss`.

22 instances of `nmod:poss` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11538461538462.

The following 4 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="mjg_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mjg_gdud-pos-PRON.html">PRON</a></tt> (21; 81% instances), <tt><a href="mjg_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mjg_gdud-pos-NOUN.html">NOUN</a></tt> (3; 12% instances), <tt><a href="mjg_gdud-pos-PRON.html">PRON</a></tt>-<tt><a href="mjg_gdud-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="mjg_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="mjg_gdud-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nmod:poss	color:blue
1	puɕ-a	puɕ	VERB	_	Polarity=Neg	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	puɕ-a	puɕ	VERB	_	Polarity=Neg	1	conj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	1	punct	_	_
5	te	te	PRON	_	PronType=Dem	6	nsubj	_	_
6	debtɵr-gɜ	debtɵr	NOUN	_	Number=Sing	1	parataxis	_	_
7	ʋa	ʋa	AUX	_	Mood=Ind|Tense=Pres	6	cop	_	SpaceAfter=No
8	,	,	PUNCT	_	_	1	punct	_	_
9	te	te	PRON	_	PronType=Dem	11	nsubj	_	_
10	munɵ	munɵ	PRON	_	Number=Sing|Person=1|Poss=Yes|PronType=Prs	11	nmod:poss	_	_
11	debter	debter	NOUN	_	Number=Sing	1	parataxis	_	_
12	ʋa	ʋa	AUX	_	Mood=Ind|Tense=Pres	11	cop	_	SpaceAfter=No
13	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	bu	_	PRON	_	Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
2	ajil-nɵ	_	NOUN	_	Case=Gen	3	nmod:poss	_	_
3	gerɵl	_	NOUN	_	_	4	compound	_	_
4	rɔɢdɵgu	_	NOUN	_	_	8	obl	_	_
5	nɵgɜ	_	NUM	_	NumType=Card	6	nummod	_	_
6	dʑæn	_	NOUN	_	_	7	compound	_	_
7	ger-dɵ	_	NOUN	_	Case=Dat	8	obl	_	_
8	sau-dʑ-iː	_	VERB	_	Aspect=Imp|Mood=Ind|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nmod:poss	color:blue
1	puɕ-a	puɕ	VERB	_	Polarity=Neg	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	munɵ	munɵ	PRON	_	ExtPos=PRON|Number=Sing|Person=1|Poss=Yes|PronType=Prs	1	conj	_	_
4	puɕ-a	puɕ	VERB	_	Polarity=Neg	3	fixed	_	SpaceAfter=No
5	,	,	PUNCT	_	_	1	punct	_	_
6	te	te	PRON	_	PronType=Dem	1	conj	_	_
7	tɕinɵ	tɕinɵ	PRON	_	Number=Sing|Person=2|Poss=Yes|PronType=Prs	6	nmod:poss	_	_
8	ʋa	ʋa	AUX	_	Mood=Ind|Tense=Pres	1	cop	_	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


