

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

882 nodes (0%) are attached to their parents as `appos`.

881 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.89795918367347.

The following 22 pairs of parts of speech are connected with `appos`: [it-pos/PROPN]()-[it-pos/NOUN]() (295; 33% instances), [it-pos/NOUN]()-[it-pos/NOUN]() (261; 30% instances), [it-pos/NOUN]()-[it-pos/PROPN]() (203; 23% instances), [it-pos/PRON]()-[it-pos/NOUN]() (30; 3% instances), [it-pos/PROPN]()-[it-pos/PROPN]() (18; 2% instances), [it-pos/PRON]()-[it-pos/PROPN]() (16; 2% instances), [it-pos/PROPN]()-[it-pos/PRON]() (15; 2% instances), [it-pos/NOUN]()-[it-pos/PRON]() (12; 1% instances), [it-pos/VERB]()-[it-pos/NOUN]() (6; 1% instances), [it-pos/X]()-[it-pos/NOUN]() (5; 1% instances), [it-pos/NUM]()-[it-pos/NOUN]() (3; 0% instances), [it-pos/PROPN]()-[it-pos/X]() (3; 0% instances), [it-pos/ADJ]()-[it-pos/NOUN]() (2; 0% instances), [it-pos/ADJ]()-[it-pos/PROPN]() (2; 0% instances), [it-pos/NOUN]()-[it-pos/X]() (2; 0% instances), [it-pos/NUM]()-[it-pos/PROPN]() (2; 0% instances), [it-pos/VERB]()-[it-pos/PRON]() (2; 0% instances), [it-pos/DET]()-[it-pos/NOUN]() (1; 0% instances), [it-pos/NUM]()-[it-pos/PRON]() (1; 0% instances), [it-pos/PRON]()-[it-pos/X]() (1; 0% instances), [it-pos/VERB]()-[it-pos/PROPN]() (1; 0% instances), [it-pos/VERB]()-[it-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 appos	color:blue
1	Diefenbach	Diefenbach	PROPN	SP	_	0	root	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	pittore	pittore	NOUN	S	Gender=Masc|Number=Sing	1	appos	_	_
5	nudo	nudo	ADJ	A	Gender=Masc|Number=Sing	4	amod	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 appos	color:blue
1	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	politica	politica	NOUN	S	Gender=Fem|Number=Sing	13	nsubj	_	_
3	di	di	ADP	E	_	5	case	_	_
4	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	cetnici	cetnico	NOUN	S	Gender=Masc|Number=Plur	2	nmod	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	2	punct	_	_
7	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	pulizia	pulizia	NOUN	S	Gender=Fem|Number=Sing	2	appos	_	_
9	etnica	etnico	ADJ	A	Gender=Fem|Number=Sing	8	amod	_	SpaceAfter=No
10	,	,	PUNCT	FF	_	2	punct	_	_
11	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
12	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	genocidio	genocidio	NOUN	S	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 appos	color:blue
1	Veniva	venire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	da	da	ADP	E	_	3	case	_	_
3	me	me	PRON	PE	Number=Sing|Person=1|PronType=Prs	1	nmod	_	_
4	questa	questo	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	pidiessina	pidiessino	NOUN	S	Gender=Fem|Number=Sing	1	nsubj	_	_
6	tremenda	tremendo	ADJ	A	Gender=Fem|Number=Sing	5	amod	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	5	punct	_	_
8	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	Alberta	Alberta	PROPN	SP	_	5	appos	_	_
10	De	De	PROPN	SP	_	9	name	_	_
11	Simone	Simone	PROPN	SP	_	9	name	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	1	punct	_	_

~~~


