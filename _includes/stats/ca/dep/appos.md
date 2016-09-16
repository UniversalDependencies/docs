

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This relation is universal.

7737 nodes (1%) are attached to their parents as `appos`.

7700 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.46193615096291.

The following 50 pairs of parts of speech are connected with `appos`: [ca-pos/NOUN]()-[ca-pos/PROPN]() (3661; 47% instances), [ca-pos/NOUN]()-[ca-pos/NOUN]() (2101; 27% instances), [ca-pos/PROPN]()-[ca-pos/NOUN]() (881; 11% instances), [ca-pos/NOUN]()-[ca-pos/NUM]() (294; 4% instances), [ca-pos/PROPN]()-[ca-pos/NUM]() (96; 1% instances), [ca-pos/NOUN]()-[ca-pos/PRON]() (74; 1% instances), [ca-pos/DET]()-[ca-pos/PROPN]() (67; 1% instances), [ca-pos/DET]()-[ca-pos/NOUN]() (66; 1% instances), [ca-pos/NUM]()-[ca-pos/NOUN]() (62; 1% instances), [ca-pos/NOUN]()-[ca-pos/SYM]() (54; 1% instances), [ca-pos/NOUN]()-[ca-pos/ADJ]() (51; 1% instances), [ca-pos/PROPN]()-[ca-pos/PROPN]() (51; 1% instances), [ca-pos/ADV]()-[ca-pos/NOUN]() (31; 0% instances), [ca-pos/PRON]()-[ca-pos/NOUN]() (28; 0% instances), [ca-pos/PROPN]()-[ca-pos/PRON]() (25; 0% instances), [ca-pos/NUM]()-[ca-pos/NUM]() (24; 0% instances), [ca-pos/NUM]()-[ca-pos/PROPN]() (24; 0% instances), [ca-pos/PRON]()-[ca-pos/PROPN]() (21; 0% instances), [ca-pos/SYM]()-[ca-pos/NOUN]() (16; 0% instances), [ca-pos/NOUN]()-[ca-pos/VERB]() (12; 0% instances), [ca-pos/PROPN]()-[ca-pos/SYM]() (12; 0% instances), [ca-pos/ADV]()-[ca-pos/PROPN]() (9; 0% instances), [ca-pos/PROPN]()-[ca-pos/ADJ]() (9; 0% instances), [ca-pos/DET]()-[ca-pos/NUM]() (7; 0% instances), [ca-pos/SYM]()-[ca-pos/SYM]() (7; 0% instances), [ca-pos/PRON]()-[ca-pos/PRON]() (5; 0% instances), [ca-pos/NOUN]()-[ca-pos/ADV]() (4; 0% instances), [ca-pos/NOUN]()-[ca-pos/CONJ]() (4; 0% instances), [ca-pos/NUM]()-[ca-pos/PRON]() (4; 0% instances), [ca-pos/NUM]()-[ca-pos/SYM]() (4; 0% instances), [ca-pos/PRON]()-[ca-pos/NUM]() (4; 0% instances), [ca-pos/PRON]()-[ca-pos/ADJ]() (3; 0% instances), [ca-pos/PUNCT]()-[ca-pos/PROPN]() (3; 0% instances), [ca-pos/ADV]()-[ca-pos/NUM]() (2; 0% instances), [ca-pos/CONJ]()-[ca-pos/NOUN]() (2; 0% instances), [ca-pos/NOUN]()-[ca-pos/ADP]() (2; 0% instances), [ca-pos/PRON]()-[ca-pos/VERB]() (2; 0% instances), [ca-pos/PROPN]()-[ca-pos/VERB]() (2; 0% instances), [ca-pos/SYM]()-[ca-pos/NUM]() (2; 0% instances), [ca-pos/ADJ]()-[ca-pos/NOUN]() (1; 0% instances), [ca-pos/ADP]()-[ca-pos/NOUN]() (1; 0% instances), [ca-pos/ADV]()-[ca-pos/ADP]() (1; 0% instances), [ca-pos/ADV]()-[ca-pos/DET]() (1; 0% instances), [ca-pos/ADV]()-[ca-pos/VERB]() (1; 0% instances), [ca-pos/CONJ]()-[ca-pos/PROPN]() (1; 0% instances), [ca-pos/DET]()-[ca-pos/ADJ]() (1; 0% instances), [ca-pos/NOUN]()-[ca-pos/PUNCT]() (1; 0% instances), [ca-pos/NUM]()-[ca-pos/VERB]() (1; 0% instances), [ca-pos/PRON]()-[ca-pos/DET]() (1; 0% instances), [ca-pos/PUNCT]()-[ca-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 appos	color:blue
1	La	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	peregrinació	peregrinació	NOUN	NOUN	Gender=Fem|Number=Sing	5	iobj	_	_
3	l'	ell	PRON	PRON	Case=Acc|Number=Sing|Person=3|PronType=Prs	5	dobj	_	_
4	ha	haver	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	organitzat	organitzar	VERB	VERB	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	sindicat	sindicat	NOUN	NOUN	Gender=Masc|Number=Sing	5	nsubj	_	_
8	Unió	Unió	PROPN	PROPN	_	7	appos	_	MWE=Unió_de_Pagesos|MWEPOS=PROPN
9	de	de	ADP	ADP	AdpType=Prep	10	case	_	_
10	Pagesos	Pagesos	PROPN	PROPN	_	8	name	_	_
11	.	.	PUNCT	PUNCT	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 appos	color:blue
1	Llista	llista	NOUN	NOUN	Gender=Fem|Number=Sing	0	root	_	_
2	A	a	NOUN	NOUN	_	1	appos	_	_
3	.	.	PUNCT	PUNCT	PunctType=Peri	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 appos	color:blue
1	Josep	Josep	PROPN	PROPN	_	0	root	_	MWE=Josep_Oliu|MWEPOS=PROPN
2	Oliu	Oliu	PROPN	PROPN	_	1	name	_	_
3	,	,	PUNCT	PUNCT	PunctType=Comm	4	punct	_	_
4	director	director	NOUN	NOUN	Gender=Masc|Number=Sing	1	appos	_	_
5	general	general	ADJ	ADJ	Number=Sing	4	amod	_	_
6	de	de	ADP	ADP	AdpType=Prep	7	case	_	_
7	Banc	Banc	PROPN	PROPN	_	4	nmod	_	MWE=Banc_Sabadell|MWEPOS=PROPN
8	Sabadell	Sabadell	PROPN	PROPN	_	7	name	_	_
9	.	.	PUNCT	PUNCT	PunctType=Peri	1	punct	_	_

~~~


