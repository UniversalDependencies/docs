

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is a language-specific subtype of [flat]().

100 nodes (0%) are attached to their parents as `flat:foreign`.

55 instances of `flat:foreign` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.83.

The following 9 pairs of parts of speech are connected with `flat:foreign`: [hr-pos/ADP]()-[hr-pos/ADP]() (77; 77% instances), [hr-pos/NOUN]()-[hr-pos/ADP]() (7; 7% instances), [hr-pos/PROPN]()-[hr-pos/PROPN]() (5; 5% instances), [hr-pos/X]()-[hr-pos/X]() (4; 4% instances), [hr-pos/PROPN]()-[hr-pos/ADP]() (3; 3% instances), [hr-pos/ADP]()-[hr-pos/PROPN]() (1; 1% instances), [hr-pos/ADP]()-[hr-pos/VERB]() (1; 1% instances), [hr-pos/NOUN]()-[hr-pos/X]() (1; 1% instances), [hr-pos/VERB]()-[hr-pos/X]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 flat:foreign	color:blue
1	Ili	ili	CCONJ	_	_	5	cc	_	_
2	da	da	SCONJ	_	_	5	mark	_	_
3	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	Worf	Worf	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
5	provalio	provaliti	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
6	:	:	PUNCT	_	_	8	punct	_	_
7	I	i	ADP	_	_	8	flat:foreign	_	_
8	told	told	ADP	_	_	5	parataxis	_	_
9	you	you	ADP	_	_	8	flat:foreign	_	_
10	so	sti	ADP	_	_	8	flat:foreign	_	SpaceAfter=No
11	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 flat:foreign	color:blue
1	Vremena	vrijeme	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	3	nsubj	_	_
2	su	biti	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	teška	težak	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Plur	0	root	_	_
4	ali	ali	CCONJ	_	_	16	cc	_	_
5	naši	naš	DET	_	Case=Nom|Gender=Masc|Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	6	det	_	_
6	prijatelji	prijatelj	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	16	nsubj	_	_
7	iz	iz	ADP	_	Case=Gen	8	case	_	_
8	Hoću	htjeti	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	nmod	_	_
9	to	taj	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	8	compound	_	_
10	-	-	PUNCT	_	_	13	punct	_	_
11	the	the	ADP	_	_	12	flat:foreign	_	_
12	stuff	stuff	ADP	_	_	13	flat:foreign	_	_
13	websitea	website	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	9	appos	_	_
14	su	biti	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	16	aux	_	_
15	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	16	expl:pv	_	_
16	pobrinuli	pobrinuti	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	3	conj	_	_
17	da	da	SCONJ	_	_	19	mark	_	_
18	lakše	lako	ADV	_	Degree=Cmp	19	advmod	_	_
19	prebrodite	prebroditi	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	16	ccomp	_	_
20	blagdansku	blagdanski	ADJ	_	Case=Acc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	22	amod	_	_
21	potrošačku	potrošački	ADJ	_	Case=Acc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	22	amod	_	_
22	groznicu	groznica	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	19	obj	_	SpaceAfter=No
23	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 flat:foreign	color:blue
1	U	u	ADP	_	Case=Loc	3	case	_	_
2	američkom	američki	ADJ	_	Case=Loc|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
3	Graphis	Graphis	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	4	obl	_	_
4	objavljen	objaviti	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
5	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
6	tekst	tekst	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
7	"	"	PUNCT	_	_	8	punct	_	SpaceAfter=No
8	Cavarpayer	Cavarpayer	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	6	appos	_	_
9	-	-	PUNCT	_	_	8	punct	_	_
10	Cooking	cooking	ADP	_	_	8	flat:foreign	_	_
11	from	fra	ADP	_	_	8	flat:foreign	_	_
12	Croatia	Croatia	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	8	flat:foreign	_	SpaceAfter=No
13	"	"	PUNCT	_	_	8	punct	_	SpaceAfter=No
14	,	,	PUNCT	_	_	18	punct	_	_
15	a	a	CCONJ	_	_	18	cc	_	_
16	priloge	prilog	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	18	obj	_	_
17	su	biti	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	18	aux	_	_
18	imali	imati	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	4	conj	_	_
19	još	još	ADV	_	Degree=Pos	22	discourse	_	_
20	i	i	PART	_	_	22	discourse	_	_
21	kineski	kineski	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	22	amod	_	_
22	Package	Package	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	18	nsubj	_	_
23	&	&	PUNCT	_	_	22	punct	_	_
24	Design	Design	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	22	flat	_	_
25	i	i	CCONJ	_	_	27	cc	_	_
26	britanski	britanski	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	27	amod	_	_
27	Creative	Creative	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	22	conj	_	_
28	Review	Review	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	27	flat	_	SpaceAfter=No
29	.	.	PUNCT	_	_	4	punct	_	_

~~~


