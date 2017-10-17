

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [advmod]().
There are also 7 other language-specific subtypes of `advmod`: [advmod:locy](), [advmod:mode](), [advmod:obl](), [advmod:que](), [advmod:tfrom](), [advmod:tlocy](), [advmod:tto]().

18 nodes (0%) are attached to their parents as `advmod:to`.

11 instances of `advmod:to` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 5 pairs of parts of speech are connected with `advmod:to`: [hu-pos/VERB]()-[hu-pos/ADV]() (12; 67% instances), [hu-pos/VERB]()-[hu-pos/ADP]() (2; 11% instances), [hu-pos/VERB]()-[hu-pos/PRON]() (2; 11% instances), [hu-pos/ADJ]()-[hu-pos/ADV]() (1; 6% instances), [hu-pos/NOUN]()-[hu-pos/ADV]() (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advmod:to	color:blue
1	Tudják	tud	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	sehova	sehova	ADV	_	PronType=Neg	6	advmod:to	_	_
4	nem	nem	ADV	_	PronType=Neg	5	advmod	_	_
5	érdemes	érdemes	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	1	ccomp:obj	_	_
6	elindulni	el+indul	VERB	_	VerbForm=Inf|Voice=Act	5	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 advmod:to	color:blue
1	Más	más	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Ind	2	amod:att	_	_
2	kérdés	kérdés	NOUN	_	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	hogy	hogy	SCONJ	_	_	11	mark	_	_
5	a	a	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	határőrség	határőrség	NOUN	_	Case=Nom|Number=Sing	11	nsubj	_	_
7	egyelőre	egyelőre	ADV	_	_	11	advmod:mode	_	_
8	új	új	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	9	amod:att	_	_
9	státusokat	státus	NOUN	_	Case=Acc|Number=Plur	11	obj	_	_
10	sem	sem	ADV	_	PronType=Neg	11	advmod	_	_
11	kapott	kap	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	csubj	_	_
12	az	az	DET	_	Definite=Def|PronType=Art	14	det	_	_
13	új	új	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	14	amod:att	_	_
14	feladatok	feladat	NOUN	_	Case=Nom|Number=Plur	15	nmod:obl	_	_
15	mellé	mellé	ADP	_	_	11	advmod:to	_	SpaceAfter=No
16	;	;	PUNCT	_	_	29	punct	_	_
17	a	a	DET	_	Definite=Def|PronType=Art	19	det	_	_
18	több	több	NUM	_	Case=Nom|Number=Sing|NumType=Card	19	amod:att	_	_
19	munkát	munka	NOUN	_	Case=Acc|Number=Sing	30	obj	_	_
20	—	—	PUNCT	_	_	24	punct	_	_
21	mint	mint	ADV	_	PronType=Rel	24	advmod:mode	_	_
22	Krisán	Krisán	PROPN	_	Case=Nom|Number=Sing	24	nsubj	_	_
23	Attila	Attila	PROPN	_	Case=Nom|Number=Sing	22	flat:name	_	_
24	mondta	mond	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	29	advcl	_	_
25	—	—	PUNCT	_	_	24	punct	_	_
26	rugalmas	rugalmas	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	28	amod:att	_	_
27	helyi	helyi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	28	amod:att	_	_
28	munkaszervezéssel	munkaszervezés	NOUN	_	Case=Ins|Number=Sing	30	nmod:obl	_	_
29	kívánják	kíván	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	conj	_	_
30	ellátni	ellát	VERB	_	VerbForm=Inf|Voice=Act	29	xcomp	_	SpaceAfter=No
31	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 46	bgColor:blue
# visual-style 46	fgColor:white
# visual-style 47	bgColor:blue
# visual-style 47	fgColor:white
# visual-style 47 46 advmod:to	color:blue
1	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	Nem	nem	ADV	_	PronType=Neg	3	advmod	_	_
3	akarok	akar	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	24	parataxis	_	_
4	elébe	elébe	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Prs	5	advmod:to	_	_
5	menni	megy	VERB	_	VerbForm=Inf|Voice=Act	3	xcomp	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	Fidesz-MPP	Fidesz-MPP	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nmod:att	_	_
8	országos	országos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	amod:mode	_	_
9	választmánya	választmány	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	10	nmod:att	_	_
10	döntésének	döntés	NOUN	_	Case=Dat|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	5	nmod:obl	_	SpaceAfter=No
11	,	,	PUNCT	_	_	15	punct	_	_
12	a	a	DET	_	Definite=Def|PronType=Art	13	det	_	_
13	párt	párt	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	14	nmod:att	_	_
14	tagjaként	tag	NOUN	_	Case=Abs|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	15	nmod:obl	_	_
15	várom	vár	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	SpaceAfter=No
16	,	,	PUNCT	_	_	15	punct	_	_
17	hogy	hogy	SCONJ	_	_	19	mark	_	_
18	ki	ki	ADV	_	Degree=Pos	21	compound:preverb	_	_
19	akarnak	akar	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	15	ccomp:obj	_	_
20	-e	-e	ADV	_	PronType=Int	19	advmod:que	_	_
21	zárni	zár	VERB	_	VerbForm=Inf|Voice=Act	19	xcomp	_	SpaceAfter=No
22	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
23	,	,	PUNCT	_	_	3	punct	_	_
24	mondta	mond	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
25	Helmeczy	Helmeczy	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	29	appos	_	_
26	László	László	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	25	flat:name	_	_
27	fideszes	fideszes	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	29	amod:att	_	_
28	országgyűlési	országgyűlési	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	29	amod:att	_	_
29	képviselő	képviselő	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	24	nsubj	_	SpaceAfter=No
30	,	,	PUNCT	_	_	29	punct	_	_
31	a	a	DET	_	Definite=Def|PronType=Art	34	det	_	_
32	Szabolcs-Szatmár-Bereg	Szabolcs-Szatmár-Bereg	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	34	amod:att	_	_
33	megyei	megyei	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	32	flat:name	_	_
34	közgyűlés	közgyűlés	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	35	nmod:att	_	_
35	elnöke	elnök	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	29	appos	_	_
36	lapunknak	lapu	NOUN	_	Case=Gen|Number=Sing|Number[psed]=None|Number[psor]=Plur|Person[psor]=1	39	nmod:att	_	_
37	arra	az	DET	_	Case=Sub|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	39	det	_	_
38	a	a	DET	_	Definite=Def|PronType=Art	39	det	_	_
39	kérdésére	kérdés	NOUN	_	Case=Sub|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	40	nmod:obl	_	_
40	válaszolva	válaszolva	ADV	_	VerbForm=Conv	24	advmod:mode	_	SpaceAfter=No
41	,	,	PUNCT	_	_	24	punct	_	_
42	hogy	hogy	SCONJ	_	_	44	mark	_	_
43	nem	nem	ADV	_	PronType=Neg	44	advmod	_	_
44	kíván	kíván	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	39	acl	_	_
45	-e	-e	ADV	_	PronType=Int	44	advmod:que	_	_
46	elébe	elébe	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Prs	47	advmod:to	_	_
47	menni	megy	VERB	_	VerbForm=Inf|Voice=Act	44	xcomp	_	_
48	a	a	DET	_	Definite=Def|PronType=Art	50	det	_	_
49	várható	várható	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None|VerbForm=PartPres	50	amod:att	_	_
50	kizárásának	kizárás	NOUN	_	Case=Dat|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	47	nmod:obl	_	SpaceAfter=No
51	,	,	PUNCT	_	_	53	punct	_	_
52	nem	nem	ADV	_	PronType=Neg	53	advmod	_	_
53	lép	lép	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	44	conj	_	_
54	-e	-e	ADV	_	PronType=Int	53	advmod:que	_	_
55	ki	ki	ADV	_	Degree=Pos	53	compound:preverb	_	_
56	önként	önként	ADV	_	_	53	advmod:obl	_	SpaceAfter=No
57	.	.	PUNCT	_	_	24	punct	_	_

~~~


