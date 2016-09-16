

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

1821 nodes (4%) are attached to their parents as `cc`.

1448 instances of `cc` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.0494233937397.

The following 18 pairs of parts of speech are connected with `cc`: [hu-pos/VERB]()-[hu-pos/CONJ]() (743; 41% instances), [hu-pos/NOUN]()-[hu-pos/CONJ]() (623; 34% instances), [hu-pos/ADJ]()-[hu-pos/CONJ]() (203; 11% instances), [hu-pos/PROPN]()-[hu-pos/CONJ]() (122; 7% instances), [hu-pos/PRON]()-[hu-pos/CONJ]() (65; 4% instances), [hu-pos/ADV]()-[hu-pos/CONJ]() (27; 1% instances), [hu-pos/NUM]()-[hu-pos/CONJ]() (22; 1% instances), [hu-pos/ADJ]()-[hu-pos/SCONJ]() (3; 0% instances), [hu-pos/DET]()-[hu-pos/CONJ]() (2; 0% instances), [hu-pos/VERB]()-[hu-pos/ADV]() (2; 0% instances), [hu-pos/VERB]()-[hu-pos/SCONJ]() (2; 0% instances), [hu-pos/ADJ]()-[hu-pos/ADV]() (1; 0% instances), [hu-pos/AUX]()-[hu-pos/CONJ]() (1; 0% instances), [hu-pos/CONJ]()-[hu-pos/CONJ]() (1; 0% instances), [hu-pos/CONJ]()-[hu-pos/NOUN]() (1; 0% instances), [hu-pos/NUM]()-[hu-pos/PUNCT]() (1; 0% instances), [hu-pos/PRON]()-[hu-pos/SCONJ]() (1; 0% instances), [hu-pos/PROPN]()-[hu-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 cc	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cc	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cc	color:blue
1	Mindez	mindez	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	8	nsubj	_	_
2	mára	mára	ADV	_	_	8	advmod:tto	_	_
3	kritikus	kritikus	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	amod:att	_	_
4	forgalmi	forgalmi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	amod:att	_	_
5	és	és	CONJ	_	_	4	cc	_	_
6	környezeti	környezeti	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	conj	_	_
7	helyzethez	helyzet	NOUN	_	Case=All|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	nmod:obl	_	_
8	vezetett	vezet	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


