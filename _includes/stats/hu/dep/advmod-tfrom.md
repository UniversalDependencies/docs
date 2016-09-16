

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [advmod]().
There are also 7 other language-specific subtypes of `advmod`: [advmod:locy](), [advmod:mode](), [advmod:obl](), [advmod:que](), [advmod:tlocy](), [advmod:to](), [advmod:tto]().

18 nodes (0%) are attached to their parents as `advmod:tfrom`.

15 instances of `advmod:tfrom` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.22222222222222.

The following 5 pairs of parts of speech are connected with `advmod:tfrom`: [hu-pos/VERB]()-[hu-pos/ADV]() (11; 61% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (3; 17% instances), [hu-pos/ADJ]()-[hu-pos/ADV]() (2; 11% instances), [hu-pos/PRON]()-[hu-pos/ADV]() (1; 6% instances), [hu-pos/VERB]()-[hu-pos/NUM]() (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advmod:tfrom	color:blue
1	Farkas	Farkas	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	name	_	_
2	Helga	Helga	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nsubj	_	_
3	azóta	azóta	ADV	_	PronType=Dem	5	advmod:tfrom	_	_
4	nem	nem	ADV	_	PronType=Neg	5	neg	_	_
5	került	kerül	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	elő	elő	ADV	_	Degree=Pos	5	compound:preverb	_	_
7	.	.	PUNCT	_	_	5	punct	_	_

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
6	élek	él	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
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
4	évtizedek	évtized	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	19	nmod	_	_
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
15	alakja	alak	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	19	nsubj	_	_
16	,	,	PUNCT	_	_	15	punct	_	_
17	élő	élő	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	18	amod:att	_	_
18	legenda	legenda	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	15	conj	_	_
19	vált	válik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
20	.	.	PUNCT	_	_	19	punct	_	_

~~~


