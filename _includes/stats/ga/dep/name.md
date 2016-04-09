

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

178 nodes (1%) are attached to their parents as `name`.

161 instances of `name` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.36516853932584.

The following 14 pairs of parts of speech are connected with `name`: [ga-pos/PROPN]()-[ga-pos/PROPN]() (88; 49% instances), [ga-pos/PROPN]()-[ga-pos/PART]() (53; 30% instances), [ga-pos/NOUN]()-[ga-pos/PROPN]() (10; 6% instances), [ga-pos/NOUN]()-[ga-pos/PART]() (8; 4% instances), [ga-pos/PROPN]()-[ga-pos/NOUN]() (5; 3% instances), [ga-pos/PROPN]()-[ga-pos/X]() (4; 2% instances), [ga-pos/VERB]()-[ga-pos/PART]() (2; 1% instances), [ga-pos/X]()-[ga-pos/PROPN]() (2; 1% instances), [ga-pos/NOUN]()-[ga-pos/ADP]() (1; 1% instances), [ga-pos/PROPN]()-[ga-pos/ADJ]() (1; 1% instances), [ga-pos/PROPN]()-[ga-pos/ADP]() (1; 1% instances), [ga-pos/PROPN]()-[ga-pos/PRON]() (1; 1% instances), [ga-pos/VERB]()-[ga-pos/PROPN]() (1; 1% instances), [ga-pos/X]()-[ga-pos/PART]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 name	color:blue
1	Richard	Richard	PROPN	Noun	Case=Com|Gender=Masc|Number=Sing	0	root	_	_
2	Behal	Behal	PROPN	Noun	Case=Com|Gender=Masc|Number=Sing	1	name	_	_
3	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 name	color:blue
1	Grianghraif	grianghraf	NOUN	Noun	Case=Com|Gender=Masc|Number=Plur	0	root	_	_
2	le	le	ADP	Simp	_	3	case	_	_
3	Maidhc	Maidhc	PROPN	Noun	Case=Com|Gender=Masc|Number=Sing	1	nmod	_	_
4	Ó	ó	PART	Pat	PartType=Pat	3	name	_	_
5	Seachnasaí	seachnasaí	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	3	name	_	_
6	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 name	color:blue
1	Chomh	chomh	ADV	Its	_	2	advmod	_	_
2	maith	maith	ADJ	Adj	Degree=Pos	6	amod	_	_
3	le	le	ADP	Simp	_	4	case	_	_
4	sin	sin	PRON	Dem	PronType=Dem	2	nmod	_	_
5	,	,	PUNCT	Punct	_	6	punct	_	_
6	bhronn	bronn	VERB	VT	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
7	Teaghlach	teaghlach	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	6	nsubj	_	_
8	Uí	uí	PART	Pat	PartType=Pat	7	name	_	_
9	Ghallchóir	Gallchóir	PROPN	Noun	Case=Gen|Gender=Fem|Number=Sing	7	name	_	_
10	as	as	ADP	Simp	_	12	case	_	_
11	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	12	det	_	_
12	Bhun	bun	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	7	nmod	_	_
13	Bheag	beag	ADJ	Adj	Case=Com|Gender=Fem|Number=Sing	12	amod	_	_
14	Corn	corn	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	6	dobj	_	_
15	Cuimhneacháin	cuimhneachán	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	14	compound	_	_
16	Hiúdaí	hiúdaí	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	15	compound	_	_
17	Bhig	Big	ADJ	Adj	Case=Com|Form=Len|Gender=Masc|Number=Sing	16	amod	_	_
18	ar	ar	ADP	Simp	_	20	case	_	_
19	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	20	det	_	_
20	chomórtas	comórtas	NOUN	Noun	Case=Com|Form=Len|Gender=Masc|Number=Sing	6	nmod	_	_
21	.	.	PUNCT	.	_	6	punct	_	_

~~~


