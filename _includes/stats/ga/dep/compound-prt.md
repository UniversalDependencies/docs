

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is a language-specific subtype of [compound]().

12 nodes (0%) are attached to their parents as `compound:prt`.

12 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33333333333333.

The following 5 pairs of parts of speech are connected with `compound:prt`: [ga-pos/NOUN]()-[ga-pos/ADP]() (4; 33% instances), [ga-pos/NOUN]()-[ga-pos/ADV]() (3; 25% instances), [ga-pos/ADJ]()-[ga-pos/ADV]() (2; 17% instances), [ga-pos/VERB]()-[ga-pos/ADP]() (2; 17% instances), [ga-pos/ADV]()-[ga-pos/ADP]() (1; 8% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:prt	color:blue
1	Bean	Bean	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	4	compound	_	_
2	Uasal	uasal	ADJ	Adj	Case=Com|Gender=Fem|Number=Sing	1	amod	_	_
3	:	:	PUNCT	Punct	_	4	punct	_	_
4	Cén	cé	DET	Det	Number=Sing|PronType=Int	5	nsubj	_	_
5	dul	dul	NOUN	Noun	Case=Com|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
6	as	as	ADP	Prep	Gender=Masc|Number=Sing|Person=3	5	compound:prt	_	_
7	a	a	PART	Vb	PartType=Vb|PronType=Rel	8	nsubj	_	_
8	bhí	bí	VERB	VI	Form=Len|Mood=Ind|Tense=Past	5	acl:relcl	_	_
9	agam	ag	ADP	Prep	Number=Sing|Person=1	8	nmod:prep	_	_
10	?	?	PUNCT	?	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 24 compound:prt	color:blue
1	Labhair	labhair	VERB	VTI	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	sí	sí	PRON	Pers	Gender=Fem|Number=Sing|Person=3	1	nsubj	_	_
3	liom	le	ADP	Prep	Number=Sing|Person=1	1	nmod:prep	_	_
4	ar	ar	ADP	Simp	_	6	case	_	_
5	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	6	det	_	_
6	bealaí	bealach	NOUN	Noun	Case=Com|Definite=Def|Gender=Masc|Number=Plur	1	nmod	_	_
7	a	a	PART	Vb	PartType=Vb|PronType=Rel	8	nsubj	_	_
8	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	6	acl:relcl	_	_
9	ag	ag	ADP	Simp	_	10	case	_	_
10	údaráis	údarás	NOUN	Noun	Case=Com|Gender=Masc|Number=Plur	8	nmod	_	_
11	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	scoile	scoil	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	10	compound	_	_
13	brú	brú	NOUN	Noun	Case=Com|Gender=Masc|Number=Sing	15	dobj	_	_
14	a	a	PART	Inf	PartType=Inf	15	mark	_	_
15	chur	cur	NOUN	Noun	Form=Len|VerbForm=Inf	8	xcomp	_	_
16	ar	ar	ADP	Simp	_	18	case	_	_
17	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	18	det	_	_
18	daltaí	dalta	NOUN	Noun	Case=Com|Definite=Def|Gender=Masc|Number=Plur	15	nmod	_	_
19	a	a	DET	Det	Number=Plur|Person=3|Poss=Yes	21	nmod:poss	_	_
20	gcuid	cuid	NOUN	Noun	Case=Com|Form=Ecl|Gender=Fem|Number=Sing	21	advmod	_	_
21	teangacha	teanga	NOUN	Noun	Case=Gen|Gender=Fem|NounType=Strong|Number=Plur	23	dobj	_	_
22	a	a	PART	Inf	PartType=Inf	23	mark	_	_
23	thabhairt	tabhairt	NOUN	Noun	Form=Len|VerbForm=Inf	15	xcomp	_	_
24	suas	suas	ADV	Dir	_	23	compound:prt	_	_
25	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 27 compound:prt	color:blue
1	den	de	ADP	Art	Number=Sing|PronType=Art	0	root	_	_
2	Chonradh	conradh	NOUN	Noun	Case=Com|Form=Len|Gender=Masc|Number=Sing	1	nmod	_	_
3	seo	seo	DET	Det	PronType=Dem	2	det	_	_
4	,	,	PUNCT	Punct	_	5	punct	_	_
5	de_réir	de_réir	ADP	Cmpd	PrepForm=Cmpd	1	conj	_	_
6	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	7	det	_	_
7	réimse	réimse	NOUN	Noun	Case=Gen|Form=Len|Gender=Masc|Number=Sing	5	nmod	_	_
8	i	i	ADP	Simp	_	9	case	_	_
9	dtrácht	trácht	NOUN	Noun	Case=Com|Form=Ecl|Gender=Masc|Number=Sing	7	nmod	_	_
10	,	,	PUNCT	Punct	_	11	punct	_	_
11	agus	agus	CONJ	Coord	_	1	cc	_	_
12	go	go	PART	Vb	PartType=Cmpl	13	mark:prt	_	_
13	bhfuil	bí	VERB	PresInd	Form=Ecl|Mood=Ind|Tense=Pres	1	conj	_	_
14	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	13	nsubj	_	_
15	údaraithe	údaraithe	ADJ	Adj	VerbForm=Part	13	xcomp:pred	_	_
16	ag	ag	ADP	Simp	_	18	case	_	_
17	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	18	det	_	_
18	gComhairle	comhairle	NOUN	Noun	Case=Com|Form=Ecl|Gender=Fem|Number=Sing	15	nmod	_	_
19	i	i	ADP	Simp	_	20	case	_	_
20	gcomhréir	comhréir	NOUN	Noun	Case=Com|Form=Ecl|Gender=Fem|Number=Sing	15	nmod	_	_
21	leis	le	ADP	Simp	_	23	case	_	_
22	na	na	DET	Art	Definite=Def|Number=Plur|PronType=Art	23	det	_	_
23	nósanna	nós	NOUN	Noun	Case=Com|Definite=Def|Gender=Masc|Number=Plur	20	nmod	_	_
24	imeachta	imeacht	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	23	compound	_	_
25	atá	bí	VERB	PresInd	Mood=Ind|PronType=Rel|Tense=Pres	23	acl:relcl	_	_
26	leagtha	leagtha	ADJ	Adj	VerbForm=Part	25	xcomp:pred	_	_
27	síos	síos	ADV	Dir	_	26	compound:prt	_	_
28	iontu	i	ADP	Prep	Number=Plur|Person=3	26	nmod:prep	_	_
29	.	.	PUNCT	.	_	1	punct	_	_

~~~


