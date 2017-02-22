

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

4755 nodes (4%) are attached to their parents as `conj`.

4755 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.89926393270242.

The following 52 pairs of parts of speech are connected with `conj`: [sl-pos/NOUN]()-[sl-pos/NOUN]() (1905; 40% instances), [sl-pos/VERB]()-[sl-pos/VERB]() (1234; 26% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (603; 13% instances), [sl-pos/PROPN]()-[sl-pos/PROPN]() (303; 6% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (125; 3% instances), [sl-pos/NUM]()-[sl-pos/NUM]() (88; 2% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (76; 2% instances), [sl-pos/ADV]()-[sl-pos/ADV]() (63; 1% instances), [sl-pos/PROPN]()-[sl-pos/NOUN]() (52; 1% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (43; 1% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (41; 1% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (31; 1% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (30; 1% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (23; 0% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (17; 0% instances), [sl-pos/NOUN]()-[sl-pos/DET]() (13; 0% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (12; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADV]() (7; 0% instances), [sl-pos/NOUN]()-[sl-pos/NUM]() (7; 0% instances), [sl-pos/X]()-[sl-pos/X]() (7; 0% instances), [sl-pos/ADV]()-[sl-pos/DET]() (6; 0% instances), [sl-pos/ADV]()-[sl-pos/NOUN]() (6; 0% instances), [sl-pos/NUM]()-[sl-pos/ADJ]() (6; 0% instances), [sl-pos/DET]()-[sl-pos/DET]() (5; 0% instances), [sl-pos/DET]()-[sl-pos/ADJ]() (4; 0% instances), [sl-pos/NUM]()-[sl-pos/DET]() (4; 0% instances), [sl-pos/NUM]()-[sl-pos/NOUN]() (4; 0% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (4; 0% instances), [sl-pos/ADP]()-[sl-pos/ADP]() (3; 0% instances), [sl-pos/PRON]()-[sl-pos/ADJ]() (3; 0% instances), [sl-pos/ADJ]()-[sl-pos/DET]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (2; 0% instances), [sl-pos/DET]()-[sl-pos/VERB]() (2; 0% instances), [sl-pos/PRON]()-[sl-pos/ADV]() (2; 0% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (2; 0% instances), [sl-pos/PROPN]()-[sl-pos/ADJ]() (2; 0% instances), [sl-pos/PROPN]()-[sl-pos/VERB]() (2; 0% instances), [sl-pos/VERB]()-[sl-pos/DET]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/ADJ]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/ADV]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/ADV]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/AUX]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/CCONJ]()-[sl-pos/CCONJ]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/X]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/PROPN]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/X]()-[sl-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 conj	color:blue
1	Stala	stati	VERB	Vmpp-sf	Aspect=Imp|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	aux	_	Dep=1|Rel=PPart
3	milijardo	milijarda	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	1	obl	_	Dep=1|Rel=AdvM
4	tolarjev	tolar	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	Dep=3|Rel=Atr
5	in	in	CCONJ	Cc	_	8	cc	_	Dep=8|Rel=Conj
6	dvesto	dvesto	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	8	nummod	_	Dep=8|Rel=Atr
7	petdeset	petdeset	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	8	nummod	_	Dep=8|Rel=Atr
8	milijonov	milijon	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	3	conj	_	SpaceAfter=No|Dep=3|Rel=Coord
9	.	.	PUNCT	Z	_	1	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 conj	color:blue
1	Pa	pa	CCONJ	Cc	_	7	advmod	_	Dep=0|Rel=Root
2	vendar	vendar	CCONJ	Cc	_	1	fixed	_	SpaceAfter=No|Dep=1|Rel=MWU
3	-	-	PUNCT	Z	_	7	punct	_	Dep=0|Rel=Root
4	čim	čim	ADV	Rgp	Degree=Pos	5	advmod	_	Dep=5|Rel=Atr
5	lažji	lahek	ADJ	Agcmsay	Case=Acc|Definite=Def|Degree=Cmp|Gender=Masc|Number=Sing	6	amod	_	Dep=6|Rel=Atr
6	korak	korak	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	obj	_	Dep=7|Rel=Obj
7	voščim	voščiti	VERB	Vmbr1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
8	in	in	CCONJ	Cc	_	9	cc	_	Dep=9|Rel=Conj
9	prižigam	prižigati	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	conj	_	Dep=0|Rel=Root
10	pipico	pipica	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	9	obj	_	Dep=9|Rel=Obj
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
5	jih	on	PRON	Pp3mpa--y	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Variant=Short	6	obj	_	Dep=6|Rel=Obj
6	serviramo	servirati	VERB	Vmbr1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	advcl	_	Dep=2|Rel=AdvO
7	vroče	vroč	ADJ	Agpfpa	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	5	acl	_	Dep=6|Rel=Atr
8	ali	ali	CCONJ	Cc	_	11	cc	_	Dep=11|Rel=Conj
9	pa	pa	CCONJ	Cc	_	6	advmod	_	Dep=0|Rel=Root
10	tudi	tudi	PART	Q	_	6	advmod	_	Dep=0|Rel=Root
11	hladne	hladen	ADJ	Agpfpa	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	7	conj	_	SpaceAfter=No|Dep=7|Rel=Coord
12	.	.	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.
There are 1 language-specific subtypes of `conj`: [conj:extend]().

562 nodes (3%) are attached to their parents as `conj`.

562 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.56583629893238.

The following 49 pairs of parts of speech are connected with `conj`: [sl-pos/VERB]()-[sl-pos/VERB]() (188; 33% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (124; 22% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (40; 7% instances), [sl-pos/PROPN]()-[sl-pos/PROPN]() (27; 5% instances), [sl-pos/NUM]()-[sl-pos/NUM]() (23; 4% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (22; 4% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (12; 2% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (10; 2% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (7; 1% instances), [sl-pos/ADV]()-[sl-pos/ADV]() (7; 1% instances), [sl-pos/DET]()-[sl-pos/DET]() (7; 1% instances), [sl-pos/VERB]()-[sl-pos/PART]() (7; 1% instances), [sl-pos/ADV]()-[sl-pos/NOUN]() (6; 1% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (6; 1% instances), [sl-pos/PROPN]()-[sl-pos/NOUN]() (5; 1% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (5; 1% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (4; 1% instances), [sl-pos/DET]()-[sl-pos/VERB]() (4; 1% instances), [sl-pos/NOUN]()-[sl-pos/DET]() (4; 1% instances), [sl-pos/VERB]()-[sl-pos/DET]() (4; 1% instances), [sl-pos/ADJ]()-[sl-pos/DET]() (3; 1% instances), [sl-pos/NOUN]()-[sl-pos/ADV]() (3; 1% instances), [sl-pos/NUM]()-[sl-pos/NOUN]() (3; 1% instances), [sl-pos/PART]()-[sl-pos/PART]() (3; 1% instances), [sl-pos/PRON]()-[sl-pos/PROPN]() (3; 1% instances), [sl-pos/VERB]()-[sl-pos/ADV]() (3; 1% instances), [sl-pos/ADV]()-[sl-pos/VERB]() (2; 0% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (2; 0% instances), [sl-pos/NOUN]()-[sl-pos/X]() (2; 0% instances), [sl-pos/NUM]()-[sl-pos/ADJ]() (2; 0% instances), [sl-pos/NUM]()-[sl-pos/DET]() (2; 0% instances), [sl-pos/PROPN]()-[sl-pos/ADV]() (2; 0% instances), [sl-pos/PROPN]()-[sl-pos/VERB]() (2; 0% instances), [sl-pos/PROPN]()-[sl-pos/X]() (2; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (2; 0% instances), [sl-pos/ADV]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/ADV]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/PART]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/PROPN]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/X]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 conj	color:blue
1	ja	ja	PART	Q	_	2	discourse	_	word=ja|msd=L
2	ima	imeti	VERB	Vmpr3s-n	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	word=ma|msd=Ggnste-n
3	samo	samo	PART	Q	_	4	cc	_	word=sam|msd=L
4	čakajte	čakati	VERB	Vmpm2p	Aspect=Imp|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	2	conj	_	word=čakte|msd=Ggnvdm
5	samo	samo	PART	Q	_	4	advmod	_	word=sam|msd=L
6	malo	malo	DET	Rgp	PronType=Ind	4	advmod	_	word=malo|msd=Rsn
7	zdaj	zdaj	ADV	Rgp	Degree=Pos	9	advmod	_	word=zdaj|msd=Rsn
8	ne	ne	PART	Q	Polarity=Neg	9	advmod	_	word=ne|msd=L
9	vem	vedeti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	parataxis	_	word=vem|msd=Ggnspe
10	na	na	ADP	Sa	Case=Acc	11	case	_	word=na|msd=Dt
11	pamet	pamet	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	9	obl	_	word=pamet|msd=Sozet

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 conj	color:blue
1	edini	edin	ADJ	Agpmsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	word=edin|msd=Ppnmeid
2	problem	problem	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	word=problem|msd=Somei
3	bo	biti	AUX	Va-f3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	2	cop	_	word=bo|msd=Gp-pte-n
4	tam	tam	ADV	Rgp	Degree=Pos	2	advmod	_	word=tam|msd=Rsn
5	razumevanje	razumevanje	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	2	nsubj	_	word=razumeva|msd=Sosei
6	italijanščine	italijanščina	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	word=italijanščine|msd=Sozer
7	pa	pa	CCONJ	Cc	_	8	cc	_	word=pa|msd=Vp
8	nemščine	nemščina	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	6	conj	_	word=nemščine|msd=Sozer

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 conj	color:blue
1	devetindvajseti	devetindvajseti	ADJ	Mlomsn	Case=Nom|Gender=Masc|Number=Sing|NumType=Ord	0	root	_	word=devetindvejsti|msd=Kbvmei
2	trideseti	trideseti	ADJ	Mlomsn	Case=Nom|Gender=Masc|Number=Sing|NumType=Ord	1	conj	_	word=trieseti|msd=Kbvmei

~~~


