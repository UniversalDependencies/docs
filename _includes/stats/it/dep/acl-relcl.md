

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is a language-specific subtype of [acl]().

3118 nodes (1%) are attached to their parents as `acl:relcl`.

3113 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.26523412443874.

The following 23 pairs of parts of speech are connected with `acl:relcl`: [it-pos/NOUN]()-[it-pos/VERB]() (2289; 73% instances), [it-pos/PRON]()-[it-pos/VERB]() (436; 14% instances), [it-pos/PROPN]()-[it-pos/VERB]() (202; 6% instances), [it-pos/NOUN]()-[it-pos/ADJ]() (55; 2% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (37; 1% instances), [it-pos/PRON]()-[it-pos/ADJ]() (18; 1% instances), [it-pos/PROPN]()-[it-pos/NOUN]() (12; 0% instances), [it-pos/ADV]()-[it-pos/VERB]() (10; 0% instances), [it-pos/ADJ]()-[it-pos/VERB]() (8; 0% instances), [it-pos/PROPN]()-[it-pos/ADJ]() (8; 0% instances), [it-pos/VERB]()-[it-pos/VERB]() (8; 0% instances), [it-pos/NOUN]()-[it-pos/PRON]() (7; 0% instances), [it-pos/NUM]()-[it-pos/VERB]() (5; 0% instances), [it-pos/NOUN]()-[it-pos/NUM]() (4; 0% instances), [it-pos/X]()-[it-pos/VERB]() (4; 0% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (3; 0% instances), [it-pos/PRON]()-[it-pos/NOUN]() (3; 0% instances), [it-pos/NOUN]()-[it-pos/ADV]() (2; 0% instances), [it-pos/PRON]()-[it-pos/PRON]() (2; 0% instances), [it-pos/VERB]()-[it-pos/NOUN]() (2; 0% instances), [it-pos/DET]()-[it-pos/VERB]() (1; 0% instances), [it-pos/SCONJ]()-[it-pos/VERB]() (1; 0% instances), [it-pos/SYM]()-[it-pos/VERB]() (1; 0% instances).


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
6	quanto	quanto	PRON	PR	Gender=Masc|Number=Sing|PronType=Rel	10	nmod	_	_
7	pare	parere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	acl:relcl	_	SpaceAfter=No
8	,	,	PUNCT	FF	_	6	punct	_	_
9	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	dato	dare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl:relcl	_	_
11	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	13	det	_	_
12	suoi	suo	DET	AP	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	13	det:poss	_	_
13	frutti	frutto	NOUN	S	Gender=Masc|Number=Plur	10	dobj	_	SpaceAfter=No
14	:	:	PUNCT	FC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 acl:relcl	color:blue
1	Tutti	tutto	DET	T	Gender=Masc|Number=Plur|PronType=Predet	3	det:predet	_	_
2	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	esseri	essere	NOUN	S	Gender=Masc|Number=Plur	5	nsubj	_	_
4	umani	umano	ADJ	A	Gender=Masc|Number=Plur	3	amod	_	_
5	sanno	sapere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	di	di	ADP	E	_	9	mark	_	_
7	poter	potere	AUX	VM	VerbForm=Inf	9	aux	_	_
8	essere	essere	VERB	V	VerbForm=Inf	9	cop	_	_
9	più	più	ADV	B	_	5	xcomp	_	_
10	di	di	ADP	E	_	11	case	_	_
11	ciò	ciò	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	9	nmod	_	_
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
5	omaggio	omaggio	NOUN	S	Gender=Masc|Number=Sing	4	dobj	_	_
6	a	a	ADP	E	_	9	case	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
8	«	«	PUNCT	FB	_	9	punct	_	SpaceAfter=No
9	Cumenda	Cumenda	PROPN	SP	_	5	nmod	_	SpaceAfter=No
10	»	»	PUNCT	FB	_	9	punct	_	_
11	che	che	PRON	PR	PronType=Rel	13	nsubj	_	_
12	la	la	PRON	PC	Gender=Fem|Number=Sing|Person=3|PronType=Clit	13	dobj	_	_
13	ideò	ideare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	acl:relcl	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	4	punct	_	_

~~~


