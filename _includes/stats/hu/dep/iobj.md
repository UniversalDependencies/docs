

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

62 nodes (0%) are attached to their parents as `iobj`.

41 instances of `iobj` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.58064516129032.

The following 6 pairs of parts of speech are connected with `iobj`: [hu-pos/VERB]()-[hu-pos/NOUN]() (36; 58% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (12; 19% instances), [hu-pos/VERB]()-[hu-pos/PROPN]() (7; 11% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (3; 5% instances), [hu-pos/ADV]()-[hu-pos/NOUN]() (2; 3% instances), [hu-pos/VERB]()-[hu-pos/ADJ]() (2; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 iobj	color:blue
1	—	—	PUNCT	_	_	5	punct	_	_
2	Sokkal	sokkal	ADV	_	_	3	advmod:mode	_	_
3	több	több	DET	_	Definite=Ind|PronType=Ind	4	det	_	_
4	feladatot	feladat	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	dobj	_	_
5	ad	ad	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	tűzoltóknak	tűzoltó	NOUN	_	Case=Dat|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	iobj	_	_
8	az	az	DET	_	Definite=Def|PronType=Art	10	det	_	_
9	adventi	adventi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	amod:att	_	_
10	koszorúk	koszorú	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	11	nmod:att	_	_
11	okozta	okozta	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	amod:att	_	_
12	kár	kár	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nsubj	_	_
13	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 iobj	color:blue
1	—	—	PUNCT	_	_	3	punct	_	_
2	Mit	mi	PRON	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Int	3	dobj	_	_
3	kíván	kíván	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	ilyenkor	ilyenkor	ADV	_	PronType=Dem	3	advmod:tlocy	_	_
5	magának	maga	PRON	_	Case=Dat|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|Reflex=Yes	3	iobj	_	_
6	még	még	ADV	_	_	3	advmod:tlocy	_	_
7	az	az	DET	_	Definite=Def|PronType=Art	8	det	_	_
8	ember	ember	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	nsubj	_	_
9	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 iobj	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	kolozsváriak	kolozsvári	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	nmod:att	_	_
3	1990-es	1990-es	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	amod:att	_	_
4	vendégjátékán	vendégjáték	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	5	nmod:obl	_	_
5	tapsolhattunk	tapsol	VERB	_	Definite=Ind|Mood=Pot|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	Senkálszky	Senkálszky	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	name	_	_
7	Endrének	Endre	PROPN	_	Case=Dat|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	iobj	_	_
8	is	is	CONJ	_	_	7	cc	_	_
9	,	,	PUNCT	_	_	5	punct	_	_
10	aki	aki	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Rel	15	nsubj	_	_
11	éppen	éppen	ADV	_	_	15	advmod:mode	_	_
12	hatvan	hatvan	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	13	nummod	_	_
13	esztendeje	esztendő	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	15	nmod	_	_
14	aktív	aktív	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	15	amod:att	_	_
15	tagja	tag	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	7	acl	_	_
16	a	a	DET	_	Definite=Def|PronType=Art	18	det	_	_
17	Magyar	Magyar	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	18	name	_	_
18	Színháznak	Színház	PROPN	_	Case=Gen|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	15	nmod:att	_	_
19	.	.	PUNCT	_	_	5	punct	_	_

~~~


