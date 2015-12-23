

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.
There are 1 language-specific subtypes of `case`: [case:voc]().

2923 nodes (12%) are attached to their parents as `case`.

2916 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32671912418748.

The following 25 pairs of parts of speech are connected with `case`: [ga-pos/NOUN]()-[ga-pos/ADP]() (2577; 88% instances), [ga-pos/PROPN]()-[ga-pos/ADP]() (186; 6% instances), [ga-pos/PRON]()-[ga-pos/ADP]() (40; 1% instances), [ga-pos/X]()-[ga-pos/ADP]() (26; 1% instances), [ga-pos/NUM]()-[ga-pos/ADP]() (24; 1% instances), [ga-pos/VERB]()-[ga-pos/ADP]() (22; 1% instances), [ga-pos/ADJ]()-[ga-pos/ADP]() (10; 0% instances), [ga-pos/NOUN]()-[ga-pos/PART]() (7; 0% instances), [ga-pos/ADP]()-[ga-pos/ADP]() (6; 0% instances), [ga-pos/CONJ]()-[ga-pos/ADP]() (4; 0% instances), [ga-pos/NOUN]()-[ga-pos/X]() (3; 0% instances), [ga-pos/VERB]()-[ga-pos/PART]() (3; 0% instances), [ga-pos/NOUN]()-[ga-pos/ADV]() (2; 0% instances), [ga-pos/NOUN]()-[ga-pos/SCONJ]() (2; 0% instances), [ga-pos/ADV]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/DET]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/NUM]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/PROPN]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/VERB]() (1; 0% instances), [ga-pos/PART]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/PRON]()-[ga-pos/X]() (1; 0% instances), [ga-pos/PUNCT]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/SCONJ]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	Tabharfadsa	tabharfads	NOUN	Noun	Case=Com|Gender=Masc|Number=Plur	0	root	_	_
2	náire	náire	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	1	dobj	_	_
3	fén	faoi	ADP	Art	Number=Sing|PronType=Art	4	case	_	_
4	bpoll	poll	NOUN	Noun	Case=Com|Form=Ecl|Gender=Masc|Number=Sing	1	nmod	_	_
5	dóibh	do	ADP	Prep	Number=Plur|Person=3	1	nmod:prep	_	_
6	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	Bhí	bí	VERB	VI	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	geata	geata	NOUN	Noun	Case=Com|Definite=Def|Gender=Masc|Number=Sing	1	nsubj	_	_
4	dúnta	dúnta	ADJ	Adj	VerbForm=Part	1	xcomp:pred	_	_
5	ag	ag	ADP	Simp	_	6	case	_	_
6	Seán	Seán	PROPN	Noun	Case=Com|Gender=Masc|Number=Sing	4	nmod	_	_
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 case	color:blue
1	Millfidh	mill	VERB	VTI	Mood=Ind|Tense=Fut	0	root	_	_
2	tú	tú	PRON	Pers	Number=Sing|Person=2	1	nsubj	_	_
3	agus	agus	CONJ	Coord	_	1	cc	_	_
4	scriosfaidh	scrios	VERB	VTI	Mood=Ind|Tense=Fut	1	conj	_	_
5	tú	tú	PRON	Pers	Number=Sing|Person=2	4	nsubj	_	_
6	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	7	det	_	_
7	aiste	aiste	NOUN	Subst	Number=Sing	1	dobj	_	_
8	le	le	ADP	Simp	_	9	case	_	_
9	botúin	botún	NOUN	Noun	Case=Com|Gender=Masc|Number=Plur	1	nmod	_	_
10	mar	mar	ADP	Simp	_	11	case	_	_
11	sin	sin	PRON	Dem	PronType=Dem	9	nmod	_	_
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


