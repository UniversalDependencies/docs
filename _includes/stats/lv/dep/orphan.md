

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

9 nodes (0%) are attached to their parents as `orphan`.

6 instances of `orphan` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 5 pairs of parts of speech are connected with `orphan`: [lv-pos/NOUN]()-[lv-pos/NOUN]() (3; 33% instances), [lv-pos/NUM]()-[lv-pos/NOUN]() (2; 22% instances), [lv-pos/PRON]()-[lv-pos/PRON]() (2; 22% instances), [lv-pos/NOUN]()-[lv-pos/VERB]() (1; 11% instances), [lv-pos/NUM]()-[lv-pos/VERB]() (1; 11% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 orphan	color:blue
1	Tam	tas	PRON	pd0msdn	Case=Dat|Gender=Masc|Number=Sing|PronType=Dem	3	obl	_	_
2	pilnas	pilna	ADJ	affpnnp	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	3	amod	_	_
3	ausis	auss	NOUN	ncfpn6	Case=Nom|Gender=Fem|Number=Plur	0	root	_	_
4	dainu	daina	NOUN	ncfpg4	Case=Gen|Gender=Fem|Number=Plur	3	orphan	_	_
5	un	un	CCONJ	ccs	_	7	cc	_	_
6	zobi	zobs	NOUN	ncmpn1	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	_
7	cauri	cauri	ADJ	afmpnnp	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	3	conj	_	_
8	teikām	teika	NOUN	ncfpd4	Case=Dat|Gender=Fem|Number=Plur	7	iobj	_	SpaceAfter=No
9	!	!	PUNCT	zs	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 orphan	color:blue
1	Par	par	ADP	spsan	_	2	case	_	_
2	ko	kas	PRON	pq000an	Case=Acc|PronType=Int	4	orphan	_	_
3	man	es	PRON	pp10sdn	Case=Dat|Number=Sing|Person=1|PronType=Prs	4	obl	_	_
4	tas	tas	PRON	pd0msnn	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	7	parataxis	_	SpaceAfter=No
5	,	,	PUNCT	zc	_	7	punct	_	_
6	es	es	PRON	pp10snn	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
7	domāju	domāt	VERB	vmnipt21san	Evident=Fh,Nfh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	,	,	PUNCT	zc	_	10	punct	_	_
9	par	par	ADP	spsan	_	10	case	_	_
10	ko	kas	PRON	pq000an	Case=Acc|PronType=Int	2	conj	_	SpaceAfter=No
11	.	.	PUNCT	zs	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 26 orphan	color:blue
1	Par	par	ADP	spsa	_	2	case	_	_
2	kukuļņemšanu	kukuļņemšana	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	5	iobj	_	_
3	KNAB	KNAB	PROPN	y	Abbr=Yes	4	nmod	_	_
4	izmeklētājs	izmeklētājs	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
5	rosina	rosināt	VERB	vmnipt330an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	uzsākt	uzsākt	VERB	vmnn0t1000n	Polarity=Pos|VerbForm=Inf	5	ccomp	_	_
7	kriminālvajāšanu	kriminālvajāšana	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	_
8	pret	pret	ADP	sppd	_	14	case	_	_
9	četrām	četras	NUM	mcsfpd	Case=Dat|Gender=Fem|Number=Plur|NumType=Card	14	nummod	_	_
10	bijušajām	bijusī	ADJ	arfpdyp	Case=Dat|Degree=Pos|Gender=Fem|Number=Plur	14	amod	_	_
11	"	"	PUNCT	zq	_	12	punct	_	SpaceAfter=No
12	Latvenergo	Latvenergo	PROPN	npmsg0	Case=Gen|Gender=Masc|Number=Sing	14	nmod	_	SpaceAfter=No
13	"	"	PUNCT	zq	_	12	punct	_	_
14	amatpersonām	amatpersona	NOUN	ncfpd4	Case=Dat|Gender=Fem|Number=Plur	6	iobj	_	SpaceAfter=No
15	,	,	PUNCT	zc	_	20	punct	_	_
16	pret	pret	ADP	sppd	_	17	case	_	_
17	divām	divas	NUM	mcsfpd	Case=Dat|Gender=Fem|Number=Plur|NumType=Card	20	ccomp	_	_
18	no	no	ADP	sppd	_	19	case	_	_
19	tām	tā	PRON	pd0fpdn	Case=Dat|Gender=Fem|Number=Plur|PronType=Dem	17	compound	_	_
20	-	-	PUNCT	zd	_	5	conj	_	_
21	arī	arī	PART	qs	_	26	discourse	_	_
22	par	par	ADP	spsa	_	26	case	_	_
23	noziedzīgi	noziedzīgi	ADV	r0c	_	24	advmod	_	_
24	iegūtu	iegūt	VERB	vmnpdmpgpsn	Aspect=Perf|Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	25	amod	_	_
25	līdzekļu	līdzeklis	NOUN	ncmpg2	Case=Gen|Gender=Masc|Number=Plur	26	nmod	_	_
26	legalizēšanu	legalizēšana	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	17	orphan	_	SpaceAfter=No
27	.	.	PUNCT	zs	_	5	punct	_	_

~~~


