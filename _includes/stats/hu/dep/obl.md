

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

614 nodes (2%) are attached to their parents as `obl`.

519 instances of `obl` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.23941368078176.

The following 17 pairs of parts of speech are connected with `obl`: [hu-pos/VERB]()-[hu-pos/NOUN]() (344; 56% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (90; 15% instances), [hu-pos/VERB]()-[hu-pos/ADJ]() (69; 11% instances), [hu-pos/ADJ]()-[hu-pos/PROPN]() (20; 3% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (20; 3% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (19; 3% instances), [hu-pos/VERB]()-[hu-pos/PROPN]() (18; 3% instances), [hu-pos/ADJ]()-[hu-pos/PRON]() (8; 1% instances), [hu-pos/VERB]()-[hu-pos/NUM]() (8; 1% instances), [hu-pos/ADV]()-[hu-pos/NOUN]() (7; 1% instances), [hu-pos/VERB]()-[hu-pos/DET]() (5; 1% instances), [hu-pos/ADJ]()-[hu-pos/NUM]() (1; 0% instances), [hu-pos/ADV]()-[hu-pos/ADJ]() (1; 0% instances), [hu-pos/ADV]()-[hu-pos/NUM]() (1; 0% instances), [hu-pos/ADV]()-[hu-pos/PRON]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/ADV]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl	color:blue
1	Szakmai	szakmai	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	amod:att	_	_
2	szervezetek	szervezet	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	nsubj	_	_
3	is	is	CCONJ	_	_	2	cc	_	ToDo=cc-without-conj
4	tiltakoznak	tiltakozik	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	Jeszenszky	Jeszenszky	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:att	_	_
6	levele	levél	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	4	obl	_	_
7	ellen	ellen	ADP	_	_	6	case	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 obl	color:blue
1	És	és	CCONJ	_	_	3	cc	_	_
2	ezt	ez	PRON	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	3	obj	_	_
3	bizonyítja	bizonyít	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	az	az	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	út	út	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:att	_	_
6	szélén	szél	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	9	nmod:obl	_	_
7	órák	óra	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	obl	_	_
8	óta	óta	ADP	_	_	7	case	_	_
9	veszteglő	veszteglő	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	11	amod:att	_	_
10	távolsági	távolsági	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	11	amod:att	_	_
11	busz	busz	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	nsubj	_	_
12	is	is	CCONJ	_	_	11	cc	_	SpaceAfter=No|ToDo=cc-without-conj
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 obl	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	gyerek	gyerek	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	nsubj	_	_
3	keresztelkedjen	keresztelkedik	VERB	_	Definite=Ind|Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	ki	ki	ADV	_	Degree=Pos	3	compound:preverb	_	SpaceAfter=No
5	,	,	PUNCT	_	_	10	punct	_	_
6	s	s	CCONJ	_	_	10	cc	_	_
7	már	már	ADV	_	_	10	advmod:mode	_	_
8	mint	mint	SCONJ	_	_	9	mark	_	_
9	katolikus	katolikus	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	obl	_	_
10	menjen	megy	VERB	_	Definite=Ind|Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
11	el	el	ADV	_	_	10	compound:preverb	_	_
12	a	a	DET	_	Definite=Def|PronType=Art	14	det	_	_
13	bolognai	bolognai	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	14	amod:att	_	_
14	universitasra	universitas	NOUN	_	Case=Sub|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	nmod:obl	_	SpaceAfter=No
15	.	.	PUNCT	_	_	3	punct	_	_

~~~


