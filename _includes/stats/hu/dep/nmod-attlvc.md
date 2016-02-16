

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [nmod]().
There are also 3 other language-specific subtypes of `nmod`: [nmod:att](), [nmod:obl](), [nmod:obllvc]().

1 nodes (0%) are attached to their parents as `nmod:attlvc`.

1 instances of `nmod:attlvc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `nmod:attlvc`: [hu-pos/NOUN]()-[hu-pos/NOUN]() (1; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:attlvc	color:blue
1	Ezért	ezért	ADV	_	PronType=Dem	2	advmod:mode	_	_
2	siettették	siet	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Cau	0	root	_	_
3	az	az	DET	_	Definite=Def|PronType=Art	4	det	_	_
4	ítélet	ítélet	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nmod:attlvc	_	_
5	meghozatalával	meghozatal	NOUN	_	Case=Ins|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	2	nmod:obl	_	_
6	az	az	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	ügy	ügy	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	nmod:att	_	_
8	lezárását	lezárás	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	2	dobj	_	_
9	,	,	PUNCT	_	_	2	punct	_	_
10	és	és	CONJ	_	_	2	cc	_	_
11	arra	az	PRON	_	Case=Sub|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	13	nmod:obl	_	_
12	is	is	CONJ	_	_	11	cc	_	_
13	számíthattak	számít	VERB	_	Definite=Ind|Mood=Pot|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
14	:	:	PUNCT	_	_	13	punct	_	_
15	az	az	DET	_	Definite=Def|PronType=Art	17	det	_	_
16	önálló	önálló	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	17	amod:att	_	_
17	Szlovákia	Szlovákia	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	18	nmod:att	_	_
18	megteremtésének	megteremtés	NOUN	_	Case=Gen|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	19	nmod:att	_	_
19	láza	láz	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	22	nsubj	_	_
20	el	el	ADV	_	_	22	compound:preverb	_	_
21	is	is	ADV	_	_	22	advmod:mode	_	_
22	tereli	terel	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	ccomp:obl	_	_
23	a	a	DET	_	Definite=Def|PronType=Art	24	det	_	_
24	figyelmet	figyelem	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	22	dobj	_	_
25	a	a	DET	_	Definite=Def|PronType=Art	27	det	_	_
26	gyanús	gyanús	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	27	amod:att	_	_
27	körülményekről	körülmény	NOUN	_	Case=Del|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	22	nmod:obl	_	_
28	.	.	PUNCT	_	_	2	punct	_	_

~~~


