

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is a language-specific subtype of [csubj]().

313 nodes (0%) are attached to their parents as `csubj:cop`.

288 instances of `csubj:cop` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.28434504792332.

The following 5 pairs of parts of speech are connected with `csubj:cop`: [et-pos/ADJ]()-[et-pos/VERB]() (274; 88% instances), [et-pos/NOUN]()-[et-pos/VERB]() (35; 11% instances), [et-pos/VERB]()-[et-pos/VERB]() (2; 1% instances), [et-pos/ADV]()-[et-pos/VERB]() (1; 0% instances), [et-pos/PRON]()-[et-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 csubj:cop	color:blue
1	b	b	NOUN	Y	Abbr=Yes	5	list	_	_
2	)	)	PUNCT	Z	_	5	punct	_	_
3	Kaarsillal	Kaar_sild	PROPN	S	Case=Ade|Number=Sing	5	nmod	_	_
4	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	ohtlik	ohtlik	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
6	ronida	ronima	VERB	V	VerbForm=Inf	5	csubj:cop	_	_
7	.	.	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 csubj:cop	color:blue
1	"	"	PUNCT	Z	_	3	punct	_	_
2	Sinu	sina	PRON	P	Case=Gen|Number=Sing|Person=2|PronType=Prs	3	nmod:poss	_	_
3	asi	asi	NOUN	S	Case=Nom|Number=Sing	0	root	_	_
4	pole	olema	VERB	V	Mood=Ind|Negative=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
5	minu	mina	PRON	P	Case=Gen|Number=Sing|Person=1|PronType=Prs	8	nmod	_	_
6	üle	üle	ADP	K	AdpType=Post	5	case	_	_
7	kohut	kohus	NOUN	S	Case=Par|Number=Sing	8	dobj	_	_
8	mõista	mõistma	VERB	V	VerbForm=Inf	3	csubj:cop	_	_
9	!	!	PUNCT	Z	_	3	punct	_	_
10	"	"	PUNCT	Z	_	3	punct	_	_
11	ütles	ütlema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	parataxis	_	_
12	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
13	manitsevalt	manitsevalt	ADV	D	_	11	advmod	_	_
14	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 csubj:cop	color:blue
1	Kuni	kuni	SCONJ	J	_	3	mark	_	_
2	Jan	Jan	PROPN	S	Case=Nom|Number=Sing	3	nsubj	_	_
3	reageeris	reageerima	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	dep	_	_
4	,	,	PUNCT	Z	_	3	punct	_	_
5	olid	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	aux	_	_
6	bussiuksed	bussi_uks	NOUN	S	Case=Nom|Number=Plur	7	nsubj	_	_
7	sulgunud	sulguma	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
8	ja	ja	CONJ	J	_	7	cc	_	_
9	ainuke	ainuke	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	7	conj	_	_
10	,	,	PUNCT	Z	_	13	punct	_	_
11	mida	mis	PRON	P	Case=Par|Number=Sing|PronType=Int,Rel	13	dobj	_	_
12	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	_
13	teha	tegema	VERB	V	VerbForm=Inf	9	dep	_	_
14	võis	võima	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	13	aux	_	_
15	,	,	PUNCT	Z	_	7	punct	_	_
16	oli	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	conj	_	_
17	jälgida	jälgima	VERB	V	VerbForm=Inf	16	csubj:cop	_	_
18	tagaaknale	taga_aken	NOUN	S	Case=All|Number=Sing	19	nmod	_	_
19	ilmuvat	ilmuv	ADJ	A	Case=Par|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	21	acl	_	_
20	tuttavat	tuttav	ADJ	A	Case=Par|Degree=Pos|Number=Sing	21	amod	_	_
21	kuju	kuju	NOUN	S	Case=Par|Number=Sing	16	dobj	_	_
22	.	.	PUNCT	Z	_	7	punct	_	_

~~~


