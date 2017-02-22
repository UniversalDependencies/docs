

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is a language-specific subtype of [acl]().
There are also 1 other language-specific subtypes of `acl`: [acl:inf]().

2736 nodes (2%) are attached to their parents as `acl:relcl`.

2736 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.78362573099415.

The following 32 pairs of parts of speech are connected with `acl:relcl`: [he-pos/NOUN]()-[he-pos/VERB]() (1881; 69% instances), [he-pos/NOUN]()-[he-pos/NOUN]() (140; 5% instances), [he-pos/PROPN]()-[he-pos/VERB]() (131; 5% instances), [he-pos/ADV]()-[he-pos/VERB]() (123; 4% instances), [he-pos/NOUN]()-[he-pos/AUX]() (113; 4% instances), [he-pos/NOUN]()-[he-pos/ADJ]() (109; 4% instances), [he-pos/PRON]()-[he-pos/VERB]() (86; 3% instances), [he-pos/NOUN]()-[he-pos/PRON]() (28; 1% instances), [he-pos/NOUN]()-[he-pos/PROPN]() (15; 1% instances), [he-pos/ADJ]()-[he-pos/VERB]() (14; 1% instances), [he-pos/ADV]()-[he-pos/ADJ]() (12; 0% instances), [he-pos/PROPN]()-[he-pos/NOUN]() (12; 0% instances), [he-pos/VERB]()-[he-pos/VERB]() (12; 0% instances), [he-pos/PRON]()-[he-pos/ADJ]() (8; 0% instances), [he-pos/PRON]()-[he-pos/AUX]() (6; 0% instances), [he-pos/PRON]()-[he-pos/NOUN]() (6; 0% instances), [he-pos/ADV]()-[he-pos/NOUN]() (5; 0% instances), [he-pos/NUM]()-[he-pos/VERB]() (5; 0% instances), [he-pos/PROPN]()-[he-pos/PROPN]() (5; 0% instances), [he-pos/ADV]()-[he-pos/AUX]() (4; 0% instances), [he-pos/PROPN]()-[he-pos/ADJ]() (4; 0% instances), [he-pos/PROPN]()-[he-pos/PRON]() (3; 0% instances), [he-pos/X]()-[he-pos/VERB]() (3; 0% instances), [he-pos/ADJ]()-[he-pos/AUX]() (2; 0% instances), [he-pos/NOUN]()-[he-pos/ADV]() (2; 0% instances), [he-pos/ADJ]()-[he-pos/PRON]() (1; 0% instances), [he-pos/ADV]()-[he-pos/ADV]() (1; 0% instances), [he-pos/ADV]()-[he-pos/PRON]() (1; 0% instances), [he-pos/ADV]()-[he-pos/PROPN]() (1; 0% instances), [he-pos/DET]()-[he-pos/VERB]() (1; 0% instances), [he-pos/NUM]()-[he-pos/AUX]() (1; 0% instances), [he-pos/VERB]()-[he-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 acl:relcl	color:blue
1	שם	שם	ADV	ADV	_	3	advmod	_	_
2	היה	היה	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbType=Cop	3	aux	_	_
3	אמור	אמור	AUX	AUX	Gender=Masc|Number=Sing|Person=1,2,3|VerbType=Mod	0	root	_	_
4	להיפגש	נפגש	VERB	VERB	HebBinyan=NIFAL|VerbForm=Inf|Voice=Mid	3	xcomp	_	_
5	עם	עם	ADP	ADP	_	6	case	_	_
6	איש_	איש	NOUN	NOUN	Definite=Def|Gender=Fem|Number=Sing	4	obl	_	_
7	_של_	של	ADP	ADP	_	8	case:gen	_	_
8	_הוא	הוא	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nmod:poss	_	_
9	,	_	PUNCT	PUNCT	_	6	punct	_	_
10	ש	ש	SCONJ	SCONJ	_	11	mark	_	_
11	עשתה	עשה	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past|Voice=Act	6	acl:relcl	_	_
12	ב	ב	ADP	ADP	_	13	case	_	_
13	בוסטון	בוסטון	PROPN	PROPN	_	11	obl	_	_
14	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 14 acl:relcl	color:blue
1	מקונן	מקונן	PROPN	PROPN	_	2	nsubj	_	_
2	הורשע	הורשע	VERB	VERB	Gender=Masc|HebBinyan=HUFAL|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	_
3	ב	ב	ADP	ADP	_	4	case	_	_
4	עבירה	עבירה	NOUN	NOUN	Gender=Fem|Number=Sing	2	obl	_	_
5	ש	ש	SCONJ	SCONJ	_	14	mark	_	_
6	ה	ה	DET	DET	PronType=Art	7	det:def	_	_
7	עונש	עונש	NOUN	NOUN	Gender=Masc|Number=Sing	14	nsubj:cop	_	_
8	ה	ה	DET	DET	PronType=Art	9	det:def	_	_
9	מירבי	מרבי	ADJ	ADJ	Gender=Masc|Number=Sing	7	amod	_	_
10	עליה	על	ADP	ADP	_	11	case	_	_
11	_היא	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	nmod	_	_
12	הוא	הוא	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Polarity=Pos|VerbForm=Part|VerbType=Cop	14	cop	_	_
13	41	_	NUM	NUM	_	14	nummod	_	_
14	שנות	שנה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Plur	4	acl:relcl	_	_
15	מאסר	מאסר	NOUN	NOUN	Gender=Masc|Number=Sing	14	compound:smixut	_	_
16	.	_	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl:relcl	color:blue
1	מארק	מארק	PROPN	PROPN	_	7	nsubj	_	_
2	,	_	PUNCT	PUNCT	_	1	punct	_	_
3	ש	ש	SCONJ	SCONJ	_	4	mark	_	_
4	שנא	שנא	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past|Voice=Act	1	acl:relcl	_	_
5	גרמנים	גרמני	NOUN	NOUN	Gender=Masc|Number=Plur	4	obj	_	_
6	,	_	PUNCT	PUNCT	_	7	punct	_	_
7	הציב	הציב	VERB	VERB	Gender=Masc|HebBinyan=HIFIL|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
8	תנאי	תנאי	NOUN	NOUN	Gender=Masc|Number=Sing	7	obj	_	_
9	:	_	PUNCT	PUNCT	_	12	punct	_	_
10	הם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3|PronType=Prs	12	nsubj	_	_
11	לא	לא	ADV	ADV	Polarity=Neg	12	advmod	_	_
12	יתגוררו	התגורר	VERB	VERB	Gender=Fem,Masc|HebBinyan=HITPAEL|Number=Plur|Person=3|Tense=Fut	8	appos	_	_
13	ב	ב	ADP	ADP	_	14	case	_	_
14	גרמניה	גרמניה	PROPN	PROPN	_	12	iobj	_	_
15	.	_	PUNCT	PUNCT	_	7	punct	_	_

~~~


