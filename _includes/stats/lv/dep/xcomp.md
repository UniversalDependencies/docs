

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

487 nodes (1%) are attached to their parents as `xcomp`.

483 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.4476386036961.

The following 14 pairs of parts of speech are connected with `xcomp`: [lv-pos/VERB]()-[lv-pos/VERB]() (400; 82% instances), [lv-pos/VERB]()-[lv-pos/ADJ]() (43; 9% instances), [lv-pos/VERB]()-[lv-pos/NOUN]() (20; 4% instances), [lv-pos/PUNCT]()-[lv-pos/NOUN]() (7; 1% instances), [lv-pos/VERB]()-[lv-pos/ADV]() (4; 1% instances), [lv-pos/ADJ]()-[lv-pos/VERB]() (3; 1% instances), [lv-pos/PUNCT]()-[lv-pos/SYM]() (2; 0% instances), [lv-pos/VERB]()-[lv-pos/PROPN]() (2; 0% instances), [lv-pos/ADV]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/PRON]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/PUNCT]()-[lv-pos/ADJ]() (1; 0% instances), [lv-pos/PUNCT]()-[lv-pos/NUM]() (1; 0% instances), [lv-pos/PUNCT]()-[lv-pos/PROPN]() (1; 0% instances), [lv-pos/VERB]()-[lv-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	-	-	PUNCT	zd	_	2	punct	_	_
2	Gribi	gribēt	VERB	vonipt32san	Evident=Fh,Nfh|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis	_	_
3	uzsmēķēt	uzsmēķēt	VERB	vmnn0t2000n	Polarity=Pos|VerbForm=Inf	2	xcomp	_	SpaceAfter=No
4	?	?	PUNCT	zs	_	2	punct	_	_
5	-	-	PUNCT	zd	_	2	punct	_	_
6	es	es	PRON	pp10snn	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
7	minēju	minēt	VERB	vmnist31san	Evident=Fh,Nfh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	,	,	PUNCT	zc	_	11	punct	_	_
9	pret	pret	ADP	spsay	_	10	case	_	_
10	meiteni	meitene	NOUN	ncfsa5	Case=Acc|Gender=Fem|Number=Sing	11	iobj	_	_
11	pagriezusies	pagriezties	VERB	vmypdfsnasn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Reflex=Yes|Tense=Past|VerbForm=Part	7	acl	_	SpaceAfter=No
12	.	.	PUNCT	zs	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	Tomēr	tomēr	PART	qs	_	4	discourse	_	_
2	meitene	meitene	NOUN	ncfsn5	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
3	uzreiz	uzreiz	ADV	r0t	_	4	advmod	_	_
4	kļuva	kļūt	VERB	vtnisi130an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	pielaidīgāka	pielaidīga	ADJ	affsnnc	Case=Nom|Degree=Cmp|Gender=Fem|Number=Sing	4	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	zs	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 xcomp	color:blue
1	Man	es	PRON	pp10sdn	Case=Dat|Number=Sing|Person=1|PronType=Prs	2	obl	_	_
2	gribējās	gribēties	VERB	voyist330an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Reflex=Yes|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	būt	būt	VERB	vcnn0ii000n	Polarity=Pos|VerbForm=Inf	5	cop	_	_
4	tam	tas	DET	pd0msdn	Case=Dat|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	draugam	draugs	NOUN	ncmsd1	Case=Dat|Gender=Masc|Number=Sing	2	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	zs	_	2	punct	_	_

~~~


