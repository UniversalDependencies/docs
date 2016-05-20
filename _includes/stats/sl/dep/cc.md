

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.
There are 1 language-specific subtypes of `cc`: [cc:preconj]().

4631 nodes (3%) are attached to their parents as `cc`.

4209 instances of `cc` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.94299287410926.

The following 19 pairs of parts of speech are connected with `cc`: [sl-pos/VERB]()-[sl-pos/CONJ]() (1797; 39% instances), [sl-pos/NOUN]()-[sl-pos/CONJ]() (1749; 38% instances), [sl-pos/ADJ]()-[sl-pos/CONJ]() (666; 14% instances), [sl-pos/PROPN]()-[sl-pos/CONJ]() (210; 5% instances), [sl-pos/ADV]()-[sl-pos/CONJ]() (76; 2% instances), [sl-pos/PRON]()-[sl-pos/CONJ]() (40; 1% instances), [sl-pos/NUM]()-[sl-pos/CONJ]() (38; 1% instances), [sl-pos/NOUN]()-[sl-pos/SCONJ]() (24; 1% instances), [sl-pos/ADJ]()-[sl-pos/SCONJ]() (8; 0% instances), [sl-pos/DET]()-[sl-pos/CONJ]() (5; 0% instances), [sl-pos/ADP]()-[sl-pos/CONJ]() (3; 0% instances), [sl-pos/NOUN]()-[sl-pos/PART]() (3; 0% instances), [sl-pos/PRON]()-[sl-pos/SCONJ]() (3; 0% instances), [sl-pos/X]()-[sl-pos/CONJ]() (3; 0% instances), [sl-pos/PROPN]()-[sl-pos/X]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/X]() (1; 0% instances), [sl-pos/AUX]()-[sl-pos/CONJ]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/SCONJ]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc	color:blue
1	In	in	CONJ	Cc	_	3	cc	_	Dep=3|Rel=Conj
2	ali	ali	CONJ	Cc	_	3	cc	_	Dep=3|Rel=Conj
3	nadzira	nadzirati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
4	tudi	tudi	PART	Q	_	3	advmod	_	Dep=0|Rel=Root
5	politične	političen	ADJ	Agpmpa	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	6	amod	_	Dep=6|Rel=Atr
6	nasprotnike	nasprotnik	NOUN	Ncmpa	Case=Acc|Gender=Masc|Number=Plur	3	dobj	_	Dep=3|Rel=Obj
7	in	in	CONJ	Cc	_	6	cc	_	Dep=9|Rel=Conj
8	navadne	navaden	ADJ	Agpmpa	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	9	amod	_	Dep=9|Rel=Atr
9	državljane	državljan	NOUN	Ncmpa	Case=Acc|Gender=Masc|Number=Plur	6	conj	_	SpaceAfter=No|Dep=6|Rel=Coord
10	.	.	PUNCT	Z	_	3	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 cc	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 cc	color:blue
1	Zato	zato	CONJ	Cc	_	8	cc	_	Dep=2|Rel=Conj
2	sta	biti	VERB	Va-r3d-n	Mood=Ind|Negative=Pos|Number=Dual|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	Dep=0|Rel=Root
3	struktura	struktura	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	8	nsubj	_	Dep=2|Rel=Sb
4	in	in	CONJ	Cc	_	3	cc	_	Dep=5|Rel=Conj
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

1142 nodes (4%) are attached to their parents as `cc`.

709 instances of `cc` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.68563922942207.

The following 28 pairs of parts of speech are connected with `cc`: [sl-pos/VERB]()-[sl-pos/CONJ]() (615; 54% instances), [sl-pos/NOUN]()-[sl-pos/CONJ]() (219; 19% instances), [sl-pos/ADJ]()-[sl-pos/CONJ]() (97; 8% instances), [sl-pos/ADV]()-[sl-pos/CONJ]() (38; 3% instances), [sl-pos/PROPN]()-[sl-pos/CONJ]() (36; 3% instances), [sl-pos/PRON]()-[sl-pos/CONJ]() (35; 3% instances), [sl-pos/VERB]()-[sl-pos/PART]() (25; 2% instances), [sl-pos/NUM]()-[sl-pos/CONJ]() (11; 1% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (11; 1% instances), [sl-pos/PART]()-[sl-pos/CONJ]() (10; 1% instances), [sl-pos/NOUN]()-[sl-pos/PART]() (6; 1% instances), [sl-pos/VERB]()-[sl-pos/ADV]() (6; 1% instances), [sl-pos/ADJ]()-[sl-pos/PART]() (5; 0% instances), [sl-pos/NUM]()-[sl-pos/ADP]() (5; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADV]() (3; 0% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (3; 0% instances), [sl-pos/X]()-[sl-pos/CONJ]() (3; 0% instances), [sl-pos/ADP]()-[sl-pos/CONJ]() (2; 0% instances), [sl-pos/CONJ]()-[sl-pos/CONJ]() (2; 0% instances), [sl-pos/NOUN]()-[sl-pos/SCONJ]() (2; 0% instances), [sl-pos/DET]()-[sl-pos/CONJ]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/PART]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/ADV]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/X]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 cc	color:blue
1	pa	pa	CONJ	Cc	_	2	advmod	_	word=pa|msd=Vp
2	greš	iti	VERB	Vmbr2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	word=greš|msd=Ggvsde
3	ven	ven	ADV	Rgp	Degree=Pos	2	advmod	_	word=vn|msd=Rsn
4	pa	pa	CONJ	Cc	_	2	cc	_	word=pa|msd=Vp
5	prideš	priti	VERB	Vmer2s	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	conj	_	word=prieš|msd=Ggdsde
6	nazaj	nazaj	ADV	Rgp	Degree=Pos	5	advmod	_	word=nazaj|msd=Rsn

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 cc	color:blue
1	torej	torej	CONJ	Cc	_	7	cc	_	word=torej|msd=Vp
2	pač	pač	PART	Q	_	7	advmod	_	word=pač|msd=L
3	iz	iz	ADP	Sg	Case=Gen	7	case	_	word=iz|msd=Dr
4	eee	eee	INTJ	I	_	7	discourse:filler	_	word=eee|msd=M
5	pač	pač	PART	Q	_	7	advmod	_	word=pš|msd=L
6	tozadevnega	tozadeven	ADJ	Agpmsg	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	word=tozadevnga|msd=Ppnmer
7	specialista	specialist	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	0	root	_	word=špecialista|msd=Somer
8	no	no	PART	Q	_	7	discourse	_	word=no|msd=L
9	…	…	PUNCT	Z	_	7	punct	_	word=…|msd=U
10	mhm	mhm	INTJ	I	_	7	discourse	_	word=mhm|msd=M
11	mhm	mhm	INTJ	I	_	7	discourse	_	word=mhm|msd=M
12	mhm	mhm	INTJ	I	_	7	discourse	_	word=mhm|msd=M

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cc	color:blue
1	da	da	PART	Q	_	4	discourse	_	word=da|msd=L
2	saj	saj	CONJ	Cc	_	4	cc	_	word=sej|msd=Vp
3	je	biti	AUX	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	word=je|msd=Gp-ste-n
4	rečeno	rečen	ADJ	Appnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	word=rečeno|msd=Pdnsei
5	bilo	biti	VERB	Vmpp-sn	Aspect=Imp|Gender=Neut|Number=Sing|VerbForm=Part	4	cop	_	word=blo|msd=Ggnd-es

~~~


