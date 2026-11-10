---
layout: base
title:  'Statistics of nmod in UD_Old_Irish-DipWBG'
udver: '2'
---

## Treebank Statistics: UD_Old_Irish-DipWBG: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="sga_dipwbg-dep-nmod-poss.html">nmod:poss</a></tt>.

20 nodes (5%) are attached to their parents as `nmod`.

20 instances of `nmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.75.

The following 7 pairs of parts of speech are connected with `nmod`: <tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt> (12; 60% instances), <tt><a href="sga_dipwbg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt> (2; 10% instances), <tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipwbg-pos-PROPN.html">PROPN</a></tt> (2; 10% instances), <tt><a href="sga_dipwbg-pos-ADP.html">ADP</a></tt>-<tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="sga_dipwbg-pos-ADV.html">ADV</a></tt>-<tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipwbg-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="sga_dipwbg-pos-VERB.html">VERB</a></tt>-<tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


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
6	at	ad	PART	_	PartType=Vb	7	compound:prt	_	SpaceAfter=No
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
5	se	sa	PRON	_	Number=Sing|Person=1|PronType=Emp	3	amod	_	_
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod	color:blue
1	.i.	.i.	ADV	_	Abbr=Yes	8	advmod	_	_
2	is	is	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbType=Cop	4	nsubj	_	SpaceAfter=No
3	i	i	ADP	_	AdpType=Prep|Definite=Ind	4	case	_	SpaceAfter=No
4	persin	persan	NOUN	_	Case=Acc|Number=Sing	8	obl	_	_
5	crist	críst	PROPN	_	Case=Gen|Number=Sing	4	nmod	_	_
6	d	do	PART	_	PartType=Vb	8	compound:prt	_	SpaceAfter=No
7	a	a_2	PRON	_	Gender=Neut|Number=Sing|Person=3|PronClass=A|PronType=Prs	6	obj:infx	_	SpaceAfter=No
8	gníu	dogní	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	0	root	_	SpaceAfter=No
9	sa	sa	PRON	_	Number=Sing|Person=1|PronType=Emp	8	amod	_	_
10	sin	sin	PART	_	PronType=Dem	8	nsubj	_	_

~~~


