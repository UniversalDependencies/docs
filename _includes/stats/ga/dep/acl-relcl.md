

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is a language-specific subtype of [acl]().

264 nodes (2%) are attached to their parents as `acl:relcl`.

264 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.13257575757576.

The following 13 pairs of parts of speech are connected with `acl:relcl`: [ga-pos/NOUN]()-[ga-pos/VERB]() (235; 89% instances), [ga-pos/PRON]()-[ga-pos/VERB]() (8; 3% instances), [ga-pos/NOUN]()-[ga-pos/NOUN]() (7; 3% instances), [ga-pos/ADP]()-[ga-pos/VERB]() (2; 1% instances), [ga-pos/CCONJ]()-[ga-pos/VERB]() (2; 1% instances), [ga-pos/NOUN]()-[ga-pos/ADP]() (2; 1% instances), [ga-pos/SCONJ]()-[ga-pos/VERB]() (2; 1% instances), [ga-pos/ADJ]()-[ga-pos/VERB]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/ADJ]() (1; 0% instances), [ga-pos/NOUN]()-[ga-pos/X]() (1; 0% instances), [ga-pos/PRON]()-[ga-pos/NOUN]() (1; 0% instances), [ga-pos/PROPN]()-[ga-pos/VERB]() (1; 0% instances), [ga-pos/VERB]()-[ga-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:relcl	color:blue
1	Is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	2	cop	_	_
2	é	é	PRON	Pers	Gender=Masc|Person=3	0	root	_	_
3	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	4	det	_	_
4	leabhar	leabhar	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	_
5	a	a	PART	Vb	PartType=Vb|PronType=Rel	6	obj	_	_
6	thug	tabhair	VERB	VD	Form=Len|Mood=Ind|Tense=Past	4	acl:relcl	_	_
7	sí	sí	PRON	Pers	Gender=Fem|Number=Sing|Person=3	6	nsubj	_	_
8	do	do	ADP	Simp	_	9	case	_	_
9	Mháire	Máire	PROPN	Noun	Case=NomAcc|Form=Len|Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 acl:relcl	color:blue
1	D'	do	PART	Vb	PartType=Vb	2	mark:prt	_	SpaceAfter=No
2	fhéach	féach	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
3	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
4	orthu	ar	ADP	Prep	Number=Plur|Person=3	2	obl:prep	_	_
5	siúd	siúd	PRON	Dem	PronType=Dem	4	det	_	_
6	atá	bí	VERB	PresInd	Mood=Ind|PronType=Rel|Tense=Pres	5	acl:relcl	_	_
7	ag	ag	ADP	Simp	_	8	case	_	_
8	seasamh	seasamh	NOUN	Noun	VerbForm=Vnoun	6	xcomp	_	_
9	le	le	ADP	Simp	_	10	case	_	_
10	saoirse	saoirse	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	8	nmod	_	_
11	a	a	DET	Det	Number=Plur|Person=3|Poss=Yes	12	nmod:poss	_	_
12	dtíre	tír	NOUN	Noun	Case=Gen|Form=Ecl|Gender=Fem|Number=Sing	10	compound	_	_
13	agus	agus	CCONJ	Coord	_	15	cc	_	_
14	a	a	DET	Det	Number=Plur|Person=3|Poss=Yes	15	nmod:poss	_	_
15	muintire	muintir	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	12	conj	_	_
16	mar	mar	ADP	Simp	_	17	case	_	_
17	mhéirligh	meirleach	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	15	nmod	_	_
18	agus	agus	CCONJ	Coord	_	20	cc	_	_
19	mar	mar	ADP	Simp	_	20	case	_	_
20	sceimhlitheoirí	sceimhlitheoir	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Plur	17	conj	_	SpaceAfter=No
21	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	Ach	ach	SCONJ	Subord	_	3	advmod	_	_
2	is	is	AUX	Cop	PronType=Rel|Tense=Pres|VerbForm=Cop	3	cop	_	_
3	lena	le	ADP	Poss	Gender=Masc|Number=Sing|Person=3|Poss=Yes	0	root	_	_
4	aghaidh	aghaidh	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	3	nmod	_	_
5	sin	sin	DET	Det	PronType=Dem	4	det	_	_
6	a	a	PART	Inf	PartType=Inf	7	obj	_	_
7	ceapadh	ceapadh	NOUN	Noun	VerbForm=Inf	4	acl:relcl	_	_
8	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	boinn	bonn	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	7	obj	_	_
10	ídín	ídín	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	9	compound	_	SpaceAfter=No
11	,	,	PUNCT	Punct	_	14	punct	_	_
12	leis	le	ADP	Simp	_	14	case	_	_
13	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	14	det	_	_
14	bhfuil	fuil	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	3	nmod	_	_
15	a	a	PART	Inf	PartType=Inf	16	mark	_	_
16	choinneáil	coinneáil	NOUN	Noun	Form=Len|VerbForm=Inf	14	xcomp	_	_
17	ag	ag	ADP	Simp	_	18	case	_	_
18	sodarnaíl	sodarnaíl	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	16	xcomp	_	SpaceAfter=No
19	.	.	PUNCT	.	_	3	punct	_	_

~~~


