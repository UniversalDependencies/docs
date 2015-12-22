

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

87913 nodes (6%) are attached to their parents as `root`.

87913 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.53828216532253.

The following 14 pairs of parts of speech are connected with `root`: [cs-pos/ROOT]()-[cs-pos/VERB]() (63219; 72% instances), [cs-pos/ROOT]()-[cs-pos/NOUN]() (11517; 13% instances), [cs-pos/ROOT]()-[cs-pos/PROPN]() (5363; 6% instances), [cs-pos/ROOT]()-[cs-pos/ADJ]() (4894; 6% instances), [cs-pos/ROOT]()-[cs-pos/NUM]() (1219; 1% instances), [cs-pos/ROOT]()-[cs-pos/ADV]() (890; 1% instances), [cs-pos/ROOT]()-[cs-pos/PRON]() (556; 1% instances), [cs-pos/ROOT]()-[cs-pos/PART]() (140; 0% instances), [cs-pos/ROOT]()-[cs-pos/PUNCT]() (33; 0% instances), [cs-pos/ROOT]()-[cs-pos/CONJ]() (31; 0% instances), [cs-pos/ROOT]()-[cs-pos/INTJ]() (17; 0% instances), [cs-pos/ROOT]()-[cs-pos/SYM]() (16; 0% instances), [cs-pos/ROOT]()-[cs-pos/ADP]() (11; 0% instances), [cs-pos/ROOT]()-[cs-pos/SCONJ]() (7; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Potřebujete	potřebovat	VERB	VB-P---2P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	rychle	rychle	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	3	advmod	_	LDeriv=rychlý
3	poradit	poradit	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	1	xcomp	_	SpaceAfter=No
4	?	?	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	|	|	PUNCT	Z:-------------	_	2	punct	_	_
2	Rady	rada	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	0	root	_	LId=rada-1|LGloss=(př._dát_někomu_dobrou_radu)
3	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	_	LId=na-1
4	telefon	telefon	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	2	nmod	_	_
5	|	|	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	P	P	PROPN	NNMXX-----A---8	Abbr=Yes|Animacy=Anim|Gender=Masc|NameType=Giv|Negative=Pos	0	root	_	SpaceAfter=No|LId=P-0
2	.	.	PUNCT	Z:-------------	_	1	punct	_	_
3	L	L	PROPN	NNMXX-----A---8	Abbr=Yes|Animacy=Anim|Gender=Masc|NameType=Sur|Negative=Pos	1	name	_	SpaceAfter=No|LId=L-9
4	.	.	PUNCT	Z:-------------	_	1	punct	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	1	punct	_	_
6	Ostrava	Ostrava	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Geo|Negative=Pos|Number=Sing	1	dep	_	_

~~~


