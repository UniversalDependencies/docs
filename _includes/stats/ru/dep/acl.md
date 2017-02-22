

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

1006 nodes (1%) are attached to their parents as `acl`.

654 instances of `acl` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.04572564612326.

The following 20 pairs of parts of speech are connected with `acl`: [ru-pos/NOUN]()-[ru-pos/VERB]() (876; 87% instances), [ru-pos/PROPN]()-[ru-pos/VERB]() (41; 4% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (27; 3% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (13; 1% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (10; 1% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (10; 1% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (6; 1% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (5; 0% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (4; 0% instances), [ru-pos/ADP]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/PRON]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/PUNCT]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/ADV]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl	color:blue
1	В	В	ADP	IN	_	2	case	_	_
2	выборах	ВЫБОРЫ	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	3	obl	_	_
3	могли	МОЧЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
4	участвовать	УЧАСТВОВАТЬ	VERB	VB	Aspect=Imp|VerbForm=Inf	3	xcomp	_	_
5	только	ТОЛЬКО	PART	UH	_	6	discourse	_	_
6	граждане	ГРАЖДАНИН	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	,	_	8	punct	_	_
8	платящие	ПЛАТИТЬ	VERB	VBNL	Animacy=Anim|Aspect=Imp|Case=Nom|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	6	acl	_	_
9	налоги	НАЛОГ	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 acl	color:blue
1	Бирюкова	БИРЮКОВ	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	0	root	_	_
2	помещено	ПОМЕСТИТЬ	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	1	flat	_	_
3	в	В	ADP	IN	_	4	case	_	_
4	числе	ЧИСЛО	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	1	obl	_	_
5	лиц	ЛИЦО	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Neut|Number=Plur	4	nmod	_	SpaceAfter=No
6	,	,	PUNCT	,	_	7	punct	_	_
7	содействующих	СОДЕЙСТВОВАТЬ	VERB	VBNL	Animacy=Anim|Aspect=Imp|Case=Gen|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Act	1	acl	_	_
8	полноте	ПОЛНОТА	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	7	iobj	_	_
9	выпуска	ВЫПУСК	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 acl	color:blue
1	Иногда	ИНОГДА	ADV	RB	_	2	advmod	_	_
2	применяется	ПРИМЕНЯТЬСЯ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
3	,	,	PUNCT	,	_	6	punct	_	_
4	в	В	ADP	IN	_	6	case	_	_
5	неофициальной	НЕОФИЦИАЛЬНЫЙ	ADJ	JJL	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	6	amod	_	_
6	обстановке	ОБСТАНОВКА	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	2	obl	_	SpaceAfter=No
7	,	,	PUNCT	,	_	6	punct	_	_
8	сокращённое	СОКРАЩЕННЫЙ	ADJ	JJL	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	9	acl	_	_
9	название	НАЗВАНИЕ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	2	nsubj:pass	_	_
10	``	``	PUNCT	``	_	11	punct	_	SpaceAfter=No
11	кап	КАП	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	9	appos	_	_
12	-	-	PUNCT	-	_	11	goeswith	_	_
13	три	ТРИ	ADV	AFX	_	11	goeswith	_	_
14	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	11	punct	_	SpaceAfter=No
15	.	.	PUNCT	.	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

1946 nodes (0%) are attached to their parents as `acl`.

1313 instances of `acl` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.97482014388489.

The following 45 pairs of parts of speech are connected with `acl`: [ru-pos/VERB]()-[ru-pos/ADJ]() (481; 25% instances), [ru-pos/PRON]()-[ru-pos/VERB]() (402; 21% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (327; 17% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (202; 10% instances), [ru-pos/VERB]()-[ru-pos/NOUN]() (91; 5% instances), [ru-pos/PRON]()-[ru-pos/ADJ]() (81; 4% instances), [ru-pos/VERB]()-[ru-pos/DET]() (47; 2% instances), [ru-pos/ADV]()-[ru-pos/VERB]() (41; 2% instances), [ru-pos/NOUN]()-[ru-pos/VERB]() (39; 2% instances), [ru-pos/NOUN]()-[ru-pos/DET]() (36; 2% instances), [ru-pos/ADJ]()-[ru-pos/ADJ]() (22; 1% instances), [ru-pos/DET]()-[ru-pos/VERB]() (20; 1% instances), [ru-pos/PROPN]()-[ru-pos/ADJ]() (20; 1% instances), [ru-pos/ADJ]()-[ru-pos/VERB]() (16; 1% instances), [ru-pos/ADV]()-[ru-pos/NOUN]() (12; 1% instances), [ru-pos/PRON]()-[ru-pos/ADV]() (12; 1% instances), [ru-pos/DET]()-[ru-pos/ADJ]() (10; 1% instances), [ru-pos/PRON]()-[ru-pos/NOUN]() (10; 1% instances), [ru-pos/ADV]()-[ru-pos/ADJ]() (8; 0% instances), [ru-pos/PROPN]()-[ru-pos/VERB]() (8; 0% instances), [ru-pos/PRON]()-[ru-pos/DET]() (7; 0% instances), [ru-pos/DET]()-[ru-pos/NOUN]() (6; 0% instances), [ru-pos/PRON]()-[ru-pos/PRON]() (6; 0% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (6; 0% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (6; 0% instances), [ru-pos/ADV]()-[ru-pos/DET]() (3; 0% instances), [ru-pos/NUM]()-[ru-pos/ADJ]() (3; 0% instances), [ru-pos/ADJ]()-[ru-pos/DET]() (2; 0% instances), [ru-pos/ADV]()-[ru-pos/ADV]() (2; 0% instances), [ru-pos/DET]()-[ru-pos/DET]() (2; 0% instances), [ru-pos/DET]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/PRON]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/ADP]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/AUX]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/NUM]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/PART]()-[ru-pos/VERB]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/PUNCT]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/SCONJ]() (1; 0% instances), [ru-pos/_]()-[ru-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl	color:blue
1	Чтобы	чтобы	SCONJ	_	Mood=Cnd	3	cc	3:cc	_
2	не	не	PART	_	_	3	advmod	3:advmod	_
3	эволюционировать	эволюционировать	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	0	root	0:root	_
4	самим	сам	ADJ	_	Case=Dat|Degree=Pos|Number=Plur	3	acl	3:acl	_
5	как	как	ADV	_	Degree=Pos	6	fixed	6:fixed	_
6	можно	можно	ADV	_	Degree=Pos	7	advmod	7:advmod	_
7	дольше	долго	ADV	_	Degree=Cmp	3	advmod	3:advmod	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 acl	color:blue
1	До	до	ADP	_	_	4	advmod	4:advmod	_
2	сих	сей	DET	_	Case=Gen|Number=Plur	1	fixed	1:fixed	_
3	пор	пора	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	2	fixed	2:fixed	_
4	идут	идти	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	споры	спор	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	4	nsubj	4:nsubj	_
6	о	о	ADP	_	_	7	case	7:case	_
7	том	то	PRON	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	5	nmod	5:nmod	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	7:punct	_
9	достигли	достигать	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	7	acl	7:acl	_
10	они	они	PRON	_	Case=Nom|Number=Plur|Person=3	9	nsubj	9:nsubj	_
11	вершины	вершина	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	9	obl	9:obl	_
12	или	или	CCONJ	_	_	9	orphan	13.1:cc	_
13	нет	нет	PART	_	_	9	orphan	13.1:advmod	SpaceAfter=No
13.1	_	_	_	_	_	_	_	9:conj	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 acl	color:blue
1	Уж	уж	PART	_	_	3	advmod	3:advmod	_
2	не	не	PART	_	_	3	advmod	3:advmod	_
3	говоря	говорить	VERB	_	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	0	root	0:root	_
4	о	о	ADP	_	_	5	case	5:case	_
5	том	то	PRON	_	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	3	obl	3:obl	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	5:punct	_
7	что	что	SCONJ	_	_	5	cc	5:cc	_
8	искусство	искусство	NOUN	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	11	nsubj	11:nsubj	_
9	само	сам	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	11	acl	11:acl	_
10	-	-	PUNCT	_	_	9	punct	9:punct	_
11	действительность	действительность	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	5	advcl	5:advcl	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	11:punct	_

~~~


