

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

74 nodes (0%) are attached to their parents as `compound`.

38 instances of `compound` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25675675675676.

The following 12 pairs of parts of speech are connected with `compound`: [lv-pos/NUM]()-[lv-pos/NUM]() (38; 51% instances), [lv-pos/NUM]()-[lv-pos/NOUN]() (16; 22% instances), [lv-pos/PRON]()-[lv-pos/PRON]() (8; 11% instances), [lv-pos/ADV]()-[lv-pos/SCONJ]() (3; 4% instances), [lv-pos/PRON]()-[lv-pos/NOUN]() (2; 3% instances), [lv-pos/ADV]()-[lv-pos/ADV]() (1; 1% instances), [lv-pos/NOUN]()-[lv-pos/PRON]() (1; 1% instances), [lv-pos/NUM]()-[lv-pos/ADJ]() (1; 1% instances), [lv-pos/NUM]()-[lv-pos/PRON]() (1; 1% instances), [lv-pos/PRON]()-[lv-pos/NUM]() (1; 1% instances), [lv-pos/PRON]()-[lv-pos/PROPN]() (1; 1% instances), [lv-pos/PRON]()-[lv-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 compound	color:blue
1	Riska	risks	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
2	kapitāla	kapitāls	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
3	fonda	fonds	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	_
4	pamatkapitāls	pamatkapitāls	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
5	ir	būt	VERB	vcnipii30an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
6	3	3	NUM	xn_SPLIT_FIRST	NumType=Card	8	compound	_	_
7	162	162	NUM	xn_SPLIT_PART	NumType=Card	8	compound	_	_
8	618	618	NUM	xn_SPLIT_PART	NumType=Card	9	nummod	_	_
9	lati	lats	NOUN	ncmpn1	Case=Nom|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
10	.	.	PUNCT	zs	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 compound	color:blue
1	A/s	a/s	SYM	y	_	3	nmod	_	_
2	Latvijas	Latvija	PROPN	npfsg4	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	_
3	Maiznieks	maiznieks	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
4	ir	būt	VERB	vcnipii30an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
5	viens	viens	NUM	mcsmsnv	Case=Nom|Gender=Masc|Number=Sing|NumType=Card	0	root	_	_
6	no	no	ADP	sppdy	_	9	case	_	_
7	maizes	maize	NOUN	ncfsg5	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
8	tirgus	tirgus	NOUN	ncmsg3	Case=Gen|Gender=Masc|Number=Sing	9	nmod	_	_
9	līderiem	līderis	NOUN	ncmpd2	Case=Dat|Gender=Masc|Number=Plur	5	compound	_	_
10	Latvijā	Latvija	PROPN	npfsl4	Case=Loc|Gender=Fem|Number=Sing	9	acl	_	SpaceAfter=No
11	.	.	PUNCT	zs	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 compound	color:blue
1	Mēs	mēs	PRON	pp10pnn	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	zinām	zināt	VERB	vmnipt31pan	Mood=Ind|Negative=Neg|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	zc	_	9	punct	_	_
4	ka	ka	SCONJ	css	_	9	mark	_	_
5	ar	ar	ADP	spsan	_	6	case	_	_
6	laiku	laiks	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	9	nmod	_	_
7	tādā	tāda	DET	pd0fsln	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	8	det	_	_
8	ēkā	ēka	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	9	nmod	_	_
9	uzrodas	uzrasties	VERB	vmyipi130an	Mood=Ind|Negative=Neg|Person=3|Reflex=Yes|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	_
10	problēmas	problēma	NOUN	ncfpn4	Case=Nom|Gender=Fem|Number=Plur	9	nsubj	_	SpaceAfter=No
11	,	,	PUNCT	zc	_	17	punct	_	_
12	kuras	kura	SCONJ	pr0fpnn	Case=Nom|Gender=Fem|Number=Plur|PronType=Rel	17	iobj	_	_
13	neviens	neviens	PRON	pi0msny	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind,Neg	17	nsubj	_	_
14	no	no	ADP	sppdy	_	15	case	_	_
15	mums	mēs	PRON	pp10pdn	Case=Dat|Number=Plur|Person=1|PronType=Prs	13	compound	_	_
16	nav	nebūt	VERB	vcnipii30ay	Mood=Ind|Negative=Pos|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	17	aux	_	_
17	gaidījis	gaidīt	VERB	vmnpdmsnasn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	10	acl	_	SpaceAfter=No
18	.	.	PUNCT	zs	_	2	punct	_	_

~~~


