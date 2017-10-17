

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

143 nodes (0%) are attached to their parents as `orphan`.

96 instances of `orphan` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.00699300699301.

The following 34 pairs of parts of speech are connected with `orphan`: [hr-pos/NOUN]()-[hr-pos/NOUN]() (34; 24% instances), [hr-pos/ADV]()-[hr-pos/NOUN]() (14; 10% instances), [hr-pos/PROPN]()-[hr-pos/NOUN]() (11; 8% instances), [hr-pos/NOUN]()-[hr-pos/NUM]() (9; 6% instances), [hr-pos/NOUN]()-[hr-pos/ADJ]() (8; 6% instances), [hr-pos/NOUN]()-[hr-pos/ADV]() (8; 6% instances), [hr-pos/ADJ]()-[hr-pos/ADP]() (7; 5% instances), [hr-pos/ADV]()-[hr-pos/ADV]() (7; 5% instances), [hr-pos/NOUN]()-[hr-pos/PROPN]() (4; 3% instances), [hr-pos/PROPN]()-[hr-pos/NUM]() (4; 3% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (3; 2% instances), [hr-pos/NOUN]()-[hr-pos/DET]() (3; 2% instances), [hr-pos/PROPN]()-[hr-pos/ADJ]() (3; 2% instances), [hr-pos/PROPN]()-[hr-pos/PROPN]() (3; 2% instances), [hr-pos/ADJ]()-[hr-pos/NUM]() (2; 1% instances), [hr-pos/AUX]()-[hr-pos/VERB]() (2; 1% instances), [hr-pos/DET]()-[hr-pos/AUX]() (2; 1% instances), [hr-pos/NUM]()-[hr-pos/ADJ]() (2; 1% instances), [hr-pos/NUM]()-[hr-pos/NUM]() (2; 1% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (1; 1% instances), [hr-pos/ADJ]()-[hr-pos/PRON]() (1; 1% instances), [hr-pos/ADJ]()-[hr-pos/PROPN]() (1; 1% instances), [hr-pos/ADV]()-[hr-pos/ADJ]() (1; 1% instances), [hr-pos/ADV]()-[hr-pos/PROPN]() (1; 1% instances), [hr-pos/AUX]()-[hr-pos/AUX]() (1; 1% instances), [hr-pos/NOUN]()-[hr-pos/ADP]() (1; 1% instances), [hr-pos/NOUN]()-[hr-pos/AUX]() (1; 1% instances), [hr-pos/NUM]()-[hr-pos/ADP]() (1; 1% instances), [hr-pos/NUM]()-[hr-pos/NOUN]() (1; 1% instances), [hr-pos/PRON]()-[hr-pos/ADV]() (1; 1% instances), [hr-pos/PRON]()-[hr-pos/NOUN]() (1; 1% instances), [hr-pos/PRON]()-[hr-pos/PROPN]() (1; 1% instances), [hr-pos/PROPN]()-[hr-pos/ADV]() (1; 1% instances), [hr-pos/SYM]()-[hr-pos/ADV]() (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 orphan	color:blue
1	Vratit	vratiti	VERB	_	VerbForm=Inf	0	root	_	_
2	će	htjeti	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	aux	_	_
3	elastičnost	elastičnost	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	1	obj	_	_
4	koži	koža	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	1	iobj	_	_
5	oko	oko	ADP	_	Case=Gen	6	case	_	_
6	očiju	oko	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	4	nmod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	_
8	ali	ali	CCONJ	_	_	10	cc	_	_
9	i	i	CCONJ	_	_	8	fixed	_	_
10	sjaj	sjaj	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	1	conj	_	orig_deprel=obj
11	vašem	vaš	DET	_	Case=Dat|Gender=Neut|Number=Sing|Number[psor]=Plur|Person=2|Poss=Yes|PronType=Prs	12	det	_	_
12	pogledu	pogled	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	10	orphan	_	orig_deprel=iobj|SpaceAfter=No
13	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 orphan	color:blue
1	Podržani	podržati	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	_
2	su	biti	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	aux:pass	_	_
3	najpopularniji	popularan	ADJ	_	Case=Nom|Definite=Def|Degree=Sup|Gender=Masc|Number=Plur	4	amod	_	_
4	formati	format	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	1	nsubj:pass	_	SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	_
6	a	a	CCONJ	_	_	8	cc	_	_
7	stvar	stvar	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	8	nsubj	_	_
8	radi	raditi	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	conj	_	_
9	prilično	prilično	ADV	_	Degree=Pos	10	advmod	_	_
10	dobro	dobro	ADV	_	Degree=Pos	8	advmod	_	SpaceAfter=No
11	,	,	PUNCT	_	_	8	punct	_	_
12	premda	premda	SCONJ	_	_	8	mark	_	_
13	na	na	ADP	_	Case=Acc	14	case	_	_
14	trenutke	trenutak	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	15	orphan	_	orig_deprel=conj
15	sporo	sporo	ADV	_	Degree=Pos	1	conj	_	orig_deprel=advmod|SpaceAfter=No
16	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 orphan	color:blue
1	Koliko	koliko	ADV	_	Degree=Pos|NumType=Card|PronType=Int,Rel	3	advmod	_	_
2	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	3	expl:pv	_	_
3	sjećam	sjećati	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	advcl	_	_
4	Rakočević	Rakočević	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
5	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
6	tada	tada	ADV	_	Degree=Pos|PronType=Dem	7	advmod	_	_
7	zabio	zabiti	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
8	četiri	četiri	NUM	_	NumType=Card	7	obj	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	a	a	CCONJ	_	_	11	cc	_	_
11	Bjelica	Bjelica	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	7	conj	_	orig_deprel=nsubj
12	tri	tri	NUM	_	NumType=Card	13	nummod	_	_
13	trice	trica	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	11	orphan	_	orig_deprel=obj|SpaceAfter=No
14	...	...	PUNCT	_	_	7	punct	_	_

~~~


