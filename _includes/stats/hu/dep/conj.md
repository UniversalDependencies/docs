

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

1358 nodes (4%) are attached to their parents as `conj`.

1291 instances of `conj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.30117820324006.

The following 51 pairs of parts of speech are connected with `conj`: [hu-pos/VERB]()-[hu-pos/VERB]() (416; 31% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (386; 28% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (112; 8% instances), [hu-pos/PROPN]()-[hu-pos/PROPN]() (72; 5% instances), [hu-pos/VERB]()-[hu-pos/NOUN]() (50; 4% instances), [hu-pos/ADJ]()-[hu-pos/VERB]() (48; 4% instances), [hu-pos/VERB]()-[hu-pos/ADJ]() (41; 3% instances), [hu-pos/NOUN]()-[hu-pos/ADJ]() (30; 2% instances), [hu-pos/NOUN]()-[hu-pos/VERB]() (25; 2% instances), [hu-pos/NOUN]()-[hu-pos/PROPN]() (21; 2% instances), [hu-pos/PROPN]()-[hu-pos/NOUN]() (17; 1% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (15; 1% instances), [hu-pos/VERB]()-[hu-pos/NUM]() (15; 1% instances), [hu-pos/NUM]()-[hu-pos/NUM]() (11; 1% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (9; 1% instances), [hu-pos/VERB]()-[hu-pos/PROPN]() (9; 1% instances), [hu-pos/ADV]()-[hu-pos/ADV]() (8; 1% instances), [hu-pos/PRON]()-[hu-pos/NOUN]() (8; 1% instances), [hu-pos/NOUN]()-[hu-pos/NUM]() (6; 0% instances), [hu-pos/NOUN]()-[hu-pos/PRON]() (6; 0% instances), [hu-pos/ADV]()-[hu-pos/VERB]() (5; 0% instances), [hu-pos/PRON]()-[hu-pos/VERB]() (5; 0% instances), [hu-pos/ADJ]()-[hu-pos/PRON]() (3; 0% instances), [hu-pos/NUM]()-[hu-pos/VERB]() (3; 0% instances), [hu-pos/PROPN]()-[hu-pos/ADJ]() (3; 0% instances), [hu-pos/CCONJ]()-[hu-pos/ADV]() (2; 0% instances), [hu-pos/CCONJ]()-[hu-pos/PROPN]() (2; 0% instances), [hu-pos/NOUN]()-[hu-pos/CCONJ]() (2; 0% instances), [hu-pos/NOUN]()-[hu-pos/PUNCT]() (2; 0% instances), [hu-pos/PRON]()-[hu-pos/ADJ]() (2; 0% instances), [hu-pos/PRON]()-[hu-pos/ADV]() (2; 0% instances), [hu-pos/PRON]()-[hu-pos/PROPN]() (2; 0% instances), [hu-pos/VERB]()-[hu-pos/ADV]() (2; 0% instances), [hu-pos/ADJ]()-[hu-pos/AUX]() (1; 0% instances), [hu-pos/ADJ]()-[hu-pos/NUM]() (1; 0% instances), [hu-pos/ADJ]()-[hu-pos/PROPN]() (1; 0% instances), [hu-pos/CCONJ]()-[hu-pos/ADJ]() (1; 0% instances), [hu-pos/CCONJ]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/CCONJ]()-[hu-pos/PRON]() (1; 0% instances), [hu-pos/DET]()-[hu-pos/DET]() (1; 0% instances), [hu-pos/DET]()-[hu-pos/VERB]() (1; 0% instances), [hu-pos/INTJ]()-[hu-pos/VERB]() (1; 0% instances), [hu-pos/NOUN]()-[hu-pos/ADP]() (1; 0% instances), [hu-pos/NOUN]()-[hu-pos/ADV]() (1; 0% instances), [hu-pos/NUM]()-[hu-pos/DET]() (1; 0% instances), [hu-pos/PRON]()-[hu-pos/DET]() (1; 0% instances), [hu-pos/PRON]()-[hu-pos/PRON]() (1; 0% instances), [hu-pos/PROPN]()-[hu-pos/CCONJ]() (1; 0% instances), [hu-pos/PROPN]()-[hu-pos/VERB]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/DET]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 conj	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	építkezés	építkezés	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	nsubj	_	_
3	jövőre	jövőre	ADV	_	_	4	advmod:tlocy	_	_
4	kezdődne	kezdődik	VERB	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	és	és	CCONJ	_	_	7	cc	_	_
6	2002-ben	2002	NUM	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	7	nmod:obl	_	_
7	fejeződne	fejeződik	VERB	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	_
8	be	be	ADV	_	Degree=Pos	7	compound:preverb	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 conj	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	tervezett	tervezett	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPast	3	amod:att	_	_
3	bezárás	bezárás	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nsubj	_	_
4	75	75	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	5	nummod	_	_
5	diákot	diák	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	obj	_	_
6	és	és	CCONJ	_	_	8	cc	_	_
7	17	17	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	8	nummod	_	_
8	pedagógust	pedagógus	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	conj	_	_
9	érint	érint	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 conj	color:blue
1	Mindez	mindez	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	8	nsubj	_	_
2	mára	mára	ADV	_	_	8	advmod:tto	_	_
3	kritikus	kritikus	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	amod:att	_	_
4	forgalmi	forgalmi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	amod:att	_	_
5	és	és	CCONJ	_	_	6	cc	_	_
6	környezeti	környezeti	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	conj	_	_
7	helyzethez	helyzet	NOUN	_	Case=All|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	nmod:obl	_	_
8	vezetett	vezet	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


