

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is a language-specific subtype of [nmod]().

921 nodes (1%) are attached to their parents as `nmod:poss`.

745 instances of `nmod:poss` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45928338762215.

The following 19 pairs of parts of speech are connected with `nmod:poss`: [da-pos/NOUN]()-[da-pos/NOUN]() (560; 61% instances), [da-pos/NOUN]()-[da-pos/PROPN]() (250; 27% instances), [da-pos/PROPN]()-[da-pos/NOUN]() (52; 6% instances), [da-pos/PROPN]()-[da-pos/PROPN]() (20; 2% instances), [da-pos/NOUN]()-[da-pos/ADJ]() (7; 1% instances), [da-pos/X]()-[da-pos/NOUN]() (6; 1% instances), [da-pos/NOUN]()-[da-pos/X]() (4; 0% instances), [da-pos/PRON]()-[da-pos/VERB]() (4; 0% instances), [da-pos/NOUN]()-[da-pos/NUM]() (3; 0% instances), [da-pos/PROPN]()-[da-pos/X]() (3; 0% instances), [da-pos/NOUN]()-[da-pos/PRON]() (2; 0% instances), [da-pos/NOUN]()-[da-pos/VERB]() (2; 0% instances), [da-pos/PRON]()-[da-pos/X]() (2; 0% instances), [da-pos/ADJ]()-[da-pos/NOUN]() (1; 0% instances), [da-pos/ADJ]()-[da-pos/PROPN]() (1; 0% instances), [da-pos/ADV]()-[da-pos/PROPN]() (1; 0% instances), [da-pos/PROPN]()-[da-pos/VERB]() (1; 0% instances), [da-pos/VERB]()-[da-pos/NOUN]() (1; 0% instances), [da-pos/X]()-[da-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Toiletter	toilet	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	0	root	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	gangarealer	gangareal	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	1	conj	_	_
4	,	,	PUNCT	_	_	1	punct	_	_
5	pædagogernes	pædagog	NOUN	_	Case=Gen|Definite=Def|Gender=Com|Number=Plur	6	nmod:poss	_	_
6	the-køkken	the-køkken	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	1	conj	_	_
7	og	og	CCONJ	_	_	9	cc	_	_
8	så	så	ADV	_	_	9	advmod	_	_
9	videre	videre	ADV	_	_	1	conj	_	_
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Kelds	Keld	PROPN	_	Case=Gen	2	nmod:poss	_	_
2	oplæg	oplæg	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	4	nsubj	_	_
3	blev	blive	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	_	_
4	fulgt	følge	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	9	ccomp	_	_
5	100	100	NUM	_	NumType=Card	6	nummod	_	_
6	procent	procent	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	4	obl	_	_
7	,	,	PUNCT	_	_	4	punct	_	_
8	"	"	PUNCT	_	_	4	punct	_	_
9	pointerer	pointere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	Susan	Susan	PROPN	_	_	9	nsubj	_	_
11	Mackensie	Mackensie	PROPN	_	_	10	flat	_	_
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 nmod:poss	color:blue
1	Kun	kun	ADV	_	_	2	advmod	_	_
2	ikke	ikke	ADV	_	_	0	root	_	_
3	i	i	ADP	_	AdpType=Prep	6	case	_	_
4	Det	den	DET	_	Gender=Neut|Number=Sing|PronType=Dem	6	det	_	_
5	Konservative	konservativ	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	6	amod	_	_
6	Folkeparti	folkeparti	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	2	obl	_	_
7	eller	eller	CCONJ	_	_	3	cc	_	_
8	i	i	ADP	_	AdpType=Prep	9	case	_	_
9	Berlingske	Berlingske	PROPN	_	_	3	nmod	_	_
10	Tidendes	tidende	NOUN	_	Case=Gen|Definite=Ind|Gender=Com|Number=Sing	9	nmod:poss	_	_
11	redaktion	redaktion	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	9	nmod:poss	_	_
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


