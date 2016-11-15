

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

6193 nodes (2%) are attached to their parents as `mark`.

6193 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.95301146455676.

The following 18 pairs of parts of speech are connected with `mark`: [it-pos/VERB]()-[it-pos/ADP]() (3142; 51% instances), [it-pos/VERB]()-[it-pos/SCONJ]() (2401; 39% instances), [it-pos/ADJ]()-[it-pos/SCONJ]() (244; 4% instances), [it-pos/NOUN]()-[it-pos/SCONJ]() (164; 3% instances), [it-pos/VERB]()-[it-pos/ADV]() (149; 2% instances), [it-pos/ADJ]()-[it-pos/ADP]() (25; 0% instances), [it-pos/PRON]()-[it-pos/SCONJ]() (21; 0% instances), [it-pos/NOUN]()-[it-pos/ADP]() (15; 0% instances), [it-pos/PROPN]()-[it-pos/SCONJ]() (10; 0% instances), [it-pos/ADV]()-[it-pos/SCONJ]() (5; 0% instances), [it-pos/PRON]()-[it-pos/ADP]() (5; 0% instances), [it-pos/ADJ]()-[it-pos/ADV]() (4; 0% instances), [it-pos/NOUN]()-[it-pos/ADV]() (2; 0% instances), [it-pos/NUM]()-[it-pos/SCONJ]() (2; 0% instances), [it-pos/ADV]()-[it-pos/ADP]() (1; 0% instances), [it-pos/ADV]()-[it-pos/ADV]() (1; 0% instances), [it-pos/PRON]()-[it-pos/ADV]() (1; 0% instances), [it-pos/VERB]()-[it-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 mark	color:blue
1	"	"	PUNCT	FB	_	5	punct	_	SpaceAfter=No
2	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Pivetti	Pivetti	PROPN	SP	_	5	nsubj	_	_
4	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	fatto	fare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	benissimo	bene	ADV	B	Degree=Abs	5	advmod	_	_
7	a	a	ADP	E	_	8	mark	_	_
8	decidere	decidere	VERB	V	VerbForm=Inf	5	xcomp	_	_
9	di	di	ADP	E	_	10	case	_	_
10	testa	testa	NOUN	S	Gender=Fem|Number=Sing	8	nmod	_	_
11	sua	suo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	10	det:poss	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 mark	color:blue
1	Se	se	SCONJ	CS	_	2	mark	_	_
2	pensi	pensare	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	advcl	_	_
3	a	a	ADP	E	_	5	case	_	_
4	queste	questo	DET	DD	Gender=Fem|Number=Plur|PronType=Dem	5	det	_	_
5	cose	cosa	NOUN	S	Gender=Fem|Number=Plur	2	nmod	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	2	punct	_	_
7	se	se	SCONJ	CS	_	9	mark	_	_
8	ci	ci	PRON	PC	Number=Plur|Person=1|PronType=Clit	9	expl	_	_
9	rifletti	riflettere	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	advcl	_	_
10	su	su	ADV	B	_	9	advmod	_	_
11	finisci	finire	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
12	per	per	ADP	E	_	13	mark	_	_
13	sbagliare	sbagliare	VERB	V	VerbForm=Inf	11	advcl	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 mark	color:blue
1	Che	che	SCONJ	CS	_	3	mark	_	_
2	sia	essere	VERB	V	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	intelligente	intelligente	ADJ	A	Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	_	_
5	però	però	ADV	B	_	3	advmod	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	3	punct	_	_

~~~


