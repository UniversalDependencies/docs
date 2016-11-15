

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian)

This relation is a language-specific subtype of [nmod]().

6 nodes (0%) are attached to their parents as `nmod:agent`.

4 instances of `nmod:agent` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.5.

The following 2 pairs of parts of speech are connected with `nmod:agent`: [ru-pos/VERB]()-[ru-pos/PRON]() (4; 67% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (2; 33% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:agent	color:blue
1	Им	ОН	PRON	PRP	Case=Ins|Gender=Masc|Number=Sing|Person=3	3	nmod:agent	_	_
2	был	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	3	auxpass	_	_
3	создан	СОЗДАТЬ	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Brev|VerbForm=Part|Voice=Pass	0	root	_	_
4	ансамбль	АНСАМБЛЬ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubjpass	_	_
5	``	``	PUNCT	``	_	6	punct	_	_
6	Бяседа	БЯСЕДА	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	appos	_	_
7	&#39;&#39;	&#39;&#39;	PUNCT	&#39;&#39;	_	6	punct	_	_
8	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod:agent	color:blue
1	Однако	ОДНАКО	CONJ	CC	_	5	cc	_	_
2	это	ЭТОТ	DET	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	3	det	_	_
3	заявление	ЗАЯВЛЕНИЕ	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	5	nsubjpass	_	_
4	было	БЫТЬ	AUX	VBC	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	5	auxpass	_	_
5	опровергнуто	ОПРОВЕРГНУТЬ	VERB	VBNH	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Brev|VerbForm=Part|Voice=Pass	0	root	_	_
6	адвокатом	АДВОКАТ	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	7	nmod	_	_
7	Роу	РОУ	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Fem|Number=Sing	5	nmod:agent	_	_
8	--	--	PUNCT	--	_	7	punct	_	_
9	Мартой	МАРТА	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Fem|Number=Sing	7	name	_	_
10	Алмли	АЛМЛИ	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Fem|Number=Sing	7	name	_	_
11	.	.	PUNCT	.	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is a language-specific subtype of [nmod]().

1921 nodes (0%) are attached to their parents as `nmod:agent`.

1747 instances of `nmod:agent` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.97241020301926.

The following 15 pairs of parts of speech are connected with `nmod:agent`: [ru-pos/VERB]()-[ru-pos/NOUN]() (1274; 66% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (225; 12% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (179; 9% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (158; 8% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (30; 2% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (23; 1% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (15; 1% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (6; 0% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (3; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (2; 0% instances), [ru-pos/PROPN]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nmod:agent	color:blue
1	Донато	донато	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	установил	устанавливать	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	,	,	PUNCT	,	_	2	punct	_	_
4	что	что	SCONJ	_	_	6	mark	_	_
5	они	они	PRON	_	_	6	nsubjpass	_	_
6	сделаны	делать	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Brev|VerbForm=Part|Voice=Pass	2	advcl	_	_
7	человеком	человек	NOUN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	nmod:agent	_	_
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nmod:agent	color:blue
1	Разберем	разбирать	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
2	теперь	теперь	ADV	_	Degree=Pos	1	advmod	_	_
3	по	по	ADP	_	_	4	case	_	_
4	пунктам	пункт	NOUN	_	Animacy=Inan|Case=Dat|Gender=Masc|Number=Plur	1	nmod	_	_
5	сказанное	сказать	VERB	_	Aspect=Perf|Case=Acc|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	1	xcomp	_	_
6	Патрушевым	патрушев	PROPN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	5	nmod:agent	_	_
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod:agent	color:blue
1	Хорошо	хороший	ADJ	_	Degree=Pos|Gender=Neut|Number=Sing|Variant=Brev	0	root	_	_
2	,	,	PUNCT	,	_	1	punct	_	_
3	если	если	SCONJ	_	_	9	mark	_	_
4	"	"	PUNCT	"	_	5	punct	_	_
5	реставрированные	реставрировать	VERB	_	Animacy=Inan|Aspect=Perf|Case=Acc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	8	amod	_	_
6	"	"	PUNCT	"	_	5	punct	_	_
7	ими	они	PRON	_	_	5	nmod:agent	_	_
8	памятники	памятник	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	10	dobj	_	_
9	удается	удаваться	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl	_	_
10	спасти	спасать	VERB	_	Aspect=Perf|VerbForm=Inf	9	nsubj	_	_
11	.	.	PUNCT	.	_	1	punct	_	_

~~~


