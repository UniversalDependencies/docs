

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

104 nodes (0%) are attached to their parents as `csubj`.

94 instances of `csubj` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.48076923076923.

The following 11 pairs of parts of speech are connected with `csubj`: [hu-pos/VERB]()-[hu-pos/VERB]() (39; 38% instances), [hu-pos/ADJ]()-[hu-pos/VERB]() (31; 30% instances), [hu-pos/NOUN]()-[hu-pos/VERB]() (24; 23% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (2; 2% instances), [hu-pos/PRON]()-[hu-pos/VERB]() (2; 2% instances), [hu-pos/DET]()-[hu-pos/VERB]() (1; 1% instances), [hu-pos/NOUN]()-[hu-pos/ADJ]() (1; 1% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (1; 1% instances), [hu-pos/VERB]()-[hu-pos/ADV]() (1; 1% instances), [hu-pos/VERB]()-[hu-pos/NOUN]() (1; 1% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 csubj	color:blue
1	Akinek	aki	PRON	_	Case=Gen|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Rel	4	nmod:att	_	_
2	pedig	pedig	CONJ	_	_	4	cc	_	_
3	lapát	lapát	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	nsubj	_	_
4	van	van	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	csubj	_	_
5	a	a	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	kezében	kéz	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	4	nmod:obl	_	_
7	,	,	PUNCT	_	_	10	punct	_	_
8	biztosan	biztos	ADJ	_	Case=Ess|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	amod:mode	_	_
9	nem	nem	ADV	_	PronType=Neg	10	neg	_	_
10	fázik	fázik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 csubj	color:blue
1	Ezeket	ez	PRON	_	Case=Acc|Number=Plur|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	2	dobj	_	_
2	vitatják	vitat	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	így	így	CONJ	_	_	2	cc	_	_
5	elképzelhető	elképzelhető	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	2	conj	_	_
6	,	,	PUNCT	_	_	5	punct	_	_
7	hogy	hogy	SCONJ	_	_	9	mark	_	_
8	nem	nem	ADV	_	PronType=Neg	9	neg	_	_
9	kell	kell	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	csubj	_	_
10	mindent	minden	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Tot	11	dobj	_	_
11	kifizetni	ki+fizet	VERB	_	VerbForm=Inf|Voice=Act	9	xcomp	_	_
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	ok	ok	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
3	:	:	PUNCT	_	_	2	punct	_	_
4	Tito	Tito	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nsubj	_	_
5	álmatlanságban	álmatlanság	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:obl	_	_
6	szenvedett	szenved	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	csubj	_	_
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


