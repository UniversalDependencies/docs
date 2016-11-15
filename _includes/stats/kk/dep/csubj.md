

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

31 nodes (0%) are attached to their parents as `csubj`.

30 instances of `csubj` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.32258064516129.

The following 5 pairs of parts of speech are connected with `csubj`: [kk-pos/ADJ]()-[kk-pos/VERB]() (13; 42% instances), [kk-pos/VERB]()-[kk-pos/VERB]() (12; 39% instances), [kk-pos/NOUN]()-[kk-pos/VERB]() (3; 10% instances), [kk-pos/PRON]()-[kk-pos/VERB]() (2; 6% instances), [kk-pos/ADJ]()-[kk-pos/NOUN]() (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 csubj	color:blue
1	Орысша	орысша	NOUN	n	_	2	dobj	_	nom
2	оқу	оқы	VERB	v	_	3	csubj	_	tv|ger|nom
3	_	керек	ADJ	adj	_	20	parataxis	_	_
4	_	е	AUX	cop	_	3	cop	_	aor|p3|sg
5	,	,	PUNCT	cm	_	20	punct	_	_
6	_	хикмет	NOUN	n	_	15	conj	_	nom
7	_	да	CONJ	cnjcoo	_	15	cc	_	_
8	,	,	PUNCT	cm	_	15	punct	_	_
9	_	мал	NOUN	n	_	15	conj	_	nom
10	_	да	CONJ	cnjcoo	_	15	cc	_	_
11	,	,	PUNCT	cm	_	15	punct	_	_
12	_	өнер	NOUN	n	_	15	conj	_	nom
13	_	да	CONJ	cnjcoo	_	15	cc	_	_
14	,	,	PUNCT	cm	_	15	punct	_	_
15	_	ғылым	NOUN	n	_	18	appos	_	nom
16	_	да	CONJ	cnjcoo	_	15	cc	_	_
17	—	—	PUNCT	guio	_	15	punct	_	_
18	бәрі	бәрі	PRON	prn	_	20	nsubj	_	qnt|px3sp|nom
19	орыста	орыс	NOUN	n	_	20	nmod	_	loc
20	тұр	тұр	VERB	v	_	0	root	_	iv|pres|p3|sg
21	.	.	PUNCT	sent	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 csubj	color:blue
1	Мамандарды	маман	NOUN	n	_	2	dobj	_	pl|acc
2	дайындау	дайында	VERB	v	_	8	csubj	_	tv|ger|nom
3	факультетте	факультет	NOUN	n	_	8	nmod	_	loc
4	тек	тек	ADV	adv	_	6	advmod	_	_
5	күндізгі	күндіз	ADV	adv	_	6	amod	_	attr
6	_	бөлім	NOUN	n	_	8	nmod	_	loc
7	_	ғана	PART	postadv	_	6	advmod	_	_
8	жүргізіледі	жүргіз	VERB	v	_	0	root	_	tv|pass|aor|p3|sg
9	.	.	PUNCT	sent	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 csubj	color:blue
1	Марқакөлді	Марқакөл	PROPN	np	Case=Acc	2	dobj	_	Марқакөл|np|top|acc
2	алқалаған	алқала	VERB	v	Case=Nom|Tense=Past|VerbForm=Ger	7	csubj	_	алқала|v|tv|gerpast|nom
3	—	_	PUNCT	guio	_	7	punct	_	—|guio
4	ақ	ақ	ADJ	adj	_	5	amod	_	_
5	ауылды	ауылды	ADJ	adj	_	6	amod	_	ауылды|adj
6	Алтай	Алтай	PROPN	np	Case=Nom	7	compound	_	Алтай|np|attr
7	_	ел	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	0	root	_	ел|n|px3sp|nom
8	_	е	AUX	cop	Number=Sing|Person=3|Tense=Aor	7	cop	_	е|cop|aor|p3|sg
9	.	_	PUNCT	sent	_	7	punct	_	.|sent

~~~


