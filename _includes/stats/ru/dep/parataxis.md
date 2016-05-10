

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.

601 nodes (1%) are attached to their parents as `parataxis`.

580 instances of `parataxis` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.342762063228.

The following 39 pairs of parts of speech are connected with `parataxis`: [ru-pos/VERB]()-[ru-pos/VERB]() (291; 48% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (72; 12% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (43; 7% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (34; 6% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (26; 4% instances), [ru-pos/PROPN]()-[ru-pos/VERB]() (26; 4% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (26; 4% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (8; 1% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (7; 1% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (6; 1% instances), [ru-pos/NOUN]()-[ru-pos/ADP]() (5; 1% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (4; 1% instances), [ru-pos/ADP]()-[ru-pos/VERB]() (4; 1% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (4; 1% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (4; 1% instances), [ru-pos/ADJ]()-[ru-pos/ADP]() (3; 0% instances), [ru-pos/ADJ]()-[ru-pos/SYM]() (3; 0% instances), [ru-pos/NUM]()-[ru-pos/NUM]() (3; 0% instances), [ru-pos/NUM]()-[ru-pos/VERB]() (3; 0% instances), [ru-pos/VERB]()-[ru-pos/ADP]() (3; 0% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (3; 0% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/NUM]() (2; 0% instances), [ru-pos/PROPN]()-[ru-pos/PUNCT]() (2; 0% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/ADP]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/DET]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/PUNCT]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/SYM]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 parataxis	color:blue
1	Озвучивает	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
2	Пётр	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	_
3	Иващенко	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	name	_	_
4	(	_	PUNCT	(	_	6	punct	_	_
5	ранее	_	ADV	RBR	_	6	advmod	_	_
6	озвучивал	_	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	1	parataxis	_	_
7	Юрий	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
8	Мазихин	_	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	name	_	_
9	)	_	PUNCT	)	_	6	punct	_	_
10	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 parataxis	color:blue
1	Нечайка	_	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
2	--	_	PUNCT	-	_	3	punct	_	_
3	река	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
4	в	_	ADP	IN	_	5	case	_	_
5	России	_	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	3	nmod	_	_
6	,	_	PUNCT	,	_	3	punct	_	_
7	протекает	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	parataxis	_	_
8	в	_	ADP	IN	_	10	case	_	_
9	Оренбургской	_	ADJ	JJL	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	10	amod	_	_
10	области	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	7	nmod	_	_
11	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis	color:blue
1	См.	_	VERB	VBC	Aspect=Imp|Mood=Imp|Number=Plur|Person=2	0	root	_	_
2	также	_	CONJ	CC	_	1	cc	_	_
3	:	_	PUNCT	:	_	1	punct	_	_
4	Красная	_	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	5	amod	_	_
5	армия	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	1	parataxis	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-Syntagrus)

This relation is universal.

21334 nodes (2%) are attached to their parents as `parataxis`.

11860 instances of `parataxis` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.80903721758695.

The following 89 pairs of parts of speech are connected with `parataxis`: [ru-pos/VERB]()-[ru-pos/VERB]() (3350; 16% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (3271; 15% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (2959; 14% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (2203; 10% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (2026; 9% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (1049; 5% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (761; 4% instances), [ru-pos/VERB]()-[ru-pos/SCONJ]() (725; 3% instances), [ru-pos/ADJ]()-[ru-pos/ADV]() (665; 3% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (644; 3% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (520; 2% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (413; 2% instances), [ru-pos/ADV]()-[ru-pos/ADV]() (286; 1% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (275; 1% instances), [ru-pos/VERB]()-[ru-pos/PART]() (254; 1% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (210; 1% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (157; 1% instances), [ru-pos/ADJ]()-[ru-pos/SCONJ]() (134; 1% instances), [ru-pos/NOUN]()-[ru-pos/SCONJ]() (134; 1% instances), [ru-pos/NOUN]()-[ru-pos/NUM]() (132; 1% instances), [ru-pos/NOUN]()-[ru-pos/CONJ]() (130; 1% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (98; 0% instances), [ru-pos/NOUN]()-[ru-pos/PART]() (84; 0% instances), [ru-pos/VERB]()-[ru-pos/CONJ]() (83; 0% instances), [ru-pos/PRON]()-[ru-pos/VERB]() (55; 0% instances), [ru-pos/ADJ]()-[ru-pos/PART]() (50; 0% instances), [ru-pos/NOUN]()-[ru-pos/SYM]() (43; 0% instances), [ru-pos/ADJ]()-[ru-pos/CONJ]() (42; 0% instances), [ru-pos/ADV]()-[ru-pos/PART]() (41; 0% instances), [ru-pos/ADV]()-[ru-pos/SCONJ]() (41; 0% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (40; 0% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (37; 0% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (34; 0% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (28; 0% instances), [ru-pos/PART]()-[ru-pos/VERB]() (27; 0% instances), [ru-pos/PRON]()-[ru-pos/ADV]() (26; 0% instances), [ru-pos/PRON]()-[ru-pos/PART]() (21; 0% instances), [ru-pos/PART]()-[ru-pos/ADV]() (18; 0% instances), [ru-pos/VERB]()-[ru-pos/INTJ]() (17; 0% instances), [ru-pos/NOUN]()-[ru-pos/INTJ]() (16; 0% instances), [ru-pos/NUM]()-[ru-pos/VERB]() (14; 0% instances), [ru-pos/ADV]()-[ru-pos/CONJ]() (13; 0% instances), [ru-pos/ADV]()-[ru-pos/NUM]() (13; 0% instances), [ru-pos/CONJ]()-[ru-pos/PART]() (11; 0% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (10; 0% instances), [ru-pos/ADJ]()-[ru-pos/SYM]() (9; 0% instances), [ru-pos/ADV]()-[ru-pos/PRON]() (9; 0% instances), [ru-pos/SYM]()-[ru-pos/NOUN]() (9; 0% instances), [ru-pos/VERB]()-[ru-pos/SYM]() (9; 0% instances), [ru-pos/ADJ]()-[ru-pos/NUM]() (8; 0% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (8; 0% instances), [ru-pos/PART]()-[ru-pos/NOUN]() (8; 0% instances), [ru-pos/SYM]()-[ru-pos/VERB]() (8; 0% instances), [ru-pos/PART]()-[ru-pos/PART]() (7; 0% instances), [ru-pos/PRON]()-[ru-pos/ADJ]() (7; 0% instances), [ru-pos/PRON]()-[ru-pos/PRON]() (7; 0% instances), [ru-pos/NUM]()-[ru-pos/ADV]() (6; 0% instances), [ru-pos/ADV]()-[ru-pos/INTJ]() (5; 0% instances), [ru-pos/CONJ]()-[ru-pos/VERB]() (5; 0% instances), [ru-pos/PART]()-[ru-pos/INTJ]() (5; 0% instances), [ru-pos/SCONJ]()-[ru-pos/ADV]() (5; 0% instances), [ru-pos/SYM]()-[ru-pos/ADJ]() (5; 0% instances), [ru-pos/ADJ]()-[ru-pos/INTJ]() (4; 0% instances), [ru-pos/NUM]()-[ru-pos/ADJ]() (4; 0% instances), [ru-pos/PRON]()-[ru-pos/CONJ]() (4; 0% instances), [ru-pos/ADV]()-[ru-pos/SYM]() (3; 0% instances), [ru-pos/CONJ]()-[ru-pos/ADV]() (3; 0% instances), [ru-pos/DET]()-[ru-pos/NOUN]() (3; 0% instances), [ru-pos/NUM]()-[ru-pos/SCONJ]() (3; 0% instances), [ru-pos/PRON]()-[ru-pos/INTJ]() (3; 0% instances), [ru-pos/SYM]()-[ru-pos/ADV]() (3; 0% instances), [ru-pos/CONJ]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/CONJ]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/DET]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/NUM]()-[ru-pos/PART]() (2; 0% instances), [ru-pos/PART]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/SYM]()-[ru-pos/CONJ]() (2; 0% instances), [ru-pos/DET]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/DET]()-[ru-pos/CONJ]() (1; 0% instances), [ru-pos/INTJ]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/INTJ]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/PART]()-[ru-pos/SCONJ]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/SCONJ]() (1; 0% instances), [ru-pos/SCONJ]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/SCONJ]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/SCONJ]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/SYM]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/SYM]()-[ru-pos/SCONJ]() (1; 0% instances), [ru-pos/SYM]()-[ru-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 parataxis	color:blue
1	Причину	ПРИЧИНА	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	7	dobj	_	_
2	он	ОН	PRON	_	_	7	nsubj	_	_
3	,	,	PUNCT	,	_	2	punct	_	_
4	может	МОЧЬ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis	_	_
5	,	,	PUNCT	,	_	4	punct	_	_
6	и	И	PART	_	_	7	advmod	_	_
7	чувствовал	ЧУВСТВОВАТЬ	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	,	,	PUNCT	,	_	7	punct	_	_
9	но	НО	CONJ	_	_	7	dep	_	_
10	думать	ДУМАТЬ	VERB	_	Aspect=Imp|VerbForm=Inf	13	xcomp	_	_
11	о	О	ADP	_	_	12	case	_	_
12	ней	ОНА	PRON	_	_	10	nmod	_	_
13	боялся	БОЯТЬСЯ	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	9	dep	_	_
14	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis	color:blue
1	История	ИСТОРИЯ	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	-	-	PUNCT	-	_	1	punct	_	_
3	памятные	ПАМЯТНЫЙ	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	4	amod	_	_
4	даты	ДАТА	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	1	parataxis	_	_
5	мирового	МИРОВОЙ	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
6	и	И	CONJ	_	_	5	dep	_	_
7	российского	РОССИЙСКИЙ	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	6	dep	_	_
8	альпинизма	АЛЬПИНИЗМ	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	_
9	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 parataxis	color:blue
1	Итак	ИТАК	ADV	_	Degree=Pos	7	parataxis	_	_
2	,	,	PUNCT	,	_	1	punct	_	_
3	сочинения	СОЧИНЕНИЕ	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	7	nsubj	_	_
4	по	ПО	ADP	_	_	5	case	_	_
5	искусству	ИСКУССТВО	NOUN	_	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing	3	dobj	_	_
6	счёта	СЧЕТ	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	dobj	_	_
7	назывались	НАЗЫВАТЬСЯ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	Алгоритмами	АЛГОРИТМ	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	7	dobj	_	_
9	.	.	PUNCT	.	_	7	punct	_	_

~~~


