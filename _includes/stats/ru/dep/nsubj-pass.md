

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is a language-specific subtype of [nsubj]().

588 nodes (1%) are attached to their parents as `nsubj:pass`.

401 instances of `nsubj:pass` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.01020408163265.

The following 11 pairs of parts of speech are connected with `nsubj:pass`: [ru-pos/VERB]()-[ru-pos/NOUN]() (470; 80% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (54; 9% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (36; 6% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (11; 2% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (3; 1% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (3; 1% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (3; 1% instances), [ru-pos/VERB]()-[ru-pos/DET]() (3; 1% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (3; 1% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Текст	ТЕКСТ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	написан	НАПИСАТЬ	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
4	по	ПО	ADP	AFX	_	3	advmod	_	_
5	-	-	PUNCT	-	_	4	goeswith	_	_
6	латыни	ЛАТЫНИ	ADV	AFX	_	4	goeswith	_	SpaceAfter=No
7	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Дун	ДУН	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	захвачен	ЗАХВАТИТЬ	VERB	VBNH	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
4	якобитами	ЯКОБИТ	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur	3	iobj	_	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	_
6	которые	КОТОРЫЙ	PRON	AWP	Animacy=Anim|Case=Nom|Number=Plur	7	nsubj	_	_
7	устроили	УСТРОИТЬ	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	4	acl:relcl	_	_
8	в	В	ADP	IN	_	9	case	_	_
9	замке	ЗАМОК	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	obl	_	_
10	тюрьму	ТЮРЬМА	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	7	obj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nsubj:pass	color:blue
1	На	НА	ADP	IN	_	3	case	_	_
2	следующий	СЛЕДУЮЩИЙ	ADJ	JJL	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	amod	_	_
3	день	ДЕНЬ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	obl	_	_
4	после	ПОСЛЕ	ADP	IN	_	5	case	_	_
5	возвращения	ВОЗВРАЩЕНИЕ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	8	obl	_	_
6	он	ОН	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	nsubj:pass	_	_
7	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	8	aux:pass	_	_
8	арестован	АРЕСТОВАТЬ	VERB	VBNH	Animacy=Anim|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is a language-specific subtype of [nsubj]().

4631 nodes (0%) are attached to their parents as `nsubj:pass`.

2921 instances of `nsubj:pass` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.82422802850356.

The following 25 pairs of parts of speech are connected with `nsubj:pass`: [ru-pos/VERB]()-[ru-pos/NOUN]() (3576; 77% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (663; 14% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (118; 3% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (93; 2% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (57; 1% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (51; 1% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (23; 0% instances), [ru-pos/VERB]()-[ru-pos/DET]() (15; 0% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (6; 0% instances), [ru-pos/PART]()-[ru-pos/NOUN]() (4; 0% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (3; 0% instances), [ru-pos/PUNCT]()-[ru-pos/NOUN]() (3; 0% instances), [ru-pos/ADP]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/ADP]()-[ru-pos/PRON]() (2; 0% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/PART]()-[ru-pos/PRON]() (2; 0% instances), [ru-pos/PRON]()-[ru-pos/PRON]() (2; 0% instances), [ru-pos/_]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/PUNCT]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/SCONJ]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/SCONJ]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nsubj:pass	color:blue
1	Например	например	ADV	_	Degree=Pos	6	parataxis	6:parataxis	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	1:punct	_
3	для	для	ADP	_	_	4	case	4:case	_
4	описания	описание	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	6	iobj	6:iobj	_
5	алгоритма	алгоритм	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	4	nmod	4:nmod	_
6	применяются	применять	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	_
7	блок-схемы	блок-схема	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	6	nsubj:pass	6:nsubj:pass	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj:pass	color:blue
1	Донато	донато	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	установил	устанавливать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	2:punct	_
4	что	что	SCONJ	_	_	2	mark	2:mark	_
5	они	они	PRON	_	Case=Nom|Number=Plur|Person=3	6	nsubj:pass	6:nsubj:pass	_
6	сделаны	делать	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	2	advcl	2:advcl	_
7	человеком	человек	NOUN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	obl:agent	6:obl:agent	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nsubj:pass	color:blue
1	Объявили	объявлять	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	1:punct	_
3	что	что	SCONJ	_	_	1	mark	1:mark	_
4	решено	решать	VERB	_	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	1	advcl	1:advcl	_
5	продлить	продлевать	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	4	nsubj:pass	4:nsubj:pass	_
6	испытания	испытание	NOUN	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur	5	obj	5:obj	_
7	на	на	ADP	_	_	8	case	8:case	_
8	сутки	сутки	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	5	obl	5:obl	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	8:punct	_

~~~


