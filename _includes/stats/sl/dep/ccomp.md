

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

1209 nodes (1%) are attached to their parents as `ccomp`.

1185 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.14722911497105.

The following 7 pairs of parts of speech are connected with `ccomp`: [sl-pos/VERB]()-[sl-pos/VERB]() (908; 75% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (159; 13% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (61; 5% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (59; 5% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (11; 1% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (7; 1% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (4; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 ccomp	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 ccomp	color:blue
1	Bojim	bati	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
2	pa	pa	CONJ	Cc	_	1	advmod	_	Dep=0|Rel=Root
3	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	1	expl	_	SpaceAfter=No|Dep=1|Rel=PPart
4	,	,	PUNCT	Z	_	9	punct	_	Dep=0|Rel=Root
5	da	da	SCONJ	Cs	_	9	mark	_	Dep=7|Rel=Conj
6	ne	ne	PART	Q	_	9	neg	_	Dep=7|Rel=PPart
7	bodo	biti	VERB	Va-f3p-n	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	9	cop	_	Dep=1|Rel=Obj
8	ravno	ravno	PART	Q	_	9	advmod	_	Dep=9|Rel=Atr
9	realni	realen	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	1	ccomp	_	SpaceAfter=No|Dep=7|Rel=Atr
10	.	.	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 ccomp	color:blue
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




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

316 nodes (1%) are attached to their parents as `ccomp`.

315 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.63924050632911.

The following 13 pairs of parts of speech are connected with `ccomp`: [sl-pos/VERB]()-[sl-pos/VERB]() (224; 71% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (30; 9% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (25; 8% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (12; 4% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (9; 3% instances), [sl-pos/VERB]()-[sl-pos/ADV]() (4; 1% instances), [sl-pos/VERB]()-[sl-pos/SCONJ]() (4; 1% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (2; 1% instances), [sl-pos/VERB]()-[sl-pos/PART]() (2; 1% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/ADV]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 13 ccomp	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 ccomp	color:blue
1	ne	ne	PART	Q	_	3	discourse	_	word=ne|msd=L
2	in	in	CONJ	Cc	_	3	cc	_	word=in|msd=Vp
3	tako	tako	ADV	Rgp	Degree=Pos	0	root	_	word=taku|msd=Rsn
4	eee	eee	INTJ	I	_	7	discourse:filler	_	word=eee|msd=M
5	i	_	X	Xt	_	7	reparandum	_	word=i|msd=Nt
6	[gap]	[gap]	X	X	_	3	punct	_	word=[gap]|msd=N
7	veš	vedeti	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	parataxis:restart	_	word=veš|msd=Ggnsde
8	kakšen	kakšen	DET	Pq-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	10	det	_	word=kašn|msd=Zv-mei
9	lep	lep	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	word=lep|msd=Ppnmein
10	kostanj	kostanj	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	7	ccomp	_	word=kostajn|msd=Somei
11	kako	kako	ADV	Rgp	Degree=Pos	12	advmod	_	word=kaku|msd=Rsn
12	dober	dober	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	word=dober|msd=Ppnmein
13	sladek	sladek	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	word=sladek|msd=Ppnmein

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	znaš	znati	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	word=naš|msd=Ggnsde
2	kako	kako	ADV	Rgp	Degree=Pos	4	advmod	_	word=kak|msd=Rsn
3	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	word=je|msd=Gp-ste-n
4	lep	lep	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	ccomp	_	word=lep|msd=Ppnmein

~~~


