

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

539 nodes (1%) are attached to their parents as `parataxis`.

511 instances of `parataxis` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.3710575139147.

The following 36 pairs of parts of speech are connected with `parataxis`: [ru-pos/VERB]()-[ru-pos/VERB]() (257; 48% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (63; 12% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (35; 6% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (30; 6% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (23; 4% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (23; 4% instances), [ru-pos/PROPN]()-[ru-pos/VERB]() (21; 4% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (8; 1% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (8; 1% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (6; 1% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (6; 1% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (5; 1% instances), [ru-pos/NOUN]()-[ru-pos/ADP]() (5; 1% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (4; 1% instances), [ru-pos/NUM]()-[ru-pos/NUM]() (4; 1% instances), [ru-pos/ADJ]()-[ru-pos/ADP]() (3; 1% instances), [ru-pos/ADJ]()-[ru-pos/SYM]() (3; 1% instances), [ru-pos/ADP]()-[ru-pos/VERB]() (3; 1% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (3; 1% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (3; 1% instances), [ru-pos/NUM]()-[ru-pos/VERB]() (3; 1% instances), [ru-pos/VERB]()-[ru-pos/ADP]() (3; 1% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/NUM]() (2; 0% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/PROPN]()-[ru-pos/PUNCT]() (2; 0% instances), [ru-pos/ADP]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/PUNCT]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/SYM]()-[ru-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 parataxis	color:blue
1	В	В	ADP	IN	_	2	case	_	_
2	дипломата	ДИПЛОМАТ	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	4	obl	_	_
3	не	НЕ	PART	NEG	Polarity=Neg	4	advmod	_	_
4	стреляли	СТРЕЛЯТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
5	,	,	PUNCT	,	_	4	punct	_	_
6	в	В	ADP	IN	_	7	case	_	_
7	него	ОН	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	8	obl	_	_
8	попал	ПОПАДАТЬ	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	4	parataxis	_	_
9	мусор	МУСОР	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 parataxis	color:blue
1	Ковиде	КОВИДЕ	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
2	(	(	PUNCT	(	_	1	punct	_	SpaceAfter=No
3	)	)	PUNCT	)	_	1	punct	_	_
4	--	--	PUNCT	--	_	5	punct	_	_
5	район	РАЙОН	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
6	(	(	PUNCT	(	_	7	punct	_	SpaceAfter=No
7	фрегезия	ФРЕГЕЗИЯ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	5	appos	_	SpaceAfter=No
8	)	)	PUNCT	)	_	7	punct	_	_
9	в	В	ADP	IN	_	10	case	_	_
10	Португалии	ПОРТУГАЛИЯ	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
11	,	,	PUNCT	,	_	5	punct	_	_
12	входит	ВХОДИТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	parataxis	_	_
13	в	В	ADP	IN	_	14	case	_	_
14	округ	ОКРУГ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	12	obl	_	_
15	Брага	БРАГА	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	14	appos	_	SpaceAfter=No
16	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 parataxis	color:blue
1	Но	НО	CCONJ	CC	_	5	cc	_	_
2	дивидендов	ДИВИДЕНД	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	5	obj	_	_
3	приобретения	ПРИОБРЕТЕНИЕ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	5	nsubj	_	_
4	не	НЕ	PART	NEG	Polarity=Neg	5	advmod	_	_
5	принесли	ПРИНЕСТИ	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
6	:	:	PUNCT	:	_	5	punct	_	_
7	лишь	ЛИШЬ	PART	UH	_	11	discourse	_	_
8	15	15	ADV	AFX	_	11	amod	_	_
9	-	-	PUNCT	-	_	8	goeswith	_	_
10	е	Й	ADJ	ORD	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	8	goeswith	_	_
11	место	МЕСТО	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	parataxis	_	_
12	в	В	ADP	IN	_	13	case	_	_
13	сезоне	СЕЗОН	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	11	nmod	_	_
14	1993/94	1993/94	NUM	CD	Animacy=Inan|Case=Nom|NumType=Card	13	nummod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

19605 nodes (2%) are attached to their parents as `parataxis`.

11102 instances of `parataxis` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.96597806681969.

The following 123 pairs of parts of speech are connected with `parataxis`: [ru-pos/VERB]()-[ru-pos/VERB]() (3605; 18% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (2465; 13% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (2457; 13% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (1892; 10% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (1861; 9% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (853; 4% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (753; 4% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (577; 3% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (546; 3% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (449; 2% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (414; 2% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (409; 2% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (275; 1% instances), [ru-pos/ADV]()-[ru-pos/ADV]() (254; 1% instances), [ru-pos/VERB]()-[ru-pos/PART]() (217; 1% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (216; 1% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (195; 1% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (174; 1% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (149; 1% instances), [ru-pos/PROPN]()-[ru-pos/VERB]() (140; 1% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (132; 1% instances), [ru-pos/PRON]()-[ru-pos/VERB]() (122; 1% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (105; 1% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (103; 1% instances), [ru-pos/PROPN]()-[ru-pos/ADV]() (83; 0% instances), [ru-pos/NOUN]()-[ru-pos/PART]() (81; 0% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (70; 0% instances), [ru-pos/PRON]()-[ru-pos/ADV]() (70; 0% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (62; 0% instances), [ru-pos/NUM]()-[ru-pos/VERB]() (48; 0% instances), [ru-pos/ADJ]()-[ru-pos/PART]() (46; 0% instances), [ru-pos/ADV]()-[ru-pos/PART]() (41; 0% instances), [ru-pos/NOUN]()-[ru-pos/DET]() (38; 0% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (37; 0% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (32; 0% instances), [ru-pos/PART]()-[ru-pos/VERB]() (28; 0% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (27; 0% instances), [ru-pos/PRON]()-[ru-pos/PART]() (26; 0% instances), [ru-pos/ADV]()-[ru-pos/PRON]() (25; 0% instances), [ru-pos/DET]()-[ru-pos/NOUN]() (25; 0% instances), [ru-pos/NUM]()-[ru-pos/ADV]() (24; 0% instances), [ru-pos/DET]()-[ru-pos/VERB]() (23; 0% instances), [ru-pos/PRON]()-[ru-pos/PROPN]() (22; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADJ]() (22; 0% instances), [ru-pos/PRON]()-[ru-pos/ADJ]() (21; 0% instances), [ru-pos/DET]()-[ru-pos/ADV]() (20; 0% instances), [ru-pos/X]()-[ru-pos/NOUN]() (20; 0% instances), [ru-pos/NUM]()-[ru-pos/PROPN]() (18; 0% instances), [ru-pos/PART]()-[ru-pos/ADV]() (18; 0% instances), [ru-pos/VERB]()-[ru-pos/INTJ]() (17; 0% instances), [ru-pos/ADV]()-[ru-pos/PROPN]() (13; 0% instances), [ru-pos/NOUN]()-[ru-pos/INTJ]() (13; 0% instances), [ru-pos/PRON]()-[ru-pos/PRON]() (13; 0% instances), [ru-pos/PART]()-[ru-pos/NOUN]() (12; 0% instances), [ru-pos/VERB]()-[ru-pos/SCONJ]() (12; 0% instances), [ru-pos/NUM]()-[ru-pos/ADJ]() (11; 0% instances), [ru-pos/PUNCT]()-[ru-pos/NOUN]() (11; 0% instances), [ru-pos/CCONJ]()-[ru-pos/PART]() (10; 0% instances), [ru-pos/NOUN]()-[ru-pos/CCONJ]() (10; 0% instances), [ru-pos/PART]()-[ru-pos/PART]() (9; 0% instances), [ru-pos/PUNCT]()-[ru-pos/VERB]() (9; 0% instances), [ru-pos/CCONJ]()-[ru-pos/NOUN]() (8; 0% instances), [ru-pos/CCONJ]()-[ru-pos/VERB]() (7; 0% instances), [ru-pos/NOUN]()-[ru-pos/X]() (7; 0% instances), [ru-pos/ADJ]()-[ru-pos/DET]() (6; 0% instances), [ru-pos/ADP]()-[ru-pos/ADV]() (6; 0% instances), [ru-pos/ADP]()-[ru-pos/NOUN]() (6; 0% instances), [ru-pos/DET]()-[ru-pos/ADJ]() (6; 0% instances), [ru-pos/DET]()-[ru-pos/PROPN]() (6; 0% instances), [ru-pos/PUNCT]()-[ru-pos/ADV]() (6; 0% instances), [ru-pos/VERB]()-[ru-pos/DET]() (6; 0% instances), [ru-pos/X]()-[ru-pos/VERB]() (6; 0% instances), [ru-pos/CCONJ]()-[ru-pos/PROPN]() (5; 0% instances), [ru-pos/NOUN]()-[ru-pos/NUM]() (5; 0% instances), [ru-pos/NOUN]()-[ru-pos/SCONJ]() (5; 0% instances), [ru-pos/PART]()-[ru-pos/INTJ]() (5; 0% instances), [ru-pos/PROPN]()-[ru-pos/PART]() (5; 0% instances), [ru-pos/ADP]()-[ru-pos/VERB]() (4; 0% instances), [ru-pos/NUM]()-[ru-pos/PART]() (4; 0% instances), [ru-pos/PRON]()-[ru-pos/INTJ]() (4; 0% instances), [ru-pos/ADJ]()-[ru-pos/INTJ]() (3; 0% instances), [ru-pos/ADJ]()-[ru-pos/X]() (3; 0% instances), [ru-pos/ADV]()-[ru-pos/INTJ]() (3; 0% instances), [ru-pos/PRON]()-[ru-pos/DET]() (3; 0% instances), [ru-pos/X]()-[ru-pos/ADJ]() (3; 0% instances), [ru-pos/_]()-[ru-pos/ADV]() (3; 0% instances), [ru-pos/_]()-[ru-pos/VERB]() (3; 0% instances), [ru-pos/ADP]()-[ru-pos/PART]() (2; 0% instances), [ru-pos/ADV]()-[ru-pos/NUM]() (2; 0% instances), [ru-pos/CCONJ]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/DET]()-[ru-pos/DET]() (2; 0% instances), [ru-pos/NUM]()-[ru-pos/NUM]() (2; 0% instances), [ru-pos/NUM]()-[ru-pos/PRON]() (2; 0% instances), [ru-pos/PART]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/PROPN]()-[ru-pos/CCONJ]() (2; 0% instances), [ru-pos/PROPN]()-[ru-pos/PRON]() (2; 0% instances), [ru-pos/VERB]()-[ru-pos/X]() (2; 0% instances), [ru-pos/_]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/ADJ]()-[ru-pos/SCONJ]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/CCONJ]() (1; 0% instances), [ru-pos/CCONJ]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/DET]()-[ru-pos/CCONJ]() (1; 0% instances), [ru-pos/DET]()-[ru-pos/INTJ]() (1; 0% instances), [ru-pos/DET]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/INTJ]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/INTJ]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/DET]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/INTJ]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/SCONJ]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/X]() (1; 0% instances), [ru-pos/SCONJ]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/SCONJ]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/SYM]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/CCONJ]() (1; 0% instances), [ru-pos/X]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/X]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/_]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/_]()-[ru-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 parataxis	color:blue
1	Ее	она	PRON	_	Case=Gen|Gender=Fem|Number=Sing|Person=3	2	nmod	2:nmod	_
2	уход	уход	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	10	nsubj	10:nsubj	_
3	под	под	ADP	_	_	4	case	4:case	_
4	воду	вода	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	2	nmod	2:nmod	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	4:punct	_
6	как	как	SCONJ	_	_	10	mark	10:mark	_
7	полагал	полагать	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	10	parataxis	10:parataxis	_
8	Жиров	жиров	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	7:nsubj	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	8:punct	_
10	происходил	происходить	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
11	в	в	ADP	_	_	13	case	13:case	_
12	два	два	NUM	_	Animacy=Inan|Case=Acc|Gender=Masc	13	nummod:gov	13:nummod:gov	_
13	этапа	этап	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	10	obl	10:obl	SpaceAfter=No
14	.	.	PUNCT	_	_	13	punct	13:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis	color:blue
1	История	история	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	_
2	-	-	PUNCT	_	_	1	punct	1:punct	_
3	памятные	памятный	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	4	amod	4:amod	_
4	даты	дата	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	1	parataxis	1:parataxis	_
5	мирового	мировой	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	8	amod	8:amod	_
6	и	и	CCONJ	_	_	7	cc	7:cc	_
7	российского	российский	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	5	conj	5:conj	_
8	альпинизма	альпинизм	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	4:nmod	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 parataxis	color:blue
1	Итак	итак	ADV	_	Degree=Pos	7	parataxis	7:parataxis	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	1:punct	_
3	сочинения	сочинение	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	7	nsubj	7:nsubj	_
4	по	по	ADP	_	_	5	case	5:case	_
5	искусству	искусство	NOUN	_	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing	3	nmod	3:nmod	_
6	счёта	счет	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	5:nmod	_
7	назывались	называться	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	0:root	_
8	Алгоритмами	алгоритм	PROPN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	7	obl	7:obl	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	8:punct	_

~~~


