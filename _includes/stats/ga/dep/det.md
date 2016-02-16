

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

1981 nodes (8%) are attached to their parents as `det`.

1601 instances of `det` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.06461383139828.

The following 20 pairs of parts of speech are connected with `det`: [ga-pos/NOUN]()-[ga-pos/DET]() (1734; 88% instances), [ga-pos/PROPN]()-[ga-pos/DET]() (124; 6% instances), [ga-pos/NOUN]()-[ga-pos/X]() (22; 1% instances), [ga-pos/PRON]()-[ga-pos/PRON]() (19; 1% instances), [ga-pos/NOUN]()-[ga-pos/PRON]() (17; 1% instances), [ga-pos/ADP]()-[ga-pos/PRON]() (15; 1% instances), [ga-pos/X]()-[ga-pos/DET]() (12; 1% instances), [ga-pos/PRON]()-[ga-pos/DET]() (8; 0% instances), [ga-pos/NUM]()-[ga-pos/DET]() (7; 0% instances), [ga-pos/DET]()-[ga-pos/DET]() (6; 0% instances), [ga-pos/ADJ]()-[ga-pos/DET]() (4; 0% instances), [ga-pos/ADJ]()-[ga-pos/PRON]() (3; 0% instances), [ga-pos/VERB]()-[ga-pos/DET]() (3; 0% instances), [ga-pos/ADJ]()-[ga-pos/X]() (1; 0% instances), [ga-pos/ADV]()-[ga-pos/DET]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/NUM]() (1; 0% instances), [ga-pos/PRON]()-[ga-pos/X]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/PROPN]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	An	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	2	det	_	_
2	Fhíor-Ghaeltacht	Fhíor-Ghaeltacht	PROPN	Noun	Case=Com|Gender=Fem|Number=Sing	7	dobj	_	_
3	ab	is	VERB	Cop	Form=VF|PronType=Rel|Tense=Past|VerbForm=Cop	4	cop	_	_
4	ait	ait	ADJ	Adj	Degree=Pos	0	root	_	_
5	liom	le	ADP	Prep	Number=Sing|Person=1	4	nmod:prep	_	_
6	a	a	PART	Inf	PartType=Inf	7	mark	_	_
7	choinneáil	coinneáil	NOUN	Noun	Form=Len|VerbForm=Inf	4	nsubj	_	_
8	amhla	amhlaidh	ADV	Gn	_	7	advmod	_	_
9	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 det	color:blue
1	is	is	VERB	Cop	Tense=Pres|VerbForm=Cop	2	cop	_	_
2	laistigh	laistigh	ADV	Loc	_	0	root	_	_
3	de	de	ADP	Simp	_	4	case	_	_
4	bhliain	bliain	NOUN	Noun	Case=Com|Form=Len|Gender=Fem|Number=Sing	2	nmod:tmod	_	_
5	o	ó	ADP	Simp	_	6	case	_	_
6	am	am	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	4	nmod	_	_
7	rithte	rithte	ADJ	Adj	VerbForm=Part	6	amod	_	_
8	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	Achta	acht	NOUN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	6	compound	_	_
10	so	seo	X	CM	Dialect=Munster|PronType=Dem	9	det	_	_
11	a	a	PART	Vb	PartType=Vb|PronType=Rel	12	mark:prt	_	_
12	déanfar	déan	VERB	VTI	Mood=Ind|Tense=Fut|Voice=Auto	2	csubj:cleft	_	_
13	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	12	dobj	_	_
14	.	.	PUNCT	.	_	2	punct	_	_

~~~


