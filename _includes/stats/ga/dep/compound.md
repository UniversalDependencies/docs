

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is universal.
There are 1 language-specific subtypes of `compound`: [compound:prt]().

1600 nodes (7%) are attached to their parents as `compound`.

1502 instances of `compound` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.8225.

The following 44 pairs of parts of speech are connected with `compound`: [ga-pos/NOUN]()-[ga-pos/NOUN]() (1012; 63% instances), [ga-pos/NOUN]()-[ga-pos/PROPN]() (196; 12% instances), [ga-pos/PROPN]()-[ga-pos/PROPN]() (107; 7% instances), [ga-pos/PROPN]()-[ga-pos/NOUN]() (38; 2% instances), [ga-pos/NOUN]()-[ga-pos/ADP]() (28; 2% instances), [ga-pos/NOUN]()-[ga-pos/PRON]() (27; 2% instances), [ga-pos/VERB]()-[ga-pos/NOUN]() (24; 2% instances), [ga-pos/NOUN]()-[ga-pos/X]() (21; 1% instances), [ga-pos/PRON]()-[ga-pos/PRON]() (21; 1% instances), [ga-pos/ADP]()-[ga-pos/PRON]() (15; 1% instances), [ga-pos/ADJ]()-[ga-pos/NOUN]() (14; 1% instances), [ga-pos/NOUN]()-[ga-pos/ADJ]() (14; 1% instances), [ga-pos/PRON]()-[ga-pos/NOUN]() (12; 1% instances), [ga-pos/ADP]()-[ga-pos/NOUN]() (7; 0% instances), [ga-pos/X]()-[ga-pos/NOUN]() (5; 0% instances), [ga-pos/ADV]()-[ga-pos/NOUN]() (4; 0% instances), [ga-pos/VERB]()-[ga-pos/PRON]() (4; 0% instances), [ga-pos/VERB]()-[ga-pos/PROPN]() (4; 0% instances), [ga-pos/X]()-[ga-pos/PROPN]() (4; 0% instances), [ga-pos/X]()-[ga-pos/X]() (4; 0% instances), [ga-pos/ADV]()-[ga-pos/PRON]() (3; 0% instances), [ga-pos/PROPN]()-[ga-pos/X]() (3; 0% instances), [ga-pos/SCONJ]()-[ga-pos/NOUN]() (3; 0% instances), [ga-pos/VERB]()-[ga-pos/ADP]() (3; 0% instances), [ga-pos/ADJ]()-[ga-pos/PROPN]() (2; 0% instances), [ga-pos/NOUN]()-[ga-pos/ADV]() (2; 0% instances), [ga-pos/NUM]()-[ga-pos/NOUN]() (2; 0% instances), [ga-pos/PART]()-[ga-pos/NOUN]() (2; 0% instances), [ga-pos/PRON]()-[ga-pos/ADP]() (2; 0% instances), [ga-pos/PROPN]()-[ga-pos/ADJ]() (2; 0% instances), [ga-pos/PROPN]()-[ga-pos/PRON]() (2; 0% instances), [ga-pos/ADJ]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/ADJ]()-[ga-pos/X]() (1; 0% instances), [ga-pos/ADP]()-[ga-pos/NUM]() (1; 0% instances), [ga-pos/CONJ]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/DET]()-[ga-pos/ADP]() (1; 0% instances), [ga-pos/DET]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/DET]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/SYM]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/VERB]() (1; 0% instances), [ga-pos/PRON]()-[ga-pos/X]() (1; 0% instances), [ga-pos/PUNCT]()-[ga-pos/PROPN]() (1; 0% instances), [ga-pos/SCONJ]()-[ga-pos/PRON]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 compound	color:blue
1	Tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	0	root	_	_
2	urraíocht	urraíocht	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	1	nsubj	_	_
3	déanta	déanta	ADJ	Adj	VerbForm=Part	1	xcomp:pred	_	_
4	ag	ag	ADP	Simp	_	5	case	_	_
5	Údarás	údarás	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	3	nmod	_	_
6	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	Gaeltachta	gaeltacht	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	5	compound	_	_
8	ar	ar	ADP	Simp	_	10	case	_	_
9	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	10	det	_	_
10	gclár	clár	NOUN	Noun	Case=Com|Form=Ecl|Gender=Masc|Number=Sing	3	nmod	_	_
11	seo	seo	DET	Det	PronType=Dem	10	det	_	_
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound	color:blue
1	Bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	1	nsubj	_	_
3	ina	i	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	4	case	_	_
4	bhall	ball	NOUN	Noun	Case=Com|Form=Len|Gender=Masc|Number=Sing	1	xcomp:pred	_	_
5	de	de	ADP	Simp	_	6	case	_	_
6	Mhuintir	muintir	NOUN	Noun	Case=Com|Form=Len|Gender=Fem|Number=Sing	4	nmod	_	_
7	Shíomóin	Síomón	PROPN	Noun	Case=Gen|Form=Len|Gender=Fem|Number=Sing	6	compound	_	_
8	ó	ó	ADP	Simp	_	9	case	_	_
9	1976	1976	NUM	Num	_	1	nmod	_	_
10	go	go	ADP	Simp	_	11	case	_	_
11	1986	1986	NUM	Num	_	9	nmod	_	_
12	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 compound	color:blue
1	Fuair	faigh	VERB	VT	Mood=Ind|Tense=Past	0	root	_	_
2	sí	sí	PRON	Pers	Gender=Fem|Number=Sing|Person=3	1	nsubj	_	_
3	post	post	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	1	dobj	_	_
4	ansin	ansin	ADV	Loc	_	1	advmod	_	_
5	in	i	ADP	Simp	_	6	case	_	_
6	Oifig	oifig	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	1	nmod	_	_
7	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	Deoise	deoise	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	6	compound	_	_
9	,	,	PUNCT	Punct	_	11	punct	_	_
10	i	i	ADP	Simp	_	11	case	_	_
11	Halla	halla	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	6	nmod	_	_
12	Naomh	naomh	PROPN	Noun	Case=Com|Gender=Masc|Number=Sing	11	compound	_	_
13	Muire	Muire	PROPN	Noun	Case=Gen|Gender=Masc|Number=Sing	12	compound	_	_
14	.	.	PUNCT	.	_	1	punct	_	_

~~~


