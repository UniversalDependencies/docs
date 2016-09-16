

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish)

This relation is universal.

1668 nodes (0%) are attached to their parents as `parataxis`.

1645 instances of `parataxis` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 14.7020383693046.

The following 45 pairs of parts of speech are connected with `parataxis`: [es-pos/VERB]()-[es-pos/VERB]() (821; 49% instances), [es-pos/NOUN]()-[es-pos/VERB]() (185; 11% instances), [es-pos/VERB]()-[es-pos/NOUN]() (139; 8% instances), [es-pos/VERB]()-[es-pos/ADJ]() (105; 6% instances), [es-pos/ADJ]()-[es-pos/VERB]() (94; 6% instances), [es-pos/ADJ]()-[es-pos/NOUN]() (44; 3% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (34; 2% instances), [es-pos/VERB]()-[es-pos/PRON]() (27; 2% instances), [es-pos/VERB]()-[es-pos/PROPN]() (27; 2% instances), [es-pos/NOUN]()-[es-pos/ADJ]() (25; 1% instances), [es-pos/ADJ]()-[es-pos/ADJ]() (24; 1% instances), [es-pos/PRON]()-[es-pos/VERB]() (20; 1% instances), [es-pos/PROPN]()-[es-pos/VERB]() (19; 1% instances), [es-pos/NOUN]()-[es-pos/PROPN]() (16; 1% instances), [es-pos/PROPN]()-[es-pos/PROPN]() (12; 1% instances), [es-pos/ADJ]()-[es-pos/PRON]() (8; 0% instances), [es-pos/PROPN]()-[es-pos/NOUN]() (6; 0% instances), [es-pos/X]()-[es-pos/VERB]() (6; 0% instances), [es-pos/VERB]()-[es-pos/ADV]() (5; 0% instances), [es-pos/VERB]()-[es-pos/NUM]() (5; 0% instances), [es-pos/VERB]()-[es-pos/X]() (5; 0% instances), [es-pos/NOUN]()-[es-pos/PRON]() (4; 0% instances), [es-pos/ADV]()-[es-pos/ADJ]() (3; 0% instances), [es-pos/NUM]()-[es-pos/VERB]() (3; 0% instances), [es-pos/PRON]()-[es-pos/NOUN]() (3; 0% instances), [es-pos/VERB]()-[es-pos/AUX]() (3; 0% instances), [es-pos/ADJ]()-[es-pos/ADV]() (2; 0% instances), [es-pos/ADV]()-[es-pos/NOUN]() (2; 0% instances), [es-pos/ADV]()-[es-pos/VERB]() (2; 0% instances), [es-pos/PROPN]()-[es-pos/X]() (2; 0% instances), [es-pos/SYM]()-[es-pos/VERB]() (2; 0% instances), [es-pos/VERB]()-[es-pos/DET]() (2; 0% instances), [es-pos/ADJ]()-[es-pos/DET]() (1; 0% instances), [es-pos/ADJ]()-[es-pos/X]() (1; 0% instances), [es-pos/ADV]()-[es-pos/PROPN]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/AUX]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/X]() (1; 0% instances), [es-pos/PRON]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/PRON]()-[es-pos/DET]() (1; 0% instances), [es-pos/PRON]()-[es-pos/PRON]() (1; 0% instances), [es-pos/PROPN]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/SCONJ]()-[es-pos/VERB]() (1; 0% instances), [es-pos/VERB]()-[es-pos/ADP]() (1; 0% instances), [es-pos/X]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/X]()-[es-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 parataxis	color:blue
1	Han	haber	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	cambiado	cambiado	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
3	de	de	ADP	_	_	4	case	_	_
4	nombre	nombre	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	_
5	,	,	PUNCT	_	_	2	punct	_	_
6	se	él	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	7	iobj	_	_
7	llama	llamar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis	_	_
8	Lolita	lolita	PROPN	_	_	7	acl	_	_
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 parataxis	color:blue
1	Come	come	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	microorganismos	microorganismo	NOUN	_	Gender=Masc|Number=Plur	1	dobj	_	_
3	y	y	CONJ	_	_	2	cc	_	_
4	algas	algo	NOUN	_	Gender=Fem|Number=Plur	2	conj	_	_
5	(	(	PUNCT	_	_	6	punct	_	_
6	incluyendo	incluir	VERB	_	VerbForm=Ger	2	parataxis	_	_
7	diatomeas	diatomea	NOUN	_	Gender=Fem|Number=Plur	6	dobj	_	_
8	)	)	PUNCT	_	_	6	punct	_	_
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 13 parataxis	color:blue
1	Es	ser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	de	de	ADP	_	_	4	case	_	_
3	lo	él	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	4	det	_	_
4	mejorcito	mejorcito	NOUN	_	Gender=Masc|Number=Sing	1	nmod	_	_
5	que	que	SCONJ	_	_	6	mark	_	_
6	hay	haber	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
7	en	en	ADP	_	_	9	case	_	_
8	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	sur	sur	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	_
10	,	,	PUNCT	_	_	1	punct	_	_
11	sino	sino	ADV	_	_	13	advmod	_	_
12	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	mejor	mejor	NOUN	_	Number=Sing	1	parataxis	_	_
14	.	.	PUNCT	_	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Spanish-AnCora)

