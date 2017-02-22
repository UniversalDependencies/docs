

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian)

This relation is universal.

167 nodes (3%) are attached to their parents as `parataxis`.

90 instances of `parataxis` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.40119760479042.

The following 37 pairs of parts of speech are connected with `parataxis`: [lt-pos/VERB]()-[lt-pos/VERB]() (37; 22% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (16; 10% instances), [lt-pos/NOUN]()-[lt-pos/NOUN]() (15; 9% instances), [lt-pos/VERB]()-[lt-pos/NOUN]() (12; 7% instances), [lt-pos/VERB]()-[lt-pos/ADV]() (10; 6% instances), [lt-pos/VERB]()-[lt-pos/PART]() (10; 6% instances), [lt-pos/ADJ]()-[lt-pos/VERB]() (6; 4% instances), [lt-pos/NOUN]()-[lt-pos/PART]() (6; 4% instances), [lt-pos/VERB]()-[lt-pos/INTJ]() (6; 4% instances), [lt-pos/VERB]()-[lt-pos/ADJ]() (5; 3% instances), [lt-pos/ADJ]()-[lt-pos/NOUN]() (4; 2% instances), [lt-pos/ADV]()-[lt-pos/ADV]() (3; 2% instances), [lt-pos/ADV]()-[lt-pos/VERB]() (3; 2% instances), [lt-pos/NOUN]()-[lt-pos/ADJ]() (3; 2% instances), [lt-pos/NOUN]()-[lt-pos/ADV]() (3; 2% instances), [lt-pos/NOUN]()-[lt-pos/PRON]() (3; 2% instances), [lt-pos/VERB]()-[lt-pos/ADP]() (3; 2% instances), [lt-pos/PART]()-[lt-pos/VERB]() (2; 1% instances), [lt-pos/VERB]()-[lt-pos/PROPN]() (2; 1% instances), [lt-pos/ADJ]()-[lt-pos/ADJ]() (1; 1% instances), [lt-pos/ADJ]()-[lt-pos/ADP]() (1; 1% instances), [lt-pos/ADJ]()-[lt-pos/ADV]() (1; 1% instances), [lt-pos/ADJ]()-[lt-pos/PART]() (1; 1% instances), [lt-pos/ADV]()-[lt-pos/ADJ]() (1; 1% instances), [lt-pos/ADV]()-[lt-pos/NOUN]() (1; 1% instances), [lt-pos/AUX]()-[lt-pos/VERB]() (1; 1% instances), [lt-pos/INTJ]()-[lt-pos/PART]() (1; 1% instances), [lt-pos/NOUN]()-[lt-pos/PROPN]() (1; 1% instances), [lt-pos/NOUN]()-[lt-pos/SCONJ]() (1; 1% instances), [lt-pos/PART]()-[lt-pos/PROPN]() (1; 1% instances), [lt-pos/PRON]()-[lt-pos/NOUN]() (1; 1% instances), [lt-pos/PROPN]()-[lt-pos/ADV]() (1; 1% instances), [lt-pos/PUNCT]()-[lt-pos/NOUN]() (1; 1% instances), [lt-pos/PUNCT]()-[lt-pos/PART]() (1; 1% instances), [lt-pos/VERB]()-[lt-pos/PRON]() (1; 1% instances), [lt-pos/VERB]()-[lt-pos/X]() (1; 1% instances), [lt-pos/X]()-[lt-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 parataxis	color:blue
1	Kiti	kitas	PRON	WPA	Case=Nom|Gender=Masc|Number=Plur	11	nsubj	_	other|_
2	,	,	PUNCT	PUNCT	_	4	punct	_	,|_
3	kaip	kaip	SCONJ	UH	_	4	mark	_	how|_
4	žinoma	žinoti	VERB	VBNL	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Part|Voice=Pass	11	parataxis	_	of course|_
5	,	,	PUNCT	PUNCT	_	4	punct	_	,|_
6	aiškios	aiškus	ADJ	JJL	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	obviuos|_
7	tautinės	tautinis	ADJ	JJL	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	ethnic|_
8	sąmonės	sąmonė	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	11	obj	_	consciousness|_
9	iš	iš	ADP	UH	_	10	case	_	from|_
10	vis	vis	ADV	RB	Degree=Pos	11	obl	_	still|_
11	neturėjo	turėti	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Reflex=No|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	have|_
12	.	.	PUNCT	PUNCT	_	11	punct	_	.|_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 parataxis	color:blue
1	Autorius	autorius	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	author|Case=Acc|Gender=Masc|Number=Plur
2	aiškiai	aiškiai	ADV	RB	Degree=Pos	5	advmod	_	clearly|_
3	yra	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	be|_
4	Strepsiado	Strepsiadas	PROPN	NNP	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	Strepsiade|_
5	pusėje	pusė	NOUN	NN	Case=Loc|Gender=Fem|Number=Sing	0	root	_	half|_
6	–	–	PUNCT	PUNCT	_	10	punct	_	–|_
7	taip	taip	ADV	RB	Degree=Pos	10	advmod	_	so|_
8	Sokratui	Sokratas	PROPN	NNP	Case=Dat|Gender=Masc|Number=Sing	10	obj	_	Socrates|_
9	ir	ir	PART	UH	_	10	advmod	_	even|_
10	reikia	reikėti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	5	parataxis	_	deserve|_
11	.	.	PUNCT	PUNCT	_	5	punct	_	.|_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 parataxis	color:blue
1	Be	Be	ADP	UH	_	2	case	_	without|_
2	abejonės	abejonė	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	7	parataxis	_	doubts|_
3	,	,	PUNCT	PUNCT	_	2	punct	_	,|_
4	lietuviai	lietuvis	ADJ	JJL	Case=Dat|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	7	nsubj	_	Lithianian|_
5	nėra	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	be|_
6	žydšaudžių	žydšaudys	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	7	amod	_	Jew-shooter|_
7	tauta	tauta	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	0	root	_	nation|_
8	.	.	PUNCT	PUNCT	_	7	punct	_	.|_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is universal.

10 nodes (0%) are attached to their parents as `parataxis`.

9 instances of `parataxis` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.

The following 4 pairs of parts of speech are connected with `parataxis`: [lt-pos/PART]()-[lt-pos/VERB]() (7; 70% instances), [lt-pos/PRON]()-[lt-pos/VERB]() (1; 10% instances), [lt-pos/PUNCT]()-[lt-pos/VERB]() (1; 10% instances), [lt-pos/VERB]()-[lt-pos/VERB]() (1; 10% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis	color:blue
1	ir	ir	PART	Qg	_	0	root	_	_
2	apskritai	apskritai	ADV	Rgp	Degree=Pos	1	dep:par	_	_
3	–	–	PUNCT	PUNCT	_	2	punct	_	_
4	literatūra	literatūra	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	5	dep:sub	_	_
5	nesivelka	nesivilkti	VERB	Vgmp3s--y--yi-	Mood=Imp|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
6	įkandin	įkandin	ADP	Sgg	AdpType=Prep	8	case	_	_
7	popmuzikos	popmuzika	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	8	dep:obj_co	_	_
8	ar	ar	CCONJ	Cg	_	5	cc	_	_
9	kino	kinas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	8	dep:obj_co	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 5 parataxis	color:blue
1	„	„	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No
2	Savo	savęs	PRON	Pg--gn	Case=Nom|PronType=Tot	3	nmod	_	_
3	kompetencijos	kompetencija	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
4	ribose	riba	NOUN	Ncfpln-	Case=Loc|Gender=Fem|Number=Plur	5	dep:adj	_	_
5	atsakysime	atsakyti	VERB	Vgmf1p--n--ni-	Mood=Imp|Number=Plur|Person=1|Polarity=Pos|Tense=Fut|VerbForm=Fin	11	parataxis	_	_
6	į	į	ADP	Sga	AdpType=Prep	8	case	_	_
7	premjero	premjeras	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	_
8	raštą	raštas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	5	obj	_	_
9	“	“	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	11	punct	_	_
11	-	-	PUNCT	PUNCT	_	12	punct	_	_
12	žadėjo	žadėti	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	0	root	_	_
13	STT	STT	X	Ya	Abbr=Yes	14	nmod	_	_
14	vadovas	vadovas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	12	dep:sub	_	SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	12	punct	_	_
16	užsiminė	užsiminti	VERB	Vgma3s--n--yi--	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	12	dep:pred_co	_	SpaceAfter=No
17	,	,	PUNCT	PUNCT	_	22	punct	_	_
18	kad	kad	CCONJ	Cg	_	22	mark	_	_
19	šioje	šis	PRON	Pgfsln	Case=Nom|PronType=Tot	20	nmod	_	_
20	situacijoje	situacija	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	22	dep:adj	_	_
21	daugiau	daug	ADV	Rgc	Degree=Cmp	22	dep:adj	_	_
22	eina	eiti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	16	dep:pred_obj_co	_	_
23	kalba	kalba	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	22	dep:sub	_	_
24	ne	ne	PART	Qg	_	26	dep:aux	_	_
25	apie	apie	ADP	Sga	AdpType=Prep	29	case	_	_
26	baudžiamąją	bausti	VERB	Vgpp-sfpnyan-p	Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	27	acl	_	_
27	atsakomybę	atsakomybė	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	29	dep:obj_co	_	SpaceAfter=No
28	,	,	PUNCT	PUNCT	_	23	punct	_	_
29	o	o	CCONJ	Cg	_	23	cc	_	_
30	derybinės	derybinis	ADJ	Agpfsgn	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	31	amod	_	_
31	grupės	grupė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	32	nmod	_	_
32	pavedimų	pavedimas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	33	obj	_	_
33	nevykdymą	nevykdymas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	29	dep:obj_co	_	SpaceAfter=No
34	,	,	PUNCT	PUNCT	_	22	punct	_	_
35	ir	ir	CCONJ	Cg	_	22	mark	_	_
36	būtent	būtent	PART	Qg	_	37	dep:aux	_	_
37	ji	jis	PRON	Pgfsnn	Case=Nom|PronType=Tot	38	dep:sub	_	_
38	galės	galėti	VERB	Vgmf3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	22	dep:pred_obj_co	_	_
39	spręsti	spręsti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	38	dep:predv	_	_
40	dėl	dėl	ADP	Sgg	AdpType=Prep	41	case	_	_
41	atsakomybės	atsakomybė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	39	obj	_	_
42	už	už	ADP	Sga	AdpType=Prep	44	case	_	_
43	jų	jis	PRON	Pgmpgn	Case=Nom|PronType=Tot	44	nmod	_	_
44	nevykdymą	nevykdymas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	41	obj	_	SpaceAfter=No
45	.	.	PUNCT	PUNCT	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 18 parataxis	color:blue
1	Labiausiai	labai	ADV	Rgs	Degree=Sup	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	5	punct	_	_
3	kad	kad	CCONJ	Cg	_	5	mark	_	_
4	elektrinė	elektrinė	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	5	dep:sub	_	_
5	turės	turėti	VERB	Vgmf3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	1	dep:pred_sub	_	_
6	du	du	NUM	Mcm-aln	Case=Acc|Gender=Masc|NumForm=Word|NumType=Card	7	nummod	_	_
7	blokus	blokas	NOUN	Ncmpan-	Case=Acc|Gender=Masc|Number=Plur	5	obj	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	12	punct	_	_
9	kurių	kuris	PRON	Pgmpgn	Case=Nom|PronType=Tot	11	nmod	_	_
10	bendras	bendras	ADJ	Agpmsnn	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	_
11	galingumas	galingumas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	12	dep:sub	_	_
12	sieks	siekti	VERB	Vgmf3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	7	dep:pred_atr	_	_
13	3200	3200	NUM	M----d-	NumForm=Digit	12	dep:adj	_	_
14	MW	MW	X	Ya	Abbr=Yes	13	nmod	_	_
15	(	(	PUNCT	PUNCT	_	18	punct	_	SpaceAfter=No
16	atsargesnis	atsargus	ADJ	Agcmsnn	Case=Nom|Degree=Cmp|Gender=Masc|Number=Sing	17	amod	_	_
17	variantas	variantas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	18	dep:sub	_	_
18	buvo	būti	VERB	Vgma3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	12	parataxis	_	_
19	2000	2000	NUM	M----d-	NumForm=Digit	18	dep:adj	_	_
20	MW	MW	X	Ya	Abbr=Yes	19	nmod	_	SpaceAfter=No
21	)	)	PUNCT	PUNCT	_	18	punct	_	SpaceAfter=No
22	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


