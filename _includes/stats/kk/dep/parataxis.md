

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

16 nodes (3%) are attached to their parents as `parataxis`.

16 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.0625.

The following 7 pairs of parts of speech are connected with `parataxis`: [kk-pos/NOUN]()-[kk-pos/VERB]() (6; 38% instances), [kk-pos/VERB]()-[kk-pos/VERB]() (3; 19% instances), [kk-pos/ADJ]()-[kk-pos/NOUN]() (2; 13% instances), [kk-pos/VERB]()-[kk-pos/ADJ]() (2; 13% instances), [kk-pos/ADJ]()-[kk-pos/ADJ]() (1; 6% instances), [kk-pos/ADJ]()-[kk-pos/VERB]() (1; 6% instances), [kk-pos/NOUN]()-[kk-pos/NOUN]() (1; 6% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 12 parataxis	color:blue
1	Бітеу	бітеу	ADJ	adj	_	2	amod	_	_
2	жара	жара	NOUN	n	Case=Nom	0	root	_	_
3	болды	бол	AUX	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	cop	_	SpaceAfter=No
4	,	,	PUNCT	cm	_	2	punct	_	_
5	жалғыз	жалғыз	ADJ	adj	_	6	advmod	_	_
6	өртенді	өртен	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	parataxis	_	SpaceAfter=No
7	,	,	PUNCT	cm	_	6	punct	_	_
8	жалғыз	жалғыз	ADJ	adj	_	9	advmod	_	_
9	жылады	жыла	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	parataxis	_	SpaceAfter=No
10	,	,	PUNCT	cm	_	9	punct	_	_
11	дүниеден	дүние	NOUN	n	Case=Abl	12	obl	_	_
12	безді	без	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	parataxis	_	SpaceAfter=No
13	,	,	PUNCT	cm	_	12	punct	_	_
14	сопы	сопы	NOUN	n	Case=Nom	2	parataxis	_	_
15	болды	бол	AUX	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	14	cop	_	SpaceAfter=No
16	.	.	PUNCT	sent	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 17 parataxis	color:blue
1	Көл	көл	NOUN	n	Case=Nom	3	advcl	_	_
2	болып	бол	AUX	v	Aspect=Perf|VerbForm=Conv	1	cop	_	_
3	төгілген	төк	VERB	v	Tense=Past|VerbForm=Part|Voice=Pass	5	acl:relcl	_	_
4	көздің	көз	NOUN	n	Case=Gen	5	nmod:poss	_	_
5	жасы	жас	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	7	nsubj	_	_
6	жерге	жер	NOUN	n	Case=Dat	7	obl	_	_
7	сіңді	сің	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
8	,	,	PUNCT	cm	_	7	punct	_	_
9	тілек	тілек	NOUN	n	Case=Nom	10	nsubj	_	_
10	тозды	тоз	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	parataxis	_	SpaceAfter=No
11	,	,	PUNCT	cm	_	10	punct	_	_
12	өмір	өмір	NOUN	n	Case=Nom	13	nsubj	_	_
13	озды	оз	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	parataxis	_	SpaceAfter=No
14	,	,	PUNCT	cm	_	13	punct	_	_
15	Шолпан	Шолпан	PROPN	np	Case=Nom|Gender=Fem	17	nsubj	_	_
16	бала	бала	X	x	_	17	dep	_	_
17	көтермеді	көтер	VERB	v	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	7	parataxis	_	SpaceAfter=No
18	.	.	PUNCT	sent	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 parataxis	color:blue
1	Бес	бес	NUM	num	NumType=Card	2	nummod	_	_
2	жылдың	жыл	NOUN	n	Case=Gen	3	nmod:poss	_	_
3	ішінде	іш	NOUN	n	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	6	obl	_	_
4	үш	үш	NUM	num	NumType=Card	5	nummod	_	_
5	баласы	бала	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	6	nsubj	_	_
6	бар	бар	ADJ	adj	_	0	root	_	_
7	еді	е	AUX	cop	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	SpaceAfter=No
8	:	:	PUNCT	sent	_	6	punct	_	_
9	екеуі	екеу	NUM	num	Case=Nom|Number[psor]=Plur,Sing|NumType=Coll|Person[psor]=3	10	nsubj	_	_
10	ұл	ұл	NOUN	n	Case=Nom	6	parataxis	_	SpaceAfter=No
11	,	,	PUNCT	cm	_	10	punct	_	_
12	біреуі	біреу	NUM	num	Case=Nom|Number[psor]=Plur,Sing|NumType=Coll|Person[psor]=3	13	nsubj	_	_
13	қыз	қыз	NOUN	n	Case=Nom	6	parataxis	_	SpaceAfter=No
14	.	.	PUNCT	sent	_	13	punct	_	_

~~~


