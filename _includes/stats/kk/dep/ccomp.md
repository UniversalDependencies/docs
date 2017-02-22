

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

8 nodes (2%) are attached to their parents as `ccomp`.

8 instances of `ccomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.625.

The following 2 pairs of parts of speech are connected with `ccomp`: [kk-pos/VERB]()-[kk-pos/VERB]() (7; 88% instances), [kk-pos/VERB]()-[kk-pos/ADJ]() (1; 13% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 ccomp	color:blue
1	Шешуі	шеш	VERB	v	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3|VerbForm=Ger	3	xcomp	_	_
2	деп	деп	X	x	_	3	dep	_	_
3	атауға	ата	VERB	v	Case=Dat|VerbForm=Ger	4	ccomp	_	_
4	болатын	бол	VERB	v	Aspect=Imp|VerbForm=Part	10	advcl	_	_
5	болса	бол	AUX	v	Mood=Cnd|Number=Sing|Person=3|VerbForm=Conv	4	cop	_	SpaceAfter=No
6	,	,	PUNCT	cm	_	5	punct	_	_
7	адамның	адам	NOUN	n	Case=Gen	8	nmod:poss	_	_
8	шешуі	шеш	VERB	v	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3|VerbForm=Ger	10	nsubj	_	_
9	жалғыз	жалғыз	ADJ	adj	_	10	amod	_	_
10	өлім	өлім	NOUN	n	Case=Nom	0	root	_	SpaceAfter=No
11	.	.	PUNCT	sent	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 16 ccomp	color:blue
1	Шолпан	Шолпан	PROPN	np	Case=Nom|Gender=Fem	24	nsubj	_	_
2	Сәрсенбайға	Сәрсенбай	PROPN	np	Case=Dat|Gender=Masc	3	obl	_	_
3	шыққан	шық	VERB	v	Tense=Past|VerbForm=Part	4	acl:relcl	_	_
4	жылы	жыл	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	24	obl	_	_
5	өзіндей	өз	PRON	prn	Number[psor]=Plur,Sing|Person[psor]=3|PronType=Ref	7	nmod	_	_
6	жас	жас	ADJ	adj	_	7	amod	_	_
7	келіншектермен	келіншек	NOUN	n	Case=Ins|Number=Plur	9	obl	_	_
8	аулақта	аулақ	ADJ	adj	Case=Loc	9	obl	_	_
9	кеңескенде	кеңес	VERB	v	Case=Loc|Tense=Past|VerbForm=Ger	24	advcl	_	SpaceAfter=No
10	:	:	PUNCT	sent	_	9	punct	_	_
11	«	«	PUNCT	lquot	_	16	punct	_	SpaceAfter=No
12	бала	бала	NOUN	n	_	14	nmod	_	_
13	сыз	сыз	ADP	post	_	12	case	_	_
14	өмірдің	өмір	NOUN	n	Case=Gen	15	nmod:poss	_	_
15	қызығы	қызық	ADJ	adj	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	16	nsubj	_	_
16	жоқ	жоқ	ADJ	adj	_	21	ccomp	_	_
17	қой	ғой	PART	mod_ass	_	16	discourse	_	_
18	»	»	PUNCT	rquot	_	16	punct	_	SpaceAfter=No
19	,	,	PUNCT	cm	_	16	punct	_	_
20	–	–	PUNCT	guio	_	16	punct	_	_
21	деп	де	VERB	v	Aspect=Perf|VerbForm=Conv	24	advcl	_	_
22	аузымен	ауыз	NOUN	n	Case=Ins|Number[psor]=Plur,Sing|Person[psor]=3	24	obl	_	_
23	ғана	ғана	ADV	postadv	_	22	advmod	_	_
24	айтушы	айт	VERB	v	Mood=Pot|VerbForm=Part	0	root	_	_
25	еді	е	AUX	cop	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	24	cop	_	SpaceAfter=No
26	.	.	PUNCT	sent	_	24	punct	_	_

~~~


