

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

411 nodes (0%) are attached to their parents as `fixed`.

411 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17518248175182.

The following 30 pairs of parts of speech are connected with `fixed`: [sl-pos/ADV]()-[sl-pos/SCONJ]() (107; 26% instances), [sl-pos/DET]()-[sl-pos/SCONJ]() (48; 12% instances), [sl-pos/PART]()-[sl-pos/SCONJ]() (47; 11% instances), [sl-pos/SCONJ]()-[sl-pos/SCONJ]() (43; 10% instances), [sl-pos/CCONJ]()-[sl-pos/SCONJ]() (21; 5% instances), [sl-pos/X]()-[sl-pos/X]() (20; 5% instances), [sl-pos/CCONJ]()-[sl-pos/PART]() (17; 4% instances), [sl-pos/ADV]()-[sl-pos/ADJ]() (16; 4% instances), [sl-pos/PART]()-[sl-pos/PART]() (13; 3% instances), [sl-pos/ADP]()-[sl-pos/NOUN]() (12; 3% instances), [sl-pos/PART]()-[sl-pos/ADV]() (11; 3% instances), [sl-pos/ADV]()-[sl-pos/ADV]() (9; 2% instances), [sl-pos/ADP]()-[sl-pos/SCONJ]() (7; 2% instances), [sl-pos/CCONJ]()-[sl-pos/CCONJ]() (7; 2% instances), [sl-pos/PART]()-[sl-pos/CCONJ]() (6; 1% instances), [sl-pos/ADP]()-[sl-pos/DET]() (4; 1% instances), [sl-pos/DET]()-[sl-pos/PART]() (4; 1% instances), [sl-pos/CCONJ]()-[sl-pos/ADV]() (3; 1% instances), [sl-pos/ADV]()-[sl-pos/DET]() (2; 0% instances), [sl-pos/ADV]()-[sl-pos/PRON]() (2; 0% instances), [sl-pos/PRON]()-[sl-pos/PART]() (2; 0% instances), [sl-pos/SCONJ]()-[sl-pos/PART]() (2; 0% instances), [sl-pos/ADV]()-[sl-pos/PART]() (1; 0% instances), [sl-pos/ADV]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/SCONJ]()-[sl-pos/X]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Tako	tako	ADV	Rgp	Degree=Pos	3	mark	_	Dep=3|Rel=Conj
2	kot	kot	SCONJ	Cs	_	1	fixed	_	Dep=1|Rel=MWU
3	ni	biti	VERB	Va-r3s-y	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
4	pravice	pravica	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	3	nsubj	_	Dep=3|Rel=Sb
5	in	in	CCONJ	Cc	_	6	cc	_	Dep=6|Rel=Conj
6	resnice	resnica	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	4	conj	_	Dep=4|Rel=Coord
7	v	v	ADP	Sl	Case=Loc	9	case	_	Dep=9|Rel=Atr
8	absolutnem	absoluten	ADJ	Agpmsl	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	Dep=9|Rel=Atr
9	smislu	smisel	NOUN	Ncmsl	Case=Loc|Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No|Dep=6|Rel=Atr
10	.	.	PUNCT	Z	_	3	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 fixed	color:blue
1	Ugotavljava	ugotavljati	VERB	Vmpr1d	Aspect=Imp|Mood=Ind|Number=Dual|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
2	,	,	PUNCT	Z	_	4	punct	_	Dep=0|Rel=Root
3	da	da	SCONJ	Cs	_	4	mark	_	Dep=4|Rel=Conj
4	bo	biti	VERB	Va-f3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	1	ccomp	_	Dep=1|Rel=Obj
5	do	do	ADP	Sg	Case=Gen	6	case	_	Dep=6|Rel=Atr
6	vrha	vrh	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	4	obl	_	Dep=4|Rel=AdvO
7	"	"	PUNCT	Z	_	8	punct	_	SpaceAfter=No|Dep=0|Rel=Root
8	nekaj	nekaj	DET	Rgp	PronType=Ind	10	advmod	_	SpaceAfter=No|Dep=10|Rel=Atr
9	"	"	PUNCT	Z	_	8	punct	_	Dep=0|Rel=Root
10	več	več	DET	Rgc	PronType=Ind	13	advmod	_	Dep=13|Rel=Atr
11	kot	kot	SCONJ	Cs	_	10	fixed	_	Dep=13|Rel=Atr
12	pet	pet	NUM	Mlc-pn	Case=Nom|Number=Plur|NumForm=Word|NumType=Card	13	nummod	_	Dep=13|Rel=Atr
13	raztežajev	raztežaj	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	4	nsubj	_	SpaceAfter=No|Dep=4|Rel=Sb
14	.	.	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Korak	korak	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	SpaceAfter=No|Dep=8|Rel=Sb
2	,	,	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root
3	že	že	PART	Q	_	6	mark	_	Dep=6|Rel=Conj
4	ko	ko	SCONJ	Cs	_	3	fixed	_	Dep=3|Rel=MWU
5	ga	on	PRON	Pp3msa--y	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Variant=Short	6	obj	_	Dep=6|Rel=Obj
6	stopaš	stopati	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	8	advcl	_	SpaceAfter=No|Dep=8|Rel=AdvO
7	,	,	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root
8	tone	toniti	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
9	v	v	ADP	Sa	Case=Acc	10	case	_	Dep=10|Rel=Atr
10	preteklost	preteklost	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No|Dep=8|Rel=AdvO
11	.	.	PUNCT	Z	_	8	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

