

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [amod]().
There are also 3 other language-specific subtypes of `amod`: [amod:att](), [amod:attlvc](), [amod:obl]().

164 nodes (1%) are attached to their parents as `amod:mode`.

154 instances of `amod:mode` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.01829268292683.

The following 8 pairs of parts of speech are connected with `amod:mode`: [hu-pos/VERB]()-[hu-pos/ADJ]() (123; 75% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (31; 19% instances), [hu-pos/NOUN]()-[hu-pos/ADJ]() (3; 2% instances), [hu-pos/ADV]()-[hu-pos/ADJ]() (2; 1% instances), [hu-pos/DET]()-[hu-pos/ADJ]() (2; 1% instances), [hu-pos/NOUN]()-[hu-pos/ADV]() (1; 1% instances), [hu-pos/PROPN]()-[hu-pos/ADJ]() (1; 1% instances), [hu-pos/VERB]()-[hu-pos/ADV]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 amod:mode	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	jogegységi	jogegységi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	amod:att	_	_
3	döntés	döntés	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nsubj	_	_
4	várhatóan	várható	ADJ	_	Case=Ess|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	6	amod:mode	_	_
5	decemberben	december	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:obl	_	_
6	születik	születik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	meg	meg	PART	_	_	6	compound:preverb	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 amod:mode	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	árindex	árindex	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nsubj	_	_
3	várhatóan	várható	ADJ	_	Case=Ess|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	5	amod:mode	_	_
4	8	8	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	5	nummod	_	_
5	százalékos	százalékos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
6	lesz	lesz	AUX	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 11 amod:mode	color:blue
1	Milos	Milos	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	18	nsubj	_	_
2	Zeman	Zeman	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	1	flat:name	_	_
3	és	és	CCONJ	_	_	4	cc	_	_
4	Mikulás	Mikulás	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	1	conj	_	_
5	Dzurinda	Dzurinda	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	flat:name	_	_
6	azonban	azonban	CCONJ	_	_	18	cc	_	_
7	alig	alig	ADV	_	_	9	advmod:mode	_	_
8	egy	egy	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	9	nummod	_	_
9	éve	év	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	18	obl	_	SpaceAfter=No
10	,	,	PUNCT	_	_	18	punct	_	_
11	közvetlenül	közvetlen	ADJ	_	Case=Ess|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	14	amod:mode	_	_
12	a	a	DET	_	Definite=Def|PronType=Art	14	det	_	_
13	szlovákiai	szlovákiai	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	14	amod:att	_	_
14	kormányváltás	kormányváltás	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	18	obl	_	_
15	után	után	ADP	_	_	14	case	_	_
16	máris	máris	ADV	_	_	18	advmod:tlocy	_	_
17	egyezséget	egyezség	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	18	obj:lvc	_	_
18	kötött	köt	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
19	,	,	PUNCT	_	_	18	punct	_	_
20	amelynek	amely	PRON	_	Case=Gen|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Rel	21	nmod:att	_	_
21	értelmében	értelem	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	26	nmod:obl	_	_
22	egy	egy	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	23	nummod	_	_
23	éven	év	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	26	nmod:obl	_	_
24	belül	belül	ADP	_	_	23	case	_	_
25	pontot	pont	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	26	obj	_	_
26	tesznek	tesz	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	17	acl	_	_
27	az	az	DET	_	Definite=Def|PronType=Art	28	det	_	_
28	ügy	ügy	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	29	nmod:att	_	_
29	végére	vég	NOUN	_	Case=Sub|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	26	nmod:obl	_	SpaceAfter=No
30	.	.	PUNCT	_	_	18	punct	_	_

~~~


