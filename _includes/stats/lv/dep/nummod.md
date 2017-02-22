

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

430 nodes (1%) are attached to their parents as `nummod`.

416 instances of `nummod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.53720930232558.

The following 7 pairs of parts of speech are connected with `nummod`: [lv-pos/NOUN]()-[lv-pos/NUM]() (330; 77% instances), [lv-pos/SYM]()-[lv-pos/NUM]() (58; 13% instances), [lv-pos/VERB]()-[lv-pos/NUM]() (13; 3% instances), [lv-pos/PUNCT]()-[lv-pos/NUM]() (12; 3% instances), [lv-pos/NUM]()-[lv-pos/NUM]() (6; 1% instances), [lv-pos/PROPN]()-[lv-pos/NUM]() (6; 1% instances), [lv-pos/ADJ]()-[lv-pos/NUM]() (5; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Varbūt	varbūt	PART	qs	_	5	discourse	_	_
2	abi	abi	PRON	pg0mpnn	Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	5	nsubj	_	_
3	vienā	viena	NUM	mcsfslv	Case=Loc|Gender=Fem|Number=Sing|NumType=Card	4	nummod	_	_
4	iestādē	iestāde	NOUN	ncfsl5	Case=Loc|Gender=Fem|Number=Sing	5	obl	_	_
5	strādā	strādāt	VERB	vmnipt230an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	.	.	PUNCT	zs	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Būvniecības	būvniecība	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
2	nozarē	nozare	NOUN	ncfsl5	Case=Loc|Gender=Fem|Number=Sing	8	obl	_	_
3	(	(	PUNCT	zb	_	5	punct	_	SpaceAfter=No
4	6,1	6,1	NUM	xn	NumType=Card	5	nummod	_	SpaceAfter=No
5	%	%	SYM	xx	_	2	parataxis	_	SpaceAfter=No
6	)	)	PUNCT	zb	_	5	punct	_	_
7	apjoms	apjoms	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
8	kāpis	kāpt	VERB	vmnpdmsnasn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
9	par	par	ADP	sppdn	_	11	case	_	_
10	14,6	14,6	NUM	xn	NumType=Card	11	nummod	_	SpaceAfter=No
11	%	%	SYM	xx	_	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	zs	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 nummod	color:blue
1	Novilkt	novilkt	VERB	vmnn0t1000n	Polarity=Pos|VerbForm=Inf	9	ccomp	_	_
2	striktu	strikta	ADJ	arfsanp	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	_
3	robežu	robeža	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	1	obj	_	_
4	starp	starp	ADP	spsay	_	5	case	_	_
5	vienu	viens	NUM	mcsmsav	Case=Acc|Gender=Masc|Number=Sing|NumType=Card	1	nummod	_	_
6	un	un	CCONJ	ccs	_	7	cc	_	_
7	otru	otrs	NUM	mcsmsav	Case=Acc|Gender=Masc|Number=Sing|NumType=Card	5	conj	_	_
8	ir	būt	VERB	vcnipii30an	Evident=Fh,Nfh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
9	neiespējami	neiespējami	ADV	r0m	PronType=Neg	0	root	_	SpaceAfter=No
10	.	.	PUNCT	zs	_	9	punct	_	_

~~~


