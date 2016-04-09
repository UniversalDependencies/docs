

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

85 nodes (0%) are attached to their parents as `neg`.

85 instances of `neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `neg`: [ga-pos/VERB]()-[ga-pos/PART]() (82; 96% instances), [ga-pos/X]()-[ga-pos/PART]() (2; 2% instances), [ga-pos/NOUN]()-[ga-pos/PART]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 neg	color:blue
1	Níor	níor	PART	Vb	Negative=Neg|PartType=Vb|Tense=Past	2	neg	_	_
2	tháinig	tar	VERB	VI	Form=Len|Mood=Ind|Negative=Neg|Tense=Past	0	root	_	_
3	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
4	go	go	PART	Ad	PartType=Ad	5	mark:prt	_	_
5	fóill	fóill	ADJ	Adj	Degree=Pos	2	advmod	_	_
6	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 neg	color:blue
1	Ná	ná	PART	Vb	Mood=Imp|PartType=Vb	2	neg	_	_
2	dein	dein	X	CM	Dialect=Munster|Mood=Imp|Negative=Neg|Number=Sing|Person=2	0	root	_	_
3	so	seo	X	CM	Dialect=Munster|PronType=Dem	2	dobj	_	_
4	agus	agus	CONJ	Coord	_	2	cc	_	_
5	ná	ná	PART	Vb	Mood=Imp|PartType=Vb	6	neg	_	_
6	dein	dein	X	CM	Dialect=Munster|Mood=Imp|Negative=Neg|Number=Sing|Person=2	2	conj	_	_
7	súd	siúd	PRON	Dem	PronType=Dem	6	dobj	_	_
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 neg	color:blue
1	'	'	PUNCT	Punct	_	3	punct	_	_
2	Ná	ná	PART	Vb	Mood=Imp|PartType=Vb	3	neg	_	_
3	habair	abar	NOUN	Noun	Case=Com|Gender=Masc|Number=Plur	0	root	_	_
4	liom	le	ADP	Prep	Number=Sing|Person=1	3	nmod:prep	_	_
5	gurb	is	VERB	Cop	Form=VF|Tense=Pres|VerbForm=Cop	8	cop	_	_
6	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	8	nmod	_	_
7	do	do	DET	Det	Number=Sing|Person=2|Poss=Yes	8	nmod:poss	_	_
8	thuairimse	tuairim	NOUN	Noun	Case=Com|Form=Len|Gender=Fem|Number=Sing	3	ccomp	_	_
9	leis	le	ADP	Simp	_	10	case	_	_
10	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	8	nmod	_	_
11	gur	is	VERB	Cop	Tense=Pres|VerbForm=Cop	12	cop	_	_
12	bréaga	bréag	NOUN	Noun	Case=Com|Gender=Fem|Number=Plur	8	csubj:cop	_	_
13	a	a	DET	Det	Gender=Masc|Number=Sing|Person=3|Poss=Yes	14	det	_	_
14	leath	leath	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	12	compound	_	_
15	dá	dá	SCONJ	Subord	_	16	nsubj	_	_
16	bhfuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	12	acl:relcl	_	_
17	foghlamtha	foghlamtha	ADJ	Adj	VerbForm=Part	16	xcomp:pred	_	_
18	againn	ag	ADP	Prep	Number=Plur|Person=1	17	nmod:prep	_	_
19	.	.	PUNCT	.	_	3	punct	_	_

~~~


