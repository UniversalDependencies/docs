

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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 parataxis:restart	color:blue
1	da	da	SCONJ	Cs	_	2	mark	_	word=da|msd=Vd
2	so	biti	VERB	Va-r3p-n	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=so|msd=Gp-stm-n
3	v	v	ADP	Sa	Case=Acc	4	case	_	word=v|msd=Dt
4	naša	naš	PRON	Ps1npap	Case=Acc|Gender=Neut|Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	2	nmod	_	word=nasa|msd=Zspsmtm
5	slovenski	slovenski	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	6	amod	_	word=slovenski|msd=Ppnmmi
6	priimki	priimek	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	9	dislocated	_	word=priimki|msd=Sommi
7	kako	kako	ADV	Rgp	Degree=Pos	9	advmod	_	word=kak|msd=Rsn
8	so	biti	VERB	Va-r3p-n	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	word=so|msd=Gp-stm-n
9	slikoviti	slikovit	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	2	parataxis:restart	_	word=slikoviti|msd=Ppnmmi
10	ste	biti	AUX	Va-r2p-n	Mood=Ind|Negative=Pos|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	14	aux	_	word=ste|msd=Gp-sdm-n
11	vi	ti	PRON	Pp2mpn	Case=Nom|Gender=Masc|Number=Plur|Person=2|PronType=Prs	14	nsubj	_	word=vi|msd=Zodmmi
12	to	ta	PRON	Pd-nsa	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	14	dobj	_	word=to|msd=Zk-set
13	že	že	PART	Q	_	14	advmod	_	word=že|msd=L
14	opazili	opaziti	VERB	Vmep-pm	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	9	parataxis	_	word=opazli|msd=Ggdd-mm
15	kdaj	kdaj	ADV	Rgp	Degree=Pos	14	advmod	_	word=kdaj|msd=Rsn
16	?	?	PUNCT	Z	_	14	punct	_	word=?|msd=U

~~~


