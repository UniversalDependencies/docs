

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is a language-specific subtype of [cc]().

73 nodes (0%) are attached to their parents as `cc:preconj`.

73 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.38356164383562.

The following 10 pairs of parts of speech are connected with `cc:preconj`: [sl-pos/NOUN]()-[sl-pos/CONJ]() (31; 42% instances), [sl-pos/ADJ]()-[sl-pos/CONJ]() (12; 16% instances), [sl-pos/VERB]()-[sl-pos/CONJ]() (10; 14% instances), [sl-pos/NOUN]()-[sl-pos/PART]() (8; 11% instances), [sl-pos/ADV]()-[sl-pos/CONJ]() (3; 4% instances), [sl-pos/PROPN]()-[sl-pos/CONJ]() (3; 4% instances), [sl-pos/ADJ]()-[sl-pos/PART]() (2; 3% instances), [sl-pos/PRON]()-[sl-pos/CONJ]() (2; 3% instances), [sl-pos/ADV]()-[sl-pos/PART]() (1; 1% instances), [sl-pos/PRON]()-[sl-pos/PART]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	Tako	tako	CONJ	Cc	_	2	cc:preconj	_	Dep=2|Rel=Conj
2	ravnatelj	ravnatelj	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	Dep=0|Rel=Root
3	kot	kot	SCONJ	Cs	_	2	cc	_	Dep=4|Rel=Conj
4	profesorji	profesor	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	2	conj	_	SpaceAfter=No|Dep=2|Rel=Coord
5	.	.	PUNCT	Z	_	2	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc:preconj	color:blue
1	Zgodovina	zgodovina	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	Dep=3|Rel=Sb
2	človeštva	človeštvo	NOUN	Ncnsg	Case=Gen|Gender=Neut|Number=Sing	1	nmod	_	Dep=1|Rel=Atr
3	ni	biti	VERB	Va-r3s-y	Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	Dep=0|Rel=Root
4	niti	niti	CONJ	Cc	_	5	cc:preconj	_	Dep=5|Rel=Conj
5	logična	logičen	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	Dep=3|Rel=Atr
6	niti	niti	CONJ	Cc	_	5	cc	_	Dep=7|Rel=Conj
7	pravična	pravičen	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	5	conj	_	SpaceAfter=No|Dep=5|Rel=Coord
8	.	.	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 9 cc:preconj	color:blue
1	Uživam	uživati	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
2	namreč	namreč	CONJ	Cc	_	1	advmod	_	Dep=0|Rel=Root
3	v	v	ADP	Sl	Case=Loc	4	case	_	Dep=4|Rel=Atr
4	kuhanju	kuhanje	NOUN	Ncnsl	Case=Loc|Gender=Neut|Number=Sing	1	nmod	_	Dep=1|Rel=AdvO
5	in	in	CONJ	Cc	_	1	cc	_	Dep=7|Rel=Conj
6	rada	rad	ADV	Rgp	Degree=Pos	7	advmod	_	Dep=7|Rel=AdvM
7	improviziram	improvizirati	VERB	Vmbr1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	conj	_	SpaceAfter=No|Dep=0|Rel=Root
8	,	,	PUNCT	Z	_	16	punct	_	Dep=0|Rel=Root
9	tako	tako	CONJ	Cc	_	16	cc:preconj	_	Dep=16|Rel=Conj
10	da	da	SCONJ	Cs	_	9	mwe	_	Dep=9|Rel=MWU
11	na	na	ADP	Sl	Case=Loc	12	case	_	Dep=12|Rel=Atr
12	začetku	začetek	NOUN	Ncmsl	Case=Loc|Gender=Masc|Number=Sing	16	nmod	_	Dep=16|Rel=AdvO
13	nikoli	nikoli	ADV	Rgp	Degree=Pos	16	advmod	_	Dep=16|Rel=AdvO
14	prav	prav	PART	Q	_	16	advmod	_	Dep=0|Rel=Root
15	ne	ne	PART	Q	_	16	neg	_	Dep=16|Rel=PPart
16	vem	vedeti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	parataxis	_	SpaceAfter=No|Dep=0|Rel=Root
17	,	,	PUNCT	Z	_	20	punct	_	Dep=0|Rel=Root
18	kaj	kaj	PRON	Pq-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	20	nsubj	_	Dep=20|Rel=Conj
19	bo	biti	AUX	Va-f3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	20	aux	_	Dep=20|Rel=PPart
20	nastalo	nastati	VERB	Vmep-sn	Aspect=Perf|Gender=Neut|Number=Sing|VerbForm=Part	16	ccomp	_	SpaceAfter=No|Dep=16|Rel=Obj
21	.	.	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is a language-specific subtype of [cc]().

22 nodes (0%) are attached to their parents as `cc:preconj`.

21 instances of `cc:preconj` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.04545454545455.

