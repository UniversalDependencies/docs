

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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 expl	color:blue
1	Mislim	misliti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
2	,	,	PUNCT	Z	_	8	punct	_	Dep=0|Rel=Root
3	da	da	SCONJ	Cs	_	8	mark	_	Dep=4|Rel=Conj
4	smo	biti	AUX	Va-r1p-n	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	cop	_	Dep=1|Rel=Obj
5	si	se	PRON	Px---d--y	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	8	expl	_	Dep=4|Rel=PPart
6	sami	sam	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	8	obl	_	Dep=4|Rel=AdvM
7	največji	velik	ADJ	Agsmsny	Case=Nom|Definite=Def|Degree=Sup|Gender=Masc|Number=Sing	8	amod	_	Dep=8|Rel=Atr
8	zaveznik	zaveznik	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	1	ccomp	_	Dep=4|Rel=Atr
9	in	in	CCONJ	Cc	_	12	cc	_	Dep=12|Rel=Conj
10	največji	velik	ADJ	Agsmsny	Case=Nom|Definite=Def|Degree=Sup|Gender=Masc|Number=Sing	12	amod	_	Dep=12|Rel=Atr
11	možni	možen	ADJ	Agpmsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	12	amod	_	Dep=12|Rel=Atr
12	zaviralec	zaviralec	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	8	conj	_	SpaceAfter=No|Dep=8|Rel=Coord
13	.	.	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

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


