

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

2338 nodes (5%) are attached to their parents as `amod`.

2331 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.42686056458512.

The following 15 pairs of parts of speech are connected with `amod`: [lv-pos/NOUN]()-[lv-pos/ADJ]() (1859; 80% instances), [lv-pos/NOUN]()-[lv-pos/VERB]() (417; 18% instances), [lv-pos/SYM]()-[lv-pos/ADJ]() (25; 1% instances), [lv-pos/PROPN]()-[lv-pos/ADJ]() (19; 1% instances), [lv-pos/NOUN]()-[lv-pos/SYM]() (3; 0% instances), [lv-pos/NUM]()-[lv-pos/SYM]() (3; 0% instances), [lv-pos/PROPN]()-[lv-pos/VERB]() (3; 0% instances), [lv-pos/VERB]()-[lv-pos/ADJ]() (2; 0% instances), [lv-pos/ADJ]()-[lv-pos/ADJ]() (1; 0% instances), [lv-pos/INTJ]()-[lv-pos/ADJ]() (1; 0% instances), [lv-pos/NOUN]()-[lv-pos/PRON]() (1; 0% instances), [lv-pos/PRON]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/SYM]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/VERB]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/X]()-[lv-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	Somiņa	somiņa	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	ar	ar	ADP	spsan	_	4	case	_	_
3	zelta	zelts	NOUN	ncmvg1	Case=Gen|Gender=Masc|Number=Coll	4	nmod	_	_
4	ķēdi	ķēde	NOUN	ncfsa5	Case=Acc|Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
5	,	,	PUNCT	zc	_	6	punct	_	_
6	auskari	auskars	NOUN	ncmpn1	Case=Nom|Gender=Masc|Number=Plur	1	conj	_	_
7	spoži	spožs	ADJ	afmpnnp	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	6	amod	_	_
8	un	un	CCONJ	ccs	_	9	cc	_	_
9	gari	garš	ADJ	afmpnnp	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	7	conj	_	SpaceAfter=No
10	.	.	PUNCT	zs	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	Viens	viens	NUM	mcsmsnv	Case=Nom|Gender=Masc|Number=Sing|NumType=Card	2	nsubj	_	_
2	atgādināja	atgādināt	VERB	vmnist330an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	kādu	kāds	DET	pi0msan	Case=Acc|Gender=Masc|Number=Sing|PronType=Ind	6	det	_	_
4	televīzijā	televīzija	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	5	obl	_	_
5	redzētu	redzēt	VERB	vmnpdmsapsn	Aspect=Perf|Case=Acc|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	amod	_	_
6	žurnālistu	žurnālists	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	2	obj	_	SpaceAfter=No
7	.	.	PUNCT	zs	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	Rīga	Rīga	PROPN	npfsn4	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	zc	_	4	punct	_	_
3	5.	5.	ADJ	xo	NumType=Ord	4	amod	_	SpaceAfter=No
4	jūn.	jūn.	SYM	y	Abbr=Yes	1	parataxis	_	SpaceAfter=No
5	,	,	PUNCT	zc	_	6	punct	_	_
6	LETA	LETA	PROPN	y	Abbr=Yes	1	parataxis	_	SpaceAfter=No
7	.	.	PUNCT	zs	_	1	punct	_	_

~~~


