

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

2069 nodes (2%) are attached to their parents as `expl`.

1904 instances of `expl` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.80086998550024.

The following 4 pairs of parts of speech are connected with `expl`: [sl-pos/VERB]()-[sl-pos/PRON]() (2063; 100% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (4; 0% instances), [sl-pos/DET]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 expl	color:blue
1	Bojim	bati	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
2	pa	pa	CCONJ	Cc	_	1	advmod	_	Dep=0|Rel=Root
3	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	1	expl	_	SpaceAfter=No|Dep=1|Rel=PPart
4	,	,	PUNCT	Z	_	9	punct	_	Dep=0|Rel=Root
5	da	da	SCONJ	Cs	_	9	mark	_	Dep=7|Rel=Conj
6	ne	ne	PART	Q	Polarity=Neg	9	advmod	_	Dep=7|Rel=PPart
7	bodo	biti	AUX	Va-f3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	9	cop	_	Dep=1|Rel=Obj
8	ravno	ravno	PART	Q	_	9	advmod	_	Dep=9|Rel=Atr
9	realni	realen	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	1	ccomp	_	SpaceAfter=No|Dep=7|Rel=Atr
10	.	.	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 expl	color:blue
1	Zadeva	zadeva	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	Dep=2|Rel=Sb
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	cop	_	Dep=0|Rel=Root
3	zapletena	zapleten	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No|Dep=2|Rel=Atr
4	,	,	PUNCT	Z	_	9	punct	_	Dep=0|Rel=Root
5	ker	ker	SCONJ	Cs	_	9	mark	_	Dep=8|Rel=Conj
6	si	se	PRON	Px---d--y	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	9	expl	_	Dep=8|Rel=PPart
7	strokovnjaki	strokovnjak	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	9	nsubj	_	Dep=8|Rel=Sb
8	niso	biti	AUX	Va-r3p-y	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	9	cop	_	Dep=2|Rel=AdvO
9	edini	edin	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	3	advcl	_	Dep=8|Rel=Atr
10	o	o	ADP	Sl	Case=Loc	12	case	_	Dep=12|Rel=Atr
11	njenih	njen	DET	Ps3mplsf	Case=Loc|Gender=Masc|Gender[psor]=Fem|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	12	det	_	Dep=12|Rel=Atr
12	vzrokih	vzrok	NOUN	Ncmpl	Case=Loc|Gender=Masc|Number=Plur	9	obl	_	SpaceAfter=No|Dep=9|Rel=Obj
13	.	.	PUNCT	Z	_	3	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 24 expl	color:blue
1	Je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	cop	_	Dep=0|Rel=Root
2	mož	mož	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No|Dep=1|Rel=Atr
3	,	,	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root
4	ki	ki	SCONJ	Cs	_	6	mark	_	Dep=6|Rel=Conj
5	zmeraj	zmeraj	ADV	Rgp	Degree=Pos	6	advmod	_	Dep=6|Rel=AdvO
6	vključi	vključiti	VERB	Vmer3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl	_	Dep=2|Rel=Atr
7	svetilko	svetilka	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	Dep=6|Rel=Obj
8	in	in	CCONJ	Cc	_	10	cc	_	Dep=10|Rel=Conj
9	jo	on	PRON	Pp3fsa--y	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Variant=Short	10	obj	_	Dep=10|Rel=Obj
10	podrži	podržati	VERB	Vmer3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	conj	_	Dep=0|Rel=Root
11	v	v	ADP	Sa	Case=Acc	12	case	_	Dep=12|Rel=Atr
12	obraz	obraz	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	10	obl	_	SpaceAfter=No|Dep=10|Rel=AdvO
13	,	,	PUNCT	Z	_	18	punct	_	Dep=0|Rel=Root
14	ki	ki	SCONJ	Cs	_	18	mark	_	Dep=18|Rel=Conj
15	z	z	ADP	Si	Case=Ins	17	case	_	Dep=17|Rel=Atr
16	zavihanimi	zavihan	ADJ	Appmpi	Case=Ins|Degree=Pos|Gender=Masc|Number=Plur|VerbForm=Part	17	amod	_	Dep=17|Rel=Atr
17	rokavi	rokav	NOUN	Ncmpi	Case=Ins|Gender=Masc|Number=Plur	18	obl	_	Dep=18|Rel=AdvM
18	štorklja	štorkljati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis	_	Dep=0|Rel=Root
19	po	po	ADP	Sl	Case=Loc	20	case	_	Dep=20|Rel=Atr
20	sobi	soba	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	18	obl	_	Dep=18|Rel=AdvO
21	in	in	CCONJ	Cc	_	23	cc	_	Dep=25|Rel=Conj
22	pri	pri	ADP	Sl	Case=Loc	23	case	_	Dep=23|Rel=Atr
23	katerem	kateri	DET	Pq-msl	Case=Loc|Gender=Masc|Number=Sing|PronType=Int	18	conj	_	Dep=25|Rel=Atr
24	si	se	PRON	Px---d--y	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	23	expl	_	Dep=25|Rel=PPart
25	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	23	cop	_	Dep=0|Rel=Root
26	treba	treba	ADV	Rgp	Degree=Pos	23	advmod	_	Dep=25|Rel=AdvM
27	kozarec	kozarec	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	30	obj	_	Dep=30|Rel=Obj
28	vode	voda	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	27	nmod	_	Dep=27|Rel=Atr
29	šele	šele	PART	Q	_	30	advmod	_	Dep=0|Rel=Root
30	zaslužiti	zaslužiti	VERB	Vmen	Aspect=Perf|VerbForm=Inf	23	csubj	_	SpaceAfter=No|Dep=25|Rel=Sb
31	.	.	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

307 nodes (2%) are attached to their parents as `expl`.

282 instances of `expl` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25732899022801.

The following 9 pairs of parts of speech are connected with `expl`: [sl-pos/VERB]()-[sl-pos/PRON]() (268; 87% instances), [sl-pos/VERB]()-[sl-pos/DET]() (26; 8% instances), [sl-pos/AUX]()-[sl-pos/PRON]() (4; 1% instances), [sl-pos/PART]()-[sl-pos/PRON]() (3; 1% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (2; 1% instances), [sl-pos/ADJ]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/X]()-[sl-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 expl	color:blue
1	eee	eee	INTJ	I	_	6	discourse:filler	_	word=eee|msd=M
2	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	word=to|msd=Zk-sei
3	se	se	PRON	Px------y	PronType=Prs|Variant=Short	6	expl	_	word=se|msd=Zp------k
4	bo	biti	AUX	Va-f3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	6	aux	_	word=bo|msd=Gp-pte-n
5	očitno	očitno	ADV	Rgp	Degree=Pos	6	advmod	_	word=očitno|msd=Rsn
6	razmahnilo	razmahniti	VERB	Vmep-sn	Aspect=Perf|Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	word=razmahnilo|msd=Ggdd-es

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 expl	color:blue
1	jaz	jaz	PRON	Pp1-sn	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	word=jaz|msd=Zop-ei
2	sem	biti	AUX	Va-r1s-n	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	aux	_	word=sem|msd=Gp-spe-n
3	pa	pa	CCONJ	Cc	_	9	advmod	_	word=pa|msd=Vp
4	to	ta	DET	Pd-nsa	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	9	expl	_	word=to|msd=Zk-set
5	že	že	PART	Q	_	9	advmod	_	word=že|msd=L
6	zjutraj	zjutraj	ADV	Rgp	Degree=Pos	9	advmod	_	word=zjutrej|msd=Rsn
7	o	o	ADP	Sl	Case=Loc	8	case	_	word=o|msd=Dm
8	tem	ta	DET	Pd-nsl	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	9	obl	_	word=tem|msd=Zk-sem
9	razglabljal	razglabljati	VERB	Vmpp-sm	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	word=razglablov|msd=Ggnd-em
10	ne	ne	PART	Q	_	9	discourse	_	word=ne|msd=L

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 expl	color:blue
1	se	se	PRON	Px------y	PronType=Prs|Variant=Short	2	expl	_	word=se|msd=Zp------k
2	ni	biti	AUX	Va-r3s-y	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	7	reparandum	_	word=ni|msd=Gp-ste-d
3	se	se	PRON	Px------y	PronType=Prs|Variant=Short	7	expl	_	word=se|msd=Zp------k
4	ni	biti	AUX	Va-r3s-y	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	7	aux	_	word=ni|msd=Gp-ste-d
5	nič	nič	DET	Pz-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Neg	7	nsubj	_	word=nč|msd=Zl-sei
6	na	na	ADP	Sa	Case=Acc	7	case	_	word=na|msd=Dt
7	premaknilo	premakniti	VERB	Vmep-sn	Aspect=Perf|Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	word=premaknl|msd=Ggdd-es
8	ne	ne	PART	Q	_	7	discourse	_	word=ne|msd=L
9	na	na	ADP	Sa	Case=Acc	11	case	_	word=na|msd=Dt
10	drugo	drug	ADJ	Mlpfsa	Case=Acc|Gender=Fem|Number=Sing	11	amod	_	word=drugo|msd=Kbzzet
11	stran	stran	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	7	obl	_	word=stran|msd=Sozet

~~~


