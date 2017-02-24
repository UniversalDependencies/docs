

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.
There are 1 language-specific subtypes of `csubj`: [csubj:pass]().

70 nodes (0%) are attached to their parents as `csubj`.

69 instances of `csubj` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.78571428571429.

The following 12 pairs of parts of speech are connected with `csubj`: [lv-pos/VERB]()-[lv-pos/VERB]() (38; 54% instances), [lv-pos/ADV]()-[lv-pos/VERB]() (9; 13% instances), [lv-pos/ADJ]()-[lv-pos/VERB]() (4; 6% instances), [lv-pos/VERB]()-[lv-pos/ADJ]() (4; 6% instances), [lv-pos/VERB]()-[lv-pos/NOUN]() (4; 6% instances), [lv-pos/PRON]()-[lv-pos/VERB]() (3; 4% instances), [lv-pos/ADJ]()-[lv-pos/NOUN]() (2; 3% instances), [lv-pos/VERB]()-[lv-pos/ADV]() (2; 3% instances), [lv-pos/ADJ]()-[lv-pos/ADJ]() (1; 1% instances), [lv-pos/ADJ]()-[lv-pos/ADV]() (1; 1% instances), [lv-pos/NOUN]()-[lv-pos/ADJ]() (1; 1% instances), [lv-pos/PUNCT]()-[lv-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj	color:blue
1	-	-	PUNCT	zd	_	3	punct	_	_
2	Man	es	PRON	pp10sdn	Case=Dat|Number=Sing|Person=1|PronType=Prs	3	obl	_	_
3	liekas	likties	VERB	vmyipi130an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Reflex=Yes|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	zc	_	7	punct	_	_
5	viņa	viņa	PRON	pp3fsnn	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
6	mūs	mēs	PRON	pp10pan	Case=Acc|Number=Plur|Person=1|PronType=Prs	7	obj	_	_
7	vēro	vērot	VERB	vmnipt230an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj	_	SpaceAfter=No
8	.	.	PUNCT	zs	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj	color:blue
1	Vai	vai	PART	qs	_	3	discourse	_	_
2	nav	nebūt	VERB	vcnipii30ay	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	savādi	savādi	ADV	r0m	_	0	root	_	SpaceAfter=No
4	,	,	PUNCT	zc	_	7	punct	_	_
5	kā	kā	ADV	r0m	PronType=Int	7	advmod	_	_
6	viss	viss	PRON	pg0msnn	Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	7	nsubj	_	_
7	sāk	sākt	VERB	vpnipt130an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj	_	_
8	briest	briest	VERB	vmnn0i1000n	Polarity=Pos|VerbForm=Inf	7	xcomp	_	_
9	un	un	CCONJ	ccs	_	10	cc	_	_
10	augt	augt	VERB	vmnn0i1000n	Polarity=Pos|VerbForm=Inf	8	conj	_	_
11	šajā	šis	DET	pd0msln	Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	12	det	_	_
12	gadalaikā	gadalaiks	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
13	?	?	PUNCT	zs	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj	color:blue
1	Vai	vai	PART	qs	_	3	discourse	_	_
2	nav	nebūt	VERB	vcnipii30ay	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	jocīgi	jocīgs	ADJ	afmpnnp	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
4	,	,	PUNCT	zc	_	7	punct	_	_
5	ka	ka	SCONJ	css	_	7	mark	_	_
6	viņa	viņa	PRON	pp3fsnn	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
7	nezina	nezināt	VERB	vmnipt330ay	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj	_	SpaceAfter=No
8	,	,	PUNCT	zc	_	9	punct	_	_
9	kas	kas	PRON	pq000nn	Case=Nom|PronType=Int	7	ccomp	_	_
10	viņa	viņa	PRON	pp3fsnn	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
11	ir	būt	VERB	vcnipii30an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	SpaceAfter=No
12	?	?	PUNCT	zs	_	3	punct	_	_

~~~


