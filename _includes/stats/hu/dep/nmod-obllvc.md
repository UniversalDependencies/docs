

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [nmod]().
There are also 3 other language-specific subtypes of `nmod`: [nmod:att](), [nmod:attlvc](), [nmod:obl]().

16 nodes (0%) are attached to their parents as `nmod:obllvc`.

12 instances of `nmod:obllvc` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1875.

The following 3 pairs of parts of speech are connected with `nmod:obllvc`: [hu-pos/VERB]()-[hu-pos/NOUN]() (10; 63% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (4; 25% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (2; 13% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:obllvc	color:blue
1	Lángba	láng	NOUN	_	Case=Ill|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	nmod:obllvc	_	_
2	borult	borul	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	tegnap	tegnap	ADV	_	_	4	advmod:tlocy	_	_
4	délelőtt	délelőtt	ADV	_	_	2	advmod:tlocy	_	_
5	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
6	márianosztrai	márianosztrai	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	amod:att	_	_
7	fegyház	fegyház	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	nmod:att	_	_
8	kápolnája	kápolna	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	2	nsubj	_	_
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 nmod:obllvc	color:blue
1	Ezért	ezért	ADV	_	PronType=Dem	3	advmod:mode	_	_
2	is	is	ADV	_	_	3	advmod:mode	_	_
3	fontos	fontos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	hogy	hogy	SCONJ	_	_	19	mark	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	viszony	viszony	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	19	nsubj	_	_
8	a	a	DET	_	Definite=Def|PronType=Art	9	det	_	_
9	korrektségen	korrektség	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	19	nmod:obl	_	_
10	,	,	PUNCT	_	_	9	punct	_	_
11	a	a	DET	_	Definite=Def|PronType=Art	12	det	_	_
12	kiszámíthatóságon	kiszámíthatóság	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	conj	_	_
13	,	,	PUNCT	_	_	9	punct	_	_
14	egymás	egymás	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Rcp	15	nmod:att	_	_
15	érdekeinek	érdek	NOUN	_	Case=Gen|Number=Plur|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	18	nmod:att	_	_
16	kölcsönös	kölcsönös	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	18	amod:att	_	_
17	tiszteletben	tisztelet	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	18	nmod:obllvc	_	_
18	tartásán	tartás	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	9	conj	_	_
19	alapuljon	alapul	VERB	_	Definite=Ind|Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj	_	_
20	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:obllvc	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	4	det	_	_
2	őrizetbe	őrizet	NOUN	_	Case=Ill|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	nmod:obllvc	_	_
3	vett	vett	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPast	4	amod:att	_	_
4	árusoktól	árus	NOUN	_	Case=Abl|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nmod:obl	_	_
5	vásárolt	vásárol	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
7	múlt	múlt	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	amod:att	_	_
8	héten	hét	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nmod:obl	_	_
9	az	az	DET	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	12	det	_	_
10	a	a	DET	_	Definite=Def|PronType=Art	12	det	_	_
11	két	két	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	12	nummod	_	_
12	fiatal	fiatal	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nsubj	_	_
13	,	,	PUNCT	_	_	5	punct	_	_
14	akik	aki	PRON	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Rel	25	nmod	_	_
15	közül	közül	ADP	_	_	14	case	_	_
16	az	az	DET	_	Definite=Def|PronType=Art	17	det	_	_
17	egyik	egyik	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Ind	25	nsubj	_	_
18	—	—	PUNCT	_	_	21	punct	_	_
19	feltehetőleg	feltehetőleg	ADV	_	_	21	advmod:mode	_	_
20	a	a	DET	_	Definite=Def|PronType=Art	21	det	_	_
21	kábítószer	kábítószer	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	25	parataxis	_	_
22	miatt	miatt	ADP	_	_	21	case	_	_
23	—	—	PUNCT	_	_	21	punct	_	_
24	életét	élet	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	25	dobj	_	_
25	vesztette	veszt	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	acl	_	_
26	,	,	PUNCT	_	_	25	punct	_	_
27	a	a	DET	_	Definite=Def|PronType=Art	28	det	_	_
28	másikat	másik	PRON	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Ind	32	dobj	_	_
29	pedig	pedig	CONJ	_	_	25	cc	_	_
30	súlyos	súlyos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	31	amod:att	_	_
31	állapotban	állapot	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	32	nmod:obl	_	_
32	szállították	szállít	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	25	conj	_	_
33	kórházba	kórház	NOUN	_	Case=Ill|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	32	nmod:obl	_	_
34	.	.	PUNCT	_	_	5	punct	_	_

~~~


