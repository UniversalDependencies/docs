

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

5247 nodes (12%) are attached to their parents as `det`.

5245 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.80026681913474.

The following 14 pairs of parts of speech are connected with `det`: [hu-pos/NOUN]()-[hu-pos/DET]() (4434; 85% instances), [hu-pos/PROPN]()-[hu-pos/DET]() (615; 12% instances), [hu-pos/ADJ]()-[hu-pos/DET]() (101; 2% instances), [hu-pos/ADV]()-[hu-pos/DET]() (30; 1% instances), [hu-pos/NOUN]()-[hu-pos/PRON]() (24; 0% instances), [hu-pos/NUM]()-[hu-pos/DET]() (19; 0% instances), [hu-pos/PRON]()-[hu-pos/DET]() (12; 0% instances), [hu-pos/VERB]()-[hu-pos/DET]() (4; 0% instances), [hu-pos/X]()-[hu-pos/DET]() (3; 0% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/ADJ]()-[hu-pos/PRON]() (1; 0% instances), [hu-pos/ADP]()-[hu-pos/DET]() (1; 0% instances), [hu-pos/DET]()-[hu-pos/DET]() (1; 0% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 det	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
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
# visual-style 4 3 det	color:blue
1	Ezzel	ez	PRON	_	Case=Ins|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	9	nmod:obl	_	_
2	—	—	PUNCT	_	_	4	punct	_	_
3	az	az	DET	_	Definite=Def|PronType=Art	4	det	_	_
4	elhangzottak	elhangzott	ADJ	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPast	9	parataxis	_	_
5	szerint	szerint	ADP	_	_	4	case	_	_
6	—	—	PUNCT	_	_	4	punct	_	_
7	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
8	kamara	kamara	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nsubj	_	_
9	egyetért	egyetért	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


