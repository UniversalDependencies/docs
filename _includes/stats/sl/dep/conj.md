

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

5267 nodes (4%) are attached to their parents as `conj`.

5267 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.89804442756788.

The following 45 pairs of parts of speech are connected with `conj`: [sl-pos/NOUN]()-[sl-pos/NOUN]() (2140; 41% instances), [sl-pos/VERB]()-[sl-pos/VERB]() (1367; 26% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (677; 13% instances), [sl-pos/PROPN]()-[sl-pos/PROPN]() (315; 6% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (136; 3% instances), [sl-pos/NUM]()-[sl-pos/NUM]() (94; 2% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (88; 2% instances), [sl-pos/ADV]()-[sl-pos/ADV]() (74; 1% instances), [sl-pos/PROPN]()-[sl-pos/NOUN]() (58; 1% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (45; 1% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (44; 1% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (36; 1% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (32; 1% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (24; 0% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (18; 0% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (18; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADV]() (16; 0% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (8; 0% instances), [sl-pos/ADV]()-[sl-pos/NOUN]() (7; 0% instances), [sl-pos/NOUN]()-[sl-pos/NUM]() (6; 0% instances), [sl-pos/NUM]()-[sl-pos/ADJ]() (6; 0% instances), [sl-pos/PRON]()-[sl-pos/ADJ]() (6; 0% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (5; 0% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (4; 0% instances), [sl-pos/NUM]()-[sl-pos/NOUN]() (4; 0% instances), [sl-pos/X]()-[sl-pos/X]() (4; 0% instances), [sl-pos/ADP]()-[sl-pos/ADP]() (3; 0% instances), [sl-pos/DET]()-[sl-pos/PRON]() (3; 0% instances), [sl-pos/NUM]()-[sl-pos/ADV]() (3; 0% instances), [sl-pos/PRON]()-[sl-pos/ADV]() (3; 0% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (3; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADV]() (2; 0% instances), [sl-pos/ADV]()-[sl-pos/PRON]() (2; 0% instances), [sl-pos/DET]()-[sl-pos/ADJ]() (2; 0% instances), [sl-pos/PROPN]()-[sl-pos/ADJ]() (2; 0% instances), [sl-pos/PROPN]()-[sl-pos/PRON]() (2; 0% instances), [sl-pos/PROPN]()-[sl-pos/VERB]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/ADV]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/AUX]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/CONJ]()-[sl-pos/CONJ]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADP]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/PROPN]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 conj	color:blue
1	Stala	stati	VERB	Vmpp-sf	Aspect=Imp|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	aux	_	Dep=1|Rel=PPart
3	milijardo	milijarda	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	1	nmod	_	Dep=1|Rel=AdvM
4	tolarjev	tolar	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	Dep=3|Rel=Atr
5	in	in	CONJ	Cc	_	3	cc	_	Dep=8|Rel=Conj
6	dvesto	dvesto	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	8	compound	_	Dep=8|Rel=Atr
7	petdeset	petdeset	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	8	compound	_	Dep=8|Rel=Atr
8	milijonov	milijon	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	3	conj	_	SpaceAfter=No|Dep=3|Rel=Coord
9	.	.	PUNCT	Z	_	1	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 conj	color:blue
1	Pa	pa	CONJ	Cc	_	7	advmod	_	Dep=0|Rel=Root
2	vendar	vendar	CONJ	Cc	_	1	mwe	_	SpaceAfter=No|Dep=1|Rel=MWU
3	-	-	PUNCT	Z	_	7	punct	_	Dep=0|Rel=Root
4	čim	čim	ADV	Rgp	Degree=Pos	5	advmod	_	Dep=5|Rel=Atr
5	lažji	lahek	ADJ	Agcmsay	Case=Acc|Definite=Def|Degree=Cmp|Gender=Masc|Number=Sing	6	amod	_	Dep=6|Rel=Atr
6	korak	korak	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	dobj	_	Dep=7|Rel=Obj
7	voščim	voščiti	VERB	Vmbr1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
8	in	in	CONJ	Cc	_	7	cc	_	Dep=9|Rel=Conj
9	prižigam	prižigati	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	conj	_	Dep=0|Rel=Root
10	pipico	pipica	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	9	dobj	_	Dep=9|Rel=Obj
11	miru	mir	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	SpaceAfter=No|Dep=10|Rel=Atr
12	!	!	PUNCT	Z	_	7	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 conj	color:blue
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




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.
There are 1 language-specific subtypes of `conj`: [conj:extend]().

836 nodes (3%) are attached to their parents as `conj`.

836 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.84090909090909.

The following 49 pairs of parts of speech are connected with `conj`: [sl-pos/VERB]()-[sl-pos/VERB]() (295; 35% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (177; 21% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (54; 6% instances), [sl-pos/PROPN]()-[sl-pos/PROPN]() (41; 5% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (34; 4% instances), [sl-pos/NUM]()-[sl-pos/NUM]() (29; 3% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (24; 3% instances), [sl-pos/ADV]()-[sl-pos/ADV]() (22; 3% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (20; 2% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (17; 2% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (13; 2% instances), [sl-pos/VERB]()-[sl-pos/PART]() (8; 1% instances), [sl-pos/ADV]()-[sl-pos/NOUN]() (7; 1% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (7; 1% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (6; 1% instances), [sl-pos/NOUN]()-[sl-pos/ADV]() (6; 1% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (6; 1% instances), [sl-pos/PROPN]()-[sl-pos/NOUN]() (5; 1% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (4; 0% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (4; 0% instances), [sl-pos/VERB]()-[sl-pos/ADV]() (4; 0% instances), [sl-pos/ADV]()-[sl-pos/ADJ]() (3; 0% instances), [sl-pos/NOUN]()-[sl-pos/X]() (3; 0% instances), [sl-pos/NUM]()-[sl-pos/NOUN]() (3; 0% instances), [sl-pos/NUM]()-[sl-pos/PRON]() (3; 0% instances), [sl-pos/PART]()-[sl-pos/PART]() (3; 0% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (3; 0% instances), [sl-pos/PRON]()-[sl-pos/PROPN]() (3; 0% instances), [sl-pos/PROPN]()-[sl-pos/X]() (3; 0% instances), [sl-pos/ADV]()-[sl-pos/VERB]() (2; 0% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (2; 0% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (2; 0% instances), [sl-pos/NUM]()-[sl-pos/ADJ]() (2; 0% instances), [sl-pos/PROPN]()-[sl-pos/ADV]() (2; 0% instances), [sl-pos/PROPN]()-[sl-pos/PRON]() (2; 0% instances), [sl-pos/PROPN]()-[sl-pos/VERB]() (2; 0% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (2; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (2; 0% instances), [sl-pos/DET]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/PART]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/PROPN]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/PART]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/X]() (1; 0% instances), [sl-pos/X]()-[sl-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 conj	color:blue
1	pa	pa	CONJ	Cc	_	2	advmod	_	word=pa|msd=Vp
2	greš	iti	VERB	Vmbr2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	word=greš|msd=Ggvsde
3	ven	ven	ADV	Rgp	Degree=Pos	2	advmod	_	word=vn|msd=Rsn
4	pa	pa	CONJ	Cc	_	2	cc	_	word=pa|msd=Vp
5	prideš	priti	VERB	Vmer2s	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	conj	_	word=prieš|msd=Ggdsde
6	nazaj	nazaj	ADV	Rgp	Degree=Pos	5	advmod	_	word=nazaj|msd=Rsn

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 conj	color:blue
1	srbščine	srbščina	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	0	root	_	word=srbščine|msd=Sozer
2	in	in	CONJ	Cc	_	1	cc	_	word=in|msd=Vp
3	hrvaščine	hrvaščina	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	1	conj	_	word=hrvaščine|msd=Sozer
4	pa	pa	CONJ	Cc	_	1	cc	_	word=pa|msd=Vp
5	še	še	PART	Q	_	1	conj	_	word=še|msd=L
6	[gap]	[gap]	X	X	_	1	punct	_	word=[gap]|msd=N
7	pa	pa	CONJ	Cc	_	1	cc	_	word=pa|msd=Vp
8	cirilica	cirilica	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	1	conj	_	word=cirilica|msd=Sozei
9	pa	pa	CONJ	Cc	_	1	cc	_	word=pa|msd=Vp
10	to	ta	PRON	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	1	conj:extend	_	word=to|msd=Zk-sei

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 conj	color:blue
1	preskok	preskok	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	0	root	_	word=preskok|msd=Sometn
2	barve	barva	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	word=barve|msd=Sozer
3	…	…	PUNCT	Z	_	1	punct	_	word=…|msd=U
4	torej	torej	CONJ	Cc	_	5	cc	_	word=torej|msd=Vp
5	moder	moder	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	parataxis	_	word=moder|msd=Ppnmein
6	rdeč	rdeč	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	5	conj	_	word=rdeč|msd=Ppnmein

~~~


