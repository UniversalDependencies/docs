

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is a language-specific subtype of [det]().
There are also 1 other language-specific subtypes of `det`: [det:predet]().

1777 nodes (1%) are attached to their parents as `det:poss`.

1709 instances of `det:poss` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11198649409116.

The following 5 pairs of parts of speech are connected with `det:poss`: [it-pos/NOUN]()-[it-pos/DET]() (1756; 99% instances), [it-pos/PROPN]()-[it-pos/DET]() (9; 1% instances), [it-pos/ADJ]()-[it-pos/DET]() (7; 0% instances), [it-pos/VERB]()-[it-pos/DET]() (4; 0% instances), [it-pos/NUM]()-[it-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 det:poss	color:blue
1	"	"	PUNCT	FB	_	5	punct	_	SpaceAfter=No
2	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Pivetti	Pivetti	PROPN	SP	_	5	nsubj	_	_
4	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	fatto	fare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	benissimo	bene	ADV	B	Degree=Abs	5	advmod	_	PRED
7	a	a	ADP	E	_	8	mark	_	_
8	decidere	decidere	VERB	V	VerbForm=Inf	5	xcomp	_	_
9	di	di	ADP	E	_	10	case	_	_
10	testa	testa	NOUN	S	Gender=Fem|Number=Sing	8	nmod	_	_
11	sua	suo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	10	det:poss	_	_
12	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det:poss	color:blue
1	Quanti	quanto	DET	DQ	Gender=Masc|Number=Plur|PronType=Int	2	det	_	_
2	pianeti	pianeta	NOUN	S	Gender=Masc|Number=Plur	4	nsubj	_	_
3	ci	ci	PRON	PC	PronType=Clit	4	expl	_	_
4	sono	essere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	in	in	ADP	E	_	8	case	_	_
6	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
7	nostro	nostro	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	8	det:poss	_	_
8	Sistema	Sistema	PROPN	SP	_	4	nmod	_	_
9	Solare	Solare	PROPN	SP	_	8	name	_	_
10	?	?	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 det:poss	color:blue
1	Femmine	femmina	NOUN	S	Gender=Fem|Number=Plur	0	root	_	_
2	,	,	PUNCT	FF	_	1	punct	_	_
3	dopo	dopo	ADP	E	_	5	case	_	_
4	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	svezzamento	svezzamento	NOUN	S	Gender=Masc|Number=Sing	1	nmod	_	_
6	di	di	ADP	E	_	10	case	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
8	loro	loro	DET	AP	Poss=Yes|PronType=Prs	10	det:poss	_	_
9	primo	primo	ADJ	NO	Gender=Masc|Number=Sing|NumType=Ord	10	amod	_	_
10	piccolo	piccolo	ADJ	A	Gender=Masc|Number=Sing	5	nmod	_	_
11	,	,	PUNCT	FF	_	1	punct	_	_
12	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	tasso	tasso	NOUN	S	Gender=Masc|Number=Sing	1	nmod	_	_
14	inferiore	inferiore	ADJ	A	Degree=Cmp|Number=Sing	13	amod	_	_
15	.	.	PUNCT	FS	_	1	punct	_	_

~~~


