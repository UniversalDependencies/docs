---
layout: base
title:  'Statistics of csubj in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `csubj`

This relation is universal.

10 nodes (0%) are attached to their parents as `csubj`.

10 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="be_hse-pos-ADV.html">ADV</a></tt>-<tt><a href="be_hse-pos-VERB.html">VERB</a></tt> (4; 40% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-VERB.html">VERB</a></tt> (3; 30% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-VERB.html">VERB</a></tt> (3; 30% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 csubj	color:blue
1	Асобна	асобна	ADV	_	Degree=Pos	2	advmod	_	_
2	можна	можна	ADV	_	Degree=Pos	0	root	_	_
3	размаўляць	размаўляць	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	2	csubj	_	_
4	пра	пра	ADP	_	_	5	case	_	_
5	вытворчасць	вытворчасць	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	3	obl	_	_
6	бульбы	бульба	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 csubj	color:blue
1	Мова	мова	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
2	не	не	PART	UH	Polarity=Neg	3	advmod	_	_
3	важная	важны	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	5	punct	_	_
5	важна	важны	ADJ	PRED	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	3	conj	_	_
6	адчуваць	адчуваць	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	5	csubj	_	_
7	сабе	сабе	PRON	PRP	Case=Acc|PronType=Prs|Reflex=Yes	6	obj	_	_
8	беларусам	беларус	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	xcomp	_	SpaceAfter=No
9	...	...	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 csubj	color:blue
1	Сёння	сёння	ADV	RB	Degree=Pos	5	advmod	_	_
2	ніхто	ніхто	PRON	DT	Case=Nom|Gender=Masc|Number=Sing|PronType=Neg	5	nsubj	_	_
3	ўжо	ўжо	ADV	RB	Degree=Pos	5	advmod	_	_
4	не	не	PART	UH	Polarity=Neg	5	advmod	_	_
5	размаўляе	размаўляць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	на	на	ADP	IN	_	8	case	_	_
7	беларускай	беларускі	ADJ	JJL	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
8	мове	мова	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	5	obl	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	10	punct	_	_
10	трэба	трэба	VERB	PRED	_	5	conj	_	_
11	з	з	ADP	IN	_	12	case	_	_
12	гэтым	гэта	PRON	DT	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing|PronType=Dem	13	obl	_	_
13	прымірыцца	прымірыцца	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Mid	10	csubj	_	SpaceAfter=No
14	...	...	PUNCT	PUNCT	_	5	punct	_	_

~~~


