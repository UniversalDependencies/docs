

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:poss](), [nmod:tmod]().

469 nodes (2%) are attached to their parents as `nmod:prep`.

465 instances of `nmod:prep` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.51599147121535.

The following 11 pairs of parts of speech are connected with `nmod:prep`: [ga-pos/VERB]()-[ga-pos/ADP]() (259; 55% instances), [ga-pos/NOUN]()-[ga-pos/ADP]() (141; 30% instances), [ga-pos/ADJ]()-[ga-pos/ADP]() (47; 10% instances), [ga-pos/ADV]()-[ga-pos/ADP]() (6; 1% instances), [ga-pos/ADP]()-[ga-pos/ADP]() (4; 1% instances), [ga-pos/PRON]()-[ga-pos/ADP]() (3; 1% instances), [ga-pos/PROPN]()-[ga-pos/ADP]() (3; 1% instances), [ga-pos/DET]()-[ga-pos/ADP]() (2; 0% instances), [ga-pos/X]()-[ga-pos/ADP]() (2; 0% instances), [ga-pos/CONJ]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/NUM]()-[ga-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 nmod:prep	color:blue
1	'	'	PUNCT	Punct	_	15	punct	_	_
2	Tá	bí	VERB	VI	Mood=Ind|Tense=Pres	15	ccomp	_	_
3	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	méid	méid	NOUN	Noun	Case=Com|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	_
5	sin	sin	DET	Det	PronType=Dem	4	det	_	_
6	suimiúil	suimiúil	ADJ	Adj	Degree=Pos	2	xcomp:pred	_	_
7	a	a	PART	Vb	PartType=Vb|PronType=Rel	9	dobj	_	_
8	d'	do	PART	Vb	PartType=Vb	9	mark:prt	_	_
9	inis	inis	VERB	VTI	Mood=Ind|Tense=Past	4	acl:relcl	_	_
10	tú	tú	PRON	Pers	Number=Sing|Person=2	9	nsubj	_	_
11	dom	do	ADP	Prep	Number=Sing|Person=1	9	nmod:prep	_	_
12	,	,	PUNCT	Punct	_	15	punct	_	_
13	'	'	PUNCT	Punct	_	15	punct	_	_
14	a	a	PART	Vb	PartType=Vb|PronType=Rel	15	mark:prt	_	_
15	dúirt	abair	VERB	VTI	Mood=Ind|Tense=Past	0	root	_	_
16	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	15	nsubj	_	_
17	.	.	PUNCT	.	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 nmod:prep	color:blue
1	Tabharfadsa	tabharfads	NOUN	Noun	Case=Com|Gender=Masc|Number=Plur	0	root	_	_
2	náire	náire	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	1	dobj	_	_
3	fén	faoi	ADP	Art	Number=Sing|PronType=Art	4	case	_	_
4	bpoll	poll	NOUN	Noun	Case=Com|Form=Ecl|Gender=Masc|Number=Sing	1	nmod	_	_
5	dóibh	do	ADP	Prep	Number=Plur|Person=3	1	nmod:prep	_	_
6	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:prep	color:blue
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


