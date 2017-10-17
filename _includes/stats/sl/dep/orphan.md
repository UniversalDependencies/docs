

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

28 nodes (0%) are attached to their parents as `orphan`.

18 instances of `orphan` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.82142857142857.

The following 19 pairs of parts of speech are connected with `orphan`: [sl-pos/ADV]()-[sl-pos/SCONJ]() (3; 11% instances), [sl-pos/NOUN]()-[sl-pos/SCONJ]() (3; 11% instances), [sl-pos/PRON]()-[sl-pos/SCONJ]() (3; 11% instances), [sl-pos/X]()-[sl-pos/SCONJ]() (3; 11% instances), [sl-pos/NOUN]()-[sl-pos/PART]() (2; 7% instances), [sl-pos/ADV]()-[sl-pos/ADV]() (1; 4% instances), [sl-pos/ADV]()-[sl-pos/DET]() (1; 4% instances), [sl-pos/DET]()-[sl-pos/DET]() (1; 4% instances), [sl-pos/DET]()-[sl-pos/PART]() (1; 4% instances), [sl-pos/DET]()-[sl-pos/PRON]() (1; 4% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (1; 4% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (1; 4% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (1; 4% instances), [sl-pos/NUM]()-[sl-pos/PRON]() (1; 4% instances), [sl-pos/PART]()-[sl-pos/CCONJ]() (1; 4% instances), [sl-pos/PART]()-[sl-pos/SCONJ]() (1; 4% instances), [sl-pos/PRON]()-[sl-pos/ADV]() (1; 4% instances), [sl-pos/PRON]()-[sl-pos/DET]() (1; 4% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (1; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 orphan	color:blue
1	k	k	SCONJ	Cs	_	2	orphan	_	word=k|msd=Vd
2	j	_	X	Xt	_	7	reparandum	_	word=j|msd=Nt
3	[gap]	[gap]	X	X	_	7	punct	_	word=[gap]|msd=N
4	ki	ki	SCONJ	Cs	_	7	mark	_	word=k|msd=Vd
5	sem	biti	AUX	Va-r1s-n	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	_	word=sem|msd=Gp-spe-n
6	jaz	jaz	PRON	Pp1-sn	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	word=jez|msd=Zop-ei
7	dala	dati	VERB	Vmep-sf	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	word=dala|msd=Ggdd-ez
8	ne	ne	PART	Q	Polarity=Neg	9	advmod	_	word=ne|msd=L
9	vem	vedeti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	11	acl	_	word=vem|msd=Ggnspe
10	koliko	koliko	DET	Rgp	PronType=Int	9	advmod	_	word=kok|msd=Rsn
11	mačkov	maček	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	7	obj	_	word=mačkov|msd=Sommr
12	že	že	PART	Q	_	7	advmod	_	word=že|msd=L
13	pa	pa	CCONJ	Cc	_	16	cc	_	word=pa|msd=Vp
14	mi	jaz	PRON	Pp1-sd--y	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	16	iobj	_	word=mi|msd=Zop-ed--k
15	jih	on	PRON	Pp3mpa--y	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Variant=Short	16	obj	_	word=jih|msd=Zotmmt--k
16	je	biti	VERB	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	conj	_	word=je|msd=Gp-ste-n
17	eee	eee	INTJ	I	_	19	discourse:filler	_	word=eee|msd=M
18	bolj	bolj	ADV	Rgc	Degree=Cmp	19	advmod	_	word=bl|msd=Rsr
19	poceni	poceni	ADV	Rgp	Degree=Pos	16	advmod	_	word=pucen|msd=Rsn

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 orphan	color:blue
1	ja	ja	PART	Q	_	8	discourse	_	word=ja|msd=L
2	zdaj	zdaj	ADV	Rgp	Degree=Pos	8	discourse	_	word=ze|msd=Rsn
3	če	če	SCONJ	Cs	_	4	orphan	_	word=če|msd=Vd
4	se	se	PRON	Px------y	PronType=Prs|Variant=Short	8	reparandum	_	word=se|msd=Zp------k
5	če	če	SCONJ	Cs	_	8	mark	_	word=če|msd=Vd
6	se	se	PRON	Px------y	PronType=Prs|Variant=Short	8	expl	_	word=se|msd=Zp------k
7	vam	ti	PRON	Pp2-pd	Case=Dat|Number=Plur|Person=2|PronType=Prs	8	obj	_	word=vam|msd=Zod-md
8	zdi	zdeti	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=zdi|msd=Ggnste
9	frizer	frizer	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	word=frizer|msd=Somei
10	če	če	SCONJ	Cs	_	12	mark	_	word=če|msd=Vd
11	ga	on	PRON	Pp3msa--y	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Variant=Short	12	obj	_	word=ga|msd=Zotmet--k
12	damo	dati	VERB	Vmer1p	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	8	parataxis:restart	_	word=damo|msd=Ggdspm
13	med	med	ADP	Sa	Case=Acc	14	case	_	word=med|msd=Dt
14	nezasebne	nezaseben	ADJ	Agpmpa	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	12	obl	_	word=nezasebne|msd=Ppnmmt
15	super	super	ADV	Rgp	Degree=Pos	12	discourse	_	word=super|msd=Rsn

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 orphan	color:blue
1	lahko	lahko	ADV	Rgp	Degree=Pos	0	root	_	word=loh|msd=Rsn
2	pa	pa	CCONJ	Cc	_	1	advmod	_	word=pa|msd=Vp
3	da	da	SCONJ	Cs	_	4	orphan	_	word=da|msd=Vd
4	nikoli	nikoli	ADV	Rgp	Degree=Pos	1	csubj	_	word=nkol|msd=Rsn
5	no	no	PART	Q	_	1	discourse	_	word=no|msd=L
6	ampak	ampak	CCONJ	Cc	_	8	cc	_	word=ampak|msd=Vp
7	bolj	bolj	ADV	Rgc	Degree=Cmp	8	reparandum	_	word=bolj|msd=Rsr
8	bolj	bolj	ADV	Rgc	Degree=Cmp	4	orphan	_	word=bolj|msd=Rsr
9	saj	saj	CCONJ	Cc	_	11	cc	_	word=sej|msd=Vp
10	si	biti	AUX	Va-r2s-n	Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	aux	_	word=s|msd=Gp-sde-n
11	videl	videti	VERB	Vmbp-sm	Gender=Masc|Number=Sing|VerbForm=Part	1	parataxis:restart	_	word=vidu|msd=Ggvd-em
12	[gap]	[gap]	X	X	_	1	punct	_	word=[gap]|msd=N

~~~


