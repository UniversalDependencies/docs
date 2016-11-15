

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

155 nodes (1%) are attached to their parents as `xcomp`.

155 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.40645161290323.

The following 4 pairs of parts of speech are connected with `xcomp`: [lv-pos/VERB]()-[lv-pos/VERB]() (151; 97% instances), [lv-pos/VERB]()-[lv-pos/NOUN]() (2; 1% instances), [lv-pos/ADJ]()-[lv-pos/VERB]() (1; 1% instances), [lv-pos/VERB]()-[lv-pos/ADJ]() (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	Tā	tā	PRON	pd0fsnn	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	5	nsubj	_	_
2	ir	būt	VERB	vcnipii30an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
3	šķirošanai	šķirošana	NOUN	ncfsd4	Case=Dat|Gender=Fem|Number=Sing	4	iobj	_	_
4	derīga	derīga	ADJ	affsnnp	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	_
5	masa	masa	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
6	,	,	PUNCT	zc	_	8	punct	_	_
7	ko	kas	SCONJ	pr000an	Case=Acc|PronType=Rel	9	dobj	_	_
8	var	varēt	VERB	vonipt330an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl	_	_
9	izmantot	izmantot	VERB	vmnn0t2000n	Negative=Neg|VerbForm=Inf	8	xcomp	_	_
10	kā	kā	SCONJ	css	_	11	mark	_	_
11	kurināmo	kurināt	VERB	vmnpdmsappy	Case=Acc|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Pass	8	acl	_	SpaceAfter=No
12	.	.	PUNCT	zs	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 xcomp	color:blue
1	Piemēram	piemērs	NOUN	ncmsd1	Case=Dat|Gender=Masc|Number=Sing	3	parataxis	_	SpaceAfter=No
2	,	,	PUNCT	zc	_	1	punct	_	_
3	ir	būt	VERB	vmnipii30an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	iepirkumi	iepirkums	NOUN	ncmpn1	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
5	bibliotēkās	bibliotēka	NOUN	ncfpl4	Case=Loc|Gender=Fem|Number=Plur	3	nmod	_	SpaceAfter=No
6	,	,	PUNCT	zc	_	8	punct	_	_
7	kas	kas	SCONJ	pr000nn	Case=Nom|PronType=Rel	8	nsubj	_	_
8	varētu	varēt	VERB	vonc0t300an	Mood=Cnd|Negative=Neg|VerbForm=Fin|Voice=Act	4	acl	_	_
9	būt	būt	VERB	vcnn0ii000n	Negative=Neg|VerbForm=Inf	11	aux	_	_
10	labs	labs	ADJ	afmsnnp	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	_
11	instruments	instruments	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	8	xcomp	_	SpaceAfter=No
12	,	,	PUNCT	zc	_	15	punct	_	_
13	ja	ja	SCONJ	css	_	15	mark	_	_
14	to	tas	PRON	pd0msan	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	15	dobj	_	_
15	nostabilizētu	nostabilizēt	VERB	vmnc0t200an	Mood=Cnd|Negative=Neg|VerbForm=Fin|Voice=Act	8	advcl	_	SpaceAfter=No
16	.	.	PUNCT	zs	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	Tāpat	tāpat	PART	qs	_	5	discourse	_	_
2	šādu	šāda	DET	pd0fpgn	Case=Gen|Gender=Fem|Number=Plur|PronType=Dem	3	det	_	_
3	izmaiņu	izmaiņa	NOUN	ncfpg4	Case=Gen|Gender=Fem|Number=Plur	5	nmod	_	_
4	dēļ	dēļ	ADP	stpgy	_	3	case	_	_
5	dārgāka	dārga	ADJ	affsnnc	Case=Nom|Degree=Cmp|Gender=Fem|Number=Sing	0	root	_	_
6	varētu	varēt	VERB	vonc0t300an	Mood=Cnd|Negative=Neg|VerbForm=Fin|Voice=Act	5	xcomp	_	_
7	kļūt	kļūt	VERB	vtnn0i1000n	Negative=Neg|VerbForm=Inf	6	xcomp	_	_
8	dalītās	dalīt	VERB	vmnpdfsgpsy	Aspect=Perf|Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	10	amod	_	_
9	atkritumu	atkritumi	NOUN	ncmdg1	Case=Gen|Gender=Masc|Number=Ptan	10	nmod	_	_
10	vākšanas	vākšana	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	11	nmod	_	_
11	infrastruktūras	infrastruktūra	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	_
12	sakārtošana	sakārtošana	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
13	iedzīvotājiem	iedzīvotājs	NOUN	ncmpd1	Case=Dat|Gender=Masc|Number=Plur	5	nmod	_	SpaceAfter=No
14	,	,	PUNCT	zc	_	18	punct	_	_
15	ko	kas	SCONJ	pr000an	Case=Acc|PronType=Rel	18	dobj	_	_
16	kā	kā	SCONJ	css	_	17	mark	_	_
17	obligātu	obligāta	ADJ	arfsanp	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	15	acl	_	_
18	pieprasa	pieprasīt	VERB	vmnipt330an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	acl	_	_
19	ES	ES	PROPN	y	_	18	nsubj	_	SpaceAfter=No
20	.	.	PUNCT	zs	_	5	punct	_	_

~~~


