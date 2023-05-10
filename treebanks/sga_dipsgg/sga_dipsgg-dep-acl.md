---
layout: base
title:  'Statistics of acl in UD_Old_Irish-DipSGG'
udver: '2'
---

## Treebank Statistics: UD_Old_Irish-DipSGG: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="sga_dipsgg-dep-acl-relcl.html">acl:relcl</a></tt>.

2 nodes (1%) are attached to their parents as `acl`.

2 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.5.

The following 2 pairs of parts of speech are connected with `acl`: <tt><a href="sga_dipsgg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipsgg-pos-ADJ.html">ADJ</a></tt> (1; 50% instances), <tt><a href="sga_dipsgg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipsgg-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 acl	color:blue
1	maithas	maithes	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
2	patric	pátric	PROPN	_	Case=Gen|Number=Sing	1	nmod	_	_
3	⁊	ocus	CCONJ	_	_	4	cc	_	_
4	brigtae	brigit	PROPN	_	Case=Gen|Number=Sing	2	conj	_	_
5	ar	ar	ADP	_	AdpType=Prep|Definite=Ind	6	case	_	_
6	máel	máel	PROPN	_	Case=Acc|Number=Sing	1	nmod	_	_
7	brigtae	brigtae	PROPN	_	Case=Gen|Number=Sing	6	nmod	_	_
8	na	ná	SCONJ	_	Polarity=Neg	10	mark	_	SpaceAfter=No
9	mba	is	AUX	_	Mood=Sub|Number=Sing|Person=3|Polarity=Pos|PronType=Rel|Tense=Pres|VerbType=Cop	10	cop	_	_
10	olcc	olc	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	1	acl	_	_
11	a	a	PRON	_	Gender=Masc,Neut|Number=Sing|Person=3|Poss=Yes|PronType=Prs	12	nmod:poss	_	SpaceAfter=No
12	menma	menma	NOUN	_	Case=Nom|Number=Sing	10	nsubj	_	_
13	frimm	fri	ADP	_	AdpType=Prep|Definite=Ind|Number=Sing|Person=1|PronType=Prs	10	obl:prep	_	_
14	ar	ar	ADP	_	AdpType=Prep|Definite=Def	16	case	_	SpaceAfter=No
15	in	a	DET	_	Case=Dat|Gender=Neut|Number=Sing|PronType=Art	16	det	_	SpaceAfter=No
16	scribund	scríbend	NOUN	_	Case=Dat|Number=Sing	10	nmod	_	_
17	roscribad	scríbaid	VERB	_	Mood=Ind|Number=Sing|PartType=Aug|Person=3|Tense=Past|Voice=Pass	16	acl:relcl	_	_
18	in	in	DET	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Art	19	det	_	SpaceAfter=No
19	dul	dul	NOUN	_	Case=Acc|Number=Sing	17	obl	_	SpaceAfter=No
20	so	so	PART	_	PronType=Dem	19	amod	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 acl	color:blue
1	.i.	.i.	ADV	_	Abbr=Yes	3	advmod	_	_
2	a	a	PRON	_	Gender=Masc,Neut|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	nmod:poss	_	SpaceAfter=No
3	thitol	titul	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
4	re	re	ADP	_	AdpType=Prep|Definite=Ind	6	case	_	_
5	cach	cach	DET	_	Case=Dat|Definite=Def|Number=Sing	6	det	_	_
6	libur	lebor	NOUN	_	Case=Dat|Number=Sing	3	nmod	_	_
7	ar	ara	SCONJ	_	_	9	mark	_	_
8	na	ná	SCONJ	_	Polarity=Neg	9	mark	_	SpaceAfter=No
9	roib	attá	VERB	_	Mood=Sub|Number=Sing|PartType=Aug|Person=3|Tense=Pres|Voice=Act	3	acl	_	_
10	cummasc	cummasc	NOUN	_	Case=Nom|Number=Sing	9	nsubj	_	_
11	foir	for	ADP	_	AdpType=Prep|Definite=Ind|Gender=Masc,Neut|Number=Sing|Person=3|PronType=Prs	10	obl:prep	_	_

~~~


