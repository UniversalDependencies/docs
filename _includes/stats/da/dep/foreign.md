

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

72 nodes (0%) are attached to their parents as `foreign`.

57 instances of `foreign` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.27777777777778.

The following 3 pairs of parts of speech are connected with `foreign`: [da-pos/X]()-[da-pos/X]() (45; 63% instances), [da-pos/PROPN]()-[da-pos/X]() (16; 22% instances), [da-pos/X]()-[da-pos/PROPN]() (11; 15% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 foreign	color:blue
1	Han	han	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	kan	kunne	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
3	også	også	ADV	_	_	4	advmod	_	_
4	spille	spille	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	_
5	the	the	X	_	Foreign=Yes	4	dobj	_	_
6	good	good	X	_	Foreign=Yes	5	foreign	_	_
7	guy	guy	X	_	Foreign=Yes	5	foreign	_	_
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 foreign	color:blue
1	Femme	Femme	PROPN	_	_	0	root	_	_
2	fatale	fatale	X	_	Foreign=Yes	1	foreign	_	_
3	,	,	PUNCT	_	_	7	punct	_	_
4	som	som	PRON	_	PartType=Inf	7	iobj	_	_
5	alle	al	ADJ	_	Degree=Pos|Number=Plur	6	amod	_	_
6	mændene	mand	NOUN	_	Definite=Def|Gender=Com|Number=Plur	7	nsubj	_	_
7	sendte	sende	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	1	acl:relcl	_	_
8	beundrende	beundre	VERB	_	Tense=Pres|VerbForm=Part	9	amod	_	_
9	blikke	blik	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	7	dobj	_	_
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 foreign	color:blue
1	Jeg	jeg	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	har	have	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	set	se	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part,Trans	0	root	_	_
4	hende	hun	PRON	_	Case=Acc|Gender=Com|Number=Sing|Person=3|PronType=Prs	3	dobj	_	_
5	omtalt	omtale	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part,Trans	3	xcomp	_	_
6	som	som	ADP	_	PartType=Inf	9	case	_	_
7	oil	oil	X	_	Foreign=Yes	8	foreign	_	_
8	wealthy	wealthy	X	_	Foreign=Yes	9	foreign	_	_
9	Lynn	Lynn	PROPN	_	_	5	nmod	_	_
10	Wyatt	Wyatt	PROPN	_	_	9	name	_	_
11	,	,	PUNCT	_	_	9	punct	_	_
12	som	som	ADP	_	PartType=Inf	16	case	_	_
13	Texan	Texan	PROPN	_	_	15	foreign	_	_
14	society	society	X	_	Foreign=Yes	15	foreign	_	_
15	princess	princess	X	_	Foreign=Yes	16	foreign	_	_
16	Lynn	Lynn	PROPN	_	_	9	conj	_	_
17	Wyatt	Wyatt	PROPN	_	_	16	name	_	_
18	.	.	PUNCT	_	_	3	punct	_	_

~~~


