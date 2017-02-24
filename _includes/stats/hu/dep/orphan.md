

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

64 nodes (0%) are attached to their parents as `orphan`.

52 instances of `orphan` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.109375.

The following 21 pairs of parts of speech are connected with `orphan`: [hu-pos/ADJ]()-[hu-pos/DET]() (15; 23% instances), [hu-pos/NUM]()-[hu-pos/NOUN]() (9; 14% instances), [hu-pos/NUM]()-[hu-pos/PROPN]() (6; 9% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (5; 8% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (3; 5% instances), [hu-pos/PROPN]()-[hu-pos/NOUN]() (3; 5% instances), [hu-pos/ADJ]()-[hu-pos/PROPN]() (2; 3% instances), [hu-pos/CCONJ]()-[hu-pos/ADJ]() (2; 3% instances), [hu-pos/CCONJ]()-[hu-pos/DET]() (2; 3% instances), [hu-pos/NOUN]()-[hu-pos/ADV]() (2; 3% instances), [hu-pos/NOUN]()-[hu-pos/NUM]() (2; 3% instances), [hu-pos/NOUN]()-[hu-pos/PROPN]() (2; 3% instances), [hu-pos/PUNCT]()-[hu-pos/ADJ]() (2; 3% instances), [hu-pos/PUNCT]()-[hu-pos/DET]() (2; 3% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (1; 2% instances), [hu-pos/ADJ]()-[hu-pos/CCONJ]() (1; 2% instances), [hu-pos/ADJ]()-[hu-pos/NUM]() (1; 2% instances), [hu-pos/NOUN]()-[hu-pos/ADJ]() (1; 2% instances), [hu-pos/NOUN]()-[hu-pos/PRON]() (1; 2% instances), [hu-pos/PRON]()-[hu-pos/VERB]() (1; 2% instances), [hu-pos/PROPN]()-[hu-pos/NUM]() (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 orphan	color:blue
1	—	—	PUNCT	_	_	2	punct	_	_
2	Van	van	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	egy	egy	DET	_	Definite=Ind|PronType=Art	8	det	_	_
4	egyszerű	egyszerű	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	amod:att	_	_
5	és	és	CCONJ	_	_	8	cc	_	_
6	egy	egy	DET	_	Definite=Ind|PronType=Art	7	orphan	_	orig_deprel=det
7	bonyolult	bonyolult	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	conj	_	orig_deprel=amod:att
8	válaszom	válasz	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=1	2	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 orphan	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	első	első	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Ord|Person[psor]=None	3	amod:att	_	_
3	évben	év	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	orphan	_	orig_deprel=advmod:tlocy|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	1991-ben	1991	NUM	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	3	conj	_	_
6	mindössze	mindössze	ADV	_	_	7	advmod:mode	_	_
7	31	31	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	15	conj	_	orig_deprel=nsubj|SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	tavaly	tavaly	ADV	_	_	15	advmod:tlocy	_	_
10	már	már	ADV	_	_	15	advmod:tlocy	_	_
11	több	több	DET	_	Definite=Ind|PronType=Ind	14	det	_	_
12	mint	mint	SCONJ	_	_	13	mark	_	_
13	száz	száz	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	11	advcl	_	_
14	vállalat	vállalat	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	15	nsubj	_	_
15	jelent	jelenik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
16	meg	meg	PART	_	_	15	compound:preverb	_	_
17	a	a	DET	_	Definite=Def|PronType=Art	18	det	_	_
18	rendezvényen	rendezvény	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	15	nmod:obl	_	SpaceAfter=No
19	.	.	PUNCT	_	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 22 orphan	color:blue
1	Előzetes	előzetes	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	amod:att	_	_
2	adatok	adat	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	31	obl	_	_
3	szerint	szerint	ADP	_	_	2	case	_	_
4	Kijev	Kijev	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	orphan	_	orig_deprel=nmod:obl
5	megyében	megye	PROPN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	flat:name	_	_
6	45	45	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	31	conj	_	orig_deprel=amod:att|SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	_
8	Lemberg	Lemberg	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	orphan	_	orig_deprel=nmod:obl
9	megyében	megye	PROPN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	flat:name	_	_
10	139	139	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	31	conj	_	orig_deprel=amod:att|SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	Poltavában	Poltava	PROPN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	13	orphan	_	orig_deprel=nmod:obl
13	195	195	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	31	conj	_	orig_deprel=amod:att|SpaceAfter=No
14	,	,	PUNCT	_	_	16	punct	_	_
15	Cserkassziban	Cserkasszi	PROPN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	16	orphan	_	orig_deprel=nmod:obl
16	62	62	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	31	conj	_	orig_deprel=amod:att|SpaceAfter=No
17	,	,	PUNCT	_	_	20	punct	_	_
18	Dnyipropetrovszk	Dnyipropetrovszk	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	20	orphan	_	orig_deprel=nmod:obl
19	megyében	megye	PROPN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	18	flat:name	_	_
20	396	396	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	31	conj	_	orig_deprel=amod:att|SpaceAfter=No
21	,	,	PUNCT	_	_	23	punct	_	_
22	Donyeckben	Donyeck	PROPN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	23	orphan	_	orig_deprel=nmod:obl
23	42	42	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	31	conj	_	orig_deprel=amod:att|SpaceAfter=No
24	,	,	PUNCT	_	_	31	punct	_	_
25	Mikolajivban	Mikolajiv	PROPN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	31	nmod:obl	_	_
26	pedig	pedig	CCONJ	_	_	31	cc	_	ToDo=cc-after-conj
27	46	46	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	28	amod:att	_	_
28	falu	falu	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	31	nsubj	_	SpaceAfter=No
29	,	,	PUNCT	_	_	30	punct	_	_
30	város	város	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	28	conj	_	_
31	borult	borul	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
32	sötétségbe	sötétség	NOUN	_	Case=Ill|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	31	nmod:obl	_	SpaceAfter=No
33	.	.	PUNCT	_	_	31	punct	_	_

~~~


