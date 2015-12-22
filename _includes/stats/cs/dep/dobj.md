

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

79476 nodes (5%) are attached to their parents as `dobj`.

54476 instances of `dobj` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.71241632694147.

The following 51 pairs of parts of speech are connected with `dobj`: [cs-pos/VERB]()-[cs-pos/NOUN]() (56742; 71% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (13934; 18% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (3185; 4% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (2389; 3% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (839; 1% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (721; 1% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (551; 1% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (370; 0% instances), [cs-pos/ADJ]()-[cs-pos/PROPN]() (280; 0% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (110; 0% instances), [cs-pos/SYM]()-[cs-pos/NUM]() (66; 0% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (44; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (33; 0% instances), [cs-pos/VERB]()-[cs-pos/PART]() (25; 0% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (18; 0% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (16; 0% instances), [cs-pos/ADJ]()-[cs-pos/NUM]() (14; 0% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (13; 0% instances), [cs-pos/PUNCT]()-[cs-pos/NOUN]() (13; 0% instances), [cs-pos/SYM]()-[cs-pos/NOUN]() (12; 0% instances), [cs-pos/NUM]()-[cs-pos/NOUN]() (11; 0% instances), [cs-pos/PUNCT]()-[cs-pos/NUM]() (10; 0% instances), [cs-pos/ADV]()-[cs-pos/PRON]() (8; 0% instances), [cs-pos/NUM]()-[cs-pos/PRON]() (8; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (7; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (7; 0% instances), [cs-pos/PROPN]()-[cs-pos/NOUN]() (7; 0% instances), [cs-pos/ADP]()-[cs-pos/NOUN]() (5; 0% instances), [cs-pos/ADV]()-[cs-pos/PROPN]() (5; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (5; 0% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (4; 0% instances), [cs-pos/PRON]()-[cs-pos/PRON]() (2; 0% instances), [cs-pos/PROPN]()-[cs-pos/PROPN]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/ADP]() (2; 0% instances), [cs-pos/VERB]()-[cs-pos/INTJ]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/ADJ]()-[cs-pos/SYM]() (1; 0% instances), [cs-pos/ADP]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/ADP]()-[cs-pos/PROPN]() (1; 0% instances), [cs-pos/CONJ]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/NOUN]()-[cs-pos/CONJ]() (1; 0% instances), [cs-pos/NUM]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/ADP]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/NOUN]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/PART]() (1; 0% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/NUM]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/CONJ]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 dobj	color:blue
1	Zvedněte	zvednout	VERB	Vi-P---2--A----	Mood=Imp|Negative=Pos|Number=Plur|Person=2|VerbForm=Fin	0	root	_	_
2	telefon	telefon	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	1	dobj	_	_
3	a	a	CONJ	J^-------------	_	1	cc	_	LId=a-1
4	zavolejte	zavolat	VERB	Vi-P---2--A----	Aspect=Perf|Mood=Imp|Negative=Pos|Number=Plur|Person=2|VerbForm=Fin	1	conj	_	SpaceAfter=No
5	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 dobj	color:blue
1	Změny	změna	NOUN	NNFP1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Plur	3	nsubj	_	_
2	jsou	být	VERB	VB-P---3P-AA---	Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	citelné	citelný	ADJ	AAFP1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Plur	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	3	punct	_	_
5	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
6	třeba	třeba	ADJ	ACNS------A----	Gender=Neut|Negative=Pos|Number=Sing|Variant=Short	3	conj	_	LId=třeba-1
7	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	9	dobj	_	LId=on-1|LGloss=(oni/ono)
8	lépe	dobře	ADV	Dg-------2A----	Degree=Cmp|Negative=Pos	9	advmod	_	_
9	prezentovat	prezentovat	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	6	csubj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 dobj	color:blue
1	Moby	Moby	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Negative=Pos|Number=Sing	0	root	_	_
2	Dick	Dick	PROPN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Negative=Pos|Number=Sing	1	name	_	_
3	čeřící	čeřící	ADJ	AGMS1-----A----	Animacy=Anim|Aspect=Imp|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	1	amod	_	LDeriv=čeřit
4	vody	voda	NOUN	NNFP4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Plur	3	dobj	_	_
5	hitparád	hitparáda	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	4	nmod	_	_

~~~


