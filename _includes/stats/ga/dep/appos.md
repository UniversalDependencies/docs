

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

108 nodes (0%) are attached to their parents as `appos`.

108 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.44444444444444.

The following 13 pairs of parts of speech are connected with `appos`: [ga-pos/NOUN]()-[ga-pos/NOUN]() (37; 34% instances), [ga-pos/NOUN]()-[ga-pos/PROPN]() (23; 21% instances), [ga-pos/PROPN]()-[ga-pos/NOUN]() (18; 17% instances), [ga-pos/X]()-[ga-pos/NOUN]() (10; 9% instances), [ga-pos/NOUN]()-[ga-pos/X]() (6; 6% instances), [ga-pos/PROPN]()-[ga-pos/PROPN]() (5; 5% instances), [ga-pos/NOUN]()-[ga-pos/PRON]() (2; 2% instances), [ga-pos/PRON]()-[ga-pos/NOUN]() (2; 2% instances), [ga-pos/CONJ]()-[ga-pos/PRON]() (1; 1% instances), [ga-pos/NOUN]()-[ga-pos/NUM]() (1; 1% instances), [ga-pos/NOUN]()-[ga-pos/VERB]() (1; 1% instances), [ga-pos/PROPN]()-[ga-pos/ADJ]() (1; 1% instances), [ga-pos/X]()-[ga-pos/PROPN]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 appos	color:blue
1	Post	post	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	0	root	_	_
2	1	1	NUM	Num	_	1	nummod	_	_
3	:	:	PUNCT	Punct	_	1	punct	_	_
4	Feidhmeannach	feidhmeannach	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	1	appos	_	_
5	Riaracháin	riarachán	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	4	compound	_	_
6	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 appos	color:blue
1	Níl	bí	VERB	PresInd	Mood=Ind|Negative=Neg|Tense=Pres	0	root	_	_
2	fágtha	fágtha	ADJ	Adj	VerbForm=Part	1	xcomp:pred	_	_
3	den	de	ADP	Art	Number=Sing|PronType=Art	4	case	_	_
4	seandream	dream	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	2	nmod	_	_
5	ach	ach	SCONJ	Subord	_	1	mark:prt	_	_
6	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	7	det	_	_
7	Ceannaire	ceannaire	NOUN	Noun	Case=Com|Definite=Def|Gender=Masc|Number=Sing	1	nsubj	_	_
8	,	,	PUNCT	Punct	_	9	punct	_	_
9	Mary	Mary	PROPN	Noun	Case=Com|Gender=Fem|Number=Sing	7	appos	_	_
10	Harney	Harney	PROPN	Noun	Case=Com|Gender=Masc|Number=Sing	9	name	_	_
11	,	,	PUNCT	Punct	_	12	punct	_	_
12	agus	agus	CONJ	Coord	_	7	cc	_	_
13	Liz	Liz	PROPN	Noun	Case=Com|Gender=Masc|Number=Sing	7	conj	_	_
14	O'	o'	PART	Pat	PartType=Pat	13	name	_	_
15	Donnell	Donnell	PROPN	Noun	Case=Com|Gender=Masc|Number=Sing	13	name	_	_
16	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 appos	color:blue
1	'	'	PUNCT	Punct	_	2	punct	_	_
2	Helena	Helena	PROPN	Noun	Case=Com|Gender=Masc|Number=Sing	0	root	_	_
3	McMahon	McMahon	PROPN	Noun	Case=Gen|Gender=Masc|Number=Sing	2	name	_	_
4	,	,	PUNCT	Punct	_	5	punct	_	_
5	duine	duine	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	2	appos	_	_
6	a	a	PART	Vb	PartType=Vb|PronType=Rel	7	nsubj	_	_
7	bhfuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	5	acl:relcl	_	_
8	baint	baint	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	7	nsubj	_	_
9	aici	ag	ADP	Prep	Gender=Fem|Number=Sing|Person=3	7	nmod:prep	_	_
10	le	le	ADP	Simp	_	11	case	_	_
11	healaín	ealaín	NOUN	Noun	Case=Com|Form=HPref|Gender=Fem|Number=Sing	7	nmod	_	_
12	phobail	pobal	NOUN	Noun	Case=Gen|Form=Len|Gender=Masc|Number=Sing	11	compound	_	_
13	i	i	ADP	Simp	_	14	case	_	_
14	Luimneach	Luimneach	PROPN	Noun	Case=Com|Gender=Masc|Number=Sing	11	nmod	_	_
15	.	.	PUNCT	.	_	2	punct	_	_

~~~


