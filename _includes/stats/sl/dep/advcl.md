

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

1165 nodes (1%) are attached to their parents as `advcl`.

674 instances of `advcl` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.06781115879828.

The following 13 pairs of parts of speech are connected with `advcl`: [sl-pos/VERB]()-[sl-pos/VERB]() (837; 72% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (131; 11% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (121; 10% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (20; 2% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (18; 2% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (16; 1% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (9; 1% instances), [sl-pos/VERB]()-[sl-pos/DET]() (5; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (4; 0% instances), [sl-pos/DET]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 advcl	color:blue
1	Juhe	juha	NOUN	Ncfpn	Case=Nom|Gender=Fem|Number=Plur	2	nsubj	_	Dep=2|Rel=Sb
2	teknejo	tekniti	VERB	Vmbr3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
3	,	,	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root
4	če	če	SCONJ	Cs	_	6	mark	_	Dep=6|Rel=Conj
5	jih	on	PRON	Pp3mpa--y	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Variant=Short	6	obj	_	Dep=6|Rel=Obj
6	serviramo	servirati	VERB	Vmbr1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	advcl	_	Dep=2|Rel=AdvO
7	vroče	vroč	ADJ	Agpfpa	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	5	acl	_	Dep=6|Rel=Atr
8	ali	ali	CCONJ	Cc	_	11	cc	_	Dep=11|Rel=Conj
9	pa	pa	CCONJ	Cc	_	6	advmod	_	Dep=0|Rel=Root
10	tudi	tudi	PART	Q	_	6	advmod	_	Dep=0|Rel=Root
11	hladne	hladen	ADJ	Agpfpa	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	7	conj	_	SpaceAfter=No|Dep=7|Rel=Coord
12	.	.	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 8 advcl	color:blue
1	Če	če	SCONJ	Cs	_	3	mark	_	Dep=3|Rel=Conj
2	to	ta	DET	Pd-nsa	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	3	obj	_	Dep=3|Rel=Obj
3	ve	vedeti	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
4	Janša	Janša	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	Dep=3|Rel=Sb
5	in	in	CCONJ	Cc	_	8	cc	_	Dep=7|Rel=Conj
6	če	če	SCONJ	Cs	_	8	mark	_	Dep=7|Rel=Conj
7	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	cop	_	Dep=13|Rel=AdvO
8	pomembno	pomemben	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	13	advcl	_	SpaceAfter=No|Dep=7|Rel=Atr
9	,	,	PUNCT	Z	_	8	punct	_	Dep=0|Rel=Root
10	bom	biti	AUX	Va-f1s-n	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Fut|VerbForm=Fin	13	aux	_	Dep=13|Rel=PPart
11	z	z	ADP	Si	Case=Ins	12	case	_	Dep=12|Rel=Atr
12	veseljem	veselje	NOUN	Ncnsi	Case=Ins|Gender=Neut|Number=Sing	13	obl	_	Dep=13|Rel=AdvM
13	prisluhnil	prisluhniti	VERB	Vmep-sm	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	3	parataxis	_	SpaceAfter=No|Dep=0|Rel=Root
14	.	.	PUNCT	Z	_	3	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 2 advcl	color:blue
1	Ko	ko	SCONJ	Cs	_	2	mark	_	Dep=2|Rel=Conj
2	si	biti	VERB	Va-r2s-n	Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	12	advcl	_	Dep=11|Rel=AdvO
3	enkrat	enkrat	ADV	Rgp	Degree=Pos	2	advmod	_	Dep=2|Rel=AdvO
4	na	na	ADP	Sl	Case=Loc	5	case	_	Dep=5|Rel=Atr
5	vrhu	vrh	NOUN	Ncmsl	Case=Loc|Gender=Masc|Number=Sing	2	obl	_	Dep=2|Rel=AdvO
6	in	in	CCONJ	Cc	_	8	cc	_	Dep=8|Rel=Conj
7	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	8	expl	_	Dep=8|Rel=PPart
8	poškoduješ	poškodovati	VERB	Vmer2s	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	conj	_	SpaceAfter=No|Dep=0|Rel=Root
9	,	,	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root
10	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	13	expl	_	Dep=13|Rel=PPart
11	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	12	cop	_	Dep=0|Rel=Root
12	težko	težek	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	Dep=11|Rel=Atr
13	vrniti	vrniti	VERB	Vmen	Aspect=Perf|VerbForm=Inf	12	csubj	_	SpaceAfter=No|Dep=11|Rel=Sb
14	.	.	PUNCT	Z	_	12	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

225 nodes (1%) are attached to their parents as `advcl`.

152 instances of `advcl` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.66222222222222.

The following 26 pairs of parts of speech are connected with `advcl`: [sl-pos/VERB]()-[sl-pos/VERB]() (127; 56% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (17; 8% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (15; 7% instances), [sl-pos/ADV]()-[sl-pos/VERB]() (14; 6% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (12; 5% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (5; 2% instances), [sl-pos/VERB]()-[sl-pos/ADV]() (5; 2% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (4; 2% instances), [sl-pos/DET]()-[sl-pos/VERB]() (3; 1% instances), [sl-pos/VERB]()-[sl-pos/PART]() (3; 1% instances), [sl-pos/VERB]()-[sl-pos/SCONJ]() (3; 1% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (2; 1% instances), [sl-pos/ADJ]()-[sl-pos/X]() (2; 1% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/AUX]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/CCONJ]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/PROPN]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/SCONJ]() (1; 0% instances), [sl-pos/PART]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 advcl	color:blue
1	na	na	ADP	Sl	Case=Loc	2	case	_	word=na|msd=Dm
2	vrhu	vrh	NOUN	Ncmsl	Case=Loc|Gender=Masc|Number=Sing	3	obl	_	word=vrhu|msd=Somem
3	je	biti	VERB	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	word=je|msd=Gp-ste-n
4	tako	tako	ADV	Rgp	Degree=Pos	7	mark	_	word=tako|msd=Rsn
5	kot	kot	SCONJ	Cs	_	4	fixed	_	word=kot|msd=Vd
6	si	biti	AUX	Va-r2s-n	Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	_	word=si|msd=Gp-sde-n
7	rekla	reči	VERB	Vmep-sf	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	3	advcl	_	word=rekla|msd=Ggdd-ez
8	en	en	NUM	Mlpmsn	Case=Nom|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	9	nummod	_	word=en|msd=Kbzmei
9	šef	šef	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	word=šef|msd=Somei
10	lahko	lahko	ADV	Rgp	Degree=Pos	11	advmod	_	word=lahko|msd=Rsn
11	sta	biti	VERB	Va-r3d-n	Mood=Ind|Number=Dual|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	parataxis	_	word=sta|msd=Gp-std-n
12	tudi	tudi	PART	Q	_	11	advmod	_	word=tudi|msd=L
13	dva	dva	NUM	Mlcmdn	Case=Nom|Gender=Masc|Number=Dual|NumForm=Word|NumType=Card	11	obl	_	word=dva|msd=Kbgmdi

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 advcl	color:blue
1	vsakič	vsakič	ADV	Rgp	Degree=Pos	2	advmod	_	word=vsakič|msd=Rsn
2	znova	znova	ADV	Rgp	Degree=Pos	4	advmod	_	word=znova|msd=Rsn
3	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	cop	_	word=je|msd=Gp-ste-n
4	koristno	koristen	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	word=koristnu|msd=Ppnsei
5	ker	ker	SCONJ	Cs	_	7	mark	_	word=ker|msd=Vd
6	vsakič	vsakič	ADV	Rgp	Degree=Pos	7	advmod	_	word=vsakič|msd=Rsn
7	je	biti	VERB	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	advcl	_	word=je|msd=Gp-ste-n
8	vse	ves	DET	Pg-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	7	nsubj	_	word=vse|msd=Zc-sei
9	znova	znova	ADV	Rgp	Degree=Pos	7	advmod	_	word=znova|msd=Rsn
10	ne	ne	PART	Q	_	7	discourse	_	word=ne|msd=L

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 advcl	color:blue
1	mene	jaz	PRON	Pp1-sa	Case=Acc|Number=Sing|Person=1|PronType=Prs	3	obj	_	word=mene|msd=Zop-et
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	cop	_	word=je|msd=Gp-ste-n
3	strah	strah	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	word=strah|msd=Somei
4	[audience:laughter]	[audience:laughter]	X	X	_	3	punct	_	word=[audience:laughter]|msd=N
5	ker	ker	SCONJ	Cs	_	7	mark	_	word=ker|msd=Vd
6	se	se	PRON	Px------y	PronType=Prs|Variant=Short	7	expl	_	word=se|msd=Zp------k
7	snema	snemati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	advcl	_	word=snema|msd=Ggnste
8	[all:laughter]	[all:laughter]	X	X	_	3	punct	_	word=[all:laughter]|msd=N

~~~


