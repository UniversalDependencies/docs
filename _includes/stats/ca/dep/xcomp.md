

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This relation is universal.

2213 nodes (0%) are attached to their parents as `xcomp`.

2103 instances of `xcomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.69724356077723.

The following 20 pairs of parts of speech are connected with `xcomp`: [ca-pos/VERB]()-[ca-pos/VERB]() (1933; 87% instances), [ca-pos/ADJ]()-[ca-pos/VERB]() (117; 5% instances), [ca-pos/VERB]()-[ca-pos/NOUN]() (57; 3% instances), [ca-pos/VERB]()-[ca-pos/ADJ]() (36; 2% instances), [ca-pos/ADP]()-[ca-pos/VERB]() (14; 1% instances), [ca-pos/VERB]()-[ca-pos/AUX]() (11; 0% instances), [ca-pos/ADV]()-[ca-pos/VERB]() (8; 0% instances), [ca-pos/CCONJ]()-[ca-pos/VERB]() (6; 0% instances), [ca-pos/NOUN]()-[ca-pos/VERB]() (5; 0% instances), [ca-pos/SYM]()-[ca-pos/VERB]() (5; 0% instances), [ca-pos/VERB]()-[ca-pos/PRON]() (4; 0% instances), [ca-pos/AUX]()-[ca-pos/VERB]() (3; 0% instances), [ca-pos/PRON]()-[ca-pos/AUX]() (3; 0% instances), [ca-pos/ADJ]()-[ca-pos/AUX]() (2; 0% instances), [ca-pos/CCONJ]()-[ca-pos/ADJ]() (2; 0% instances), [ca-pos/DET]()-[ca-pos/VERB]() (2; 0% instances), [ca-pos/VERB]()-[ca-pos/ADV]() (2; 0% instances), [ca-pos/NOUN]()-[ca-pos/ADJ]() (1; 0% instances), [ca-pos/VERB]()-[ca-pos/NUM]() (1; 0% instances), [ca-pos/VERB]()-[ca-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 xcomp	color:blue
1	Vol	voler	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	jugar	jugar	VERB	VERB	VerbForm=Inf	1	xcomp	_	_
3	al	al	ADP	ADP	AdpType=Preppron|Gender=Masc|Number=Sing	4	case	_	_
4	centre	centre	NOUN	NOUN	Gender=Masc|Number=Sing	2	obl	_	_
5	i	i	CCONJ	CCONJ	_	7	cc	_	_
6	va	anar	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	dir	dir	VERB	VERB	VerbForm=Inf	1	conj	_	_
8	que	que	SCONJ	SCONJ	_	10	mark	_	_
9	està	estar	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	preparat	preparat	ADJ	ADJ	Gender=Masc|Number=Sing|VerbForm=Part	7	ccomp	_	_
11	per	per	ADP	ADP	AdpType=Prep	14	case	_	_
12	a	a	ADP	ADP	AdpType=Prep	14	case	_	_
13	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	banqueta	banqueta	NOUN	NOUN	Gender=Fem|Number=Sing	10	obl	_	SpaceAfter=No
15	.	.	PUNCT	PUNCT	PunctType=Peri	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 xcomp	color:blue
1	Rivaldo	Rivaldo	PROPN	PROPN	_	2	nsubj	_	_
2	segueix	seguir	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	decidit	decidit	ADJ	ADJ	Gender=Masc|Number=Sing|VerbForm=Part	2	obj	_	_
4	a	a	ADP	ADP	AdpType=Prep	6	mark	_	_
5	no	no	ADV	ADV	Polarity=Neg	6	advmod	_	_
6	jugar	jugar	VERB	VERB	VerbForm=Inf	3	xcomp	_	_
7	més	més	ADV	ADV	_	6	advmod	_	_
8	com	com	SCONJ	SCONJ	_	10	case	_	MWE=com_a|MWEPOS=ADP
9	a	a	ADP	ADP	AdpType=Prep	8	fixed	_	_
10	extrem	extrem	NOUN	NOUN	Gender=Masc|Number=Sing	6	obj	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 xcomp	color:blue
1	Era	ser	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	cop	_	_
2	un	un	DET	DET	Gender=Masc|Number=Sing|PronType=Ind	3	det	_	_
3	seguidor	seguidor	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	_
4	del	del	ADP	ADP	AdpType=Preppron|Gender=Masc|Number=Sing	5	case	_	_
5	TBO	TBO	PROPN	PROPN	_	3	nmod	_	_
6	i	i	CCONJ	CCONJ	_	7	cc	_	_
7	somniava	somniar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	conj	_	_
8	en	en	ADP	ADP	AdpType=Prep	11	mark	_	_
9	ser	ser	AUX	AUX	VerbForm=Inf	11	cop	_	_
10	ne	en	PRON	PRON	Person=3|PronType=Prs	11	obj	_	_
11	dibuixant	dibuixant	NOUN	NOUN	Number=Sing	7	xcomp	_	_
12	algun	algun	DET	DET	Gender=Masc|Number=Sing|PronType=Ind	13	det	_	_
13	dia	dia	NOUN	NOUN	Gender=Masc|Number=Sing	11	obl	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	PunctType=Peri	3	punct	_	_

~~~


