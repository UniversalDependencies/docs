

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

587 nodes (2%) are attached to their parents as `mark`.

576 instances of `mark` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.71720613287905.

The following 11 pairs of parts of speech are connected with `mark`: [hu-pos/VERB]()-[hu-pos/SCONJ]() (469; 80% instances), [hu-pos/NOUN]()-[hu-pos/SCONJ]() (49; 8% instances), [hu-pos/ADJ]()-[hu-pos/SCONJ]() (33; 6% instances), [hu-pos/NUM]()-[hu-pos/SCONJ]() (15; 3% instances), [hu-pos/PRON]()-[hu-pos/SCONJ]() (8; 1% instances), [hu-pos/ADV]()-[hu-pos/SCONJ]() (7; 1% instances), [hu-pos/AUX]()-[hu-pos/SCONJ]() (2; 0% instances), [hu-pos/ADJ]()-[hu-pos/ADV]() (1; 0% instances), [hu-pos/DET]()-[hu-pos/SCONJ]() (1; 0% instances), [hu-pos/PROPN]()-[hu-pos/SCONJ]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 mark	color:blue
1	Mert	mert	SCONJ	_	_	5	mark	_	_
2	hősünket	hős	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=Plur|Person[psor]=1	5	obj	_	_
3	egyszer	egyszer	ADV	_	_	5	advmod:tlocy	_	_
4	csak	csak	ADV	_	_	5	advmod:mode	_	_
5	kiemelték	ki+emel	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 mark	color:blue
1	Olyan	olyan	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
2	az	az	DET	_	Definite=Def|PronType=Art	3	det	_	_
3	emlékezet	emlékezet	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	1	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	1	punct	_	_
5	mint	mint	SCONJ	_	_	10	mark	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
7	zsidó	zsidó	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	amod:att	_	_
8	sírokon	sír	NOUN	_	Case=Sup|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	nmod:obl	_	_
9	a	a	DET	_	Definite=Def|PronType=Art	10	det	_	_
10	kődarab	kődarab	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	1	advcl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	—	—	PUNCT	_	_	2	punct	_	_
2	Igen	igen	INTJ	_	_	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	bár	bár	SCONJ	_	_	5	mark	_	_
5	nehéz	nehéz	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	advcl	_	_
6	egészséges	egészséges	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	amod:att	_	_
7	arányt	arány	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	obj	_	_
8	találni	talál	VERB	_	VerbForm=Inf|Voice=Act	5	xcomp	_	_
9	a	a	DET	_	Definite=Def|PronType=Art	11	det	_	_
10	két	két	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	11	nummod	_	_
11	műfaj	műfaj	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	obl	_	_
12	között	között	ADP	_	_	11	case	_	SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	_	_

~~~


