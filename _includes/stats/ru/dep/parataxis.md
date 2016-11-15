

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

610 nodes (1%) are attached to their parents as `parataxis`.

581 instances of `parataxis` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.2918032786885.

The following 39 pairs of parts of speech are connected with `parataxis`: [ru-pos/VERB]()-[ru-pos/VERB]() (291; 48% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (73; 12% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (43; 7% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (33; 5% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (26; 4% instances), [ru-pos/PROPN]()-[ru-pos/VERB]() (26; 4% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (26; 4% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (10; 2% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (8; 1% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (7; 1% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (6; 1% instances), [ru-pos/NOUN]()-[ru-pos/ADP]() (5; 1% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (4; 1% instances), [ru-pos/ADP]()-[ru-pos/VERB]() (4; 1% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (4; 1% instances), [ru-pos/NUM]()-[ru-pos/NUM]() (4; 1% instances), [ru-pos/ADJ]()-[ru-pos/ADP]() (3; 0% instances), [ru-pos/ADJ]()-[ru-pos/SYM]() (3; 0% instances), [ru-pos/NUM]()-[ru-pos/VERB]() (3; 0% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (3; 0% instances), [ru-pos/VERB]()-[ru-pos/ADP]() (3; 0% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (3; 0% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/NUM]() (2; 0% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/PROPN]()-[ru-pos/PUNCT]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/PUNCT]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/SYM]()-[ru-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 parataxis	color:blue
1	Озвучивает	ОЗВУЧИВАТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	Пётр	ПЕТР	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	_
3	Иващенко	ИВАЩЕНКО	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	name	_	_
4	(	(	PUNCT	(	_	6	punct	_	_
5	ранее	РАНЕЕ	ADV	RBR	Degree=Cmp	6	advmod	_	_
6	озвучивал	ОЗВУЧИВАТЬ	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	1	parataxis	_	_
7	Юрий	ЮРИЙ	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
8	Мазихин	МАЗИХИН	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	name	_	_
9	)	)	PUNCT	)	_	6	punct	_	_
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 parataxis	color:blue
1	Нечайка	НЕЧАЙКА	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
2	--	--	PUNCT	--	_	3	punct	_	_
3	река	РЕКА	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
4	в	В	ADP	IN	_	5	case	_	_
5	России	РОССИЯ	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	3	nmod	_	_
6	,	,	PUNCT	,	_	3	punct	_	_
7	протекает	ПРОТЕКАТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
8	в	В	ADP	IN	_	10	case	_	_
9	Оренбургской	ОРЕНБУРГСКИЙ	ADJ	JJL	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing|Variant=Full	10	amod	_	_
10	области	ОБЛАСТЬ	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	7	nmod	_	_
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis	color:blue
1	См.	СМ.	VERB	VBC	Aspect=Imp|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	0	root	_	_
2	также	ТАКЖЕ	CONJ	CC	_	1	cc	_	_
3	:	:	PUNCT	:	_	1	punct	_	_
4	Красная	КРАСНЫЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Variant=Full	5	amod	_	_
5	армия	АРМИЯ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	1	parataxis	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.

21630 nodes (2%) are attached to their parents as `parataxis`.

12215 instances of `parataxis` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.8709662505779.

The following 97 pairs of parts of speech are connected with `parataxis`: [ru-pos/VERB]()-[ru-pos/VERB]() (3998; 18% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (2952; 14% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (2678; 12% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (2164; 10% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (2036; 9% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (959; 4% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (849; 4% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (652; 3% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (612; 3% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (511; 2% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (443; 2% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (416; 2% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (309; 1% instances), [ru-pos/ADV]()-[ru-pos/ADV]() (285; 1% instances), [ru-pos/VERB]()-[ru-pos/PART]() (255; 1% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (203; 1% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (196; 1% instances), [ru-pos/VERB]()-[ru-pos/SCONJ]() (181; 1% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (158; 1% instances), [ru-pos/PROPN]()-[ru-pos/VERB]() (143; 1% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (116; 1% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (116; 1% instances), [ru-pos/NOUN]()-[ru-pos/CONJ]() (107; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADV]() (91; 0% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (85; 0% instances), [ru-pos/NOUN]()-[ru-pos/PART]() (83; 0% instances), [ru-pos/VERB]()-[ru-pos/CONJ]() (60; 0% instances), [ru-pos/NOUN]()-[ru-pos/SCONJ]() (58; 0% instances), [ru-pos/PRON]()-[ru-pos/VERB]() (57; 0% instances), [ru-pos/ADJ]()-[ru-pos/PART]() (48; 0% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (48; 0% instances), [ru-pos/ADJ]()-[ru-pos/SCONJ]() (47; 0% instances), [ru-pos/NOUN]()-[ru-pos/SYM]() (41; 0% instances), [ru-pos/ADV]()-[ru-pos/PART]() (40; 0% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (40; 0% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (36; 0% instances), [ru-pos/NUM]()-[ru-pos/VERB]() (33; 0% instances), [ru-pos/ADJ]()-[ru-pos/CONJ]() (30; 0% instances), [ru-pos/PART]()-[ru-pos/VERB]() (29; 0% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (28; 0% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (27; 0% instances), [ru-pos/PRON]()-[ru-pos/ADV]() (26; 0% instances), [ru-pos/X]()-[ru-pos/NOUN]() (23; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADJ]() (22; 0% instances), [ru-pos/NUM]()-[ru-pos/ADV]() (21; 0% instances), [ru-pos/PRON]()-[ru-pos/PART]() (21; 0% instances), [ru-pos/PART]()-[ru-pos/ADV]() (18; 0% instances), [ru-pos/PRON]()-[ru-pos/PROPN]() (17; 0% instances), [ru-pos/NUM]()-[ru-pos/PROPN]() (15; 0% instances), [ru-pos/ADV]()-[ru-pos/PROPN]() (14; 0% instances), [ru-pos/PROPN]()-[ru-pos/CONJ]() (14; 0% instances), [ru-pos/ADV]()-[ru-pos/CONJ]() (11; 0% instances), [ru-pos/CONJ]()-[ru-pos/PART]() (11; 0% instances), [ru-pos/ADJ]()-[ru-pos/SYM]() (10; 0% instances), [ru-pos/SCONJ]()-[ru-pos/ADV]() (10; 0% instances), [ru-pos/ADV]()-[ru-pos/PRON]() (9; 0% instances), [ru-pos/PART]()-[ru-pos/NOUN]() (9; 0% instances), [ru-pos/SYM]()-[ru-pos/NOUN]() (9; 0% instances), [ru-pos/VERB]()-[ru-pos/SYM]() (9; 0% instances), [ru-pos/NUM]()-[ru-pos/ADJ]() (8; 0% instances), [ru-pos/PRON]()-[ru-pos/ADJ]() (8; 0% instances), [ru-pos/SYM]()-[ru-pos/VERB]() (8; 0% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (7; 0% instances), [ru-pos/ADV]()-[ru-pos/SCONJ]() (7; 0% instances), [ru-pos/CONJ]()-[ru-pos/VERB]() (7; 0% instances), [ru-pos/NOUN]()-[ru-pos/X]() (7; 0% instances), [ru-pos/PART]()-[ru-pos/PART]() (7; 0% instances), [ru-pos/PRON]()-[ru-pos/PRON]() (7; 0% instances), [ru-pos/PROPN]()-[ru-pos/SYM]() (7; 0% instances), [ru-pos/X]()-[ru-pos/VERB]() (7; 0% instances), [ru-pos/SCONJ]()-[ru-pos/VERB]() (6; 0% instances), [ru-pos/SYM]()-[ru-pos/ADJ]() (5; 0% instances), [ru-pos/NUM]()-[ru-pos/PART]() (4; 0% instances), [ru-pos/PRON]()-[ru-pos/CONJ]() (4; 0% instances), [ru-pos/PROPN]()-[ru-pos/SCONJ]() (4; 0% instances), [ru-pos/ADV]()-[ru-pos/SYM]() (3; 0% instances), [ru-pos/CONJ]()-[ru-pos/ADV]() (3; 0% instances), [ru-pos/PART]()-[ru-pos/ADJ]() (3; 0% instances), [ru-pos/PROPN]()-[ru-pos/PART]() (3; 0% instances), [ru-pos/X]()-[ru-pos/ADJ]() (3; 0% instances), [ru-pos/CONJ]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/CONJ]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/NUM]()-[ru-pos/SCONJ]() (2; 0% instances), [ru-pos/SCONJ]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/SCONJ]()-[ru-pos/PART]() (2; 0% instances), [ru-pos/SYM]()-[ru-pos/CONJ]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/X]() (1; 0% instances), [ru-pos/INTJ]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/INTJ]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/X]() (1; 0% instances), [ru-pos/SYM]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/SYM]()-[ru-pos/SCONJ]() (1; 0% instances), [ru-pos/SYM]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/X]() (1; 0% instances), [ru-pos/X]()-[ru-pos/CONJ]() (1; 0% instances), [ru-pos/X]()-[ru-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 parataxis	color:blue
1	Ее	ЕЕ	DET	_	_	2	det	_	_
2	уход	уход	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	_
3	под	под	ADP	_	_	4	case	_	_
4	воду	вода	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	2	nmod	_	_
5	,	,	PUNCT	,	_	4	punct	_	_
6	как	как	SCONJ	_	_	7	mark	_	_
7	полагал	полагать	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	10	parataxis	_	_
8	Жиров	жиров	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
9	,	,	PUNCT	,	_	8	punct	_	_
10	происходил	происходить	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
11	в	в	ADP	_	_	13	case	_	_
12	два	два	NUM	_	Animacy=Inan|Case=Acc|Gender=Masc	13	nummod:gov	_	_
13	этапа	этап	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	_
14	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 parataxis	color:blue
1	Итак	итак	ADV	_	Degree=Pos	7	parataxis	_	_
2	,	,	PUNCT	,	_	1	punct	_	_
3	сочинения	сочинение	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	7	nsubj	_	_
4	по	по	ADP	_	_	5	case	_	_
5	искусству	искусство	NOUN	_	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing	3	nmod	_	_
6	счёта	счет	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
7	назывались	называться	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	Алгоритмами	алгоритм	PROPN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	7	nmod	_	_
9	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis	color:blue
1	История	история	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	-	-	PUNCT	-	_	1	punct	_	_
3	памятные	памятный	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	4	amod	_	_
4	даты	дата	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	1	parataxis	_	_
5	мирового	мировой	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
6	и	и	CONJ	_	_	5	cc	_	_
7	российского	российский	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	5	conj	_	_
8	альпинизма	альпинизм	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	_
9	.	.	PUNCT	.	_	1	punct	_	_

~~~


