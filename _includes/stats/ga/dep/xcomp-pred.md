

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is a language-specific subtype of [xcomp]().

531 nodes (2%) are attached to their parents as `xcomp:pred`.

527 instances of `xcomp:pred` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.57815442561205.

The following 24 pairs of parts of speech are connected with `xcomp:pred`: [ga-pos/VERB]()-[ga-pos/NOUN]() (187; 35% instances), [ga-pos/VERB]()-[ga-pos/ADJ]() (153; 29% instances), [ga-pos/VERB]()-[ga-pos/ADP]() (59; 11% instances), [ga-pos/NOUN]()-[ga-pos/ADJ]() (28; 5% instances), [ga-pos/PRON]()-[ga-pos/NOUN]() (23; 4% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (21; 4% instances), [ga-pos/VERB]()-[ga-pos/ADV]() (18; 3% instances), [ga-pos/SCONJ]()-[ga-pos/NOUN]() (8; 2% instances), [ga-pos/VERB]()-[ga-pos/PROPN]() (8; 2% instances), [ga-pos/PRON]()-[ga-pos/ADJ]() (3; 1% instances), [ga-pos/PRON]()-[ga-pos/PRON]() (3; 1% instances), [ga-pos/SCONJ]()-[ga-pos/ADJ]() (3; 1% instances), [ga-pos/ADP]()-[ga-pos/NOUN]() (2; 0% instances), [ga-pos/NOUN]()-[ga-pos/ADP]() (2; 0% instances), [ga-pos/PROPN]()-[ga-pos/ADJ]() (2; 0% instances), [ga-pos/VERB]()-[ga-pos/PART]() (2; 0% instances), [ga-pos/VERB]()-[ga-pos/X]() (2; 0% instances), [ga-pos/ADV]()-[ga-pos/ADJ]() (1; 0% instances), [ga-pos/DET]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/PART]()-[ga-pos/ADV]() (1; 0% instances), [ga-pos/PART]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/PRON]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/ADV]() (1; 0% instances), [ga-pos/X]()-[ga-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp:pred	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 xcomp:pred	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp:pred	color:blue
1	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	sí	sí	PRON	Pers	Gender=Fem|Number=Sing|Person=3	1	nsubj	_	_
3	ann	i	ADP	Prep	Gender=Masc|Number=Sing|Person=3	1	xcomp:pred	_	_
4	ar_feadh	ar_feadh	ADP	Cmpd	PrepForm=Cmpd	5	case	_	_
5	bliana	bliain	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	1	nmod:tmod	_	_
6	.	.	PUNCT	.	_	1	punct	_	_

~~~


