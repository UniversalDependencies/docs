

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

6 nodes (1%) are attached to their parents as `discourse`.

6 instances of `discourse` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `discourse`: [kk-pos/ADJ]()-[kk-pos/PART]() (3; 50% instances), [kk-pos/PROPN]()-[kk-pos/PART]() (2; 33% instances), [kk-pos/VERB]()-[kk-pos/PART]() (1; 17% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 discourse	color:blue
1	Кім	кім	PRON	prn	Case=Nom|PronType=Int	2	nsubj	_	_
2	біледі	біл	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Aor|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	cm	_	2	punct	_	_
4	Тәңірінің	Тәңір	NOUN	n	Case=Gen|Number[psor]=Plur,Sing|Person[psor]=3	7	nsubj	_	_
5	Шолпанға	Шолпан	PROPN	np	Case=Dat|Gender=Fem	7	obl	_	_
6	бала	бала	NOUN	n	Case=Nom	7	obj	_	_
7	бермеуі	бер	VERB	v	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3|Polarity=Neg|VerbForm=Ger	9	csubj	_	_
8	өзінше	өз	PRON	prn	Number[psor]=Plur,Sing|Person[psor]=3|PronType=Ref	9	advmod	_	_
9	дұрыс	дұрыс	ADJ	adj	_	2	parataxis	_	_
10	шығар	шығар	PART	mod	_	9	discourse	_	_
11	,	,	PUNCT	cm	_	9	punct	_	_
12	өзінше	өз	PRON	prn	Number[psor]=Plur,Sing|Person[psor]=3|PronType=Ref	13	advmod	_	_
13	жөн	жөн	ADJ	adj	_	2	parataxis	_	_
14	шығар	шығар	PART	mod	_	13	discourse	_	_
15	.	.	PUNCT	sent	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 discourse	color:blue
1	Пірәдар	пірәдар	NOUN	n	Case=Nom	0	root	_	_
2	болды	бол	AUX	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	1	cop	_	SpaceAfter=No
3	,	,	PUNCT	cm	_	1	punct	_	_
4	әулиеге	әулие	NOUN	n	Case=Dat	6	obl	_	_
5	ат	ат	NOUN	n	Case=Nom	6	obj	_	_
6	айтты	айт	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	1	parataxis	_	SpaceAfter=No
7	,	,	PUNCT	cm	_	6	punct	_	_
8	қорасанға	қорасан	NOUN	n	Case=Dat	10	obl	_	_
9	қой	қой	NOUN	n	Case=Nom	10	obj	_	_
10	айтты	айт	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	1	parataxis	_	SpaceAfter=No
11	:	:	PUNCT	sent	_	10	punct	_	_
12	«	«	PUNCT	lquot	_	17	punct	_	SpaceAfter=No
13	Жасаған	Жасаған	PROPN	np	Case=Nom	17	vocative	_	_
14	ау	ау	PART	mod_emo	_	13	discourse	_	_
15	,	,	PUNCT	cm	_	13	punct	_	_
16	бала	бала	NOUN	n	Case=Nom	17	obj	_	_
17	бере	бер	VERB	v	Aspect=Imp|VerbForm=Cov	22	ccomp	_	_
18	гөр	гөр	AUX	vaux	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	17	aux	_	SpaceAfter=No
19	!	!	PUNCT	sent	_	17	punct	_	SpaceAfter=No
20	»	»	PUNCT	rquot	_	17	punct	_	_
21	–	–	PUNCT	guio	_	17	punct	_	_
22	деді	де	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	1	parataxis	_	SpaceAfter=No
23	.	.	PUNCT	sent	_	22	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 discourse	color:blue
1	«	«	PUNCT	lquot	_	8	punct	_	SpaceAfter=No
2	бала	бала	NOUN	n	_	8	advcl	_	_
3	лы	лы	ADP	post	_	2	case	_	_
4	болсам	бол	AUX	v	Mood=Cnd|Number=Sing|Person=1|VerbForm=Conv	2	cop	_	SpaceAfter=No
5	,	,	PUNCT	cm	_	2	punct	_	_
6	әдемі	әдемі	ADJ	adj	_	7	amod	_	_
7	өмірім	өмір	NOUN	n	Case=Nom|Number[psor]=Sing|Person[psor]=1	8	nsubj	_	_
8	бұз	бұз	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Aor|VerbForm=Fin|Voice=Pass	13	ccomp	_	_
9	ау	ау	PART	mod_emo	_	8	discourse	_	_
10	»	»	PUNCT	rquot	_	8	punct	_	SpaceAfter=No
11	,	,	PUNCT	cm	_	8	punct	_	_
12	–	–	PUNCT	guio	_	8	punct	_	_
13	деп	де	VERB	v	Aspect=Perf|VerbForm=Conv	14	advcl	_	_
14	ойлайтын	ойла	VERB	v	Aspect=Imp|VerbForm=Part	0	root	_	_
15	еді	е	AUX	cop	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	14	cop	_	_
16	Шолпан	Шолпан	PROPN	np	Case=Nom|Gender=Fem	14	nsubj	_	SpaceAfter=No
17	...	...	PUNCT	sent	_	14	punct	_	_

~~~


