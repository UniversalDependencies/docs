

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

24 nodes (5%) are attached to their parents as `amod`.

23 instances of `amod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25.

The following 3 pairs of parts of speech are connected with `amod`: [kk-pos/NOUN]()-[kk-pos/ADJ]() (16; 67% instances), [kk-pos/NOUN]()-[kk-pos/NUM]() (7; 29% instances), [kk-pos/NOUN]()-[kk-pos/NOUN]() (1; 4% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 amod	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 amod	color:blue
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
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 16 amod	color:blue
1	Туған	ту	VERB	v	Tense=Past|VerbForm=Part	2	acl:relcl	_	_
2	күнінен	күн	NOUN	n	Case=Abl|Number[psor]=Plur,Sing|Person[psor]=3	3	obl	_	_
3	бастап	баста	VERB	v	Aspect=Perf|VerbForm=Conv	8	advcl	_	_
4	Елизавета	Елизавета	PROPN	np	Case=Nom|Gender=Fem	18	nsubj	_	_
5	ханшайым	ханшайым	NOUN	n	Case=Nom	4	flat:name	_	_
6	Йорктің	Йорк	PROPN	np	Case=Gen	7	nmod:poss	_	_
7	герцогиниясы	герцогиния	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	8	xcomp	_	_
8	атанып	атан	VERB	v	Aspect=Perf|VerbForm=Conv	0	root	_	SpaceAfter=No
9	,	,	PUNCT	cm	_	8	punct	_	_
10	ағасы	аға	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	27	obl	_	SpaceAfter=No
11	-	-	PUNCT	cm	_	14	punct	_	SpaceAfter=No
12	Эдуард	Эдуард	PROPN	np	Case=Nom|Gender=Masc	10	appos	_	_
13	Уэльс	Уэльс	PROPN	np	Case=Nom	14	nmod:poss	_	_
14	ханзадасы	ханзада	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	12	flat:name	_	_
15	(	(	PUNCT	lpar	_	18	punct	_	SpaceAfter=No
16	келешек	келешек	NOUN	n	Case=Nom	18	amod	_	_
17	Ұлыбритания	Ұлыбритания	PROPN	np	Case=Nom	18	nmod:poss	_	_
18	королі	король	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	10	appos	_	_
19	—	—	PUNCT	guio	_	21	punct	_	_
20	VIII	VIII	NUM	num	NumType=Ord	10	appos	_	_
21	Эдуард	Эдуард	NOUN	n	Case=Nom|Gender=Masc	20	flat:name	_	SpaceAfter=No
22	)	)	PUNCT	rpar	_	18	punct	_	_
23	мен	мен	CCONJ	cnjcoo	_	24	cc	_	_
24	әкесінен	әке	NOUN	n	Case=Abl|Number[psor]=Plur,Sing|Person[psor]=3	10	conj	_	_
25	кейін	кейін	ADP	post	_	24	case	_	_
26	үшінші	үш	NUM	num	NumType=Ord	27	amod	_	_
27	мұрагер	мұрагер	NOUN	n	Case=Nom	8	conj	_	_
28	болды	бол	AUX	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	27	cop	_	SpaceAfter=No
29	.	.	PUNCT	sent	_	27	punct	_	_

~~~


