

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

5 nodes (0%) are attached to their parents as `goeswith`.

5 instances of `goeswith` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `goeswith`: [hu-pos/CONJ]()-[hu-pos/ADV]() (2; 40% instances), [hu-pos/ADJ]()-[hu-pos/ADV]() (1; 20% instances), [hu-pos/ADV]()-[hu-pos/ADV]() (1; 20% instances), [hu-pos/VERB]()-[hu-pos/NOUN]() (1; 20% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 goeswith	color:blue
1	Ezek	ez	PRON	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	5	nsubj	_	_
2	már	már	ADV	_	_	5	advmod:tlocy	_	_
3	pénzt	pénz	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	dobj:lvc	_	_
4	is	is	CONJ	_	_	3	cc	_	_
5	hoznának	hoz	VERB	_	Definite=Ind|Mood=Cnd|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	házhoz	ház	NOUN	_	Case=All|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nmod:obl	_	_
8	,	,	PUNCT	_	_	5	punct	_	_
9	nem	nem	ADV	_	PronType=Neg	10	goeswith	_	_
10	csak	csak	CONJ	_	_	11	cc	_	_
11	nekem	én	PRON	_	Case=Dat|Number=Sing|Number[psed]=None|Number[psor]=None|Person=1|Person[psor]=None|PronType=Prs	5	nmod:obl	_	_
12	,	,	PUNCT	_	_	11	punct	_	_
13	hanem	hanem	CONJ	_	_	11	cc	_	_
14	az	az	DET	_	Definite=Def|PronType=Art	15	det	_	_
15	Universumnak	Universum	PROPN	_	Case=Dat|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	11	conj	_	_
16	is	is	CONJ	_	_	11	cc	_	_
17	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 goeswith	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	4	det	_	_
2	egyik	egyik	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Ind	4	amod:att	_	_
3	legfontosabb	fontos	ADJ	_	Case=Nom|Degree=Sup|Number=Sing	4	amod:att	_	_
4	lépést	lépés	NOUN	_	Case=Acc|Number=Sing	16	dobj	_	_
5	a	a	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	kormány	kormány	NOUN	_	Case=Nom|Number=Sing	16	nsubj	_	_
7	egy	egy	NUM	_	Case=Nom|Number=Sing|NumType=Card	8	amod:att	_	_
8	héttel	hét	NOUN	_	Case=Ins|Number=Sing	9	nmod:obl	_	_
9	a	a	DET	_	Definite=Def|PronType=Art	10	det	_	_
10	földrengés	földrengés	NOUN	_	Case=Nom|Number=Sing	16	nmod	_	_
11	után	után	ADP	_	_	10	case	_	_
12	,	,	PUNCT	_	_	16	punct	_	_
13	a	a	DET	_	Definite=Def|PronType=Art	15	det	_	_
14	múlt	múlt	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	15	amod:att	_	_
15	szerdán	szerda	NOUN	_	Case=Sup|Number=Sing	16	nmod:obl	_	_
16	tette	tesz	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
17	meg	meg	PART	_	_	16	compound:preverb	_	_
18	:	:	PUNCT	_	_	16	punct	_	_
19	a	a	DET	_	Definite=Def|PronType=Art	20	det	_	_
20	parlament	parlament	NOUN	_	Case=Nom|Number=Sing	22	nsubj	_	_
21	elfogad-	elfogad-	NOUN	_	Case=Nom|Number=Sing	22	goeswith	_	_
22	ta	ta	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	16	advcl	_	_
23	a	a	DET	_	Definite=Def|PronType=Art	28	det	_	_
24	társadalombiztosítási	társadalombiztosítási	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	28	amod:att	_	_
25	(	(	PUNCT	_	_	26	punct	_	_
26	tb	tb	NOUN	_	Case=Nom|Number=Sing	24	appos	_	_
27	)	)	PUNCT	_	_	26	punct	_	_
28	reformot	reform	NOUN	_	Case=Acc|Number=Sing	22	dobj	_	_
29	,	,	PUNCT	_	_	28	punct	_	_
30	amelynek	amely	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Rel	31	nmod:att	_	_
31	keretében	keret	NOUN	_	Case=Ine|Number=Sing|Number[psor]=Sing|Person[psor]=3	40	nmod:obl	_	_
32	a	a	DET	_	Definite=Def|PronType=Art	33	det	_	_
33	nőknél	nő	NOUN	_	Case=Ade|Number=Plur	37	remnant	_	_
34	58	58	NUM	_	Case=Nom|Number=Sing|NumType=Card	38	remnant	_	_
35	,	,	PUNCT	_	_	40	punct	_	_
36	a	a	DET	_	Definite=Def|PronType=Art	37	det	_	_
37	férfiaknál	férfi	NOUN	_	Case=Ade|Number=Plur	40	nmod:obl	_	_
38	60	60	NUM	_	Case=Nom|Number=Sing|NumType=Card	39	amod:att	_	_
39	évre	év	NOUN	_	Case=Sub|Number=Sing	40	nmod:obl	_	_
40	emelték	emel	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	28	acl	_	_
41	a	a	DET	_	Definite=Def|PronType=Art	42	det	_	_
42	nyugdíjkorhatárt	nyugdíjkorhatár	NOUN	_	Case=Acc|Number=Sing	40	dobj	_	_
43	.	.	PUNCT	_	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 goeswith	color:blue
1	Ugyan	ugyan	ADV	_	_	2	goeswith	_	_
2	ilyen	ilyen	ADV	_	PronType=Dem	4	amod:att	_	_
3	konkrét	konkrét	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	amod:att	_	_
4	eset	eset	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nsubj	_	_
5	ismert	ismert	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPast	0	root	_	_
6	az	az	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	érdekképviselők	érdekképviselő	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nmod	_	_
8	előtt	előtt	ADP	_	_	7	case	_	_
9	Kerekegyházán	Kerekegyháza	PROPN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nmod:obl	_	_
10	is	is	CONJ	_	_	9	cc	_	_
11	.	.	PUNCT	_	_	5	punct	_	_

~~~


