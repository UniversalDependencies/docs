

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

106 nodes (0%) are attached to their parents as `parataxis`.

74 instances of `parataxis` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.82075471698113.

The following 25 pairs of parts of speech are connected with `parataxis`: [hu-pos/VERB]()-[hu-pos/VERB]() (26; 25% instances), [hu-pos/VERB]()-[hu-pos/NOUN]() (13; 12% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (9; 8% instances), [hu-pos/NOUN]()-[hu-pos/ADJ]() (8; 8% instances), [hu-pos/NOUN]()-[hu-pos/VERB]() (8; 8% instances), [hu-pos/NOUN]()-[hu-pos/PROPN]() (5; 5% instances), [hu-pos/VERB]()-[hu-pos/ADV]() (5; 5% instances), [hu-pos/ADJ]()-[hu-pos/VERB]() (4; 4% instances), [hu-pos/VERB]()-[hu-pos/ADJ]() (4; 4% instances), [hu-pos/VERB]()-[hu-pos/PROPN]() (4; 4% instances), [hu-pos/NOUN]()-[hu-pos/ADV]() (3; 3% instances), [hu-pos/NOUN]()-[hu-pos/NUM]() (3; 3% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (2; 2% instances), [hu-pos/ADJ]()-[hu-pos/ADV]() (1; 1% instances), [hu-pos/ADJ]()-[hu-pos/CCONJ]() (1; 1% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (1; 1% instances), [hu-pos/ADJ]()-[hu-pos/PROPN]() (1; 1% instances), [hu-pos/NOUN]()-[hu-pos/CCONJ]() (1; 1% instances), [hu-pos/NOUN]()-[hu-pos/PUNCT]() (1; 1% instances), [hu-pos/NUM]()-[hu-pos/PRON]() (1; 1% instances), [hu-pos/PROPN]()-[hu-pos/PROPN]() (1; 1% instances), [hu-pos/VERB]()-[hu-pos/CCONJ]() (1; 1% instances), [hu-pos/VERB]()-[hu-pos/NUM]() (1; 1% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (1; 1% instances), [hu-pos/VERB]()-[hu-pos/PUNCT]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 parataxis	color:blue
1	Felvetődik	fel+vetődik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	a	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
3	kérdés	kérdés	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	1	nsubj	_	SpaceAfter=No
4	:	:	PUNCT	_	_	1	punct	_	_
5	vajon	vajon	ADV	_	PronType=Int	7	advmod:que	_	_
6	végtelenné	végtelen	ADJ	_	Case=Tra|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	amod:obl	_	_
7	válik	válik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	SpaceAfter=No
8	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 parataxis	color:blue
1	Horváth	Horváth	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nsubj	_	_
2	Zsolt	Zsolt	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	1	flat:name	_	_
3	(	(	PUNCT	_	_	4	punct	_	SpaceAfter=No
4	Fidesz	Fidesz	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	1	appos	_	SpaceAfter=No
5	)	)	PUNCT	_	_	4	punct	_	_
6	hangsúlyozta	hangsúlyoz	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	:	:	PUNCT	_	_	6	punct	_	_
8	céljuk	cél	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Plur|Person[psor]=3	6	parataxis	_	_
9	az	az	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	8	nsubj	_	SpaceAfter=No
10	,	,	PUNCT	_	_	8	punct	_	_
11	hogy	hogy	SCONJ	_	_	22	mark	_	_
12	a	a	DET	_	Definite=Def|PronType=Art	15	det	_	_
13	három	három	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	15	nummod	_	_
14	érintett	érintett	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	15	amod:att	_	_
15	praxis	praxis	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	22	nsubj	_	_
16	egy-egy	egy-egy	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Dist|Person[psor]=None	17	nummod	_	_
17	körzethez	körzet	NOUN	_	Case=All|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	22	nmod:obl	_	SpaceAfter=No
18	,	,	PUNCT	_	_	21	punct	_	_
19	egy-egy	egy-egy	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Dist|Person[psor]=None	21	nummod	_	_
20	területi	területi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	21	amod:att	_	_
21	ellátáshoz	ellátás	NOUN	_	Case=All|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	17	conj	_	_
22	kötődjön	kötődik	VERB	_	Definite=Ind|Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	csubj	_	SpaceAfter=No
23	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 parataxis	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	Jaguár	Jaguár	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
3	az	az	DET	_	Definite=Def|PronType=Art	7	det	_	_
4	első	első	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Ord|Person[psor]=None	7	amod:att	_	_
5	így	így	ADV	_	PronType=Dem	6	advmod:mode	_	_
6	készült	készült	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPast	7	amod:att	_	_
7	munkám	munka	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=1	2	nsubj	_	SpaceAfter=No
8	:	:	PUNCT	_	_	7	punct	_	_
9	egy	egy	DET	_	Definite=Ind|PronType=Art	11	det	_	_
10	lehetséges	lehetséges	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	11	amod:att	_	_
11	út	út	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	nmod:att	_	_
12	kezdete	kezdet	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	7	parataxis	_	SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	_	_

~~~


