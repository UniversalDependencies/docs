---
layout: base
title:  'Statistics of obl in UD_Old_Irish-DipWBG'
udver: '2'
---

## Treebank Statistics: UD_Old_Irish-DipWBG: Relations: `obl`

This relation is universal.
There are 1 language-specific subtypes of `obl`: <tt><a href="sga_dipwbg-dep-obl-prep.html">obl:prep</a></tt>.

22 nodes (5%) are attached to their parents as `obl`.

15 instances of `obl` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.13636363636364.

The following 5 pairs of parts of speech are connected with `obl`: <tt><a href="sga_dipwbg-pos-VERB.html">VERB</a></tt>-<tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt> (17; 77% instances), <tt><a href="sga_dipwbg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sga_dipwbg-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="sga_dipwbg-pos-VERB.html">VERB</a></tt>-<tt><a href="sga_dipwbg-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="sga_dipwbg-pos-VERB.html">VERB</a></tt>-<tt><a href="sga_dipwbg-pos-AUX.html">AUX</a></tt> (1; 5% instances), <tt><a href="sga_dipwbg-pos-VERB.html">VERB</a></tt>-<tt><a href="sga_dipwbg-pos-PART.html">PART</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obl	color:blue
1	.i.	.i.	ADV	_	Abbr=Yes	2	advmod	_	_
2	biuu	attá	VERB	_	Aspect=Hab|Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	0	root	_	SpaceAfter=No
3	sa	sa	PRON	_	PronType=Emp	2	amod	_	_
4	oc	oc	ADP	_	AdpType=Prep|Definite=Ind	5	case	_	SpaceAfter=No
5	irbáig	airbág	NOUN	_	Case=Dat|Number=Sing	2	obl	_	_
6	dar	tar	ADP	_	AdpType=Prep|Definite=Ind	8	case	_	SpaceAfter=No
7	far	far	PRON	_	Number=Plur|Person=2|Poss=Yes|PronType=Prs	8	nmod:poss	_	SpaceAfter=No
8	cenn	cenn	NOUN	_	Case=Acc|Number=Sing	5	acl	_	SpaceAfter=No
9	si	si	PRON	_	PronType=Emp	7	amod	_	_
10	fri	fri	ADP	_	AdpType=Prep|Definite=Ind	11	case	_	SpaceAfter=No
11	maccidóndu	maccidóndae	PROPN	_	Case=Acc|Number=Plur	5	acl	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 obl	color:blue
1	.i.	.i.	ADV	_	Abbr=Yes	3	advmod	_	_
2	ni	ní	PART	_	Polarity=Neg	3	advmod	_	SpaceAfter=No
3	gessam	guidid	VERB	_	Mood=Sub|Number=Plur|Person=1|Tense=Pres|Voice=Act	0	root	_	SpaceAfter=No
4	ni	ni	PRON	_	PronType=Emp	3	amod	_	_
5	níi	ní	PRON	_	PronType=Ind	3	obj	_	_
6	bes	is	AUX	_	Mood=Sub|Number=Sing|Person=3|Polarity=Pos|PronType=Rel|Tense=Pres|VerbType=Cop	7	nsubj	_	SpaceAfter=No
7	chotarsne	cotarsnae	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	5	acl:relcl	_	_
8	di	do	ADP	_	AdpType=Prep|Definite=Ind	10	case	_	SpaceAfter=No
9	ar	ar	PRON	_	Number=Plur|Person=1|Poss=Yes|PronType=Prs	10	nmod:poss	_	_
10	nícc	ícc	NOUN	_	Case=Dat|Number=Sing	7	obl	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 21 obl	color:blue
1	.i.	.i.	ADV	_	Abbr=Yes	8	advmod	_	_
2	is	is	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbType=Cop	3	cop	_	SpaceAfter=No
3	machthad	machthad	NOUN	_	Case=Nom|Number=Sing	8	obl	_	_
4	limm	la	ADP	_	AdpType=Prep|Definite=Ind|Number=Sing|Person=1|PronType=Prs	3	obl:prep	_	_
5	a	a	PRON	_	Gender=Masc,Neut|Number=Sing|Person=3|Poss=Yes|PronType=Prs	6	nmod:poss	_	SpaceAfter=No
6	threte	trete	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	_
7	do	do	PART	_	PartType=Vb	8	compound:prt	_	SpaceAfter=No
8	rérachtid	doérig	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Past|Voice=Act	0	root	_	_
9	máam	máam	NOUN	_	Case=Acc|Number=Sing	8	obj	_	_
10	firinne	fírinne	NOUN	_	Case=Gen|Number=Sing	9	nmod	_	_
11	et	_	X	_	Foreign=Yes	12	cc	_	_
12	sosceli	soiscélae	NOUN	_	Case=Gen|Number=Sing	10	conj	_	_
13	.i.	.i.	ADV	_	Abbr=Yes	15	advmod	_	_
14	i	is	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbType=Cop	15	nsubj	_	SpaceAfter=No
15	suaignid	súaichnid	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	8	dislocated	_	_
16	nirubtar	is	AUX	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Past|VerbType=Cop	17	cop	_	_
17	gáitha	gáeth	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	15	amod	_	_
18	for	far	PRON	_	Number=Plur|Person=2|Poss=Yes|PronType=Prs	19	nmod:poss	_	_
19	comairli	comairle	NOUN	_	Case=Nom|Number=Plur	17	nsubj	_	_
20	is	is	AUX	_	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbType=Cop	21	nsubj	_	SpaceAfter=No
21	dían	dían	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	23	obl	_	_
22	do	do	PART	_	PartType=Vb	23	compound:prt	_	SpaceAfter=No
23	rreractid	doérig	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Past|Voice=Act	15	conj	_	_
24	maám	máam	NOUN	_	Case=Acc|Number=Sing	23	obj	_	_
25	ind	in	DET	_	Case=Gen|Gender=Masc|Number=Sing|PronType=Art	26	det	_	SpaceAfter=No
26	soscéli	soiscélae	NOUN	_	Case=Gen|Number=Sing	24	nmod	_	_

~~~


