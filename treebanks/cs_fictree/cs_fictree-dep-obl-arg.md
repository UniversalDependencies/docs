---
layout: base
title:  'Statistics of obl:arg in UD_Czech-FicTree'
udver: '2'
---

## Treebank Statistics: UD_Czech-FicTree: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="cs_fictree-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="cs_fictree-dep-obl-agent.html">obl:agent</a></tt>.

2014 nodes (1%) are attached to their parents as `obl:arg`.

1229 instances of `obl:arg` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.65690168818272.

The following 12 pairs of parts of speech are connected with `obl:arg`: <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (983; 49% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (577; 29% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (264; 13% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt> (68; 3% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (59; 3% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-DET.html">DET</a></tt> (23; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt> (15; 1% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-PRON.html">PRON</a></tt> (13; 1% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_fictree-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="cs_fictree-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_fictree-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="cs_fictree-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_fictree-pos-ADV.html">ADV</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 obl:arg	color:blue
1	Daly	dát	VERB	VpFP----R-AA---	Gender=Fem|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	jsme	být	AUX	VB-P---1P-AA---	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	_	_
3	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	1	expl:pv	_	_
4	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	5	case	_	_
5	řeči	řeč	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing|Polarity=Pos	1	obl:arg	_	SpaceAfter=No
6	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 obl:arg	color:blue
1	Jely	jet	VERB	VpFP----R-AA---	Gender=Fem|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	3	case	_	_
3	nákup	nákup	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	1	obl	_	_
4	a	a	CCONJ	J^-------------	_	12	cc	_	_
5	nějaký	nějaký	DET	PZIS1----------	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	6	det	_	_
6	náklaďák	náklaďák	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	12	nsubj	_	_
7	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	9	case	_	_
8	opilým	opilý	ADJ	AAMS7----1A----	Animacy=Anim|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	9	amod	_	_
9	řidičem	řidič	NOUN	NNMS7-----A----	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Polarity=Pos	6	nmod	_	_
10	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	11	case	_	_
11	nich	on	PRON	P5FP2--3-------	Case=Gen|Gender=Fem|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs	12	obl:arg	_	_
12	vrazil	vrazit	VERB	VpIS----R-AA---	Animacy=Inan|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	1	conj	_	SpaceAfter=No
13	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:arg	color:blue
1	O	o	ADP	RR--4----------	AdpType=Prep|Case=Acc	2	case	_	_
2	tohle	tenhle	DET	PDNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	3	obl:arg	_	_
3	jde	jít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	:	:	PUNCT	Z:-------------	_	5	punct	_	_
5	neurazit	urazit	VERB	Vf--------N----	Polarity=Neg|VerbForm=Inf	2	appos	_	_
6	se	se	PRON	P7--4----------	Case=Acc|PronType=Prs|Reflex=Yes|Variant=Short	5	expl:pv	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


