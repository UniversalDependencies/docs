

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

92 nodes (5%) are attached to their parents as `dobj`.

64 instances of `dobj` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.47826086956522.

The following 7 pairs of parts of speech are connected with `dobj`: [uk-pos/VERB]()-[uk-pos/NOUN]() (55; 60% instances), [uk-pos/VERB]()-[uk-pos/PRON]() (29; 32% instances), [uk-pos/VERB]()-[uk-pos/ADJ]() (3; 3% instances), [uk-pos/ADV]()-[uk-pos/PRON]() (2; 2% instances), [uk-pos/DET]()-[uk-pos/PRON]() (1; 1% instances), [uk-pos/NOUN]()-[uk-pos/DET]() (1; 1% instances), [uk-pos/NOUN]()-[uk-pos/NOUN]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 dobj	color:blue
1	Павло	Павло	PROPN	noun:anim:m:v_naz:prop:fname	Animacy=Anim|Case=Nom|Gender=Masc	2	nsubj	_	_
2	виграв	виграти	VERB	verb:perf:past:m	Aspect=Perf|Gender=Masc|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	золоту	золотий	ADJ	adj:f:v_zna	Case=Acc|Gender=Fem	4	amod	_	_
4	медаль	медаль	NOUN	noun:inanim:f:v_zna	Animacy=Inan|Case=Acc|Gender=Fem	2	dobj	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	2	punct	_	_
6	Тарас	Тарас	PROPN	noun:anim:m:v_naz:prop:fname	Animacy=Anim|Case=Nom|Gender=Masc	1	remnant	_	_
7	—	—	PUNCT	punct	_	2	punct	_	_
8	срібну	срібний	ADJ	adj:f:v_zna	Case=Acc|Gender=Fem	3	remnant	_	SpaceAfter=No
9	,	,	PUNCT	punct	_	2	punct	_	_
10	а	а	CONJ	conj:coord	_	13	discourse	_	_
11	Петро	Петро	PROPN	noun:anim:m:v_naz:prop:fname	Animacy=Anim|Case=Nom|Gender=Masc	6	remnant	_	_
12	—	—	PUNCT	punct	_	2	punct	_	_
13	бронзову	бронзовий	ADJ	adj:f:v_zna	Case=Acc|Gender=Fem	8	remnant	_	SpaceAfter=No
14	.	.	PUNCT	punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 dobj	color:blue
1	Нічого	ніщо	PRON	noun:inanim:v_rod:&pron:neg	Animacy=Inan|Case=Gen|PronType=Neg	3	dobj	_	_
2	не	не	PART	part	_	3	neg	_	_
3	пригадую	пригадувати	VERB	verb:imperf:pres:s:1	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	.	.	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 dobj	color:blue
1	Університет	університет	NOUN	noun:inanim:m:v_naz	Animacy=Inan|Case=Nom|Gender=Masc	3	nsubj	_	_
2	не	не	PART	part	_	3	neg	_	_
3	володіє	володіти	VERB	verb:imperf:pres:s:3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	такими	такий	DET	adj:p:v_oru:&pron:dem	Case=Ins|Number=Plur|PronType=Dem	5	det	_	_
5	даними	даний	ADJ	adj:p:v_oru:&adjp:perf:pasv	Aspect=Perf|Case=Ins|Number=Plur|VerbForm=Part|Voice=Pass	3	dobj	_	SpaceAfter=No
6	.	.	PUNCT	punct	_	3	punct	_	_

~~~


