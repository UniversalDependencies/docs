

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.

708 nodes (3%) are attached to their parents as `amod`.

692 instances of `amod` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.85875706214689.

The following 14 pairs of parts of speech are connected with `amod`: [ga-pos/NOUN]()-[ga-pos/ADJ]() (609; 86% instances), [ga-pos/VERB]()-[ga-pos/ADJ]() (29; 4% instances), [ga-pos/ADJ]()-[ga-pos/ADJ]() (27; 4% instances), [ga-pos/PROPN]()-[ga-pos/ADJ]() (17; 2% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (5; 1% instances), [ga-pos/X]()-[ga-pos/ADJ]() (5; 1% instances), [ga-pos/NOUN]()-[ga-pos/X]() (3; 0% instances), [ga-pos/PRON]()-[ga-pos/ADJ]() (3; 0% instances), [ga-pos/NOUN]()-[ga-pos/ADV]() (2; 0% instances), [ga-pos/PROPN]()-[ga-pos/ADV]() (2; 0% instances), [ga-pos/PROPN]()-[ga-pos/PROPN]() (2; 0% instances), [ga-pos/SCONJ]()-[ga-pos/ADJ]() (2; 0% instances), [ga-pos/VERB]()-[ga-pos/ADV]() (1; 0% instances), [ga-pos/X]()-[ga-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod	color:blue
1	Maidin	maidin	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	0	root	_	_
2	thirim	tirim	ADJ	Adj	Case=Com|Gender=Fem|Number=Sing	1	amod	_	_
3	fhionnuar	fionnuar	ADJ	Adj	Case=Com|Gender=Fem|Number=Sing	1	amod	_	_
4	a	a	PART	Vb	PartType=Vb|PronType=Rel	5	mark:prt	_	_
5	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	1	csubj:cleft	_	_
6	ann	i	ADP	Prep	Gender=Masc|Number=Sing|Person=3	5	xcomp:pred	_	_
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 amod	color:blue
1	Sásta	sásta	ADJ	Adj	Degree=Pos	5	amod	_	_
2	ar	ar	ADP	Simp	_	3	case	_	_
3	deireadh	deireadh	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	1	nmod	_	_
4	,	,	PUNCT	Punct	_	5	punct	_	_
5	glacaim	glac	VERB	VT	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
6	sos	sos	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	5	dobj	_	_
7	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	Ar	ar	ADP	Simp	_	2	case	_	_
2	ndóigh	dóigh	NOUN	Noun	Case=Com|Form=Ecl|Gender=Fem|Number=Sing	3	nmod	_	_
3	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
4	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	5	det	_	_
5	tír	tír	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	3	nsubj	_	_
6	suaite	suaite	ADJ	Adj	VerbForm=Part	3	xcomp:pred	_	_
7	go_leor	go_leor	ADJ	Adj	_	6	amod	_	_
8	i_rith	i_rith	ADP	Cmpd	PrepForm=Cmpd	10	case	_	_
9	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	10	det	_	_
10	am	am	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	3	nmod	_	_
11	seo	seo	DET	Det	PronType=Dem	10	det	_	_
12	go	go	PART	Ad	PartType=Ad	13	mark:prt	_	_
13	léir	léir	ADJ	Adj	Degree=Pos	3	advmod	_	_
14	.	.	PUNCT	.	_	3	punct	_	_

~~~


