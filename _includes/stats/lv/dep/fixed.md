

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

183 nodes (0%) are attached to their parents as `fixed`.

183 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 5 pairs of parts of speech are connected with `fixed`: [lv-pos/PART]()-[lv-pos/CCONJ]() (74; 40% instances), [lv-pos/PART]()-[lv-pos/PART]() (53; 29% instances), [lv-pos/PART]()-[lv-pos/SCONJ]() (38; 21% instances), [lv-pos/ADV]()-[lv-pos/SCONJ]() (17; 9% instances), [lv-pos/PART]()-[lv-pos/ADV]() (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 fixed	color:blue
1	-	-	PUNCT	zd	_	6	punct	_	_
2	Nu	nu	PART	qs	_	6	discourse	_	_
3	kā	kā	ADV	r0m	PronType=Int	2	flat	_	_
4	-	-	PUNCT	zd	_	2	punct	_	_
5	viņa	viņa	PRON	pp3fsnn	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
6	saposusies	saposties	VERB	vmypdmpnasn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur|Reflex=Yes|Tense=Past|VerbForm=Part	0	root	_	_
7	-	-	PUNCT	zd	_	9	punct	_	_
8	ne	ne	PART	qs	Polarity=Neg	9	discourse	_	_
9	pārlieku	pārlieku	ADV	r0q	_	6	advcl	_	SpaceAfter=No
10	,	,	PUNCT	zc	_	11	punct	_	_
11	bet	bet	PART	ccc_SPLIT_FIRST	_	9	discourse	_	_
12	tomēr	tomēr	CCONJ	ccc_SPLIT_PART	_	11	fixed	_	SpaceAfter=No
13	.	.	PUNCT	zs	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Viss	viss	DET	pg0msnn	Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	2	det	_	_
2	stāvs	stāvs	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
3	it	it	PART	qc_SPLIT_FIRST	_	6	discourse	_	_
4	kā	kā	PART	qc_SPLIT_PART	_	3	fixed	_	_
5	strauji	strauji	ADV	r0c	_	6	advmod	_	_
6	novīta	novīst	VERB	vmnisi130an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	-	-	PUNCT	zd	_	9	punct	_	_
8	kā	kā	SCONJ	css	_	9	mark	_	_
9	puķe	puķe	NOUN	ncfsn5	Case=Nom|Gender=Fem|Number=Sing	6	acl	_	_
10	vāzē	vāze	NOUN	ncfsl5	Case=Loc|Gender=Fem|Number=Sing	9	acl	_	SpaceAfter=No
11	.	.	PUNCT	zs	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 fixed	color:blue
1	Balsis	balss	NOUN	ncfpn6	Case=Nom|Gender=Fem|Number=Plur	2	iobj	_	_
2	skan	skanēt	VERB	vmnipt330an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	tā	tā	ADV	r0m	PronType=Dem	2	advmod	_	SpaceAfter=No
4	,	,	PUNCT	zc	_	8	punct	_	_
5	it	it	PART	csc_SPLIT_FIRST	_	8	mark	_	_
6	kā	kā	SCONJ	csc_SPLIT_PART	_	5	fixed	_	_
7	es	es	PRON	pp10snn	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
8	atrastos	atrasties	VERB	vmyc0i100an	Mood=Cnd|Polarity=Pos|Reflex=Yes|VerbForm=Fin|Voice=Act	2	advcl	_	_
9	lielā	liela	ADJ	affslnp	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	_
10	flīzētā	flīzēt	VERB	vmnpdfslpsn	Aspect=Perf|Case=Loc|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	11	amod	_	_
11	telpā	telpa	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	zs	_	2	punct	_	_

~~~


