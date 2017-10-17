

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is a language-specific subtype of [discourse]().

463 nodes (2%) are attached to their parents as `discourse:filler`.

450 instances of `discourse:filler` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.22246220302376.

The following 14 pairs of parts of speech are connected with `discourse:filler`: [sl-pos/VERB]()-[sl-pos/INTJ]() (226; 49% instances), [sl-pos/NOUN]()-[sl-pos/INTJ]() (127; 27% instances), [sl-pos/ADJ]()-[sl-pos/INTJ]() (44; 10% instances), [sl-pos/ADV]()-[sl-pos/INTJ]() (13; 3% instances), [sl-pos/DET]()-[sl-pos/INTJ]() (11; 2% instances), [sl-pos/PROPN]()-[sl-pos/INTJ]() (9; 2% instances), [sl-pos/PART]()-[sl-pos/INTJ]() (8; 2% instances), [sl-pos/NUM]()-[sl-pos/INTJ]() (6; 1% instances), [sl-pos/PRON]()-[sl-pos/INTJ]() (6; 1% instances), [sl-pos/CCONJ]()-[sl-pos/INTJ]() (5; 1% instances), [sl-pos/ADP]()-[sl-pos/INTJ]() (3; 1% instances), [sl-pos/X]()-[sl-pos/INTJ]() (3; 1% instances), [sl-pos/INTJ]()-[sl-pos/INTJ]() (1; 0% instances), [sl-pos/SCONJ]()-[sl-pos/INTJ]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse:filler	color:blue
1	eee	eee	INTJ	I	_	6	discourse:filler	_	word=eee|msd=M
2	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	word=to|msd=Zk-sei
3	se	se	PRON	Px------y	PronType=Prs|Variant=Short	6	expl	_	word=se|msd=Zp------k
4	bo	biti	AUX	Va-f3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	6	aux	_	word=bo|msd=Gp-pte-n
5	očitno	očitno	ADV	Rgp	Degree=Pos	6	advmod	_	word=očitno|msd=Rsn
6	razmahnilo	razmahniti	VERB	Vmep-sn	Aspect=Perf|Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	word=razmahnilo|msd=Ggdd-es

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 discourse:filler	color:blue
1	recimo	reči	VERB	Vmem1p	Aspect=Perf|Mood=Imp|Number=Plur|Person=1|VerbForm=Fin	3	parataxis:discourse	_	word=recimo|msd=Ggdvpm
2	eee	eee	INTJ	I	_	3	discourse:filler	_	word=eee|msd=M
3	čevlje	čevelj	NOUN	Ncmpa	Case=Acc|Gender=Masc|Number=Plur	0	root	_	word=čevle|msd=Sommt
4	nogavice	nogavica	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	3	conj	_	word=nogavice|msd=Sozmt
5	ali	ali	CCONJ	Cc	_	7	cc	_	word=ali|msd=Vp
6	pa	pa	CCONJ	Cc	_	5	fixed	_	word=pa|msd=Vp
7	kravato	kravata	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	3	conj	_	word=kravato|msd=Sozet
8	jaz	jaz	PRON	Pp1-sn	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	word=jz|msd=Zop-ei
9	sem	biti	VERB	Va-r1s-n	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	parataxis	_	word=sem|msd=Gp-spe-n
10	rec	_	X	Xt	_	9	reparandum	_	word=rec|msd=Nt
11	[gap]	[gap]	X	X	_	3	punct	_	word=[gap]|msd=N

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse:filler	color:blue
1	eem	eem	INTJ	I	_	4	discourse:filler	_	word=eem|msd=M
2	iz	iz	ADP	Sg	Case=Gen	3	reparandum	_	word=iz|msd=Dr
3	iz	iz	ADP	Sg	Case=Gen	4	case	_	word=iz|msd=Dr
4	jugovzhodne	jugovzhoden	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	word=jugovzhodne|msd=Ppnzer

~~~


