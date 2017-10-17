

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.
There are 2 language-specific subtypes of `flat`: [flat:foreign](), [flat:name]().

75 nodes (0%) are attached to their parents as `flat`.

75 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.77333333333333.

The following 10 pairs of parts of speech are connected with `flat`: [lv-pos/SYM]()-[lv-pos/SYM]() (50; 67% instances), [lv-pos/X]()-[lv-pos/X]() (14; 19% instances), [lv-pos/ADJ]()-[lv-pos/ADJ]() (2; 3% instances), [lv-pos/ADJ]()-[lv-pos/PUNCT]() (2; 3% instances), [lv-pos/PART]()-[lv-pos/INTJ]() (2; 3% instances), [lv-pos/NUM]()-[lv-pos/NUM]() (1; 1% instances), [lv-pos/NUM]()-[lv-pos/PUNCT]() (1; 1% instances), [lv-pos/PART]()-[lv-pos/ADV]() (1; 1% instances), [lv-pos/SYM]()-[lv-pos/NUM]() (1; 1% instances), [lv-pos/X]()-[lv-pos/ADJ]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	*	*	SYM	xx	_	0	root	_	_
2	*	*	SYM	xx	_	1	flat	_	_
3	*	*	SYM	xx	_	1	flat	_	_

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 31 flat	color:blue
1	LNB	LNB	PROPN	y	Abbr=Yes	2	nmod	_	_
2	direktors	direktors	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
3	vēstniekam	vēstnieks	NOUN	ncmsd1	Case=Dat|Gender=Masc|Number=Sing	5	iobj	_	_
4	bija	būt	VERB	vcnisii30an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	_	_
5	sarūpējis	sarūpēt	VERB	vmnpdmsnasn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	pārsteigumu	pārsteigums	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
7	:	:	PUNCT	zo	_	46	punct	_	_
8	rādot	rādīt	VERB	vmnpu000000	VerbForm=Conv	46	advcl	_	_
9	1809.	1809.	ADJ	xo	NumType=Ord	10	amod	_	_
10	gadā	gads	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	11	obl	_	_
11	izdoto	izdot	VERB	vmnpdfsapsy	Aspect=Perf|Case=Acc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	14	amod	_	_
12	Luidži	Luidži	PROPN	npmsg0	Case=Gen|Gender=Masc|Number=Sing	14	nmod	_	_
13	Lanzi	Lanzi	PROPN	npmsg0	Case=Gen|Gender=Masc|Number=Sing	12	flat:name	_	_
14	darbu	darbs	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	16	nmod	_	_
15	“	“	PUNCT	zq	_	16	punct	_	SpaceAfter=No
16	Storia	Storia	X	xf	Foreign=Yes	8	obj	_	_
17	pittorica	pittorica	X	xf	Foreign=Yes	16	flat	_	_
18	della	della	X	xf	Foreign=Yes	16	flat	_	_
19	Italia	Italia	X	xf	Foreign=Yes	16	flat	_	_
20	dal	dal	X	xf	Foreign=Yes	16	flat	_	_
21	risorgimento	risorgimento	X	xf	Foreign=Yes	16	flat	_	_
22	delle	delle	X	xf	Foreign=Yes	16	flat	_	_
23	Belle	Belle	X	xf	Foreign=Yes	16	flat	_	_
24	Arti	Arti	X	xf	Foreign=Yes	16	flat	_	_
25	fin	fin	X	xf	Foreign=Yes	16	flat	_	_
26	presso	presso	X	xf	Foreign=Yes	16	flat	_	_
27	al	al	X	xf	Foreign=Yes	16	flat	_	_
28	fine	fine	X	xf	Foreign=Yes	16	flat	_	_
29	del	del	X	xf	Foreign=Yes	16	flat	_	_
30	XVIII	XVIII	ADJ	xo	NumType=Ord	16	flat	_	_
31	secolo	secolo	X	xf	Foreign=Yes	16	flat	_	SpaceAfter=No
32	"	"	PUNCT	zq	_	16	punct	_	_
33	un	un	CCONJ	ccs	_	34	cc	_	_
34	stāstot	stāstīt	VERB	vmnpu000000	VerbForm=Conv	8	conj	_	SpaceAfter=No
35	,	,	PUNCT	zc	_	39	punct	_	_
36	kā	kā	ADV	r0m	PronType=Int	39	advmod	_	_
37	šis	šis	DET	pd0msnn	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	38	det	_	_
38	izdevums	izdevums	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	39	nsubj	_	_
39	nokļuvis	nokļūt	VERB	vmnpdmsnasn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	34	ccomp	_	_
40	Nacionālajā	nacionāla	ADJ	arfslyp	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	41	amod	_	_
41	bibliotēkā	bibliotēka	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	39	obl	_	SpaceAfter=No
42	,	,	PUNCT	zc	_	39	punct	_	_
43	noslēgumā	noslēgums	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	46	obl	_	_
44	Andris	Andris	PROPN	npmsn2	Case=Nom|Gender=Masc|Number=Sing	46	nsubj	_	_
45	Vilks	Vilks	PROPN	npmsn1	Case=Nom|Gender=Masc|Number=Sing	44	flat:name	_	_
46	atšķīra	atšķirt	VERB	vmnist130an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	5	conj	_	_
47	grāmatas	grāmata	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	49	nmod	_	_
48	pēdējās	pēdēja	ADJ	arfpayp	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	49	amod	_	_
49	lappuses	lappuse	NOUN	ncfpa5	Case=Acc|Gender=Fem|Number=Plur	46	obj	_	SpaceAfter=No
50	,	,	PUNCT	zc	_	52	punct	_	_
51	kuras	kura	PRON	pr0fpan	Case=Acc|Gender=Fem|Number=Plur|PronType=Rel	52	obj	_	_
52	rotāja	rotāt	VERB	vmnist230an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	49	acl	_	_
53	unikāls	unikāls	ADJ	armsnnp	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	54	amod	_	_
54	fakts	fakts	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	52	nsubj	_	_
55	-	-	PUNCT	zd	_	61	punct	_	_
56	Stendāla	Stendāls	PROPN	npmsg1	Case=Gen|Gender=Masc|Number=Sing	58	nmod	_	_
57	oriģinālajā	oriģināls	ADJ	armslyp	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	58	amod	_	_
58	rokrakstā	rokraksts	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	59	obl	_	_
59	lasāmi	lasīt	VERB	vmnpdmpnppn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Pass	61	amod	_	_
60	viņa	viņš	PRON	pp3msgn	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	61	det	_	_
61	pieraksti	pieraksts	NOUN	ncmpn1	Case=Nom|Gender=Masc|Number=Plur	54	acl	_	SpaceAfter=No
62	.	.	PUNCT	zs	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 26 flat	color:blue
1	Ingrīda	Ingrīda	PROPN	npfsn4	Case=Nom|Gender=Fem|Number=Sing	16	parataxis	_	_
2	Gubernatorova	Gubernatorova	PROPN	npfsn4	Case=Nom|Gender=Fem|Number=Sing	1	flat:name	_	SpaceAfter=No
3	:	:	PUNCT	zo	_	1	punct	_	_
4	Līdzšinējā	līdzšinējs	ADJ	armsgyp	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
5	Atkritumu	atkritumi	NOUN	ncmdg1	Case=Gen|Gender=Masc|Number=Ptan	6	nmod	_	_
6	apsaimniekošanas	apsaimniekošana	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
7	valsts	valsts	NOUN	ncfsg6	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
8	plāna	plāns	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	14	nmod	_	_
9	2006.	2006.	ADJ	xo	NumType=Ord	12	amod	_	SpaceAfter=No
10	-	-	PUNCT	zd	_	9	flat	_	SpaceAfter=No
11	2012.	2012.	ADJ	xo	NumType=Ord	9	flat	_	SpaceAfter=No
12	gadam	gads	NOUN	ncmsd1	Case=Dat|Gender=Masc|Number=Sing	8	nmod	_	_
13	darbības	darbība	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	14	nmod	_	_
14	laiks	laiks	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	16	nsubj	_	_
15	ir	būt	VERB	vcnipii30an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	16	aux	_	_
16	beidzies	beigties	VERB	vmypdmsnasn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Reflex=Yes|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
17	,	,	PUNCT	zc	_	30	punct	_	_
18	bet	bet	CCONJ	ccs	_	30	cc	_	_
19	jaunais	jauns	ADJ	afmsnyp	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	23	amod	_	_
20	Atkritumu	atkritumi	NOUN	ncmdg1	Case=Gen|Gender=Masc|Number=Ptan	21	nmod	_	_
21	apsaimniekošanas	apsaimniekošana	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	23	nmod	_	_
22	valsts	valsts	NOUN	ncfsg6	Case=Gen|Gender=Fem|Number=Sing	23	nmod	_	_
23	plāns	plāns	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	30	nsubj:pass	_	_
24	2013.	2013.	ADJ	xo	NumType=Ord	27	amod	_	SpaceAfter=No
25	-	-	PUNCT	zd	_	24	flat	_	SpaceAfter=No
26	2020.	2020.	ADJ	xo	NumType=Ord	24	flat	_	SpaceAfter=No
27	gadam	gads	NOUN	ncmsd1	Case=Dat|Gender=Masc|Number=Sing	23	nmod	_	_
28	vēl	vēl	ADV	r0t	_	30	advmod	_	_
29	nav	nebūt	VERB	vcnipii30ay	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	30	aux	_	_
30	apstiprināts	apstiprināt	VERB	vmnpdmsnpsn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	16	conj	_	SpaceAfter=No
31	.	.	PUNCT	zs	_	16	punct	_	_

~~~


