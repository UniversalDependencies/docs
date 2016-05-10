

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

5 nodes (0%) are attached to their parents as `neg`.

5 instances of `neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2.

The following 5 pairs of parts of speech are connected with `neg`: [lv-pos/ADJ]()-[lv-pos/PART]() (1; 20% instances), [lv-pos/ADV]()-[lv-pos/PART]() (1; 20% instances), [lv-pos/NUM]()-[lv-pos/PART]() (1; 20% instances), [lv-pos/PRON]()-[lv-pos/PART]() (1; 20% instances), [lv-pos/PROPN]()-[lv-pos/PART]() (1; 20% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 20 neg	color:blue
1	Kad	kad	ADV	r0t	PronType=Int	4	advmod	_	_
2	beidzot	beidzot	ADV	r0t	_	4	advmod	_	_
3	tomēr	tomēr	PART	qs	_	4	discourse	_	_
4	sāka	sākt	VERB	vpnist130an	Mood=Ind|Negative=Neg|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	15	advcl	_	_
5	parādīties	parādīties	VERB	vmyn0t3000n	Negative=Neg|Reflex=Yes|VerbForm=Inf	4	xcomp	_	_
6	valstij	valsts	NOUN	ncfsd6	Case=Dat|Gender=Fem|Number=Sing	7	iobj	_	_
7	piederošās	piederēt	VERB	vmnpdfsgapy	Aspect=Imp|Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Pass	8	amod	_	_
8	bankas	banka	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	9	nmod	_	_
9	bilances	bilance	NOUN	ncfsg5	Case=Gen|Gender=Fem|Number=Sing	10	nmod	_	_
10	pārvērtēšanas	pārvērtēšana	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	11	nmod	_	_
11	rezultāti	rezultāts	NOUN	ncmpn1	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	SpaceAfter=No
12	,	,	PUNCT	zc	_	4	punct	_	_
13	no	no	ADP	spsgy	_	14	case	_	_
14	bilances	bilance	NOUN	ncfsg5	Case=Gen|Gender=Fem|Number=Sing	16	nmod	_	_
15	izrādījās	izrādīties	VERB	veyisi330an	Mood=Ind|Negative=Neg|Person=3|Reflex=Yes|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
16	pazuduši	pazust	VERB	vmnpdmpnasn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	15	xcomp	_	_
17	pāris	pāris	ADJ	armpnnp	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	18	amod	_	_
18	miljardi	miljards	NUM	mcsmpnr	Case=Nom|Gender=Masc|Number=Plur|NumType=Card	15	nsubj	_	_
19	(	(	PUNCT	zb	_	21	punct	_	SpaceAfter=No
20	ne	ne	PART	qs	_	21	neg	_	_
21	miljonu	Miljons	PROPN	npmpg1	Case=Gen|Gender=Masc|Number=Plur	18	parataxis	_	SpaceAfter=No
22	)	)	PUNCT	zb	_	21	punct	_	_
23	latu	lats	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	18	nmod	_	SpaceAfter=No
24	.	.	PUNCT	zs	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 neg	color:blue
1	Tāpat	tāpat	PART	qs	_	4	discourse	_	_
2	viņš	viņš	PRON	pp3msnn	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
3	arī	arī	PART	qs	_	4	discourse	_	_
4	norādīja	norādīt	VERB	vmnist330an	Mood=Ind|Negative=Neg|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	zc	_	10	punct	_	_
6	ka	ka	SCONJ	css	_	10	mark	_	_
7	2013.	2013.	ADJ	xo	NumType=Ord	8	amod	_	SpaceAfter=No
8	gada	gads	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	9	nmod	_	_
9	peļņa	peļņa	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	_
10	varētu	varēt	VERB	vonc0t300an	Mood=Cnd|Negative=Neg|VerbForm=Fin|Voice=Act	4	ccomp	_	_
11	būt	būt	VERB	vcnn0ii000n	Negative=Neg|VerbForm=Inf	13	aux	_	_
12	ne	ne	PART	qs	_	13	neg	_	_
13	mazāka	maza	ADJ	affsnnc	Case=Nom|Degree=Cmp|Gender=Fem|Number=Sing	10	xcomp	_	_
14	par	par	ADP	sppdn	_	16	case	_	_
15	12	12	NUM	xn	NumType=Card	16	nummod	_	_
16	miljoniem	miljons	NUM	mcsmpdm	Case=Dat|Gender=Masc|Number=Plur|NumType=Card	13	iobj	_	_
17	latu	lats	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	16	nmod	_	SpaceAfter=No
18	,	,	PUNCT	zc	_	20	punct	_	_
19	ko	kas	SCONJ	pr000an	Case=Acc|PronType=Rel	21	dobj	_	_
20	varētu	varēt	VERB	vonc0t300an	Mood=Cnd|Negative=Neg|VerbForm=Fin|Voice=Act	10	advcl	_	_
21	veicināt	veicināt	VERB	vmnn0t3000n	Negative=Neg|VerbForm=Inf	20	xcomp	_	_
22	ar	ar	ADP	spsan	_	25	case	_	_
23	produktu	produkts	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	24	nmod	_	_
24	portfeļa	portfelis	NOUN	ncmsg2	Case=Gen|Gender=Masc|Number=Sing	25	nmod	_	_
25	papildināšanu	papildināšana	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	20	dobj	_	_
26	un	un	CONJ	ccs	_	25	cc	_	_
27	jaunu	jauns	ADJ	afmpgnp	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	29	amod	_	_
28	tirgu	tirgus	NOUN	ncmpg3	Case=Gen|Gender=Masc|Number=Plur	29	nmod	_	_
29	apguvi	apguve	NOUN	ncfsa5	Case=Acc|Gender=Fem|Number=Sing	25	conj	_	SpaceAfter=No
30	.	.	PUNCT	zs	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 neg	color:blue
1	Tas	tas	PRON	pd0msnn	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	15	acl	_	SpaceAfter=No
2	,	,	PUNCT	zc	_	8	punct	_	_
3	ka	ka	SCONJ	css	_	8	mark	_	_
4	Andrim	Andris	PROPN	npmsd2	Case=Dat|Gender=Masc|Number=Sing	8	nmod	_	_
5	Grūtupam	Grūtups	PROPN	npmsd1	Case=Dat|Gender=Masc|Number=Sing	4	name	_	_
6	ne	ne	PART	qs	_	7	neg	_	_
7	visai	visai	ADV	r0q	_	8	advmod	_	_
8	patīk	patikt	VERB	vmnipi130an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	_
9	filozofisks	filozofisks	ADJ	armsnnp	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	_
10	piegājiens	piegājiens	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
11	viņa	viņš	PRON	pp3msgn	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	det	_	_
12	personības	personība	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	13	nmod	_	_
13	aprakstam	apraksts	NOUN	ncmsd1	Case=Dat|Gender=Masc|Number=Sing	8	iobj	_	SpaceAfter=No
14	,	,	PUNCT	zc	_	8	punct	_	_
15	pārliecinājos	pārliecināties	VERB	vmyisi31san	Mood=Ind|Negative=Neg|Number=Sing|Person=1|Reflex=Yes|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
16	sarunā	saruna	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	15	nmod	_	_
17	ar	ar	ADP	sppdn	_	19	case	_	_
18	grāmatas	grāmata	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	19	nmod	_	_
19	varoni	varonis	NOUN	ncmsa2	Case=Acc|Gender=Masc|Number=Sing	15	dobj	_	SpaceAfter=No
20	.	.	PUNCT	zs	_	15	punct	_	_

~~~


