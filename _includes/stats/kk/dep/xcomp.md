

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

4 nodes (1%) are attached to their parents as `xcomp`.

4 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 3 pairs of parts of speech are connected with `xcomp`: [kk-pos/VERB]()-[kk-pos/NOUN]() (2; 50% instances), [kk-pos/VERB]()-[kk-pos/PRON]() (1; 25% instances), [kk-pos/VERB]()-[kk-pos/VERB]() (1; 25% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 20 xcomp	color:blue
1	2015	2015	NUM	num	NumType=Ord	2	amod	_	_
2	жылдың	жыл	NOUN	n	Case=Gen	4	nmod:poss	_	_
3	24	24	NUM	num	NumType=Ord	4	amod	_	_
4	қаңтарындағы	қаңтар	NOUN	n	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	14	nmod	_	_
5	Сауд	Сауд	PROPN	np	Case=Nom	7	nmod:poss	_	_
6	Арабиясының	Арабия	PROPN	np	Case=Gen|Number[psor]=Plur,Sing|Person[psor]=3	5	flat:name	_	_
7	патшасы	патша	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	14	nmod:poss	_	_
8	—	—	PUNCT	guio	_	13	punct	_	_
9	Абдулла	Абдулла	PROPN	np	Case=Nom|Gender=Masc	7	appos	_	_
10	ибн	ибн	X	x	_	9	flat:name	_	_
11	Абдул	Абдул	PROPN	np	Case=Nom|Gender=Masc	9	flat:name	_	_
12	Азиз	Азиз	PROPN	np	Case=Nom|Gender=Masc	9	flat:name	_	_
13	ас-Саудтың	ас-Сауд	PROPN	np	Case=Gen|Gender=Masc	9	flat:name	_	_
14	өлімінен	өлім	NOUN	n	Case=Abl|Number[psor]=Plur,Sing|Person[psor]=3	22	obl	_	_
15	кейін	кейін	ADP	post	_	14	case	_	_
16	билік	билік	NOUN	n	Case=Nom	17	nmod:poss	_	_
17	басындағы	бас	NOUN	n	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	20	obl	_	_
18	ең	ең	ADV	adv	_	19	advmod	_	_
19	кәрі	кәрі	ADJ	adj	_	20	amod	_	_
20	монарх	монарх	NOUN	n	Case=Nom	22	xcomp	_	_
21	болып	болып	X	x	_	22	dep	_	_
22	саналады	санал	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Aor|VerbForm=Fin	0	root	_	SpaceAfter=No
23	.	.	PUNCT	sent	_	22	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 xcomp	color:blue
1	Ғашық	ғашық	ADJ	adj	_	2	amod	_	_
2	адамға	адам	NOUN	n	Case=Dat	10	obl	_	_
3	Құранның	Құран	PROPN	np	Case=Gen	4	nmod:poss	_	_
4	аяты	аят	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	5	nsubj	_	_
5	қасиетті	қасиетті	ADJ	adj	_	0	root	_	_
6	емес	е	AUX	cop	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Aor|VerbForm=Fin	5	cop	_	SpaceAfter=No
7	,	,	PUNCT	cm	_	5	punct	_	_
8	жарының	жар	NOUN	n	Case=Gen|Number[psor]=Plur,Sing|Person[psor]=3	9	nmod:poss	_	_
9	сөзі	сөз	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	10	nsubj	_	_
10	қасиетті	қасиетті	ADJ	adj	_	5	conj	_	SpaceAfter=No
11	,	,	PUNCT	cm	_	10	punct	_	_
12	жарынан	жар	NOUN	n	Case=Abl|Number[psor]=Plur,Sing|Person[psor]=3	14	nmod	_	_
13	басқа	басқа	ADP	post	_	12	case	_	_
14	адамның	адам	NOUN	n	Case=Gen	15	nmod:poss	_	_
15	сөзін	сөз	NOUN	n	Case=Acc|Number[psor]=Plur,Sing|Person[psor]=3	17	obj	_	_
16	не	не	PRON	prn	Case=Nom|PronType=Int	17	xcomp	_	_
17	қылсын	қыл	VERB	v	Mood=Opt|Number=Sing|Person=3|VerbForm=Fin	10	parataxis	_	_
18	Шолпан	Шолпан	PROPN	np	Case=Nom|Gender=Fem	17	nsubj	_	SpaceAfter=No
19	!	!	PUNCT	sent	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 xcomp	color:blue
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


