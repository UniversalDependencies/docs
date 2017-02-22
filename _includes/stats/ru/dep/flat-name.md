

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Russian-SynTagRus)

This relation is a language-specific subtype of [flat]().
There are also 1 other language-specific subtypes of `flat`: [flat:foreign]().

4824 nodes (0%) are attached to their parents as `flat:name`.

4822 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08644278606965.

The following 29 pairs of parts of speech are connected with `flat:name`: [ru-pos/PROPN]()-[ru-pos/PROPN]() (4572; 95% instances), [ru-pos/PART]()-[ru-pos/PROPN]() (83; 2% instances), [ru-pos/NOUN]()-[ru-pos/PROPN]() (77; 2% instances), [ru-pos/ADV]()-[ru-pos/PART]() (26; 1% instances), [ru-pos/NOUN]()-[ru-pos/NOUN]() (9; 0% instances), [ru-pos/PART]()-[ru-pos/SCONJ]() (7; 0% instances), [ru-pos/_]()-[ru-pos/PROPN]() (6; 0% instances), [ru-pos/PART]()-[ru-pos/PRON]() (5; 0% instances), [ru-pos/ADV]()-[ru-pos/ADV]() (4; 0% instances), [ru-pos/ADV]()-[ru-pos/SCONJ]() (4; 0% instances), [ru-pos/PART]()-[ru-pos/PART]() (3; 0% instances), [ru-pos/PROPN]()-[ru-pos/PRON]() (3; 0% instances), [ru-pos/VERB]()-[ru-pos/PROPN]() (3; 0% instances), [ru-pos/ADP]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/CCONJ]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/PRON]()-[ru-pos/PART]() (2; 0% instances), [ru-pos/PRON]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/PUNCT]()-[ru-pos/PROPN]() (2; 0% instances), [ru-pos/VERB]()-[ru-pos/VERB]() (2; 0% instances), [ru-pos/ADJ]()-[ru-pos/PART]() (1; 0% instances), [ru-pos/ADJ]()-[ru-pos/PROPN]() (1; 0% instances), [ru-pos/ADV]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/INTJ]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/PRON]()-[ru-pos/PRON]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/NOUN]() (1; 0% instances), [ru-pos/PROPN]()-[ru-pos/X]() (1; 0% instances), [ru-pos/SCONJ]()-[ru-pos/ADJ]() (1; 0% instances), [ru-pos/VERB]()-[ru-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat:name	color:blue
1	Наибольшую	наибольший	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	2	amod	2:amod	_
2	известность	известность	NOUN	_	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	5	obj	5:obj	_
3	среди	среди	ADP	_	_	4	case	4:case	_
4	них	они	PRON	_	Case=Gen|Number=Plur|Person=3	2	nmod	2:nmod	_
5	имел	иметь	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	Андрей	андрей	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	_
7	Васильевич	васильевич	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	6	flat:name	6:flat:name	_
8	Пастухов	пастухов	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	7	flat:name	7:flat:name	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	Командующего	командующий	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	6	obj	6:obj	_
2	рейхсвером	рейхсвер	NOUN	_	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	1	nmod	1:nmod	_
3	Ганса	ганс	PROPN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	1	appos	1:appos	_
4	фон	фон	PART	_	_	3	appos	3:appos	_
5	Секта	сект	PROPN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	4	flat:name	4:flat:name	_
6	прочили	прочить	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	в	в	ADP	_	_	8	case	8:case	_
8	диктаторы	диктатор	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	6	obl	6:obl	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:name	color:blue
1	(	(	PUNCT	_	_	2	punct	2:punct	SpaceAfter=No
2	Ю.	ю.	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	_
3	Казаков	казаков	PROPN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	flat:name	2:flat	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	3:punct	_
5	Двое	двое	NUM	_	Case=Nom	3	conj	3:conj	_
6	в	в	ADP	_	_	7	case	7:case	_
7	декабре	декабрь	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	nmod	5:nmod	SpaceAfter=No
8	)	)	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
9	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