This relation is universal.

691 nodes (0%) are attached to their parents as `parataxis`.

373 instances of `parataxis` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.67293777134588.

The following 50 pairs of parts of speech are connected with `parataxis`: [es-pos/CONJ]()-[es-pos/VERB]() (224; 32% instances), [es-pos/VERB]()-[es-pos/VERB]() (184; 27% instances), [es-pos/NOUN]()-[es-pos/VERB]() (64; 9% instances), [es-pos/ADP]()-[es-pos/VERB]() (35; 5% instances), [es-pos/ADJ]()-[es-pos/VERB]() (30; 4% instances), [es-pos/CONJ]()-[es-pos/NOUN]() (26; 4% instances), [es-pos/ADV]()-[es-pos/VERB]() (16; 2% instances), [es-pos/CONJ]()-[es-pos/ADJ]() (15; 2% instances), [es-pos/ADV]()-[es-pos/NOUN]() (9; 1% instances), [es-pos/VERB]()-[es-pos/NOUN]() (6; 1% instances), [es-pos/NOUN]()-[es-pos/ADJ]() (5; 1% instances), [es-pos/NOUN]()-[es-pos/NOUN]() (5; 1% instances), [es-pos/VERB]()-[es-pos/AUX]() (5; 1% instances), [es-pos/AUX]()-[es-pos/VERB]() (4; 1% instances), [es-pos/CONJ]()-[es-pos/AUX]() (4; 1% instances), [es-pos/NOUN]()-[es-pos/AUX]() (4; 1% instances), [es-pos/PRON]()-[es-pos/VERB]() (4; 1% instances), [es-pos/PROPN]()-[es-pos/VERB]() (4; 1% instances), [es-pos/ADJ]()-[es-pos/ADJ]() (3; 0% instances), [es-pos/ADP]()-[es-pos/ADJ]() (3; 0% instances), [es-pos/NUM]()-[es-pos/VERB]() (3; 0% instances), [es-pos/PART]()-[es-pos/VERB]() (3; 0% instances), [es-pos/CONJ]()-[es-pos/NUM]() (2; 0% instances), [es-pos/CONJ]()-[es-pos/PROPN]() (2; 0% instances), [es-pos/DET]()-[es-pos/NOUN]() (2; 0% instances), [es-pos/DET]()-[es-pos/PROPN]() (2; 0% instances), [es-pos/NOUN]()-[es-pos/NUM]() (2; 0% instances), [es-pos/SCONJ]()-[es-pos/VERB]() (2; 0% instances), [es-pos/VERB]()-[es-pos/PRON]() (2; 0% instances), [es-pos/ADJ]()-[es-pos/AUX]() (1; 0% instances), [es-pos/ADJ]()-[es-pos/PRON]() (1; 0% instances), [es-pos/ADV]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/ADV]()-[es-pos/PRON]() (1; 0% instances), [es-pos/ADV]()-[es-pos/SYM]() (1; 0% instances), [es-pos/AUX]()-[es-pos/AUX]() (1; 0% instances), [es-pos/AUX]()-[es-pos/PROPN]() (1; 0% instances), [es-pos/CONJ]()-[es-pos/ADP]() (1; 0% instances), [es-pos/CONJ]()-[es-pos/ADV]() (1; 0% instances), [es-pos/CONJ]()-[es-pos/CONJ]() (1; 0% instances), [es-pos/CONJ]()-[es-pos/PRON]() (1; 0% instances), [es-pos/DET]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/DET]()-[es-pos/VERB]() (1; 0% instances), [es-pos/NOUN]()-[es-pos/PROPN]() (1; 0% instances), [es-pos/NUM]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/PART]()-[es-pos/PROPN]() (1; 0% instances), [es-pos/PROPN]()-[es-pos/ADJ]() (1; 0% instances), [es-pos/PROPN]()-[es-pos/NOUN]() (1; 0% instances), [es-pos/PROPN]()-[es-pos/PRON]() (1; 0% instances), [es-pos/SYM]()-[es-pos/SYM]() (1; 0% instances), [es-pos/VERB]()-[es-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 parataxis	color:blue
1	"	"	PUNCT	PUNCT	PunctType=Quot	7	punct	_	_
2	No	no	PART	PART	Negative=Neg	7	cc	_	MWE=No_sólo|MWEPOS=ADV
3	sólo	sólo	ADV	ADV	_	2	mwe	_	_
4	nos	yo	PRON	PRON	Number=Plur|Person=1|PronType=Prs	5	dobj	_	_
5	insultan	insultar	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	parataxis	_	_
6	,	,	PUNCT	PUNCT	PunctType=Comm	7	punct	_	_
7	sino	sino	CONJ	CONJ	_	0	root	_	MWE=sino_que|MWEPOS=CONJ
8	que	que	SCONJ	SCONJ	_	7	mwe	_	_
9	mienten	mentir	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	parataxis	_	_
10	y	y	CONJ	CONJ	_	9	cc	_	_
11	lo	él	PRON	PRON	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	dobj	_	_
12	saben	saber	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	conj	_	_
13	.	.	PUNCT	PUNCT	PunctType=Peri	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 parataxis	color:blue
1	Para	para	ADP	ADP	AdpType=Prep	2	case	_	_
2	eso	ese	PRON	PRON	Number=Sing|PronType=Dem	7	nmod	_	_
3	,	,	PUNCT	PUNCT	PunctType=Comm	5	punct	_	_
4	ya	ya	ADV	ADV	_	5	advmod	_	_
5	digo	decir	VERB	VERB	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	parataxis	_	_
6	,	,	PUNCT	PUNCT	PunctType=Comm	5	punct	_	_
7	necesito	necesitar	VERB	VERB	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
8	un	uno	DET	DET	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	soldador	soldador	NOUN	NOUN	Gender=Masc|Number=Sing	7	dobj	_	_
10	.	.	PUNCT	PUNCT	PunctType=Peri	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 parataxis	color:blue
1	Pero	pero	CONJ	CONJ	_	3	cc	_	_
2	los	el	DET	DET	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	dientes	diente	NOUN	NOUN	Gender=Masc|Number=Plur	0	root	_	_
4	no	no	ADV	ADV	Negative=Neg	3	neg	_	_
5	,	,	PUNCT	PUNCT	PunctType=Comm	7	punct	_	_
6	se	él	PRON	PRON	Person=3|PronType=Prs	7	dobj	_	_
7	repetía	repetir	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	parataxis	_	_
8	,	,	PUNCT	PUNCT	PunctType=Comm	7	punct	_	_
9	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	boca	boca	NOUN	NOUN	Gender=Fem|Number=Sing	3	nmod	_	_
11	no	no	ADV	ADV	Negative=Neg	10	neg	_	_
12	.	.	PUNCT	PUNCT	PunctType=Peri	3	punct	_	_

~~~


