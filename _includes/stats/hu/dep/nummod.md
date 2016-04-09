

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

356 nodes (1%) are attached to their parents as `nummod`.

354 instances of `nummod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25.

The following 4 pairs of parts of speech are connected with `nummod`: [hu-pos/NOUN]()-[hu-pos/NUM]() (311; 87% instances), [hu-pos/ADJ]()-[hu-pos/NUM]() (41; 12% instances), [hu-pos/NUM]()-[hu-pos/NUM]() (3; 1% instances), [hu-pos/VERB]()-[hu-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	LRI	LRI	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nsubj	_	_
3	szerdán	szerda	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:obl	_	_
4	két	két	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	5	nummod	_	_
5	közleményt	közlemény	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	dobj	_	_
6	juttatott	jut	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Cau	0	root	_	_
7	el	el	ADV	_	_	6	compound:preverb	_	_
8	szerkesztőségünkhöz	szerkesztőség	NOUN	_	Case=All|Number=Sing|Number[psed]=None|Number[psor]=Plur|Person[psor]=1	6	nmod:obl	_	_
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	5	det	_	_
2	utolsó	utolsó	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:att	_	_
3	hat	hat	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	4	nummod	_	_
4	hónapos	hónapos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:att	_	_
5	időszak	időszak	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	nsubj	_	_
6	azonban	azonban	CONJ	_	_	10	cc	_	_
7	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
8	hét	hét	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nmod:att	_	_
9	elején	eleje	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	10	nmod:obl	_	_
10	lejárt	le+jár	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 nummod	color:blue
1	Hiába	hiába	ADV	_	_	2	advmod:mode	_	_
2	birtokolta	birtokol	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	sokkal	sokkal	ADV	_	_	4	advmod:mode	_	_
4	többet	több	DET	_	Case=Acc|Definite=Ind|PronType=Ind	2	nmod:obl	_	_
5	a	a	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	labdát	labda	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	dobj	_	_
7	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
8	MU	MU	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	nsubj	_	_
9	(	(	PUNCT	_	_	13	punct	_	_
10	59	59	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	13	nummod	_	_
11	és	és	CONJ	_	_	10	cc	_	_
12	41	41	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	10	nummod	_	_
13	százalék	százalék	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	parataxis	_	_
14	)	)	PUNCT	_	_	13	punct	_	_
15	,	,	PUNCT	_	_	2	punct	_	_
16	a	a	DET	_	Definite=Def|PronType=Art	17	det	_	_
17	Fiorentina	Fiorentina	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	26	nsubj	_	_
18	két	két	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	22	nummod	_	_
19	óriási	óriási	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	22	amod:att	_	_
20	manchesteri	manchesteri	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	22	amod:att	_	_
21	egyéni	egyéni	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	22	amod:att	_	_
22	hibából	hiba	NOUN	_	Case=Ela|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	23	nmod:obl	_	_
23	szerzett	szerzett	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPast	25	amod:att	_	_
24	két	két	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	25	nummod	_	_
25	góllal	gól	NOUN	_	Case=Ins|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	26	nmod:obl	_	_
26	nyert	nyer	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
27	.	.	PUNCT	_	_	2	punct	_	_

~~~


