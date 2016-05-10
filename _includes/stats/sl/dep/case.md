

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

13476 nodes (10%) are attached to their parents as `case`.

13473 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.49183734045711.

The following 19 pairs of parts of speech are connected with `case`: [sl-pos/NOUN]()-[sl-pos/ADP]() (10583; 79% instances), [sl-pos/PRON]()-[sl-pos/ADP]() (1130; 8% instances), [sl-pos/PROPN]()-[sl-pos/ADP]() (1002; 7% instances), [sl-pos/NOUN]()-[sl-pos/SCONJ]() (245; 2% instances), [sl-pos/ADJ]()-[sl-pos/ADP]() (235; 2% instances), [sl-pos/NUM]()-[sl-pos/ADP]() (124; 1% instances), [sl-pos/ADV]()-[sl-pos/ADP]() (76; 1% instances), [sl-pos/ADJ]()-[sl-pos/SCONJ]() (21; 0% instances), [sl-pos/ADV]()-[sl-pos/SCONJ]() (17; 0% instances), [sl-pos/PRON]()-[sl-pos/SCONJ]() (13; 0% instances), [sl-pos/PROPN]()-[sl-pos/SCONJ]() (13; 0% instances), [sl-pos/X]()-[sl-pos/ADP]() (6; 0% instances), [sl-pos/PART]()-[sl-pos/ADP]() (2; 0% instances), [sl-pos/PUNCT]()-[sl-pos/ADP]() (2; 0% instances), [sl-pos/SCONJ]()-[sl-pos/ADP]() (2; 0% instances), [sl-pos/X]()-[sl-pos/SCONJ]() (2; 0% instances), [sl-pos/DET]()-[sl-pos/ADP]() (1; 0% instances), [sl-pos/INTJ]()-[sl-pos/ADP]() (1; 0% instances), [sl-pos/INTJ]()-[sl-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case	color:blue
1	Za	za	ADP	Sa	Case=Acc	2	case	_	Dep=2|Rel=Atr
2	zadovoljitev	zadovoljitev	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	7	nmod	_	Dep=7|Rel=AdvO
3	pomembne	pomemben	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	Dep=4|Rel=Atr
4	želje	želja	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	Dep=2|Rel=Atr
5	so	biti	VERB	Va-r3p-n	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	Dep=0|Rel=Root
6	pripravljeni	pripravljen	ADJ	Appmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	Dep=5|Rel=Atr
7	vložiti	vložiti	VERB	Vmen	Aspect=Perf|VerbForm=Inf	6	ccomp	_	Dep=6|Rel=Obj
8	več	več	DET	Rgc	Degree=Cmp|PronType=Ind	9	det	_	Dep=9|Rel=Atr
9	truda	trud	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	7	dobj	_	SpaceAfter=No|Dep=7|Rel=Obj
10	.	.	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
1	Zakonodaja	zakonodaja	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	Dep=6|Rel=Sb
2	in	in	CONJ	Cc	_	1	cc	_	Dep=3|Rel=Conj
3	trg	trg	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	1	conj	_	Dep=1|Rel=Coord
4	delovne	deloven	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	Dep=5|Rel=Atr
5	sile	sila	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	Dep=3|Rel=Atr
6	sta	biti	VERB	Va-r3d-n	Mood=Ind|Negative=Pos|Number=Dual|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	Dep=0|Rel=Root
7	med	med	ADP	Si	Case=Ins	8	case	_	Dep=8|Rel=Atr
8	seboj	se	PRON	Px---i	Case=Ins|PronType=Prs|Reflex=Yes	10	nmod	_	Dep=10|Rel=Atr
9	tesno	tesno	ADV	Rgp	Degree=Pos	10	advmod	_	Dep=10|Rel=Atr
10	povezana	povezan	ADJ	Appmdn	Case=Nom|Degree=Pos|Gender=Masc|Number=Dual|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=6|Rel=Atr
11	.	.	PUNCT	Z	_	10	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
1	Kolikor	kolikor	SCONJ	Cs	_	2	mark	_	Dep=2|Rel=Conj
2	vem	vedeti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
3	,	,	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root
4	pa	pa	CONJ	Cc	_	5	advmod	_	Dep=0|Rel=Root
5	imajo	imeti	VERB	Vmpr3p-n	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis	_	Dep=0|Rel=Root
6	tudi	tudi	PART	Q	_	5	advmod	_	Dep=0|Rel=Root
7	v	v	ADP	Sl	Case=Loc	8	case	_	Dep=8|Rel=Atr
8	EU	EU	PROPN	Npfsl	Case=Loc|Gender=Fem|Number=Sing	5	nmod	_	Dep=5|Rel=AdvO
9	še	še	PART	Q	_	5	advmod	_	Dep=0|Rel=Root
10	vedno	vedno	ADV	Rgp	Degree=Pos	5	advmod	_	Dep=5|Rel=AdvO
11	težave	težava	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	5	dobj	_	Dep=5|Rel=Obj
12	z	z	ADP	Si	Case=Ins	13	case	_	Dep=13|Rel=Atr
13	mikročipi	mikročip	NOUN	Ncmpi	Case=Ins|Gender=Masc|Number=Plur	11	nmod	_	SpaceAfter=No|Dep=11|Rel=Atr
14	.	.	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

1758 nodes (6%) are attached to their parents as `case`.

1757 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.43799772468714.

The following 20 pairs of parts of speech are connected with `case`: [sl-pos/NOUN]()-[sl-pos/ADP]() (1180; 67% instances), [sl-pos/PRON]()-[sl-pos/ADP]() (209; 12% instances), [sl-pos/PROPN]()-[sl-pos/ADP]() (159; 9% instances), [sl-pos/ADJ]()-[sl-pos/ADP]() (56; 3% instances), [sl-pos/NUM]()-[sl-pos/ADP]() (32; 2% instances), [sl-pos/ADV]()-[sl-pos/ADP]() (29; 2% instances), [sl-pos/NOUN]()-[sl-pos/SCONJ]() (23; 1% instances), [sl-pos/X]()-[sl-pos/ADP]() (19; 1% instances), [sl-pos/PRON]()-[sl-pos/ADV]() (11; 1% instances), [sl-pos/PRON]()-[sl-pos/SCONJ]() (9; 1% instances), [sl-pos/VERB]()-[sl-pos/ADP]() (7; 0% instances), [sl-pos/ADJ]()-[sl-pos/SCONJ]() (6; 0% instances), [sl-pos/PROPN]()-[sl-pos/SCONJ]() (5; 0% instances), [sl-pos/ADV]()-[sl-pos/SCONJ]() (4; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADV]() (3; 0% instances), [sl-pos/VERB]()-[sl-pos/SCONJ]() (2; 0% instances), [sl-pos/ADP]()-[sl-pos/ADP]() (1; 0% instances), [sl-pos/ADV]()-[sl-pos/CONJ]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/PART]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	km	_	X	Xt	_	3	reparandum	_	word=km|msd=Nt
2	[gap]	[gap]	X	X	_	7	punct	_	word=[gap]|msd=N
3	ker	ker	SCONJ	Cs	_	7	mark	_	word=k|msd=Vd
4	ti	ti	PRON	Pp2-sd--y	Case=Dat|Number=Sing|Person=2|PronType=Prs|Variant=Short	7	iobj	_	word=ti|msd=Zod-ed--k
5	na	na	ADP	Sl	Case=Loc	6	case	_	word=na|msd=Dm
6	vizi	viza	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	7	nmod	_	word=vizi|msd=Sozem
7	piše	pisati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=piše|msd=Ggnste
8	od	od	ADP	Sg	Case=Gen	9	case	_	word=od|msd=Dr
9	kdaj	kdaj	ADV	Rgp	Degree=Pos	13	advmod	_	word=kdaj|msd=Rsn
10	do	do	ADP	Sg	Case=Gen	11	case	_	word=do|msd=Dr
11	kdaj	kdaj	ADV	Rgp	Degree=Pos	13	advmod	_	word=kdaj|msd=Rsn
12	ti	ti	PRON	Pp2-sd--y	Case=Dat|Number=Sing|Person=2|PronType=Prs|Variant=Short	13	dobj	_	word=ti|msd=Zod-ed--k
13	velja	veljati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	ccomp	_	word=vela|msd=Ggnste

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
1	eee	eee	INTJ	I	_	8	discourse:filler	_	word=eee|msd=M
2	poleg	poleg	ADP	Sg	Case=Gen	5	case	_	word=poleg|msd=Dr
3	one	oni	DET	Pd-fsg	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	word=une|msd=Zk-zer
4	ta	ta	DET	Pd-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	word=ta|msd=Zk-mei
5	glavne	glaven	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	8	reparandum	_	word=glavne|msd=Ppnzer
6	…	…	PUNCT	Z	_	8	punct	_	word=…|msd=U
7	poleg	poleg	ADP	Sg	Case=Gen	8	case	_	word=poleg|msd=Dr
8	one	oni	PRON	Pd-fsg	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	0	root	_	word=une|msd=Zk-zer
9	ki	ki	SCONJ	Cs	_	10	mark	_	word=k|msd=Vd
10	je	biti	AUX	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	reparandum	_	word=je|msd=Gp-ste-n
11	ki	ki	SCONJ	Cs	_	13	mark	_	word=k|msd=Vd
12	je	biti	AUX	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	word=je|msd=Gp-ste-n
13	bila	biti	VERB	Va-p-sf	Gender=Fem|Number=Sing|VerbForm=Part	8	acl	_	word=bla|msd=Gp-d-ez
14	najbolj	najbolj	ADV	Rgs	Degree=Sup	15	advmod	_	word=najbl|msd=Rss
15	in	in	ADV	Rgp	Degree=Pos	13	advmod	_	word=in|msd=Rsn

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
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


