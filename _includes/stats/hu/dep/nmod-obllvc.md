

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [nmod]().
There are also 3 other language-specific subtypes of `nmod`: [nmod:att](), [nmod:attlvc](), [nmod:obl]().

10 nodes (0%) are attached to their parents as `nmod:obllvc`.

9 instances of `nmod:obllvc` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1.

The following 3 pairs of parts of speech are connected with `nmod:obllvc`: [hu-pos/VERB]()-[hu-pos/NOUN]() (5; 50% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (4; 40% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (1; 10% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 17 nmod:obllvc	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	testület	testület	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	nmod:att	_	_
3	rendkívüli	rendkívüli	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	amod:att	_	_
4	ülésén	ülés	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	7	nmod:obl	_	_
5	kétharmados	kétharmados	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	amod:att	_	_
6	szavazattöbbséggel	szavazattöbbség	NOUN	_	Case=Ins|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	nmod:obl	_	_
7	elfogadott	el+fogadott	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPast	8	amod:att	_	_
8	törvényt	törvény	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	obj	_	_
9	azonnal	azonnal	ADV	_	_	12	advmod:tlocy	_	_
10	ki	ki	ADV	_	Degree=Pos	12	compound:preverb	_	_
11	is	is	ADV	_	_	12	advmod:mode	_	_
12	hirdették	hirdet	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
13	,	,	PUNCT	_	_	19	punct	_	_
14	így	így	CCONJ	_	_	19	cc	_	_
15	az	az	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	19	nsubj	_	_
16	azonnal	azonnal	ADV	_	_	19	advmod:tlocy	_	_
17	érvénybe	érvény	NOUN	_	Case=Ill|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	19	nmod:obllvc	_	_
18	is	is	CCONJ	_	_	17	cc	_	ToDo=cc-without-conj
19	lépett	lép	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	conj	_	SpaceAfter=No
20	.	.	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 nmod:obllvc	color:blue
1	Ezért	ezért	ADV	_	PronType=Dem	3	advmod:mode	_	_
2	is	is	ADV	_	_	3	advmod:mode	_	_
3	fontos	fontos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	hogy	hogy	SCONJ	_	_	19	mark	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	viszony	viszony	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	19	nsubj	_	_
8	a	a	DET	_	Definite=Def|PronType=Art	9	det	_	_
9	korrektségen	korrektség	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	19	nmod:obl	_	SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	_	_
11	a	a	DET	_	Definite=Def|PronType=Art	12	det	_	_
12	kiszámíthatóságon	kiszámíthatóság	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	conj	_	SpaceAfter=No
13	,	,	PUNCT	_	_	18	punct	_	_
14	egymás	egymás	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Rcp	15	nmod:att	_	_
15	érdekeinek	érdek	NOUN	_	Case=Gen|Number=Plur|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	18	nmod:att	_	_
16	kölcsönös	kölcsönös	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	18	amod:att	_	_
17	tiszteletben	tisztelet	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	18	nmod:obllvc	_	_
18	tartásán	tartás	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	9	conj	_	_
19	alapuljon	alapul	VERB	_	Definite=Ind|Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj	_	SpaceAfter=No
20	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nmod:obllvc	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	18	det	_	_
2	több	több	DET	_	Definite=Ind|PronType=Ind	4	det	_	_
3	országos	országos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	amod:att	_	_
4	szakszervezet	szakszervezet	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nmod:att	_	_
5	és	és	CCONJ	_	_	8	cc	_	_
6	civil	civil	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	amod:att	_	_
7	ifjúsági	ifjúsági	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	amod:att	_	_
8	szervezetek	szervezet	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	conj	_	_
9	részvételével	részvétel	NOUN	_	Case=Ins|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	11	nmod:obl	_	_
10	megrendezésre	megrendezés	NOUN	_	Case=Sub|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	11	nmod:obllvc	_	_
11	kerülő	kerülő	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	18	amod:att	_	SpaceAfter=No
12	,	,	PUNCT	_	_	18	punct	_	_
13	Kézfogással	kézfogás	NOUN	_	Case=Ins|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	16	nmod:obl	_	_
14	egy	egy	DET	_	Definite=Ind|PronType=Art	16	det	_	_
15	új	új	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	16	amod:att	_	_
16	évezredért	évezred	NOUN	_	Case=Cau|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	17	nmod:att	_	_
17	című	című	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	18	amod:att	_	_
18	demonstráción	demonstráció	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	23	nmod:obl	_	_
19	az	az	DET	_	Definite=Def|PronType=Art	20	det	_	_
20	antiszemitizmus	antiszemitizmus	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	23	obl	_	_
21	ellen	ellen	ADP	_	_	20	case	_	_
22	kívánnak	kíván	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
23	fellépni	fel+lép	VERB	_	VerbForm=Inf|Voice=Act	22	xcomp	_	SpaceAfter=No
24	.	.	PUNCT	_	_	22	punct	_	_

~~~


