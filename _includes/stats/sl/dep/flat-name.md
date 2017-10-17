

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is a language-specific subtype of [flat]().
There are also 1 other language-specific subtypes of `flat`: [flat:foreign]().

627 nodes (0%) are attached to their parents as `flat:name`.

625 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.04465709728868.

The following 1 pairs of parts of speech are connected with `flat:name`: [sl-pos/PROPN]()-[sl-pos/PROPN]() (627; 100% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat:name	color:blue
1	Med	med	ADP	Si	Case=Ins	2	case	_	Dep=2|Rel=Atr
2	njimi	on	PRON	Pp3mpi	Case=Ins|Gender=Masc|Number=Plur|Person=3|PronType=Prs	4	obl	_	Dep=4|Rel=AdvO
3	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	Dep=4|Rel=PPart
4	bil	biti	VERB	Va-p-sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
5	tudi	tudi	PART	Q	_	4	advmod	_	Dep=0|Rel=Root
6	kolumbijski	kolumbijski	ADJ	Agpmsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	Dep=7|Rel=Atr
7	policist	policist	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	Dep=4|Rel=Sb
8	Jajiro	Jajiro	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	7	nmod	_	Dep=7|Rel=Atr
9	Cardenas	Cardenas	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	8	flat:name	_	SpaceAfter=No|Dep=8|Rel=Atr
10	.	.	PUNCT	Z	_	4	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is a language-specific subtype of [flat]().
There are also 1 other language-specific subtypes of `flat`: [flat:foreign]().

76 nodes (0%) are attached to their parents as `flat:name`.

76 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07894736842105.

The following 2 pairs of parts of speech are connected with `flat:name`: [sl-pos/PROPN]()-[sl-pos/PROPN]() (75; 99% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat:name	color:blue
1	pa	pa	CCONJ	Cc	_	5	cc	_	word=pa|msd=Vp
2	bi	biti	AUX	Va-c	Mood=Cnd|VerbForm=Fin	5	aux	_	word=bi|msd=Gp-g
3	še	še	PART	Q	_	5	advmod	_	word=še|msd=L
4	vmes	vmes	ADV	Rgp	Degree=Pos	5	advmod	_	word=vmes|msd=Rsn
5	skočil	skočiti	VERB	Vmep-sm	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	word=skočo|msd=Ggdd-em
6	pavle	Pavle	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	word=Pavle|msd=Slmei
7	ravnohrib	Ravnohrib	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	6	flat:name	_	word=Ravnohrib|msd=Slmei
8	[audience:laughter]	[audience:laughter]	X	X	_	5	punct	_	word=[audience:laughter]|msd=N

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	gospod	gospod	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	4	vocative	_	word=gospod|msd=Somei
2	[name:surname]	[name:surname]	PROPN	X	_	1	flat:name	_	word=[name:surname]|msd=N
3	eee	eee	INTJ	I	_	4	discourse:filler	_	word=eee|msd=M
4	kaj	kaj	PRON	Pq-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	0	root	_	word=kaj|msd=Zv-sei
5	torej	torej	ADV	Rgp	Degree=Pos	4	advmod	_	word=torej|msd=Rsn
6	če	če	SCONJ	Cs	_	8	mark	_	word=če|msd=Vd
7	ne	ne	PART	Q	Polarity=Neg	8	advmod	_	word=ne|msd=L
8	pride	priti	VERB	Vmer3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	advcl	_	word=pride|msd=Ggdste
9	do	do	ADP	Sg	Case=Gen	11	case	_	word=do|msd=Dr
10	eee	eee	INTJ	I	_	11	discourse:filler	_	word=eee|msd=M
11	sprejetja	sprejetje	NOUN	Ncnsg	Case=Gen|Gender=Neut|Number=Sing	8	obl	_	word=sprejetja|msd=Soser
12	tega	ta	DET	Pd-msg	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	13	det	_	word=tega|msd=Zk-mer
13	sklepa	sklep	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	word=sklepa|msd=Somer

~~~


