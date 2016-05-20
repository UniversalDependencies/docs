

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This relation is universal.

92 nodes (0%) are attached to their parents as `dep`.

77 instances of `dep` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.52173913043478.

The following 36 pairs of parts of speech are connected with `dep`: [ca-pos/NOUN]()-[ca-pos/NOUN]() (10; 11% instances), [ca-pos/VERB]()-[ca-pos/NOUN]() (8; 9% instances), [ca-pos/PROPN]()-[ca-pos/PROPN]() (6; 7% instances), [ca-pos/INTJ]()-[ca-pos/INTJ]() (5; 5% instances), [ca-pos/PROPN]()-[ca-pos/NOUN]() (5; 5% instances), [ca-pos/VERB]()-[ca-pos/INTJ]() (5; 5% instances), [ca-pos/VERB]()-[ca-pos/NUM]() (5; 5% instances), [ca-pos/ADV]()-[ca-pos/NOUN]() (4; 4% instances), [ca-pos/VERB]()-[ca-pos/PROPN]() (4; 4% instances), [ca-pos/ADJ]()-[ca-pos/NOUN]() (3; 3% instances), [ca-pos/CONJ]()-[ca-pos/NOUN]() (3; 3% instances), [ca-pos/NOUN]()-[ca-pos/NUM]() (3; 3% instances), [ca-pos/ADJ]()-[ca-pos/SYM]() (2; 2% instances), [ca-pos/ADV]()-[ca-pos/PROPN]() (2; 2% instances), [ca-pos/ADV]()-[ca-pos/VERB]() (2; 2% instances), [ca-pos/NOUN]()-[ca-pos/ADJ]() (2; 2% instances), [ca-pos/NOUN]()-[ca-pos/PROPN]() (2; 2% instances), [ca-pos/NOUN]()-[ca-pos/VERB]() (2; 2% instances), [ca-pos/VERB]()-[ca-pos/PRON]() (2; 2% instances), [ca-pos/ADJ]()-[ca-pos/INTJ]() (1; 1% instances), [ca-pos/ADV]()-[ca-pos/ADV]() (1; 1% instances), [ca-pos/ADV]()-[ca-pos/INTJ]() (1; 1% instances), [ca-pos/AUX]()-[ca-pos/NOUN]() (1; 1% instances), [ca-pos/CONJ]()-[ca-pos/VERB]() (1; 1% instances), [ca-pos/DET]()-[ca-pos/ADJ]() (1; 1% instances), [ca-pos/DET]()-[ca-pos/NOUN]() (1; 1% instances), [ca-pos/DET]()-[ca-pos/PROPN]() (1; 1% instances), [ca-pos/INTJ]()-[ca-pos/ADP]() (1; 1% instances), [ca-pos/INTJ]()-[ca-pos/PART]() (1; 1% instances), [ca-pos/INTJ]()-[ca-pos/PUNCT]() (1; 1% instances), [ca-pos/NOUN]()-[ca-pos/ADV]() (1; 1% instances), [ca-pos/NOUN]()-[ca-pos/PRON]() (1; 1% instances), [ca-pos/NUM]()-[ca-pos/NUM]() (1; 1% instances), [ca-pos/PRON]()-[ca-pos/INTJ]() (1; 1% instances), [ca-pos/PROPN]()-[ca-pos/SYM]() (1; 1% instances), [ca-pos/VERB]()-[ca-pos/ADV]() (1; 1% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 dep	color:blue
1	Ferran	Ferran	PROPN	PROPN	_	5	nsubj	_	MWE=Ferran_Gallego|MWEPOS=PROPN
2	Gallego	Gallego	PROPN	PROPN	_	1	name	_	_
3	va	anar	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	ser	ser	AUX	AUX	VerbForm=Inf	5	aux	_	_
5	escollit	escollir	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	per	per	ADP	ADP	AdpType=Prep	9	case	_	_
7	a	a	ADP	ADP	AdpType=Prep	9	case	_	_
8	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	càrrec	càrrec	NOUN	NOUN	Gender=Masc|Number=Sing	5	nmod	_	_
10	per	per	ADP	ADP	AdpType=Prep	11	case	_	_
11	aclamació	aclamació	NOUN	NOUN	Gender=Fem|Number=Sing	5	nmod	_	_
12	(	(	PUNCT	PUNCT	PunctSide=Fin|PunctType=Brck	14	punct	_	_
13	229	229	NUM	NUM	NumForm=Digit	14	nummod	_	_
14	vots	vot	NOUN	NOUN	Gender=Masc|Number=Plur	11	dep	_	_
15	a	a	ADP	ADP	AdpType=Prep	16	case	_	_
16	favor	favor	NOUN	NOUN	Gender=Masc|Number=Sing	14	nmod	_	_
17	i	i	CONJ	CONJ	_	14	cc	_	_
18	5	5	NUM	NUM	NumForm=Digit	19	nummod	_	_
19	abstencions	abstenció	NOUN	NOUN	Gender=Fem|Number=Plur	14	conj	_	_
20	)	)	PUNCT	PUNCT	PunctSide=Fin|PunctType=Brck	14	punct	_	_
21	.	.	PUNCT	PUNCT	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 dep	color:blue
1	-	-	PUNCT	PUNCT	PunctType=Dash	6	punct	_	_
2	A	a	ADP	ADP	AdpType=Prep	3	case	_	_
3	vostè	tu	PRON	PRON	Number=Sing|Person=2|Polite=Pol|PronType=Prs	6	dobj	_	_
4	li	ell	PRON	PRON	Case=Dat|Number=Sing|Person=3|PronType=Prs	6	dobj	_	_
5	ha	haver	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	tocat	tocar	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	una	un	DET	DET	Gender=Fem|Number=Sing|PronType=Ind	9	det	_	_
8	bona	bo	ADJ	ADJ	Gender=Fem|Number=Sing	9	amod	_	_
9	papereta	papereta	NOUN	NOUN	Gender=Fem|Number=Sing	6	nsubj	_	_
10	,	,	PUNCT	PUNCT	PunctType=Comm	11	punct	_	_
11	alcaldessa	alcaldessa	NOUN	NOUN	Gender=Fem|Number=Sing	6	dep	_	_
12	.	.	PUNCT	PUNCT	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 33 dep	color:blue
1	Per	per	ADP	ADP	AdpType=Prep	2	mark	_	_
2	aclarir	aclarir	VERB	VERB	VerbForm=Inf	7	advcl	_	_
3	possibles	possible	ADJ	ADJ	Number=Plur	4	amod	_	_
4	perills	perill	NOUN	NOUN	Gender=Masc|Number=Plur	2	dobj	_	_
5	s'	es	PRON	PRON	_	7	dobj	_	_
6	ha	haver	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	iniciat	iniciar	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	un	un	DET	DET	Gender=Masc|Number=Sing|PronType=Ind	9	det	_	_
9	programa	programa	NOUN	NOUN	Gender=Masc|Number=Sing	7	nsubj	_	_
10	europeu	europeu	ADJ	ADJ	Gender=Masc|Number=Sing	9	amod	_	_
11	,	,	PUNCT	PUNCT	PunctType=Comm	12	punct	_	_
12	denominat	denominat	ADJ	ADJ	Gender=Masc|Number=Sing|VerbForm=Part	9	amod	_	_
13	Reflex	Reflex	PROPN	PROPN	_	12	dobj	_	MWE=Reflex_2000-2003|MWEPOS=PROPN
14	2000-2003	2000-2003	NUM	NUM	NumForm=Digit|NumType=Card	13	nummod	_	_
15	,	,	PUNCT	PUNCT	PunctType=Comm	12	punct	_	_
16	en	en	ADP	ADP	AdpType=Prep	17	case	_	_
17	què	què	PRON	PRON	PronType=Rel	18	dobj	_	_
18	participen	participar	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	acl	_	_
19	nou	nou	NUM	NUM	Number=Plur|NumType=Card	20	nummod	_	_
20	centres	centre	NOUN	NOUN	Gender=Masc|Number=Plur	18	nsubj	_	_
21	d'	de	ADP	ADP	AdpType=Prep	22	case	_	_
22	Alemanya	Alemanya	PROPN	PROPN	_	20	nmod	_	_
23	,	,	PUNCT	PUNCT	PunctType=Comm	22	punct	_	_
24	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	25	det	_	_
25	Gran	Gran	ADJ	ADJ	_	22	name	_	MWE=Gran_Bretanya|MWEPOS=PROPN
26	Bretanya	Bretanya	PROPN	PROPN	_	25	name	_	_
27	,	,	PUNCT	PUNCT	PunctType=Comm	22	punct	_	_
28	Espanya	Espanya	PROPN	PROPN	_	22	name	_	_
29	-	-	PUNCT	PUNCT	PunctType=Dash	33	punct	_	_
30	entre	entre	ADP	ADP	AdpType=Prep	31	case	_	_
31	ells	ell	PRON	PRON	Gender=Masc|Number=Plur|Person=3|PronType=Prs	33	nmod	_	_
32	l'	el	DET	DET	Definite=Def|Number=Sing|PronType=Art	33	det	_	_
33	Hospital	Hospital	PROPN	PROPN	_	28	dep	_	MWE=Hospital_Ramón_y_Cajal|MWEPOS=PROPN
34	Ramón	Ramón	PROPN	PROPN	_	33	name	_	_
35	y	y	CONJ	CONJ	_	33	cc	_	_
36	Cajal	Cajal	PROPN	PROPN	_	33	conj	_	_
37	de	de	ADP	ADP	AdpType=Prep	38	case	_	_
38	Madrid	Madrid	PROPN	PROPN	_	33	nmod	_	_
39	-	-	PUNCT	PUNCT	PunctType=Dash	33	punct	_	_
40	,	,	PUNCT	PUNCT	PunctType=Comm	22	punct	_	_
41	Suècia	Suècia	PROPN	PROPN	_	22	name	_	_
42	i	i	CONJ	CONJ	_	22	cc	_	_
43	França	França	PROPN	PROPN	_	22	conj	_	_
44	.	.	PUNCT	PUNCT	PunctType=Peri	7	punct	_	_

~~~


