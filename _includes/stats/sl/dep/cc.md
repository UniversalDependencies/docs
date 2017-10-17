

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.
There are 1 language-specific subtypes of `cc`: [cc:preconj]().

4178 nodes (3%) are attached to their parents as `cc`.

4178 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.39564384873145.

The following 20 pairs of parts of speech are connected with `cc`: [sl-pos/VERB]()-[sl-pos/CCONJ]() (1684; 40% instances), [sl-pos/NOUN]()-[sl-pos/CCONJ]() (1557; 37% instances), [sl-pos/ADJ]()-[sl-pos/CCONJ]() (568; 14% instances), [sl-pos/PROPN]()-[sl-pos/CCONJ]() (170; 4% instances), [sl-pos/ADV]()-[sl-pos/CCONJ]() (69; 2% instances), [sl-pos/DET]()-[sl-pos/CCONJ]() (30; 1% instances), [sl-pos/NUM]()-[sl-pos/CCONJ]() (28; 1% instances), [sl-pos/PRON]()-[sl-pos/CCONJ]() (21; 1% instances), [sl-pos/NOUN]()-[sl-pos/SCONJ]() (20; 0% instances), [sl-pos/ADJ]()-[sl-pos/SCONJ]() (7; 0% instances), [sl-pos/NOUN]()-[sl-pos/X]() (6; 0% instances), [sl-pos/ADP]()-[sl-pos/CCONJ]() (3; 0% instances), [sl-pos/NOUN]()-[sl-pos/PART]() (3; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (3; 0% instances), [sl-pos/X]()-[sl-pos/CCONJ]() (3; 0% instances), [sl-pos/DET]()-[sl-pos/SCONJ]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/X]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/X]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/SCONJ]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc	color:blue
1	In	in	CCONJ	Cc	_	3	cc	_	Dep=3|Rel=Conj
2	ali	ali	CCONJ	Cc	_	3	cc	_	Dep=3|Rel=Conj
3	nadzira	nadzirati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
4	tudi	tudi	PART	Q	_	3	advmod	_	Dep=0|Rel=Root
5	politične	političen	ADJ	Agpmpa	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	6	amod	_	Dep=6|Rel=Atr
6	nasprotnike	nasprotnik	NOUN	Ncmpa	Case=Acc|Gender=Masc|Number=Plur	3	obj	_	Dep=3|Rel=Obj
7	in	in	CCONJ	Cc	_	9	cc	_	Dep=9|Rel=Conj
8	navadne	navaden	ADJ	Agpmpa	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	9	amod	_	Dep=9|Rel=Atr
9	državljane	državljan	NOUN	Ncmpa	Case=Acc|Gender=Masc|Number=Plur	6	conj	_	SpaceAfter=No|Dep=6|Rel=Coord
10	.	.	PUNCT	Z	_	3	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 cc	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 cc	color:blue
1	Zato	zato	CCONJ	Cc	_	8	cc	_	Dep=2|Rel=Conj
2	sta	biti	AUX	Va-r3d-n	Mood=Ind|Number=Dual|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	cop	_	Dep=0|Rel=Root
3	struktura	struktura	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	8	nsubj	_	Dep=2|Rel=Sb
4	in	in	CCONJ	Cc	_	5	cc	_	Dep=5|Rel=Conj
5	slog	slog	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	3	conj	_	Dep=3|Rel=Coord
6	pisanja	pisanje	NOUN	Ncnsg	Case=Gen|Gender=Neut|Number=Sing	5	nmod	_	Dep=5|Rel=Atr
7	poročila	poročilo	NOUN	Ncnsg	Case=Gen|Gender=Neut|Number=Sing	6	nmod	_	Dep=6|Rel=Atr
8	drugačna	drugačen	ADJ	Agpmdn	Case=Nom|Degree=Pos|Gender=Masc|Number=Dual	0	root	_	SpaceAfter=No|Dep=2|Rel=Atr
9	.	.	PUNCT	Z	_	8	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.
There are 1 language-specific subtypes of `cc`: [cc:preconj]().

