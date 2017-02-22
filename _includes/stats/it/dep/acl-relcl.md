

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is a language-specific subtype of [acl]().

2978 nodes (1%) are attached to their parents as `acl:relcl`.

2973 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.27400940228341.

The following 24 pairs of parts of speech are connected with `acl:relcl`: [it-pos/NOUN]()-[it-pos/VERB]() (2199; 74% instances), [it-pos/PRON]()-[it-pos/VERB]() (399; 13% instances), [it-pos/PROPN]()-[it-pos/VERB]() (190; 6% instances), [it-pos/NOUN]()-[it-pos/ADJ]() (54; 2% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (37; 1% instances), [it-pos/PRON]()-[it-pos/ADJ]() (17; 1% instances), [it-pos/ADJ]()-[it-pos/VERB]() (14; 0% instances), [it-pos/PROPN]()-[it-pos/NOUN]() (11; 0% instances), [it-pos/ADV]()-[it-pos/VERB]() (8; 0% instances), [it-pos/PROPN]()-[it-pos/ADJ]() (8; 0% instances), [it-pos/NOUN]()-[it-pos/PRON]() (7; 0% instances), [it-pos/VERB]()-[it-pos/VERB]() (7; 0% instances), [it-pos/NUM]()-[it-pos/VERB]() (5; 0% instances), [it-pos/NOUN]()-[it-pos/NUM]() (4; 0% instances), [it-pos/X]()-[it-pos/VERB]() (4; 0% instances), [it-pos/PRON]()-[it-pos/NOUN]() (3; 0% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (2; 0% instances), [it-pos/PRON]()-[it-pos/PRON]() (2; 0% instances), [it-pos/VERB]()-[it-pos/NOUN]() (2; 0% instances), [it-pos/DET]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/DET]()-[it-pos/VERB]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/ADV]() (1; 0% instances), [it-pos/SCONJ]()-[it-pos/VERB]() (1; 0% instances), [it-pos/SYM]()-[it-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 acl:relcl	color:blue
1	Una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	libertà	libertà	NOUN	S	Gender=Fem	0	root	_	_
3	che	che	PRON	PR	PronType=Rel	10	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	_	_
5	a	a	ADP	E	_	6	case	_	_
6	quanto	quanto	PRON	PR	Gender=Masc|Number=Sing|PronType=Rel	10	obl	_	_
7	pare	parere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	acl:relcl	_	SpaceAfter=No
8	,	,	PUNCT	FF	_	6	punct	_	_
9	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	dato	dare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl:relcl	_	_
11	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	13	det	_	_
12	suoi	suo	DET	AP	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	13	det:poss	_	_
13	frutti	frutto	NOUN	S	Gender=Masc|Number=Plur	10	obj	_	SpaceAfter=No
14	:	:	PUNCT	FC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 acl:relcl	color:blue
1	Tutti	tutto	DET	T	Gender=Masc|Number=Plur|PronType=Tot	3	det:predet	_	_
2	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	esseri	essere	NOUN	S	Gender=Masc|Number=Plur	5	nsubj	_	ExtraSubj=Yes
4	umani	umano	ADJ	A	Gender=Masc|Number=Plur	3	amod	_	_
5	sanno	sapere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	di	di	ADP	E	_	9	mark	_	_
7	poter	potere	AUX	VM	VerbForm=Inf	9	aux	_	_
8	essere	essere	AUX	V	VerbForm=Inf	9	cop	_	_
9	più	più	ADV	B	_	5	xcomp	_	_
10	di	di	ADP	E	_	11	case	_	_
11	ciò	ciò	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	9	obl	_	_
12	che	che	PRON	PR	PronType=Rel	13	nsubj	_	_
13	sono	essere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 acl:relcl	color:blue
1	L'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	Isola	isola	NOUN	S	Gender=Fem|Number=Sing	4	nsubj	_	_
3	verde	verde	ADJ	A	Number=Sing	2	amod	_	_
4	fa	fare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	omaggio	omaggio	NOUN	S	Gender=Masc|Number=Sing	4	obj	_	_
6	a	a	ADP	E	_	9	case	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	«	«	PUNCT	FB	_	9	punct	_	SpaceAfter=No
9	Cumenda	Cumenda	PROPN	SP	_	5	nmod	_	SpaceAfter=No
10	»	»	PUNCT	FB	_	9	punct	_	_
11	che	che	PRON	PR	PronType=Rel	13	nsubj	_	_
12	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	obj	_	_
13	ideò	ideare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	acl:relcl	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian-ParTUT)

