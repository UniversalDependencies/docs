

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

492 nodes (0%) are attached to their parents as `mwe`.

492 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14024390243902.

The following 16 pairs of parts of speech are connected with `mwe`: [da-pos/ADP]()-[da-pos/NOUN]() (294; 60% instances), [da-pos/ADV]()-[da-pos/ADP]() (55; 11% instances), [da-pos/ADP]()-[da-pos/ADV]() (29; 6% instances), [da-pos/ADP]()-[da-pos/DET]() (28; 6% instances), [da-pos/ADP]()-[da-pos/PRON]() (27; 5% instances), [da-pos/ADP]()-[da-pos/ADP]() (24; 5% instances), [da-pos/VERB]()-[da-pos/ADP]() (7; 1% instances), [da-pos/ADV]()-[da-pos/ADV]() (5; 1% instances), [da-pos/ADV]()-[da-pos/VERB]() (5; 1% instances), [da-pos/ADP]()-[da-pos/ADJ]() (4; 1% instances), [da-pos/ADP]()-[da-pos/VERB]() (4; 1% instances), [da-pos/ADV]()-[da-pos/ADJ]() (3; 1% instances), [da-pos/ADJ]()-[da-pos/ADV]() (2; 0% instances), [da-pos/ADP]()-[da-pos/SCONJ]() (2; 0% instances), [da-pos/ADV]()-[da-pos/CONJ]() (2; 0% instances), [da-pos/ADV]()-[da-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 mwe	color:blue
1	Soldaterne	soldat	NOUN	_	Definite=Def|Gender=Com|Number=Plur	5	nsubjpass	_	_
2	blev	blive	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	5	auxpass	_	_
3	i	i	ADP	_	AdpType=Prep	5	advmod	_	_
4	aftes	aften	NOUN	_	Case=Gen|Definite=Ind|Gender=Com|Number=Sing	3	mwe	_	_
5	overgivet	overgive	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part,Trans	0	root	_	_
6	til	til	ADP	_	AdpType=Prep	7	case	_	_
7	FN-styrken	FN-styrke	NOUN	_	Definite=Def|Gender=Com|Number=Sing	5	nmod	_	_
8	i	i	ADP	_	AdpType=Prep	9	case	_	_
9	Jugoslavien	Jugoslavien	PROPN	_	_	7	nmod	_	_
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mwe	color:blue
1	Selv	selv	ADV	_	_	5	mark	_	_
2	om	om	ADP	_	AdpType=Prep	1	mwe	_	_
3	det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
4	må	måtte	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
5	betyde	betyde	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	_
6	forandring	forandring	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	5	dobj	_	_
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 mwe	color:blue
1	Ingen	ingen	PRON	_	Gender=Com|Number=Sing|PronType=Ind	4	nsubj	_	_
2	af	af	ADP	_	AdpType=Prep	3	case	_	_
3	os	vi	PRON	_	Case=Acc|Gender=Com|Number=Plur|Person=1|PronType=Prs	1	nmod	_	_
4	rørte	røre	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	10	ccomp	_	_
5	i	i	ADP	_	AdpType=Prep	4	advmod	_	_
6	øvrigt	øvrigt	ADV	_	_	5	mwe	_	_
7	bolden	bold	NOUN	_	Definite=Def|Gender=Com|Number=Sing	4	dobj	_	_
8	,	,	PUNCT	_	_	4	punct	_	_
9	"	"	PUNCT	_	_	4	punct	_	_
10	forklarede	forklare	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
11	Jens	Jens	PROPN	_	_	10	nsubj	_	_
12	Madsen	Madsen	PROPN	_	_	11	name	_	_
13	.	.	PUNCT	_	_	10	punct	_	_

~~~


