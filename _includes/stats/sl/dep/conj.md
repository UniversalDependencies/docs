

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

5269 nodes (4%) are attached to their parents as `conj`.

5267 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.89789333839438.

The following 46 pairs of parts of speech are connected with `conj`: [sl-pos/NOUN]()-[sl-pos/NOUN]() (2140; 41% instances), [sl-pos/VERB]()-[sl-pos/VERB]() (1371; 26% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (677; 13% instances), [sl-pos/PROPN]()-[sl-pos/PROPN]() (315; 6% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (136; 3% instances), [sl-pos/NUM]()-[sl-pos/NUM]() (94; 2% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (89; 2% instances), [sl-pos/ADV]()-[sl-pos/ADV]() (74; 1% instances), [sl-pos/PROPN]()-[sl-pos/NOUN]() (58; 1% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (45; 1% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (44; 1% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (36; 1% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (33; 1% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (24; 0% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (18; 0% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (18; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADV]() (16; 0% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (8; 0% instances), [sl-pos/ADV]()-[sl-pos/NOUN]() (7; 0% instances), [sl-pos/NOUN]()-[sl-pos/NUM]() (6; 0% instances), [sl-pos/NUM]()-[sl-pos/ADJ]() (6; 0% instances), [sl-pos/PRON]()-[sl-pos/ADJ]() (5; 0% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (4; 0% instances), [sl-pos/NUM]()-[sl-pos/NOUN]() (4; 0% instances), [sl-pos/X]()-[sl-pos/X]() (4; 0% instances), [sl-pos/ADP]()-[sl-pos/ADP]() (3; 0% instances), [sl-pos/DET]()-[sl-pos/PRON]() (3; 0% instances), [sl-pos/NUM]()-[sl-pos/ADV]() (3; 0% instances), [sl-pos/PRON]()-[sl-pos/ADV]() (3; 0% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (3; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADV]() (2; 0% instances), [sl-pos/ADV]()-[sl-pos/PRON]() (2; 0% instances), [sl-pos/DET]()-[sl-pos/ADJ]() (2; 0% instances), [sl-pos/PROPN]()-[sl-pos/ADJ]() (2; 0% instances), [sl-pos/PROPN]()-[sl-pos/PRON]() (2; 0% instances), [sl-pos/PROPN]()-[sl-pos/VERB]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/ADV]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/AUX]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/CONJ]()-[sl-pos/CONJ]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADP]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/PUNCT]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/PROPN]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (1; 0% instances).


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


