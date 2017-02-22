

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is a language-specific subtype of [cc]().

54 nodes (0%) are attached to their parents as `cc:preconj`.

54 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.90740740740741.

The following 11 pairs of parts of speech are connected with `cc:preconj`: [sl-pos/NOUN]()-[sl-pos/CCONJ]() (25; 46% instances), [sl-pos/ADJ]()-[sl-pos/CCONJ]() (9; 17% instances), [sl-pos/NOUN]()-[sl-pos/PART]() (8; 15% instances), [sl-pos/PROPN]()-[sl-pos/CCONJ]() (3; 6% instances), [sl-pos/ADJ]()-[sl-pos/PART]() (2; 4% instances), [sl-pos/ADV]()-[sl-pos/CCONJ]() (2; 4% instances), [sl-pos/ADV]()-[sl-pos/PART]() (1; 2% instances), [sl-pos/DET]()-[sl-pos/CCONJ]() (1; 2% instances), [sl-pos/PRON]()-[sl-pos/CCONJ]() (1; 2% instances), [sl-pos/PRON]()-[sl-pos/PART]() (1; 2% instances), [sl-pos/VERB]()-[sl-pos/CCONJ]() (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc:preconj	color:blue
1	Tako	tako	CCONJ	Cc	_	3	cc:preconj	_	Dep=3|Rel=Conj
2	na	na	ADP	Sl	Case=Loc	3	case	_	Dep=3|Rel=Atr
3	vrtovih	vrt	NOUN	Ncmpl	Case=Loc|Gender=Masc|Number=Plur	0	root	_	Dep=0|Rel=Root
4	kot	kot	SCONJ	Cs	_	6	cc	_	Dep=6|Rel=Conj
5	na	na	ADP	Sl	Case=Loc	6	case	_	Dep=6|Rel=Atr
6	balkonih	balkon	NOUN	Ncmpl	Case=Loc|Gender=Masc|Number=Plur	3	conj	_	SpaceAfter=No|Dep=3|Rel=Coord
7	.	.	PUNCT	Z	_	3	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	Tako	tako	CCONJ	Cc	_	2	cc:preconj	_	Dep=2|Rel=Conj
2	četniške	četniški	ADJ	Agpfpn	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	7	amod	_	Dep=7|Rel=Atr
3	kot	kot	SCONJ	Cs	_	4	cc	_	Dep=4|Rel=Conj
4	ustaške	ustaški	ADJ	Agpfpn	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	2	conj	_	Dep=2|Rel=Coord
5	ali	ali	CCONJ	Cc	_	6	cc	_	Dep=6|Rel=Conj
6	domobranske	domobranski	ADJ	Agpfpn	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	4	conj	_	Dep=4|Rel=Coord
7	enote	enota	NOUN	Ncfpn	Case=Nom|Gender=Fem|Number=Plur	10	nsubj	_	Dep=10|Rel=Sb
8	so	biti	AUX	Va-r3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	aux	_	Dep=10|Rel=PPart
9	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	10	expl	_	Dep=10|Rel=PPart
10	borile	boriti	VERB	Vmpp-pf	Aspect=Imp|Gender=Fem|Number=Plur|VerbForm=Part	0	root	_	Dep=0|Rel=Root
11	proti	proti	ADP	Sd	Case=Dat	12	case	_	Dep=12|Rel=Atr
12	ljudstvu	ljudstvo	NOUN	Ncnsd	Case=Dat|Gender=Neut|Number=Sing	10	obl	_	SpaceAfter=No|Dep=10|Rel=AdvO
13	.	.	PUNCT	Z	_	10	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 14 cc:preconj	color:blue
1	Zveza	zveza	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	Dep=4|Rel=Sb
2	bi	biti	AUX	Va-c	Mood=Cnd|VerbForm=Fin	4	aux	_	Dep=4|Rel=PPart
3	lahko	lahko	ADV	Rgp	Degree=Pos	4	advmod	_	Dep=4|Rel=PPart
4	naredila	narediti	VERB	Vmep-sf	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
5	veliko	veliko	DET	Rgp	PronType=Ind	4	advmod	_	Dep=4|Rel=AdvM
6	za	za	ADP	Sa	Case=Acc	7	case	_	Dep=7|Rel=Atr
7	to	ta	DET	Pd-nsa	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	obl	_	SpaceAfter=No|Dep=4|Rel=AdvO
8	,	,	PUNCT	Z	_	13	punct	_	Dep=0|Rel=Root
9	da	da	SCONJ	Cs	_	13	mark	_	Dep=13|Rel=Conj
10	bi	biti	AUX	Va-c	Mood=Cnd|VerbForm=Fin	13	aux	_	Dep=13|Rel=PPart
11	Slovenci	Slovenec	PROPN	Npmpn	Case=Nom|Gender=Masc|Number=Plur	13	nsubj	_	Dep=13|Rel=Sb
12	golf	golf	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	13	obj	_	Dep=13|Rel=Obj
13	razumeli	razumeti	VERB	Vmbp-pm	Gender=Masc|Number=Plur|VerbForm=Part	7	acl	_	Dep=7|Rel=Atr
14	ne	ne	PART	Q	_	17	cc:preconj	_	Dep=17|Rel=Conj
15	kot	kot	SCONJ	Cs	_	17	case	_	Dep=17|Rel=Conj
16	elitno	eliten	ADJ	Agpnsa	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	17	amod	_	Dep=17|Rel=Atr
17	druženje	druženje	NOUN	Ncnsa	Case=Acc|Gender=Neut|Number=Sing	13	obl	_	SpaceAfter=No|Dep=13|Rel=AdvM
18	,	,	PUNCT	Z	_	13	punct	_	Dep=0|Rel=Root
19	temveč	temveč	CCONJ	Cc	_	23	cc	_	Dep=23|Rel=Conj
20	kot	kot	SCONJ	Cs	_	23	cc	_	Dep=23|Rel=Conj
21	neizkoriščen	neizkoriščen	ADJ	Agpmsan	Case=Acc|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	23	amod	_	Dep=23|Rel=Atr
22	turistični	turističen	ADJ	Agpmsay	Case=Acc|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	23	amod	_	Dep=23|Rel=Atr
23	potencial	potencial	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	17	conj	_	SpaceAfter=No|Dep=17|Rel=Coord
24	.	.	PUNCT	Z	_	4	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is a language-specific subtype of [cc]().

14 nodes (0%) are attached to their parents as `cc:preconj`.

14 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.14285714285714.

The following 8 pairs of parts of speech are connected with `cc:preconj`: [sl-pos/VERB]()-[sl-pos/CCONJ]() (4; 29% instances), [sl-pos/NOUN]()-[sl-pos/CCONJ]() (3; 21% instances), [sl-pos/NOUN]()-[sl-pos/PART]() (2; 14% instances), [sl-pos/ADV]()-[sl-pos/PART]() (1; 7% instances), [sl-pos/NUM]()-[sl-pos/PART]() (1; 7% instances), [sl-pos/PRON]()-[sl-pos/PART]() (1; 7% instances), [sl-pos/PROPN]()-[sl-pos/CCONJ]() (1; 7% instances), [sl-pos/VERB]()-[sl-pos/PART]() (1; 7% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc:preconj	color:blue
1	[gap]	[gap]	X	X	_	3	punct	_	word=[gap]|msd=N
2	tako	tako	ADV	Rgp	Degree=Pos	3	advmod	_	word=tak|msd=Rsn
3	vseeno	vseeno	ADV	Rgp	Degree=Pos	0	root	_	word=vseen|msd=Rsn
4	ali	ali	CCONJ	Cc	_	5	cc:preconj	_	word=al|msd=Vp
5	pride	priti	VERB	Vmer3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	csubj	_	word=pride|msd=Ggdste
6	ali	ali	CCONJ	Cc	_	7	cc	_	word=al|msd=Vp
7	ne	ne	PART	Q	_	5	conj	_	word=ne|msd=L

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc:preconj	color:blue
1	danes	danes	ADV	Rgp	Degree=Pos	3	advmod	_	word=danes|msd=Rsn
2	so	biti	AUX	Va-r3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	word=so|msd=Gp-stm-n
3	sprejeli	sprejeti	VERB	Vmep-pm	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	word=sprejeli|msd=Ggdd-mm
4	tudi	tudi	PART	Q	_	3	advmod	_	word=tudi|msd=L
5	sklepe	sklep	NOUN	Ncmpa	Case=Acc|Gender=Masc|Number=Plur	3	obj	_	word=sklepe|msd=Sommt
6	da	da	SCONJ	Cs	_	7	mark	_	word=da|msd=Vd
7	morata	morati	VERB	Vmpr3d	Aspect=Imp|Mood=Ind|Number=Dual|Person=3|Tense=Pres|VerbForm=Fin	5	acl	_	word=morata|msd=Ggnstd
8	tako	tako	CCONJ	Cc	_	9	cc:preconj	_	word=tako|msd=Vp
9	občina	občina	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	word=občina|msd=Sozei
10	kot	kot	SCONJ	Cs	_	11	cc	_	word=kot|msd=Vd
11	ministrstvo	ministrstvo	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	9	conj	_	word=ministrstvo|msd=Sosei
12	za	za	ADP	Sa	Case=Acc	13	case	_	word=za|msd=Dt
13	okolje	okolje	NOUN	Ncnsa	Case=Acc|Gender=Neut|Number=Sing	11	nmod	_	word=okolje|msd=Soset
14	in	in	CCONJ	Cc	_	15	cc	_	word=in|msd=Vp
15	prostor	prostor	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	13	conj	_	word=prostor|msd=Sometn
16	nemudoma	nemudoma	ADV	Rgp	Degree=Pos	17	advmod	_	word=nemudoma|msd=Rsn
17	preprečiti	preprečiti	VERB	Vmen	Aspect=Perf|VerbForm=Inf	7	xcomp	_	word=preprečiti|msd=Ggdn
18	nadaljnje	nadaljnji	ADJ	Agpnsa	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	19	amod	_	word=nadaljne|msd=Ppnset
19	odlaganje	odlaganje	NOUN	Ncnsa	Case=Acc|Gender=Neut|Number=Sing	17	obj	_	word=odlaganje|msd=Soset
20	gum	guma	NOUN	Ncfpg	Case=Gen|Gender=Fem|Number=Plur	19	nmod	_	word=gum|msd=Sozmr
21	do	do	ADP	Sg	Case=Gen	23	case	_	word=do|msd=Dr
22	stalnega	stalen	ADJ	Agpnsg	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	23	amod	_	word=stalnega|msd=Ppnser
23	spremljanja	spremljanje	NOUN	Ncnsg	Case=Gen|Gender=Neut|Number=Sing	17	obl	_	word=spremljanja|msd=Soser
24	vplivov	vpliv	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	23	nmod	_	word=vplivov|msd=Sommr
25	na	na	ADP	Sa	Case=Acc	26	case	_	word=na|msd=Dt
26	okolje	okolje	NOUN	Ncnsa	Case=Acc|Gender=Neut|Number=Sing	24	nmod	_	word=okolje|msd=Soset
27	kar	kar	PRON	Pr-nsa	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	29	obj	_	word=kar|msd=Zz-set
28	so	biti	AUX	Va-r3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	29	cop	_	word=so|msd=Gp-stm-n
29	zbrani	zbran	ADJ	Appmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|VerbForm=Part	30	nsubj	_	word=zbrani|msd=Pdnmmi
30	pospremili	pospremiti	VERB	Vmep-pm	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	3	parataxis	_	word=pospremili|msd=Ggdd-mm
31	z	z	ADP	Si	Case=Ins	32	case	_	word=z|msd=Do
32	navdušenjem	navdušenje	NOUN	Ncnsi	Case=Ins|Gender=Neut|Number=Sing	30	obl	_	word=navdušenjem|msd=Soseo

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 cc:preconj	color:blue
1	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	8	nsubj	_	word=to|msd=Zk-sei
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	cop	_	word=je|msd=Gp-ste-n
3	pa	pa	CCONJ	Cc	_	8	advmod	_	word=pa|msd=Vp
4	res	res	ADV	Rgp	Degree=Pos	8	advmod	_	word=res|msd=Rsn
5	fenomenalna	fenomenalen	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	word=fenomenalna|msd=Ppnzei
6	ne	ne	PART	Q	_	8	cc:preconj	_	word=ne|msd=L
7	samo	samo	PART	Q	_	6	fixed	_	word=samo|msd=L
8	žurka	žurka	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	word=žurka|msd=Sozei
9	ampak	ampak	CCONJ	Cc	_	11	cc	_	word=ampak|msd=Vp
10	nasploh	nasploh	ADV	Rgp	Degree=Pos	11	advmod	_	word=nasploh|msd=Rsn
11	spektakel	spektakel	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	8	conj	_	word=spektakel|msd=Somei

~~~


