

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

5492 nodes (5%) are attached to their parents as `det`.

5477 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.86252731245448.

The following 3 pairs of parts of speech are connected with `det`: [da-pos/NOUN]()-[da-pos/DET]() (4989; 91% instances), [da-pos/ADJ]()-[da-pos/DET]() (344; 6% instances), [da-pos/PROPN]()-[da-pos/DET]() (159; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 det	color:blue
1	H.L.	H.L.	PROPN	_	_	8	nsubj	_	_
2	Hansen	Hansen	PROPN	_	_	1	name	_	_
3	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	_	_
4	en	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	8	det	_	_
5	udsædvanlig	udsædvanlig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	8	amod	_	_
6	og	og	CONJ	_	_	5	cc	_	_
7	frodig	frodig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	5	conj	_	_
8	personlighed	personlighed	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Den	den	DET	_	Gender=Com|Number=Sing|PronType=Dem	2	det	_	_
2	nuværende	nuværende	ADJ	_	Degree=Pos	3	nsubj	_	_
3	sluttede	slutte	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	allerede	allerede	ADV	_	_	6	advmod	_	_
5	i	i	ADP	_	AdpType=Prep	4	case	_	_
6	august	august	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	3	nmod	_	_
7	1991	1991	NUM	_	NumType=Card	6	nmod	_	_
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 det	color:blue
1	"	"	PUNCT	_	_	5	punct	_	_
2	Det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
3	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	ikke	ikke	ADV	_	_	5	neg	_	_
5	meningen	mening	NOUN	_	Definite=Def|Gender=Com|Number=Sing	0	root	_	_
6	,	,	PUNCT	_	_	10	punct	_	_
7	at	at	SCONJ	_	_	10	mark	_	_
8	D-marken	D-mark	NOUN	_	Definite=Def|Gender=Com|Number=Sing	10	nsubj	_	_
9	skal	skulle	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	_	_
10	overtages	overtage	VERB	_	VerbForm=Inf|Voice=Pass	2	acl:relcl	_	_
11	af	af	ADP	_	AdpType=Prep	13	case	_	_
12	en	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	13	det	_	_
13	ECU	ECU	PROPN	_	_	10	nmod	_	_
14	.	.	PUNCT	_	_	5	punct	_	_

~~~


