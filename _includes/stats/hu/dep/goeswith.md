

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

2 nodes (0%) are attached to their parents as `goeswith`.

2 instances of `goeswith` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `goeswith`: [hu-pos/ADV]()-[hu-pos/ADV]() (1; 50% instances), [hu-pos/CONJ]()-[hu-pos/ADV]() (1; 50% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 goeswith	color:blue
1	Ezek	ez	PRON	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	5	nsubj	_	_
2	már	már	ADV	_	_	5	advmod:tlocy	_	_
3	pénzt	pénz	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	dobj:lvc	_	_
4	is	is	CONJ	_	_	3	cc	_	_
5	hoznának	hoz	VERB	_	Definite=Ind|Mood=Cnd|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	házhoz	ház	NOUN	_	Case=All|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nmod:obl	_	_
8	,	,	PUNCT	_	_	5	punct	_	_
9	nem	nem	ADV	_	PronType=Neg	10	goeswith	_	_
10	csak	csak	CONJ	_	_	11	cc	_	_
11	nekem	én	PRON	_	Case=Dat|Number=Sing|Number[psed]=None|Number[psor]=None|Person=1|Person[psor]=None|PronType=Prs	5	nmod:obl	_	_
12	,	,	PUNCT	_	_	11	punct	_	_
13	hanem	hanem	CONJ	_	_	11	cc	_	_
14	az	az	DET	_	Definite=Def|PronType=Art	15	det	_	_
15	Universumnak	Universum	PROPN	_	Case=Dat|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	11	conj	_	_
16	is	is	CONJ	_	_	11	cc	_	_
17	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 goeswith	color:blue
1	Ugyan	ugyan	ADV	_	_	2	goeswith	_	_
2	ilyen	ilyen	ADV	_	PronType=Dem	4	amod:att	_	_
3	konkrét	konkrét	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	amod:att	_	_
4	eset	eset	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nsubj	_	_
5	ismert	ismert	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPast	0	root	_	_
6	az	az	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	érdekképviselők	érdekképviselő	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nmod	_	_
8	előtt	előtt	ADP	_	_	7	case	_	_
9	Kerekegyházán	Kerekegyháza	PROPN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nmod:obl	_	_
10	is	is	CONJ	_	_	9	cc	_	_
11	.	.	PUNCT	_	_	5	punct	_	_

~~~


