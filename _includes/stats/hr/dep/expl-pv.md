

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is a language-specific subtype of [expl]().

1974 nodes (1%) are attached to their parents as `expl:pv`.

1457 instances of `expl:pv` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.06180344478217.

The following 5 pairs of parts of speech are connected with `expl:pv`: [hr-pos/VERB]()-[hr-pos/PRON]() (1945; 99% instances), [hr-pos/ADV]()-[hr-pos/PRON]() (19; 1% instances), [hr-pos/AUX]()-[hr-pos/PRON]() (5; 0% instances), [hr-pos/NOUN]()-[hr-pos/PRON]() (3; 0% instances), [hr-pos/ADJ]()-[hr-pos/PRON]() (2; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 expl:pv	color:blue
1	Bivši	bivši	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
2	bugarski	bugarski	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
3	ministar	ministar	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
4	unutrašnjih	unutrašnji	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	5	amod	_	_
5	poslova	posao	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	_
6	odriče	odricati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	6	expl:pv	_	_
8	imuniteta	imunitet	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	6	obj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl:pv	color:blue
1	Poslije	poslije	ADP	_	Case=Gen	2	case	_	_
2	0:03	0:03	NUM	_	NumType=Mult	5	nummod	_	_
3	bilo	biti	AUX	_	Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	5	aux	_	_
4	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	5	expl:pv	_	_
5	teško	teško	ADV	_	Degree=Pos	0	root	_	_
6	vraćati	vraćati	VERB	_	VerbForm=Inf	5	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	_
8	a	a	CCONJ	_	_	10	cc	_	_
9	kamoli	kamoliti	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	advmod	_	_
10	pobijediti	pobijediti	VERB	_	VerbForm=Inf	5	conj	_	orig_deprel=nsubj|SpaceAfter=No
11	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 expl:pv	color:blue
1	Istina	istina	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	7	nsubj:pass	_	_
2	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	7	expl:pv	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	izgleda	izgledati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	parataxis	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	nikad	nikad	ADV	_	Degree=Pos	7	advmod	_	_
7	neće	htjeti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	utvrditi	utvrditi	VERB	_	VerbForm=Inf	7	xcomp	_	_
9	jer	jer	SCONJ	_	_	27	mark	_	SpaceAfter=No
10	,	,	PUNCT	_	_	17	punct	_	_
11	osim	osim	SCONJ	_	_	17	mark	_	_
12	što	što	SCONJ	_	_	11	fixed	_	_
13	i	i	PART	_	_	14	discourse	_	_
14	u	u	ADP	_	Case=Loc	16	case	_	_
15	samom	sam	ADJ	_	Case=Loc|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing	16	amod	_	_
16	susjedstvu	susjedstvo	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	17	obl	_	_
17	postoje	postojati	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	27	advcl	_	_
18	oni	oni	PRON	_	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	17	nsubj	_	_
19	"	"	PUNCT	_	_	20	punct	_	SpaceAfter=No
20	za	za	ADP	_	Case=Acc	17	advmod	_	SpaceAfter=No
21	"	"	PUNCT	_	_	24	punct	_	_
22	i	i	CCONJ	_	_	24	cc	_	_
23	"	"	PUNCT	_	_	24	punct	_	SpaceAfter=No
24	protiv	protiv	ADP	_	Case=Gen	20	conj	_	SpaceAfter=No
25	"	"	PUNCT	_	_	24	punct	_	SpaceAfter=No
26	,	,	PUNCT	_	_	17	punct	_	_
27	podijeljena	podijeliti	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing|VerbForm=Part	8	advcl	_	_
28	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	27	cop	_	_
29	i	i	PART	_	_	30	discourse	_	_
30	Istra	Istra	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	27	nsubj	_	SpaceAfter=No
31	.	.	PUNCT	_	_	7	punct	_	_

~~~


