

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [advmod]().
There are also 7 other language-specific subtypes of `advmod`: [advmod:mode](), [advmod:obl](), [advmod:que](), [advmod:tfrom](), [advmod:tlocy](), [advmod:to](), [advmod:tto]().

89 nodes (0%) are attached to their parents as `advmod:locy`.

78 instances of `advmod:locy` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.60674157303371.

The following 6 pairs of parts of speech are connected with `advmod:locy`: [hu-pos/VERB]()-[hu-pos/ADV]() (68; 76% instances), [hu-pos/ADJ]()-[hu-pos/ADV]() (15; 17% instances), [hu-pos/NOUN]()-[hu-pos/ADV]() (3; 3% instances), [hu-pos/ADJ]()-[hu-pos/PRON]() (1; 1% instances), [hu-pos/ADV]()-[hu-pos/PROPN]() (1; 1% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 advmod:locy	color:blue
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


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 advmod:locy	color:blue
1	Országszerte	országszerte	ADV	_	_	5	advmod:locy	_	_
2	"	"	PUNCT	_	_	3	punct	_	_
3	nagyüzem	nagyüzem	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nsubj	_	_
4	"	"	PUNCT	_	_	3	punct	_	_
5	várható	várható	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	0	root	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	detoxikálókban	detoxikáló	NOUN	_	Case=Ine|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nmod:obl	_	_
8	,	,	PUNCT	_	_	7	punct	_	_
9	illetve	illetve	CONJ	_	_	7	cc	_	_
10	a	a	DET	_	Definite=Def|PronType=Art	12	det	_	_
11	mérgezési	mérgezési	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	amod:att	_	_
12	osztályokon	osztály	NOUN	_	Case=Sup|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	conj	_	_
13	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 advmod:locy	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	4	det	_	_
2	különböző	különböző	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	amod:att	_	_
3	szolgáltatási	szolgáltatási	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	amod:att	_	_
4	területeken	terület	NOUN	_	Case=Sup|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	14	nmod:obl	_	_
5	,	,	PUNCT	_	_	4	punct	_	_
6	ahol	ahol	ADV	_	PronType=Rel	9	advmod:locy	_	_
7	nagy	nagy	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	amod:att	_	_
8	a	a	DET	_	Definite=Def|PronType=Art	9	det	_	_
9	vendégforgalom	vendégforgalom	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	acl	_	_
10	,	,	PUNCT	_	_	14	punct	_	_
11	a	a	DET	_	Definite=Def|PronType=Art	12	det	_	_
12	biztonság	biztonság	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	13	nmod:att	_	_
13	szempontjából	szempont	NOUN	_	Case=Ela|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	14	nmod:obl	_	_
14	nélkülözhetetlen	nélkülözhetetlen	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
15	a	a	DET	_	Definite=Def|PronType=Art	16	det	_	_
16	megfigyelés	megfigyelés	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	14	nsubj	_	_
17	.	.	PUNCT	_	_	14	punct	_	_

~~~


