

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

7212 nodes (6%) are attached to their parents as `root`.

7212 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.94869661674986.

The following 13 pairs of parts of speech are connected with `root`: [sl-pos/ROOT]()-[sl-pos/VERB]() (5597; 78% instances), [sl-pos/ROOT]()-[sl-pos/ADJ]() (944; 13% instances), [sl-pos/ROOT]()-[sl-pos/NOUN]() (531; 7% instances), [sl-pos/ROOT]()-[sl-pos/X]() (57; 1% instances), [sl-pos/ROOT]()-[sl-pos/DET]() (27; 0% instances), [sl-pos/ROOT]()-[sl-pos/PROPN]() (19; 0% instances), [sl-pos/ROOT]()-[sl-pos/ADV]() (10; 0% instances), [sl-pos/ROOT]()-[sl-pos/NUM]() (10; 0% instances), [sl-pos/ROOT]()-[sl-pos/PRON]() (8; 0% instances), [sl-pos/ROOT]()-[sl-pos/PART]() (5; 0% instances), [sl-pos/ROOT]()-[sl-pos/PUNCT]() (2; 0% instances), [sl-pos/ROOT]()-[sl-pos/CCONJ]() (1; 0% instances), [sl-pos/ROOT]()-[sl-pos/INTJ]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 10 root	color:blue
1	Zakonodaja	zakonodaja	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	Dep=6|Rel=Sb
2	in	in	CCONJ	Cc	_	3	cc	_	Dep=3|Rel=Conj
3	trg	trg	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	1	conj	_	Dep=1|Rel=Coord
4	delovne	deloven	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	Dep=5|Rel=Atr
5	sile	sila	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	Dep=3|Rel=Atr
6	sta	biti	AUX	Va-r3d-n	Mood=Ind|Number=Dual|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	cop	_	Dep=0|Rel=Root
7	med	med	ADP	Si	Case=Ins	8	case	_	Dep=8|Rel=Atr
8	seboj	se	PRON	Px---i	Case=Ins|PronType=Prs|Reflex=Yes	10	nmod	_	Dep=10|Rel=Atr
9	tesno	tesno	ADV	Rgp	Degree=Pos	10	advmod	_	Dep=10|Rel=Atr
10	povezana	povezan	ADJ	Appmdn	Case=Nom|Degree=Pos|Gender=Masc|Number=Dual|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=6|Rel=Atr
11	.	.	PUNCT	Z	_	10	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Škoda	škoda	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	Dep=2|Rel=Atr
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	_	SpaceAfter=No|Dep=0|Rel=Root
3	,	,	PUNCT	Z	_	7	punct	_	Dep=0|Rel=Root
4	da	da	SCONJ	Cs	_	7	mark	_	Dep=7|Rel=Conj
5	slovenski	slovenski	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	6	amod	_	Dep=6|Rel=Atr
6	uporabniki	uporabnik	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	Dep=7|Rel=Sb
7	iščejo	iskati	VERB	Vmpr3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	csubj	_	Dep=2|Rel=Sb
8	informacije	informacija	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	7	obj	_	Dep=7|Rel=Obj
9	na	na	ADP	Sl	Case=Loc	11	case	_	Dep=11|Rel=Atr
10	tujih	tuj	ADJ	Agpfpl	Case=Loc|Degree=Pos|Gender=Fem|Number=Plur	11	amod	_	Dep=11|Rel=Atr
11	straneh	stran	NOUN	Ncfpl	Case=Loc|Gender=Fem|Number=Plur	7	obl	_	SpaceAfter=No|Dep=7|Rel=AdvO
12	.	.	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

2137 nodes (11%) are attached to their parents as `root`.

2137 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.38371548900328.

The following 13 pairs of parts of speech are connected with `root`: [sl-pos/ROOT]()-[sl-pos/VERB]() (1000; 47% instances), [sl-pos/ROOT]()-[sl-pos/NOUN]() (269; 13% instances), [sl-pos/ROOT]()-[sl-pos/X]() (223; 10% instances), [sl-pos/ROOT]()-[sl-pos/PART]() (129; 6% instances), [sl-pos/ROOT]()-[sl-pos/ADJ]() (123; 6% instances), [sl-pos/ROOT]()-[sl-pos/INTJ]() (118; 6% instances), [sl-pos/ROOT]()-[sl-pos/ADV]() (99; 5% instances), [sl-pos/ROOT]()-[sl-pos/PROPN]() (53; 2% instances), [sl-pos/ROOT]()-[sl-pos/DET]() (47; 2% instances), [sl-pos/ROOT]()-[sl-pos/PRON]() (44; 2% instances), [sl-pos/ROOT]()-[sl-pos/NUM]() (18; 1% instances), [sl-pos/ROOT]()-[sl-pos/CCONJ]() (12; 1% instances), [sl-pos/ROOT]()-[sl-pos/SCONJ]() (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	nismo	biti	AUX	Va-r1p-y	Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	3	aux	_	word=nismo|msd=Gp-spm-d
2	[gap]	[gap]	X	X	_	3	punct	_	word=[gap]|msd=N
3	zmenili	zmeniti	VERB	Vmep-pm	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	word=zmenil|msd=Ggdd-mm
4	ja	ja	PART	Q	_	3	discourse	_	word=ja|msd=L

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	samo	samo	PART	Q	_	2	advmod	_	word=samo|msd=L
2	barva	barva	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	word=barva|msd=Sozei
3	ne	ne	PART	Q	_	2	discourse	_	word=ne|msd=L

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	genau	genau	X	Xf	Foreign=Yes	0	root	_	word=genau|msd=Nj
2	wo	wo	X	Xf	Foreign=Yes	1	flat:foreign	_	word=vo|msd=Nj
3	ist	ist	X	Xf	Foreign=Yes	1	flat:foreign	_	word=isn[split_1-2]|msd=Nj
4	den	den	X	Xf	Foreign=Yes	1	flat:foreign	_	word=isn[split_2-2]|msd=Nj
5	das	das	X	Xf	Foreign=Yes	1	flat:foreign	_	word=dos|msd=Nj
6	?	?	PUNCT	Z	_	1	punct	_	word=?|msd=U
7	ach	ach	X	Xf	Foreign=Yes	1	parataxis	_	word=a|msd=Nj
8	so	so	X	Xf	Foreign=Yes	7	flat:foreign	_	word=so|msd=Nj
9	da	da	X	Xf	Foreign=Yes	7	flat:foreign	_	word=do|msd=Nj

~~~


