

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

11 nodes (2%) are attached to their parents as `appos`.

11 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.72727272727273.

The following 4 pairs of parts of speech are connected with `appos`: [kk-pos/NOUN]()-[kk-pos/PROPN]() (5; 45% instances), [kk-pos/NOUN]()-[kk-pos/NOUN]() (3; 27% instances), [kk-pos/NOUN]()-[kk-pos/NUM]() (2; 18% instances), [kk-pos/ADJ]()-[kk-pos/ADJ]() (1; 9% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 appos	color:blue
1	Өзінің	өз	PRON	prn	Case=Gen|Number[psor]=Plur,Sing|Person[psor]=3|PronType=Ref	2	nmod:poss	_	_
2	атын	ат	NOUN	n	Case=Acc|Number[psor]=Plur,Sing|Person[psor]=3	19	obj	_	_
3	анасының	ана	NOUN	n	Case=Gen|Number[psor]=Plur,Sing|Person[psor]=3	18	nmod:poss	_	_
4	(	(	PUNCT	lpar	_	5	punct	_	SpaceAfter=No
5	Елизавета	Елизавета	PROPN	np	Case=Nom|Gender=Fem	3	appos	_	SpaceAfter=No
6	)	)	PUNCT	rpar	_	5	punct	_	SpaceAfter=No
7	,	,	PUNCT	cm	_	14	punct	_	_
8	апасының	апа	NOUN	n	Case=Gen|Number[psor]=Plur,Sing|Person[psor]=3	3	conj	_	_
9	(	(	PUNCT	lpar	_	10	punct	_	SpaceAfter=No
10	Мария	Мария	PROPN	np	Case=Nom|Gender=Fem	8	appos	_	SpaceAfter=No
11	)	)	PUNCT	rpar	_	10	punct	_	_
12	және	және	CCONJ	cnjcoo	_	14	cc	_	_
13	арғы	арғы	ADJ	adj	_	14	amod	_	_
14	әжесінің	әже	NOUN	n	Case=Gen|Number[psor]=Plur,Sing|Person[psor]=3	3	conj	_	_
15	(	(	PUNCT	lpar	_	16	punct	_	SpaceAfter=No
16	Александра	Александра	PROPN	np	Case=Nom|Gender=Fem	14	appos	_	SpaceAfter=No
17	)	)	PUNCT	rpar	_	16	punct	_	_
18	құрметіне	құрмет	NOUN	n	Case=Dat|Number[psor]=Plur,Sing|Person[psor]=3	19	obl	_	_
19	алған	ал	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
20	.	.	PUNCT	sent	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 appos	color:blue
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
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 appos	color:blue
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


