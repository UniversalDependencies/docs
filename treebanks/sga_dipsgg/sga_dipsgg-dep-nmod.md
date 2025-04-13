---
layout: base
title:  'Statistics of nmod in UD_Old_Irish-DipSGG'
udver: '2'
---

## Treebank Statistics: UD_Old_Irish-DipSGG: Relations: `nmod`

This relation is universal.
There are 2 language-specific subtypes of `nmod`: <tt><a href="sga_dipsgg-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="sga_dipsgg-dep-nmod-pre.html">nmod:pre</a></tt>.

39 nodes (9%) are attached to their parents as `nmod`.

38 instances of `nmod` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.17948717948718.

The following 6 pairs of parts of speech are connected with `nmod`: <tt><a href="sga_dipsgg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipsgg-pos-NOUN.html">NOUN</a></tt> (28; 72% instances), <tt><a href="sga_dipsgg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipsgg-pos-PROPN.html">PROPN</a></tt> (6; 15% instances), <tt><a href="sga_dipsgg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sga_dipsgg-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="sga_dipsgg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipsgg-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="sga_dipsgg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sga_dipsgg-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="sga_dipsgg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sga_dipsgg-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 nmod	color:blue
1	.i.	.i.	ADV	_	Abbr=Yes	4	advmod	_	_
2	is	is	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbType=Cop	4	nsubj	_	_
3	huas	úas	ADP	_	AdpType=Prep|Definite=Ind	4	case	_	SpaceAfter=No
4	neurt	nert	NOUN	_	Case=Dat|Number=Sing	0	root	_	_
5	dom	do	ADP	_	AdpType=Prep|Definite=Ind|Number=Sing|Person=1|PronType=Prs	4	obl:prep	_	_
6	ar	ar	ADP	_	AdpType=Prep|Definite=Ind	8	case	_	SpaceAfter=No
7	a	a	PRON	_	Gender=Masc,Neut|Number=Sing|Person=3|Poss=Yes|PronType=Prs	8	nmod:poss	_	SpaceAfter=No
8	doidṅgi	doidnge	NOUN	_	Case=Acc|Number=Sing	4	nmod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod	color:blue
1	᚛	᚛	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	ᚃᚓᚂ	féil	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
3	ᚋᚐᚏᚈᚐᚔᚅ	martan	PROPN	_	Case=Gen|Number=Sing	2	nmod	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 16 nmod	color:blue
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


