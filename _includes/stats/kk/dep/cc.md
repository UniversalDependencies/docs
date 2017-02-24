

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

13 nodes (2%) are attached to their parents as `cc`.

11 instances of `cc` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.30769230769231.

The following 8 pairs of parts of speech are connected with `cc`: [kk-pos/VERB]()-[kk-pos/CCONJ]() (3; 23% instances), [kk-pos/NOUN]()-[kk-pos/CCONJ]() (2; 15% instances), [kk-pos/NOUN]()-[kk-pos/SCONJ]() (2; 15% instances), [kk-pos/VERB]()-[kk-pos/SCONJ]() (2; 15% instances), [kk-pos/ADJ]()-[kk-pos/CCONJ]() (1; 8% instances), [kk-pos/PRON]()-[kk-pos/CCONJ]() (1; 8% instances), [kk-pos/PROPN]()-[kk-pos/CCONJ]() (1; 8% instances), [kk-pos/VERB]()-[kk-pos/ADV]() (1; 8% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	Бірақ	бірақ	CCONJ	cnjcoo	_	4	cc	_	_
2	тілек	тілек	NOUN	n	Case=Nom	4	nsubj	_	_
3	іске	іске	X	x	_	4	dep	_	_
4	аспай	ас	VERB	v	Aspect=Perf|Polarity=Neg|VerbForm=Conv	8	advcl	_	SpaceAfter=No
5	,	,	PUNCT	cm	_	4	punct	_	_
6	аяғы	аяқ	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	7	nsubj	_	_
7	жоқ	жоқ	ADJ	adj	_	8	acl:relcl	_	_
8	жыр	жыр	NOUN	n	Case=Nom	0	root	_	_
9	болды	бол	AUX	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	cop	_	SpaceAfter=No
10	.	.	PUNCT	sent	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 cc	color:blue
1	Таққа	тақ	NOUN	n	Case=Dat	17	obl	_	_
2	1952	1952	NUM	num	NumType=Ord	3	amod	_	_
3	жылдың	жыл	NOUN	n	Case=Gen	5	nmod:poss	_	_
4	6	6	NUM	num	NumType=Ord	5	amod	_	_
5	ақпанында	ақпан	NOUN	n	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	17	obl	_	SpaceAfter=No
6	,	,	PUNCT	cm	_	9	punct	_	_
7	яғни	яғни	SCONJ	cnjsub	_	9	cc	_	_
8	25	25	NUM	num	NumType=Card	9	nummod	_	_
9	жасында	жас	NOUN	n	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	5	appos	_	SpaceAfter=No
10	,	,	PUNCT	cm	_	9	punct	_	_
11	әкесі	әке	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	15	nmod:poss	_	_
12	—	—	PUNCT	guio	_	14	punct	_	_
13	VI	VI	NUM	num	NumType=Ord	11	appos	_	_
14	Георгтың	Георг	PROPN	np	Case=Gen|Gender=Masc	13	flat:name	_	_
15	өлімінен	өлім	NOUN	n	Case=Abl|Number[psor]=Plur,Sing|Person[psor]=3	17	obl	_	_
16	кейін	кейін	ADP	post	_	15	case	_	_
17	отырды	отыр	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
18	.	.	PUNCT	sent	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cc	color:blue
1	Бала	бала	NOUN	n	Case=Nom	2	obj	_	_
2	сұрады	сұра	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	cm	_	7	punct	_	_
4	қалай	қалай	X	x	_	5	dep	_	_
5	да	да	SCONJ	cnjadv	_	7	cc	_	_
6	бала	бала	NOUN	n	Case=Nom	7	nsubj	_	_
7	болмады	бол	VERB	v	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	2	conj	_	SpaceAfter=No
8	.	.	PUNCT	sent	_	7	punct	_	_

~~~


