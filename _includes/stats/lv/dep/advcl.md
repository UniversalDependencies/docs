

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

603 nodes (1%) are attached to their parents as `advcl`.

391 instances of `advcl` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.11608623548922.

The following 25 pairs of parts of speech are connected with `advcl`: [lv-pos/VERB]()-[lv-pos/VERB]() (420; 70% instances), [lv-pos/ADV]()-[lv-pos/VERB]() (44; 7% instances), [lv-pos/NOUN]()-[lv-pos/VERB]() (32; 5% instances), [lv-pos/ADJ]()-[lv-pos/VERB]() (22; 4% instances), [lv-pos/VERB]()-[lv-pos/ADV]() (20; 3% instances), [lv-pos/VERB]()-[lv-pos/ADJ]() (15; 2% instances), [lv-pos/PRON]()-[lv-pos/VERB]() (12; 2% instances), [lv-pos/VERB]()-[lv-pos/NOUN]() (10; 2% instances), [lv-pos/ADV]()-[lv-pos/ADJ]() (4; 1% instances), [lv-pos/NOUN]()-[lv-pos/ADJ]() (3; 0% instances), [lv-pos/VERB]()-[lv-pos/PRON]() (3; 0% instances), [lv-pos/ADJ]()-[lv-pos/ADJ]() (2; 0% instances), [lv-pos/ADJ]()-[lv-pos/ADV]() (2; 0% instances), [lv-pos/NOUN]()-[lv-pos/ADV]() (2; 0% instances), [lv-pos/PROPN]()-[lv-pos/VERB]() (2; 0% instances), [lv-pos/ADJ]()-[lv-pos/NOUN]() (1; 0% instances), [lv-pos/ADJ]()-[lv-pos/PROPN]() (1; 0% instances), [lv-pos/ADV]()-[lv-pos/ADV]() (1; 0% instances), [lv-pos/CCONJ]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/NUM]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/PRON]()-[lv-pos/NOUN]() (1; 0% instances), [lv-pos/PROPN]()-[lv-pos/ADV]() (1; 0% instances), [lv-pos/PUNCT]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/SYM]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/VERB]()-[lv-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 advcl	color:blue
1	-	-	PUNCT	zd	_	2	punct	_	_
2	Labrīt	labrīt	INTJ	is	_	6	parataxis	_	SpaceAfter=No
3	,	,	PUNCT	zc	_	2	punct	_	_
4	-	-	PUNCT	zd	_	2	punct	_	_
5	es	es	PRON	pp10snn	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	teicu	teikt	VERB	vmnist11san	Evident=Fh,Nfh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	,	,	PUNCT	zc	_	8	punct	_	_
8	sajūtot	sajust	VERB	vmnpu000000	VerbForm=Conv	6	advcl	_	_
9	nepatiku	nepatika	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	_
10	pret	pret	ADP	spsay	_	12	case	_	_
11	viņas	viņa	PRON	pp3fsgn	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	12	det	_	_
12	pieskārienu	pieskāriens	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	8	iobj	_	SpaceAfter=No
13	.	.	PUNCT	zs	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 13 advcl	color:blue
1	Nekas	nekas	PRON	pi0msny	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind,Neg	3	nsubj	_	_
2	vairs	vairs	ADV	r0t	_	3	advmod	_	_
3	nebija	nebūt	VERB	vmnisii30ay	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	savā	sava	PRON	ps0fsln	Case=Loc|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	5	obl	_	_
5	vietā	vieta	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	3	obl	_	SpaceAfter=No
6	,	,	PUNCT	zc	_	7	punct	_	_
7	tā	tā	ADV	r0m	PronType=Dem	3	advcl	_	SpaceAfter=No
8	,	,	PUNCT	zc	_	13	punct	_	_
9	kā	kā	ADV	r0m	PronType=Int	13	advmod	_	_
10	mēs	mēs	PRON	pp10pnn	Case=Nom|Number=Plur|Person=1|PronType=Prs	13	nsubj	_	_
11	to	tas	PRON	pd0msan	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	13	obj	_	_
12	bijām	būt	VERB	vcnisii1pan	Evident=Fh,Nfh|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	13	aux	_	_
13	novietojuši	novietot	VERB	vmnpdmpnasn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	7	advcl	_	SpaceAfter=No
14	.	.	PUNCT	zs	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 advcl	color:blue
1	Cigareti	cigarete	NOUN	ncfsa5	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	_
2	viņa	viņa	PRON	pp3fsnn	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
3	bija	būt	VERB	vcnisii30an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	_	_
4	atstājusi	atstāt	VERB	vmnpdfsnasn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	kūpam	kūpēt	VERB	vmnpu000000	VerbForm=Conv	1	advcl	_	_
6	pelnutraukā	pelnutrauks	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	5	obl	_	_
7	uz	uz	ADP	spsgy	_	9	case	_	_
8	sava	savs	DET	ps0msgn	Case=Gen|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	9	det	_	_
9	galda	galds	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	zs	_	4	punct	_	_

~~~


