

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [ccomp]().
There are also 2 other language-specific subtypes of `ccomp`: [ccomp:obj](), [ccomp:obl]().

8 nodes (0%) are attached to their parents as `ccomp:pred`.

8 instances of `ccomp:pred` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.25.

The following 5 pairs of parts of speech are connected with `ccomp:pred`: [hu-pos/PRON]()-[hu-pos/VERB]() (4; 50% instances), [hu-pos/NOUN]()-[hu-pos/VERB]() (1; 13% instances), [hu-pos/PRON]()-[hu-pos/ADJ]() (1; 13% instances), [hu-pos/PRON]()-[hu-pos/PRON]() (1; 13% instances), [hu-pos/VERB]()-[hu-pos/VERB]() (1; 13% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 14 ccomp:pred	color:blue
1	De	de	CONJ	_	_	6	cc	_	_
2	talán	talán	ADV	_	_	6	advmod:mode	_	_
3	a	a	DET	_	Definite=Def|PronType=Art	5	det	_	_
4	legnagyobb	nagy	ADJ	_	Case=Nom|Degree=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:att	_	_
5	bók	bók	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nsubj	_	_
6	az	az	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	0	root	_	_
7	volt	van	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
8	az	az	DET	_	Definite=Def|PronType=Art	9	det	_	_
9	életemben	élet	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=1	6	nmod:obl	_	_
10	,	,	PUNCT	_	_	6	punct	_	_
11	amit	ami	PRON	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Rel	14	dobj	_	_
12	Gábor	Gábor	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	13	name	_	_
13	Miklós	Miklós	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	14	nsubj	_	_
14	mondott	mond	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	ccomp:pred	_	_
15	nekem	én	PRON	_	Case=Dat|Number=Sing|Number[psed]=None|Number[psor]=None|Person=1|Person[psor]=None|PronType=Prs	14	iobj	_	_
16	:	:	PUNCT	_	_	14	punct	_	_
17	"	"	PUNCT	_	_	25	punct	_	_
18	Ha	ha	SCONJ	_	_	20	mark	_	_
19	téged	te	PRON	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person=2|Person[psor]=None|PronType=Prs	20	dobj	_	_
20	nézlek	néz	VERB	_	Definite=2|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	25	advcl	_	_
21	a	a	DET	_	Definite=Def|PronType=Art	22	det	_	_
22	színpadon	színpad	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	20	nmod:obl	_	_
23	,	,	PUNCT	_	_	20	punct	_	_
24	nem	nem	ADV	_	PronType=Neg	25	neg	_	_
25	veszem	vesz	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	14	parataxis	_	_
26	észre	ész	NOUN	_	Case=Sub|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	25	compound:preverb	_	_
27	,	,	PUNCT	_	_	25	punct	_	_
28	hogy	hogy	SCONJ	_	_	29	mark	_	_
29	énekelsz	énekel	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	25	ccomp:obj	_	_
30	.	.	PUNCT	_	_	25	punct	_	_
31	"	"	PUNCT	_	_	25	punct	_	_

~~~


~~~ conllu
# visual-style 51	bgColor:blue
# visual-style 51	fgColor:white
# visual-style 48	bgColor:blue
# visual-style 48	fgColor:white
# visual-style 48 51 ccomp:pred	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	007-esből	007-es	PROPN	_	Case=Ela|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nmod:obl	_	_
3	szám	szám	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nmod	_	_
4	szerint	szerint	ADP	_	_	3	case	_	_
5	ezúttal	ezúttal	ADV	_	PronType=Dem	9	advmod:tlocy	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
7	19.	19.	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Ord|Person[psor]=None	8	amod:att	_	_
8	filmadagot	filmadag	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	dobj	_	_
9	fogyaszthatja	fogyaszt	VERB	_	Definite=Def|Mood=Pot|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	a	a	DET	_	Definite=Def|PronType=Art	11	det	_	_
11	nagyérdemű	nagyérdemű	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nsubj	_	_
12	,	,	PUNCT	_	_	9	punct	_	_
13	de	de	CONJ	_	_	9	cc	_	_
14	ennél	ez	PRON	_	Case=Ade|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	16	nmod:obl	_	_
15	is	is	CONJ	_	_	14	cc	_	_
16	lényegesebb	lényeges	ADJ	_	Case=Nom|Degree=Cmp|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	conj	_	_
17	,	,	PUNCT	_	_	9	punct	_	_
18	hogy	hogy	SCONJ	_	_	35	mark	_	_
19	A	A	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	20	name	_	_
20	világ	világ	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	21	name	_	_
21	nem	nem	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	22	name	_	_
22	elég	elég	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	23	nmod:att	_	_
23	című	című	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	25	amod:att	_	_
24	új	új	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	25	amod:att	_	_
25	opusz	opus	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	26	nmod:att	_	_
26	tanúsága	tanúság	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	35	nmod	_	_
27	szerint	szerint	ADP	_	_	26	case	_	_
28	James	James	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	29	name	_	_
29	Bond	Bond	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	35	nsubj	_	_
30	láthatóan	látható	ADJ	_	Case=Ess|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	35	amod:mode	_	_
31	egy	egy	DET	_	Definite=Ind|PronType=Art	32	det	_	_
32	időre	idő	NOUN	_	Case=Sub|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	35	nmod:obl	_	_
33	megint	megint	ADV	_	_	35	advmod:mode	_	_
34	emberére	ember	NOUN	_	Case=Sub|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	35	nmod:obl	_	_
35	talált	talál	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	16	csubj	_	_
36	:	:	PUNCT	_	_	35	punct	_	_
37	Pierce	Pierce	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	38	name	_	_
38	Brosnan	Brosnan	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	40	nmod:att	_	_
39	angolos	angolos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	40	amod:att	_	_
40	eleganciája	elegancia	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	55	nsubj	_	_
41	,	,	PUNCT	_	_	40	punct	_	_
42	kíméletlen	kíméletlen	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	43	amod:att	_	_
43	hidegvére	hidegvér	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	40	conj	_	_
44	,	,	PUNCT	_	_	40	punct	_	_
45	na	na	INTJ	_	_	40	advmod:mode	_	_
46	és	és	CONJ	_	_	40	cc	_	_
47	persze	persze	INTJ	_	_	40	advmod:mode	_	_
48	az	az	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	40	conj	_	_
49	,	,	PUNCT	_	_	40	punct	_	_
50	hogy	hogy	SCONJ	_	_	51	mark	_	_
51	férfias	férfias	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	48	ccomp:pred	_	_
52	és	és	CONJ	_	_	51	cc	_	_
53	szívtipró	szívtipró	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	51	conj	_	_
54	,	,	PUNCT	_	_	51	punct	_	_
55	megfelel	meg+felel	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	35	parataxis	_	_
56	a	a	DET	_	Definite=Def|PronType=Art	59	det	_	_
57	hírhedten	hírhedt	ADJ	_	Case=Ess|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	58	amod:mode	_	_
58	legyőzhetetlen	legyőzhetetlen	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	59	amod:att	_	_
59	szuperkém	szuperkém	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	60	nmod:att	_	_
60	iránti	iránti	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	61	amod:att	_	_
61	elvárásoknak	elvárás	NOUN	_	Case=Dat|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	55	nmod:obl	_	_
62	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp:pred	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	bonyolult	bonyolult	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	amod:att	_	_
3	válasz	válasz	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
4	:	:	PUNCT	_	_	3	punct	_	_
5	az	az	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	emberiség	emberiség	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	nmod:att	_	_
7	történetén	történet	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	8	nmod:obl	_	_
8	végighúzódik	végig+húzódik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp:pred	_	_
9	egy	egy	DET	_	Definite=Ind|PronType=Art	11	det	_	_
10	spirituális	spirituális	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	11	amod:att	_	_
11	mítoszrendszer	mítoszrendszer	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	nsubj	_	_
12	,	,	PUNCT	_	_	8	punct	_	_
13	ami	ami	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Rel	18	nsubj	_	_
14	viszonyítási	viszonyítási	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	15	amod:att	_	_
15	pontként	pont	NOUN	_	Case=Abs|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	18	nmod:obl	_	_
16	,	,	PUNCT	_	_	15	punct	_	_
17	világmagyarázatként	világmagyarázat	NOUN	_	Case=Abs|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	15	conj	_	_
18	szolgált	szolgál	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	11	acl	_	_
19	az	az	DET	_	Definite=Def|PronType=Art	21	det	_	_
20	archaikus	archaikus	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	21	amod:att	_	_
21	kor	kor	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	22	nmod:att	_	_
22	népei	nép	NOUN	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	18	nmod	_	_
23	számára	számára	ADP	_	_	22	case	_	_
24	.	.	PUNCT	_	_	3	punct	_	_

~~~


