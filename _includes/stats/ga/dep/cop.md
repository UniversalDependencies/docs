

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

373 nodes (2%) are attached to their parents as `cop`.

368 instances of `cop` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23592493297587.

The following 11 pairs of parts of speech are connected with `cop`: [ga-pos/NOUN]()-[ga-pos/VERB]() (144; 39% instances), [ga-pos/ADJ]()-[ga-pos/VERB]() (126; 34% instances), [ga-pos/ADP]()-[ga-pos/VERB]() (46; 12% instances), [ga-pos/PRON]()-[ga-pos/VERB]() (35; 9% instances), [ga-pos/PROPN]()-[ga-pos/VERB]() (10; 3% instances), [ga-pos/ADV]()-[ga-pos/VERB]() (4; 1% instances), [ga-pos/ADJ]()-[ga-pos/PART]() (3; 1% instances), [ga-pos/VERB]()-[ga-pos/VERB]() (2; 1% instances), [ga-pos/ADP]()-[ga-pos/SCONJ]() (1; 0% instances), [ga-pos/DET]()-[ga-pos/VERB]() (1; 0% instances), [ga-pos/X]()-[ga-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cop	color:blue
1	An	is	VERB	Cop	Mood=Int|Tense=Pres|VerbForm=Cop	4	cop	_	_
2	iad	iad	PRON	Pers	Number=Plur|Person=3	4	nmod	_	_
3	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	4	det	_	_
4	daoine	duine	NOUN	Noun	Case=Com|Definite=Def|Gender=Masc|Number=Plur	0	root	_	_
5	siúd	siúd	DET	Det	PronType=Dem	4	det	_	_
6	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	7	det	_	_
7	buaiteoirí	buaiteoir	NOUN	Noun	Case=Com|Definite=Def|Gender=Masc|Number=Plur	4	nsubj	_	_
8	?	?	PUNCT	?	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cop	color:blue
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


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cop	color:blue
1	B'	is	VERB	Cop	Form=VF|Tense=Past|VerbForm=Cop	2	cop	_	_
2	in	i	ADP	Simp	_	0	root	_	_
3	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	2	nmod	_	_
4	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	5	det	_	_
5	uair	uair	NOUN	Noun	Case=Com|Definite=Def|Gender=Fem|Number=Sing	2	nsubj	_	_
6	a	a	PART	Vb	PartType=Vb|PronType=Rel	7	nsubj	_	_
7	baineadh	bain	VERB	VTI	Mood=Ind|Tense=Past|Voice=Auto	5	acl:relcl	_	_
8	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	gheit	geit	NOUN	Noun	Case=Com|Definite=Def|Gender=Fem|Number=Sing	7	dobj	_	_
10	as	as	ADP	Simp	_	11	case	_	_
11	Pádhraic	Pádhraic	PROPN	Noun	Case=Com|Gender=Masc|Number=Sing	7	nmod	_	_
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


