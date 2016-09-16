

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

358 nodes (0%) are attached to their parents as `appos`.

351 instances of `appos` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.66480446927374.

The following 22 pairs of parts of speech are connected with `appos`: [da-pos/NOUN]()-[da-pos/PROPN]() (220; 61% instances), [da-pos/NOUN]()-[da-pos/NOUN]() (57; 16% instances), [da-pos/PROPN]()-[da-pos/PROPN]() (21; 6% instances), [da-pos/PROPN]()-[da-pos/NOUN]() (20; 6% instances), [da-pos/PRON]()-[da-pos/PROPN]() (8; 2% instances), [da-pos/NOUN]()-[da-pos/X]() (6; 2% instances), [da-pos/NOUN]()-[da-pos/ADJ]() (3; 1% instances), [da-pos/PRON]()-[da-pos/NOUN]() (3; 1% instances), [da-pos/PROPN]()-[da-pos/PRON]() (3; 1% instances), [da-pos/X]()-[da-pos/NOUN]() (3; 1% instances), [da-pos/NOUN]()-[da-pos/NUM]() (2; 1% instances), [da-pos/X]()-[da-pos/PROPN]() (2; 1% instances), [da-pos/ADJ]()-[da-pos/NOUN]() (1; 0% instances), [da-pos/ADP]()-[da-pos/ADP]() (1; 0% instances), [da-pos/ADV]()-[da-pos/ADV]() (1; 0% instances), [da-pos/NOUN]()-[da-pos/ADV]() (1; 0% instances), [da-pos/NOUN]()-[da-pos/VERB]() (1; 0% instances), [da-pos/NUM]()-[da-pos/NUM]() (1; 0% instances), [da-pos/PRON]()-[da-pos/PRON]() (1; 0% instances), [da-pos/PRON]()-[da-pos/VERB]() (1; 0% instances), [da-pos/PROPN]()-[da-pos/VERB]() (1; 0% instances), [da-pos/VERB]()-[da-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 appos	color:blue
1	Og	og	CONJ	_	_	9	discourse	_	_
2	kærlighedsbarnet	kærlighedsbarn	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	9	nsubj	_	_
3	,	,	PUNCT	_	_	4	punct	_	_
4	Christian	Christian	PROPN	_	_	2	appos	_	_
5	,	,	PUNCT	_	_	4	punct	_	_
6	blev	blive	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	_	_
7	deres	deres	DET	_	Number[psor]=Plur|Person=3|Poss=Yes|PronType=Prs	9	det	_	_
8	eneste	eneste	ADJ	_	Degree=Pos	9	amod	_	_
9	barn	barn	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 appos	color:blue
1	Kun	kun	ADV	_	_	2	advmod	_	_
2	Ugemagasinet	ugemagasin	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	4	nmod:poss	_	_
3	SØNDAG's	søndag	NOUN	_	Case=Gen|Definite=Ind|Gender=Com|Number=Sing	2	appos	_	_
4	læger	læge	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	6	nsubj	_	_
5	må	måtte	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
6	åbne	åbne	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	_
7	Deres	Deres	DET	_	Person=2|Polite=Pol|Poss=Yes|PronType=Prs	8	det	_	_
8	brev	brev	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	6	dobj	_	_
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 appos	color:blue
1	Nina	Nina	PROPN	_	_	4	nmod:poss	_	_
2	Belovetskayas	Belovetskaya	PROPN	_	Case=Gen	1	name	_	_
3	12-årige	12-årig	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	1	amod	_	_
4	søn	søn	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	8	nsubjpass	_	_
5	Vanya	Vanya	PROPN	_	_	1	appos	_	_
6	blev	blive	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	8	auxpass	_	_
7	også	også	ADV	_	_	8	advmod	_	_
8	dræbt	dræbe	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part,Trans	0	root	_	_
9	af	af	ADP	_	AdpType=Prep	12	case	_	_
10	den	den	DET	_	Gender=Com|Number=Sing|PronType=Dem	12	det	_	_
11	sadistiske	sadistisk	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	12	amod	_	_
12	skolelærer	skolelærer	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	8	nmod	_	_
13	.	.	PUNCT	_	_	8	punct	_	_

~~~


