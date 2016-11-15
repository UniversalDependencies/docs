

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

11 nodes (0%) are attached to their parents as `expl`.

10 instances of `expl` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.81818181818182.

The following 10 pairs of parts of speech are connected with `expl`: [hr-pos/VERB]()-[hr-pos/PRON]() (2; 18% instances), [hr-pos/ADJ]()-[hr-pos/PART]() (1; 9% instances), [hr-pos/ADJ]()-[hr-pos/PRON]() (1; 9% instances), [hr-pos/ADV]()-[hr-pos/ADV]() (1; 9% instances), [hr-pos/NOUN]()-[hr-pos/ADP]() (1; 9% instances), [hr-pos/NOUN]()-[hr-pos/ADV]() (1; 9% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (1; 9% instances), [hr-pos/PROPN]()-[hr-pos/ADV]() (1; 9% instances), [hr-pos/VERB]()-[hr-pos/AUX]() (1; 9% instances), [hr-pos/VERB]()-[hr-pos/SCONJ]() (1; 9% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 expl	color:blue
1	Gospodin	gospodin	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
2	Bilonjić	Bilonjić	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	1	appos	_	_
3	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	4	aux	_	_
4	rekao	reći	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
5	da	da	SCONJ	_	_	7	mark	_	_
6	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	7	aux	_	_
7	umorio	umoriti	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	4	ccomp	_	_
8	od	od	ADP	_	Case=Gen	9	case	_	_
9	svega	sve	PRON	_	Case=Gen|Gender=Neut|Number=Sing|PronType=Ind	7	nmod	_	_
10	,	,	PUNCT	_	_	4	punct	_	_
11	a	a	CONJ	_	_	4	cc	_	_
12	kakve	kakav	PRON	_	Case=Acc|Gender=Masc|Number=Plur|PronType=Ind	18	ccomp	_	_
13	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	12	cop	_	_
14	njegove	njegov	PRON	_	Case=Nom|Gender=Fem|Number=Plur|Person=3|Poss=Yes	16	nmod	_	_
15	daljnje	daljnji	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur	16	amod	_	_
16	namjere	namjera	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	12	nsubj	_	_
17	to	taj	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	18	expl	_	_
18	treba	trebati	VERB	_	Number=Sing|Person=3|Tense=Pres	4	conj	_	_
19	njega	on	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	20	dobj	_	_
20	pitati	pitati	VERB	_	VerbForm=Inf	18	xcomp	_	_
21	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 expl	color:blue
1	Iako	iako	SCONJ	_	_	8	mark	_	_
2	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	8	aux	_	_
3	crvenim	crven	ADJ	_	Case=Ins|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	_
4	tepihom	tepih	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	8	nmod	_	_
5	u	u	ADP	_	Case=Loc	7	case	_	_
6	zagrebačkoj	zagrebački	ADJ	_	Case=Loc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	_
7	Dubravi	dubrava	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	4	nmod	_	_
8	prošetali	prošetati	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	17	advcl	_	_
9	svi	sav	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	11	det	_	_
10	preostali	preostao	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	11	amod	_	_
11	stanari	stanar	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	8	nsubj	_	_
12	,	,	PUNCT	_	_	8	punct	_	_
13	prvi	prvi	NUM	_	Case=Nom|Gender=Masc|Number=Sing|NumType=Ord	17	acl	_	_
14	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	17	aux	_	_
15	to	taj	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	17	dobj	_	_
16	ipak	ipak	ADV	_	Degree=Pos	17	advmod	_	_
17	učinio	učiniti	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
18	Modni	modni	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	19	amod	_	_
19	mačak	mačak	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	17	nsubj	_	_
20	,	,	PUNCT	_	_	21	punct	_	_
21	odnosno	odnosno	ADV	_	Degree=Pos	22	expl	_	_
22	Marko	Marko	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	19	appos	_	_
23	Grubnić	Grubnić	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	22	name	_	_
24	koji	koji	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	26	mark	_	_
25	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	26	aux	_	_
26	osvojio	osvojiti	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	19	acl	_	_
27	najmanje	malo	ADV	_	Degree=Sup	28	det	_	_
28	simpatija	simpatija	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	26	dobj	_	_
29	gledatelja	gledatelj	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	28	nmod	_	_
30	.	.	PUNCT	_	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 25 expl	color:blue
1	Istra	Istra	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
2	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	4	cop	_	_
3	također	također	ADV	_	Degree=Pos	4	advmod	_	_
4	privlačna	privlačan	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
5	jer	jer	SCONJ	_	_	18	mark	_	_
6	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	18	auxpass	_	_
7	,	,	PUNCT	_	_	12	punct	_	_
8	za	za	ADP	_	Case=Acc	12	case	_	_
9	razliku	razlika	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	8	mwe	_	_
10	od	od	ADP	_	Case=Gen	8	mwe	_	_
11	drugih	drugi	NUM	_	Case=Gen|Gender=Masc|Number=Plur|NumType=Ord	12	amod	_	_
12	dijelova	dio	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	18	nmod	_	_
13	Hrvatske	Hrvatska	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	_
14	,	,	PUNCT	_	_	12	punct	_	_
15	ovdje	ovdje	ADV	_	Degree=Pos	18	advmod	_	_
16	puno	puno	ADV	_	Degree=Pos	17	advmod	_	_
17	bolje	dobro	ADV	_	Degree=Cmp	18	advmod	_	_
18	riješene	riješiti	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur|VerbForm=Part	4	advcl	_	_
19	zemljišne	zemljišni	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur	20	amod	_	_
20	knjige	knjiga	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	18	nsubjpass	_	_
21	,	,	PUNCT	_	_	18	punct	_	_
22	prostorni	prostoran	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	23	amod	_	_
23	planovi	plan	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	26	nsubj	_	_
24	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	26	cop	_	_
25	sve	sve	PART	_	_	26	expl	_	_
26	bolji	dobar	ADJ	_	Case=Nom|Definite=Def|Degree=Cmp|Gender=Masc|Number=Plur	18	conj	_	_
27	,	,	PUNCT	_	_	18	punct	_	_
28	a	a	CONJ	_	_	18	cc	_	_
29	dozvole	dozvola	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	31	nsubj	_	_
30	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	31	aux	_	_
31	izdaju	izdati	VERB	_	Number=Plur|Person=3|Tense=Pres	18	conj	_	_
32	brže	brzo	ADV	_	Degree=Cmp	31	advmod	_	_
33	.	.	PUNCT	_	_	4	punct	_	_

~~~


