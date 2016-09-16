

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

3310 nodes (2%) are attached to their parents as `det`.

3310 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33444108761329.

The following 2 pairs of parts of speech are connected with `det`: [sl-pos/NOUN]()-[sl-pos/DET]() (3289; 99% instances), [sl-pos/PROPN]()-[sl-pos/DET]() (21; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det	color:blue
1	Za	za	ADP	Sa	Case=Acc	2	case	_	Dep=2|Rel=Atr
2	zadovoljitev	zadovoljitev	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	7	nmod	_	Dep=7|Rel=AdvO
3	pomembne	pomemben	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	Dep=4|Rel=Atr
4	želje	želja	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	Dep=2|Rel=Atr
5	so	biti	VERB	Va-r3p-n	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	Dep=0|Rel=Root
6	pripravljeni	pripravljen	ADJ	Appmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	Dep=5|Rel=Atr
7	vložiti	vložiti	VERB	Vmen	Aspect=Perf|VerbForm=Inf	6	ccomp	_	Dep=6|Rel=Obj
8	več	več	DET	Rgc	Degree=Cmp|PronType=Ind	9	det	_	Dep=9|Rel=Atr
9	truda	trud	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	7	dobj	_	SpaceAfter=No|Dep=7|Rel=Obj
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
4	preteklost	preteklost	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No|Dep=1|Rel=Obj
5	,	,	PUNCT	Z	_	7	punct	_	Dep=0|Rel=Root
6	ki	ki	SCONJ	Cs	_	7	mark	_	Dep=7|Rel=Conj
7	pripada	pripadati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl	_	Dep=4|Rel=Atr
8	vsem	ves	DET	Pg-mpd	Case=Dat|Gender=Masc|Number=Plur|PronType=Tot	9	det	_	Dep=9|Rel=Atr
9	Evropejcem	Evropejec	PROPN	Npmpd	Case=Dat|Gender=Masc|Number=Plur	7	dobj	_	SpaceAfter=No|Dep=7|Rel=Obj
10	.	.	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

710 nodes (2%) are attached to their parents as `det`.

707 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3056338028169.

The following 8 pairs of parts of speech are connected with `det`: [sl-pos/NOUN]()-[sl-pos/DET]() (642; 90% instances), [sl-pos/ADJ]()-[sl-pos/DET]() (30; 4% instances), [sl-pos/PROPN]()-[sl-pos/DET]() (17; 2% instances), [sl-pos/PRON]()-[sl-pos/DET]() (10; 1% instances), [sl-pos/NUM]()-[sl-pos/DET]() (4; 1% instances), [sl-pos/X]()-[sl-pos/DET]() (4; 1% instances), [sl-pos/VERB]()-[sl-pos/DET]() (2; 0% instances), [sl-pos/ADV]()-[sl-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	tako	tak	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	det	_	word=takovo|msd=Zk-sei
2	življenje	življenje	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	_	word=življenje|msd=Sosei
3	je	biti	AUX	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	word=je|msd=Gp-ste-n
4	bilo	biti	VERB	Va-p-sn	Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	word=blo|msd=Gp-d-es
5	prej	prej	ADV	Rgc	Degree=Cmp	4	advmod	_	word=prek|msd=Rsr
6	in	in	CONJ	Cc	_	7	reparandum	_	word=i|msd=Vp
7	in	in	CONJ	Cc	_	4	cc	_	word=i|msd=Vp
8	sedaj	sedaj	ADV	Rgp	Degree=Pos	9	advmod	_	word=seda|msd=Rsn
9	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	word=je|msd=Gp-ste-n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 det	color:blue
1	eee	eee	INTJ	I	_	8	discourse:filler	_	word=eee|msd=M
2	poleg	poleg	ADP	Sg	Case=Gen	5	case	_	word=poleg|msd=Dr
3	one	oni	DET	Pd-fsg	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	word=une|msd=Zk-zer
4	ta	ta	DET	Pd-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	word=ta|msd=Zk-mei
5	glavne	glaven	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	8	reparandum	_	word=glavne|msd=Ppnzer
6	…	…	PUNCT	Z	_	8	punct	_	word=…|msd=U
7	poleg	poleg	ADP	Sg	Case=Gen	8	case	_	word=poleg|msd=Dr
8	one	oni	PRON	Pd-fsg	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	0	root	_	word=une|msd=Zk-zer
9	ki	ki	SCONJ	Cs	_	10	mark	_	word=k|msd=Vd
10	je	biti	AUX	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	reparandum	_	word=je|msd=Gp-ste-n
11	ki	ki	SCONJ	Cs	_	13	mark	_	word=k|msd=Vd
12	je	biti	AUX	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	word=je|msd=Gp-ste-n
13	bila	biti	VERB	Va-p-sf	Gender=Fem|Number=Sing|VerbForm=Part	8	acl	_	word=bla|msd=Gp-d-ez
14	najbolj	najbolj	ADV	Rgs	Degree=Sup	15	advmod	_	word=najbl|msd=Rss
15	in	in	ADV	Rgp	Degree=Pos	13	advmod	_	word=in|msd=Rsn

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	to	ta	PRON	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	_	word=tav|msd=Zk-sei
2	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	word=je|msd=Gp-ste-n
3	brat	brat	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	word=brat|msd=Somei
4	od	od	ADP	Sg	Case=Gen	6	case	_	word=ud|msd=Dr
5	tega	ta	DET	Pd-msg	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	6	det	_	word=tutga|msd=Zk-mer
6	[name:personal]	[name:personal]	PROPN	X	_	3	nmod	_	word=[name:personal]|msd=N
7	pa	pa	CONJ	Cc	_	6	cc	_	word=pa|msd=Vp
8	od	od	ADP	Sg	Case=Gen	9	case	_	word=od|msd=Dr
9	teh	ta	PRON	Pd-mpg	Case=Gen|Gender=Masc|Number=Plur|PronType=Dem	6	conj	_	word=tutih|msd=Zk-mmr

~~~


