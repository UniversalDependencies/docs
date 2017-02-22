

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is a language-specific subtype of [csubj]().
There are also 1 other language-specific subtypes of `csubj`: [csubj:cleft]().

28 nodes (0%) are attached to their parents as `csubj:cop`.

28 instances of `csubj:cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.03571428571429.

The following 7 pairs of parts of speech are connected with `csubj:cop`: [ga-pos/ADJ]()-[ga-pos/VERB]() (11; 39% instances), [ga-pos/NOUN]()-[ga-pos/VERB]() (10; 36% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (2; 7% instances), [ga-pos/VERB]()-[ga-pos/VERB]() (2; 7% instances), [ga-pos/ADJ]()-[ga-pos/NOUN]() (1; 4% instances), [ga-pos/PRON]()-[ga-pos/VERB]() (1; 4% instances), [ga-pos/SCONJ]()-[ga-pos/VERB]() (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj:cop	color:blue
1	Is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	2	cop	_	_
2	léir	léir	ADJ	Adj	Degree=Pos	0	root	_	_
3	ón	ó	ADP	Art	Number=Sing|PronType=Art	4	case	_	_
4	teideal	teideal	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	2	obl	_	_
5	go	go	PART	Vb	PartType=Cmpl	6	mark:prt	_	_
6	bhfuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	2	csubj:cop	_	_
7	draíocht	draíocht	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	6	nsubj	_	_
8	i	i	ADP	Simp	_	9	case	_	_
9	gceist	ceist	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	6	xcomp:pred	_	_
10	sa	i	ADP	Art	Number=Sing|PronType=Art	11	case	_	_
11	dráma	dráma	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	6	obl	_	_
12	seo	seo	DET	Det	PronType=Dem	11	det	_	SpaceAfter=No
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 csubj:cop	color:blue
1	Níor	is	AUX	Cop	Polarity=Neg|Tense=Past|VerbForm=Cop	2	cop	_	_
2	chúis	cúis	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	0	root	_	_
3	iontais	iontas	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	2	compound	_	_
4	í	í	PRON	Pers	Gender=Fem|Number=Sing|Person=3	2	nsubj	_	_
5	go	go	PART	Ad	PartType=Ad	6	mark:prt	_	_
6	hiomlán	iomlán	ADJ	Adj	Degree=Pos	2	advmod	_	_
7	gur	gur	PART	Vb	PartType=Vb|Tense=Past	8	mark:prt	_	_
8	ghlaoigh	glaoigh	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	2	csubj:cop	_	_
9	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	8	nsubj	_	_
10	ar	ar	ADP	Simp	_	11	case	_	_
11	Melissa	Melissa	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 11 csubj:cop	color:blue
1	Tá	bí	VERB	PresInd	Mood=Ind|Tense=Pres	0	root	_	_
2	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	chuma	cuma	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Fem|Number=Sing	1	nsubj	_	_
4	ar	ar	ADP	Simp	_	6	case	_	_
5	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	6	det	_	_
6	scéal	scéal	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	1	obl	_	SpaceAfter=No
7	,	,	PUNCT	Punct	_	8	punct	_	_
8	áfach	áfach	ADV	Gn	_	1	advmod	_	SpaceAfter=No
9	,	,	PUNCT	Punct	_	8	punct	_	_
10	go	go	PART	Vb	PartType=Cmpl	11	mark:prt	_	_
11	bhfuair	faigh	VERB	VT	Form=Ecl|Mood=Ind|Tense=Past	1	csubj:cop	_	_
12	siad	siad	PRON	Pers	Number=Plur|Person=3	11	nsubj	_	_
13	bás	bás	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	11	obj	_	_
14	suaimhneach	suaimhneach	ADJ	Adj	Case=NomAcc|Gender=Masc|Number=Sing	13	amod	_	_
15	agus	agus	CCONJ	Coord	_	16	cc	_	_
16	shíl	síl	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	11	conj	_	_
17	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	18	det	_	_
18	scríbhneoir	scríbhneoir	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	16	nsubj	_	_
19	gurbh	is	AUX	Cop	Form=VF|Tense=Past|VerbForm=Cop	20	cop	_	_
20	fhiú	fiú	NOUN	Subst	Form=Len|Number=Sing	16	ccomp	_	_
21	cuntas	cuntas	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	23	obj	_	_
22	a	a	PART	Inf	PartType=Inf	23	mark	_	_
23	choinneáil	coinneáil	NOUN	Noun	Form=Len|VerbForm=Inf	20	xcomp	_	_
24	ar	ar	ADP	Simp	_	26	case	_	_
25	a	a	DET	Det	Number=Plur|Person=3|Poss=Yes	26	nmod:poss	_	_
26	mbás	bás	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Masc|Number=Sing	23	nmod	_	SpaceAfter=No
27	.	.	PUNCT	.	_	1	punct	_	_

~~~


