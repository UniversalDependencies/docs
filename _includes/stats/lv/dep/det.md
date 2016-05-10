

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

428 nodes (2%) are attached to their parents as `det`.

424 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40654205607477.

The following 15 pairs of parts of speech are connected with `det`: [lv-pos/NOUN]()-[lv-pos/DET]() (355; 83% instances), [lv-pos/NOUN]()-[lv-pos/PRON]() (39; 9% instances), [lv-pos/PROPN]()-[lv-pos/DET]() (10; 2% instances), [lv-pos/NOUN]()-[lv-pos/SCONJ]() (5; 1% instances), [lv-pos/NUM]()-[lv-pos/DET]() (4; 1% instances), [lv-pos/VERB]()-[lv-pos/DET]() (3; 1% instances), [lv-pos/ADJ]()-[lv-pos/DET]() (2; 0% instances), [lv-pos/VERB]()-[lv-pos/PRON]() (2; 0% instances), [lv-pos/VERB]()-[lv-pos/SCONJ]() (2; 0% instances), [lv-pos/ADJ]()-[lv-pos/PRON]() (1; 0% instances), [lv-pos/ADV]()-[lv-pos/DET]() (1; 0% instances), [lv-pos/DET]()-[lv-pos/DET]() (1; 0% instances), [lv-pos/PRON]()-[lv-pos/DET]() (1; 0% instances), [lv-pos/PROPN]()-[lv-pos/SCONJ]() (1; 0% instances), [lv-pos/VERB]()-[lv-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det	color:blue
1	Kādas	kāda	DET	pq0fpan	Case=Acc|Gender=Fem|Number=Plur|PronType=Int	3	det	_	_
2	Eiropas	Eiropa	PROPN	npfsg4	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	_
3	likumdošanas	likumdošana	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
4	prasības	prasība	NOUN	ncfpa4	Case=Acc|Gender=Fem|Number=Plur	9	dobj	_	_
5	„	„	PUNCT	zq	_	6	punct	_	SpaceAfter=No
6	ZAAO	ZAAO	PROPN	np0sn0	Case=Nom|Number=Sing	9	nsubj	_	SpaceAfter=No
7	"	"	PUNCT	zq	_	6	punct	_	_
8	ir	būt	VERB	vcnipii30an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
9	izpildījusi	izpildīt	VERB	vmnpdfsnasn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
10	?	?	PUNCT	zs	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 det	color:blue
1	Mums	mēs	PRON	pp10pdn	Case=Dat|Number=Plur|Person=1|PronType=Prs	3	nmod	_	_
2	jau	jau	ADV	r0t	_	3	advmod	_	_
3	ir	būt	VERB	vmnipii30an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	klienti	klients	NOUN	ncmpn1	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
5	ar	ar	ADP	sppdn	_	9	case	_	_
6	šādu	šāds	PRON	pd0msan	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	9	det	_	_
7	vai	vai	SCONJ	css	_	6	cc	_	_
8	lielāku	liels	ADJ	afmsanc	Case=Acc|Degree=Cmp|Gender=Masc|Number=Sing	6	conj	_	_
9	ātrumu	ātrums	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	4	dobj	_	SpaceAfter=No
10	.	.	PUNCT	zs	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 det	color:blue
1	Viņam	viņš	PRON	pp3msdn	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nmod	_	_
2	galvenais	galvens	ADJ	armsnyp	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
3	jautājums	jautājums	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
4	bija	būt	VERB	vmnisii30an	Mood=Ind|Negative=Neg|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	zc	_	9	punct	_	_
6	kad	kad	ADV	r0t	PronType=Int	9	advmod	_	_
7	es	es	PRON	pp10snn	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
8	atkal	atkal	ADV	r0t	_	9	advmod	_	_
9	atbraukšu	atbraukt	VERB	vmnift11san	Mood=Ind|Negative=Neg|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	4	ccomp	_	_
10	ar	ar	ADP	spsan	_	12	case	_	_
11	savu	savs	DET	ps0msan	Case=Acc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	12	det	_	_
12	iPad	Ipad	PROPN	npmsa0	Case=Acc|Gender=Masc|Number=Sing	9	dobj	_	SpaceAfter=No
13	.	.	PUNCT	zs	_	4	punct	_	_

~~~


