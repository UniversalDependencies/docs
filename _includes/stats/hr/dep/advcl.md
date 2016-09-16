

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

611 nodes (1%) are attached to their parents as `advcl`.

443 instances of `advcl` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.25859247135843.

The following 25 pairs of parts of speech are connected with `advcl`: [hr-pos/VERB]()-[hr-pos/VERB]() (337; 55% instances), [hr-pos/ADJ]()-[hr-pos/VERB]() (76; 12% instances), [hr-pos/VERB]()-[hr-pos/ADJ]() (57; 9% instances), [hr-pos/NOUN]()-[hr-pos/VERB]() (33; 5% instances), [hr-pos/VERB]()-[hr-pos/NOUN]() (32; 5% instances), [hr-pos/ADV]()-[hr-pos/VERB]() (14; 2% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (11; 2% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (9; 1% instances), [hr-pos/AUX]()-[hr-pos/VERB]() (6; 1% instances), [hr-pos/VERB]()-[hr-pos/ADV]() (6; 1% instances), [hr-pos/VERB]()-[hr-pos/AUX]() (6; 1% instances), [hr-pos/ADJ]()-[hr-pos/ADV]() (3; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADJ]() (3; 0% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (3; 0% instances), [hr-pos/ADJ]()-[hr-pos/AUX]() (2; 0% instances), [hr-pos/ADV]()-[hr-pos/ADJ]() (2; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADV]() (2; 0% instances), [hr-pos/PRON]()-[hr-pos/VERB]() (2; 0% instances), [hr-pos/ADV]()-[hr-pos/ADV]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/PRON]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/ADJ]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 advcl	color:blue
1	Međutim	međutim	ADV	_	Degree=Pos	8	discourse	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	kako	kako	ADV	_	Degree=Pos	6	mark	_	_
4	bi	biti	AUX	_	Number=Sing|Person=3|Tense=Past	6	aux	_	_
5	to	taj	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	6	dobj	_	_
6	ostvario	ostvariti	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	8	advcl	_	_
7	,	,	PUNCT	_	_	6	punct	_	_
8	mora	morati	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
9	nadvladati	nadvladati	VERB	_	VerbForm=Inf	8	xcomp	_	_
10	nekoliko	nekoliko	ADV	_	Degree=Pos	11	det	_	_
11	izazova	izazov	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	9	dobj	_	_
12	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 advcl	color:blue
1	"	"	PUNCT	_	_	3	punct	_	_
2	Ako	ako	SCONJ	_	_	3	mark	_	_
3	odaberete	odabrati	VERB	_	Number=Plur|Person=2|Tense=Pres	10	advcl	_	_
4	reforme	reforma	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	3	dobj	_	_
5	,	,	PUNCT	_	_	3	punct	_	_
6	vrata	vrata	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	10	nsubjpass	_	_
7	EU	EU	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	_
8	bit	biti	AUX	_	VerbForm=Inf	10	auxpass	_	_
9	će	htjeti	AUX	_	Number=Plur|Person=3|Tense=Pres	10	aux	_	_
10	otvorena	otvoriti	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur|VerbForm=Part	0	root	_	_
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 advcl	color:blue
1	Setimes	Setimes	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	6	parataxis	_	_
2	:	:	PUNCT	_	_	1	punct	_	_
3	Što	što	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Person=3|PronType=Ind	6	nsubj	_	_
4	će	htjeti	AUX	_	Number=Sing|Person=3|Tense=Pres	6	aux	_	_
5	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	6	compound	_	_
6	dogoditi	dogoditi	VERB	_	VerbForm=Inf	0	root	_	_
7	ako	ako	SCONJ	_	_	10	mark	_	_
8	ipak	ipak	ADV	_	Degree=Pos	10	advmod	_	_
9	bude	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	10	auxpass	_	_
10	korišten	korišten	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	6	advcl	_	_
11	veto	veto	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	10	nsubjpass	_	_
12	?	?	PUNCT	_	_	6	punct	_	_

~~~


