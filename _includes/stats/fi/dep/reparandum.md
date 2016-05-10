

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.

17 nodes (0%) are attached to their parents as `reparandum`.

17 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.82352941176471.

The following 7 pairs of parts of speech are connected with `reparandum`: [fi-pos/NOUN]()-[fi-pos/X]() (9; 53% instances), [fi-pos/ADJ]()-[fi-pos/X]() (2; 12% instances), [fi-pos/PRON]()-[fi-pos/X]() (2; 12% instances), [fi-pos/DET]()-[fi-pos/X]() (1; 6% instances), [fi-pos/PROPN]()-[fi-pos/X]() (1; 6% instances), [fi-pos/SCONJ]()-[fi-pos/X]() (1; 6% instances), [fi-pos/VERB]()-[fi-pos/X]() (1; 6% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 reparandum	color:blue
1	ja	ja	CONJ	Pcle,CC	_	4	cc	_	_
2	o-	o-	X	Unknown	_	4	reparandum	_	Alt=4_reparandum|Missed-Rel=attr
3	sulle	sinä	PRON	Pron,Pers,Sg2,All	Case=All|Number=Sing|Person=2|PronType=Prs|Style=Coll	4	nmod	_	_
4	onnea	onni	NOUN	N,Sg,Par	Case=Par|Number=Sing	0	root	_	_
5	kuule	kuule	PART	Pcle	_	4	advmod	_	_
6	kun	kun	SCONJ	Pcle,CS	_	9	mark	_	_
7	sä	sinä	PRON	Pron,Pers,Sg2,Nom	Case=Nom|Number=Sing|Person=2|PronType=Prs|Style=Coll	9	nsubj:cop	_	_
8	olet	olla	VERB	V,Act,Ind,Pres,Sg2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	Missed-Rel=advl
9	anoppi	anoppi	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	4	dep	_	_
10	.	.	PUNCT	Pun	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 57	bgColor:blue
# visual-style 57	fgColor:white
# visual-style 59	bgColor:blue
# visual-style 59	fgColor:white
# visual-style 59 57 reparandum	color:blue
1	Ihan	ihan	PART	Pcle	_	3	advmod	_	_
2	niillä	ne	DET	Pron,Dem,Pl,Ade	Case=Ade|Number=Plur|PronType=Dem	3	det	_	_
3	semmosilla	semmoinen	ADJ	A,Dem,Pl,Ade	Case=Ade|Number=Plur|PronType=Dem|Style=Coll	41	nmod	_	_
4	jotka	joka	PRON	Pron,Rel,Pl,Nom	Case=Nom|Number=Plur|PronType=Rel	6	nsubj	_	_
5	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
6	erikoistunuj	erikoistua	VERB	V,Act,PcpNut,Sg,Nom	Case=Nom|Number=Sing|PartForm=Past|Style=Coll|VerbForm=Part|Voice=Act	3	acl	_	_
7	jonnekkii	jonnekin	ADV	Adv,Qnt	PronType=Ind|Style=Coll	6	advmod	_	_
8	,	,	PUNCT	Pun	_	7	punct	_	_
9	jolla	joka	PRON	Pron,Rel,Sg,Ade	Case=Ade|Number=Sing|PronType=Rel	15	nmod	_	_
10	nyt	nyt	PART	Pcle	_	15	advmod	_	_
11	oj	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Style=Coll|Tense=Pres|VerbForm=Fin|Voice=Act	15	cop	_	_
12	jotkut	joku	DET	Pron,Qnt,Pl,Nom	Case=Nom|Number=Plur|PronType=Ind	14	det	_	_
13	,	,	PUNCT	Pun	_	12	punct	_	_
14	matematiikat	matematiikka	NOUN	N,Pl,Nom	Case=Nom|Number=Plur	15	nsubj:cop	_	_
15	kympit	kymppi	NOUN	N,Pl,Nom	Case=Nom|Number=Plur	6	conj	_	_
16	ja	ja	CONJ	Pcle,CC	_	14	cc	_	_
17	fysiikat	fysiikka	NOUN	N,Pl,Nom	Case=Nom|Number=Plur	14	conj	_	_
18	että	että	SCONJ	Pcle,CS	_	25	mark	_	_
19	,	,	PUNCT	Pun	_	18	punct	_	_
20	mi-	mi-	X	Unknown	_	22	reparandum	_	Alt=22_reparandum|Missed-Rel=attr
21	,	,	PUNCT	Pun	_	20	punct	_	_
22	millä	mikä	PRON	Pron,Rel,Ade	Case=Ade|PronType=Rel	25	nmod	_	_
23	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	25	cop	_	_
24	iha	ihan	PART	Pcle	Style=Coll	25	advmod	_	_
25	selvää	selvä	ADJ	A,Sg,Par	Case=Par|Number=Sing	6	conj	_	_
26	että	että	SCONJ	Pcle,CS	_	30	mark	_	_
27	ne	ne	PRON	Pron,Dem,Pl,Nom	Case=Nom|Number=Plur|PronType=Dem	30	nsubj	_	_
28	pää-	pää-	X	Unknown	_	30	reparandum	_	Alt=30_reparandum|Missed-Rel=attr
29	,	,	PUNCT	Pun	_	28	punct	_	_
30	menee	mennä	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	25	csubj:cop	_	_
31	iham	ihan	PART	Pcle	Style=Coll	32	advmod	_	_
32	minnekkä	minne	ADV	Adv,Rel,Ka	Clitic=Ka|PronType=Rel|Style=Coll	34	advmod	_	_
33	ne	ne	PRON	Pron,Dem,Pl,Nom	Case=Nom|Number=Plur|PronType=Dem	34	nsubj	_	_
34	haluaa	haluta	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	30	advcl	_	_
35	nin	niin	PART	Pcle	Style=Coll	41	mark	_	_
36	ne	ne	PRON	Pron,Dem,Pl,Nom	Case=Nom|Number=Plur|PronType=Dem	41	nsubj	_	_
37	,	,	PUNCT	Pun	_	36	punct	_	_
38	ne	ne	PRON	Pron,Dem,Pl,Nom	Case=Nom|Number=Plur|PronType=Dem	36	conj	_	_
39	,	,	PUNCT	Pun	_	38	punct	_	_
40	ne	ne	PRON	Pron,Dem,Pl,Nom	Case=Nom|Number=Plur|PronType=Dem	36	conj	_	_
41	menee	mennä	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
42	sittes	sitten	ADV	Adv	Style=Coll	41	advmod	_	_
43	sitä	se	DET	Pron,Dem,Sg,Par	Case=Par|Number=Sing|PronType=Dem	44	det	_	_
44	matikkaasal	matikka	NOUN	N,Sg,Par,Px3	Case=Par|Number=Sing|Person[psor]=3|Style=Coll	45	dobj	_	_
45	lukemaan	lukea	VERB	V,Act,InfMa,Ill	Case=Ill|InfForm=3|VerbForm=Inf|Voice=Act	41	xcomp	_	Alt=xcomp
46	taikka	taikka	CONJ	Pcle,CC	_	44	cc	_	_
47	fysiikkaasam	fysiikka	NOUN	N,Sg,Par,Px3	Case=Par|Number=Sing|Person[psor]=3|Style=Coll	44	conj	_	_
48	mutta	mutta	CONJ	Pcle,CC	_	36	cc	_	_
49	,	,	PUNCT	Pun	_	48	punct	_	_
50	semmoset	semmoinen	DET	A,Dem,Pl,Nom	Case=Nom|Number=Plur|PronType=Dem|Style=Coll	51	amod	_	Alt=DET
51	tavalliset	tavallinen	ADJ	A,Pl,Nom	Case=Nom|Number=Plur	52	amod	_	_
52	oppilaat	oppilas	NOUN	N,Pl,Nom	Case=Nom|Number=Plur	36	conj	_	_
53	ketä	kuka	PRON	Pron,Interr,Sg,Par	Case=Par|Number=Sing|PronType=Int	56	nsubj	_	_
54	siellä	siellä	ADV	Adv,Dem	PronType=Dem	56	advmod	_	_
55	nyt	nyt	ADV	Adv	_	56	advmod	_	_
56	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	52	acl	_	_
57	jo-	jo-	X	Unknown	_	59	reparandum	_	Alt=59_reparandum|Missed-Rel=attr
58	,	,	PUNCT	Pun	_	57	punct	_	_
59	mitkä	mikä	PRON	Pron,Interr,Pl,Nom	Case=Nom|Number=Plur|PronType=Int	60	nsubj	_	_
60	yrittää	yrittää	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	56	conj	_	_
61	jotain	jokin	DET	Pron,Qnt,Sg,Par	Case=Par|Number=Sing|PronType=Ind	62	det	_	_
62	keskiarvoo	keskiarvo	NOUN	N,Sg,Par	Case=Par|Number=Sing|Style=Coll	63	dobj	_	_
63	saahak	saada	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|Style=Coll|VerbForm=Inf|Voice=Act	60	xcomp	_	Alt=60_xcomp
64	kovastis	kovasti	ADV	Adv	Style=Coll	60	advmod	_	_
65	seittemääm	seitsemän	NUM	Num,Card,Sg,Ill	Case=Ill|Number=Sing|NumType=Card|Style=Coll	66	nummod	_	_
66	puoleej	puoli	NUM	Num,Card,Sg,Ill	Case=Ill|Number=Sing|NumType=Card|Style=Coll	63	nmod	_	_
67	ja	ja	CONJ	Pcle,CC	_	56	cc	_	_
68	.	.	PUNCT	Pun	_	67	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 24 reparandum	color:blue
1	Niin	niin	PART	Pcle	_	5	advmod	_	_
2	tää	tämä	DET	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem|Style=Coll	4	det	_	_
3	feminismi	feminismi	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	4	goeswith	_	Alt=goeswith
4	sana	sana	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	5	nsubj	_	_
5	tuli	tulla	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	tuli	tulla	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	conj	_	_
7	semmoseen	semmoinen	DET	A,Dem,Sg,Ill	Case=Ill|Number=Sing|PronType=Dem|Style=Coll	8	amod	_	Alt=DET
8	aikaan	aika	NOUN	N,Sg,Ill	Case=Ill|Number=Sing	6	nmod	_	_
9	kun	kun	SCONJ	Pcle,CS	_	14	mark	_	_
10	kun	kun	SCONJ	Pcle,CS	_	9	conj	_	_
11	taas	taas	PART	Pcle	_	14	advmod	_	_
12	esimes	esimerkiksi	ADV	Adv	Style=Coll	13	advmod	_	_
13	Usassa	usa	PROPN	N,Prop,Sg,Ine	Case=Ine|Number=Sing	14	nmod	_	_
14	oli	olla	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	8	acl	_	_
15	tää	tämä	DET	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem|Style=Coll	17	det	_	_
16	radikaali	radikaali	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	17	amod	_	_
17	feminismiliike	feminismiliike	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	14	nsubj	_	_
18	ja	ja	CONJ	Pcle,CC	_	14	cc	_	_
19	se	se	PRON	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	21	dobj	_	_
20	niinku	niinkuin	PART	Pcle	Style=Coll	21	advmod	_	_
21	miellettiin	mieltää	VERB	V,Pass,Ind,Past	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	14	conj	_	_
22	tämmösenä	tämmöinen	DET	A,Dem,Sg,Ess	Case=Ess|Number=Sing|PronType=Dem|Style=Coll	27	amod	_	Alt=DET
23	hyvin	hyvin	ADV	Adv	_	24	advmod	_	_
24	radik-	radik-	X	Unknown	_	25	reparandum	_	Alt=25_reparandum|Missed-Rel=attr
25	radikaalina	radikaali	ADJ	A,Sg,Ess	Case=Ess|Number=Sing	27	amod	_	_
26	radikaalina	radikaali	ADJ	A,Sg,Ess	Case=Ess|Number=Sing	25	conj	_	_
27	käsitteenä	käsite	NOUN	N,Sg,Ess	Case=Ess|Number=Sing	21	nmod	_	_
28	.	.	PUNCT	Pun	_	27	punct	_	_

~~~


