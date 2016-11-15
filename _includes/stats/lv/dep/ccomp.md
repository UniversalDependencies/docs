

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

260 nodes (1%) are attached to their parents as `ccomp`.

221 instances of `ccomp` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.77692307692308.

The following 15 pairs of parts of speech are connected with `ccomp`: [lv-pos/VERB]()-[lv-pos/VERB]() (194; 75% instances), [lv-pos/VERB]()-[lv-pos/NOUN]() (14; 5% instances), [lv-pos/VERB]()-[lv-pos/ADJ]() (13; 5% instances), [lv-pos/PRON]()-[lv-pos/VERB]() (11; 4% instances), [lv-pos/ADV]()-[lv-pos/VERB]() (9; 3% instances), [lv-pos/ADJ]()-[lv-pos/VERB]() (4; 2% instances), [lv-pos/NOUN]()-[lv-pos/VERB]() (4; 2% instances), [lv-pos/VERB]()-[lv-pos/SCONJ]() (3; 1% instances), [lv-pos/VERB]()-[lv-pos/ADV]() (2; 1% instances), [lv-pos/ADV]()-[lv-pos/NUM]() (1; 0% instances), [lv-pos/NUM]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/PRON]()-[lv-pos/ADV]() (1; 0% instances), [lv-pos/PUNCT]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/VERB]()-[lv-pos/PRON]() (1; 0% instances), [lv-pos/VERB]()-[lv-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 ccomp	color:blue
1	Likumdošana	likumdošana	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	_
2	nosaka	nosacīt	VERB	vmnipt330an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	zc	_	8	punct	_	_
4	ka	ka	SCONJ	css	_	8	mark	_	_
5	biogāze	biogāze	NOUN	ncfsn5	Case=Nom|Gender=Fem|Number=Sing	8	dobj	_	_
6	poligonā	poligons	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	8	nmod	_	_
7	ir	būt	VERB	vcnipii30an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	_	_
8	jāsavāc	savākt	VERB	vmnd0t100an	Mood=Nec|Negative=Neg|VerbForm=Fin|Voice=Act	2	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	zs	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 ccomp	color:blue
1	Jāsaka	sacīt	VERB	vmnd0t300an	Mood=Nec|Negative=Neg|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	zc	_	7	punct	_	_
3	ka	ka	SCONJ	css	_	7	mark	_	_
4	literatūra	literatūra	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_
5	šobrīd	šobrīd	ADV	r0t	_	7	advmod	_	_
6	nav	nebūt	VERB	vcnipii30ay	Mood=Ind|Negative=Pos|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
7	slikta	slikta	ADJ	affsnnp	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	1	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	zs	_	1	punct	_	_

~~~


