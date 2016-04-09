

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

180 nodes (1%) are attached to their parents as `acl`.

180 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.16111111111111.

The following 16 pairs of parts of speech are connected with `acl`: [hu-pos/NOUN]()-[hu-pos/VERB]() (114; 63% instances), [hu-pos/NOUN]()-[hu-pos/ADJ]() (19; 11% instances), [hu-pos/PROPN]()-[hu-pos/VERB]() (16; 9% instances), [hu-pos/PRON]()-[hu-pos/VERB]() (7; 4% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (6; 3% instances), [hu-pos/PROPN]()-[hu-pos/NOUN]() (4; 2% instances), [hu-pos/VERB]()-[hu-pos/VERB]() (4; 2% instances), [hu-pos/ADJ]()-[hu-pos/VERB]() (2; 1% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (1; 1% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (1; 1% instances), [hu-pos/NOUN]()-[hu-pos/DET]() (1; 1% instances), [hu-pos/NOUN]()-[hu-pos/PROPN]() (1; 1% instances), [hu-pos/NUM]()-[hu-pos/VERB]() (1; 1% instances), [hu-pos/PRON]()-[hu-pos/ADJ]() (1; 1% instances), [hu-pos/PRON]()-[hu-pos/NOUN]() (1; 1% instances), [hu-pos/VERB]()-[hu-pos/NOUN]() (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 acl	color:blue
1	Volt	van	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	egy	egy	DET	_	Definite=Ind|PronType=Art	4	det	_	_
3	öreg	öreg	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	amod:att	_	_
4	barátom	barát	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=1	1	nsubj	_	_
5	,	,	PUNCT	_	_	1	punct	_	_
6	aki	aki	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Rel	9	nsubj	_	_
7	ilyen	ilyen	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	amod:att	_	_
8	sorsot	sors	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	dobj	_	_
9	viselt	visel	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	acl	_	_
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 acl	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	egyetlen	egyetlen	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	amod:att	_	_
3	dolog	dolog	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
4	az	az	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	életben	élet	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	nmod:obl	_	_
6	,	,	PUNCT	_	_	3	punct	_	_
7	amivel	ami	PRON	_	Case=Ins|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Rel	8	nmod:obl	_	_
8	azonos	azonos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	acl	_	_
9	vagyok	van	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 acl	color:blue
1	Rezník	Rezník	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	nsubj	_	_
2	nem	nem	ADV	_	PronType=Neg	3	neg	_	_
3	sokkal	sokkal	ADV	_	_	5	advmod:mode	_	_
4	a	a	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	szerencsétlenség	szerencsétlenség	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	nmod	_	_
6	előtt	előtt	ADP	_	_	5	case	_	_
7	került	kerül	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	Dubcek	Dubcek	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	nmod	_	_
9	mellé	mellé	ADP	_	_	8	case	_	_
10	,	,	PUNCT	_	_	7	punct	_	_
11	aki	aki	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Rel	13	nsubj	_	_
12	nem	nem	ADV	_	PronType=Neg	13	neg	_	_
13	kedvelte	kedvel	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	8	acl	_	_
14	őt	ő	PRON	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Prs	13	dobj	_	_
15	.	.	PUNCT	_	_	7	punct	_	_

~~~


