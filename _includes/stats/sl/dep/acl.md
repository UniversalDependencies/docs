

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

2388 nodes (2%) are attached to their parents as `acl`.

2384 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.86683417085427.

The following 19 pairs of parts of speech are connected with `acl`: [sl-pos/NOUN]()-[sl-pos/VERB]() (1689; 71% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (215; 9% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (201; 8% instances), [sl-pos/PROPN]()-[sl-pos/VERB]() (96; 4% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (85; 4% instances), [sl-pos/PRON]()-[sl-pos/ADJ]() (31; 1% instances), [sl-pos/PROPN]()-[sl-pos/ADJ]() (12; 1% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (11; 0% instances), [sl-pos/NUM]()-[sl-pos/VERB]() (10; 0% instances), [sl-pos/PROPN]()-[sl-pos/NOUN]() (9; 0% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (8; 0% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (7; 0% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (6; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (2; 0% instances), [sl-pos/X]()-[sl-pos/VERB]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/ADV]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl	color:blue
1	Saj	saj	CONJ	Cc	_	5	cc	_	Dep=3|Rel=Conj
2	država	država	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	Dep=3|Rel=Sb
3	ni	biti	VERB	Va-r3s-y	Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	Dep=0|Rel=Root
4	nekakšen	nekakšen	DET	Pi-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	5	det	_	Dep=5|Rel=Atr
5	moloh	moloh	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No|Dep=3|Rel=Atr
6	,	,	PUNCT	Z	_	9	punct	_	Dep=0|Rel=Root
7	ki	ki	SCONJ	Cs	_	9	mark	_	Dep=9|Rel=Conj
8	nemo	nemo	ADV	Rgp	Degree=Pos	9	advmod	_	Dep=9|Rel=AdvM
9	gleda	gledati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl	_	Dep=5|Rel=Atr
10	na	na	ADP	Sa	Case=Acc	12	case	_	Dep=12|Rel=Atr
11	ta	ta	DET	Pd-msa	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	12	det	_	Dep=12|Rel=Atr
12	narod	narod	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No|Dep=9|Rel=AdvO
13	.	.	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl	color:blue
1	Redni	reden	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	4	amod	_	Dep=4|Rel=Atr
2	in	in	CONJ	Cc	_	1	cc	_	Dep=3|Rel=Conj
3	uravnoteženi	uravnotežen	ADJ	Appmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|VerbForm=Part	1	conj	_	Dep=1|Rel=Coord
4	obroki	obrok	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	Dep=5|Rel=Sb
5	ohranjajo	ohranjati	VERB	Vmpr3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
6	vašo	vaš	DET	Ps2fsap	Case=Acc|Gender=Fem|Number=Sing|Number[psor]=Plur|Person=2|Poss=Yes|PronType=Prs	7	det	_	Dep=7|Rel=Atr
7	težo	teža	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	5	dobj	_	Dep=5|Rel=Obj
8	stabilno	stabilen	ADJ	Agpfsa	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	7	acl	_	SpaceAfter=No|Dep=5|Rel=Atr
9	.	.	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl	color:blue
1	Kot	kot	SCONJ	Cs	_	2	case	_	Dep=2|Rel=Conj
2	tak	tak	PRON	Pd-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	3	nmod	_	Dep=3|Rel=AdvM
3	ni	biti	VERB	Va-r3s-y	Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
4	nekaj	nekaj	PRON	Pi-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Ind	3	nsubj	_	SpaceAfter=No|Dep=3|Rel=Sb
5	,	,	PUNCT	Z	_	8	punct	_	Dep=0|Rel=Root
6	kar	kar	PRON	Pr-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	8	nsubj	_	Dep=8|Rel=Conj
7	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	8	expl	_	Dep=8|Rel=PPart
8	zgodi	zgoditi	VERB	Vmer3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl	_	Dep=4|Rel=Atr
9	v	v	ADP	Sl	Case=Loc	11	case	_	Dep=11|Rel=Atr
10	praznem	prazen	ADJ	Agpmsl	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	Dep=11|Rel=Atr
11	prostoru	prostor	NOUN	Ncmsl	Case=Loc|Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No|Dep=8|Rel=AdvO
12	.	.	PUNCT	Z	_	3	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

315 nodes (1%) are attached to their parents as `acl`.

305 instances of `acl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.24761904761905.

The following 19 pairs of parts of speech are connected with `acl`: [sl-pos/NOUN]()-[sl-pos/VERB]() (153; 49% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (73; 23% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (21; 7% instances), [sl-pos/ADV]()-[sl-pos/VERB]() (14; 4% instances), [sl-pos/PRON]()-[sl-pos/ADJ]() (11; 3% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (7; 2% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (6; 2% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (5; 2% instances), [sl-pos/VERB]()-[sl-pos/VERB]() (5; 2% instances), [sl-pos/NUM]()-[sl-pos/VERB]() (4; 1% instances), [sl-pos/PROPN]()-[sl-pos/VERB]() (4; 1% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (3; 1% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (3; 1% instances), [sl-pos/ADV]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/ADV]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/X]() (1; 0% instances), [sl-pos/X]()-[sl-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 acl	color:blue
1	to	ta	PRON	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	reparandum	_	word=to|msd=Zk-sei
2	ja	ja	PART	Q	_	9	discourse	_	word=ja|msd=L
3	samo	samo	PART	Q	_	9	cc	_	word=sam|msd=L
4	to	ta	PRON	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	9	nsubj	_	word=to|msd=Zk-sei
5	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	word=je|msd=Gp-ste-n
6	dejansko	dejansko	ADV	Rgp	Degree=Pos	9	advmod	_	word=dejansko|msd=Rsn
7	pač	pač	PART	Q	_	9	advmod	_	word=pač|msd=L
8	ta	ta	DET	Pd-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	9	det	_	word=ta|msd=Zk-mei
9	folk	folk	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	word=folk|msd=Somei
10	ki	ki	SCONJ	Cs	_	11	mark	_	word=k|msd=Vd
11	gre	iti	VERB	Vmbr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	acl	_	word=gre|msd=Ggvste
12	sam	sam	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	11	nmod	_	word=sam|msd=Ppnmein
13	na	na	ADP	Sa	Case=Acc	14	case	_	word=na|msd=Dt
14	pijačo	pijača	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	11	nmod	_	word=pijačo|msd=Sozet

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl	color:blue
1	edino	edino	ADV	Rgp	Degree=Pos	2	advmod	_	word=edino|msd=Rsn
2	to	ta	PRON	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	0	root	_	word=to|msd=Zk-sei
3	da	da	SCONJ	Cs	_	6	mark	_	word=da|msd=Vd
4	se	se	PRON	Px------y	PronType=Prs|Variant=Short	6	expl	_	word=se|msd=Zp------k
5	nisi	biti	AUX	Va-r2s-y	Mood=Ind|Negative=Neg|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	aux	_	word=nisi|msd=Gp-sde-d
6	bal	bati	VERB	Vmpp-sm	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part	2	acl	_	word=bal|msd=Ggnd-em
7	da	da	SCONJ	Cs	_	11	mark	_	word=da|msd=Vd
8	te	ti	PRON	Pp2-sa--y	Case=Acc|Number=Sing|Person=2|PronType=Prs|Variant=Short	11	dobj	_	word=te|msd=Zod-et--k
9	bo	biti	AUX	Va-f3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	11	aux	_	word=bo|msd=Gp-pte-n
10	kdo	kdo	PRON	Pq-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	11	nsubj	_	word=kdo|msd=Zv-mei
11	počil	počiti	VERB	Vmep-sm	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	6	ccomp	_	word=počo|msd=Ggdd-em
12	kje	kje	ADV	Rgp	Degree=Pos	11	advmod	_	word=kje|msd=Rsn

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl	color:blue
1	vode	voda	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	7	dobj	_	word=vode|msd=Sozer
2	ki	ki	SCONJ	Cs	_	4	mark	_	word=k|msd=Vd
3	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	word=je|msd=Gp-ste-n
4	mehka	mehek	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	1	acl	_	word=mjehka|msd=Ppnzei
5	ne	ne	PART	Q	_	6	neg	_	word=ne|msd=L
6	moremo	moči	VERB	Vmpr1p	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	word=muormo|msd=Ggnspm
7	stisniti	stisniti	VERB	Vmen	Aspect=Perf|VerbForm=Inf	6	xcomp	_	word=stisnt|msd=Ggdn
8	?	?	PUNCT	Z	_	6	punct	_	word=?|msd=U

~~~


