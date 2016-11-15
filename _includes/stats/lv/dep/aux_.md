

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

573 nodes (3%) are attached to their parents as `aux`.

548 instances of `aux` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.70680628272251.

The following 14 pairs of parts of speech are connected with `aux`: [lv-pos/VERB]()-[lv-pos/VERB]() (297; 52% instances), [lv-pos/NOUN]()-[lv-pos/VERB]() (128; 22% instances), [lv-pos/ADJ]()-[lv-pos/VERB]() (73; 13% instances), [lv-pos/ADV]()-[lv-pos/VERB]() (19; 3% instances), [lv-pos/PRON]()-[lv-pos/VERB]() (17; 3% instances), [lv-pos/PROPN]()-[lv-pos/VERB]() (15; 3% instances), [lv-pos/NUM]()-[lv-pos/VERB]() (7; 1% instances), [lv-pos/NOUN]()-[lv-pos/PUNCT]() (5; 1% instances), [lv-pos/SCONJ]()-[lv-pos/VERB]() (4; 1% instances), [lv-pos/SYM]()-[lv-pos/VERB]() (3; 1% instances), [lv-pos/SYM]()-[lv-pos/PUNCT]() (2; 0% instances), [lv-pos/NUM]()-[lv-pos/PUNCT]() (1; 0% instances), [lv-pos/PROPN]()-[lv-pos/PUNCT]() (1; 0% instances), [lv-pos/X]()-[lv-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux	color:blue
1	Kādas	kāda	DET	pq0fpan	Case=Acc|Gender=Fem|Number=Plur|PronType=Int	3	det	_	_
2	Eiropas	Eiropa	PROPN	npfsg4	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	_
3	likumdošanas	likumdošana	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	_
4	prasības	prasība	NOUN	ncfpa4	Case=Acc|Gender=Fem|Number=Plur	9	dobj	_	_
5	„	„	PUNCT	zq	_	6	punct	_	SpaceAfter=No
6	ZAAO	ZAAO	PROPN	y	_	9	nsubj	_	SpaceAfter=No
7	"	"	PUNCT	zq	_	6	punct	_	_
8	ir	būt	VERB	vcnipii30an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
9	izpildījusi	izpildīt	VERB	vmnpdfsnasn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
10	?	?	PUNCT	zs	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	Protams	protams	PART	qs	_	4	parataxis	_	SpaceAfter=No
2	,	,	PUNCT	zc	_	1	punct	_	_
3	ir	būt	VERB	vcnipii30an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	jārēķina	rēķināt	VERB	vmnd0t300an	Mood=Nec|Negative=Neg|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	zc	_	8	punct	_	_
6	vai	vai	CONJ	ccs	_	8	mark	_	_
7	ir	būt	VERB	vcnipii30an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	_	_
8	jēga	jēga	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	4	ccomp	_	_
9	to	tas	PRON	pd0msan	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	10	dobj	_	_
10	darīt	darīt	VERB	vmnn0t3000n	Negative=Neg|VerbForm=Inf	8	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	zs	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	Kaloritātes	kaloritāte	NOUN	ncfsg5	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
2	ziņā	ziņa	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	6	nmod	_	_
3	šī	šī	DET	pd0fsnn	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	_
4	masa	masa	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	_
5	ir	būt	VERB	vcnipii30an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
6	augstvērtīgāka	augstvērtīga	ADJ	affsnnc	Case=Nom|Degree=Cmp|Gender=Fem|Number=Sing	0	root	_	_
7	nekā	nekā	SCONJ	css	_	8	mark	_	_
8	šķelda	šķelda	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	6	acl	_	SpaceAfter=No
9	.	.	PUNCT	zs	_	6	punct	_	_

~~~


