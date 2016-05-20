

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.
There are 4 language-specific subtypes of `nmod`: [nmod:att](), [nmod:attlvc](), [nmod:obl](), [nmod:obllvc]().

890 nodes (2%) are attached to their parents as `nmod`.

753 instances of `nmod` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.06741573033708.

The following 31 pairs of parts of speech are connected with `nmod`: [hu-pos/VERB]()-[hu-pos/NOUN]() (461; 52% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (112; 13% instances), [hu-pos/VERB]()-[hu-pos/ADJ]() (86; 10% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (30; 3% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (29; 3% instances), [hu-pos/VERB]()-[hu-pos/PROPN]() (29; 3% instances), [hu-pos/ADJ]()-[hu-pos/PROPN]() (28; 3% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (25; 3% instances), [hu-pos/VERB]()-[hu-pos/NUM]() (13; 1% instances), [hu-pos/ADJ]()-[hu-pos/PRON]() (10; 1% instances), [hu-pos/ADV]()-[hu-pos/NOUN]() (10; 1% instances), [hu-pos/NOUN]()-[hu-pos/PRON]() (8; 1% instances), [hu-pos/NOUN]()-[hu-pos/ADJ]() (7; 1% instances), [hu-pos/NOUN]()-[hu-pos/PROPN]() (7; 1% instances), [hu-pos/VERB]()-[hu-pos/DET]() (6; 1% instances), [hu-pos/NOUN]()-[hu-pos/DET]() (4; 0% instances), [hu-pos/NUM]()-[hu-pos/NOUN]() (4; 0% instances), [hu-pos/ADJ]()-[hu-pos/NUM]() (3; 0% instances), [hu-pos/PRON]()-[hu-pos/PROPN]() (3; 0% instances), [hu-pos/ADJ]()-[hu-pos/ADV]() (2; 0% instances), [hu-pos/NOUN]()-[hu-pos/NUM]() (2; 0% instances), [hu-pos/PROPN]()-[hu-pos/NOUN]() (2; 0% instances), [hu-pos/ADV]()-[hu-pos/ADJ]() (1; 0% instances), [hu-pos/ADV]()-[hu-pos/NUM]() (1; 0% instances), [hu-pos/ADV]()-[hu-pos/PRON]() (1; 0% instances), [hu-pos/PRON]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/PROPN]()-[hu-pos/PRON]() (1; 0% instances), [hu-pos/PROPN]()-[hu-pos/PROPN]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/ADV]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/VERB]() (1; 0% instances), [hu-pos/X]()-[hu-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nmod	color:blue
1	Szakmai	szakmai	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	amod:att	_	_
2	szervezetek	szervezet	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	nsubj	_	_
3	is	is	CONJ	_	_	2	cc	_	_
4	tiltakoznak	tiltakozik	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	Jeszenszky	Jeszenszky	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:att	_	_
6	levele	levél	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	4	nmod	_	_
7	ellen	ellen	ADP	_	_	6	case	_	_
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nmod	color:blue
1	És	és	CONJ	_	_	3	cc	_	_
2	ezt	ez	PRON	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	3	dobj	_	_
3	bizonyítja	bizonyít	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	az	az	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	út	út	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:att	_	_
6	szélén	szél	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	9	nmod:obl	_	_
7	órák	óra	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nmod	_	_
8	óta	óta	ADP	_	_	7	case	_	_
9	veszteglő	veszteglő	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	11	amod:att	_	_
10	távolsági	távolsági	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	11	amod:att	_	_
11	busz	busz	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	nsubj	_	_
12	is	is	CONJ	_	_	11	cc	_	_
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nmod	color:blue
1	Ha	ha	SCONJ	_	_	4	mark	_	_
2	nem	nem	ADV	_	PronType=Neg	4	neg	_	_
3	is	is	ADV	_	_	4	advmod:mode	_	_
4	szűnt	szűnik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	advcl	_	_
5	meg	meg	PART	_	_	4	compound:preverb	_	_
6	,	,	PUNCT	_	_	4	punct	_	_
7	de	de	CONJ	_	_	9	cc	_	_
8	látványosan	látványos	ADJ	_	Case=Ess|Degree=Pos|Number=Sing	9	nmod	_	_
9	apadt	apad	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
10	a	a	DET	_	Definite=Def|PronType=Art	12	det	_	_
11	költségvetési	költségvetési	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	12	amod:att	_	_
12	hiány	hiány	NOUN	_	Case=Nom|Number=Sing	9	nsubj	_	_
13	is	is	CONJ	_	_	9	cc	_	_
14	.	.	PUNCT	_	_	9	punct	_	_

~~~


