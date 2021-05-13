---
layout: base
title:  'Statistics of ccomp in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `ccomp`

This relation is universal.
There are 3 language-specific subtypes of `ccomp`: <tt><a href="hu_szeged-dep-ccomp-obj.html">ccomp:obj</a></tt>, <tt><a href="hu_szeged-dep-ccomp-obl.html">ccomp:obl</a></tt>, <tt><a href="hu_szeged-dep-ccomp-pred.html">ccomp:pred</a></tt>.

75 nodes (0%) are attached to their parents as `ccomp`.

64 instances of `ccomp` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.09333333333333.

The following 6 pairs of parts of speech are connected with `ccomp`: <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (56; 75% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (9; 12% instances), <tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (4; 5% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-AUX.html">AUX</a></tt> (3; 4% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 ccomp	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	4	det	_	_
2	helyi	helyi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	4	amod:att	_	_
3	belügyi	belügyi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	4	amod:att	_	_
4	erők	erő	NOUN	_	Case=Nom|Number=Plur	5	nmod:att	_	_
5	parancsnoka	parancsnok	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	nsubj	_	_
6	ugyanakkor	ugyanakkor	ADV	_	PronType=Dem	7	advmod:mode	_	_
7	közölte	közöl	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	,	,	PUNCT	_	_	12	punct	_	_
9	hogy	hogy	SCONJ	_	_	12	mark	_	_
10	erőszakkal	erőszak	NOUN	_	Case=Ins|Number=Sing	12	obl	_	_
11	nem	nem	ADV	_	PronType=Neg	12	advmod	_	_
12	oszlatja	oszlat	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Cau	7	ccomp	_	_
13	fel	fel	ADV	_	Degree=Pos	12	compound:preverb	_	_
14	a	a	DET	_	Definite=Def|PronType=Art	15	det	_	_
15	tüntetést	tüntetés	NOUN	_	Case=Acc|Number=Sing	12	obj	_	SpaceAfter=No
16	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 ccomp	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	4	det	_	_
2	helyi	helyi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	4	amod:att	_	_
3	albán	albán	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	4	amod:att	_	_
4	vezetők	vezető	NOUN	_	Case=Nom|Number=Plur	7	nsubj	_	_
5	azt	az	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Dem	7	obj	_	_
6	is	is	CCONJ	_	_	5	cc	_	ToDo=cc-without-conj
7	közölték	közöl	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	készek	kész	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	7	ccomp	_	_
10	szembeszállni	szembeszáll	VERB	_	VerbForm=Inf|Voice=Act	9	xcomp	_	_
11	az	az	DET	_	Definite=Def|PronType=Art	12	det	_	_
12	oroszokkal	orosz	NOUN	_	Case=Ins|Number=Plur	10	obl	_	SpaceAfter=No
13	,	,	PUNCT	_	_	19	punct	_	_
14	ha	ha	SCONJ	_	_	19	mark	_	_
15	a	a	DET	_	Definite=Def|PronType=Art	17	det	_	_
16	moszkvai	moszkvai	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	17	amod:att	_	_
17	hadvezetés	hadvezetés	NOUN	_	Case=Nom|Number=Sing	19	nsubj	_	_
18	úgy	úgy	ADV	_	PronType=Dem	19	advmod:mode	_	_
19	dönt	dönt	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	advcl	_	SpaceAfter=No
20	,	,	PUNCT	_	_	23	punct	_	_
21	fegyverek	fegyver	NOUN	_	Case=Nom|Number=Plur	22	nmod:att	_	_
22	bevetésével	bevetés	NOUN	_	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	23	obl	_	_
23	töri	tör	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	19	advcl	_	_
24	át	át	ADV	_	_	23	compound:preverb	_	_
25	az	az	DET	_	Definite=Def|PronType=Art	26	det	_	_
26	úttorlaszokat	úttorlasz	NOUN	_	Case=Acc|Number=Plur	23	obj	_	SpaceAfter=No
27	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 18 ccomp	color:blue
1	1992.	1992.	ADJ	_	Case=Nom|Number=Sing|NumType=Ord	2	amod:att	_	_
2	augusztus	augusztus	NOUN	_	Case=Nom|Number=Sing	3	nmod:att	_	_
3	21-én	21.	NOUN	_	Case=Sup|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	obl	_	_
4	társai	társ	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	_
5	megvonták	megvon	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	az	az	DET	_	Definite=Def|PronType=Art	8	det	_	_
7	aláírási	aláírási	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	8	amod:att	_	_
8	jogot	jog	NOUN	_	Case=Acc|Number=Sing	5	obj	_	_
9	György	György	PROPN	_	Case=Nom|Number=Sing	5	obl	_	_
10	Sándortól	Sándor	PROPN	_	Case=Abl|Number=Sing	9	flat:name	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	ToDo=punct-in-coord
12	mondván	mondván	ADV	_	VerbForm=Conv	5	advmod:mode	_	SpaceAfter=No
13	,	,	PUNCT	_	_	18	punct	_	_
14	"	"	PUNCT	_	_	18	punct	_	SpaceAfter=No
15	nem	nem	ADV	_	PronType=Neg	16	advmod	_	_
16	megfelelő	megfelelő	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	17	amod:att	_	_
17	intézkedéseket	intézkedés	NOUN	_	Case=Acc|Number=Plur	18	obj	_	_
18	hajtott	hajt	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	ccomp	_	_
19	végre	végre	ADV	_	_	18	compound:preverb	_	SpaceAfter=No
20	"	"	PUNCT	_	_	18	punct	_	SpaceAfter=No
21	,	,	PUNCT	_	_	29	punct	_	_
22	1996.	1996.	ADJ	_	Case=Nom|Number=Sing|NumType=Ord	23	amod:att	_	_
23	május	május	NOUN	_	Case=Nom|Number=Sing	24	nmod:att	_	_
24	29-étől	29.	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3	29	obl	_	_
25	pedig	pedig	CCONJ	_	_	29	cc	_	_
26	kizárólag	kizárólag	ADV	_	_	29	advmod:mode	_	_
27	Györök	Györök	PROPN	_	Case=Nom|Number=Sing	29	nsubj	_	_
28	Anita	Anita	PROPN	_	Case=Nom|Number=Sing	27	flat:name	_	_
29	vezeti	vezet	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	_
30	a	a	DET	_	Definite=Def|PronType=Art	31	det	_	_
31	céget	cég	NOUN	_	Case=Acc|Number=Sing	29	obj	_	SpaceAfter=No
32	,	,	PUNCT	_	_	38	punct	_	_
33	amelynek	amely	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Rel	35	nmod:att	_	_
34	a	a	DET	_	Definite=Def|PronType=Art	35	det	_	_
35	felszámolása	felszámolás	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	38	nsubj	_	_
36	1997	1997	NUM	_	Case=Nom|Number=Sing|NumType=Card	37	amod:att	_	_
37	áprilisában	április	NOUN	_	Case=Ine|Number=Sing|Number[psor]=Sing|Person[psor]=3	38	obl	_	_
38	kezdődött	kezdődik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	31	acl	_	SpaceAfter=No
39	.	.	PUNCT	_	_	5	punct	_	_

~~~