758 nodes (4%) are attached to their parents as `cc`.

747 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.52506596306069.

The following 27 pairs of parts of speech are connected with `cc`: [sl-pos/VERB]()-[sl-pos/CCONJ]() (371; 49% instances), [sl-pos/NOUN]()-[sl-pos/CCONJ]() (138; 18% instances), [sl-pos/ADJ]()-[sl-pos/CCONJ]() (62; 8% instances), [sl-pos/DET]()-[sl-pos/CCONJ]() (45; 6% instances), [sl-pos/ADV]()-[sl-pos/CCONJ]() (28; 4% instances), [sl-pos/PROPN]()-[sl-pos/CCONJ]() (22; 3% instances), [sl-pos/PART]()-[sl-pos/CCONJ]() (18; 2% instances), [sl-pos/PRON]()-[sl-pos/CCONJ]() (18; 2% instances), [sl-pos/VERB]()-[sl-pos/PART]() (12; 2% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (6; 1% instances), [sl-pos/X]()-[sl-pos/CCONJ]() (6; 1% instances), [sl-pos/NUM]()-[sl-pos/CCONJ]() (5; 1% instances), [sl-pos/VERB]()-[sl-pos/ADV]() (5; 1% instances), [sl-pos/NUM]()-[sl-pos/ADP]() (4; 1% instances), [sl-pos/ADJ]()-[sl-pos/PART]() (3; 0% instances), [sl-pos/NOUN]()-[sl-pos/PART]() (3; 0% instances), [sl-pos/NOUN]()-[sl-pos/SCONJ]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/ADP]()-[sl-pos/CCONJ]() (1; 0% instances), [sl-pos/CCONJ]()-[sl-pos/CCONJ]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/PART]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	torej	torej	CCONJ	Cc	_	5	cc	_	word=torej|msd=Vp
2	bomo	biti	AUX	Va-f1p-n	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Fut|VerbForm=Fin	5	aux	_	word=bomo|msd=Gp-ppm-n
3	naslednji	naslednji	ADJ	Agpmsay	Case=Acc|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	word=naslednji|msd=Ppnmetd
4	teden	teden	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obl	_	word=teden|msd=Sometn
5	doživeli	doživeti	VERB	Vmep-pm	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	word=doživeli|msd=Ggdd-mm
6	stotko	stotka	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	word=stotko|msd=Sozet
7	?	?	PUNCT	Z	_	5	punct	_	word=?|msd=U

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 cc	color:blue
1	tu	tu	ADV	Rgp	Degree=Pos	0	root	_	word=tu|msd=Rsn
2	[gap]	[gap]	X	X	_	1	punct	_	word=[gap]|msd=N
3	ko	ko	SCONJ	Cs	_	4	mark	_	word=ko|msd=Vd
4	greš	iti	VERB	Vmbr2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	1	parataxis	_	word=greš|msd=Ggvsde
5	v	v	ADP	Sa	Case=Acc	6	case	_	word=v|msd=Dt
6	šolo	šola	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	4	obl	_	word=šolo|msd=Sozet
7	pa	pa	CCONJ	Cc	_	10	cc	_	word=pa|msd=Vp
8	si	biti	AUX	Va-r2s-n	Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	cop	_	word=si|msd=Gp-sde-n
9	prvič	prvič	ADV	Rgp	Degree=Pos	10	advmod	_	word=prvič|msd=Rsn
10	ocenjen	ocenjen	ADJ	Appmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part	4	conj	_	word=ocenjen|msd=Pdnmein
11	recimo	reči	VERB	Vmem1p	Aspect=Perf|Mood=Imp|Number=Plur|Person=1|VerbForm=Fin	4	parataxis:discourse	_	word=recimo|msd=Ggdvpm
12	a	a	ADV	Rgp	Degree=Pos	4	discourse	_	word=a|msd=Rsn
13	ne	ne	PART	Q	_	12	fixed	_	word=ne|msd=L

~~~