This relation is a language-specific subtype of [acl]().

421 nodes (1%) are attached to their parents as `acl:relcl`.

421 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.53444180522565.

The following 15 pairs of parts of speech are connected with `acl:relcl`: [it-pos/NOUN]()-[it-pos/VERB]() (306; 73% instances), [it-pos/PRON]()-[it-pos/VERB]() (62; 15% instances), [it-pos/PROPN]()-[it-pos/VERB]() (20; 5% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (8; 2% instances), [it-pos/NOUN]()-[it-pos/ADJ]() (5; 1% instances), [it-pos/PRON]()-[it-pos/ADJ]() (5; 1% instances), [it-pos/NOUN]()-[it-pos/PRON]() (3; 1% instances), [it-pos/PROPN]()-[it-pos/NOUN]() (3; 1% instances), [it-pos/PROPN]()-[it-pos/ADJ]() (2; 0% instances), [it-pos/VERB]()-[it-pos/VERB]() (2; 0% instances), [it-pos/NOUN]()-[it-pos/NUM]() (1; 0% instances), [it-pos/PRON]()-[it-pos/PRON]() (1; 0% instances), [it-pos/SCONJ]()-[it-pos/VERB]() (1; 0% instances), [it-pos/SYM]()-[it-pos/VERB]() (1; 0% instances), [it-pos/X]()-[it-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:relcl	color:blue
1	Imposta	impostare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	budget	budget	NOUN	S	Gender=Masc	1	obj	_	_
4	giornaliero	giornaliero	ADJ	A	Gender=Masc|Number=Sing	3	amod	_	_
5	che	che	PRON	PR	PronType=Rel	6	obj	_	_
6	ritieni	ritenere	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	_
7	più	più	ADV	B	_	8	advmod	_	_
8	adatto	adatto	ADJ	A	Gender=Masc|Number=Sing	6	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl:relcl	color:blue
1	Questo	questo	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	3	nsubj	_	_
2	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	quanto	quanto	PRON	PR	Gender=Masc|Number=Sing|PronType=Rel	0	root	_	_
4	chiediamo	chiedere	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	_
5	oggi	oggi	ADV	B	_	4	advmod	_	_
6	a	a	ADP	E	_	8	case	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	signor	signore	NOUN	S	Gender=Masc|Number=Sing	4	obl	_	_
9	commissario	commissario	NOUN	S	Gender=Masc|Number=Sing	8	compound	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 15 acl:relcl	color:blue
1	A	a	ADP	E	_	3	case	_	_
2	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	età	età	NOUN	S	Gender=Fem	8	obl	_	_
4	di	di	ADP	E	_	6	case	_	_
5	18	18	NUM	N	NumType=Card	6	nummod	_	_
6	anni	anno	NOUN	S	Gender=Masc|Number=Plur	3	nmod	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	3	punct	_	_
8	sposò	sposare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
9	Anne	Anne	PROPN	SP	_	8	obj	_	_
10	Hathaway	Hathaway	PROPN	SP	_	9	flat:name	_	SpaceAfter=No
11	,	,	PUNCT	FF	_	9	punct	_	_
12	con	con	ADP	E	_	14	case	_	_
13	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	quale	quale	PRON	PR	Number=Sing|PronType=Rel	15	obl	_	_
15	ebbe	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	acl:relcl	_	_
16	3	3	NUM	N	NumType=Card	17	nummod	_	_
17	figli	figlio	NOUN	S	Gender=Masc|Number=Plur	15	obj	_	SpaceAfter=No
18	:	:	PUNCT	FC	_	8	punct	_	_

~~~


