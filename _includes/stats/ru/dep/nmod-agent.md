

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-Syntagrus)

This relation is a language-specific subtype of [nmod]().

1835 nodes (0%) are attached to their parents as `nmod:agent`.

1664 instances of `nmod:agent` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.9591280653951.

The following 12 pairs of parts of speech are connected with `nmod:agent`: [ru-pos/VERB]()-[ru-pos/NOUN]() (1427; 78% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (182; 10% instances), [ru-pos/VERB]()-[ru-pos/PRON]() (174; 9% instances), [ru-pos/VERB]()-[ru-pos/ADJ]() (22; 1% instances), [ru-pos/NOUN]()-[ru-pos/PRON]() (15; 1% instances), [ru-pos/ADJ]()-[ru-pos/NOUN]() (6; 0% instances), [ru-pos/ADJ]()-[ru-pos/PRON]() (3; 0% instances), [ru-pos/NOUN]()-[ru-pos/ADJ]() (2; 0% instances), [ru-pos/VERB]()-[ru-pos/NUM]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/SYM]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nmod:agent	color:blue
1	Донато	ДОНАТО	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	установил	УСТАНАВЛИВАТЬ	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	,	,	PUNCT	,	_	2	punct	_	_
4	что	ЧТО	SCONJ	_	_	6	mark	_	_
5	они	ОНИ	PRON	_	_	6	nsubjpass	_	_
6	сделаны	ДЕЛАТЬ	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|Variant=Brev|VerbForm=Part|Voice=Pass	2	advcl	_	_
7	человеком	ЧЕЛОВЕК	NOUN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	nmod:agent	_	_
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod:agent	color:blue
1	Выдача	ВЫДАЧА	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	Колчака	КОЛЧАК	NOUN	_	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	1	dobj	_	_
3	союзниками	СОЮЗНИК	NOUN	_	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur	1	nmod:agent	_	_
4	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod:agent	color:blue
1	При	ПРИ	ADP	_	_	3	case	_	_
2	такой	ТАКОЙ	DET	_	Case=Loc|Gender=Fem|Number=Sing	3	amod	_	_
3	структуре	СТРУКТУРА	NOUN	_	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	6	nmod	_	_
4	этот	ЭТОТ	DET	_	Case=Nom|Gender=Masc|Number=Sing	5	amod	_	_
5	вопрос	ВОПРОС	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubjpass	_	_
6	снимается	СНИМАТЬ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
7	сам	САМ	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	8	mwe	_	_
8	собой	СЕБЯ	PRON	_	_	6	nmod:agent	_	_
9	.	.	PUNCT	.	_	6	punct	_	_

~~~


