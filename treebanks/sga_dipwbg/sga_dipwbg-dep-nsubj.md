---
layout: base
title:  'Statistics of nsubj in UD_Old_Irish-DipWBG'
udver: '2'
---

## Treebank Statistics: UD_Old_Irish-DipWBG: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="sga_dipwbg-dep-nsubj-outer.html">nsubj:outer</a></tt>.

40 nodes (9%) are attached to their parents as `nsubj`.

27 instances of `nsubj` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.425.

The following 12 pairs of parts of speech are connected with `nsubj`: <tt><a href="sga_dipwbg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sga_dipwbg-pos-AUX.html">AUX</a></tt> (14; 35% instances), <tt><a href="sga_dipwbg-pos-VERB.html">VERB</a></tt>-<tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt> (6; 15% instances), <tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipwbg-pos-AUX.html">AUX</a></tt> (5; 13% instances), <tt><a href="sga_dipwbg-pos-PRON.html">PRON</a></tt>-<tt><a href="sga_dipwbg-pos-AUX.html">AUX</a></tt> (4; 10% instances), <tt><a href="sga_dipwbg-pos-ADV.html">ADV</a></tt>-<tt><a href="sga_dipwbg-pos-AUX.html">AUX</a></tt> (3; 8% instances), <tt><a href="sga_dipwbg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="sga_dipwbg-pos-PRON.html">PRON</a></tt>-<tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="sga_dipwbg-pos-PRON.html">PRON</a></tt>-<tt><a href="sga_dipwbg-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="sga_dipwbg-pos-VERB.html">VERB</a></tt>-<tt><a href="sga_dipwbg-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="sga_dipwbg-pos-VERB.html">VERB</a></tt>-<tt><a href="sga_dipwbg-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="sga_dipwbg-pos-VERB.html">VERB</a></tt>-<tt><a href="sga_dipwbg-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj	color:blue
1	.i.	.i.	ADV	_	Abbr=Yes	5	advmod	_	_
2	amal	amal	SCONJ	_	_	5	mark	_	_
3	no	no	PART	_	PartType=Vb	4	compound:prt	_	SpaceAfter=No
4	nda	is	AUX	_	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbType=Cop	5	nsubj	_	SpaceAfter=No
5	frecṅdircc	frecndairc	ADJ	_	Case=Dat|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
6	sa	sa	PRON	_	PronType=Emp	4	amod	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 nsubj	color:blue
1	.i.	.i.	ADV	_	Abbr=Yes	4	advmod	_	_
2	ar	ara	SCONJ	_	_	4	mark	_	SpaceAfter=No
3	na	ná	SCONJ	_	Polarity=Neg	4	mark	_	SpaceAfter=No
4	érbarthar	asbeir	VERB	_	Aspect=Perf|Mood=Sub|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	_
5	o	ó	SCONJ	_	_	6	mark	_	_
6	chretsit	creitid	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|Voice=Act	4	advcl	_	_
7	ni	ní	PART	_	Polarity=Neg	9	advmod	_	SpaceAfter=No
8	n	n	PRON	_	Number=Plur|Person=1|PronClass=A|PronType=Prs	7	obj:infx	_	SpaceAfter=No
9	tá	attá	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	6	advcl	_	_
10	airli	airle	NOUN	_	Case=Nom|Number=Sing	9	nsubj	_	_
11	ar	ar	PRON	_	Number=Plur|Person=1|Poss=Yes|PronType=Prs	12	nmod:poss	_	SpaceAfter=No
12	mban	ben	NOUN	_	Case=Gen|Number=Plur	10	nmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
1	.i.	.i.	ADV	_	Abbr=Yes	8	advmod	_	_
2	is	is	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbType=Cop	4	nsubj	_	SpaceAfter=No
3	i	i	ADP	_	AdpType=Prep|Definite=Ind	4	case	_	SpaceAfter=No
4	persin	persan	NOUN	_	Case=Acc|Number=Sing	8	obl	_	_
5	crist	críst	PROPN	_	Case=Gen|Number=Sing	4	nmod	_	_
6	d	do	PART	_	PartType=Vb	8	compound:prt	_	SpaceAfter=No
7	a	a	PRON	_	Gender=Neut|Number=Sing|Person=3|PronClass=A|PronType=Prs	6	obj:infx	_	SpaceAfter=No
8	gníu	dogní	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	0	root	_	SpaceAfter=No
9	sa	sa	PRON	_	PronType=Emp	8	amod	_	_
10	sin	sin	PART	_	PronType=Dem	8	nsubj	_	_

~~~


