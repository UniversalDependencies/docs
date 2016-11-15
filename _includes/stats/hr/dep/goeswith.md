

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

85 nodes (0%) are attached to their parents as `goeswith`.

65 instances of `goeswith` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.12941176470588.

The following 19 pairs of parts of speech are connected with `goeswith`: [hr-pos/PUNCT]()-[hr-pos/PUNCT]() (46; 54% instances), [hr-pos/ADV]()-[hr-pos/ADP]() (13; 15% instances), [hr-pos/NUM]()-[hr-pos/PUNCT]() (5; 6% instances), [hr-pos/NUM]()-[hr-pos/NUM]() (4; 5% instances), [hr-pos/PROPN]()-[hr-pos/PUNCT]() (3; 4% instances), [hr-pos/ADJ]()-[hr-pos/ADV]() (1; 1% instances), [hr-pos/ADJ]()-[hr-pos/NUM]() (1; 1% instances), [hr-pos/ADJ]()-[hr-pos/PUNCT]() (1; 1% instances), [hr-pos/ADP]()-[hr-pos/NOUN]() (1; 1% instances), [hr-pos/ADP]()-[hr-pos/PUNCT]() (1; 1% instances), [hr-pos/NOUN]()-[hr-pos/ADJ]() (1; 1% instances), [hr-pos/NOUN]()-[hr-pos/ADP]() (1; 1% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (1; 1% instances), [hr-pos/NOUN]()-[hr-pos/NUM]() (1; 1% instances), [hr-pos/NUM]()-[hr-pos/ADJ]() (1; 1% instances), [hr-pos/NUM]()-[hr-pos/NOUN]() (1; 1% instances), [hr-pos/NUM]()-[hr-pos/PRON]() (1; 1% instances), [hr-pos/PROPN]()-[hr-pos/CONJ]() (1; 1% instances), [hr-pos/PROPN]()-[hr-pos/PRON]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	'	'	PUNCT	_	_	5	punct	_	_
2	'	'	PUNCT	_	_	1	goeswith	_	_
3	Ja	ja	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
4	sam	biti	AUX	_	Number=Sing|Person=1|Tense=Pres	5	cop	_	_
5	onaj	onaj	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	0	root	_	_
6	prvi	prvi	NUM	_	Case=Nom|Gender=Masc|Number=Sing|NumType=Ord	5	nummod	_	_
7	koji	koji	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	8	mark	_	_
8	ide	ići	VERB	_	Number=Sing|Person=3|Tense=Pres	5	acl	_	_
9	kao	kao	SCONJ	_	_	10	case	_	_
10	vođa	vođa	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	8	nmod	_	_
11	,	,	PUNCT	_	_	5	punct	_	_
12	a	a	CONJ	_	_	5	cc	_	_
13	vi	vi	PRON	_	Case=Nom|Number=Plur|Person=2|PronType=Prs	14	nsubj	_	_
14	ste	biti	AUX	_	Number=Plur|Person=2|Tense=Pres	5	conj	_	_
15	svi	sav	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	13	det	_	_
16	ostali	ostali	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	13	det	_	_
17	iza	iza	ADP	_	Case=Gen	18	case	_	_
18	mene	ja	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	14	nmod	_	_
19	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 goeswith	color:blue
1	Obje	oba	NUM	_	Case=Nom|Gender=Fem|Number=Plur|NumType=Gen	2	nummod	_	_
2	stranke	stranka	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	3	nsubj	_	_
3	odbacile	odbaciti	VERB	_	Gender=Fem|Number=Plur|VerbForm=Part	0	root	_	_
4	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	3	aux	_	_
5	ideju	ideja	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	3	dobj	_	_
6	,	,	PUNCT	_	_	3	punct	_	_
7	a	a	SCONJ	_	_	3	cc	_	_
8	kampanja	kampanja	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	13	nsubj	_	_
9	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	13	aux	_	_
10	do	do	ADP	_	Case=Gen	11	goeswith	_	_
11	sada	sada	ADV	_	Degree=Pos	13	advmod	_	_
12	bila	biti	AUX	_	Gender=Fem|Number=Sing|VerbForm=Part	13	cop	_	_
13	oštra	oštar	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	conj	_	_
14	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 goeswith	color:blue
1	Oxford	Oxforf	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
2	Street	street	ADP	_	_	1	compound	_	_
3	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	9	compound	_	_
4	još	još	ADV	_	Degree=Pos	5	advmod	_	_
5	60	60	NUM	_	NumType=Card	8	nmod	_	_
6	-	-	PUNCT	_	_	5	goeswith	_	_
7	ih	oni	PRON	_	Case=Acc|Number=Plur|Person=3|PronType=Prs	5	goeswith	_	_
8	počela	početi	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	_
9	razvijati	razvijati	VERB	_	VerbForm=Inf	8	xcomp	_	_
10	kao	kao	SCONJ	_	_	12	case	_	_
11	queer	queer	ADP	_	_	12	amod	_	_
12	četvrt	četvrt	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	9	nmod	_	_
13	,	,	PUNCT	_	_	8	punct	_	_
14	a	a	CONJ	_	_	8	cc	_	_
15	danas	danas	ADV	_	Degree=Pos	19	advmod	_	_
16	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	19	cop	_	_
17	najvidljivije	vidljiv	ADJ	_	Case=Nom|Definite=Def|Degree=Sup|Gender=Neut|Number=Sing	19	amod	_	_
18	gay	gay	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing	19	amod	_	_
19	naselje	naselje	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	8	conj	_	_
20	u	u	ADP	_	Case=Loc	21	case	_	_
21	gradu	grad	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	19	nmod	_	_
22	.	.	PUNCT	_	_	8	punct	_	_

~~~


