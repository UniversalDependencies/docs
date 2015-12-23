

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [advmod]().
There are also 7 other language-specific subtypes of `advmod`: [advmod:locy](), [advmod:mode](), [advmod:obl](), [advmod:que](), [advmod:tfrom](), [advmod:tlocy](), [advmod:tto]().

18 nodes (0%) are attached to their parents as `advmod:to`.

13 instances of `advmod:to` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.94444444444444.

The following 4 pairs of parts of speech are connected with `advmod:to`: [hu-pos/VERB]()-[hu-pos/ADV]() (13; 72% instances), [hu-pos/NOUN]()-[hu-pos/ADV]() (2; 11% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (2; 11% instances), [hu-pos/ADJ]()-[hu-pos/ADV]() (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advmod:to	color:blue
1	Tudják	tud	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	sehova	sehova	ADV	_	PronType=Neg	6	advmod:to	_	_
4	nem	nem	ADV	_	PronType=Neg	5	neg	_	_
5	érdemes	érdemes	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	1	ccomp:obj	_	_
6	elindulni	el+indul	VERB	_	VerbForm=Inf|Voice=Act	5	xcomp	_	_
7	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 advmod:to	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	magyar	magyar	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	amod:att	_	_
3	együttes	együttes	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	nsubj	_	_
4	12-3-as	12-3-as	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	amod:att	_	_
5	,	,	PUNCT	_	_	4	punct	_	_
6	19-7-es	19-7-es	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	conj	_	_
7	szériával	széria	NOUN	_	Case=Ins|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	nmod:obl	_	_
8	kezdett	kezd	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
9	,	,	PUNCT	_	_	8	punct	_	_
10	a	a	DET	_	Definite=Def|PronType=Art	11	det	_	_
11	félidőben	félidő	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	nmod:obl	_	_
12	38-23	38-23	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	conj	_	_
13	volt	van	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	cop	_	_
14	—	—	PUNCT	_	_	12	punct	_	_
15	ide	ide	ADV	_	Degree=Pos|PronType=Dem	12	advmod:to	_	_
16	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 46	bgColor:blue
# visual-style 46	fgColor:white
# visual-style 47	bgColor:blue
# visual-style 47	fgColor:white
# visual-style 47 46 advmod:to	color:blue
1	"	"	PUNCT	_	_	3	punct	_	_
2	Nem	nem	ADV	_	PronType=Neg	3	neg	_	_
3	akarok	akar	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	24	parataxis	_	_
4	elébe	elébe	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Prs	5	advmod:to	_	_
5	menni	megy	VERB	_	VerbForm=Inf|Voice=Act	3	xcomp	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	Fidesz-MPP	Fidesz-MPP	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nmod:att	_	_
8	országos	országos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	amod:mode	_	_
9	választmánya	választmány	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	10	nmod:att	_	_
10	döntésének	döntés	NOUN	_	Case=Dat|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	5	nmod:obl	_	_
11	,	,	PUNCT	_	_	3	punct	_	_
12	a	a	DET	_	Definite=Def|PronType=Art	13	det	_	_
13	párt	párt	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	14	nmod:att	_	_
14	tagjaként	tag	NOUN	_	Case=Abs|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	15	nmod:obl	_	_
15	várom	vár	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
16	,	,	PUNCT	_	_	15	punct	_	_
17	hogy	hogy	SCONJ	_	_	19	mark	_	_
18	ki	ki	ADV	_	Degree=Pos	21	compound:preverb	_	_
19	akarnak	akar	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	15	ccomp:obj	_	_
20	-e	-e	ADV	_	PronType=Int	19	advmod:que	_	_
21	zárni	zár	VERB	_	VerbForm=Inf|Voice=Act	19	xcomp	_	_
22	"	"	PUNCT	_	_	3	punct	_	_
23	,	,	PUNCT	_	_	3	punct	_	_
24	mondta	mond	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
25	Helmeczy	Helmeczy	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	26	name	_	_
26	László	László	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	29	appos	_	_
27	fideszes	fideszes	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	29	amod:att	_	_
28	országgyűlési	országgyűlési	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	29	amod:att	_	_
29	képviselő	képviselő	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	24	nsubj	_	_
30	,	,	PUNCT	_	_	29	punct	_	_
31	a	a	DET	_	Definite=Def|PronType=Art	34	det	_	_
32	Szabolcs-Szatmár-Bereg	Szabolcs-Szatmár-Bereg	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	33	name	_	_
33	megyei	megyei	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	34	amod:att	_	_
34	közgyűlés	közgyűlés	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	35	nmod:att	_	_
35	elnöke	elnök	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	29	appos	_	_
36	lapunknak	lapu	NOUN	_	Case=Gen|Number=Sing|Number[psed]=None|Number[psor]=Plur|Person[psor]=1	39	nmod:att	_	_
37	arra	az	DET	_	Case=Sub|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	39	det	_	_
38	a	a	DET	_	Definite=Def|PronType=Art	39	det	_	_
39	kérdésére	kérdés	NOUN	_	Case=Sub|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	40	nmod:obl	_	_
40	válaszolva	válaszolva	ADV	_	VerbForm=Trans	24	advmod:mode	_	_
41	,	,	PUNCT	_	_	24	punct	_	_
42	hogy	hogy	SCONJ	_	_	44	mark	_	_
43	nem	nem	ADV	_	PronType=Neg	44	neg	_	_
44	kíván	kíván	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	39	acl	_	_
45	-e	-e	ADV	_	PronType=Int	44	advmod:que	_	_
46	elébe	elébe	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Prs	47	advmod:to	_	_
47	menni	megy	VERB	_	VerbForm=Inf|Voice=Act	44	xcomp	_	_
48	a	a	DET	_	Definite=Def|PronType=Art	50	det	_	_
49	várható	várható	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	50	amod:att	_	_
50	kizárásának	kizárás	NOUN	_	Case=Dat|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	47	nmod:obl	_	_
51	,	,	PUNCT	_	_	44	punct	_	_
52	nem	nem	ADV	_	PronType=Neg	53	neg	_	_
53	lép	lép	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	44	conj	_	_
54	-e	-e	ADV	_	PronType=Int	53	advmod:que	_	_
55	ki	ki	ADV	_	Degree=Pos	53	compound:preverb	_	_
56	önként	önként	ADV	_	_	53	advmod:obl	_	_
57	.	.	PUNCT	_	_	24	punct	_	_

~~~


