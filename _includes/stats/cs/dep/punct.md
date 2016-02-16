

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

221014 nodes (15%) are attached to their parents as `punct`.

156812 instances of `punct` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.25540011040025.

The following 19 pairs of parts of speech are connected with `punct`: [cs-pos/VERB]()-[cs-pos/PUNCT]() (126034; 57% instances), [cs-pos/NOUN]()-[cs-pos/PUNCT]() (40350; 18% instances), [cs-pos/PROPN]()-[cs-pos/PUNCT]() (19453; 9% instances), [cs-pos/ADJ]()-[cs-pos/PUNCT]() (17759; 8% instances), [cs-pos/NUM]()-[cs-pos/PUNCT]() (11568; 5% instances), [cs-pos/ADV]()-[cs-pos/PUNCT]() (3039; 1% instances), [cs-pos/PRON]()-[cs-pos/PUNCT]() (1659; 1% instances), [cs-pos/PART]()-[cs-pos/PUNCT]() (535; 0% instances), [cs-pos/PUNCT]()-[cs-pos/PUNCT]() (154; 0% instances), [cs-pos/DET]()-[cs-pos/PUNCT]() (130; 0% instances), [cs-pos/CONJ]()-[cs-pos/PUNCT]() (90; 0% instances), [cs-pos/INTJ]()-[cs-pos/PUNCT]() (69; 0% instances), [cs-pos/SYM]()-[cs-pos/PUNCT]() (66; 0% instances), [cs-pos/ADP]()-[cs-pos/PUNCT]() (61; 0% instances), [cs-pos/SCONJ]()-[cs-pos/PUNCT]() (32; 0% instances), [cs-pos/X]()-[cs-pos/PUNCT]() (11; 0% instances), [cs-pos/AUX]()-[cs-pos/PUNCT]() (2; 0% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 punct	color:blue
1	Potřebujete	potřebovat	VERB	VB-P---2P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	rychle	rychle	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	3	advmod	_	LDeriv=rychlý
3	poradit	poradit	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	1	xcomp	_	SpaceAfter=No
4	?	?	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 punct	color:blue
1	|	|	PUNCT	Z:-------------	_	2	punct	_	_
2	Rady	rada	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	0	root	_	LId=rada-1|LGloss=(př._dát_někomu_dobrou_radu)
3	na	na	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	_	LId=na-1
4	telefon	telefon	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	2	nmod	_	_
5	|	|	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 punct	color:blue
1	P	P	PROPN	NNMXX-----A---8	Abbr=Yes|Animacy=Anim|Gender=Masc|NameType=Giv|Negative=Pos	0	root	_	SpaceAfter=No|LId=P-0
2	.	.	PUNCT	Z:-------------	_	1	punct	_	_
3	L	L	PROPN	NNMXX-----A---8	Abbr=Yes|Animacy=Anim|Gender=Masc|NameType=Sur|Negative=Pos	1	name	_	SpaceAfter=No|LId=L-9
4	.	.	PUNCT	Z:-------------	_	1	punct	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	1	punct	_	_
6	Ostrava	Ostrava	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Geo|Negative=Pos|Number=Sing	1	dep	_	_

~~~


