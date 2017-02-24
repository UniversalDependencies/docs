

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: [nsubj:lvc]().

1973 nodes (6%) are attached to their parents as `nsubj`.

1500 instances of `nsubj` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.07602635580335.

The following 28 pairs of parts of speech are connected with `nsubj`: [hu-pos/VERB]()-[hu-pos/NOUN]() (1190; 60% instances), [hu-pos/VERB]()-[hu-pos/PROPN]() (213; 11% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (195; 10% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (130; 7% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (84; 4% instances), [hu-pos/NOUN]()-[hu-pos/PRON]() (37; 2% instances), [hu-pos/ADJ]()-[hu-pos/PRON]() (27; 1% instances), [hu-pos/PRON]()-[hu-pos/NOUN]() (19; 1% instances), [hu-pos/VERB]()-[hu-pos/ADJ]() (14; 1% instances), [hu-pos/PROPN]()-[hu-pos/NOUN]() (12; 1% instances), [hu-pos/ADJ]()-[hu-pos/PROPN]() (10; 1% instances), [hu-pos/NOUN]()-[hu-pos/PROPN]() (8; 0% instances), [hu-pos/NOUN]()-[hu-pos/ADJ]() (4; 0% instances), [hu-pos/VERB]()-[hu-pos/NUM]() (4; 0% instances), [hu-pos/ADV]()-[hu-pos/NOUN]() (3; 0% instances), [hu-pos/PRON]()-[hu-pos/PRON]() (3; 0% instances), [hu-pos/VERB]()-[hu-pos/ADV]() (3; 0% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (2; 0% instances), [hu-pos/ADV]()-[hu-pos/PRON]() (2; 0% instances), [hu-pos/AUX]()-[hu-pos/PROPN]() (2; 0% instances), [hu-pos/DET]()-[hu-pos/PRON]() (2; 0% instances), [hu-pos/NUM]()-[hu-pos/NOUN]() (2; 0% instances), [hu-pos/NUM]()-[hu-pos/PRON]() (2; 0% instances), [hu-pos/AUX]()-[hu-pos/PRON]() (1; 0% instances), [hu-pos/DET]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/PRON]()-[hu-pos/ADJ]() (1; 0% instances), [hu-pos/PRON]()-[hu-pos/PROPN]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 nsubj	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	5	det	_	_
2	utolsó	utolsó	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:att	_	_
3	hat	hat	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	4	nummod	_	_
4	hónapos	hónapos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:att	_	_
5	időszak	időszak	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	nsubj	_	_
6	azonban	azonban	CCONJ	_	_	10	cc	_	_
7	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
8	hét	hét	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nmod:att	_	_
9	elején	eleje	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	10	nmod:obl	_	_
10	lejárt	le+jár	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	LRI	LRI	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nsubj	_	_
3	szerdán	szerda	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:obl	_	_
4	két	két	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	5	nummod	_	_
5	közleményt	közlemény	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	obj	_	_
6	juttatott	jut	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Cau	0	root	_	_
7	el	el	ADV	_	_	6	compound:preverb	_	_
8	szerkesztőségünkhöz	szerkesztőség	NOUN	_	Case=All|Number=Sing|Number[psed]=None|Number[psor]=Plur|Person[psor]=1	6	nmod:obl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 nsubj	color:blue
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


