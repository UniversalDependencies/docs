

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

1100 nodes (1%) are attached to their parents as `xcomp`.

1065 instances of `xcomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.03272727272727.

The following 18 pairs of parts of speech are connected with `xcomp`: [sv-pos/VERB]()-[sv-pos/ADJ]() (401; 36% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (343; 31% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (286; 26% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (14; 1% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (13; 1% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (8; 1% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (7; 1% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (6; 1% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (3; 0% instances), [sv-pos/PROPN]()-[sv-pos/NOUN]() (3; 0% instances), [sv-pos/VERB]()-[sv-pos/ADP]() (3; 0% instances), [sv-pos/VERB]()-[sv-pos/DET]() (3; 0% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (3; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (2; 0% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (2; 0% instances), [sv-pos/ADV]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 xcomp	color:blue
1	Börjar	börja	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	hennes	hon	DET	PS|UTR/NEU|SIN/PLU|DEF	Definite=Def|Poss=Yes	3	nmod:poss	_	_
3	jobb	jobb	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	1	nsubj	_	_
4	att	att	PART	IE	_	5	mark	_	_
5	delas	dela	VERB	VB|INF|SFO	VerbForm=Inf|Voice=Pass	1	xcomp	_	_
6	av	av	ADP	PP	_	9	case	_	_
7	den	en	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing	9	det	_	_
8	moderne	modern	ADJ	JJ|POS|MAS|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
9	mannen	man	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	5	nmod:agent	_	_
10	?	?	PUNCT	MAD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Hushållsarbetet	hushållsarbete	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	2	nsubj	_	_
2	blir	bli	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	kock-	kocka	NOUN	NN|UTR|-|-|SMS	Gender=Com	2	xcomp	_	_
4	och	och	CONJ	KN	_	3	cc	_	_
5	restaurangarbete	restaurangarbete	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	3	conj	_	_
6	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