205 nodes (1%) are attached to their parents as `fixed`.

205 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.04390243902439.

The following 30 pairs of parts of speech are connected with `fixed`: [sl-pos/CCONJ]()-[sl-pos/SCONJ]() (34; 17% instances), [sl-pos/CCONJ]()-[sl-pos/CCONJ]() (33; 16% instances), [sl-pos/ADV]()-[sl-pos/PART]() (25; 12% instances), [sl-pos/ADV]()-[sl-pos/SCONJ]() (22; 11% instances), [sl-pos/PART]()-[sl-pos/ADV]() (18; 9% instances), [sl-pos/ADV]()-[sl-pos/ADP]() (12; 6% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (9; 4% instances), [sl-pos/PART]()-[sl-pos/SCONJ]() (6; 3% instances), [sl-pos/DET]()-[sl-pos/SCONJ]() (5; 2% instances), [sl-pos/ADP]()-[sl-pos/SCONJ]() (4; 2% instances), [sl-pos/ADV]()-[sl-pos/ADJ]() (4; 2% instances), [sl-pos/NUM]()-[sl-pos/NUM]() (4; 2% instances), [sl-pos/PART]()-[sl-pos/PART]() (4; 2% instances), [sl-pos/X]()-[sl-pos/X]() (3; 1% instances), [sl-pos/ADP]()-[sl-pos/DET]() (2; 1% instances), [sl-pos/ADV]()-[sl-pos/PRON]() (2; 1% instances), [sl-pos/ADV]()-[sl-pos/VERB]() (2; 1% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (2; 1% instances), [sl-pos/SCONJ]()-[sl-pos/SCONJ]() (2; 1% instances), [sl-pos/VERB]()-[sl-pos/SCONJ]() (2; 1% instances), [sl-pos/ADP]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/ADV]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/CCONJ]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/CCONJ]()-[sl-pos/PART]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/PART]()-[sl-pos/CCONJ]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/PROPN]() (1; 0% instances), [sl-pos/SCONJ]()-[sl-pos/CCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	tako	tako	CCONJ	Cc	_	3	cc	_	word=tak|msd=Vp
2	da	da	SCONJ	Cs	_	1	fixed	_	word=da|msd=Vd
3	pazi	paziti	VERB	Vmpm2s	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	word=pazi|msd=Ggnvde

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 fixed	color:blue
1	recimo	reči	VERB	Vmem1p	Aspect=Perf|Mood=Imp|Number=Plur|Person=1|VerbForm=Fin	3	parataxis:discourse	_	word=recimo|msd=Ggdvpm
2	eee	eee	INTJ	I	_	3	discourse:filler	_	word=eee|msd=M
3	čevlje	čevelj	NOUN	Ncmpa	Case=Acc|Gender=Masc|Number=Plur	0	root	_	word=čevle|msd=Sommt
4	nogavice	nogavica	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	3	conj	_	word=nogavice|msd=Sozmt
5	ali	ali	CCONJ	Cc	_	7	cc	_	word=ali|msd=Vp
6	pa	pa	CCONJ	Cc	_	5	fixed	_	word=pa|msd=Vp
7	kravato	kravata	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	3	conj	_	word=kravato|msd=Sozet
8	jaz	jaz	PRON	Pp1-sn	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	word=jz|msd=Zop-ei
9	sem	biti	VERB	Va-r1s-n	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	parataxis	_	word=sem|msd=Gp-spe-n
10	rec	_	X	Xt	_	9	reparandum	_	word=rec|msd=Nt
11	[gap]	[gap]	X	X	_	3	punct	_	word=[gap]|msd=N

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 fixed	color:blue
1	tu	tu	ADV	Rgp	Degree=Pos	0	root	_	word=tu|msd=Rsn
2	[gap]	[gap]	X	X	_	1	punct	_	word=[gap]|msd=N
3	ko	ko	SCONJ	Cs	_	4	mark	_	word=ko|msd=Vd
4	greš	iti	VERB	Vmbr2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	1	parataxis	_	word=greš|msd=Ggvsde
5	v	v	ADP	Sa	Case=Acc	6	case	_	word=v|msd=Dt
6	šolo	šola	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	4	obl	_	word=šolo|msd=Sozet
7	pa	pa	CCONJ	Cc	_	10	cc	_	word=pa|msd=Vp
8	si	biti	AUX	Va-r2s-n	Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	cop	_	word=si|msd=Gp-sde-n
9	prvič	prvič	ADV	Rgp	Degree=Pos	10	advmod	_	word=prvič|msd=Rsn
10	ocenjen	ocenjen	ADJ	Appmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part	4	conj	_	word=ocenjen|msd=Pdnmein
11	recimo	reči	VERB	Vmem1p	Aspect=Perf|Mood=Imp|Number=Plur|Person=1|VerbForm=Fin	4	parataxis:discourse	_	word=recimo|msd=Ggdvpm
12	a	a	ADV	Rgp	Degree=Pos	4	discourse	_	word=a|msd=Rsn
13	ne	ne	PART	Q	_	12	fixed	_	word=ne|msd=L

~~~


