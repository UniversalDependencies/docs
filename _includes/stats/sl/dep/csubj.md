

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

559 nodes (0%) are attached to their parents as `csubj`.

522 instances of `csubj` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.7602862254025.

The following 12 pairs of parts of speech are connected with `csubj`: [sl-pos/VERB]()-[sl-pos/VERB]() (251; 45% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (206; 37% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (50; 9% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (25; 4% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (13; 2% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (5; 1% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (3; 1% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (1; 0% instances).


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
5	nakup	nakup	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	nmod	_	Dep=9|Rel=AdvO
6	si	se	PRON	Px---d--y	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	9	expl	_	Dep=9|Rel=PPart
7	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
8	treba	treba	ADV	Rgp	Degree=Pos	7	advmod	_	Dep=7|Rel=AdvM
9	vzeti	vzeti	VERB	Vmen	Aspect=Perf|VerbForm=Inf	7	csubj	_	Dep=7|Rel=Sb
10	čas	čas	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	dobj	_	SpaceAfter=No|Dep=9|Rel=Obj
11	.	.	PUNCT	Z	_	7	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	Pomembno	pomemben	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	Dep=2|Rel=Atr
2	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	SpaceAfter=No|Dep=0|Rel=Root
3	,	,	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root
4	da	da	SCONJ	Cs	_	5	mark	_	Dep=5|Rel=Conj
5	zaužijete	zaužiti	VERB	Vmer2p	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	1	csubj	_	Dep=2|Rel=Sb
6	tri	trije	NUM	Mlcmpa	Case=Acc|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	10	nummod	_	Dep=10|Rel=Atr
7	do	do	ADP	Sg	Case=Gen	8	case	_	Dep=8|Rel=Conj
8	štiri	štirje	NUM	Mlcmpa	Case=Acc|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	6	conj	_	Dep=6|Rel=Coord
9	manjše	majhen	ADJ	Agcmpa	Case=Acc|Degree=Cmp|Gender=Masc|Number=Plur	10	amod	_	Dep=10|Rel=Atr
10	obroke	obrok	NOUN	Ncmpa	Case=Acc|Gender=Masc|Number=Plur	5	dobj	_	Dep=5|Rel=Obj
11	na	na	ADP	Sa	Case=Acc	12	case	_	Dep=12|Rel=Atr
12	dan	dan	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No|Dep=5|Rel=AdvO
13	.	.	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 csubj	color:blue
1	Seveda	seveda	PART	Q	_	3	advmod	_	Dep=0|Rel=Root
2	pa	pa	CONJ	Cc	_	3	advmod	_	Dep=0|Rel=Root
3	dobiti	dobiti	VERB	Vmen	Aspect=Perf|VerbForm=Inf	7	csubj	_	Dep=5|Rel=Sb
4	podpis	podpis	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	dobj	_	Dep=3|Rel=Obj
5	ni	biti	VERB	Va-r3s-y	Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	Dep=0|Rel=Root
6	lahka	lahek	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	Dep=7|Rel=Atr
7	stvar	stvar	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No|Dep=5|Rel=Atr
8	.	.	PUNCT	Z	_	7	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

89 nodes (0%) are attached to their parents as `csubj`.

84 instances of `csubj` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.34831460674157.

The following 11 pairs of parts of speech are connected with `csubj`: [sl-pos/VERB]()-[sl-pos/VERB]() (46; 52% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (19; 21% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (10; 11% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (3; 3% instances), [sl-pos/ADV]()-[sl-pos/VERB]() (3; 3% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (2; 2% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (2; 2% instances), [sl-pos/ADJ]()-[sl-pos/PART]() (1; 1% instances), [sl-pos/ADV]()-[sl-pos/ADV]() (1; 1% instances), [sl-pos/ADV]()-[sl-pos/PART]() (1; 1% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 csubj	color:blue
1	nič	nič	ADV	Rgp	Degree=Pos	4	advmod	_	word=nič|msd=Rsn
2	jih	on	PRON	Pp3mpg--y	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Variant=Short	4	dobj	_	word=jim|msd=Zotmmr--k
3	ne	ne	PART	Q	_	4	neg	_	word=ne|msd=L
4	briga	brigati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=briga|msd=Ggnste
5	kaj	kaj	PRON	Pq-nsa	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	6	dobj	_	word=kaj|msd=Zv-set
6	rečeš	reči	VERB	Vmer2s	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	csubj	_	word=rečeš|msd=Ggdsde

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 csubj	color:blue
1	ja	ja	PART	Q	_	5	discourse	_	word=ja|msd=L
2	to	ta	PRON	Pd-nsa	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	6	dobj	_	word=to|msd=Zk-set
3	bi	biti	AUX	Va-c	Mood=Cnd|VerbForm=Fin	5	aux	_	word=bi|msd=Gp-g
4	bilo	biti	VERB	Va-p-sn	Gender=Neut|Number=Sing|VerbForm=Part	5	cop	_	word=blo|msd=Gp-d-es
5	zanimivo	zanimiv	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	word=zanimivo|msd=Ppnsei
6	primerjati	primerjati	VERB	Vmpn	Aspect=Imp|VerbForm=Inf	5	csubj	_	word=primerjat|msd=Ggnn
7	ja	ja	PART	Q	_	5	discourse	_	word=ja|msd=L
8	…	…	PUNCT	Z	_	5	punct	_	word=…|msd=U
9	v	v	ADP	Sl	Case=Loc	10	case	_	word=v|msd=Dm
10	mestu	mesto	NOUN	Ncnsl	Case=Loc|Gender=Neut|Number=Sing	11	nmod	_	word=mestu|msd=Sosem
11	imajo	imeti	VERB	Vmpr3p-n	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	parataxis	_	word=majo|msd=Ggnstm-n
12	tudi	tudi	PART	Q	_	11	advmod	_	word=tud|msd=L
13	te	ta	PRON	Pd-mpa	Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	11	dobj	_	word=te|msd=Zk-mmt
14	?	?	PUNCT	Z	_	11	punct	_	word=?|msd=U

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
5	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	csubj	_	word=je|msd=Gp-ste-n
6	to	ta	PRON	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	expl	_	word=to|msd=Zk-sei
7	v	v	ADP	Sl	Case=Loc	8	case	_	word=v|msd=Dm
8	resnici	resnica	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	5	nmod	_	word=resnici|msd=Sozem
9	izza	izza	ADP	Sg	Case=Gen	10	case	_	word=izza|msd=Dr
10	tega	ta	PRON	Pd-nsg	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	5	nmod	_	word=tega|msd=Zk-ser
11	ne	ne	PART	Q	_	3	discourse	_	word=ne|msd=L

~~~


