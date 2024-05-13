---
layout: base
title:  'Statistics of advmod:to in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `advmod:to`

This relation is a language-specific subtype of <tt><a href="hu_szeged-dep-advmod.html">advmod</a></tt>.
There are also 6 other language-specific subtypes of `advmod`: <tt><a href="hu_szeged-dep-advmod-locy.html">advmod:locy</a></tt>, <tt><a href="hu_szeged-dep-advmod-mode.html">advmod:mode</a></tt>, <tt><a href="hu_szeged-dep-advmod-que.html">advmod:que</a></tt>, <tt><a href="hu_szeged-dep-advmod-tfrom.html">advmod:tfrom</a></tt>, <tt><a href="hu_szeged-dep-advmod-tlocy.html">advmod:tlocy</a></tt>, <tt><a href="hu_szeged-dep-advmod-tto.html">advmod:tto</a></tt>.

20 nodes (0%) are attached to their parents as `advmod:to`.

12 instances of `advmod:to` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.9.

The following 3 pairs of parts of speech are connected with `advmod:to`: <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (17; 85% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (2; 10% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advmod:to	color:blue
1	Tudják	tud	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	5	punct	_	_
3	sehova	sehova	ADV	_	PronType=Neg	6	advmod:to	_	_
4	nem	nem	ADV	_	PronType=Neg	5	advmod	_	_
5	érdemes	érdemes	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	1	ccomp:obj	_	_
6	elindulni	el+indul	VERB	_	VerbForm=Inf|Voice=Act	5	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 advmod:to	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	magyar	magyar	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	3	amod:att	_	_
3	együttes	együttes	NOUN	_	Case=Nom|Number=Sing	8	nsubj	_	_
4	12-3-as	12-3-as	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	7	amod:att	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	19-7-es	19-7-es	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	4	conj	_	_
7	szériával	széria	NOUN	_	Case=Ins|Number=Sing	8	obl	_	_
8	kezdett	kezd	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
9	,	,	PUNCT	_	_	12	punct	_	_
10	a	a	DET	_	Definite=Def|PronType=Art	11	det	_	_
11	félidőben	félidő	NOUN	_	Case=Ine|Number=Sing	12	nmod:obl	_	_
12	38-23	38-23	NOUN	_	Case=Nom|Number=Sing	8	conj	_	_
13	volt	van	AUX	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	cop	_	_
14	—	—	PUNCT	_	_	15	punct	_	_
15	ide	ide	ADV	_	Degree=Pos|PronType=Dem	12	advmod:to	_	SpaceAfter=No
16	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 advmod:to	color:blue
1	Ettől	ez	PRON	_	Case=Abl|Number=Sing|Person=3|PronType=Dem	2	obl	_	_
2	függetlenül	független	ADJ	_	Case=Ess|Degree=Pos|Number=Sing	10	advmod:mode	_	_
3	az	az	DET	_	Definite=Def|PronType=Art	4	det	_	_
4	AIDS	AIDS	NOUN	_	Case=Nom|Number=Sing	6	nmod:att	_	_
5	"	"	PUNCT	_	_	6	punct	_	SpaceAfter=No
6	epicentruma	epicentrum	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	nsubj	_	SpaceAfter=No
7	"	"	PUNCT	_	_	6	punct	_	_
8	továbbra	továbbra	ADV	_	_	10	advmod:mode	_	_
9	is	is	CCONJ	_	_	8	cc	_	ToDo=cc-without-conj
10	Afrika	Afrika	PROPN	_	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
11	,	,	PUNCT	_	_	18	punct	_	_
12	s	s	CCONJ	_	_	18	cc	_	_
13	elsősorban	elsősorban	ADV	_	_	18	advmod:mode	_	_
14	annak	az	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Dem	18	nmod:att	_	_
15	Szaharától	Szahara	PROPN	_	Case=Abl|Number=Sing	17	obl	_	_
16	délre	délre	ADV	_	_	17	advmod:to	_	_
17	eső	eső	ADJ	_	Case=Nom|Number=Sing|VerbForm=PartPres	18	amod:att	_	_
18	része	rész	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	conj	_	SpaceAfter=No
19	,	,	PUNCT	_	_	26	punct	_	_
20	ahol	ahol	ADV	_	PronType=Rel	26	advmod:locy	_	_
21	a	a	DET	_	Definite=Def|PronType=Art	22	det	_	_
22	vírussal	vírus	NOUN	_	Case=Ins|Number=Sing	23	nmod:obl	_	_
23	fertőzöttek	fertőzött	NOUN	_	Case=Nom|Number=Plur	25	nmod:att	_	_
24	55	55	NUM	_	Case=Nom|Number=Sing|NumType=Card	25	nummod	_	_
25	százaléka	százalék	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	26	nsubj	_	_
26	nő	nő	NOUN	_	Case=Nom|Number=Sing	18	acl	_	SpaceAfter=No
27	.	.	PUNCT	_	_	10	punct	_	_

~~~


