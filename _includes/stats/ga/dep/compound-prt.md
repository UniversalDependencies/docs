

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
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 compound:prt	color:blue
1	Leis	le	ADP	Simp	_	3	case	_	_
2	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	modh	modh	NOUN	Noun	Case=Com|Definite=Def|Gender=Masc|Number=Sing	9	nmod	_	_
4	reacaireachta	reacaireacht	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	3	compound	_	_
5	a	a	PART	Vb	PartType=Vb|PronType=Rel	6	dobj	_	_
6	úsáidtear	úsáid	VERB	VT	Mood=Ind|Tense=Pres|Voice=Auto	3	acl:relcl	_	_
7	san	i	ADP	Art	Number=Sing|PronType=Art	8	case	_	_
8	insint	insint	NOUN	Noun	Case=Com|Definite=Def|Gender=Fem|Number=Sing	6	nmod	_	_
9	cuirtear	cuir	VERB	VTI	Mood=Ind|Tense=Pres|Voice=Auto	0	root	_	_
10	imeachtaí	imeacht	NOUN	Noun	Case=Com|Gender=Masc|Number=Plur	9	dobj	_	_
11	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	12	det	_	_
12	scéil	scéal	NOUN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	10	compound	_	_
13	i_láthair	i_láthair	ADP	Cmpd	PrepForm=Cmpd	9	compound:prt	_	_
14	tré	tré	ADP	Simp	_	15	case	_	_
15	shúile	súil	NOUN	Noun	Case=Com|Form=Len|Gender=Fem|Number=Plur	9	nmod	_	_
16	Mhairéid	Mhairéid	PROPN	Noun	Case=Com|Gender=Masc|Number=Sing	15	compound	_	_
17	cuid	cuid	NOUN	Noun	Case=Com|Gender=Fem|Number=Sing	9	advmod	_	_
18	mhaith	maith	ADJ	Adj	Case=Com|Form=Len|Gender=Fem|Number=Sing	17	amod	_	_
19	.	.	PUNCT	.	_	9	punct	_	_

~~~


