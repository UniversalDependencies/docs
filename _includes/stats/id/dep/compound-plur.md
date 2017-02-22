

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Indonesian)

This relation is a language-specific subtype of [compound]().

599 nodes (1%) are attached to their parents as `compound:plur`.

599 instances of `compound:plur` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.98998330550918.

The following 10 pairs of parts of speech are connected with `compound:plur`: [id-pos/NOUN]()-[id-pos/NOUN]() (469; 78% instances), [id-pos/ADV]()-[id-pos/ADV]() (34; 6% instances), [id-pos/PROPN]()-[id-pos/NOUN]() (31; 5% instances), [id-pos/ADJ]()-[id-pos/ADJ]() (25; 4% instances), [id-pos/DET]()-[id-pos/DET]() (24; 4% instances), [id-pos/PROPN]()-[id-pos/PROPN]() (12; 2% instances), [id-pos/ADV]()-[id-pos/NOUN]() (1; 0% instances), [id-pos/NOUN]()-[id-pos/PROPN]() (1; 0% instances), [id-pos/PRON]()-[id-pos/PRON]() (1; 0% instances), [id-pos/PUNCT]()-[id-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 compound:plur	color:blue
1	Lia	_	PROPN	_	_	2	nsubj	_	_
2	memiliki	_	VERB	_	_	0	root	_	_
3	seorang	_	DET	_	_	4	det	_	_
4	anak	_	NOUN	_	_	2	obj	_	_
5	laki	_	NOUN	_	_	4	compound	_	_
6	-	_	PUNCT	_	_	5	punct	_	_
7	laki	_	NOUN	_	_	5	compound:plur	_	SpaceAfter=No
8	,	_	PUNCT	_	_	5	punct	_	_
9	REY	_	PROPN	_	_	5	appos	_	_
10	(	_	PUNCT	_	_	12	punct	_	SpaceAfter=No
11	6	_	NUM	_	NumType=Card	12	nummod	_	_
12	tahun	_	NOUN	_	_	9	appos	_	SpaceAfter=No
13	)	_	PUNCT	_	_	12	punct	_	SpaceAfter=No
14	.	_	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:plur	color:blue
1	Kira	_	ADV	_	_	0	root	_	_
2	kira	_	ADV	_	_	1	compound:plur	_	_
3	antara	_	ADP	_	_	4	case	_	_
4	Tadase	_	PROPN	_	_	1	nmod	_	_
5	dan	_	CCONJ	_	_	6	cc	_	_
6	Ikuto	_	PROPN	_	_	4	conj	_	_
7	mana	_	ADP	_	_	1	case	_	_
8	yang	_	PRON	_	_	10	nsubj	_	_
9	Amu	_	ADV	_	_	10	nsubj	_	_
10	pilih	_	VERB	_	_	1	acl	_	SpaceAfter=No
11	?	_	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 compound:plur	color:blue
1	Teori	_	PROPN	_	_	7	nsubj	_	_
2	-	_	PUNCT	_	_	1	punct	_	_
3	teori	_	NOUN	_	_	1	compound:plur	_	_
4	sosial	_	ADJ	_	_	1	amod	_	_
5	melulu	_	ADV	_	_	7	advmod	_	_
6	ingin	_	ADV	_	_	7	advmod	_	_
7	menyalin	_	VERB	_	_	0	root	_	_
8	fakta	_	NOUN	_	_	7	obj	_	_
9	masa	_	NOUN	_	_	8	amod	_	_
10	kini	_	ADJ	_	_	9	amod	_	SpaceAfter=No
11	.	_	PUNCT	_	_	7	punct	_	_

~~~


