

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

2965 nodes (2%) are attached to their parents as `det`.

2965 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31433389544688.

The following 2 pairs of parts of speech are connected with `det`: [sl-pos/NOUN]()-[sl-pos/DET]() (2945; 99% instances), [sl-pos/PROPN]()-[sl-pos/DET]() (20; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det	color:blue
1	Za	za	ADP	Sa	Case=Acc	2	case	_	Dep=2|Rel=Atr
2	zadovoljitev	zadovoljitev	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	7	obl	_	Dep=7|Rel=AdvO
3	pomembne	pomemben	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	Dep=4|Rel=Atr
4	želje	želja	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	Dep=2|Rel=Atr
5	so	biti	AUX	Va-r3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	cop	_	Dep=0|Rel=Root
6	pripravljeni	pripravljen	ADJ	Appmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	Dep=5|Rel=Atr
7	vložiti	vložiti	VERB	Vmen	Aspect=Perf|VerbForm=Inf	6	ccomp	_	Dep=6|Rel=Obj
8	več	več	DET	Rgc	PronType=Ind	9	det	_	Dep=9|Rel=Atr
9	truda	trud	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No|Dep=7|Rel=Obj
10	.	.	PUNCT	Z	_	6	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det	color:blue
1	Gre	iti	VERB	Vmbr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
2	za	za	ADP	Sa	Case=Acc	4	case	_	Dep=4|Rel=Atr
3	oddaljeno	oddaljen	ADJ	Agpfsa	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	Dep=4|Rel=Atr
4	preteklost	preteklost	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	1	obl	_	SpaceAfter=No|Dep=1|Rel=Obj
5	,	,	PUNCT	Z	_	7	punct	_	Dep=0|Rel=Root
6	ki	ki	SCONJ	Cs	_	7	mark	_	Dep=7|Rel=Conj
7	pripada	pripadati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl	_	Dep=4|Rel=Atr
8	vsem	ves	DET	Pg-mpd	Case=Dat|Gender=Masc|Number=Plur|PronType=Tot	9	det	_	Dep=9|Rel=Atr
9	Evropejcem	Evropejec	PROPN	Npmpd	Case=Dat|Gender=Masc|Number=Plur	7	obj	_	SpaceAfter=No|Dep=7|Rel=Obj
10	.	.	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

477 nodes (2%) are attached to their parents as `det`.

475 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26624737945493.

The following 9 pairs of parts of speech are connected with `det`: [sl-pos/NOUN]()-[sl-pos/DET]() (432; 91% instances), [sl-pos/ADJ]()-[sl-pos/DET]() (22; 5% instances), [sl-pos/PROPN]()-[sl-pos/DET]() (9; 2% instances), [sl-pos/DET]()-[sl-pos/DET]() (5; 1% instances), [sl-pos/NUM]()-[sl-pos/DET]() (3; 1% instances), [sl-pos/PRON]()-[sl-pos/DET]() (2; 0% instances), [sl-pos/VERB]()-[sl-pos/DET]() (2; 0% instances), [sl-pos/ADV]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/X]()-[sl-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	in	in	CCONJ	Cc	_	10	cc	_	word=in|msd=Vp
2	spodaj	spodaj	ADV	Rgp	Degree=Pos	7	advmod	_	word=spodi|msd=Rsn
3	so	biti	AUX	Va-r3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	cop	_	word=so|msd=Gp-stm-n
4	vsi	ves	DET	Pg-mpn	Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	5	det	_	word=vsi|msd=Zc-mmi
5	komentini	komentin	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	word=komentini|msd=Sommi
6	malo	malo	DET	Rgp	PronType=Ind	7	advmod	_	word=malo|msd=Rsn
7	istrijani	Istrijan	PROPN	Npmpn	Case=Nom|Gender=Masc|Number=Plur	0	root	_	word=ištrijani|msd=Slmmi
8	malo	malo	DET	Rgp	PronType=Ind	10	advmod	_	word=malo|msd=Rsn
9	po	po	ADP	Sa	Case=Acc	10	case	_	word=po|msd=Dt
10	hrvaško	hrvaško	ADV	Rgp	Degree=Pos	7	conj	_	word=hrvaško|msd=Rsn

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	ja	ja	PART	Q	_	3	discourse	_	word=ja|msd=L
2	ta	ta	DET	Pd-fsn	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	word=ta|msd=Zk-zei
3	[name:personal]	[name:personal]	PROPN	X	_	0	root	_	word=[name:personal]|msd=N

~~~


