

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

1586 nodes (1%) are attached to their parents as `nummod`.

1263 instances of `nummod` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44829760403531.

The following 6 pairs of parts of speech are connected with `nummod`: [sl-pos/NOUN]()-[sl-pos/NUM]() (1467; 92% instances), [sl-pos/ADJ]()-[sl-pos/NUM]() (59; 4% instances), [sl-pos/PROPN]()-[sl-pos/NUM]() (47; 3% instances), [sl-pos/PRON]()-[sl-pos/NUM]() (7; 0% instances), [sl-pos/ADV]()-[sl-pos/NUM]() (5; 0% instances), [sl-pos/X]()-[sl-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nummod	color:blue
1	Evharistični	evharističen	ADJ	Agpmsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	Dep=2|Rel=Atr
2	Kruh	kruh	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	Dep=4|Rel=Sb
3	naj	naj	PART	Q	_	4	advmod	_	Dep=4|Rel=PPart
4	napravlja	napravljati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
5	iz	iz	ADP	Sg	Case=Gen	6	case	_	Dep=6|Rel=Atr
6	nas	jaz	PRON	Pp1-pg	Case=Gen|Number=Plur|Person=1|PronType=Prs	4	nmod	_	Dep=4|Rel=AdvM
7	eno	en	NUM	Mlpnsa	Case=Acc|Gender=Neut|Number=Sing|NumForm=Word|NumType=Card	9	nummod	_	Dep=9|Rel=Atr
8	samo	sam	ADJ	Agpnsa	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	9	amod	_	Dep=9|Rel=Atr
9	telo	telo	NOUN	Ncnsa	Case=Acc|Gender=Neut|Number=Sing	4	dobj	_	SpaceAfter=No|Dep=4|Rel=Obj
10	.	.	PUNCT	Z	_	4	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nummod	color:blue
1	Danes	danes	ADV	Rgp	Degree=Pos	2	advmod	_	Dep=2|Rel=AdvO
2	ima	imeti	VERB	Vmpr3s-n	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
3	Primorje	Primorje	PROPN	Npnsn	Case=Nom|Gender=Neut|Number=Sing	2	nsubj	_	Dep=2|Rel=Sb
4	že	že	PART	Q	_	2	advmod	_	Dep=0|Rel=Root
5	več	več	ADV	Rgc	Degree=Cmp	9	advmod	_	Dep=9|Rel=Atr
6	kot	kot	SCONJ	Cs	_	5	mwe	_	Dep=9|Rel=Atr
7	91	91	NUM	Mdc	NumForm=Digit|NumType=Card	9	nummod	_	SpaceAfter=No|Dep=9|Rel=Atr
8	-	-	PUNCT	Z	_	2	punct	_	SpaceAfter=No|Dep=0|Rel=Root
9	odstotni	odstoten	ADJ	Agpmsay	Case=Acc|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	Dep=10|Rel=Atr
10	delež	delež	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	dobj	_	Dep=2|Rel=Obj
11	Gradisa	Gradis	PROPN	Npmsg	Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	Dep=10|Rel=Atr
12	GPL	GPL	PROPN	Npmsg	Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No|Dep=11|Rel=Atr
13	.	.	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nummod	color:blue
1	Od	od	ADP	Sg	Case=Gen	2	case	_	Dep=2|Rel=Atr
2	izstrelitve	izstrelitev	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	Dep=7|Rel=AdvO
3	sonde	sonda	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	Dep=2|Rel=Atr
4	Pioneer	Pioneer	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	3	nmod	_	Dep=3|Rel=Atr
5	VI	VI	NUM	Mrc	NumForm=Roman|NumType=Card	4	nummod	_	Dep=4|Rel=Atr
6	je	biti	AUX	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	Dep=7|Rel=PPart
7	minilo	miniti	VERB	Vmep-sn	Aspect=Perf|Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
8	že	že	PART	Q	_	7	advmod	_	Dep=0|Rel=Root
9	35	35	NUM	Mdc	NumForm=Digit|NumType=Card	10	nummod	_	Dep=10|Rel=Atr
10	let	leto	NOUN	Ncnpg	Case=Gen|Gender=Neut|Number=Plur	7	nsubj	_	SpaceAfter=No|Dep=7|Rel=Sb
11	.	.	PUNCT	Z	_	7	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

284 nodes (1%) are attached to their parents as `nummod`.

258 instances of `nummod` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.38380281690141.

The following 7 pairs of parts of speech are connected with `nummod`: [sl-pos/NOUN]()-[sl-pos/NUM]() (261; 92% instances), [sl-pos/ADJ]()-[sl-pos/NUM]() (8; 3% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (6; 2% instances), [sl-pos/PRON]()-[sl-pos/NUM]() (4; 1% instances), [sl-pos/PROPN]()-[sl-pos/NUM]() (3; 1% instances), [sl-pos/INTJ]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nummod	color:blue
1	sto	sto	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	5	nummod	_	word=sto|msd=Kbg-mt
2	šestdeset	šestdeset	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	1	compound	_	word=šestdeset|msd=Kbg-mt
3	sto	sto	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	1	conj	_	word=sto|msd=Kbg-mt
4	sedemdeset	sedemdeset	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	3	compound	_	word=sendeset|msd=Kbg-mt
5	glav	glava	NOUN	Ncfpg	Case=Gen|Gender=Fem|Number=Plur	0	root	_	word=glav|msd=Sozmr
6	živine	živina	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	word=žvine|msd=Sozer

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	tudi	tudi	PART	Q	_	7	advmod	_	word=tut|msd=L
2	ko	ko	SCONJ	Cs	_	7	mark	_	word=ku|msd=Vd
3	pri	pri	ADP	Sl	Case=Loc	5	case	_	word=par|msd=Dm
4	štirje	štirje	NUM	Mlcmpn	Case=Nom|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	5	nummod	_	word=Štirje|msd=Kbgmmi
5	revni	reven	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	7	nmod	_	word=revni|msd=Ppnmmi
6	veš	vedeti	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	7	parataxis:discourse	_	word=vajš|msd=Ggnsde
7	špila	špilati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=špejla|msd=Ggnste
8	na	na	ADP	Sa	Case=Acc	9	case	_	word=na|msd=Dt
9	glavnik	glavnik	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	nmod	_	word=glavnejk|msd=Sometn
10	pa	pa	CONJ	Cc	_	7	cc	_	word=pa|msd=Vp
11	to	ta	PRON	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	7	conj:extend	_	word=tav|msd=Zk-sei

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 nummod	color:blue
1	tako	tako	ADV	Rgp	Degree=Pos	4	discourse	_	word=tako|msd=Rsn
2	ja	ja	PART	Q	_	4	discourse	_	word=ja|msd=L
3	meter	meter	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	word=metr|msd=Somei
4	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=je|msd=Gp-ste-n
5	koliko	koliko	ADV	Rgp	Degree=Pos	6	advmod	_	word=kuk|msd=Rsn
6	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	parataxis	_	word=je|msd=Gp-ste-n
7	meter	meter	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	word=metr|msd=Somei
8	meter	meter	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	word=metr|msd=Somei
9	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	parataxis:restart	_	word=je|msd=Gp-ste-n
10	tam	tam	ADV	Rgp	Degree=Pos	11	advmod	_	word=tam|msd=Rsn
11	okoli	okoli	ADV	Rgp	Degree=Pos	12	advmod	_	word=okul|msd=Rsn
12	štiriindvajset	štiriindvajset	NUM	Mlc-pn	Case=Nom|Number=Plur|NumForm=Word|NumType=Card	9	nummod	_	word=štiriindvajst|msd=Kbg-mi
13	devetindevetdeset	devetindevetdeset	NUM	Mlc-pn	Case=Nom|Number=Plur|NumForm=Word|NumType=Card	12	conj	_	word=devetindeveeset|msd=Kbg-mi
14	ne	ne	PART	Q	_	9	discourse	_	word=ne|msd=L
15	ali	ali	CONJ	Cc	_	9	cc	_	word=al|msd=Vp
16	koliko	koliko	ADV	Rgp	Degree=Pos	17	advmod	_	word=kuk|msd=Rsn
17	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	conj	_	word=je|msd=Gp-ste-n

~~~


