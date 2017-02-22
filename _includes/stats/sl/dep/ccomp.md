

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

1085 nodes (1%) are attached to their parents as `ccomp`.

1065 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.17880184331797.

The following 9 pairs of parts of speech are connected with `ccomp`: [sl-pos/VERB]()-[sl-pos/VERB]() (813; 75% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (140; 13% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (57; 5% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (55; 5% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (7; 1% instances), [sl-pos/VERB]()-[sl-pos/DET]() (6; 1% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (4; 0% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (2; 0% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 ccomp	color:blue
1	Že	že	PART	Q	_	3	advmod	_	Dep=0|Rel=Root
2	dolgo	dolgo	ADV	Rgp	Degree=Pos	3	advmod	_	Dep=3|Rel=AdvO
3	poslušam	poslušati	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
4	in	in	CCONJ	Cc	_	5	cc	_	Dep=5|Rel=Conj
5	sledim	slediti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	conj	_	SpaceAfter=No|Dep=0|Rel=Root
6	,	,	PUNCT	Z	_	9	punct	_	Dep=0|Rel=Root
7	ali	ali	ADV	Rgp	Degree=Pos	9	mark	_	Dep=9|Rel=Conj
8	bi	biti	AUX	Va-c	Mood=Cnd|VerbForm=Fin	9	aux	_	Dep=9|Rel=PPart
9	bili	biti	VERB	Va-p-pm	Gender=Masc|Number=Plur|VerbForm=Part	5	ccomp	_	Dep=5|Rel=Obj
10	kakšni	kakšen	DET	Pq-mpn	Case=Nom|Gender=Masc|Number=Plur|PronType=Int	12	det	_	Dep=12|Rel=Atr
11	takšni	takšen	DET	Pd-mpn	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	12	det	_	Dep=12|Rel=Atr
12	nameni	namen	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	9	nsubj	_	SpaceAfter=No|Dep=9|Rel=Sb
13	.	.	PUNCT	Z	_	3	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 ccomp	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 ccomp	color:blue
1	Za	za	ADP	Sa	Case=Acc	2	case	_	Dep=2|Rel=Atr
2	zadovoljitev	zadovoljitev	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	7	obl	_	Dep=7|Rel=AdvO
3	pomembne	pomemben	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	Dep=4|Rel=Atr
4	želje	želja	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	Dep=2|Rel=Atr
5	so	biti	AUX	Va-r3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	cop	_	Dep=0|Rel=Root
6	pripravljeni	pripravljen	ADJ	Appmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	Dep=5|Rel=Atr
7	vložiti	vložiti	VERB	Vmen	Aspect=Perf|VerbForm=Inf	6	ccomp	_	Dep=6|Rel=Obj
8	več	več	DET	Rgc	PronType=Ind	9	det	_	Dep=9|Rel=Atr
9	truda	trud	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No|Dep=7|Rel=Obj
10	.	.	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

190 nodes (1%) are attached to their parents as `ccomp`.

190 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.71578947368421.

The following 11 pairs of parts of speech are connected with `ccomp`: [sl-pos/VERB]()-[sl-pos/VERB]() (132; 69% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (18; 9% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (16; 8% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (6; 3% instances), [sl-pos/VERB]()-[sl-pos/DET]() (6; 3% instances), [sl-pos/VERB]()-[sl-pos/SCONJ]() (4; 2% instances), [sl-pos/VERB]()-[sl-pos/ADV]() (2; 1% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (2; 1% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (2; 1% instances), [sl-pos/VERB]()-[sl-pos/PART]() (1; 1% instances), [sl-pos/VERB]()-[sl-pos/X]() (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 ccomp	color:blue
1	veš	vedeti	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	word=veš|msd=Ggnsde
2	kako	kako	ADV	Rgp	Degree=Pos	3	advmod	_	word=kako|msd=Rsn
3	vrti	vrteti	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	word=vrti|msd=Ggnste
4	tisto	tisti	DET	Pd-fsa	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	word=tisto|msd=Zk-zet
5	kosilnico	kosilnica	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	3	obj	_	word=kosilnico|msd=Sozet
6	brez	brez	ADP	Sg	Case=Gen	7	case	_	word=brez|msd=Dr
7	motorja	motor	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	word=motorja|msd=Somer

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp	color:blue
1	pa	pa	CCONJ	Cc	_	3	cc	_	word=pa|msd=Vp
2	najprej	najprej	ADV	Rgs	Degree=Sup	3	advmod	_	word=najprej|msd=Rss
3	povejmo	povedati	VERB	Vmem1p	Aspect=Perf|Mood=Imp|Number=Plur|Person=1|VerbForm=Fin	0	root	_	word=povejmo|msd=Ggdvpm
4	kaj	kaj	PRON	Pq-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	6	nsubj	_	word=kaj|msd=Zv-sei
5	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	cop	_	word=je|msd=Gp-ste-n
6	značilno	značilen	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	3	ccomp	_	word=značilno|msd=Ppnsei
7	za	za	ADP	Sa	Case=Acc	9	case	_	word=za|msd=Dt
8	ljudske	ljudski	ADJ	Agpfpa	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	9	amod	_	word=ljudske|msd=Ppnzmt
9	pesmi	pesem	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	6	obl	_	word=pesmi|msd=Sozmt

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 ccomp	color:blue
1	eee	eee	INTJ	I	_	3	discourse:filler	_	word=eee|msd=M
2	jaz	jaz	PRON	Pp1-sn	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	word=jz|msd=Zop-ei
3	mislim	misliti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	word=mislim|msd=Ggnspe
4	da	da	SCONJ	Cs	_	5	mark	_	word=da|msd=Vd
5	ni	biti	VERB	Va-r3s-y	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	11	reparandum	_	word=ni|msd=Gp-ste-d
6	eee	eee	INTJ	I	_	11	discourse:filler	_	word=eee|msd=M
7	da	da	SCONJ	Cs	_	11	mark	_	word=da|msd=Vd
8	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	cop	_	word=je|msd=Gp-ste-n
9	zelo	zelo	ADV	Rgp	Degree=Pos	10	advmod	_	word=zlo|msd=Rsn
10	dobra	dober	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	word=dobra|msd=Ppnzei
11	smučarka	smučarka	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	3	ccomp	_	word=smučarka|msd=Sozei
12	in	in	CCONJ	Cc	_	13	cc	_	word=in|msd=Vp
13	vsestranska	vsestranski	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	11	conj	_	word=vsestranska|msd=Ppnzei

~~~


