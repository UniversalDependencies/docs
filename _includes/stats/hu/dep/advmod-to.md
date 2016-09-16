

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [advmod]().
There are also 7 other language-specific subtypes of `advmod`: [advmod:locy](), [advmod:mode](), [advmod:obl](), [advmod:que](), [advmod:tfrom](), [advmod:tlocy](), [advmod:tto]().

26 nodes (0%) are attached to their parents as `advmod:to`.

17 instances of `advmod:to` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.80769230769231.

The following 5 pairs of parts of speech are connected with `advmod:to`: [hu-pos/VERB]()-[hu-pos/ADV]() (17; 65% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (4; 15% instances), [hu-pos/NOUN]()-[hu-pos/ADV]() (2; 8% instances), [hu-pos/VERB]()-[hu-pos/ADP]() (2; 8% instances), [hu-pos/ADJ]()-[hu-pos/ADV]() (1; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advmod:to	color:blue
1	Tudják	tud	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	sehova	sehova	ADV	_	PronType=Neg	6	advmod:to	_	_
4	nem	nem	ADV	_	PronType=Neg	5	neg	_	_
5	érdemes	érdemes	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	1	ccomp:obj	_	_
6	elindulni	el+indul	VERB	_	VerbForm=Inf|Voice=Act	5	xcomp	_	_
7	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advmod:to	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	legnagyobb	nagy	ADJ	_	Case=Nom|Degree=Sup|Number=Sing	3	amod:att	_	_
3	cégek	cég	NOUN	_	Case=Nom|Number=Plur	5	nsubj	_	_
4	mindenesetre	mindenesetre	ADV	_	_	5	advmod:mode	_	_
5	igyekeznek	igyekezik	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	elébe	elébe	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	advmod:to	_	_
7	menni	megy	VERB	_	VerbForm=Inf|Voice=Act	5	xcomp	_	_
8	az	az	DET	_	Definite=Def|PronType=Art	9	det	_	_
9	elnök	elnök	NOUN	_	Case=Nom|Number=Sing	10	nmod:att	_	_
10	szándékainak	szándék	NOUN	_	Case=Dat|Number=Plur|Number[psor]=Sing|Person[psor]=3	7	nmod:obl	_	_
11	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 advmod:to	color:blue
1	Más	más	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Ind	2	amod:att	_	_
2	kérdés	kérdés	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	hogy	hogy	SCONJ	_	_	11	mark	_	_
5	a	a	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	határőrség	határőrség	NOUN	_	Case=Nom|Number=Sing	11	nsubj	_	_
7	egyelőre	egyelőre	ADV	_	_	11	advmod:mode	_	_
8	új	új	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	9	amod:att	_	_
9	státusokat	státus	NOUN	_	Case=Acc|Number=Plur	11	dobj	_	_
10	sem	sem	ADV	_	PronType=Neg	11	neg	_	_
11	kapott	kap	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	csubj	_	_
12	az	az	DET	_	Definite=Def|PronType=Art	14	det	_	_
13	új	új	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	14	amod:att	_	_
14	feladatok	feladat	NOUN	_	Case=Nom|Number=Plur	15	nmod:obl	_	_
15	mellé	mellé	ADP	_	_	11	advmod:to	_	_
16	;	;	PUNCT	_	_	11	punct	_	_
17	a	a	DET	_	Definite=Def|PronType=Art	19	det	_	_
18	több	több	NUM	_	Case=Nom|Number=Sing|NumType=Card	19	amod:att	_	_
19	munkát	munka	NOUN	_	Case=Acc|Number=Sing	30	dobj	_	_
20	—	—	PUNCT	_	_	24	punct	_	_
21	mint	mint	ADV	_	PronType=Rel	24	advmod:mode	_	_
22	Krisán	Krisán	PROPN	_	Case=Nom|Number=Sing	23	name	_	_
23	Attila	Attila	PROPN	_	Case=Nom|Number=Sing	24	nsubj	_	_
24	mondta	mond	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	29	advcl	_	_
25	—	—	PUNCT	_	_	24	punct	_	_
26	rugalmas	rugalmas	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	28	amod:att	_	_
27	helyi	helyi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	28	amod:att	_	_
28	munkaszervezéssel	munkaszervezés	NOUN	_	Case=Ins|Number=Sing	30	nmod:obl	_	_
29	kívánják	kíván	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	conj	_	_
30	ellátni	ellát	VERB	_	VerbForm=Inf|Voice=Act	29	xcomp	_	_
31	.	.	PUNCT	_	_	2	punct	_	_

~~~


