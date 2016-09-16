

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is a language-specific subtype of [csubj]().
There are also 1 other language-specific subtypes of `csubj`: [csubj:cleft]().

48 nodes (0%) are attached to their parents as `csubj:cop`.

48 instances of `csubj:cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.54166666666667.

The following 11 pairs of parts of speech are connected with `csubj:cop`: [ga-pos/ADJ]()-[ga-pos/VERB]() (19; 40% instances), [ga-pos/NOUN]()-[ga-pos/VERB]() (14; 29% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (5; 10% instances), [ga-pos/ADJ]()-[ga-pos/NOUN]() (2; 4% instances), [ga-pos/VERB]()-[ga-pos/VERB]() (2; 4% instances), [ga-pos/ADJ]()-[ga-pos/ADJ]() (1; 2% instances), [ga-pos/ADJ]()-[ga-pos/PRON]() (1; 2% instances), [ga-pos/PRON]()-[ga-pos/ADJ]() (1; 2% instances), [ga-pos/PRON]()-[ga-pos/VERB]() (1; 2% instances), [ga-pos/SCONJ]()-[ga-pos/ADP]() (1; 2% instances), [ga-pos/SCONJ]()-[ga-pos/VERB]() (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj:cop	color:blue
1	Is	is	VERB	Cop	Tense=Pres|VerbForm=Cop	2	cop	_	_
2	léir	léir	ADJ	Adj	Degree=Pos	0	root	_	_
3	ón	ó	ADP	Art	Number=Sing|PronType=Art	4	case	_	_
4	teideal	teideal	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	2	nmod	_	_
5	go	go	PART	Vb	PartType=Cmpl	6	mark:prt	_	_
6	bhfuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	2	csubj:cop	_	_
7	draíocht	draíocht	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	6	nsubj	_	_
8	i	i	ADP	Simp	_	9	case	_	_
9	gceist	ceist	NOUN	Noun	Case=Com|Form=Ecl|Gender=Fem|Number=Sing	6	xcomp:pred	_	_
10	sa	i	ADP	Art	Number=Sing|PronType=Art	11	case	_	_
11	dráma	dráma	NOUN	Noun	Case=Com|Definite=Def|Gender=Masc|Number=Sing	6	nmod	_	_
12	seo	seo	DET	Det	PronType=Dem	11	det	_	_
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 csubj:cop	color:blue
1	Is	is	VERB	Cop	Tense=Pres|VerbForm=Cop	4	cop	_	_
2	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	5	nmod	_	_
3	mo	mo	DET	Det	Number=Sing|Person=1|Poss=Yes	4	nmod:poss	_	_
4	bhrón	brón	NOUN	Noun	Case=Com|Form=Len|Gender=Masc|Number=Sing	0	root	_	_
5	is	agus	CONJ	Coord	_	4	cc	_	_
6	mo	mo	DET	Det	Number=Sing|Person=1|Poss=Yes	7	nmod:poss	_	_
7	chumha	cumha	NOUN	Noun	Case=Com|Form=Len|Gender=Masc|Number=Sing	4	conj	_	_
8	gur	gur	PART	Vb	PartType=Vb|Tense=Past	9	mark:prt	_	_
9	imigh	imigh	VERB	VI	Mood=Ind|Tense=Past	4	csubj:cop	_	_
10	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	11	det	_	_
11	uair	uair	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	9	nsubj	_	_
12	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 csubj:cop	color:blue
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


