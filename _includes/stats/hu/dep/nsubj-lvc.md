

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [nsubj]().

2 nodes (0%) are attached to their parents as `nsubj:lvc`.

1 instances of `nsubj:lvc` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `nsubj:lvc`: [hu-pos/VERB]()-[hu-pos/NOUN]() (2; 100% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 nsubj:lvc	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	orosz	orosz	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	amod:att	_	_
3	miniszterelnöknek	miniszterelnök	NOUN	_	Case=Gen|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:att	_	_
4	érvényes	érvényes	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:att	_	_
5	meghívása	meghívás	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	6	nsubj	_	_
6	van	van	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	Magyarországra	Magyarország	PROPN	_	Case=Sub|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:obl	_	SpaceAfter=No
8	,	,	PUNCT	_	_	16	punct	_	_
9	ám	ám	CCONJ	_	_	16	cc	_	_
10	erre	ez	PRON	_	Case=Sub|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	16	nmod:obl	_	_
11	feltehetően	feltehető	ADJ	_	Case=Ess|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	16	amod:mode	_	_
12	az	az	DET	_	Definite=Def|PronType=Art	13	det	_	_
13	idén	idén	ADV	_	_	16	advmod:tlocy	_	_
14	már	már	ADV	_	_	16	advmod:tlocy	_	_
15	nem	nem	ADV	_	PronType=Neg	16	advmod	_	_
16	kerül	kerül	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	_
17	sor	sor	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	16	nsubj:lvc	_	SpaceAfter=No
18	.	.	PUNCT	_	_	6	punct	_	_

~~~


