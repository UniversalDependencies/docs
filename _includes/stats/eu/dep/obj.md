

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

6006 nodes (6%) are attached to their parents as `obj`.

5113 instances of `obj` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.06060606060606.

The following 42 pairs of parts of speech are connected with `obj`: [eu-pos/VERB]()-[eu-pos/NOUN]() (5172; 86% instances), [eu-pos/VERB]()-[eu-pos/DET]() (185; 3% instances), [eu-pos/VERB]()-[eu-pos/PROPN]() (173; 3% instances), [eu-pos/VERB]()-[eu-pos/ADJ]() (73; 1% instances), [eu-pos/VERB]()-[eu-pos/NUM]() (68; 1% instances), [eu-pos/VERB]()-[eu-pos/VERB]() (67; 1% instances), [eu-pos/VERB]()-[eu-pos/PRON]() (62; 1% instances), [eu-pos/NOUN]()-[eu-pos/NOUN]() (49; 1% instances), [eu-pos/CCONJ]()-[eu-pos/NOUN]() (40; 1% instances), [eu-pos/AUX]()-[eu-pos/NOUN]() (22; 0% instances), [eu-pos/NOUN]()-[eu-pos/PROPN]() (12; 0% instances), [eu-pos/ADJ]()-[eu-pos/NOUN]() (11; 0% instances), [eu-pos/PUNCT]()-[eu-pos/NOUN]() (9; 0% instances), [eu-pos/VERB]()-[eu-pos/ADV]() (8; 0% instances), [eu-pos/CCONJ]()-[eu-pos/NUM]() (6; 0% instances), [eu-pos/VERB]()-[eu-pos/PART]() (6; 0% instances), [eu-pos/CCONJ]()-[eu-pos/DET]() (5; 0% instances), [eu-pos/ADV]()-[eu-pos/NOUN]() (4; 0% instances), [eu-pos/PUNCT]()-[eu-pos/NUM]() (4; 0% instances), [eu-pos/NOUN]()-[eu-pos/DET]() (3; 0% instances), [eu-pos/ADJ]()-[eu-pos/DET]() (2; 0% instances), [eu-pos/CCONJ]()-[eu-pos/ADJ]() (2; 0% instances), [eu-pos/CCONJ]()-[eu-pos/PROPN]() (2; 0% instances), [eu-pos/PUNCT]()-[eu-pos/DET]() (2; 0% instances), [eu-pos/X]()-[eu-pos/NOUN]() (2; 0% instances), [eu-pos/ADJ]()-[eu-pos/PROPN]() (1; 0% instances), [eu-pos/ADV]()-[eu-pos/PROPN]() (1; 0% instances), [eu-pos/AUX]()-[eu-pos/ADJ]() (1; 0% instances), [eu-pos/AUX]()-[eu-pos/VERB]() (1; 0% instances), [eu-pos/CCONJ]()-[eu-pos/ADV]() (1; 0% instances), [eu-pos/CCONJ]()-[eu-pos/VERB]() (1; 0% instances), [eu-pos/DET]()-[eu-pos/NOUN]() (1; 0% instances), [eu-pos/NOUN]()-[eu-pos/NUM]() (1; 0% instances), [eu-pos/NOUN]()-[eu-pos/PRON]() (1; 0% instances), [eu-pos/NUM]()-[eu-pos/NOUN]() (1; 0% instances), [eu-pos/NUM]()-[eu-pos/PROPN]() (1; 0% instances), [eu-pos/PROPN]()-[eu-pos/NOUN]() (1; 0% instances), [eu-pos/PUNCT]()-[eu-pos/PROPN]() (1; 0% instances), [eu-pos/VERB]()-[eu-pos/CCONJ]() (1; 0% instances), [eu-pos/VERB]()-[eu-pos/PUNCT]() (1; 0% instances), [eu-pos/X]()-[eu-pos/ADJ]() (1; 0% instances), [eu-pos/X]()-[eu-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 2 obj	color:blue
1	Gure	gu	PRON	_	PronType=Prs	2	nmod	_	_
2	etxea	etxe	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	11	obj	_	SpaceAfter=No
3	,	,	PUNCT	_	_	11	punct	_	_
4	egun	egun	NOUN	_	_	11	obl	_	_
5	batean	bat	NUM	_	NumType=Card	4	nummod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	11	punct	_	_
7	ordu	ordu	NOUN	_	_	4	appos	_	_
8	batzuetan	batzuk	DET	_	Case=Ine|Definite=Def|Number=Plur	7	det	_	SpaceAfter=No
9	,	,	PUNCT	_	_	4	punct	_	_
10	zeharo	zeharo	ADV	_	_	11	advmod	_	_
11	aldatu	aldatu	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
12	zen	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Person[abs]=3	11	aux	_	SpaceAfter=No
13	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obj	color:blue
1	Garrantzitsuena	garrantzitsu	ADJ	_	Case=Abs|Definite=Def|Degree=Sup|Number=Sing	8	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	_	_	5	punct	_	_
3	zer	zer	DET	_	_	5	obj	_	_
4	nahi	nahi	NOUN	_	Case=Abs|Definite=Ind	5	compound	_	_
5	dugun	ukan	VERB	_	_	7	ccomp	_	_
6	argi	argi	NOUN	_	Case=Abs|Definite=Ind	7	obl	_	_
7	izatea	izan	VERB	_	Case=Abs	8	xcomp	_	_
8	da	izan	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obj	color:blue
1	Bigarren	bigarren	NUM	_	NumType=Ord	2	amod	_	_
2	mailan	maila	NOUN	_	Animacy=Inan|Case=Ine|Definite=Def|Number=Sing	5	obl	_	_
3	Baionak	Baiona	PROPN	_	Case=Erg|Definite=Def|Number=Sing	5	nsubj	_	_
4	Aubenas	Aubenas	PROPN	_	Case=Abs|Definite=Def|Number=Sing	5	obj	_	_
5	bisitatuko	bisitatu	VERB	_	Aspect=Prosp|VerbForm=Part	0	root	_	_
6	du	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=3	5	aux	_	_
7	(	(	PUNCT	_	_	5	punct	_	SpaceAfter=No
8	15:00	15:00	NUM	_	NumType=Card	5	parataxis	_	SpaceAfter=No
9	)	)	PUNCT	_	_	5	punct	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


