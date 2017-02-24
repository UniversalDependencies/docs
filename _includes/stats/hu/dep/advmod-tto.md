

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [advmod]().
There are also 7 other language-specific subtypes of `advmod`: [advmod:locy](), [advmod:mode](), [advmod:obl](), [advmod:que](), [advmod:tfrom](), [advmod:tlocy](), [advmod:to]().

27 nodes (0%) are attached to their parents as `advmod:tto`.

26 instances of `advmod:tto` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.33333333333333.

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
5	és	és	CCONJ	_	_	6	cc	_	_
6	környezeti	környezeti	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	conj	_	_
7	helyzethez	helyzet	NOUN	_	Case=All|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	nmod:obl	_	_
8	vezetett	vezet	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 28 advmod:tto	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	olaj	olaj	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nmod:att	_	_
3	sikeres	sikeres	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:att	_	_
4	célba	cél	NOUN	_	Case=Ill|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	nmod:obl	_	_
5	érésétől	érés	NOUN	_	Case=Abl|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	35	nmod:obl	_	_
6	—	—	PUNCT	_	_	7	punct	_	_
7	azon	az	PRON	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	35	parataxis	_	_
8	túl	túl	ADP	_	_	7	case	_	SpaceAfter=No
9	,	,	PUNCT	_	_	7	punct	_	_
10	hogy	hogy	SCONJ	_	_	18	mark	_	_
11	a	a	DET	_	Definite=Def|PronType=Art	14	det	_	_
12	két	két	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	14	nummod	_	_
13	szerbiai	szerbiai	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	14	amod:att	_	_
14	város	város	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	15	nmod:att	_	_
15	lakói	lakó	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	18	nsubj	_	_
16	nem	nem	ADV	_	PronType=Neg	18	advmod	_	_
17	fognak	fog	AUX	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	18	aux	_	_
18	dideregni	didereg	VERB	_	VerbForm=Inf|Voice=Act	7	advcl	_	_
19	és	és	CCONJ	_	_	21	cc	_	_
20	azon	az	PRON	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	21	nmod:obl	_	_
21	tanakodni	tanakodik	VERB	_	VerbForm=Inf|Voice=Act	18	conj	_	SpaceAfter=No
22	,	,	PUNCT	_	_	18	punct	_	_
23	miből	mi	PRON	_	Case=Ela|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Int	25	nmod:obl	_	_
24	is	is	ADV	_	_	25	advmod:mode	_	_
25	fizessék	fizet	VERB	_	Definite=Def|Mood=Imp|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	18	ccomp:obl	_	_
26	ki	ki	ADV	_	Degree=Pos	25	compound:preverb	_	_
27	az	az	DET	_	Definite=Def|PronType=Art	31	det	_	_
28	addig	addig	ADV	_	PronType=Dem	30	advmod:tto	_	_
29	mértékkel	mérték	NOUN	_	Case=Ins|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	30	nmod:obl	_	_
30	felhasznált	felhasznált	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPast	31	amod:att	_	_
31	villanyáramot	villanyáram	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	25	obj	_	_
32	—	—	PUNCT	_	_	7	punct	_	_
33	ösztönző	ösztönző	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	34	amod:att	_	_
34	hatással	hatás	NOUN	_	Case=Ins|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	35	nmod:obl	_	_
35	kellene	kell	VERB	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
36	hogy	hogy	SCONJ	_	_	37	mark	_	_
37	legyen	lesz	VERB	_	Definite=Ind|Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	35	csubj	_	_
38	az	az	DET	_	Definite=Def|PronType=Art	40	det	_	_
39	ellenzéki	ellenzéki	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	40	amod:att	_	_
40	pártokra	párt	NOUN	_	Case=Sub|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	35	nmod:obl	_	SpaceAfter=No
41	.	.	PUNCT	_	_	35	punct	_	_

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
9	tervet	terv	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	obj	_	SpaceAfter=No
10	,	,	PUNCT	_	_	30	punct	_	_
11	ám	ám	CCONJ	_	_	30	cc	_	_
12	míg	míg	ADV	_	PronType=Rel	17	advmod:tto	_	_
13	a	a	DET	_	Definite=Def|PronType=Art	14	det	_	_
14	koalíció	koalíció	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	17	nsubj	_	_
15	a	a	DET	_	Definite=Def|PronType=Art	16	det	_	_
16	kormányt	kormány	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	17	obj	_	_
17	okolta	okol	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	30	advcl	_	_
18	a	a	DET	_	Definite=Def|PronType=Art	19	det	_	_
19	finanszírozás	finanszírozás	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	20	nmod:att	_	_
20	hiányai	hiány	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	17	obl	_	_
21	miatt	miatt	ADP	_	_	20	case	_	SpaceAfter=No
22	,	,	PUNCT	_	_	17	punct	_	_
23	addig	az	PRON	_	Case=Ter|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	30	advmod:tto	_	_
24	az	az	DET	_	Definite=Def|PronType=Art	25	det	_	_
25	ellenzék	ellenzék	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	30	obl	_	_
26	szerint	szerint	ADP	_	_	25	case	_	_
27	a	a	DET	_	Definite=Def|PronType=Art	28	det	_	_
28	városvezetés	városvezetés	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	30	nsubj	_	_
29	nem	nem	ADV	_	PronType=Neg	30	advmod	_	_
30	építette	épít	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	conj	_	_
31	be	be	ADV	_	Degree=Pos	30	compound:preverb	_	_
32	a	a	DET	_	Definite=Def|PronType=Art	33	det	_	_
33	beruházások	beruházás	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	35	nmod:att	_	_
34	egy	egy	DET	_	Definite=Ind|PronType=Art	35	det	_	_
35	részét	rész	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	30	obj	_	_
36	a	a	DET	_	Definite=Def|PronType=Art	39	det	_	_
37	jövő	jövő	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	38	amod:att	_	_
38	évi	évi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	39	amod:att	_	_
39	költségvetésbe	költségvetés	NOUN	_	Case=Ill|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	30	nmod:obl	_	_
40	és	és	CCONJ	_	_	44	cc	_	_
41	a	a	DET	_	Definite=Def|PronType=Art	44	det	_	_
42	hétéves	hétéves	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	44	amod:att	_	_
43	finanszírozási	finanszírozási	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	44	amod:att	_	_
44	tervbe	terv	NOUN	_	Case=Ill|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	39	conj	_	SpaceAfter=No
45	.	.	PUNCT	_	_	6	punct	_	_

~~~


