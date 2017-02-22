

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: [nsubj:pass]().

12051 nodes (4%) are attached to their parents as `nsubj`.

9165 instances of `nsubj` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.88191851298647.

The following 46 pairs of parts of speech are connected with `nsubj`: [it-pos/VERB]()-[it-pos/NOUN]() (5357; 44% instances), [it-pos/VERB]()-[it-pos/PRON]() (2502; 21% instances), [it-pos/VERB]()-[it-pos/PROPN]() (1659; 14% instances), [it-pos/ADJ]()-[it-pos/NOUN]() (620; 5% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (532; 4% instances), [it-pos/PRON]()-[it-pos/NOUN]() (478; 4% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (173; 1% instances), [it-pos/NOUN]()-[it-pos/PRON]() (169; 1% instances), [it-pos/PRON]()-[it-pos/PROPN]() (138; 1% instances), [it-pos/ADJ]()-[it-pos/PRON]() (105; 1% instances), [it-pos/ADJ]()-[it-pos/PROPN]() (69; 1% instances), [it-pos/PROPN]()-[it-pos/NOUN]() (41; 0% instances), [it-pos/VERB]()-[it-pos/ADJ]() (38; 0% instances), [it-pos/VERB]()-[it-pos/NUM]() (31; 0% instances), [it-pos/PRON]()-[it-pos/PRON]() (22; 0% instances), [it-pos/NUM]()-[it-pos/NOUN]() (21; 0% instances), [it-pos/ADV]()-[it-pos/NOUN]() (11; 0% instances), [it-pos/NOUN]()-[it-pos/NUM]() (9; 0% instances), [it-pos/VERB]()-[it-pos/VERB]() (9; 0% instances), [it-pos/PROPN]()-[it-pos/PRON]() (7; 0% instances), [it-pos/AUX]()-[it-pos/NOUN]() (5; 0% instances), [it-pos/NOUN]()-[it-pos/ADJ]() (5; 0% instances), [it-pos/PROPN]()-[it-pos/PROPN]() (5; 0% instances), [it-pos/VERB]()-[it-pos/SYM]() (4; 0% instances), [it-pos/VERB]()-[it-pos/X]() (4; 0% instances), [it-pos/ADV]()-[it-pos/PRON]() (3; 0% instances), [it-pos/NOUN]()-[it-pos/VERB]() (3; 0% instances), [it-pos/PRON]()-[it-pos/ADJ]() (3; 0% instances), [it-pos/VERB]()-[it-pos/ADV]() (3; 0% instances), [it-pos/ADJ]()-[it-pos/ADJ]() (2; 0% instances), [it-pos/ADJ]()-[it-pos/NUM]() (2; 0% instances), [it-pos/ADV]()-[it-pos/PROPN]() (2; 0% instances), [it-pos/AUX]()-[it-pos/PRON]() (2; 0% instances), [it-pos/AUX]()-[it-pos/PROPN]() (2; 0% instances), [it-pos/NOUN]()-[it-pos/ADV]() (2; 0% instances), [it-pos/NUM]()-[it-pos/PRON]() (2; 0% instances), [it-pos/X]()-[it-pos/NOUN]() (2; 0% instances), [it-pos/ADJ]()-[it-pos/SYM]() (1; 0% instances), [it-pos/ADP]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/ADP]()-[it-pos/PRON]() (1; 0% instances), [it-pos/NUM]()-[it-pos/PROPN]() (1; 0% instances), [it-pos/PRON]()-[it-pos/NUM]() (1; 0% instances), [it-pos/PRON]()-[it-pos/VERB]() (1; 0% instances), [it-pos/PROPN]()-[it-pos/ADJ]() (1; 0% instances), [it-pos/PUNCT]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/SYM]()-[it-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj	color:blue
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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 nsubj	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj	color:blue
1	"	"	PUNCT	FB	_	5	punct	_	SpaceAfter=No
2	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Pivetti	Pivetti	PROPN	SP	_	5	nsubj	_	ExtraSubj=Yes
4	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	fatto	fare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	benissimo	bene	ADV	B	Degree=Abs	5	advmod	_	_
7	a	a	ADP	E	_	8	mark	_	_
8	decidere	decidere	VERB	V	VerbForm=Inf	5	xcomp	_	_
9	di	di	ADP	E	_	10	case	_	_
10	testa	testa	NOUN	S	Gender=Fem|Number=Sing	8	obl	_	_
11	sua	suo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	10	det:poss	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian-ParTUT)

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: [nsubj:pass]().

