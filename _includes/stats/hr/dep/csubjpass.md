

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

43 nodes (0%) are attached to their parents as `csubjpass`.

43 instances of `csubjpass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.97674418604651.

The following 6 pairs of parts of speech are connected with `csubjpass`: [hr-pos/ADJ]()-[hr-pos/VERB]() (18; 42% instances), [hr-pos/VERB]()-[hr-pos/VERB]() (13; 30% instances), [hr-pos/VERB]()-[hr-pos/ADJ]() (5; 12% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (4; 9% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (2; 5% instances), [hr-pos/VERB]()-[hr-pos/NOUN]() (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 csubjpass	color:blue
1	U	u	ADP	_	Case=Loc	2	case	_	_
2	Studiju	studio	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	4	nmod	_	_
3	nije	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	4	neg	_	_
4	objašnjeno	objasniti	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	_
5	zašto	zašto	ADV	_	Degree=Pos	9	mark	_	_
6	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	9	aux	_	_
7	Mateo	Mateo	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
8	ne	ne	PART	_	Negative=Neg	9	neg	_	_
9	preziva	prezivati	VERB	_	Number=Sing|Person=3|Tense=Pres	4	csubjpass	_	_
10	kao	kao	SCONJ	_	_	11	case	_	_
11	otac	otac	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	9	nmod	_	_
12	,	,	PUNCT	_	_	11	punct	_	_
13	nego	nego	CONJ	_	_	11	cc	_	_
14	Kariolić	Kariolić	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	11	conj	_	_
15	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubjpass	color:blue
1	Očekuje	očekivati	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
2	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	1	compound	_	_
3	kako	kako	SCONJ	_	_	7	mark	_	_
4	će	htjeti	AUX	_	Number=Plur|Person=3|Tense=Pres	7	aux	_	_
5	troškovi	trošak	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	_
6	obnove	obnova	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	_
7	iznositi	iznositi	VERB	_	VerbForm=Inf	1	csubjpass	_	_
8	više	mnogo	ADV	_	Degree=Cmp	11	det	_	_
9	od	od	ADP	_	Case=Gen	11	case	_	_
10	7	7	NUM	_	NumType=Card	11	nummod	_	_
11	milijuna	milijun	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	7	nmod	_	_
12	eura	euro	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	11	nmod	_	_
13	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 csubjpass	color:blue
1	Vjeruje	vjerovati	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
2	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	1	compound	_	_
3	kako	kako	SCONJ	_	_	10	mark	_	_
4	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	10	cop	_	_
5	Lukić	Lukić	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	_
6	,	,	PUNCT	_	_	5	punct	_	_
7	Pavković	Pavković	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	5	conj	_	_
8	i	i	CONJ	_	_	5	cc	_	_
9	Lazarević	Lazarević	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	5	conj	_	_
10	dostupni	dostupan	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	1	csubjpass	_	_
11	srbijanskim	srbijanski	ADJ	_	Case=Dat|Degree=Pos|Gender=Fem|Number=Plur	12	amod	_	_
12	vlastima	vlast	NOUN	_	Case=Dat|Gender=Fem|Number=Plur	10	dobj	_	_
13	.	.	PUNCT	_	_	1	punct	_	_

~~~


