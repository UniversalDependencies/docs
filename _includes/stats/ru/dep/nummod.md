

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is universal.
There are 2 language-specific subtypes of `nummod`: [nummod:entity](), [nummod:gov]().

530 nodes (1%) are attached to their parents as `nummod`.

522 instances of `nummod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31132075471698.

The following 11 pairs of parts of speech are connected with `nummod`: [ru-pos/NOUN]()-[ru-pos/NUM]() (464; 88% instances), [ru-pos/SYM]()-[ru-pos/NUM]() (35; 7% instances), [ru-pos/ADJ]()-[ru-pos/NUM]() (9; 2% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (6; 1% instances), [ru-pos/NUM]()-[ru-pos/NUM]() (5; 1% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (4; 1% instances), [ru-pos/NUM]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/PROPN]()-[ru-pos/NUM]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/PUNCT]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	Сено	СЕНО	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	_
2	(	(	PUNCT	(	_	1	punct	_	_
3	)	)	PUNCT	)	_	1	punct	_	_
4	--	--	PUNCT	--	_	5	punct	_	_
5	одна	ОДИН	NUM	CD	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
6	из	ИЗ	ADP	IN	_	8	case	_	_
7	45	45	NUM	CD	Case=Gen	8	nummod	_	_
8	провинций	ПРОВИНЦИЯ	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	5	nmod	_	_
9	Буркина	БУРКИНА	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
10	-	-	PUNCT	-	_	9	goeswith	_	_
11	Фасо	ФАСО	ADV	AFX	_	9	goeswith	_	_
12	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	Температура	ТЕМПЕРАТУРА	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
2	ее	ЕЕ	DET	PRP$	Person=3	1	det	_	_
3	летом	ЛЕТО	NOUN	RB	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	5	nmod	_	_
4	не	НЕ	PART	NEG	_	5	neg	_	_
5	превышает	ПРЕВЫШАТЬ	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	+	+	SYM	SYM	_	7	punct	_	_
7	15	15	NUM	CD	Case=Gen	8	nummod	_	_
8	°	°	SYM	SYM	_	5	dobj	_	_
9	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	За	ЗА	ADP	IN	_	2	case	_	_
2	годы	ГОД	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	4	nmod	_	_
3	войны	ВОЙНА	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
4	погибло	ПОГИБНУТЬ	VERB	VBC	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
5	около	ОКОЛО	ADP	IN	_	7	case	_	_
6	девяти	ДЕВЯТЬ	NUM	CD	Case=Gen	7	nummod	_	_
7	десятых	ДЕСЯТЫЙ	ADJ	ORD	Animacy=Inan|Case=Gen|Number=Plur	10	nmod	_	_
8	основных	ОСНОВНОЙ	ADJ	JJL	Animacy=Inan|Case=Gen|Number=Plur|Variant=Full	10	amod	_	_
9	лесных	ЛЕСНОЙ	ADJ	JJL	Animacy=Inan|Case=Gen|Number=Plur|Variant=Full	10	amod	_	_
10	богатств	БОГАТСТВО	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	4	nmod	_	_
11	лесопарка	ЛЕСОПАРК	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	_
12	.	.	PUNCT	.	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is universal.
There are 2 language-specific subtypes of `nummod`: [nummod:entity](), [nummod:gov]().

11759 nodes (1%) are attached to their parents as `nummod`.

8866 instances of `nummod` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.67573773280041.

The following 14 pairs of parts of speech are connected with `nummod`: [ru-pos/NOUN]()-[ru-pos/NUM]() (8279; 70% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (994; 8% instances), [ru-pos/NUM]()-[ru-pos/NUM]() (937; 8% instances), [ru-pos/SYM]()-[ru-pos/NUM]() (832; 7% instances), [ru-pos/PROPN]()-[ru-pos/NUM]() (540; 5% instances), [ru-pos/ADJ]()-[ru-pos/NUM]() (119; 1% instances), [ru-pos/ADV]()-[ru-pos/NUM]() (39; 0% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (5; 0% instances), [ru-pos/PRON]()-[ru-pos/NUM]() (4; 0% instances), [ru-pos/X]()-[ru-pos/NUM]() (4; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADV]() (2; 0% instances), [ru-pos/SCONJ]()-[ru-pos/NUM]() (2; 0% instances), [ru-pos/CONJ]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Всего	всего	ADV	_	Degree=Pos	3	advmod	_	_
2	-	-	PUNCT	-	_	1	punct	_	_
3	440	440	NUM	_	_	4	nummod	_	_
4	человек	человек	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
5	,	,	PUNCT	,	_	4	punct	_	_
6	из	из	ADP	_	_	7	case	_	_
7	них	они	PRON	_	_	11	advmod	_	_
8	-	-	PUNCT	-	_	7	punct	_	_
9	160	160	NUM	_	_	11	nummod	_	_
10	иностранных	иностранный	ADJ	_	Case=Gen|Degree=Pos|Number=Plur	11	amod	_	_
11	восходителей	восходитель	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	4	conj	_	_
12	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nummod	color:blue
1	23	23	NUM	_	_	6	nummod	_	_
2	января	январь	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	2002	2002	NUM	_	_	4	nummod	_	_
4	года	год	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
5	не	не	PART	_	_	6	neg	_	_
6	стало	стать	VERB	_	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	Пьера	пьер	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	6	nsubj	_	_
8	Бурдье	бурдье	PROPN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	7	name	_	_
9	…	…	PUNCT	…	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nummod	color:blue
1	Делает	делать	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	по	по	ADP	_	_	10	case	_	_
3	60	60	NUM	_	_	10	nummod	_	_
4	,	,	PUNCT	,	_	3	punct	_	_
5	70	70	NUM	_	_	3	nummod	_	_
6	,	,	PUNCT	,	_	5	punct	_	_
7	80	80	NUM	_	_	5	nummod	_	_
8	,	,	PUNCT	,	_	7	punct	_	_
9	90	90	NUM	_	_	7	nummod	_	_
10	дублей	дубль	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	1	nsubj	_	_
11	…	…	PUNCT	…	_	1	punct	_	_

~~~


