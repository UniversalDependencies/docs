

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

47 nodes (9%) are attached to their parents as `obl`.

47 instances of `obl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.95744680851064.

The following 6 pairs of parts of speech are connected with `obl`: [kk-pos/VERB]()-[kk-pos/NOUN]() (30; 64% instances), [kk-pos/ADJ]()-[kk-pos/NOUN]() (7; 15% instances), [kk-pos/NOUN]()-[kk-pos/NOUN]() (4; 9% instances), [kk-pos/VERB]()-[kk-pos/PROPN]() (3; 6% instances), [kk-pos/VERB]()-[kk-pos/PRON]() (2; 4% instances), [kk-pos/VERB]()-[kk-pos/ADJ]() (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl	color:blue
1	Күнмен	күн	NOUN	n	Case=Ins	2	obl	_	_
2	таласа	талас	VERB	v	Aspect=Imp|VerbForm=Cov	6	advcl	_	_
3	Шолпан	Шолпан	PROPN	np	Case=Nom|Gender=Fem	6	nsubj	_	_
4	да	да	CCONJ	cnjcoo	_	3	cc	_	_
5	өмірімен	өмір	NOUN	n	Case=Ins|Number[psor]=Plur,Sing|Person[psor]=3	6	obl	_	_
6	қоштасты	қоштас	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
7	.	.	PUNCT	sent	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 obl	color:blue
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


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 17 obl	color:blue
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


