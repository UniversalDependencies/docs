

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is a language-specific subtype of [parataxis]().
There are also 1 other language-specific subtypes of `parataxis`: [parataxis:discourse]().

91 nodes (0%) are attached to their parents as `parataxis:restart`.

88 instances of `parataxis:restart` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.64835164835165.

The following 16 pairs of parts of speech are connected with `parataxis:restart`: [sl-pos/VERB]()-[sl-pos/VERB]() (58; 64% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (5; 5% instances), [sl-pos/ADV]()-[sl-pos/VERB]() (4; 4% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (4; 4% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (4; 4% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (4; 4% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (2; 2% instances), [sl-pos/X]()-[sl-pos/VERB]() (2; 2% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (1; 1% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (1; 1% instances), [sl-pos/NOUN]()-[sl-pos/ADV]() (1; 1% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (1; 1% instances), [sl-pos/PRON]()-[sl-pos/ADJ]() (1; 1% instances), [sl-pos/PROPN]()-[sl-pos/PROPN]() (1; 1% instances), [sl-pos/PROPN]()-[sl-pos/VERB]() (1; 1% instances), [sl-pos/VERB]()-[sl-pos/CONJ]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 parataxis:restart	color:blue
1	ja	ja	PART	Q	_	3	discourse	_	word=ja|msd=L
2	zdajle	zdajle	ADV	Rgp	Degree=Pos	3	advmod	_	word=zdele|msd=Rsn
3	imate	imeti	VERB	Vmpr2p-n	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	word=mate|msd=Ggnsdm-n
4	u	_	X	Xt	_	3	reparandum	_	word=u|msd=Nt
5	[gap]	[gap]	X	X	_	3	punct	_	word=[gap]|msd=N
6	a	a	ADV	Rgp	Degree=Pos	7	advmod	_	word=a|msd=Rsn
7	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis:restart	_	word=je|msd=Gp-ste-n
8	tu	tu	ADV	Rgp	Degree=Pos	7	advmod	_	word=tu|msd=Rsn
9	kolektiven	kolektiven	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	7	nsubj	_	word=kolektivn|msd=Ppnmein
10	ali	ali	CONJ	Cc	_	7	cc	_	word=al|msd=Vp
11	kako	kako	ADV	Rgp	Degree=Pos	12	advmod	_	word=kaku|msd=Rsn
12	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	conj	_	word=je|msd=Gp-ste-n
13	zdaj	zdaj	ADV	Rgp	Degree=Pos	12	advmod	_	word=zdej|msd=Rsn
14	to	ta	PRON	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	12	nsubj	_	word=tu|msd=Zk-sei

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 parataxis:restart	color:blue
1	uuu	uuu	INTJ	I	_	2	discourse	_	word=uuu|msd=M
2	nisem	biti	VERB	Va-r1s-y	Mood=Ind|Negative=Neg|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	word=nisem|msd=Gp-spe-d
3	zdajle	zdajle	ADV	Rgp	Degree=Pos	2	advmod	_	word=zdajle|msd=Rsn
4	za	za	ADP	Sa	Case=Acc	5	case	_	word=za|msd=Dt
5	raču	_	X	Xt	_	2	nmod	_	word=raču|msd=Nt
6	[gap]	[gap]	X	X	_	2	punct	_	word=[gap]|msd=N
7	nep	nep	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	2	parataxis:restart	_	word=Nep|msd=Somei
8	nep	nep	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	7	parataxis	_	word=Nep|msd=Somei
9	ja	ja	PART	Q	_	8	discourse	_	word=ja|msd=L

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 parataxis:restart	color:blue
1	mene	jaz	PRON	Pp1-sa	Case=Acc|Number=Sing|Person=1|PronType=Prs	5	dobj	_	word=mene|msd=Zop-et
2	s	z	ADP	Si	Case=Ins	3	case	_	word=s|msd=Do
3	pinceto	pinceta	NOUN	Ncfsi	Case=Ins|Gender=Fem|Number=Sing	5	nmod	_	word=pinceto|msd=Sozeo
4	ne	ne	PART	Q	_	5	neg	_	word=ne|msd=L
5	boli	boleti	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=boli|msd=Ggnste
6	če	če	SCONJ	Cs	_	7	mark	_	word=če|msd=Vd
7	jih	on	PRON	Pp3fpa--y	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs|Variant=Short	5	advcl	_	word=jih|msd=Zotzmt--k
8	prej	prej	ADV	Rgc	Degree=Cmp	7	advmod	_	word=prej|msd=Rsr
9	malo	malo	ADV	Rgp	Degree=Pos	7	advmod	_	word=malo|msd=Rsn
10	neko	nek	DET	Pi-fsa	Case=Acc|Gender=Fem|Number=Sing|PronType=Ind	11	det	_	word=neko|msd=Zn-zet
11	kremo	krema	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	12	dobj	_	word=kremo|msd=Sozet
12	daš	dati	VERB	Vmer2s	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	7	parataxis:restart	_	word=daš|msd=Ggdsde
13	noter	noter	ADV	Rgp	Degree=Pos	12	advmod	_	word=noter|msd=Rsn
14	ne	ne	PART	Q	_	12	discourse	_	word=ne|msd=L

~~~


