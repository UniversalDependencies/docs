

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This relation is universal.

3747 nodes (1%) are attached to their parents as `ccomp`.

3285 instances of `ccomp` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.18281291700027.

The following 39 pairs of parts of speech are connected with `ccomp`: [ca-pos/VERB]()-[ca-pos/VERB]() (2481; 66% instances), [ca-pos/VERB]()-[ca-pos/ADJ]() (352; 9% instances), [ca-pos/AUX]()-[ca-pos/VERB]() (337; 9% instances), [ca-pos/VERB]()-[ca-pos/NOUN]() (285; 8% instances), [ca-pos/VERB]()-[ca-pos/AUX]() (95; 3% instances), [ca-pos/CCONJ]()-[ca-pos/VERB]() (34; 1% instances), [ca-pos/VERB]()-[ca-pos/PRON]() (34; 1% instances), [ca-pos/ADJ]()-[ca-pos/VERB]() (14; 0% instances), [ca-pos/AUX]()-[ca-pos/NOUN]() (13; 0% instances), [ca-pos/VERB]()-[ca-pos/PROPN]() (12; 0% instances), [ca-pos/AUX]()-[ca-pos/ADJ]() (11; 0% instances), [ca-pos/VERB]()-[ca-pos/ADV]() (9; 0% instances), [ca-pos/ADV]()-[ca-pos/VERB]() (7; 0% instances), [ca-pos/ADP]()-[ca-pos/VERB]() (6; 0% instances), [ca-pos/DET]()-[ca-pos/VERB]() (6; 0% instances), [ca-pos/VERB]()-[ca-pos/NUM]() (6; 0% instances), [ca-pos/AUX]()-[ca-pos/AUX]() (5; 0% instances), [ca-pos/NOUN]()-[ca-pos/VERB]() (5; 0% instances), [ca-pos/ADJ]()-[ca-pos/ADJ]() (3; 0% instances), [ca-pos/ADJ]()-[ca-pos/NOUN]() (3; 0% instances), [ca-pos/AUX]()-[ca-pos/PRON]() (3; 0% instances), [ca-pos/CCONJ]()-[ca-pos/ADJ]() (3; 0% instances), [ca-pos/CCONJ]()-[ca-pos/NOUN]() (3; 0% instances), [ca-pos/CCONJ]()-[ca-pos/AUX]() (2; 0% instances), [ca-pos/CCONJ]()-[ca-pos/NUM]() (2; 0% instances), [ca-pos/NOUN]()-[ca-pos/NOUN]() (2; 0% instances), [ca-pos/VERB]()-[ca-pos/ADP]() (2; 0% instances), [ca-pos/ADJ]()-[ca-pos/AUX]() (1; 0% instances), [ca-pos/ADJ]()-[ca-pos/PRON]() (1; 0% instances), [ca-pos/ADP]()-[ca-pos/NOUN]() (1; 0% instances), [ca-pos/AUX]()-[ca-pos/PROPN]() (1; 0% instances), [ca-pos/CCONJ]()-[ca-pos/ADP]() (1; 0% instances), [ca-pos/NOUN]()-[ca-pos/PRON]() (1; 0% instances), [ca-pos/PRON]()-[ca-pos/AUX]() (1; 0% instances), [ca-pos/PRON]()-[ca-pos/VERB]() (1; 0% instances), [ca-pos/PROPN]()-[ca-pos/VERB]() (1; 0% instances), [ca-pos/SYM]()-[ca-pos/VERB]() (1; 0% instances), [ca-pos/VERB]()-[ca-pos/DET]() (1; 0% instances), [ca-pos/VERB]()-[ca-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 ccomp	color:blue
1	Precisament	precisament	ADV	ADV	_	8	advmod	_	_
2	un	un	NUM	NUM	Gender=Masc|Number=Sing|NumType=Card	8	nsubj	_	_
3	dels	del	ADP	ADP	AdpType=Preppron|Gender=Masc|Number=Plur	4	case	_	_
4	objectius	objectiu	NOUN	NOUN	Gender=Masc|Number=Plur	2	nmod	_	_
5	del	del	ADP	ADP	AdpType=Preppron|Gender=Masc|Number=Sing	6	case	_	_
6	pla	pla	NOUN	NOUN	Gender=Masc|Number=Sing	4	nmod	_	_
7	urbanístic	urbanístic	ADJ	ADJ	Gender=Masc|Number=Sing	6	amod	_	_
8	és	ser	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	rebaixar	rebaixar	VERB	VERB	VerbForm=Inf	8	ccomp	_	_
10	lo	ell	PRON	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	obj	_	_
11	.	.	PUNCT	PUNCT	PunctType=Peri	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 ccomp	color:blue
1	L'	el	DET	DET	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	altra	altre	PRON	PRON	Gender=Fem|Number=Sing|PronType=Ind	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	PunctType=Comm	5	punct	_	_
4	que	que	PRON	PRON	PronType=Rel	5	nsubj	_	_
5	diu	dir	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl	_	_
6	que	que	SCONJ	SCONJ	_	8	mark	_	_
7	és	ser	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	favorable	favorable	ADJ	ADJ	Number=Sing	5	ccomp	_	_
9	al	al	ADP	ADP	AdpType=Preppron|Gender=Masc|Number=Sing	10	case	_	_
10	govern	govern	NOUN	NOUN	Gender=Masc|Number=Sing	8	nmod	_	_
11	de	de	ADP	ADP	AdpType=Prep	12	case	_	_
12	Madrid	Madrid	PROPN	PROPN	_	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 ccomp	color:blue
1	"	"	PUNCT	PUNCT	PunctType=Quot	5	punct	_	SpaceAfter=No
2	El	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
3	més	més	ADV	ADV	_	4	advmod	_	_
4	gros	gros	ADJ	ADJ	Gender=Masc|Number=Sing	5	nsubj	_	_
5	és	ser	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	que	que	SCONJ	SCONJ	_	10	mark	_	_
7	tot	tot	DET	DET	Gender=Masc|Number=Sing|PronType=Ind	8	det	_	_
8	això	això	PRON	PRON	Number=Sing|PronType=Dem	10	nsubj	_	_
9	es	es	PRON	PRON	_	10	obj	_	_
10	fes	fer	VERB	VERB	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	ccomp	_	_
11	per	per	ADP	ADP	AdpType=Prep	12	case	_	_
12	motius	motiu	NOUN	NOUN	Gender=Masc|Number=Plur	10	obl	_	_
13	lingüístics	lingüístic	ADJ	ADJ	Gender=Masc|Number=Plur	12	amod	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	PunctType=Peri	5	punct	_	_

~~~


