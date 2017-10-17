

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

2132 nodes (2%) are attached to their parents as `acl`.

2128 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.91604127579737.

The following 23 pairs of parts of speech are connected with `acl`: [sl-pos/NOUN]()-[sl-pos/VERB]() (1505; 71% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (194; 9% instances), [sl-pos/DET]()-[sl-pos/VERB]() (159; 7% instances), [sl-pos/PROPN]()-[sl-pos/VERB]() (85; 4% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (79; 4% instances), [sl-pos/DET]()-[sl-pos/ADJ]() (20; 1% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (14; 1% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (14; 1% instances), [sl-pos/PROPN]()-[sl-pos/ADJ]() (11; 1% instances), [sl-pos/NUM]()-[sl-pos/VERB]() (9; 0% instances), [sl-pos/PRON]()-[sl-pos/ADJ]() (9; 0% instances), [sl-pos/PROPN]()-[sl-pos/NOUN]() (8; 0% instances), [sl-pos/NOUN]()-[sl-pos/DET]() (6; 0% instances), [sl-pos/DET]()-[sl-pos/NOUN]() (4; 0% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (4; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (2; 0% instances), [sl-pos/NOUN]()-[sl-pos/NUM]() (2; 0% instances), [sl-pos/X]()-[sl-pos/VERB]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/ADV]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl	color:blue
1	Saj	saj	CCONJ	Cc	_	5	cc	_	Dep=3|Rel=Conj
2	država	država	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	Dep=3|Rel=Sb
3	ni	biti	AUX	Va-r3s-y	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	5	cop	_	Dep=0|Rel=Root
4	nekakšen	nekakšen	DET	Pi-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	5	det	_	Dep=5|Rel=Atr
5	moloh	moloh	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No|Dep=3|Rel=Atr
6	,	,	PUNCT	Z	_	9	punct	_	Dep=0|Rel=Root
7	ki	ki	SCONJ	Cs	_	9	mark	_	Dep=9|Rel=Conj
8	nemo	nemo	ADV	Rgp	Degree=Pos	9	advmod	_	Dep=9|Rel=AdvM
9	gleda	gledati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl	_	Dep=5|Rel=Atr
10	na	na	ADP	Sa	Case=Acc	12	case	_	Dep=12|Rel=Atr
11	ta	ta	DET	Pd-msa	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	12	det	_	Dep=12|Rel=Atr
12	narod	narod	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No|Dep=9|Rel=AdvO
13	.	.	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl	color:blue
1	Redni	reden	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	4	amod	_	Dep=4|Rel=Atr
2	in	in	CCONJ	Cc	_	3	cc	_	Dep=3|Rel=Conj
3	uravnoteženi	uravnotežen	ADJ	Appmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|VerbForm=Part	1	conj	_	Dep=1|Rel=Coord
4	obroki	obrok	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	Dep=5|Rel=Sb
5	ohranjajo	ohranjati	VERB	Vmpr3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
6	vašo	vaš	DET	Ps2fsap	Case=Acc|Gender=Fem|Number=Sing|Number[psor]=Plur|Person=2|Poss=Yes|PronType=Prs	7	det	_	Dep=7|Rel=Atr
7	težo	teža	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	Dep=5|Rel=Obj
8	stabilno	stabilen	ADJ	Agpfsa	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	7	acl	_	SpaceAfter=No|Dep=5|Rel=Atr
9	.	.	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 acl	color:blue
1	Vse	ves	DET	Pg-nsa	Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	11	obj	_	SpaceAfter=No|Dep=11|Rel=Obj
2	,	,	PUNCT	Z	_	7	punct	_	Dep=0|Rel=Root
3	kar	kar	PRON	Pr-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	7	nsubj	_	Dep=7|Rel=Conj
4	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	7	expl	_	Dep=7|Rel=PPart
5	vam	ti	PRON	Pp2-pd	Case=Dat|Number=Plur|Person=2|PronType=Prs	7	obj	_	Dep=7|Rel=Obj
6	bo	biti	AUX	Va-f3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	7	aux	_	Dep=7|Rel=PPart
7	dogajalo	dogajati	VERB	Vmpp-sn	Aspect=Imp|Gender=Neut|Number=Sing|VerbForm=Part	1	acl	_	SpaceAfter=No|Dep=1|Rel=Atr
8	,	,	PUNCT	Z	_	7	punct	_	Dep=0|Rel=Root
9	boste	biti	AUX	Va-f2p-n	Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Fut|VerbForm=Fin	10	aux	_	Dep=10|Rel=PPart
10	morali	morati	VERB	Vmpp-pm	Aspect=Imp|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	Dep=0|Rel=Root
11	deliti	deliti	VERB	Vmpn	Aspect=Imp|VerbForm=Inf	10	xcomp	_	Dep=10|Rel=Atr
12	z	z	ADP	Si	Case=Ins	13	case	_	Dep=13|Rel=Atr
13	drugimi	drug	ADJ	Mlpmpi	Case=Ins|Gender=Masc|Number=Plur	11	obl	_	SpaceAfter=No|Dep=11|Rel=Obj
14	.	.	PUNCT	Z	_	10	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

205 nodes (1%) are attached to their parents as `acl`.

201 instances of `acl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.40975609756098.

The following 19 pairs of parts of speech are connected with `acl`: [sl-pos/NOUN]()-[sl-pos/VERB]() (105; 51% instances), [sl-pos/DET]()-[sl-pos/VERB]() (41; 20% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (11; 5% instances), [sl-pos/ADV]()-[sl-pos/VERB]() (8; 4% instances), [sl-pos/DET]()-[sl-pos/ADJ]() (7; 3% instances), [sl-pos/VERB]()-[sl-pos/VERB]() (5; 2% instances), [sl-pos/NOUN]()-[sl-pos/DET]() (4; 2% instances), [sl-pos/DET]()-[sl-pos/NOUN]() (3; 1% instances), [sl-pos/DET]()-[sl-pos/PRON]() (3; 1% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (3; 1% instances), [sl-pos/NUM]()-[sl-pos/VERB]() (3; 1% instances), [sl-pos/PROPN]()-[sl-pos/VERB]() (3; 1% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (2; 1% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (2; 1% instances), [sl-pos/ADV]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/X]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 acl	color:blue
1	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	reparandum	_	word=to|msd=Zk-sei
2	ja	ja	PART	Q	_	9	discourse	_	word=ja|msd=L
3	samo	samo	PART	Q	_	9	cc	_	word=sam|msd=L
4	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	9	nsubj	_	word=to|msd=Zk-sei
5	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	cop	_	word=je|msd=Gp-ste-n
6	dejansko	dejansko	ADV	Rgp	Degree=Pos	9	advmod	_	word=dejansko|msd=Rsn
7	pač	pač	PART	Q	_	9	advmod	_	word=pač|msd=L
8	ta	ta	DET	Pd-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	9	det	_	word=ta|msd=Zk-mei
9	folk	folk	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	word=folk|msd=Somei
10	ki	ki	SCONJ	Cs	_	11	mark	_	word=k|msd=Vd
11	gre	iti	VERB	Vmbr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	acl	_	word=gre|msd=Ggvste
12	sam	sam	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	11	obl	_	word=sam|msd=Ppnmein
13	na	na	ADP	Sa	Case=Acc	14	case	_	word=na|msd=Dt
14	pijačo	pijača	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	11	obl	_	word=pijačo|msd=Sozet

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 acl	color:blue
1	[gap]	[gap]	X	X	_	8	punct	_	word=[gap]|msd=N
2	za	za	ADP	Sa	Case=Acc	4	case	_	word=za|msd=Dt
3	vse	ves	DET	Pg-nsa	Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	4	det	_	word=vse|msd=Zc-set
4	skupno	skupen	ADJ	Agpnsa	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	8	obl	_	word=skupno|msd=Ppnset
5	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	cop	_	word=je|msd=Gp-ste-n
6	pa	pa	CCONJ	Cc	_	8	advmod	_	word=pa|msd=Vp
7	ekonomika	ekonomika	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	8	nsubj	_	word=ekonomika|msd=Sozei
8	tista	tisti	DET	Pd-fsn	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	0	root	_	word=tista|msd=Zk-zei
9	ki	ki	SCONJ	Cs	_	12	mark	_	word=ki|msd=Vd
10	vam	ti	PRON	Pp2-pd	Case=Dat|Number=Plur|Person=2|PronType=Prs	12	iobj	_	word=vam|msd=Zod-md
11	to	ta	DET	Pd-nsa	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	12	obj	_	word=to|msd=Zk-set
12	določa	določati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	acl	_	word=določa|msd=Ggnste

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 acl	color:blue
1	ja	ja	PART	Q	_	3	discourse	_	word=ja|msd=L
2	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	_	word=to|msd=Zk-sei
3	je	biti	VERB	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	word=je|msd=Gp-ste-n
4	verjetno	verjetno	ADV	Rgp	Degree=Pos	5	advcl	_	word=verjetno|msd=Rsn
5	so	biti	VERB	Va-r3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	parataxis:restart	_	word=so|msd=Gp-stm-n
6	zobni	zoben	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	7	amod	_	word=zobni|msd=Ppnmmi
7	vratovi	vrat	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	word=vratovi|msd=Sommi
8	ki	ki	SCONJ	Cs	_	10	mark	_	word=ki|msd=Vd
9	so	biti	AUX	Va-r3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	cop	_	word=so|msd=Gp-stm-n
10	razgaljeni	razgaljen	ADJ	Appmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|VerbForm=Part	7	acl	_	word=razgaljeni|msd=Pdnmmi
11	ne	ne	PART	Q	_	5	discourse	_	word=ne|msd=L
12	[gap]	[gap]	X	X	_	3	punct	_	word=[gap]|msd=N

~~~


