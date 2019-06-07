---
layout: base
title:  'Statistics of csubj in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `csubj`

This relation is universal.

9 nodes (0%) are attached to their parents as `csubj`.

9 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.44444444444444.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="be_hse-pos-ADV.html">ADV</a></tt>-<tt><a href="be_hse-pos-VERB.html">VERB</a></tt> (4; 44% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-VERB.html">VERB</a></tt> (2; 22% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-VERB.html">VERB</a></tt> (2; 22% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 11% instances).


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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 csubj	color:blue
1	Мне	я	PRON	PRP	Case=Dat|Number=Sing|Person=1|PronType=Prs	2	obj	_	_
2	здаецца	здавацца	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	8	punct	_	_
4	што	што	SCONJ	IN	_	8	mark	_	_
5	сітуацыя	сітуацыя	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	8	nsubj	_	_
6	ў	ў	ADP	IN	_	7	case	_	_
7	вас	вы	PRON	PRP	Case=Gen|Number=Plur|Person=2|PronType=Prs	5	nmod	_	_
8	нагадвае	нагадваць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj	_	_
9	сітуацыю	сітуацыя	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	8	obj	_	_
10	ў	ў	ADP	IN	_	11	case	_	_
11	Чэхіі	Чэхія	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	9	nmod	_	_
12	ў	ў	ADP	IN	_	13	case	_	_
13	пачатку	пачатак	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	9	nmod	_	_
14	XIX	XIX	ADJ	ORD	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	15	amod	_	_
15	стагоддзя	стагоддзе	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	13	nmod	_	SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


