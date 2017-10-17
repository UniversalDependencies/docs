

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [amod]().
There are also 3 other language-specific subtypes of `amod`: [amod:att](), [amod:attlvc](), [amod:mode]().

48 nodes (0%) are attached to their parents as `amod:obl`.

40 instances of `amod:obl` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.375.

The following 7 pairs of parts of speech are connected with `amod:obl`: [hu-pos/VERB]()-[hu-pos/ADJ]() (30; 63% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (11; 23% instances), [hu-pos/NOUN]()-[hu-pos/ADJ]() (2; 4% instances), [hu-pos/VERB]()-[hu-pos/PROPN]() (2; 4% instances), [hu-pos/ADJ]()-[hu-pos/NUM]() (1; 2% instances), [hu-pos/ADV]()-[hu-pos/ADJ]() (1; 2% instances), [hu-pos/VERB]()-[hu-pos/NOUN]() (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod:obl	color:blue
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
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 amod:obl	color:blue
1	Az	az	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	3	nsubj	_	_
2	is	is	CCONJ	_	_	1	cc	_	ToDo=cc-without-conj
3	tény	tény	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	SpaceAfter=No
4	:	:	PUNCT	_	_	3	punct	_	_
5	az	az	DET	_	Definite=Def|PronType=Art	12	det	_	_
6	immár	immár	ADV	_	_	9	advmod:mode	_	_
7	tíz	tíz	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	8	nummod	_	_
8	éve	év	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	9	obl	_	_
9	tartó	tartó	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	12	amod:att	_	_
10	folyamatos	folyamatos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	amod:att	_	_
11	világgazdasági	világgazdasági	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	amod:att	_	_
12	konjunktúra	konjunktúra	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	15	nsubj	_	_
13	minden	minden	DET	_	Definite=Ind|PronType=Tot	14	det	_	_
14	eddiginél	eddigi	ADJ	_	Case=Ade|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	15	amod:obl	_	_
15	hosszabb	hosszú	ADJ	_	Case=Nom|Degree=Cmp|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	csubj	_	SpaceAfter=No
16	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 amod:obl	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	legújabb	új	ADJ	_	Case=Nom|Degree=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	amod:att	_	_
3	elképzelések	elképzelés	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	obl	_	_
4	szerint	szerint	ADP	_	_	3	case	_	_
5	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
6	Fillér	Fillér	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	amod:att	_	_
7	utcai	utcai	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	flat:name	_	_
8	iskolát	iskola	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	obj	_	_
9	a	a	DET	_	Definite=Def|PronType=Art	10	det	_	_
10	Fenyves	Fenyves	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	amod:obl	_	_
11	utcaival	utcaival	ADJ	_	Case=Ins|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	flat:name	_	_
12	vonnák	von	VERB	_	Definite=Def|Mood=Cnd|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
13	össze	össze	ADV	_	Degree=Pos	12	compound:preverb	_	SpaceAfter=No
14	.	.	PUNCT	_	_	12	punct	_	_

~~~