1618 nodes (4%) are attached to their parents as `nsubj`.

1502 instances of `nsubj` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.33683559950556.

The following 29 pairs of parts of speech are connected with `nsubj`: [it-pos/VERB]()-[it-pos/NOUN]() (722; 45% instances), [it-pos/VERB]()-[it-pos/PRON]() (324; 20% instances), [it-pos/VERB]()-[it-pos/PROPN]() (229; 14% instances), [it-pos/ADJ]()-[it-pos/NOUN]() (101; 6% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (91; 6% instances), [it-pos/NOUN]()-[it-pos/PRON]() (33; 2% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (28; 2% instances), [it-pos/ADJ]()-[it-pos/PRON]() (23; 1% instances), [it-pos/PRON]()-[it-pos/NOUN]() (20; 1% instances), [it-pos/PRON]()-[it-pos/PRON]() (6; 0% instances), [it-pos/VERB]()-[it-pos/ADJ]() (6; 0% instances), [it-pos/VERB]()-[it-pos/X]() (6; 0% instances), [it-pos/ADJ]()-[it-pos/PROPN]() (5; 0% instances), [it-pos/ADV]()-[it-pos/NOUN]() (2; 0% instances), [it-pos/AUX]()-[it-pos/NOUN]() (2; 0% instances), [it-pos/AUX]()-[it-pos/PRON]() (2; 0% instances), [it-pos/NOUN]()-[it-pos/X]() (2; 0% instances), [it-pos/PROPN]()-[it-pos/PROPN]() (2; 0% instances), [it-pos/SYM]()-[it-pos/NOUN]() (2; 0% instances), [it-pos/VERB]()-[it-pos/NUM]() (2; 0% instances), [it-pos/VERB]()-[it-pos/SYM]() (2; 0% instances), [it-pos/AUX]()-[it-pos/PROPN]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/DET]() (1; 0% instances), [it-pos/NUM]()-[it-pos/PRON]() (1; 0% instances), [it-pos/PRON]()-[it-pos/NUM]() (1; 0% instances), [it-pos/PRON]()-[it-pos/PROPN]() (1; 0% instances), [it-pos/PROPN]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/PROPN]()-[it-pos/PRON]() (1; 0% instances), [it-pos/VERB]()-[it-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj	color:blue
1	(	(	PUNCT	FB	_	4	punct	_	SpaceAfter=No
2	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	parlamento	parlamento	NOUN	S	Gender=Masc|Number=Sing	4	nsubj	_	_
4	osserva	osservare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	minuto	minuto	NOUN	S	Gender=Masc|Number=Sing	4	obj	_	_
7	di	di	ADP	E	_	8	case	_	_
8	silenzio	silenzio	NOUN	S	Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
9	)	)	PUNCT	FB	_	4	punct	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj	color:blue
1	Lei	lei	PRON	PE	Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	non	non	ADV	BN	PronType=Neg	5	advmod	_	_
3	mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	5	iobj	_	_
4	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	dato	dare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	parola	parola	NOUN	S	Gender=Fem|Number=Sing	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj	color:blue
1	È	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	vero	vero	ADJ	A	Gender=Masc|Number=Sing	0	root	_	_
3	che	che	SCONJ	CS	_	5	mark	_	_
4	Facebook	Facebook	PROPN	SP	_	5	nsubj	_	_
5	sarà	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	2	ccomp	_	_
6	a	a	ADP	E	_	7	case	_	_
7	pagamento	pagamento	NOUN	S	Gender=Masc|Number=Sing	5	obl	_	_
8	?	?	PUNCT	FS	_	2	punct	_	_

~~~


