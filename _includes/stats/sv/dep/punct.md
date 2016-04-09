

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

10363 nodes (11%) are attached to their parents as `punct`.

9504 instances of `punct` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.67586606195117.

The following 14 pairs of parts of speech are connected with `punct`: [sv-pos/VERB]()-[sv-pos/PUNCT]() (6064; 59% instances), [sv-pos/NOUN]()-[sv-pos/PUNCT]() (2863; 28% instances), [sv-pos/ADJ]()-[sv-pos/PUNCT]() (916; 9% instances), [sv-pos/PROPN]()-[sv-pos/PUNCT]() (255; 2% instances), [sv-pos/PRON]()-[sv-pos/PUNCT]() (90; 1% instances), [sv-pos/NUM]()-[sv-pos/PUNCT]() (79; 1% instances), [sv-pos/ADV]()-[sv-pos/PUNCT]() (60; 1% instances), [sv-pos/ADP]()-[sv-pos/PUNCT]() (13; 0% instances), [sv-pos/DET]()-[sv-pos/PUNCT]() (9; 0% instances), [sv-pos/INTJ]()-[sv-pos/PUNCT]() (7; 0% instances), [sv-pos/PUNCT]()-[sv-pos/PUNCT]() (3; 0% instances), [sv-pos/CONJ]()-[sv-pos/PUNCT]() (2; 0% instances), [sv-pos/NOUN]()-[sv-pos/CONJ]() (1; 0% instances), [sv-pos/PROPN]()-[sv-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 punct	color:blue
1	'	'	PUNCT	PAD	_	4	punct	_	_
2	Du	du	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	4	nsubj	_	_
3	skall	skola	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	lyda	lyda	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	_	_
5	din	du	DET	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes	6	nmod:poss	_	_
6	fader	far	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	dobj	_	_
7	.	.	PUNCT	MAD	_	4	punct	_	_
8	'	'	PUNCT	PAD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 punct	color:blue
1	Bördan	börda	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	dislocated	_	_
2	att	att	PART	IE	_	3	mark	_	_
3	fostra	fostra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	1	acl	_	_
4	barn	barn	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	3	dobj	_	_
5	-	-	PUNCT	MID	_	1	punct	_	_
6	uttrycket	uttryck	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	7	nsubj	_	_
7	låter	låta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	negativt	negativ	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	7	xcomp	_	_
9	.	.	PUNCT	MAD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 punct	color:blue
1	Publicerad	publicera	ADJ	PC|PRF|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
2	i	i	ADP	PP	_	3	case	_	_
3	Children	Children	PROPN	PM|NOM	Case=Nom	1	nmod	_	_
4	1958	1958	NUM	RG|NOM	Case=Nom	3	nmod	_	_
5	,	,	PUNCT	MID	_	4	punct	_	_
6	Vol.	Vol.	NOUN	NN|AN	_	7	nmod	_	_
7	5	5	NUM	RG|NOM	Case=Nom	4	nmod	_	_
8	,	,	PUNCT	MID	_	7	punct	_	_
9	179-184	179-184	NUM	RG|NOM	Case=Nom	7	nummod	_	_
10	.	.	PUNCT	MAD	_	1	punct	_	_

~~~


