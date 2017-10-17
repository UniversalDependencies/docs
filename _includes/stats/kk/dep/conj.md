

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

18 nodes (3%) are attached to their parents as `conj`.

18 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.66666666666667.

The following 5 pairs of parts of speech are connected with `conj`: [kk-pos/VERB]()-[kk-pos/VERB]() (6; 33% instances), [kk-pos/NOUN]()-[kk-pos/NOUN]() (5; 28% instances), [kk-pos/ADJ]()-[kk-pos/ADJ]() (3; 17% instances), [kk-pos/VERB]()-[kk-pos/NOUN]() (3; 17% instances), [kk-pos/VERB]()-[kk-pos/PRON]() (1; 6% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 conj	color:blue
1	Бала	бала	NOUN	n	Case=Nom	2	obj	_	_
2	сұрады	сұра	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	cm	_	7	punct	_	_
4	қалай	қалай	X	x	_	5	dep	_	_
5	да	да	SCONJ	cnjadv	_	7	cc	_	_
6	бала	бала	NOUN	n	Case=Nom	7	nsubj	_	_
7	болмады	бол	VERB	v	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	2	conj	_	SpaceAfter=No
8	.	.	PUNCT	sent	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 14 conj	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 conj	color:blue
1	Эдуард	Эдуард	NOUN	n	Case=Nom|Gender=Masc	13	nsubj	_	_
2	ханзада	ханзада	NOUN	n	Case=Nom	1	flat:name	_	_
3	айтарлықтай	айт	VERB	v	Mood=Pot|Tense=Past|VerbForm=Part	4	advcl	_	_
4	жас	жас	ADJ	adj	_	23	advcl	_	SpaceAfter=No
5	,	,	PUNCT	cm	_	13	punct	_	_
6	әрі	әрі	CCONJ	cnjcoo	_	13	cc	_	_
7	жанұя	жанұя	NOUN	n	Case=Nom	8	obj	_	_
8	құрып	құр	VERB	v	Aspect=Perf|VerbForm=Conv	13	advcl	_	SpaceAfter=No
9	,	,	PUNCT	cm	_	10	punct	_	_
10	бала	бала	NOUN	n	_	8	conj	_	_
11	лы	лы	ADP	post	_	10	case	_	_
12	болуға	болуға	AUX	v	Case=Dat|VerbForm=Ger	10	cop	_	_
13	тиіс	тиіс	ADJ	adj	_	4	conj	_	_
14	болғандықтан	бол	AUX	v	Case=Abl|VerbForm=Ger	13	cop	_	SpaceAfter=No
15	,	,	PUNCT	cm	_	13	punct	_	_
16	бастапқы	бастапқы	ADJ	adj	_	17	amod	_	_
17	кезде	кез	NOUN	n	Case=Loc	23	obl	_	_
18	Елизавета	Елизавета	NOUN	n	Case=Nom|Gender=Fem	23	nsubj	_	_
19	таққа	тақ	NOUN	n	Case=Dat	20	obl	_	_
20	отыратын	отыр	VERB	v	Aspect=Imp|VerbForm=Part	21	acl:relcl	_	_
21	үміткер	үміткер	NOUN	n	Case=Nom	23	obl	_	_
22	ретінде	ретінде	ADP	post	_	21	case	_	_
23	қарастырылмады	қарастыр	VERB	v	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
24	.	.	PUNCT	sent	_	23	punct	_	_

~~~


