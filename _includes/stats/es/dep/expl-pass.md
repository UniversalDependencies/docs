

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish-AnCora)

This relation is a language-specific subtype of [expl]().

456 nodes (0%) are attached to their parents as `expl:pass`.

453 instances of `expl:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34868421052632.

The following 4 pairs of parts of speech are connected with `expl:pass`: [es-pos/VERB]()-[es-pos/PRON]() (450; 99% instances), [es-pos/PRON]()-[es-pos/PRON]() (3; 1% instances), [es-pos/ADJ]()-[es-pos/PRON]() (2; 0% instances), [es-pos/ADP]()-[es-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 expl:pass	color:blue
1	Nuestra	nuestro	DET	DET	Gender=Fem|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	2	det	_	_
2	experiencia	experiencia	NOUN	NOUN	Gender=Fem|Number=Sing	3	nsubj	_	_
3	es	ser	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	que	que	SCONJ	SCONJ	_	11	mark	_	_
5	si	si	SCONJ	SCONJ	_	8	mark	_	_
6	no	no	ADV	ADV	Polarity=Neg	8	advmod	_	_
7	se	se	PRON	PRON	_	8	expl:pass	_	_
8	lucha	luchar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	advcl	_	_
9	no	no	ADV	ADV	Polarity=Neg	11	advmod	_	_
10	se	se	PRON	PRON	_	11	obj	_	_
11	consigue	conseguir	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
12	nada	nada	PRON	PRON	Number=Sing|PronType=Ind	11	nsubj	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 7 expl:pass	color:blue
1	Todas	todo	DET	DET	Gender=Fem|Number=Plur|PronType=Ind	2	det	_	_
2	las	el	DET	DET	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	3	det	_	_
3	guerras	guerra	NOUN	NOUN	Gender=Fem|Number=Plur	5	nsubj	_	_
4	son	ser	AUX	AUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	infames	infame	ADJ	ADJ	Number=Plur	0	root	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	PunctType=Comm	5	punct	_	_
7	se	se	PRON	PRON	_	12	expl:pass	_	_
8	ha	haber	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
9	de	de	ADP	ADP	AdpType=Prep	12	case	_	_
10	estar	estar	AUX	AUX	VerbForm=Inf	12	cop	_	_
11	contra	contra	ADP	ADP	AdpType=Prep	12	case	_	_
12	ellas	él	PRON	PRON	Gender=Fem|Number=Plur|Person=3|PronType=Prs	5	advcl	_	SpaceAfter=No
13	,	,	PUNCT	PUNCT	PunctType=Comm	17	punct	_	_
14	pero	pero	CCONJ	CCONJ	_	17	cc	_	_
15	eso	ese	PRON	PRON	Number=Sing|PronType=Dem	17	nsubj	_	_
16	no	no	ADV	ADV	Polarity=Neg	17	advmod	_	_
17	significa	significar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	conj	_	_
18	que	que	SCONJ	SCONJ	_	22	mark	_	_
19	no	no	ADV	ADV	Polarity=Neg	22	advmod	_	_
20	debas	deber	AUX	AUX	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	22	aux	_	_
21	estar	estar	AUX	AUX	VerbForm=Inf	22	cop	_	_
22	preparado	preparado	ADJ	ADJ	Gender=Masc|Number=Sing|VerbForm=Part	17	xcomp	_	_
23	por	por	ADP	ADP	AdpType=Prep	27	mark	_	_
24	si	si	SCONJ	SCONJ	_	27	mark	_	_
25	te	tú	PRON	PRON	Number=Sing|Person=2|PronType=Prs	27	iobj	_	_
26	la	él	PRON	PRON	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	27	obj	_	_
27	declara	declarar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	advcl	_	_
28	alguien	alguien	PRON	PRON	Number=Sing|PronType=Ind	27	nsubj	_	SpaceAfter=No
29	.	.	PUNCT	PUNCT	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 23 expl:pass	color:blue
1	El	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	grupo	grupo	NOUN	NOUN	Gender=Masc|Number=Sing	6	nsubj	_	_
3	británico	británico	ADJ	ADJ	Gender=Masc|Number=Sing	2	amod	_	_
4	se	él	PRON	PRON	Person=3	6	obj	_	_
5	ha	haber	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	visto	ver	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	obligado	obligado	ADJ	ADJ	Gender=Masc|Number=Sing|VerbForm=Part	6	obj	_	_
8	a	a	ADP	ADP	AdpType=Prep	9	mark	_	_
9	aplazar	aplazar	VERB	VERB	VerbForm=Inf	7	xcomp	_	_
10	los	el	DET	DET	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	11	det	_	_
11	conciertos	concierto	NOUN	NOUN	Gender=Masc|Number=Plur	9	obj	_	_
12	que	que	PRON	PRON	PronType=Rel	13	iobj	_	_
13	tenía	tener	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	11	acl	_	_
14	programados	programado	ADJ	ADJ	Gender=Masc|Number=Plur|VerbForm=Part	13	ccomp	_	_
15	para	para	ADP	ADP	AdpType=Prep	18	case	_	_
16	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
17	próximo	próximo	ADJ	ADJ	Gender=Masc|Number=Sing	18	amod	_	_
18	martes	martes	NOUN	NOUN	AdvType=Tim	14	obl	_	_
19	en	en	ADP	ADP	AdpType=Prep	20	case	_	_
20	Razzmatazz	Razzmatazz	PROPN	PROPN	_	14	obl	_	_
21	(	(	PUNCT	PUNCT	PunctSide=Ini|PunctType=Brck	34	punct	_	SpaceAfter=No
22	que	que	PRON	PRON	PronType=Rel	14	nsubj:pass	_	_
23	se	se	PRON	PRON	_	14	expl:pass	_	_
24	pospone	posponer	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	_
25	al	al	ADP	ADP	AdpType=Preppron|Gender=Masc|Number=Sing	26	case	_	_
26	25	25	NUM	NUM	NumForm=Digit|NumType=Card	14	obl	_	MWE=25_de_abril|MWEPOS=NOUN
27	de	de	ADP	ADP	AdpType=Prep	28	case	_	_
28	abril	abril	NOUN	NOUN	_	26	compound	_	SpaceAfter=No
29	)	)	PUNCT	PUNCT	PunctSide=Fin|PunctType=Brck	34	punct	_	_
30	y	y	CCONJ	CCONJ	_	34	cc	_	SpaceAfter=No
31	,	,	PUNCT	PUNCT	PunctType=Comm	34	punct	_	_
32	un	uno	DET	DET	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	33	det	_	_
33	día	día	NOUN	NOUN	Gender=Masc|Number=Sing	34	obl	_	_
34	después	después	ADV	ADV	_	14	conj	_	SpaceAfter=No
35	,	,	PUNCT	PUNCT	PunctType=Comm	34	punct	_	_
36	en	en	ADP	ADP	AdpType=Prep	34	case	_	_
37	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	38	det	_	_
38	Sala	Sala	PROPN	PROPN	_	34	nmod	_	MWE=Sala_Multiusos|MWEPOS=PROPN
39	Multiusos	Multiusos	PROPN	PROPN	_	38	flat	_	_
40	de	de	ADP	ADP	AdpType=Prep	41	case	_	_
41	Zaragoza	Zaragoza	PROPN	PROPN	_	38	nmod	_	SpaceAfter=No
42	.	.	PUNCT	PUNCT	PunctType=Peri	6	punct	_	_

~~~


