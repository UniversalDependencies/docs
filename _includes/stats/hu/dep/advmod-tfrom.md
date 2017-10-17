

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [advmod]().
There are also 7 other language-specific subtypes of `advmod`: [advmod:locy](), [advmod:mode](), [advmod:obl](), [advmod:que](), [advmod:tlocy](), [advmod:to](), [advmod:tto]().

12 nodes (0%) are attached to their parents as `advmod:tfrom`.

10 instances of `advmod:tfrom` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.25.

The following 5 pairs of parts of speech are connected with `advmod:tfrom`: [hu-pos/VERB]()-[hu-pos/ADV]() (5; 42% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (3; 25% instances), [hu-pos/ADJ]()-[hu-pos/ADV]() (2; 17% instances), [hu-pos/PRON]()-[hu-pos/ADV]() (1; 8% instances), [hu-pos/VERB]()-[hu-pos/NUM]() (1; 8% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 advmod:tfrom	color:blue
1	Pontosan	pontos	ADJ	_	Case=Ess|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	advmod:mode	_	_
2	azóta	azóta	ADV	_	PronType=Dem	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	amióta	amióta	ADV	_	PronType=Rel	9	advmod:tfrom	_	_
5	egy	egy	DET	_	Definite=Ind|PronType=Art	7	det	_	_
6	vezetői	vezetői	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	amod:att	_	_
7	döntés	döntés	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	obl	_	_
8	nyomán	nyomán	ADP	_	_	7	case	_	_
9	eltüntették	el+tűnik	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Cau	2	advcl	_	_
10	a	a	DET	_	Definite=Def|PronType=Art	12	det	_	_
11	hófogó	hófogó	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	nmod:att	_	_
12	rácsokat	rács	NOUN	_	Case=Acc|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	obj	_	_
13	az	az	DET	_	Definite=Def|PronType=Art	14	det	_	_
14	út	út	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	16	nmod:att	_	_
15	két	két	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	16	nummod	_	_
16	oldaláról	oldal	NOUN	_	Case=Del|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	9	nmod:obl	_	SpaceAfter=No
17	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 advmod:tfrom	color:blue
1	Közülük	közül	PRON	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Prs	6	advmod:tfrom	_	_
2	már	már	ADV	_	_	6	advmod:tlocy	_	_
3	csak	csak	ADV	_	_	6	advmod:mode	_	_
4	33	33	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	5	compound	_	_
5	millióan	millió	NUM	_	Case=Ess|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	6	nsubj	_	_
6	élek	él	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:tfrom	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	4	det	_	_
2	azóta	azóta	ADV	_	PronType=Dem	3	advmod:tfrom	_	_
3	eltelt	eltelt	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPast	4	amod:att	_	_
4	évtizedek	évtized	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	19	obl	_	_
5	alatt	alatt	ADP	_	_	4	case	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
7	fiatal	fiatal	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	amod:att	_	_
8	baritonistából	baritonista	NOUN	_	Case=Ela|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	19	nmod:obl	_	_
9	a	a	DET	_	Definite=Def|PronType=Art	12	det	_	_
10	magyar	magyar	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	amod:att	_	_
11	zenei	zenei	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	amod:att	_	_
12	élet	élet	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	15	nmod:att	_	_
13	egyik	egyik	DET	_	Definite=Def|PronType=Ind	15	det	_	_
14	vezető	vezető	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	15	amod:att	_	_
15	alakja	alak	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	19	nsubj	_	SpaceAfter=No
16	,	,	PUNCT	_	_	18	punct	_	_
17	élő	élő	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	18	amod:att	_	_
18	legenda	legenda	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	15	conj	_	_
19	vált	válik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
20	.	.	PUNCT	_	_	19	punct	_	_

~~~


