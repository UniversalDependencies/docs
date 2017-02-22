

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is a language-specific subtype of [parataxis]().
There are also 1 other language-specific subtypes of `parataxis`: [parataxis:discourse]().

58 nodes (0%) are attached to their parents as `parataxis:restart`.

57 instances of `parataxis:restart` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.37931034482759.

The following 11 pairs of parts of speech are connected with `parataxis:restart`: [sl-pos/VERB]()-[sl-pos/VERB]() (41; 71% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (3; 5% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (3; 5% instances), [sl-pos/ADV]()-[sl-pos/VERB]() (2; 3% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (2; 3% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (2; 3% instances), [sl-pos/DET]()-[sl-pos/VERB]() (1; 2% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (1; 2% instances), [sl-pos/PROPN]()-[sl-pos/PROPN]() (1; 2% instances), [sl-pos/VERB]()-[sl-pos/DET]() (1; 2% instances), [sl-pos/X]()-[sl-pos/VERB]() (1; 2% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 parataxis:restart	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 parataxis:restart	color:blue
1	ja	ja	PART	Q	_	4	discourse	_	word=ja|msd=L
2	recimo	reči	VERB	Vmem1p	Aspect=Perf|Mood=Imp|Number=Plur|Person=1|VerbForm=Fin	4	parataxis:discourse	_	word=recimo|msd=Ggdvpm
3	ne	ne	PART	Q	Polarity=Neg	4	advmod	_	word=ne|msd=L
4	vem	vedeti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	word=vem|msd=Ggnspe
5	ne	ne	PART	Q	_	4	discourse	_	word=ne|msd=L
6	koalicija	koalicija	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	4	parataxis	_	word=Koalicija|msd=Sozei
7	Slove	_	X	Xt	_	6	nmod	_	word=Slove|msd=Nt
8	[gap]	[gap]	X	X	_	4	punct	_	word=[gap]|msd=N
9	daj	dati	VERB	Vmem2s	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	10	parataxis:discourse	_	word=dej|msd=Ggdvde
10	gremo	iti	VERB	Vmbm1p	Mood=Imp|Number=Plur|Person=1|VerbForm=Fin	6	parataxis:restart	_	word=gremo|msd=Ggvvpm
11	se	se	PRON	Px------y	PronType=Prs|Variant=Short	14	expl	_	word=se|msd=Zp------k
12	h	k	ADP	Sd	Case=Dat	13	case	_	word=h|msd=Dd
13	temu	ta	DET	Pd-nsd	Case=Dat|Gender=Neut|Number=Sing|PronType=Dem	14	obl	_	word=temu|msd=Zk-sed
14	vrnit	vrniti	VERB	Vmeu	Aspect=Perf|VerbForm=Sup	10	xcomp	_	word=vrnt|msd=Ggdm

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 parataxis:restart	color:blue
1	da	da	SCONJ	Cs	_	2	mark	_	word=da|msd=Vd
2	so	biti	VERB	Va-r3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	word=so|msd=Gp-stm-n
3	v	v	ADP	Sa	Case=Acc	4	case	_	word=v|msd=Dt
4	naša	naš	DET	Ps1npap	Case=Acc|Gender=Neut|Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	2	obl	_	word=nasa|msd=Zspsmtm
5	slovenski	slovenski	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	6	amod	_	word=slovenski|msd=Ppnmmi
6	priimki	priimek	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	9	dislocated	_	word=priimki|msd=Sommi
7	kako	kako	ADV	Rgp	Degree=Pos	9	advmod	_	word=kak|msd=Rsn
8	so	biti	AUX	Va-r3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	cop	_	word=so|msd=Gp-stm-n
9	slikoviti	slikovit	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	2	parataxis:restart	_	word=slikoviti|msd=Ppnmmi
10	ste	biti	AUX	Va-r2p-n	Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	14	aux	_	word=ste|msd=Gp-sdm-n
11	vi	ti	PRON	Pp2mpn	Case=Nom|Gender=Masc|Number=Plur|Person=2|PronType=Prs	14	nsubj	_	word=vi|msd=Zodmmi
12	to	ta	DET	Pd-nsa	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	14	obj	_	word=to|msd=Zk-set
13	že	že	PART	Q	_	14	advmod	_	word=že|msd=L
14	opazili	opaziti	VERB	Vmep-pm	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	9	parataxis	_	word=opazli|msd=Ggdd-mm
15	kdaj	kdaj	ADV	Rgp	Degree=Pos	14	advmod	_	word=kdaj|msd=Rsn
16	?	?	PUNCT	Z	_	14	punct	_	word=?|msd=U

~~~


