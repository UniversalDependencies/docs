

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

114 nodes (0%) are attached to their parents as `compound`.

107 instances of `compound` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.07894736842105.

The following 2 pairs of parts of speech are connected with `compound`: [sl-pos/NOUN]()-[sl-pos/NUM]() (80; 70% instances), [sl-pos/NUM]()-[sl-pos/NUM]() (34; 30% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 compound	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound	color:blue
1	Lastnik	lastnik	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	Dep=4|Rel=Sb
2	iz	iz	ADP	Sg	Case=Gen	3	case	_	Dep=3|Rel=Atr
3	Ljubljane	Ljubljana	PROPN	Npfsg	Case=Gen|Gender=Fem|Number=Sing	1	nmod	_	Dep=1|Rel=Atr
4	ima	imeti	VERB	Vmpr3s-n	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
5	za	za	ADP	Sa	Case=Acc	9	case	_	Dep=9|Rel=Atr
6	približno	približno	ADV	Rgp	Degree=Pos	7	advmod	_	Dep=7|Rel=Atr
7	300	300	NUM	Mdc	NumForm=Digit|NumType=Card	8	compound	_	Dep=8|Rel=Atr
8	tisoč	tisoč	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	9	nummod	_	Dep=9|Rel=Atr
9	tolarjev	tolar	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	4	xcomp	_	Dep=4|Rel=Obj
10	škode	škoda	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	9	nmod	_	SpaceAfter=No|Dep=9|Rel=Atr
11	.	.	PUNCT	Z	_	4	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

61 nodes (0%) are attached to their parents as `compound`.

40 instances of `compound` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.85245901639344.

The following 5 pairs of parts of speech are connected with `compound`: [sl-pos/NUM]()-[sl-pos/NUM]() (48; 79% instances), [sl-pos/NUM]()-[sl-pos/PRON]() (6; 10% instances), [sl-pos/PRON]()-[sl-pos/NUM]() (3; 5% instances), [sl-pos/NOUN]()-[sl-pos/NUM]() (2; 3% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (2; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound	color:blue
1	sto	sto	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	5	nummod	_	word=sto|msd=Kbg-mt
2	šestdeset	šestdeset	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	1	compound	_	word=šestdeset|msd=Kbg-mt
3	sto	sto	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	1	conj	_	word=sto|msd=Kbg-mt
4	sedemdeset	sedemdeset	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	3	compound	_	word=sendeset|msd=Kbg-mt
5	glav	glava	NOUN	Ncfpg	Case=Gen|Gender=Fem|Number=Plur	0	root	_	word=glav|msd=Sozmr
6	živine	živina	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	word=žvine|msd=Sozer

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 13 compound	color:blue
1	tom	Tom	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	word=Tom|msd=Slmei
2	jones	Jones	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	1	name	_	word=Džovns|msd=Slmei
3	quincy	Quincy	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	1	conj	_	word=Kvinsi|msd=Slmei
4	jones	Jones	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	3	name	_	word=Džovns|msd=Slmei
5	tom	Tom	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	1	conj	_	word=Tom|msd=Slmei
6	petty	Petty	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	5	name	_	word=Peti|msd=Slmei
7	šest	šest	NUM	Mlc-pn	Case=Nom|Number=Plur|NumForm=Word|NumType=Card	1	parataxis	_	word=šest|msd=Kbg-mi
8	šest	šest	NUM	Mlc-pn	Case=Nom|Number=Plur|NumForm=Word|NumType=Card	7	compound	_	word=šest|msd=Kbg-mi
9	osem	osem	NUM	Mlc-pn	Case=Nom|Number=Plur|NumForm=Word|NumType=Card	7	compound	_	word=osem|msd=Kbg-mi
10	nič	nič	PRON	Pz-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Neg	7	compound	_	word=nič|msd=Zl-sei
11	osem	osem	NUM	Mlc-pn	Case=Nom|Number=Plur|NumForm=Word|NumType=Card	7	compound	_	word=osem|msd=Kbg-mi
12	nič	nič	PRON	Pz-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Neg	7	compound	_	word=nič|msd=Zl-sei
13	nič	nič	PRON	Pz-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Neg	7	compound	_	word=nič|msd=Zl-sei
14	pokličite	poklicati	VERB	Vmem2p	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	1	parataxis	_	word=pokličite|msd=Ggdvdm
15	zdaj	zdaj	ADV	Rgp	Degree=Pos	14	advmod	_	word=zdaj|msd=Rsn

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 compound	color:blue
1	nič	nič	PRON	Pz-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Neg	0	root	_	word=nič|msd=Zl-sei
2	osem	osem	NUM	Mlc-pn	Case=Nom|Number=Plur|NumForm=Word|NumType=Card	1	compound	_	word=osem|msd=Kbg-mi
3	nič	nič	PRON	Pz-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Neg	1	compound	_	word=nič|msd=Zl-sei
4	trinajst	trinajst	NUM	Mlc-pn	Case=Nom|Number=Plur|NumForm=Word|NumType=Card	1	compound	_	word=trinajst|msd=Kbg-mi
5	nič	nič	PRON	Pz-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Neg	1	compound	_	word=nič|msd=Zl-sei
6	ena	en	NUM	Mlpfsn	Case=Nom|Gender=Fem|Number=Sing|NumForm=Word|NumType=Card	1	compound	_	word=ena|msd=Kbzzei
7	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	word=je|msd=Gp-ste-n
8	naša	naš	DET	Ps1fsnp	Case=Nom|Gender=Fem|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	11	det	_	word=naša|msd=Zspzeim
9	brezplačna	brezplačen	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	word=brezplačna|msd=Ppnzei
10	telefonska	telefonski	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	word=telefonska|msd=Ppnzei
11	številka	številka	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	word=številka|msd=Sozei
12	kaj	kaj	PRON	Pq-nsa	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	13	dobj	_	word=kaj|msd=Zv-set
13	pravite	praviti	VERB	Vmbr2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	1	parataxis	_	word=pravite|msd=Ggvsdm
14	?	?	PUNCT	Z	_	13	punct	_	word=?|msd=U

~~~