The following 9 pairs of parts of speech are connected with `cc:preconj`: [sl-pos/VERB]()-[sl-pos/CONJ]() (7; 32% instances), [sl-pos/NOUN]()-[sl-pos/CONJ]() (5; 23% instances), [sl-pos/NOUN]()-[sl-pos/PART]() (3; 14% instances), [sl-pos/NOUN]()-[sl-pos/ADV]() (2; 9% instances), [sl-pos/ADV]()-[sl-pos/PART]() (1; 5% instances), [sl-pos/NUM]()-[sl-pos/PART]() (1; 5% instances), [sl-pos/PRON]()-[sl-pos/PART]() (1; 5% instances), [sl-pos/PROPN]()-[sl-pos/CONJ]() (1; 5% instances), [sl-pos/VERB]()-[sl-pos/PART]() (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc:preconj	color:blue
1	ali	ali	CONJ	Cc	_	3	cc:preconj	_	word=al|msd=Vp
2	boš	biti	AUX	Va-f2s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin	3	aux	_	word=boš|msd=Gp-pde-n
3	buljil	buljiti	VERB	Vmpp-sm	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	word=bulu|msd=Ggnd-em
4	skozi	skozi	ADV	Rgp	Degree=Pos	3	advmod	_	word=skoz|msd=Rsn
5	okoli	okoli	ADV	Rgp	Degree=Pos	3	advmod	_	word=okol|msd=Rsn
6	ali	ali	CONJ	Cc	_	3	cc	_	word=al|msd=Vp
7	boš	biti	AUX	Va-f2s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin	12	aux	_	word=boš|msd=Gp-pde-n
8	pa	pa	CONJ	Cc	_	12	advmod	_	word=pa|msd=Vp
9	tam	tam	ADV	Rgp	Degree=Pos	12	advmod	_	word=tm|msd=Rsn
10	nekaj	nekaj	ADV	Rgp	Degree=Pos	12	advmod	_	word=neki|msd=Rsn
11	telefon	telefon	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	12	dobj	_	word=telefon|msd=Sometn
12	drkal	drkati	VERB	Vmpp-sm	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part	3	conj	_	word=drku|msd=Ggnd-em

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 22 cc:preconj	color:blue
1	no	no	PART	Q	_	7	discourse	_	word=no|msd=L
2	pri	pri	ADP	Sl	Case=Loc	4	case	_	word=pr|msd=Dm
3	eee	eee	INTJ	I	_	4	discourse:filler	_	word=eee|msd=M
4	prispevku	prispevek	NOUN	Ncmsl	Case=Loc|Gender=Masc|Number=Sing	7	nmod	_	word=prispevku|msd=Somem
5	pri	pri	ADP	Sl	Case=Loc	6	case	_	word=pri|msd=Dm
6	registraciji	registracija	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	4	nmod	_	word=registraciji|msd=Sozem
7	bi	biti	VERB	Va-c	Mood=Cnd|VerbForm=Fin	0	root	_	word=bi|msd=Gp-g
8	[gap]	[gap]	X	X	_	7	punct	_	word=[gap]|msd=N
9	za	za	ADP	Sa	Case=Acc	11	case	_	word=za|msd=Dt
10	sto	sto	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	11	nummod	_	word=sto|msd=Kbg-mt
11	evrov	evro	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	7	nmod	_	word=evrov|msd=Sommr
12	in	in	CONJ	Cc	_	7	cc	_	word=in|msd=Vp
13	gotovo	gotovo	ADV	Rgp	Degree=Pos	7	conj	_	word=gotovo|msd=Rsn
14	pa	pa	CONJ	Cc	_	15	reparandum	_	word=pa|msd=Vp
15	pa	pa	CONJ	Cc	_	7	cc	_	word=pa|msd=Vp
16	ne	ne	PART	Q	_	18	neg	_	word=neb[split_1-2]|msd=L
17	bi	biti	AUX	Va-c	Mood=Cnd|VerbForm=Fin	18	aux	_	word=neb[split_2-2]|msd=Gp-g
18	bilo	biti	VERB	Va-p-sn	Gender=Neut|Number=Sing|VerbForm=Part	7	conj	_	word=blo|msd=Gp-d-es
19	ne	ne	CONJ	Cc	_	20	cc:preconj	_	word=ne|msd=Vp
20	vinjet	vinjeta	NOUN	Ncfpg	Case=Gen|Gender=Fem|Number=Plur	18	nsubj	_	word=vinjet|msd=Sozmr
21	pa	pa	CONJ	Cc	_	20	cc	_	word=pa|msd=Vp
22	ne	ne	CONJ	Cc	_	23	cc:preconj	_	word=ne|msd=Vp
23	kontrole	kontrola	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	20	conj	_	word=kontrole|msd=Sozer
24	na	na	ADP	Sl	Case=Loc	25	case	_	word=na|msd=Dm
25	cesti	cesta	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	23	nmod	_	word=cesti|msd=Sozem
26	pa	pa	CONJ	Cc	_	20	cc	_	word=pa|msd=Vp
27	razmetavanja	razmetavanje	NOUN	Ncnsg	Case=Gen|Gender=Neut|Number=Sing	20	conj	_	word=razmetavanja|msd=Soser
28	za	za	ADP	Sa	Case=Acc	30	case	_	word=za|msd=Dt
29	take	tak	DET	Pd-fpa	Case=Acc|Gender=Fem|Number=Plur|PronType=Dem	30	det	_	word=take|msd=Zk-zmt
30	neumnosti	neumnost	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	27	nmod	_	word=neumnosti|msd=Sozmt

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 cc:preconj	color:blue
1	to	ta	PRON	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	8	nsubj	_	word=to|msd=Zk-sei
2	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	word=je|msd=Gp-ste-n
3	pa	pa	CONJ	Cc	_	8	advmod	_	word=pa|msd=Vp
4	res	res	ADV	Rgp	Degree=Pos	8	advmod	_	word=res|msd=Rsn
5	fenomenalna	fenomenalen	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	word=fenomenalna|msd=Ppnzei
6	ne	ne	PART	Q	_	8	cc:preconj	_	word=ne|msd=L
7	samo	samo	PART	Q	_	6	mwe	_	word=samo|msd=L
8	žurka	žurka	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	word=žurka|msd=Sozei
9	ampak	ampak	CONJ	Cc	_	8	cc	_	word=ampak|msd=Vp
10	nasploh	nasploh	ADV	Rgp	Degree=Pos	11	advmod	_	word=nasploh|msd=Rsn
11	spektakel	spektakel	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	8	conj	_	word=spektakel|msd=Somei

~~~


