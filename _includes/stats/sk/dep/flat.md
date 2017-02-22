

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.
There are 1 language-specific subtypes of `flat`: [flat:foreign]().

9 nodes (0%) are attached to their parents as `flat`.

9 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.33333333333333.

The following 2 pairs of parts of speech are connected with `flat`: [sk-pos/PROPN]()-[sk-pos/PROPN]() (8; 89% instances), [sk-pos/PRON]()-[sk-pos/PROPN]() (1; 11% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 flat	color:blue
1	V	v	ADP	Eu6	AdpType=Prep|Case=Loc	2	case	_	_
2	Hospodinu	hospodin	PROPN	SSms6:r	Animacy=Anim|Case=Loc|Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
3	,	,	PUNCT	Z	_	4	punct	_	_
4	Pánovi	pán	PROPN	SSms6:r	Animacy=Anim|Case=Loc|Gender=Masc|Number=Sing	2	flat	_	_
5	mám	mať	VERB	VKesa+	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
6	svoje	svoj	DET	PFns4	Case=Acc|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	7	det	_	_
7	útočište	útočište	NOUN	SSns4	Case=Acc|Gender=Neut|Number=Sing	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	5	punct	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	5	punct	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	5	punct	_	_
11	„	„	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat	color:blue
1	On	on	PRON	PFms1:r	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|PronType=Prs	6	nsubj	_	_
2	–	–	PUNCT	Z	_	3	punct	_	_
3	Kristus	kristus	PROPN	SSms1:r	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	flat	_	_
4	je	byť	AUX	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	novou	nový	ADJ	AAfs7x	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	_
6	možnosťou	možnosť	NOUN	SSfs7	Case=Ins|Gender=Fem|Number=Sing	0	root	_	_
7	orientácie	orientácia	NOUN	SSfs2	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
8	,	,	PUNCT	Z	_	9	punct	_	_
9	cestou	cesta	NOUN	SSfs7	Case=Ins|Gender=Fem|Number=Sing	6	conj	_	_
10	znovuzrodenia	znovuzrodenie	NOUN	SSns2	Case=Gen|Gender=Neut|Number=Sing	9	nmod	_	SpaceAfter=No
11	,	,	PUNCT	Z	_	13	punct	_	_
12	novej	nový	ADJ	AAfs2x	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	13	amod	_	_
13	nádeje	nádej	NOUN	SSfs2	Case=Gen|Gender=Fem|Number=Sing	10	conj	_	_
14	a	a	CCONJ	O	_	15	cc	_	_
15	lásky	láska	NOUN	SSfs2	Case=Gen|Gender=Fem|Number=Sing	10	conj	_	SpaceAfter=No
16	,	,	PUNCT	Z	_	18	punct	_	_
17	ktorá	ktorý	DET	PAfs1	Case=Nom|Gender=Fem|Number=Sing|PronType=Int,Rel	18	nsubj	_	_
18	hľadá	hľadať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	15	acl	_	_
19	tých	ten	DET	PFmp4	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	18	obj	_	SpaceAfter=No
20	,	,	PUNCT	Z	_	22	punct	_	_
21	ktorí	ktorý	DET	PAmp1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|PronType=Int,Rel	22	nsubj	_	_
22	sú	byť	VERB	VKepc+	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	19	acl	_	_
23	na	na	ADP	Eu6	AdpType=Prep|Case=Loc	24	case	_	_
24	ceste	cesta	NOUN	SSfs6	Case=Loc|Gender=Fem|Number=Sing	22	obl	_	_
25	rezignácie	rezignácia	NOUN	SSfs2	Case=Gen|Gender=Fem|Number=Sing	24	nmod	_	SpaceAfter=No
26	,	,	PUNCT	Z	_	27	punct	_	_
27	ubití	ubitý	ADJ	Gtmp1x	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	21	xcomp	_	_
28	ľudským	ľudský	ADJ	AAis7x	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	29	amod	_	_
29	egoizmom	egoizmus	NOUN	SSis7	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	27	obj	_	_
30	a	a	CCONJ	O	_	31	cc	_	_
31	hriechom	hriech	NOUN	SSis7	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	29	conj	_	SpaceAfter=No
32	.	.	PUNCT	Z	_	6	punct	_	_

~~~


