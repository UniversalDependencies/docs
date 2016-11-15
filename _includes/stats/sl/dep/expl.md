

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

2298 nodes (2%) are attached to their parents as `expl`.

2110 instances of `expl` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.78764142732811.

The following 4 pairs of parts of speech are connected with `expl`: [sl-pos/VERB]()-[sl-pos/PRON]() (2292; 100% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (4; 0% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl	color:blue
1	Zdaj	zdaj	ADV	Rgp	Degree=Pos	4	advmod	_	Dep=4|Rel=AdvO
2	sem	biti	AUX	Va-r1s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux	_	Dep=4|Rel=PPart
3	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	4	expl	_	Dep=4|Rel=PPart
4	spomnil	spomniti	VERB	Vmep-sm	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
5	,	,	PUNCT	Z	_	9	punct	_	Dep=0|Rel=Root
6	kam	kam	ADV	Rgp	Degree=Pos	9	advmod	_	Dep=9|Rel=Conj
7	sem	biti	AUX	Va-r1s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	aux	_	Dep=9|Rel=PPart
8	jo	on	PRON	Pp3fsa--y	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Variant=Short	9	dobj	_	Dep=9|Rel=Obj
9	vtaknil	vtakniti	VERB	Vmep-sm	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	4	ccomp	_	SpaceAfter=No|Dep=4|Rel=Obj
10	!	!	PUNCT	Z	_	4	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 expl	color:blue
1	Zadeva	zadeva	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	Dep=2|Rel=Sb
2	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	Dep=0|Rel=Root
3	zapletena	zapleten	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No|Dep=2|Rel=Atr
4	,	,	PUNCT	Z	_	9	punct	_	Dep=0|Rel=Root
5	ker	ker	SCONJ	Cs	_	9	mark	_	Dep=8|Rel=Conj
6	si	se	PRON	Px---d--y	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	9	expl	_	Dep=8|Rel=PPart
7	strokovnjaki	strokovnjak	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	9	nsubj	_	Dep=8|Rel=Sb
8	niso	biti	VERB	Va-r3p-y	Mood=Ind|Negative=Neg|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	Dep=2|Rel=AdvO
9	edini	edin	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	3	advcl	_	Dep=8|Rel=Atr
10	o	o	ADP	Sl	Case=Loc	12	case	_	Dep=12|Rel=Atr
11	njenih	njen	DET	Ps3mplsf	Case=Loc|Gender=Masc|Gender[psor]=Fem|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	12	det	_	Dep=12|Rel=Atr
12	vzrokih	vzrok	NOUN	Ncmpl	Case=Loc|Gender=Masc|Number=Plur	9	nmod	_	SpaceAfter=No|Dep=9|Rel=Obj
13	.	.	PUNCT	Z	_	3	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 24 expl	color:blue
1	Je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	Dep=0|Rel=Root
2	mož	mož	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No|Dep=1|Rel=Atr
3	,	,	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root
4	ki	ki	SCONJ	Cs	_	6	mark	_	Dep=6|Rel=Conj
5	zmeraj	zmeraj	ADV	Rgp	Degree=Pos	6	advmod	_	Dep=6|Rel=AdvO
6	vključi	vključiti	VERB	Vmer3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl	_	Dep=2|Rel=Atr
7	svetilko	svetilka	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	6	dobj	_	Dep=6|Rel=Obj
8	in	in	CONJ	Cc	_	6	cc	_	Dep=10|Rel=Conj
9	jo	on	PRON	Pp3fsa--y	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Variant=Short	10	dobj	_	Dep=10|Rel=Obj
10	podrži	podržati	VERB	Vmer3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	conj	_	Dep=0|Rel=Root
11	v	v	ADP	Sa	Case=Acc	12	case	_	Dep=12|Rel=Atr
12	obraz	obraz	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	10	nmod	_	SpaceAfter=No|Dep=10|Rel=AdvO
13	,	,	PUNCT	Z	_	18	punct	_	Dep=0|Rel=Root
14	ki	ki	SCONJ	Cs	_	18	mark	_	Dep=18|Rel=Conj
15	z	z	ADP	Si	Case=Ins	17	case	_	Dep=17|Rel=Atr
16	zavihanimi	zavihan	ADJ	Appmpi	Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|VerbForm=Part	17	amod	_	Dep=17|Rel=Atr
17	rokavi	rokav	NOUN	Ncmpi	Case=Ins|Gender=Masc|Number=Plur	18	nmod	_	Dep=18|Rel=AdvM
18	štorklja	štorkljati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis	_	Dep=0|Rel=Root
19	po	po	ADP	Sl	Case=Loc	20	case	_	Dep=20|Rel=Atr
20	sobi	soba	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	18	nmod	_	Dep=18|Rel=AdvO
21	in	in	CONJ	Cc	_	18	cc	_	Dep=25|Rel=Conj
22	pri	pri	ADP	Sl	Case=Loc	23	case	_	Dep=23|Rel=Atr
23	katerem	kateri	PRON	Pq-msl	Case=Loc|Gender=Masc|Number=Sing|PronType=Int	18	conj	_	Dep=25|Rel=Atr
24	si	se	PRON	Px---d--y	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	23	expl	_	Dep=25|Rel=PPart
25	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	23	cop	_	Dep=0|Rel=Root
26	treba	treba	ADV	Rgp	Degree=Pos	23	advmod	_	Dep=25|Rel=AdvM
27	kozarec	kozarec	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	30	dobj	_	Dep=30|Rel=Obj
28	vode	voda	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	27	nmod	_	Dep=27|Rel=Atr
29	šele	šele	PART	Q	_	30	advmod	_	Dep=0|Rel=Root
30	zaslužiti	zaslužiti	VERB	Vmen	Aspect=Perf|VerbForm=Inf	23	csubj	_	SpaceAfter=No|Dep=25|Rel=Sb
31	.	.	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

464 nodes (2%) are attached to their parents as `expl`.

423 instances of `expl` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25646551724138.

The following 10 pairs of parts of speech are connected with `expl`: [sl-pos/VERB]()-[sl-pos/PRON]() (436; 94% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (6; 1% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (5; 1% instances), [sl-pos/AUX]()-[sl-pos/PRON]() (4; 1% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (4; 1% instances), [sl-pos/PART]()-[sl-pos/PRON]() (3; 1% instances), [sl-pos/X]()-[sl-pos/PRON]() (3; 1% instances), [sl-pos/ADV]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 expl	color:blue
1	če	če	SCONJ	Cs	_	2	reparandum	_	word=če|msd=Vd
2	če	če	SCONJ	Cs	_	5	mark	_	word=če|msd=Vd
3	ne	ne	PART	Q	_	5	neg	_	word=ne|msd=L
4	boste	biti	AUX	Va-f2p-n	Mood=Ind|Negative=Pos|Number=Plur|Person=2|Tense=Fut|VerbForm=Fin	5	aux	_	word=boste|msd=Gp-pdm-n
5	mogli	moči	VERB	Vmpp-pm	Aspect=Imp|Gender=Masc|Number=Plur|VerbForm=Part	11	advcl	_	word=mogel|msd=Ggnd-mm
6	na	na	ADP	Sa	Case=Acc	7	case	_	word=na|msd=Dt
7	havaje	Havaji	PROPN	Npmpa	Case=Acc|Gender=Masc|Number=Plur	8	nmod	_	word=Havaje|msd=Slmmt
8	priti	priti	VERB	Vmen	Aspect=Perf|VerbForm=Inf	5	xcomp	_	word=prit|msd=Ggdn
9	ne	ne	PART	Q	_	11	neg	_	word=ne|msd=L
10	se	se	PRON	Px------y	PronType=Prs|Variant=Short	11	expl	_	word=se|msd=Zp------k
11	sekirat	sekirati	VERB	Vmpu	Aspect=Imp|VerbForm=Sup	0	root	_	word=sekirat|msd=Ggnm

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 expl	color:blue
1	to	ta	PRON	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	expl	_	word=tov|msd=Zk-sei
2	še	še	PART	Q	_	3	advmod	_	word=še|msd=L
3	mali	mali	ADJ	Agpmsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	word=mali|msd=Ppnmeid
4	bil	biti	VERB	Va-p-sm	Gender=Masc|Number=Sing|VerbForm=Part	3	cop	_	word=bil|msd=Gp-d-em
5	[gap]	[gap]	X	X	_	3	punct	_	word=[gap]|msd=N

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 expl	color:blue
1	skratka	skratka	ADV	Rgp	Degree=Pos	2	cc	_	word=skatka|msd=Rsn
2	dogajal	dogajati	VERB	Vmpp-sm	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	word=dogajov|msd=Ggnd-em
3	se	se	PRON	Px------y	PronType=Prs|Variant=Short	7	expl	_	word=se|msd=Zp------k
4	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	word=je|msd=Gp-ste-n
5	eee	eee	INTJ	I	_	7	discourse:filler	_	word=eee|msd=M
6	galaktičen	galaktičen	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	word=galaktičen|msd=Ppnmein
7	kanibalizem	kanibalizem	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	word=kanibalizem|msd=Somei

~~~


