---
layout: base
title:  'Statistics of amod in UD_Old_Irish-DipWBG'
udver: '2'
---

## Treebank Statistics: UD_Old_Irish-DipWBG: Relations: `amod`

This relation is universal.

33 nodes (8%) are attached to their parents as `amod`.

32 instances of `amod` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.18181818181818.

The following 8 pairs of parts of speech are connected with `amod`: <tt><a href="sga_dipwbg-pos-VERB.html">VERB</a></tt>-<tt><a href="sga_dipwbg-pos-PRON.html">PRON</a></tt> (13; 39% instances), <tt><a href="sga_dipwbg-pos-ADP.html">ADP</a></tt>-<tt><a href="sga_dipwbg-pos-PRON.html">PRON</a></tt> (6; 18% instances), <tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sga_dipwbg-pos-ADJ.html">ADJ</a></tt> (6; 18% instances), <tt><a href="sga_dipwbg-pos-PRON.html">PRON</a></tt>-<tt><a href="sga_dipwbg-pos-PRON.html">PRON</a></tt> (3; 9% instances), <tt><a href="sga_dipwbg-pos-AUX.html">AUX</a></tt>-<tt><a href="sga_dipwbg-pos-PRON.html">PRON</a></tt> (2; 6% instances), <tt><a href="sga_dipwbg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sga_dipwbg-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="sga_dipwbg-pos-ADP.html">ADP</a></tt>-<tt><a href="sga_dipwbg-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="sga_dipwbg-pos-PART.html">PART</a></tt>-<tt><a href="sga_dipwbg-pos-PART.html">PART</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	.i.	.i.	ADV	_	Abbr=Yes	2	advmod	_	_
2	biuu	attá	VERB	_	Aspect=Hab|Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	0	root	_	SpaceAfter=No
3	sa	sa	PRON	_	Number=Sing|Person=1|PronType=Emp	2	amod	_	_
4	oc	oc	ADP	_	AdpType=Prep|Definite=Ind	5	case	_	SpaceAfter=No
5	irbáig	airbág	NOUN	_	Case=Dat|Number=Sing	2	obl	_	_
6	dar	tar	ADP	_	AdpType=Prep|Definite=Ind	8	case	_	SpaceAfter=No
7	far	far	PRON	_	Number=Plur|Person=2|Poss=Yes|PronType=Prs	8	nmod:poss	_	SpaceAfter=No
8	cenn	cenn	NOUN	_	Case=Acc|Number=Sing	5	acl	_	SpaceAfter=No
9	si	si	PRON	_	Number=Plur|Person=2|PronType=Emp	7	amod	_	_
10	fri	fri	ADP	_	AdpType=Prep|Definite=Ind	11	case	_	SpaceAfter=No
11	maccidóndu	maccidóndae	PROPN	_	Case=Acc|Number=Plur	5	acl	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 25 amod	color:blue
1	.i.	.i.	ADV	_	Abbr=Yes	2	advmod	_	_
2	léic	léicid	VERB	_	Mood=Imp|Number=Sing|Person=2|Voice=Act	0	root	_	_
3	uáit	ó	ADP	_	AdpType=Prep|Definite=Ind|Number=Sing|Person=2|PronType=Prs	2	obl:prep	_	_
4	inna	a	DET	_	Case=Acc|Gender=Neut|Number=Plur|PronType=Art	5	det	_	SpaceAfter=No
5	biada	biad	NOUN	_	Case=Acc|Number=Plur	2	obj	_	_
6	mílsi	milis	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur	5	amod	_	_
7	et	_	CCONJ	_	Foreign=Yes	9	cc	_	SpaceAfter=No|Lang=la
8	to	do	PART	_	PartType=Vb	9	compound:prt	_	SpaceAfter=No
9	mil	domeil	VERB	_	Mood=Imp|Number=Sing|Person=2|Voice=Act	2	conj	_	_
10	inna	a	DET	_	Case=Acc|Gender=Neut|Number=Plur|PronType=Art	11	det	_	SpaceAfter=No
11	hí	í	PART	_	PartType=Dct	9	obj	_	_
12	siu	so	PART	_	PronType=Dem	11	amod	_	_
13	do	do	PART	_	PartType=Vb	14	compound:prt	_	SpaceAfter=No
14	mmeil	domeil	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	11	acl:relcl	_	_
15	do	do	PRON	_	Number=Sing|Person=2|Poss=Yes|PronType=Prs	16	nmod:poss	_	_
16	chenél	cenél	NOUN	_	Case=Nom|Number=Sing	14	nsubj	_	_
17	ar	ara	SCONJ	_	_	20	mark	_	SpaceAfter=No
18	ná	ná	SCONJ	_	Polarity=Neg	20	mark	_	SpaceAfter=No
19	p	is	AUX	_	Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbType=Cop	20	nsubj	_	SpaceAfter=No
20	hé	é_1	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	23	csubj	_	_
21	som	som	PRON	_	Gender=Masc,Neut|Number=Sing|Person=3|PronType=Emp	20	amod	_	_
22	con	con	PART	_	PartType=Vb	23	compound:prt	_	SpaceAfter=No
23	éit	conéitet	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|Voice=Act	2	advcl	_	_
24	dét	do	ADP	_	AdpType=Prep|Definite=Ind|Number=Sing|Person=2|PronType=Prs	23	obl:prep	_	SpaceAfter=No
25	so	so	PRON	_	Number=Sing|Person=2|PronType=Emp	24	amod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 amod	color:blue
1	.i.	.i.	ADV	_	Abbr=Yes	3	advmod	_	_
2	ni	ní	PART	_	Polarity=Neg	3	advmod	_	SpaceAfter=No
3	riat	renaid	VERB	_	Mood=Sub|Number=Plur|Person=3|Tense=Pres|Voice=Act	0	root	_	_
4	na	in	DET	_	Case=Acc|Gender=Masc|Number=Plur|PronType=Art	5	det	_	SpaceAfter=No
5	dánu	dán	NOUN	_	Case=Acc|Number=Plur	3	obj	_	_
6	diadi	díade	ADJ	_	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	5	amod	_	_
7	ar	ar	ADP	_	AdpType=Prep|Definite=Ind	9	case	_	SpaceAfter=No
8	a	a	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Art	9	det	_	SpaceAfter=No
9	nindeb	indeb	NOUN	_	Case=Acc|Number=Sing	3	obl	_	_
10	domunde	domundae	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	9	amod	_	_

~~~


