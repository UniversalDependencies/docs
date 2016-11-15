

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Ukrainian)

This relation is universal.

43 nodes (3%) are attached to their parents as `amod`.

41 instances of `amod` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16279069767442.

The following 6 pairs of parts of speech are connected with `amod`: [uk-pos/NOUN]()-[uk-pos/ADJ]() (34; 79% instances), [uk-pos/NUM]()-[uk-pos/ADJ]() (3; 7% instances), [uk-pos/ADJ]()-[uk-pos/ADJ]() (2; 5% instances), [uk-pos/PROPN]()-[uk-pos/ADJ]() (2; 5% instances), [uk-pos/DET]()-[uk-pos/ADJ]() (1; 2% instances), [uk-pos/PRON]()-[uk-pos/ADJ]() (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	Не	не	PART	part	_	2	neg	_	_
2	цілих	цілий	ADJ	adj:p:v_rod	Case=Gen|Number=Plur	3	amod	_	_
3	50	50	NUM	numr	NumType=Card	5	nummod:gov	_	_
4	мільйонів	мільйон	NUM	numr	NumType=Card	3	compound	_	_
5	доларів	долар	NOUN	noun:inanim:p:m:v_rod	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	6	dobj	_	SpaceAfter=No
6	зароблено	заробити	VERB	verb:perf:impers:v-u	Aspect=Perf|VerbForm=Imps	0	root	_	_
7	.	.	PUNCT	punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 amod	color:blue
1	В	в	ADP	prep:rv_mis:v-u	Case=Loc	5	case	_	_
2	не	не	PART	part	_	3	neg	_	_
3	так	так	ADV	adv&pron:dem	_	4	advmod	_	_
4	далекому	далекий	ADJ	adj:n:v_mis:compb	Case=Loc|Degree=Pos|Gender=Neut	5	amod	_	_
5	минулому	минулий	ADJ	adj:n:v_mis:&adjp:perf:actv	Aspect=Perf|Case=Loc|Gender=Neut|VerbForm=Part|Voice=Act	7	nmod	_	_
6	це	це	PRON	noun:inanim:n:v_naz:&pron:dem	Animacy=Inan|Case=Nom|Gender=Neut|PronType=Dem	7	nsubj	_	_
7	сталося	статися	VERB	verb:rev:perf:past:n	Aspect=Perf|Gender=Neut|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	7	punct	_	_

~~~


