

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

29 nodes (0%) are attached to their parents as `discourse`.

18 instances of `discourse` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.27586206896552.

The following 6 pairs of parts of speech are connected with `discourse`: [da-pos/VERB]()-[da-pos/INTJ]() (21; 72% instances), [da-pos/ADV]()-[da-pos/INTJ]() (4; 14% instances), [da-pos/ADP]()-[da-pos/INTJ]() (1; 3% instances), [da-pos/INTJ]()-[da-pos/INTJ]() (1; 3% instances), [da-pos/NOUN]()-[da-pos/INTJ]() (1; 3% instances), [da-pos/PROPN]()-[da-pos/INTJ]() (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 discourse	color:blue
1	"	"	PUNCT	_	_	2	punct	_	_
2	Ja	ja	INTJ	_	_	5	discourse	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	"	"	PUNCT	_	_	2	punct	_	_
5	siger	sige	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	han	han	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
7	og	og	CCONJ	_	_	8	cc	_	_
8	vender	vende	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	_
9	sig	sig	PRON	_	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	8	obj	_	_
10	om	om	ADV	_	_	8	obl:loc	_	_
11	på	på	ADP	_	AdpType=Prep	12	case	_	_
12	siden	side	NOUN	_	Definite=Def|Gender=Com|Number=Sing	10	obl	_	_
13	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 9 discourse	color:blue
1	Er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
2	det	den	DET	_	Gender=Neut|Number=Sing|PronType=Dem	4	det	_	_
3	sportslige	sportslig	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	4	amod	_	_
4	tilbud	tilbud	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	6	nsubj	_	_
5	ikke	ikke	ADV	_	_	6	advmod	_	_
6	godt	god	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	16	mark	_	_
7	nok	nok	ADV	_	_	6	advmod	_	_
8	,	,	PUNCT	_	_	6	punct	_	_
9	ja	ja	INTJ	_	_	16	discourse	_	_
10	så	så	ADV	_	_	16	advmod	_	_
11	bliver	blive	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	16	cop	_	_
12	sportens	sport	NOUN	_	Case=Gen|Definite=Def|Gender=Com|Number=Sing	15	nmod:poss	_	_
13	meget	meget	ADV	_	Degree=Pos	14	advmod	_	_
14	troløse	troløs	ADJ	_	Degree=Pos|Number=Plur	15	amod	_	_
15	tilskuere	tilskuer	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	16	nsubj	_	_
16	væk	væk	ADV	_	_	0	root	_	_
17	.	.	PUNCT	_	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 discourse	color:blue
1	Michael	Michael	PROPN	_	_	0	root	_	_
2	:	:	PUNCT	_	_	1	punct	_	_
3	"	"	PUNCT	_	_	4	punct	_	_
4	Ja	ja	INTJ	_	_	1	discourse	_	_
5	,	,	PUNCT	_	_	4	punct	_	_
6	for	for	CCONJ	_	_	4	conj	_	_
7	jeg	jeg	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
8	forstår	forstå	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	dep	_	_
9	stadig	stadig	ADV	_	_	8	advmod	_	_
10	ikke	ikke	ADV	_	_	8	advmod	_	_
11	,	,	PUNCT	_	_	8	punct	_	_
12	hvordan	hvordan	ADV	_	_	18	mark	_	_
13	i	i	ADP	_	AdpType=Prep	12	case	_	_
14	himlens	himmel	NOUN	_	Case=Gen|Definite=Def|Gender=Com|Number=Sing	15	nmod:poss	_	_
15	navn	navn	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	8	obl	_	_
16	de	de	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	18	nsubj	_	_
17	kunne	kunne	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	18	aux	_	_
18	stemme	stemme	VERB	_	VerbForm=Inf|Voice=Act	15	acl:relcl	_	_
19	os	vi	PRON	_	Case=Acc|Gender=Com|Number=Plur|Person=1|PronType=Prs	18	obj	_	_
20	ned	ned	ADV	_	_	18	obl:loc	_	_
21	på	på	ADP	_	AdpType=Prep	24	case	_	_
22	en	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	24	det	_	_
23	tredjesidste	tredjesidste	ADJ	_	Degree=Pos	24	amod	_	_
24	plads	plads	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	20	obl	_	_
25	.	.	PUNCT	_	_	1	punct	_	_

~~~


