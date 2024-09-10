---
layout: base
title:  'Statistics of nmod in UD_Old_Irish-DipWBG'
udver: '2'
---

## Treebank Statistics: UD_Old_Irish-DipWBG: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="sga_dipwbg-dep-nmod-poss.html">nmod:poss</a></tt>.

19 nodes (4%) are attached to their parents as `nmod`.

19 instances of `nmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.78947368421053.

The following 7 pairs of parts of speech are connected with `nmod`: <tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt> (12; 63% instances), <tt><a href="sga_dipwbg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="sga_dipwbg-pos-ADP.html">ADP</a></tt>-<tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="sga_dipwbg-pos-ADV.html">ADV</a></tt>-<tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipwbg-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipwbg-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="sga_dipwbg-pos-VERB.html">VERB</a></tt>-<tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod	color:blue
1	.i.	.i.	ADV	_	Abbr=Yes	7	advmod	_	_
2	is	is	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbType=Cop	4	nsubj	_	SpaceAfter=No
3	oc	oc	ADP	_	AdpType=Prep|Definite=Ind	4	case	_	SpaceAfter=No
4	precept	precept	NOUN	_	Case=Dat|Number=Sing	7	obl	_	_
5	soscéli	soiscélae	NOUN	_	Case=Gen|Number=Plur	4	nmod	_	_
6	at	at	PART	_	PartType=Vb	7	compound:prt	_	SpaceAfter=No
7	tó	attá	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	0	root	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nmod	color:blue
1	.i.	.i.	ADV	_	Abbr=Yes	13	advmod	_	_
2	hore	óre	SCONJ	_	_	4	mark	_	_
3	am	is	AUX	_	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbType=Cop	4	nsubj	_	SpaceAfter=No
4	essamin	essamin	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	13	advcl	_	SpaceAfter=No
5	se	se	PRON	_	PronType=Emp	3	amod	_	_
6	precepte	precept	NOUN	_	Case=Gen|Number=Sing	4	nmod	_	_
7	as	a	ADP	_	AdpType=Prep|Definite=Ind	9	case	_	SpaceAfter=No
8	mo	mo	PRON	_	Number=Sing|Person=1|Poss=Yes|PronType=Prs	9	nmod:poss	_	SpaceAfter=No
9	chuimriug	cuimrech	NOUN	_	Case=Dat|Number=Sing	6	nmod	_	_
10	is	is	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbType=Cop	11	nsubj	_	SpaceAfter=No
11	lia	il	ADJ	_	Degree=Cmp	13	ccomp	_	_
12	de	de	ADP	_	AdpType=Prep|Definite=Ind|Number=Sing|Person=3|PronType=Prs	11	obl:prep	_	_
13	creitfess	creitid	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|Voice=Act	0	root	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 23 nmod	color:blue
1	.i.	.i.	ADV	_	Abbr=Yes	4	advmod	_	_
2	co	co	SCONJ	_	_	4	mark	_	SpaceAfter=No
3	ní	ní	PART	_	Polarity=Neg	4	advmod	_	SpaceAfter=No
4	arim	adrími	VERB	_	Mood=Sub|Number=Sing|Person=1|Tense=Pres|Voice=Act	0	root	_	SpaceAfter=No
5	se	se	PRON	_	PronType=Emp	4	amod	_	_
6	peccad	peccad	NOUN	_	Case=Acc|Number=Sing	4	obj	_	_
7	lib	la	ADP	_	AdpType=Prep|Definite=Ind|Number=Plur|Person=2|PronType=Prs	6	obl:prep	_	SpaceAfter=No
8	si	si	PRON	_	PronType=Emp	7	amod	_	_
9	uili	uile	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	7	amod	_	_
10	ɫ	nó	CCONJ	_	_	12	cc	_	_
11	ara	ara	SCONJ	_	_	12	mark	_	SpaceAfter=No
12	tart	dobeir	VERB	_	Mood=Sub|Number=Sing|Person=1|Tense=Pres|Voice=Act	4	conj	_	SpaceAfter=No
13	sa	sa	PRON	_	PronType=Emp	12	amod	_	_
14	fortacht	fortacht	NOUN	_	Case=Acc|Number=Sing	12	obj	_	_
15	dúib	do	ADP	_	AdpType=Prep|Definite=Ind|Number=Plur|Person=2|PronType=Prs	14	obl:prep	_	SpaceAfter=No
16	si	si	PRON	_	PronType=Emp	15	amod	_	_
17	ar	ara	SCONJ	_	_	20	mark	_	SpaceAfter=No
18	na	ná	SCONJ	_	Polarity=Neg	20	mark	_	SpaceAfter=No
19	p	is	AUX	_	Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbType=Cop	20	nsubj	_	_
20	trom	trom	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	12	advcl	_	_
21	fuirib	for	ADP	_	AdpType=Prep|Definite=Ind|Number=Plur|Person=2|PronType=Prs	20	obl:prep	_	_
22	for	far	PRON	_	Number=Plur|Person=2|Poss=Yes|PronType=Prs	23	nmod:poss	_	SpaceAfter=No
23	nóinur	óinar	NOUN	_	Case=Dat|Number=Sing	21	nmod	_	_

~~~


