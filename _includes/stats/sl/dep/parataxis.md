

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

1483 nodes (1%) are attached to their parents as `parataxis`.

1295 instances of `parataxis` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.2265677680378.

The following 20 pairs of parts of speech are connected with `parataxis`: [sl-pos/VERB]()-[sl-pos/VERB]() (876; 59% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (158; 11% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (99; 7% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (94; 6% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (85; 6% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (59; 4% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (25; 2% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (22; 1% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (16; 1% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (14; 1% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (11; 1% instances), [sl-pos/ADJ]()-[sl-pos/PROPN]() (8; 1% instances), [sl-pos/PROPN]()-[sl-pos/VERB]() (4; 0% instances), [sl-pos/DET]()-[sl-pos/VERB]() (3; 0% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (3; 0% instances), [sl-pos/NOUN]()-[sl-pos/NUM]() (2; 0% instances), [sl-pos/PRON]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 parataxis	color:blue
1	Kolikor	kolikor	SCONJ	Cs	_	2	mark	_	Dep=2|Rel=Conj
2	vem	vedeti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
3	,	,	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root
4	pa	pa	CCONJ	Cc	_	5	advmod	_	Dep=0|Rel=Root
5	imajo	imeti	VERB	Vmpr3p-n	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	parataxis	_	Dep=0|Rel=Root
6	tudi	tudi	PART	Q	_	5	advmod	_	Dep=0|Rel=Root
7	v	v	ADP	Sl	Case=Loc	8	case	_	Dep=8|Rel=Atr
8	EU	EU	PROPN	Npfsl	Case=Loc|Gender=Fem|Number=Sing	5	obl	_	Dep=5|Rel=AdvO
9	še	še	PART	Q	_	5	advmod	_	Dep=0|Rel=Root
10	vedno	vedno	ADV	Rgp	Degree=Pos	5	advmod	_	Dep=5|Rel=AdvO
11	težave	težava	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	5	obj	_	Dep=5|Rel=Obj
12	z	z	ADP	Si	Case=Ins	13	case	_	Dep=13|Rel=Atr
13	mikročipi	mikročip	NOUN	Ncmpi	Case=Ins|Gender=Masc|Number=Plur	11	nmod	_	SpaceAfter=No|Dep=11|Rel=Atr
14	.	.	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 parataxis	color:blue
1	Toda	toda	CCONJ	Cc	_	4	cc	_	Dep=2|Rel=Conj
2	bil	biti	AUX	Va-p-sm	Gender=Masc|Number=Sing|VerbForm=Part	4	cop	_	Dep=0|Rel=Root
3	sem	biti	AUX	Va-r1s-n	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	Dep=2|Rel=PPart
4	suh	suh	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No|Dep=2|Rel=Atr
5	,	,	PUNCT	Z	_	11	punct	_	Dep=0|Rel=Root
6	poleg	poleg	ADP	Sg	Case=Gen	7	case	_	Dep=7|Rel=Atr
7	tega	ta	DET	Pd-nsg	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	11	obl	_	Dep=11|Rel=AdvO
8	pa	pa	CCONJ	Cc	_	11	advmod	_	Dep=0|Rel=Root
9	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	11	expl	_	Dep=11|Rel=PPart
10	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	aux	_	Dep=11|Rel=PPart
11	poročila	poročiti	VERB	Vmep-sf	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	4	parataxis	_	Dep=0|Rel=Root
12	sestrična	sestrična	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	11	nsubj	_	SpaceAfter=No|Dep=11|Rel=Sb
13	.	.	PUNCT	Z	_	4	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 parataxis	color:blue
1	Svetujemo	svetovati	VERB	Vmbr1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
2	:	:	PUNCT	Z	_	4	punct	_	Dep=0|Rel=Root
3	Bodite	biti	AUX	Va-m2p	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	4	cop	_	Dep=0|Rel=Root
4	pozitivni	pozitiven	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	1	parataxis	_	Dep=3|Rel=Atr
5	do	do	ADP	Sg	Case=Gen	6	case	_	Dep=6|Rel=Atr
6	sebe	se	PRON	Px---g	Case=Gen|PronType=Prs|Reflex=Yes	4	obl	_	Dep=3|Rel=AdvO
7	in	in	CCONJ	Cc	_	9	cc	_	Dep=9|Rel=Conj
8	svoje	svoj	DET	Px-fsg	Case=Gen|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	9	det	_	Dep=9|Rel=Atr
9	okolice	okolica	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	6	conj	_	SpaceAfter=No|Dep=6|Rel=Coord
10	.	.	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.
There are 2 language-specific subtypes of `parataxis`: [parataxis:discourse](), [parataxis:restart]().

668 nodes (3%) are attached to their parents as `parataxis`.

654 instances of `parataxis` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.09880239520958.

The following 58 pairs of parts of speech are connected with `parataxis`: [sl-pos/VERB]()-[sl-pos/VERB]() (316; 47% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (57; 9% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (55; 8% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (28; 4% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (22; 3% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (16; 2% instances), [sl-pos/VERB]()-[sl-pos/ADV]() (16; 2% instances), [sl-pos/ADV]()-[sl-pos/VERB]() (12; 2% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (9; 1% instances), [sl-pos/DET]()-[sl-pos/VERB]() (8; 1% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (8; 1% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (8; 1% instances), [sl-pos/VERB]()-[sl-pos/PART]() (7; 1% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (7; 1% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (6; 1% instances), [sl-pos/VERB]()-[sl-pos/DET]() (6; 1% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (5; 1% instances), [sl-pos/PROPN]()-[sl-pos/VERB]() (5; 1% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (5; 1% instances), [sl-pos/ADJ]()-[sl-pos/ADV]() (4; 1% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (4; 1% instances), [sl-pos/PART]()-[sl-pos/VERB]() (4; 1% instances), [sl-pos/ADV]()-[sl-pos/ADJ]() (3; 0% instances), [sl-pos/DET]()-[sl-pos/ADJ]() (3; 0% instances), [sl-pos/DET]()-[sl-pos/NOUN]() (3; 0% instances), [sl-pos/NOUN]()-[sl-pos/DET]() (3; 0% instances), [sl-pos/NUM]()-[sl-pos/VERB]() (3; 0% instances), [sl-pos/PROPN]()-[sl-pos/ADV]() (3; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (3; 0% instances), [sl-pos/ADV]()-[sl-pos/ADV]() (2; 0% instances), [sl-pos/ADV]()-[sl-pos/NOUN]() (2; 0% instances), [sl-pos/ADV]()-[sl-pos/PROPN]() (2; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADV]() (2; 0% instances), [sl-pos/NOUN]()-[sl-pos/CCONJ]() (2; 0% instances), [sl-pos/NOUN]()-[sl-pos/INTJ]() (2; 0% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (2; 0% instances), [sl-pos/NUM]()-[sl-pos/ADJ]() (2; 0% instances), [sl-pos/PRON]()-[sl-pos/PROPN]() (2; 0% instances), [sl-pos/PROPN]()-[sl-pos/PROPN]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/ADV]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/ADV]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/CCONJ]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/INTJ]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/PART]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/PART]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/PART]()-[sl-pos/PART]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/PART]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/SCONJ]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/INTJ]() (1; 0% instances), [sl-pos/X]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/X]()-[sl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 parataxis	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 parataxis	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 parataxis	color:blue
1	najbolj	najbolj	ADV	Rgs	Degree=Sup	2	advmod	_	word=najbolj|msd=Rss
2	pozitiven	pozitiven	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	word=pozitivn|msd=Ppnmein
3	tak	tak	DET	Pd-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	word=tak|msd=Zk-mei
4	del	del	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	8	xcomp	_	word=del|msd=Somei
5	slovenije	Slovenija	PROPN	Npfsg	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	word=Slovenije|msd=Slzer
6	se	se	PRON	Px------y	PronType=Prs|Variant=Short	8	expl	_	word=se|msd=Zp------k
7	mi	jaz	PRON	Pp1-sd--y	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	8	obj	_	word=mi|msd=Zop-ed--k
8	zdi	zdeti	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=zdi|msd=Ggnste
9	morje	morje	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	8	parataxis	_	word=morje|msd=Sosei
10	…	…	PUNCT	Z	_	8	punct	_	word=…|msd=U
11	ja	ja	PART	Q	_	12	discourse	_	word=ja|msd=L
12	širina	širina	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	8	parataxis	_	word=širina|msd=Sozei

~~~


