

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

1020 nodes (4%) are attached to their parents as `root`.

1020 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.3843137254902.

The following 13 pairs of parts of speech are connected with `root`: [ga-pos/ROOT]()-[ga-pos/VERB]() (655; 64% instances), [ga-pos/ROOT]()-[ga-pos/NOUN]() (166; 16% instances), [ga-pos/ROOT]()-[ga-pos/ADJ]() (60; 6% instances), [ga-pos/ROOT]()-[ga-pos/ADP]() (36; 4% instances), [ga-pos/ROOT]()-[ga-pos/PRON]() (36; 4% instances), [ga-pos/ROOT]()-[ga-pos/PROPN]() (33; 3% instances), [ga-pos/ROOT]()-[ga-pos/ADV]() (12; 1% instances), [ga-pos/ROOT]()-[ga-pos/X]() (10; 1% instances), [ga-pos/ROOT]()-[ga-pos/CONJ]() (4; 0% instances), [ga-pos/ROOT]()-[ga-pos/PUNCT]() (3; 0% instances), [ga-pos/ROOT]()-[ga-pos/SCONJ]() (3; 0% instances), [ga-pos/ROOT]()-[ga-pos/NUM]() (1; 0% instances), [ga-pos/ROOT]()-[ga-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Seo	seo	VERB	Cop	PronType=Dem|VerbForm=Cop	0	root	_	_
2	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	fear	fear	NOUN	Noun	Case=Com|Definite=Def|Gender=Masc|Number=Sing	1	xcomp:pred	_	_
4	a	a	PART	Vb	PartType=Vb|PronType=Rel	5	dobj	_	_
5	chonaic	feic	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	1	csubj:cleft	_	_
6	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	7	det	_	_
7	bhean	bean	NOUN	Noun	Case=Com|Definite=Def|Gender=Fem|Number=Sing	5	nsubj	_	_
8	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Tabharfadsa	tabharfads	NOUN	Noun	Case=Com|Gender=Masc|Number=Plur	0	root	_	_
2	náire	náire	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	1	dobj	_	_
3	fén	faoi	ADP	Art	Number=Sing|PronType=Art	4	case	_	_
4	bpoll	poll	NOUN	Noun	Case=Com|Form=Ecl|Gender=Masc|Number=Sing	1	nmod	_	_
5	dóibh	do	ADP	Prep	Number=Plur|Person=3	1	nmod:prep	_	_
6	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Ba	is	VERB	Cop	Tense=Past|VerbForm=Cop	2	cop	_	_
2	léir	léir	ADJ	Adj	Degree=Pos	0	root	_	_
3	dó	do	ADP	Prep	Gender=Masc|Number=Sing|Person=3	2	nmod:prep	_	_
4	misneach	misneach	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	2	nsubj	_	_
5	agus	agus	CONJ	Coord	_	4	cc	_	_
6	dúshlán	dúshlán	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	4	conj	_	_
7	céadach	céadach	ADJ	Adj	Case=Com|Gender=Masc|Number=Sing	6	amod	_	_
8	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
9	seacht	seacht	NUM	Num	NumType=Card	10	nummod	_	_
10	dtúr	túr	NOUN	Noun	Case=Gen|Form=Ecl|Gender=Masc|NounType=Weak|Number=Plur	4	compound	_	_
11	.	.	PUNCT	.	_	2	punct	_	_

~~~


