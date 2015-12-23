

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

69 nodes (0%) are attached to their parents as `goeswith`.

52 instances of `goeswith` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07246376811594.

The following 10 pairs of parts of speech are connected with `goeswith`: [hr-pos/PUNCT]()-[hr-pos/PUNCT]() (45; 65% instances), [hr-pos/ADV]()-[hr-pos/ADP]() (13; 19% instances), [hr-pos/NUM]()-[hr-pos/NUM]() (2; 3% instances), [hr-pos/NUM]()-[hr-pos/PUNCT]() (2; 3% instances), [hr-pos/PROPN]()-[hr-pos/PUNCT]() (2; 3% instances), [hr-pos/ADJ]()-[hr-pos/ADV]() (1; 1% instances), [hr-pos/ADP]()-[hr-pos/NOUN]() (1; 1% instances), [hr-pos/NOUN]()-[hr-pos/ADP]() (1; 1% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (1; 1% instances), [hr-pos/PROPN]()-[hr-pos/PRON]() (1; 1% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 goeswith	color:blue
1	"	"	PUNCT	_	_	2	punct	_	_
2	Možete	moći	VERB	_	Number=Plur|Person=2|Tense=Pres	0	root	_	_
3	pratiti	pratiti	VERB	_	VerbForm=Inf	2	xcomp	_	_
4	ovaj	ovaj	PRON	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	put	put	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	dobj	_	_
6	ka	k	ADP	_	Case=Dat	7	case	_	_
7	Europi	Europa	PROPN	_	Case=Dat|Gender=Fem|Number=Sing	5	nmod	_	_
8	ili	ili	CONJ	_	_	3	cc	_	_
9	krenuti	krenuti	VERB	_	VerbForm=Inf	3	conj	_	_
10	alternativnim	alternativan	ADJ	_	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	_
11	putem	put	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	9	nmod	_	_
12	.	.	PUNCT	_	_	3	punct	_	_
13	.	.	PUNCT	_	_	12	goeswith	_	_
14	.	.	PUNCT	_	_	13	goeswith	_	_
15	.	.	PUNCT	_	_	14	goeswith	_	_

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
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 27 goeswith	color:blue
1	Nedavna	nedavan	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	2	amod	_	_
2	ispitivanja	ispitivanje	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	12	nsubj	_	_
3	javnosti	javnost	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
4	,	,	PUNCT	_	_	7	punct	_	_
5	koja	koji	PRON	_	Case=Acc|Gender=Neut|Number=Plur|PronType=Ind	7	mark	_	_
6	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	7	aux	_	_
7	proveo	provesti	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	2	acl	_	_
8	Zavod	zavod	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
9	Gani	Gani	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	8	compound	_	_
10	Bobi	Bobi	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	8	compound	_	_
11	,	,	PUNCT	_	_	7	punct	_	_
12	pokazuju	pokazivati	VERB	_	Number=Plur|Person=3|Tense=Pres	0	root	_	_
13	kako	kako	SCONJ	_	_	15	mark	_	_
14	Vetvendosje	Vetvendosje	PROPN	_	Case=Nom|Gender=Neut|Number=Sing	15	nsubj	_	_
15	ima	imati	VERB	_	Number=Sing|Person=3|Tense=Pres	12	ccomp	_	_
16	podršku	podrška	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	15	dobj	_	_
17	11	11	NUM	_	NumType=Card	19	goeswith	_	_
18	,	,	PUNCT	_	_	17	goeswith	_	_
19	9%	9%	NUM	_	NumType=Gen	20	nummod	_	_
20	glasača	glasač	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	16	nmod	_	_
21	,	,	PUNCT	_	_	15	punct	_	_
22	dok	dok	SCONJ	_	_	15	cc	_	_
23	FER	FER	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	24	dobj	_	_
24	podržava	podržavati	VERB	_	Number=Sing|Person=3|Tense=Pres	15	conj	_	_
25	njih	oni	PRON	_	Case=Acc|Number=Plur|Person=3|PronType=Prs	24	nsubj	_	_
26	4	4	NUM	_	NumType=Card	28	goeswith	_	_
27	,	,	PUNCT	_	_	26	goeswith	_	_
28	9%	9%	NUM	_	NumType=Gen	25	nummod	_	_
29	.	.	PUNCT	_	_	12	punct	_	_

~~~


