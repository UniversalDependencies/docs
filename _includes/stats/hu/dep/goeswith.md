

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

3 nodes (0%) are attached to their parents as `goeswith`.

3 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `goeswith`: [hu-pos/ADV]()-[hu-pos/ADV]() (1; 33% instances), [hu-pos/ADV]()-[hu-pos/CCONJ]() (1; 33% instances), [hu-pos/NOUN]()-[hu-pos/VERB]() (1; 33% instances).


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 22 goeswith	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	4	det	_	_
2	egyik	egyik	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Ind	4	amod:att	_	_
3	legfontosabb	fontos	ADJ	_	Case=Nom|Degree=Sup|Number=Sing	4	amod:att	_	_
4	lépést	lépés	NOUN	_	Case=Acc|Number=Sing	16	obj	_	_
5	a	a	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	kormány	kormány	NOUN	_	Case=Nom|Number=Sing	16	nsubj	_	_
7	egy	egy	NUM	_	Case=Nom|Number=Sing|NumType=Card	8	amod:att	_	_
8	héttel	hét	NOUN	_	Case=Ins|Number=Sing	9	nmod:obl	_	_
9	a	a	DET	_	Definite=Def|PronType=Art	10	det	_	_
10	földrengés	földrengés	NOUN	_	Case=Nom|Number=Sing	16	obl	_	_
11	után	után	ADP	_	_	10	case	_	SpaceAfter=No
12	,	,	PUNCT	_	_	16	punct	_	_
13	a	a	DET	_	Definite=Def|PronType=Art	15	det	_	_
14	múlt	múlt	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	15	amod:att	_	_
15	szerdán	szerda	NOUN	_	Case=Sup|Number=Sing	16	nmod:obl	_	_
16	tette	tesz	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
17	meg	meg	PART	_	_	16	compound:preverb	_	SpaceAfter=No
18	:	:	PUNCT	_	_	16	punct	_	_
19	a	a	DET	_	Definite=Def|PronType=Art	20	det	_	_
20	parlament	parlament	NOUN	_	Case=Nom|Number=Sing	21	nsubj	_	_
21	elfogad-	elfogad-	NOUN	_	Case=Nom|Number=Sing	16	advcl	_	_
22	ta	ta	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	21	goeswith	_	_
23	a	a	DET	_	Definite=Def|PronType=Art	28	det	_	_
24	társadalombiztosítási	társadalombiztosítási	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	28	amod:att	_	_
25	(	(	PUNCT	_	_	26	punct	_	SpaceAfter=No
26	tb	tb	NOUN	_	Case=Nom|Number=Sing	24	appos	_	SpaceAfter=No
27	)	)	PUNCT	_	_	26	punct	_	_
28	reformot	reform	NOUN	_	Case=Acc|Number=Sing	21	obj	_	SpaceAfter=No
29	,	,	PUNCT	_	_	28	punct	_	_
30	amelynek	amely	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Rel	31	nmod:att	_	_
31	keretében	keret	NOUN	_	Case=Ine|Number=Sing|Number[psor]=Sing|Person[psor]=3	40	nmod:obl	_	_
32	a	a	DET	_	Definite=Def|PronType=Art	33	det	_	_
33	nőknél	nő	NOUN	_	Case=Ade|Number=Plur	34	orphan	_	orig_deprel=nmod:obl
34	58	58	NUM	_	Case=Nom|Number=Sing|NumType=Card	40	conj	_	orig_deprel=amod:att|SpaceAfter=No
35	,	,	PUNCT	_	_	40	punct	_	_
36	a	a	DET	_	Definite=Def|PronType=Art	37	det	_	_
37	férfiaknál	férfi	NOUN	_	Case=Ade|Number=Plur	40	nmod:obl	_	_
38	60	60	NUM	_	Case=Nom|Number=Sing|NumType=Card	39	amod:att	_	_
39	évre	év	NOUN	_	Case=Sub|Number=Sing	40	nmod:obl	_	_
40	emelték	emel	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	28	acl	_	_
41	a	a	DET	_	Definite=Def|PronType=Art	42	det	_	_
42	nyugdíjkorhatárt	nyugdíjkorhatár	NOUN	_	Case=Acc|Number=Sing	40	obj	_	SpaceAfter=No
43	.	.	PUNCT	_	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 goeswith	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	kormánypárti	kormánypárti	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	3	amod:att	_	_
3	interpellációk	interpelláció	NOUN	_	Case=Nom|Number=Plur	19	nsubj	_	_
4	nem	nem	ADV	_	PronType=Neg	19	cc	_	_
5	csak	csak	CCONJ	_	_	4	goeswith	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
7	koalíciós	koalíciós	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	8	amod:att	_	_
8	képviselők	képviselő	NOUN	_	Case=Nom|Number=Plur	10	nmod:att	_	_
9	harci	harci	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	10	amod:att	_	_
10	szellemének	szellem	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	nmod:att	_	_
11	ébren	ébren	ADV	_	_	12	advmod:mode	_	_
12	tartására	tartás	NOUN	_	Case=Sub|Number=Sing|Number[psor]=Sing|Person[psor]=3	19	nmod:obl	_	_
13	s	s	CCONJ	_	_	17	cc	_	_
14	az	az	DET	_	Definite=Def|PronType=Art	16	det	_	_
15	interpellációs	interpellációs	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	16	amod:att	_	_
16	időkeret	időkeret	NOUN	_	Case=Nom|Number=Sing	17	nmod:att	_	_
17	megkurtítására	megkurtítás	NOUN	_	Case=Sub|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	conj	_	_
18	voltak	van	AUX	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	19	cop	_	_
19	jók	jó	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	0	root	_	SpaceAfter=No
20	,	,	PUNCT	_	_	19	punct	_	_
21	hanem	hanem	CCONJ	_	_	19	cc	_	ToDo=cc-without-conj
22	arra	az	PRON	_	Case=Sub|Number=Sing|Person=3|PronType=Dem	21	conj	_	_
23	is	is	CCONJ	_	_	22	cc	_	SpaceAfter=No|ToDo=cc-without-conj
24	,	,	PUNCT	_	_	22	punct	_	_
25	hogy	hogy	SCONJ	_	_	30	mark	_	_
26	a	a	DET	_	Definite=Def|PronType=Art	27	det	_	_
27	jobboldal	jobboldal	NOUN	_	Case=Nom|Number=Sing	30	nsubj	_	_
28	ezúton	ezúton	ADV	_	PronType=Dem	30	advmod:mode	_	_
29	is	is	CCONJ	_	_	30	cc	_	_
30	reklámozza	reklámoz	VERB	_	Definite=Def|Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	22	ccomp:obl	_	_
31	a	a	DET	_	Definite=Def|PronType=Art	34	det	_	_
32	"	"	PUNCT	_	_	34	punct	_	SpaceAfter=No
33	remény	remény	NOUN	_	Case=Nom|Number=Sing	34	nmod:att	_	_
34	kormányának	kormány	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	36	nmod:att	_	SpaceAfter=No
35	"	"	PUNCT	_	_	34	punct	_	_
36	döntéseit	döntés	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	30	obj	_	SpaceAfter=No
37	.	.	PUNCT	_	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	Ugyan	ugyan	ADV	_	_	4	amod:att	_	_
2	ilyen	ilyen	ADV	_	PronType=Dem	1	goeswith	_	_
3	konkrét	konkrét	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	amod:att	_	_
4	eset	eset	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nsubj	_	_
5	ismert	ismert	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPast	0	root	_	_
6	az	az	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	érdekképviselők	érdekképviselő	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	obl	_	_
8	előtt	előtt	ADP	_	_	7	case	_	_
9	Kerekegyházán	Kerekegyháza	PROPN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nmod:obl	_	_
10	is	is	CCONJ	_	_	9	cc	_	SpaceAfter=No|ToDo=cc-without-conj
11	.	.	PUNCT	_	_	5	punct	_	_

~~~


