

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

13 nodes (2%) are attached to their parents as `case`.

13 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `case`: [kk-pos/NOUN]()-[kk-pos/ADP]() (12; 92% instances), [kk-pos/VERB]()-[kk-pos/ADP]() (1; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 case	color:blue
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


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 case	color:blue
1	Қиюласып	қиюла	VERB	v	Aspect=Perf|VerbForm=Conv|Voice=Coop	2	advcl	_	_
2	қосылған	қос	VERB	v	Tense=Past|VerbForm=Part|Voice=Pass	4	acl:relcl	_	_
3	екі	екі	NUM	num	NumType=Card	4	nummod	_	_
4	жанның	жан	NOUN	n	Case=Gen	5	nmod:poss	_	_
5	арасына	ара	NOUN	n	Case=Dat|Number[psor]=Plur,Sing|Person[psor]=3	10	obl	_	_
6	жат	жат	ADJ	adj	_	9	amod	_	_
7	бір	бір	DET	det	PronType=Ind	9	det	_	_
8	үшінші	үш	NUM	num	NumType=Ord	9	amod	_	_
9	жан	жан	NOUN	n	Case=Nom	10	nsubj	_	_
10	түскен	түс	VERB	v	Tense=Past|VerbForm=Part	25	advcl	_	_
11	соң	соң	ADP	post	_	10	case	_	SpaceAfter=No
12	,	,	PUNCT	cm	_	10	punct	_	_
13	екеуінің	екеу	NUM	num	Case=Gen|Number[psor]=Plur,Sing|NumType=Coll|Person[psor]=3	20	nmod:poss	_	_
14	де	да	ADV	postadv	_	13	advmod	_	_
15	жалын	жалын	NOUN	n	_	20	nmod	_	_
16	лы	лы	ADP	post	_	15	case	_	_
17	,	,	PUNCT	cm	_	18	punct	_	_
18	екпін	екпін	NOUN	n	_	15	conj	_	_
19	ді	лы	ADP	post	_	18	case	_	_
20	махаббаты	махаббат	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	25	nsubj	_	_
21	бүлінер	бүлін	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	26	ccomp	_	SpaceAfter=No
22	,	,	PUNCT	cm	_	25	punct	_	_
23	бәсеңдер	бәсеңде	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	21	conj	_	SpaceAfter=No
24	,	,	PUNCT	cm	_	25	punct	_	_
25	суынар	суынар	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	21	conj	_	_
26	деп	де	VERB	v	Aspect=Perf|VerbForm=Conv	27	advcl	_	_
27	қорқушы	қорық	VERB	v	Mood=Pot|VerbForm=Part	0	root	_	_
28	еді	е	AUX	cop	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	27	cop	_	_
29	Шолпан	Шолпан	PROPN	np	Case=Nom|Gender=Fem	27	nsubj	_	SpaceAfter=No
30	.	.	PUNCT	sent	_	27	punct	_	_

~~~


