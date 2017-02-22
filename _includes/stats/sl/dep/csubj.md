

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

512 nodes (0%) are attached to their parents as `csubj`.

479 instances of `csubj` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.861328125.

The following 13 pairs of parts of speech are connected with `csubj`: [sl-pos/VERB]()-[sl-pos/VERB]() (232; 45% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (184; 36% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (48; 9% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (23; 4% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (12; 2% instances), [sl-pos/DET]()-[sl-pos/VERB]() (3; 1% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (3; 1% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 csubj	color:blue
1	Prvo	prvi	ADJ	Mlonsn	Case=Nom|Gender=Neut|Number=Sing|NumType=Ord	2	amod	_	Dep=2|Rel=Atr
2	pravilo	pravilo	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	7	parataxis	_	SpaceAfter=No|Dep=0|Rel=Root
3	:	:	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root
4	Za	za	ADP	Sa	Case=Acc	5	case	_	Dep=5|Rel=Atr
5	nakup	nakup	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	obl	_	Dep=9|Rel=AdvO
6	si	se	PRON	Px---d--y	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	9	expl	_	Dep=9|Rel=PPart
7	je	biti	VERB	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
8	treba	treba	ADV	Rgp	Degree=Pos	7	advmod	_	Dep=7|Rel=AdvM
9	vzeti	vzeti	VERB	Vmen	Aspect=Perf|VerbForm=Inf	7	csubj	_	Dep=7|Rel=Sb
10	čas	čas	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	obj	_	SpaceAfter=No|Dep=9|Rel=Obj
11	.	.	PUNCT	Z	_	7	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	Pomembno	pomemben	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	Dep=2|Rel=Atr
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	_	SpaceAfter=No|Dep=0|Rel=Root
3	,	,	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root
4	da	da	SCONJ	Cs	_	5	mark	_	Dep=5|Rel=Conj
5	zaužijete	zaužiti	VERB	Vmer2p	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	1	csubj	_	Dep=2|Rel=Sb
6	tri	trije	NUM	Mlcmpa	Case=Acc|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	10	nummod	_	Dep=10|Rel=Atr
7	do	do	ADP	Sg	Case=Gen	8	case	_	Dep=8|Rel=Conj
8	štiri	štirje	NUM	Mlcmpa	Case=Acc|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	6	conj	_	Dep=6|Rel=Coord
9	manjše	majhen	ADJ	Agcmpa	Case=Acc|Degree=Cmp|Gender=Masc|Number=Plur	10	amod	_	Dep=10|Rel=Atr
10	obroke	obrok	NOUN	Ncmpa	Case=Acc|Gender=Masc|Number=Plur	5	obj	_	Dep=5|Rel=Obj
11	na	na	ADP	Sa	Case=Acc	12	case	_	Dep=12|Rel=Atr
12	dan	dan	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No|Dep=5|Rel=AdvO
13	.	.	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 csubj	color:blue
1	Seveda	seveda	PART	Q	_	3	advmod	_	Dep=0|Rel=Root
2	pa	pa	CCONJ	Cc	_	3	advmod	_	Dep=0|Rel=Root
3	dobiti	dobiti	VERB	Vmen	Aspect=Perf|VerbForm=Inf	7	csubj	_	Dep=5|Rel=Sb
4	podpis	podpis	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	obj	_	Dep=3|Rel=Obj
5	ni	biti	AUX	Va-r3s-y	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	7	cop	_	Dep=0|Rel=Root
6	lahka	lahek	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	Dep=7|Rel=Atr
7	stvar	stvar	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No|Dep=5|Rel=Atr
8	.	.	PUNCT	Z	_	7	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

48 nodes (0%) are attached to their parents as `csubj`.

46 instances of `csubj` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.125.

The following 7 pairs of parts of speech are connected with `csubj`: [sl-pos/VERB]()-[sl-pos/VERB]() (30; 63% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (9; 19% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (5; 10% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (1; 2% instances), [sl-pos/ADV]()-[sl-pos/ADV]() (1; 2% instances), [sl-pos/ADV]()-[sl-pos/VERB]() (1; 2% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	polmer	polmer	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	_	word=polmer|msd=Sometn
2	bo	biti	VERB	Va-f3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	0	root	_	word=bo|msd=Gp-pte-n
3	treba	treba	ADV	Rgp	Degree=Pos	2	advmod	_	word=treba|msd=Rsn
4	izračunati	izračunati	VERB	Vmen	Aspect=Perf|VerbForm=Inf	2	csubj	_	word=zračunat|msd=Ggdn
5	ne	ne	PART	Q	_	4	discourse	_	word=ne|msd=L

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 csubj	color:blue
1	zdaj	zdaj	ADV	Rgp	Degree=Pos	2	reparandum	_	word=zdaj|msd=Rsn
2	zdaj	zdaj	ADV	Rgp	Degree=Pos	5	advmod	_	word=zaj|msd=Rsn
3	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	cop	_	word=je|msd=Gp-ste-n
4	pa	pa	CCONJ	Cc	_	5	advmod	_	word=pa|msd=Vp
5	odvisno	odvisen	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	word=odvisno|msd=Ppnsei
6	kako	kako	ADV	Rgp	Degree=Pos	10	advmod	_	word=kak|msd=Rsn
7	bo	biti	AUX	Va-f3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	10	aux	_	word=bo|msd=Gp-pte-n
8	kaj	kaj	ADV	Rgp	Degree=Pos	10	advmod	_	word=kaj|msd=Rsn
9	ati	ati	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	word=ati|msd=Somei
10	delal	delati	VERB	Vmpp-sm	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part	5	advcl	_	word=delal|msd=Ggnd-em
11	kje	kje	ADV	Rgp	Degree=Pos	12	advmod	_	word=ki|msd=Rsn
12	bo	biti	VERB	Va-f3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	5	csubj	_	word=bo|msd=Gp-pte-n
13	kaj	kaj	PRON	Pq-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	12	nsubj	_	word=kaj|msd=Zv-sei

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	ja	ja	PART	Q	_	3	discourse	_	word=ja|msd=L
2	samo	samo	PART	Q	_	3	cc	_	word=sam|msd=L
3	vprašanje	vprašanje	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	0	root	_	word=vprašanje|msd=Sosei
4	kdo	kdo	PRON	Pq-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	5	nsubj	_	word=kdo|msd=Zv-mei
5	je	biti	VERB	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	csubj	_	word=je|msd=Gp-ste-n
6	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	expl	_	word=to|msd=Zk-sei
7	v	v	ADP	Sl	Case=Loc	8	case	_	word=v|msd=Dm
8	resnici	resnica	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	5	obl	_	word=resnici|msd=Sozem
9	izza	izza	ADP	Sg	Case=Gen	10	case	_	word=izza|msd=Dr
10	tega	ta	DET	Pd-nsg	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	5	obl	_	word=tega|msd=Zk-ser
11	ne	ne	PART	Q	_	3	discourse	_	word=ne|msd=L

~~~


