

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Irish)

This relation is a language-specific subtype of [flat]().

84 nodes (1%) are attached to their parents as `flat:name`.

84 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.36904761904762.

The following 11 pairs of parts of speech are connected with `flat:name`: [ga-pos/PROPN]()-[ga-pos/PROPN]() (40; 48% instances), [ga-pos/PROPN]()-[ga-pos/PART]() (17; 20% instances), [ga-pos/PART]()-[ga-pos/PROPN]() (9; 11% instances), [ga-pos/NOUN]()-[ga-pos/PART]() (4; 5% instances), [ga-pos/NOUN]()-[ga-pos/PROPN]() (4; 5% instances), [ga-pos/PROPN]()-[ga-pos/X]() (3; 4% instances), [ga-pos/VERB]()-[ga-pos/PART]() (2; 2% instances), [ga-pos/X]()-[ga-pos/PROPN]() (2; 2% instances), [ga-pos/PROPN]()-[ga-pos/ADP]() (1; 1% instances), [ga-pos/VERB]()-[ga-pos/PROPN]() (1; 1% instances), [ga-pos/X]()-[ga-pos/PART]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 flat:name	color:blue
1	Le	le	ADP	Simp	_	0	root	_	_
2	Concubhar	Concubhar	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	nmod	_	_
3	Ó	ó	PART	Pat	PartType=Pat	2	flat:name	_	_
4	Liatháin	Liatháin	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	2	flat:name	_	SpaceAfter=No
5	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:name	color:blue
1	Le	le	ADP	Simp	_	0	root	_	_
2	Concubhar	Concubhar	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	1	nmod	_	_
3	Ó	ó	PART	Pat	PartType=Pat	2	flat:name	_	_
4	Liatháin	Liatháin	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	2	flat:name	_	SpaceAfter=No
5	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	Ó	ó	PART	Pat	PartType=Pat	0	root	_	_
2	Dubhurthuile	dubhurthuile	PROPN	Noun	Case=NomAcc|Gender=Masc	1	flat:name	_	_
3	a	a	PART	Inf	PartType=Inf	4	mark	_	_
4	bheith	bheith	NOUN	Noun	Form=Len|VerbForm=Inf	1	xcomp	_	_
5	mar	mar	ADP	Simp	_	6	case	_	_
6	Phátrún	pátrún	NOUN	Noun	Case=NomAcc|Form=Len|Gender=Masc|Number=Sing	4	nmod	_	_
7	ar	ar	ADP	Simp	_	9	case	_	_
8	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	9	det	_	_
9	gCraobh	craobh	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


