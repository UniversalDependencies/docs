

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [advmod]().
There are also 7 other language-specific subtypes of `advmod`: [advmod:locy](), [advmod:mode](), [advmod:obl](), [advmod:que](), [advmod:tfrom](), [advmod:tlocy](), [advmod:to]().

27 nodes (0%) are attached to their parents as `advmod:tto`.

26 instances of `advmod:tto` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.44444444444444.

The following 3 pairs of parts of speech are connected with `advmod:tto`: [hu-pos/VERB]()-[hu-pos/ADV]() (23; 85% instances), [hu-pos/ADJ]()-[hu-pos/ADV]() (3; 11% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 advmod:tto	color:blue
1	Mindez	mindez	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	8	nsubj	_	_
2	mára	mára	ADV	_	_	8	advmod:tto	_	_
3	kritikus	kritikus	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	amod:att	_	_
4	forgalmi	forgalmi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	amod:att	_	_
5	és	és	CONJ	_	_	4	cc	_	_
6	környezeti	környezeti	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	conj	_	_
7	helyzethez	helyzet	NOUN	_	Case=All|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	nmod:obl	_	_
8	vezetett	vezet	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 advmod:tto	color:blue
1	Márkus	Márkus	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	nmod:att	_	_
2	érmei	érem	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	4	nsubj	_	_
3	nagyon	nagyon	ADV	_	_	4	advmod:mode	_	_
4	kellettek	kell	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	az	az	DET	_	Definite=Def|PronType=Art	12	det	_	_
6	Athénban	Athén	PROPN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	nmod:obl	_	_
7	eddig	eddig	ADV	_	PronType=Dem	10	advmod:tto	_	_
8	gyengébbik	gyenge	ADJ	_	Case=Nom|Degree=Cmp|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	amod:att	_	_
9	oldalát	oldal	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	10	dobj	_	_
10	mutató	mutató	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	12	amod:att	_	_
11	magyar	magyar	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	amod:att	_	_
12	súlyemelésnek	súlyemelés	NOUN	_	Case=Dat|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	nmod:obl	_	_
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 23 advmod:tto	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	városatyák	városatya	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nsubj	_	_
3	szakmailag	szakmai	ADJ	_	Case=Ess|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	amod:mode	_	_
4	egységesen	egységes	ADJ	_	Case=Ess|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	amod:mode	_	_
5	megfelelőnek	megfelelő	NOUN	_	Case=Dat|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:obl	_	_
6	tartották	tart	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	a	a	DET	_	Definite=Def|PronType=Art	9	det	_	_
8	fejlesztési	fejlesztési	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	amod:att	_	_
9	tervet	terv	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	dobj	_	_
10	,	,	PUNCT	_	_	6	punct	_	_
11	ám	ám	CONJ	_	_	6	cc	_	_
12	míg	míg	ADV	_	PronType=Rel	17	advmod:tto	_	_
13	a	a	DET	_	Definite=Def|PronType=Art	14	det	_	_
14	koalíció	koalíció	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	17	nsubj	_	_
15	a	a	DET	_	Definite=Def|PronType=Art	16	det	_	_
16	kormányt	kormány	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	17	dobj	_	_
17	okolta	okol	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	30	advcl	_	_
18	a	a	DET	_	Definite=Def|PronType=Art	19	det	_	_
19	finanszírozás	finanszírozás	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	20	nmod:att	_	_
20	hiányai	hiány	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	17	nmod	_	_
21	miatt	miatt	ADP	_	_	20	case	_	_
22	,	,	PUNCT	_	_	17	punct	_	_
23	addig	az	PRON	_	Case=Ter|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	30	advmod:tto	_	_
24	az	az	DET	_	Definite=Def|PronType=Art	25	det	_	_
25	ellenzék	ellenzék	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	30	nmod	_	_
26	szerint	szerint	ADP	_	_	25	case	_	_
27	a	a	DET	_	Definite=Def|PronType=Art	28	det	_	_
28	városvezetés	városvezetés	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	30	nsubj	_	_
29	nem	nem	ADV	_	PronType=Neg	30	neg	_	_
30	építette	épít	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	conj	_	_
31	be	be	ADV	_	Degree=Pos	30	compound:preverb	_	_
32	a	a	DET	_	Definite=Def|PronType=Art	33	det	_	_
33	beruházások	beruházás	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	35	nmod:att	_	_
34	egy	egy	DET	_	Definite=Ind|PronType=Art	35	det	_	_
35	részét	rész	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	30	dobj	_	_
36	a	a	DET	_	Definite=Def|PronType=Art	39	det	_	_
37	jövő	jövő	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	38	amod:att	_	_
38	évi	évi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	39	amod:att	_	_
39	költségvetésbe	költségvetés	NOUN	_	Case=Ill|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	30	nmod:obl	_	_
40	és	és	CONJ	_	_	39	cc	_	_
41	a	a	DET	_	Definite=Def|PronType=Art	44	det	_	_
42	hétéves	hétéves	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	44	amod:att	_	_
43	finanszírozási	finanszírozási	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	44	amod:att	_	_
44	tervbe	terv	NOUN	_	Case=Ill|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	39	conj	_	_
45	.	.	PUNCT	_	_	6	punct	_	_

~~~


