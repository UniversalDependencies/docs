

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

263 nodes (1%) are attached to their parents as `nummod`.

262 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25095057034221.

The following 4 pairs of parts of speech are connected with `nummod`: [hu-pos/NOUN]()-[hu-pos/NUM]() (232; 88% instances), [hu-pos/ADJ]()-[hu-pos/NUM]() (28; 11% instances), [hu-pos/NUM]()-[hu-pos/NUM]() (2; 1% instances), [hu-pos/VERB]()-[hu-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	LRI	LRI	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nsubj	_	_
3	szerdán	szerda	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:obl	_	_
4	két	két	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	5	nummod	_	_
5	közleményt	közlemény	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	obj	_	_
6	juttatott	jut	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Cau	0	root	_	_
7	el	el	ADV	_	_	6	compound:preverb	_	_
8	szerkesztőségünkhöz	szerkesztőség	NOUN	_	Case=All|Number=Sing|Number[psed]=None|Number[psor]=Plur|Person[psor]=1	6	nmod:obl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	5	det	_	_
2	utolsó	utolsó	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:att	_	_
3	hat	hat	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	4	nummod	_	_
4	hónapos	hónapos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	amod:att	_	_
5	időszak	időszak	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	nsubj	_	_
6	azonban	azonban	CCONJ	_	_	10	cc	_	_
7	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
8	hét	hét	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	nmod:att	_	_
9	elején	eleje	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	10	nmod:obl	_	_
10	lejárt	le+jár	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nummod	color:blue
1	Itt	itt	ADV	_	PronType=Dem	3	advmod:locy	_	_
2	minden	minden	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Tot	3	nsubj	_	_
3	megtörténhet	meg+történik	VERB	_	Definite=Ind|Mood=Pot|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	egy	egy	NUM	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	6	nummod	_	_
5	az	az	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	egyben	egy	NUM	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	3	nmod:obl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	3	punct	_	ToDo=punct-in-coord
8	még	még	ADV	_	_	3	advmod:mode	_	_
9	az	az	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	3	conj	_	orig_deprel=nsubj
10	is	is	CCONJ	_	_	3	cc	_	SpaceAfter=No|ToDo=cc-after-conj
11	,	,	PUNCT	_	_	3	punct	_	_
12	hogy	hogy	SCONJ	_	_	14	mark	_	_
13	Tarzan	Tarzan	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	14	nsubj	_	_
14	beszélget	beszélget	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	csubj	_	_
15	az	az	DET	_	Definite=Def|PronType=Art	16	det	_	_
16	állatokkal	állat	NOUN	_	Case=Ins|Number=Plur|Number[psed]=None|Number[psor]=None|Person[psor]=None	14	nmod:obl	_	SpaceAfter=No
17	,	,	PUNCT	_	_	20	punct	_	_
18	hogy	hogy	SCONJ	_	_	20	mark	_	_
19	úgy	úgy	ADV	_	PronType=Dem	20	advmod:mode	_	_
20	mozog	mozog	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	conj	_	SpaceAfter=No
21	,	,	PUNCT	_	_	20	punct	_	_
22	mint	mint	SCONJ	_	_	23	mark	_	_
23	ők	ők	PRON	_	Case=Nom|Number=Plur|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Prs	19	advcl	_	SpaceAfter=No
24	,	,	PUNCT	_	_	20	punct	_	_
25	akiktől	aki	PRON	_	Case=Abl|Number=Plur|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Rel	32	nmod:obl	_	_
26	a	a	DET	_	Definite=Def|PronType=Art	27	det	_	_
27	dzsungelélet	dzsungelélet	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	29	nmod:att	_	_
28	minden	minden	DET	_	Definite=Ind|PronType=Tot	29	det	_	_
29	fortélyát	fortély	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	32	obj	_	_
30	el	el	ADV	_	_	32	compound:preverb	_	_
31	kellett	kell	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	23	acl	_	_
32	tanulnia	tanul	VERB	_	Number=Sing|Person=3|VerbForm=Inf|Voice=Act	31	xcomp	_	_
33	az	az	DET	_	Definite=Def|PronType=Art	35	det	_	_
34	életben	élet	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	35	nmod:obl	_	_
35	maradáshoz	maradás	NOUN	_	Case=All|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	32	nmod:obl	_	SpaceAfter=No
36	.	.	PUNCT	_	_	3	punct	_	_

~~~


