

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is a language-specific subtype of [aux]().

466 nodes (1%) are attached to their parents as `aux:pass`.

449 instances of `aux:pass` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08798283261803.

The following 4 pairs of parts of speech are connected with `aux:pass`: [ru-pos/VERB]()-[ru-pos/AUX]() (452; 97% instances), [ru-pos/ADJ]()-[ru-pos/AUX]() (11; 2% instances), [ru-pos/NOUN]()-[ru-pos/AUX]() (2; 0% instances), [ru-pos/AUX]()-[ru-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	Текст	ТЕКСТ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	написан	НАПИСАТЬ	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
4	по	ПО	ADP	AFX	_	3	advmod	_	_
5	-	-	PUNCT	-	_	4	goeswith	_	_
6	латыни	ЛАТЫНИ	ADV	AFX	_	4	goeswith	_	SpaceAfter=No
7	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	Все	ВЕСЬ	DET	DT	Animacy=Anim|Case=Nom|Number=Plur	2	det	_	_
2	граждане	ГРАЖДАНИН	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	4	nsubj:pass	_	_
3	были	БЫТЬ	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
4	обязаны	ОБЯЗАННЫЙ	ADJ	JJH	Animacy=Anim|Case=Nom|Number=Plur|Variant=Short	0	root	_	_
5	работать	РАБОТАТЬ	VERB	VB	Aspect=Imp|VerbForm=Inf	4	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 16 aux:pass	color:blue
1	1	1	ADJ	ORD	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	2	amod	_	_
2	января	ЯНВАРЬ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	obl	_	_
3	1889	1889	ADJ	ORD	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	amod	_	_
4	года	ГОД	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
5	произведен	ПРОИЗВЕСТИ	VERB	VBNH	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
6	в	В	ADP	IN	_	7	case	_	_
7	чин	ЧИН	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obl	_	_
8	вице	ВИЦЕ	ADV	AFX	_	7	nmod	_	_
9	-	-	PUNCT	-	_	8	goeswith	_	_
10	адмирала	АДМИРАЛ	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	8	goeswith	_	SpaceAfter=No
11	,	,	PUNCT	,	_	19	punct	_	_
12	а	А	CCONJ	CC	_	19	cc	_	_
13	в	В	ADP	IN	_	15	case	_	_
14	1891	1891	ADJ	ORD	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	15	amod	_	_
15	году	ГОД	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	19	nmod	_	_
16	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	19	aux:pass	_	_
17	назначен	НАЗНАЧИТЬ	AUX	VBNH	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	19	cop	_	_
18	старшим	СТАРШИЙ	ADJ	JJL	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	19	amod	_	_
19	флагманом	ФЛАГМАН	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	5	conj	_	_
20	Балтийского	БАЛТИЙСКИЙ	ADJ	JJL	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	21	amod	_	_
21	флота	ФЛОТ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	19	nmod	_	SpaceAfter=No
22	.	.	PUNCT	.	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is a language-specific subtype of [aux]().

2335 nodes (0%) are attached to their parents as `aux:pass`.

2275 instances of `aux:pass` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17944325481799.

The following 7 pairs of parts of speech are connected with `aux:pass`: [ru-pos/VERB]()-[ru-pos/AUX]() (2313; 99% instances), [ru-pos/VERB]()-[ru-pos/PART]() (15; 1% instances), [ru-pos/AUX]()-[ru-pos/AUX]() (3; 0% instances), [ru-pos/ADJ]()-[ru-pos/AUX]() (1; 0% instances), [ru-pos/DET]()-[ru-pos/AUX]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	"	"	PUNCT	_	_	2	punct	2:punct	SpaceAfter=No
2	Алгоризм	алгоризм	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	_
3	был	быть	AUX	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	aux:pass	4:aux	_
4	придуман	придумывать	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	в	в	ADP	_	_	6	case	6:case	_
6	Греции	греция	PROPN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	4	obl	4:obl	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 aux:pass	color:blue
1	Впрочем	впрочем	ADV	_	Degree=Pos	11	parataxis	11:parataxis	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	1:punct	_
3	как	как	SCONJ	_	_	6	mark	6:mark	_
4	пришел	приходить	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	acl	6:acl	_
5	-	-	PUNCT	_	_	4	punct	4:punct	_
6	так	так	ADV	_	Degree=Pos	11	advmod	11:advmod	_
7	чуть	чуть	ADV	_	Degree=Pos	8	advmod	8:advmod	_
8	было	было	PART	_	_	11	aux:pass	11:aux:pass	_
9	и	и	PART	_	_	11	advmod	11:advmod	_
10	не	не	PART	_	_	11	advmod	11:advmod	_
11	ушел	уходить	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 aux:pass	color:blue
1	В	в	ADP	_	_	2	case	2:case	_
2	столкновениях	столкновение	NOUN	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Plur	6	obl	6:obl	_
3	в	в	ADP	_	_	4	case	4:case	_
4	Горхии	горхия	PROPN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	2	nmod	2:nmod	_
5	были	быть	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	6	aux:pass	6:aux:pass	_
6	убиты	убивать	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	0:root	_
7	пятеро	пятеро	NUM	_	Case=Nom	8	nummod:gov	8:nummod:gov	_
8	повстанцев	повстанец	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	6	nsubj	6:nsubj	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	8:punct	_
10	в	в	ADP	_	_	11	case	11:case	_
11	Калкоте	калкота	PROPN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	6	orphan	6:orphan	_
11.1	_	_	_	_	_	_	_	6:conj	_
12	еще	еще	ADV	_	Degree=Pos	13	advmod	13:advmod	_
13	четверо	четверо	NUM	_	Case=Nom	6	orphan	6:orphan	SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	13:punct	_
15	один	один	NUM	_	Case=Nom|Gender=Masc	17	nsubj	17:nsubj	_
16	был	быть	AUX	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	17	aux:pass	17:aux:pass	_
17	убит	убивать	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	6	conj	6:conj	_
18	в	в	ADP	_	_	19	case	19:case	_
19	Ламджунге	ламджунг	PROPN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	17	obl	17:obl	SpaceAfter=No
20	.	.	PUNCT	_	_	19	punct	19:punct	_

~~~


