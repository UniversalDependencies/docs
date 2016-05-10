

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is a language-specific subtype of [conj]().

57 nodes (0%) are attached to their parents as `conj:extend`.

57 instances of `conj:extend` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.96491228070175.

The following 15 pairs of parts of speech are connected with `conj:extend`: [sl-pos/VERB]()-[sl-pos/PRON]() (15; 26% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (8; 14% instances), [sl-pos/VERB]()-[sl-pos/ADV]() (7; 12% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (5; 9% instances), [sl-pos/ADJ]()-[sl-pos/ADV]() (3; 5% instances), [sl-pos/ADV]()-[sl-pos/PRON]() (3; 5% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (3; 5% instances), [sl-pos/VERB]()-[sl-pos/VERB]() (3; 5% instances), [sl-pos/NOUN]()-[sl-pos/ADV]() (2; 4% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (2; 4% instances), [sl-pos/PRON]()-[sl-pos/ADV]() (2; 4% instances), [sl-pos/PROPN]()-[sl-pos/ADV]() (1; 2% instances), [sl-pos/PROPN]()-[sl-pos/PRON]() (1; 2% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (1; 2% instances), [sl-pos/VERB]()-[sl-pos/PART]() (1; 2% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 13 conj:extend	color:blue
1	če	če	SCONJ	Cs	_	2	mark	_	word=če|msd=Vd
2	nimajo	imeti	VERB	Vmpr3p-y	Aspect=Imp|Mood=Ind|Negative=Neg|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	reparandum	_	word=nimajo|msd=Ggnstm-d
3	če	če	SCONJ	Cs	_	4	mark	_	word=če|msd=Vd
4	nimajo	imeti	VERB	Vmpr3p-y	Aspect=Imp|Mood=Ind|Negative=Neg|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=nimajo|msd=Ggnstm-d
5	a	a	ADV	Rgp	Degree=Pos	6	advmod	_	word=a|msd=Rsn
6	veš	vedeti	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	parataxis:discourse	_	word=veš|msd=Ggnsde
7	kakšne	kakšen	DET	Pq-fpa	Case=Acc|Gender=Fem|Number=Plur|PronType=Int	8	det	_	word=kešne|msd=Zv-zmt
8	knjige	knjiga	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	4	dobj	_	word=knjige|msd=Sozmt
9	s	z	ADP	Si	Case=Ins	10	case	_	word=s|msd=Do
10	sabo	se	PRON	Px---i	Case=Ins|PronType=Prs	4	nmod	_	word=sabo|msd=Zp---o
11	ali	ali	CONJ	Cc	_	4	cc	_	word=al|msd=Vp
12	pa	pa	CONJ	Cc	_	11	mwe	_	word=pa|msd=Vp
13	kaj	kaj	PRON	Pq-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	4	conj:extend	_	word=kej|msd=Zv-sei
14	tako	tako	ADV	Rgp	Degree=Pos	13	advmod	_	word=tko|msd=Rsn

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 conj:extend	color:blue
1	srbščine	srbščina	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	0	root	_	word=srbščine|msd=Sozer
2	in	in	CONJ	Cc	_	1	cc	_	word=in|msd=Vp
3	hrvaščine	hrvaščina	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	1	conj	_	word=hrvaščine|msd=Sozer
4	pa	pa	CONJ	Cc	_	1	cc	_	word=pa|msd=Vp
5	še	še	PART	Q	_	1	conj	_	word=še|msd=L
6	[gap]	[gap]	X	X	_	1	punct	_	word=[gap]|msd=N
7	pa	pa	CONJ	Cc	_	1	cc	_	word=pa|msd=Vp
8	cirilica	cirilica	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	1	conj	_	word=cirilica|msd=Sozei
9	pa	pa	CONJ	Cc	_	1	cc	_	word=pa|msd=Vp
10	to	ta	PRON	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	1	conj:extend	_	word=to|msd=Zk-sei

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 conj:extend	color:blue
1	saj	saj	CONJ	Cc	_	8	cc	_	word=sej|msd=Vp
2	potem	potem	ADV	Rgp	Degree=Pos	8	advmod	_	word=potem|msd=Rsn
3	si	se	PRON	Px---d--y	Case=Dat|PronType=Prs|Variant=Short	8	expl	_	word=si|msd=Zp---d--k
4	je	biti	AUX	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	word=je|msd=Gp-ste-n
5	v	v	ADP	Sl	Case=Loc	6	case	_	word=v|msd=Dm
6	bistvu	bistvo	NOUN	Ncnsl	Case=Loc|Gender=Neut|Number=Sing	8	nmod	_	word=bistvu|msd=Sosem
7	sama	sam	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	8	nmod	_	word=sama|msd=Ppnzei
8	kupila	kupiti	VERB	Vmep-sf	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	word=kupila|msd=Ggdd-ez
9	ne	ne	PART	Q	_	8	discourse	_	word=ne|msd=L
10	ali	ali	CONJ	Cc	_	8	cc	_	word=al|msd=Vp
11	kako	kako	ADV	Rgp	Degree=Pos	8	conj:extend	_	word=kako|msd=Rsn
12	?	?	PUNCT	Z	_	8	punct	_	word=?|msd=U

~~~


