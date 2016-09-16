

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: [nsubj:lvc]().

2611 nodes (6%) are attached to their parents as `nsubj`.

1979 instances of `nsubj` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.11030256606664.

The following 31 pairs of parts of speech are connected with `nsubj`: [hu-pos/VERB]()-[hu-pos/NOUN]() (1549; 59% instances), [hu-pos/VERB]()-[hu-pos/PROPN]() (319; 12% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (266; 10% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (161; 6% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (101; 4% instances), [hu-pos/NOUN]()-[hu-pos/PRON]() (46; 2% instances), [hu-pos/ADJ]()-[hu-pos/PRON]() (35; 1% instances), [hu-pos/ADJ]()-[hu-pos/PROPN]() (20; 1% instances), [hu-pos/PRON]()-[hu-pos/NOUN]() (20; 1% instances), [hu-pos/NOUN]()-[hu-pos/PROPN]() (15; 1% instances), [hu-pos/PROPN]()-[hu-pos/NOUN]() (15; 1% instances), [hu-pos/VERB]()-[hu-pos/ADJ]() (14; 1% instances), [hu-pos/VERB]()-[hu-pos/NUM]() (8; 0% instances), [hu-pos/ADV]()-[hu-pos/NOUN]() (6; 0% instances), [hu-pos/VERB]()-[hu-pos/ADV]() (5; 0% instances), [hu-pos/ADV]()-[hu-pos/PROPN]() (4; 0% instances), [hu-pos/NOUN]()-[hu-pos/ADJ]() (4; 0% instances), [hu-pos/PRON]()-[hu-pos/PRON]() (3; 0% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (2; 0% instances), [hu-pos/ADV]()-[hu-pos/PRON]() (2; 0% instances), [hu-pos/AUX]()-[hu-pos/PROPN]() (2; 0% instances), [hu-pos/DET]()-[hu-pos/PRON]() (2; 0% instances), [hu-pos/NUM]()-[hu-pos/NOUN]() (2; 0% instances), [hu-pos/NUM]()-[hu-pos/PRON]() (2; 0% instances), [hu-pos/PRON]()-[hu-pos/ADJ]() (2; 0% instances), [hu-pos/AUX]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/AUX]()-[hu-pos/PRON]() (1; 0% instances), [hu-pos/DET]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/NOUN]()-[hu-pos/NUM]() (1; 0% instances), [hu-pos/PRON]()-[hu-pos/PROPN]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/DET]() (1; 0% instances).


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
6	azonban	azonban	CONJ	_	_	10	cc	_	_
7	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
8	hét	hét	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nmod:att	_	_
9	elején	eleje	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	10	nmod:obl	_	_
10	lejárt	le+jár	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
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
5	közleményt	közlemény	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	dobj	_	_
6	juttatott	jut	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Cau	0	root	_	_
7	el	el	ADV	_	_	6	compound:preverb	_	_
8	szerkesztőségünkhöz	szerkesztőség	NOUN	_	Case=All|Number=Sing|Number[psed]=None|Number[psor]=Plur|Person[psor]=1	6	nmod:obl	_	_
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 nsubj	color:blue
1	Ez	ez	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	9	nsubj	_	_
2	itt	itt	ADV	_	PronType=Dem	9	advmod:locy	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	Athénban	Athén	PROPN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	appos	_	_
5	a	a	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	fogásnem	fogásnem	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	nmod:att	_	_
7	6.	6.	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Ord|Person[psor]=None	8	amod:att	_	_
8	helyét	hely	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	9	dobj	_	_
9	jelentette	jelent	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
10	számára	számára	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Prs	9	advmod:mode	_	_
11	.	.	PUNCT	_	_	9	punct	_	_

~~~


