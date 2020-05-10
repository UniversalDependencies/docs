---
layout: base
title:  'Statistics of acl in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="ru_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

256 nodes (1%) are attached to their parents as `acl`.

193 instances of `acl` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.9921875.

The following 17 pairs of parts of speech are connected with `acl`: <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (194; 76% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (29; 11% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (9; 4% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (9; 4% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-PART.html">PART</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl	color:blue
1	Я	я	PRON	PRP	Case=Nom|Number=Sing|Person=1	3	nsubj	_	_
2	также	также	ADV	RB	Degree=Pos	3	advmod	_	_
3	задаюсь	задаваться	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
4	вопросом	вопрос	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	3	obj	_	SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	_	_
6	повлиял	повлиять	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	acl	_	_
7	ли	ли	PART	RP	_	6	advmod	_	_
8	на	на	ADP	IN	_	9	case	_	_
9	это	это	PRON	DT	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	6	obl	_	_
10	Кубок	кубок	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
11	Дэвиса	Дэвис	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	10	flat:name	_	SpaceAfter=No
12	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 acl	color:blue
1	То	то	PRON	DT	Case=Nom|Gender=Neut|Number=Sing	14	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	,	_	5	punct	_	_
3	что	что	SCONJ	IN	_	5	obj	_	_
4	она	она	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	5	nsubj	_	_
5	говорит	говорить	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl	_	_
6	и	и	CCONJ	CC	_	9	cc	_	_
7	что	что	SCONJ	IN	_	9	obj	_	_
8	она	она	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	9	nsubj	_	_
9	делает	делать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	SpaceAfter=No
10	,	,	PUNCT	,	_	5	punct	_	_
11	на	на	ADP	IN	_	13	case	_	_
12	самом	самый	ADJ	JJ	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	13	amod	_	_
13	деле	дело	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	14	obl	_	_
14	невероятно	невероятный	ADJ	JJH	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	_	SpaceAfter=No
15	.	.	PUNCT	.	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 acl	color:blue
1	Ее	она	PRON	PRP	Case=Acc|Gender=Fem|Number=Sing|Person=3	3	obj	_	_
2	можно	можно	VERB	PRED	Degree=Pos	0	root	_	_
3	назвать	назвать	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	2	csubj	_	_
4	одной	один	NUM	CD	Case=Ins|Gender=Fem|Number=Sing	3	nummod	_	_
5	из	из	ADP	IN	_	9	case	_	_
6	самых	самый	ADJ	JJ	Case=Gen|Degree=Pos|Number=Plur	8	amod	_	_
7	широко	широко	ADV	RB	Degree=Pos	8	advmod	_	_
8	распространенных	распространенный	ADJ	JJ	Case=Gen|Degree=Pos|Number=Plur	9	acl	_	_
9	культур	культура	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	4	nmod	_	_
10	того	тот	DET	DT	Case=Gen|Gender=Neut|Number=Sing	11	det	_	_
11	времени	время	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	9	nmod	_	SpaceAfter=No
12	,	,	PUNCT	,	_	15	punct	_	_
13	для	для	ADP	IN	_	14	case	_	_
14	которой	который	PRON	WDT	Case=Gen|Gender=Fem|Number=Sing	15	obl	_	_
15	известно	известный	ADJ	PRED	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	9	acl:relcl	_	_
16	большое	большой	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	17	amod	_	_
17	количество	количество	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	15	nsubj	_	_
18	мест	место	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	17	nmod	_	_
19	археологических	археологический	ADJ	JJ	Case=Gen|Degree=Pos|Number=Plur	20	amod	_	_
20	находок	находка	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	18	nmod	_	SpaceAfter=No
21	.	.	PUNCT	.	_	2	punct	_	_

~~~


