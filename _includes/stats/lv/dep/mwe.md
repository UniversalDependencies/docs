

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

98 nodes (0%) are attached to their parents as `mwe`.

84 instances of `mwe` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.20408163265306.

The following 15 pairs of parts of speech are connected with `mwe`: [lv-pos/CONJ]()-[lv-pos/CONJ]() (37; 38% instances), [lv-pos/X]()-[lv-pos/X]() (15; 15% instances), [lv-pos/NUM]()-[lv-pos/SCONJ]() (11; 11% instances), [lv-pos/SCONJ]()-[lv-pos/SCONJ]() (11; 11% instances), [lv-pos/PART]()-[lv-pos/PART]() (8; 8% instances), [lv-pos/NOUN]()-[lv-pos/SCONJ]() (3; 3% instances), [lv-pos/ADJ]()-[lv-pos/ADJ]() (2; 2% instances), [lv-pos/ADJ]()-[lv-pos/PUNCT]() (2; 2% instances), [lv-pos/PROPN]()-[lv-pos/X]() (2; 2% instances), [lv-pos/SYM]()-[lv-pos/SYM]() (2; 2% instances), [lv-pos/NUM]()-[lv-pos/NUM]() (1; 1% instances), [lv-pos/NUM]()-[lv-pos/PUNCT]() (1; 1% instances), [lv-pos/SYM]()-[lv-pos/NUM]() (1; 1% instances), [lv-pos/X]()-[lv-pos/ADJ]() (1; 1% instances), [lv-pos/X]()-[lv-pos/PRON]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 mwe	color:blue
1	Bibliotēka	bibliotēka	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	2	nsubjpass	_	_
2	domāta	domāt	VERB	vmnpdfsnpsn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
3	ne	ne	CONJ	ccd_SPLIT_FIRST	_	5	cc	_	_
4	tikai	tikai	CONJ	ccd_SPLIT_PART	_	3	mwe	_	_
5	lasīšanai	lasīšana	NOUN	ncfsd4	Case=Dat|Gender=Fem|Number=Sing	2	iobj	_	SpaceAfter=No
6	,	,	PUNCT	zc	_	5	punct	_	_
7	bet	bet	CONJ	ccd_SPLIT_FIRST	_	5	cc	_	_
8	arī	arī	CONJ	ccd_SPLIT_PART	_	7	mwe	_	_
9	sarunām	saruna	NOUN	ncfpd4	Case=Dat|Gender=Fem|Number=Plur	5	conj	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 mwe	color:blue
1	Nozarē	nozare	NOUN	ncfsl5	Case=Loc|Gender=Fem|Number=Sing	2	nmod	_	_
2	runā	runa	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	zc	_	9	punct	_	_
4	ka	ka	SCONJ	css	_	9	mark	_	_
5	telekomunikāciju	telekomunikācijas	NOUN	ncfdg4	Case=Gen|Gender=Fem|Number=Ptan	6	nmod	_	_
6	tīklus	tīkls	NOUN	ncmpa1	Case=Acc|Gender=Masc|Number=Plur	9	dobj	_	_
7	arvien	arvien	ADV	r0t	_	8	advmod	_	_
8	vairāk	daudz	ADV	rcq	Degree=Cmp	9	advmod	_	_
9	izmanto	izmantot	VERB	vmnipt230an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	_
10	komunikācijai	komunikācija	NOUN	ncfsd4	Case=Dat|Gender=Fem|Number=Sing	9	iobj	_	_
11	no	no	ADP	spsgy	_	12	case	_	_
12	ierīces	ierīces	NOUN	ncfsg5	Case=Gen|Gender=Fem|Number=Sing	10	dep	_	_
13	-	-	PUNCT	zd	_	14	case	_	_
14	ierīci	ierīce	NOUN	ncfsa5	Case=Acc|Gender=Fem|Number=Sing	12	nmod	_	_
15	(	(	PUNCT	zb	_	16	punct	_	SpaceAfter=No
16	machine	machine	X	xf	_	12	parataxis	_	_
17	to	tas	PRON	pd0msan	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	16	mwe	_	_
18	machine	machine	X	xf	_	16	mwe	_	SpaceAfter=No
19	/	/	PUNCT	zx	_	16	punct	_	SpaceAfter=No
20	M2M	M2M	SYM	y	_	16	conj	_	SpaceAfter=No
21	)	)	PUNCT	zb	_	16	punct	_	_
22	un	un	CONJ	ccs	_	9	cc	_	_
23	ka	ka	SCONJ	css	_	34	mark	_	_
24	vietām	vieta	NOUN	ncfpd4	Case=Dat|Gender=Fem|Number=Plur	34	nmod	_	_
25	jau	jau	ADV	r0t	_	34	advmod	_	_
26	ierīču	ierīce	NOUN	ncfpg5	Case=Gen|Gender=Fem|Number=Plur	27	nmod	_	_
27	skaits	skaits	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	34	nsubj	_	SpaceAfter=No
28	,	,	PUNCT	zc	_	30	punct	_	_
29	kas	kas	SCONJ	pr000nn	Case=Nom|PronType=Rel	30	nsubj	_	_
30	lieto	lietot	VERB	vmnipt230an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	26	acl	_	_
31	telekomunikāciju	telekomunikācijas	NOUN	ncfdg4	Case=Gen|Gender=Fem|Number=Ptan	32	nmod	_	_
32	pakalpojumus	pakalpojums	NOUN	ncmpa1	Case=Acc|Gender=Masc|Number=Plur	30	dobj	_	SpaceAfter=No
33	,	,	PUNCT	zc	_	30	punct	_	_
34	pārsniegs	pārsniegt	VERB	vmnift130an	Mood=Ind|Negative=Neg|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	9	conj	_	_
35	cilvēku	cilvēks	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	36	nmod	_	_
36	skaitu	skaits	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	34	dobj	_	SpaceAfter=No
37	,	,	PUNCT	zc	_	39	punct	_	_
38	kas	kas	SCONJ	pr000nn	Case=Nom|PronType=Rel	39	nsubj	_	_
39	izmanto	izmantot	VERB	vmnipt230an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	35	acl	_	_
40	sakaru	sakars	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	41	nmod	_	_
41	tīklu	tīkls	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	39	dobj	_	SpaceAfter=No
42	.	.	PUNCT	zs	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 mwe	color:blue
1	Bet	bet	CONJ	ccs	_	10	discourse	_	_
2	tāpat	tāpat	SCONJ	csc_SPLIT_FIRST	_	4	mark	_	_
3	kā	kā	SCONJ	csc_SPLIT_PART	_	2	mwe	_	_
4	Rīga	Rīga	PROPN	npfsn4	Case=Nom|Gender=Fem|Number=Sing	10	acl	_	SpaceAfter=No
5	,	,	PUNCT	zc	_	4	punct	_	_
6	šīs	šī	DET	pd0fpnn	Case=Nom|Gender=Fem|Number=Plur|PronType=Dem	7	det	_	_
7	lietas	lieta	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	10	nsubj	_	_
8	nekad	nekad	ADV	r0t	PronType=Int,Neg	10	advmod	_	_
9	nav	nebūt	VERB	vcnipii30ay	Mood=Ind|Negative=Pos|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	_	_
10	gatavas	gatava	ADJ	affpnnp	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	0	root	_	SpaceAfter=No
11	.	.	PUNCT	zs	_	10	punct	_	_

~~~


