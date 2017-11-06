---
layout: base
title:  'Statistics of parataxis in UD_Slovak'
udver: '2'
---

## Treebank Statistics: UD_Slovak: Relations: `parataxis`

This relation is universal.

65 nodes (0%) are attached to their parents as `parataxis`.

42 instances of `parataxis` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.69230769230769.

The following 10 pairs of parts of speech are connected with `parataxis`: <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-VERB.html">VERB</a></tt> (43; 66% instances), <tt><a href="sk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk-pos-VERB.html">VERB</a></tt> (5; 8% instances), <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-NOUN.html">NOUN</a></tt> (5; 8% instances), <tt><a href="sk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk-pos-VERB.html">VERB</a></tt> (4; 6% instances), <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-PART.html">PART</a></tt> (2; 3% instances), <tt><a href="sk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="sk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="sk-pos-NUM.html">NUM</a></tt>-<tt><a href="sk-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="sk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 parataxis	color:blue
1	“	“	PUNCT	Z	_	7	punct	_	_
2	Vieš	vedieť	VERB	VKesb+	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	parataxis	_	SpaceAfter=No
3	,	,	PUNCT	Z	_	2	punct	_	_
4	minulé	minulý	ADJ	AAns4x	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	5	amod	_	_
5	leto	leto	NOUN	SSns4	Case=Acc|Gender=Neut|Number=Sing	7	obl	_	_
6	som	byť	AUX	VKesa+	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	mal	mať	VERB	VLesam+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	_
8	fantastický	fantastický	ADJ	AAis4x	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
9	džob	džob	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 parataxis	color:blue
1	Prvým	prvý	ADJ	NAis7	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing|NumType=Ord	3	amod	_	_
2	umelým	umelý	ADJ	AAis7x	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
3	satelitom	satelit	NOUN	SSis7	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	0	root	_	_
4	Mesiaca	mesiac	PROPN	SSis2:r	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
5	bola	byť	AUX	VLescf+	Aspect=Imp|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	3	cop	_	_
6	sovietska	sovietsky	ADJ	AAfs1x	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	_
7	sonda	sonda	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
8	Luna	luna	PROPN	SSfs1:r	Case=Nom|Gender=Fem|Number=Sing	7	nmod	_	_
9	10	10	NUM	0	NumForm=Digit	8	nummod	_	_
10	(	(	PUNCT	Z	_	11	punct	_	SpaceAfter=No
11	odštartovala	odštartovať	VERB	VLdscf+	Aspect=Perf|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	3	parataxis	_	_
12	31	31	NUM	0	NumForm=Digit	14	nummod	_	SpaceAfter=No
13	.	.	PUNCT	Z	_	12	punct	_	_
14	marca	marec	NOUN	SSis2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	11	obl	_	_
15	1966	1966	NUM	0	NumForm=Digit	14	nummod	_	SpaceAfter=No
16	)	)	PUNCT	Z	_	11	punct	_	SpaceAfter=No
17	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 15 parataxis	color:blue
1	Pokúšal	pokúšať	VERB	VLescm+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	_
2	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	1	expl:pv	_	_
3	jej	ona	PRON	PFfs3	Case=Dat|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	iobj	_	_
4	to	to	DET	PFns4	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	5	obj	_	_
5	vysvetliť	vysvetliť	VERB	VId+	Aspect=Perf|Polarity=Pos|VerbForm=Inf	1	xcomp	_	_
6	tak	tak	ADV	PD	PronType=Dem	5	advmod	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	9	punct	_	_
8	aby	aby	SCONJ	OY	Mood=Cnd	9	mark	_	_
9	pochopila	pochopiť	VERB	VLdscf+	Aspect=Perf|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	5	advcl	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	1	punct	_	_
11	"	"	PUNCT	Z	_	15	punct	_	SpaceAfter=No
12	Toto	toto	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	15	nsubj	_	_
13	bol	byť	AUX	VLesci+	Animacy=Inan|Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	15	cop	_	_
14	výnimočný	výnimočný	ADJ	AAis1x	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	15	amod	_	_
15	prípad	prípad	NOUN	SSis1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	1	parataxis	_	SpaceAfter=No
16	.	.	PUNCT	Z	_	1	punct	_	_

~~~


