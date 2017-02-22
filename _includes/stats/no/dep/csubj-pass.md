

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Bokmaal)

This relation is a language-specific subtype of [csubj]().

7 nodes (0%) are attached to their parents as `csubj:pass`.

4 instances of `csubj:pass` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.28571428571429.

The following 1 pairs of parts of speech are connected with `csubj:pass`: [no-pos/VERB]()-[no-pos/VERB]() (7; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 csubj:pass	color:blue
1	At	at	SCONJ	_	_	3	mark	_	_
2	de	de	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	_	_
3	mener	mene	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	7	csubj:pass	_	_
4	alvor	alvor	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	3	obj	_	SpaceAfter=No
5	,	$,	PUNCT	_	_	3	punct	_	_
6	kan	kunne	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	illustreres	illustrere	VERB	_	VerbForm=Inf|Voice=Pass	0	root	_	_
8	med	med	ADP	_	_	9	case	_	_
9	følgende	følgende	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	7	advmod	_	SpaceAfter=No
10	:	$:	PUNCT	_	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian-Nynorsk)

This relation is a language-specific subtype of [csubj]().

3 nodes (0%) are attached to their parents as `csubj:pass`.

2 instances of `csubj:pass` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.33333333333333.

The following 1 pairs of parts of speech are connected with `csubj:pass`: [no-pos/ADJ]()-[no-pos/VERB]() (3; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 3 csubj:pass	color:blue
1	Korleis	korleis	ADV	_	_	3	advmod	_	_
2	livet	liv	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	3	nsubj	_	_
3	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	14	csubj:pass	_	_
4	den	den	DET	_	Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	gongen	gong	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	3	obl	_	_
6	når	når	SCONJ	_	_	8	mark	_	_
7	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	expl	_	_
8	galt	gjelde	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	advcl	_	_
9	ulike	ulik	ADJ	_	Degree=Pos|Number=Plur	10	amod	_	_
10	former	form	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	8	obj	_	_
11	for	for	ADP	_	_	12	case	_	_
12	handverk	handverk	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	10	nmod	_	_
13	blei	bli	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	14	aux:pass	_	_
14	vist	vise	ADJ	_	Definite=Ind|Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No
15	.	$.	PUNCT	_	_	14	punct	_	_

~~~


