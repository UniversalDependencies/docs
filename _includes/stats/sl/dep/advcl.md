

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

1305 nodes (1%) are attached to their parents as `advcl`.

757 instances of `advcl` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.9639846743295.

The following 12 pairs of parts of speech are connected with `advcl`: [sl-pos/VERB]()-[sl-pos/VERB]() (935; 72% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (146; 11% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (140; 11% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (23; 2% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (20; 2% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (17; 1% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (10; 1% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (6; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (4; 0% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (2; 0% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/VERB]() (1; 0% instances).


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
5	jih	on	PRON	Pp3mpa--y	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Variant=Short	6	dobj	_	Dep=6|Rel=Obj
6	serviramo	servirati	VERB	Vmbr1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	advcl	_	Dep=2|Rel=AdvO
7	vroče	vroč	ADJ	Agpfpa	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	6	advcl	_	Dep=6|Rel=Atr
8	ali	ali	CONJ	Cc	_	7	cc	_	Dep=11|Rel=Conj
9	pa	pa	CONJ	Cc	_	6	advmod	_	Dep=0|Rel=Root
10	tudi	tudi	PART	Q	_	6	advmod	_	Dep=0|Rel=Root
11	hladne	hladen	ADJ	Agpfpa	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	7	conj	_	SpaceAfter=No|Dep=7|Rel=Coord
12	.	.	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 advcl	color:blue
1	Juhe	juha	NOUN	Ncfpn	Case=Nom|Gender=Fem|Number=Plur	2	nsubj	_	Dep=2|Rel=Sb
2	teknejo	tekniti	VERB	Vmbr3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
3	,	,	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root
4	če	če	SCONJ	Cs	_	6	mark	_	Dep=6|Rel=Conj
5	jih	on	PRON	Pp3mpa--y	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Variant=Short	6	dobj	_	Dep=6|Rel=Obj
6	serviramo	servirati	VERB	Vmbr1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	advcl	_	Dep=2|Rel=AdvO
7	vroče	vroč	ADJ	Agpfpa	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	6	advcl	_	Dep=6|Rel=Atr
8	ali	ali	CONJ	Cc	_	7	cc	_	Dep=11|Rel=Conj
9	pa	pa	CONJ	Cc	_	6	advmod	_	Dep=0|Rel=Root
10	tudi	tudi	PART	Q	_	6	advmod	_	Dep=0|Rel=Root
11	hladne	hladen	ADJ	Agpfpa	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	7	conj	_	SpaceAfter=No|Dep=7|Rel=Coord
12	.	.	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 2 advcl	color:blue
1	Ker	ker	SCONJ	Cs	_	2	mark	_	Dep=2|Rel=Conj
2	imata	imeti	VERB	Vmpr3d-n	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Dual|Person=3|Tense=Pres|VerbForm=Fin	13	advcl	_	Dep=9|Rel=AdvO
3	oba	oba	PRON	Pg-mdn	Case=Nom|Gender=Masc|Number=Dual|PronType=Tot	2	nsubj	_	Dep=2|Rel=Sb
4	težave	težava	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	2	dobj	_	Dep=2|Rel=Obj
5	z	z	ADP	Si	Case=Ins	6	case	_	Dep=6|Rel=Atr
6	ledvicami	ledvica	NOUN	Ncfpi	Case=Ins|Gender=Fem|Number=Plur	4	nmod	_	SpaceAfter=No|Dep=4|Rel=Atr
7	,	,	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root
8	je	biti	AUX	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	Dep=9|Rel=PPart
9	bilo	biti	VERB	Va-p-sn	Gender=Neut|Number=Sing|VerbForm=Part	13	cop	_	Dep=0|Rel=Root
10	to	ta	PRON	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	13	nsubj	_	Dep=9|Rel=Sb
11	zanju	zame	PRON	Pp3mda--b	Case=Acc|Gender=Masc|Number=Dual|Person=3|PronType=Prs|Variant=Bound	13	dobj	_	Dep=13|Rel=Obj
12	zelo	zelo	ADV	Rgp	Degree=Pos	13	advmod	_	Dep=13|Rel=Atr
13	oteženo	otežen	ADJ	Appnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=9|Rel=Atr
14	.	.	PUNCT	Z	_	13	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

339 nodes (1%) are attached to their parents as `advcl`.

229 instances of `advcl` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.81710914454277.

The following 28 pairs of parts of speech are connected with `advcl`: [sl-pos/VERB]()-[sl-pos/VERB]() (197; 58% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (30; 9% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (23; 7% instances), [sl-pos/ADV]()-[sl-pos/VERB]() (18; 5% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (15; 4% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (10; 3% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (8; 2% instances), [sl-pos/VERB]()-[sl-pos/ADV]() (5; 1% instances), [sl-pos/VERB]()-[sl-pos/SCONJ]() (5; 1% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (4; 1% instances), [sl-pos/ADJ]()-[sl-pos/X]() (3; 1% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (3; 1% instances), [sl-pos/NOUN]()-[sl-pos/ADV]() (2; 1% instances), [sl-pos/PRON]()-[sl-pos/ADV]() (2; 1% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/ADJ]()-[sl-pos/SCONJ]() (1; 0% instances), [sl-pos/ADV]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/AUX]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/CONJ]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/SCONJ]() (1; 0% instances), [sl-pos/PART]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/PROPN]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 5 advcl	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 advcl	color:blue
1	zdaj	zdaj	ADV	Rgp	Degree=Pos	2	reparandum	_	word=zdaj|msd=Rsn
2	zdaj	zdaj	ADV	Rgp	Degree=Pos	5	advmod	_	word=zaj|msd=Rsn
3	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	word=je|msd=Gp-ste-n
4	pa	pa	CONJ	Cc	_	5	advmod	_	word=pa|msd=Vp
5	odvisno	odvisen	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	word=odvisno|msd=Ppnsei
6	kako	kako	ADV	Rgp	Degree=Pos	10	advmod	_	word=kak|msd=Rsn
7	bo	biti	AUX	Va-f3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	10	aux	_	word=bo|msd=Gp-pte-n
8	kaj	kaj	ADV	Rgp	Degree=Pos	10	advmod	_	word=kaj|msd=Rsn
9	ati	ati	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	word=ati|msd=Somei
10	delal	delati	VERB	Vmpp-sm	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part	5	advcl	_	word=delal|msd=Ggnd-em
11	kje	kje	ADV	Rgp	Degree=Pos	12	advmod	_	word=ki|msd=Rsn
12	bo	biti	VERB	Va-f3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	5	csubj	_	word=bo|msd=Gp-pte-n
13	kaj	kaj	PRON	Pq-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	12	nsubj	_	word=kaj|msd=Zv-sei

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 advcl	color:blue
1	ako	ako	SCONJ	Cs	_	2	reparandum	_	word=ako|msd=Vd
2	ako	ako	SCONJ	Cs	_	3	mark	_	word=ako|msd=Vd
3	imaš	imeti	VERB	Vmpr2s-n	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	advcl	_	word=maš|msd=Ggnsde-n
4	imaš	imeti	VERB	Vmpr2s-n	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	word=maš|msd=Ggnsde-n
5	ako	ako	SCONJ	Cs	_	6	mark	_	word=ako|msd=Vd
6	nimaš	imeti	VERB	Vmpr2s-y	Aspect=Imp|Mood=Ind|Negative=Neg|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	9	advcl	_	word=nimaš|msd=Ggnsde-d
7	pa	pa	CONJ	Cc	_	9	advmod	_	word=pa|msd=Vp
8	si	biti	VERB	Va-r2s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	9	cop	_	word=si|msd=Gp-sde-n
9	revež	revež	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	4	parataxis	_	word=revež|msd=Somei

~~~


