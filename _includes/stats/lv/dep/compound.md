

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

157 nodes (0%) are attached to their parents as `compound`.

152 instances of `compound` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.66242038216561.

The following 19 pairs of parts of speech are connected with `compound`: [lv-pos/PRON]()-[lv-pos/PRON]() (53; 34% instances), [lv-pos/PRON]()-[lv-pos/ADJ]() (25; 16% instances), [lv-pos/NUM]()-[lv-pos/NOUN]() (18; 11% instances), [lv-pos/NOUN]()-[lv-pos/NOUN]() (10; 6% instances), [lv-pos/ADV]()-[lv-pos/ADV]() (8; 5% instances), [lv-pos/PRON]()-[lv-pos/NOUN]() (8; 5% instances), [lv-pos/PRON]()-[lv-pos/VERB]() (8; 5% instances), [lv-pos/NUM]()-[lv-pos/NUM]() (7; 4% instances), [lv-pos/NUM]()-[lv-pos/PRON]() (4; 3% instances), [lv-pos/ADV]()-[lv-pos/SCONJ]() (3; 2% instances), [lv-pos/PRON]()-[lv-pos/NUM]() (3; 2% instances), [lv-pos/PROPN]()-[lv-pos/PRON]() (3; 2% instances), [lv-pos/ADJ]()-[lv-pos/NOUN]() (1; 1% instances), [lv-pos/ADV]()-[lv-pos/PRON]() (1; 1% instances), [lv-pos/NOUN]()-[lv-pos/PRON]() (1; 1% instances), [lv-pos/NUM]()-[lv-pos/ADJ]() (1; 1% instances), [lv-pos/PRON]()-[lv-pos/ADP]() (1; 1% instances), [lv-pos/PRON]()-[lv-pos/PART]() (1; 1% instances), [lv-pos/PRON]()-[lv-pos/PROPN]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound	color:blue
1	–	-	PUNCT	zd	_	5	punct	_	_
2	„	"	PUNCT	zq	_	5	punct	_	SpaceAfter=No
3	Mēs	mēs	PRON	pp10pnn	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
4	visi	viss	PRON	pg0mpnn	Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	3	compound	_	_
5	sēžam	sēdēt	VERB	vmnipi11pan	Evident=Fh,Nfh|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	!	!	PUNCT	zs	_	5	punct	_	SpaceAfter=No
7	"	"	PUNCT	zq	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 compound	color:blue
1	Gados	gads	NOUN	ncmpl1	Case=Loc|Gender=Masc|Number=Plur	2	obl	_	_
2	jaunāki	jauns	ADJ	afmpnnc	Case=Nom|Degree=Cmp|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
3	,	,	PUNCT	zc	_	7	punct	_	_
4	no	no	ADP	spsgy	_	5	case	_	_
5	skata	skats	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	7	obl	_	_
6	abi	abi	PRON	pg0mpnn	Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	2	nsubj	_	_
7	tādi	tāds	PRON	pd0mpnn	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	2	conj	_	_
8	parasti	parasts	ADJ	afmpnnp	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	7	compound	_	SpaceAfter=No
9	,	,	PUNCT	zc	_	10	punct	_	_
10	neuzkrītoši	neuzkrītošs	ADJ	afmpnnp	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Act	2	conj	_	SpaceAfter=No
11	.	.	PUNCT	zs	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 compound	color:blue
1	A/s	a/s	SYM	y	Abbr=Yes	3	nmod	_	_
2	Latvijas	Latvija	PROPN	npfsg4	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	_
3	Maiznieks	maiznieks	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
4	ir	būt	VERB	vcnipii30an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	viens	viens	NUM	mcsmsnv	Case=Nom|Gender=Masc|Number=Sing|NumType=Card	0	root	_	_
6	no	no	ADP	sppdy	_	9	case	_	_
7	maizes	maize	NOUN	ncfsg5	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
8	tirgus	tirgus	NOUN	ncmsg3	Case=Gen|Gender=Masc|Number=Sing	9	nmod	_	_
9	līderiem	līderis	NOUN	ncmpd2	Case=Dat|Gender=Masc|Number=Plur	5	compound	_	_
10	Latvijā	Latvija	PROPN	npfsl4	Case=Loc|Gender=Fem|Number=Sing	9	acl	_	SpaceAfter=No
11	.	.	PUNCT	zs	_	5	punct	_	_

~~~


