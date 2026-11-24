---
layout: base
title:  'Statistics of flat:foreign in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="it_kiparlaforest-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="it_kiparlaforest-dep-flat-name.html">flat:name</a></tt>.

4 nodes (0%) are attached to their parents as `flat:foreign`.

4 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="it_kiparlaforest-pos-X.html">X</a></tt>-<tt><a href="it_kiparlaforest-pos-X.html">X</a></tt> (3; 75% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	may	may	X	_	_	0	root	_	Begin=1304.312|KID=839-0|Lang=en
2	day	day	X	_	_	1	flat:foreign	_	KID=839-1|Lang=en
3	may	may	X	_	_	1	conj	_	KID=839-2|Lang=en
4	day	day	X	_	_	3	flat:foreign	_	KID=839-3|Lang=en
5	may	may	X	_	_	1	conj	_	KID=839-4|Lang=en
6	day	day	X	_	_	5	flat:foreign	_	End=1305.662|KID=839-5

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 29 flat:foreign	color:blue
1	tipo	tipo	NOUN	_	Gender=Masc|Number=Sing	18	discourse	_	Begin=271.896|KID=172-0
2	in	in	ADP	_	_	4	case	_	KID=172-1a
3	i	il	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	4	det	_	KID=172-1b
4	film	film	NOUN	_	Gender=Masc	18	obl	_	KID=172-2
5	americani	americano	ADJ	_	Gender=Masc|Number=Plur	4	amod	_	KID=172-3
6	o	o	CCONJ	_	_	7	cc	_	KID=172-4
7	inglesi	inglese	ADJ	_	Number=Plur	5	conj	_	End=273.916|KID=172-5
8	eh	eh	INTJ	_	_	9	discourse	_	Begin=274.521|KID=173-0
9	poi	poi	ADV	_	_	14	reparandum	_	KID=173-1|Prolonged=Yes|ProsodicLink=Yes
10	mh	mh	INTJ	_	_	9	discourse	_	End=275.411|KID=173-2
11	con	con	ADP	_	_	13	case	_	Begin=275.881|KID=174-0
12	l'	il	DET	_	Definite=Def|Number=Sing|PronType=Art	13	det	_	KID=174-1|SpaceAfter=No
13	audio	audio	NOUN	_	Gender=Masc	4	nmod	_	KID=174-2
14	poi	poi	ADV	_	_	13	advmod	_	KID=174-3
15	in	in	ADP	_	_	16	case	_	KID=174-4
16	italiano	italiano	NOUN	_	Gender=Masc|Number=Sing	13	nmod	_	End=277.081|KID=174-5
17	tutti	tutto	PRON	_	Gender=Masc|Number=Plur|PronType=Ind	18	nsubj	_	Begin=277.646|KID=175-0
18	dicono	dire	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=175-1
19	fanculo	fanculo	NOUN	_	_	18	obj	_	KID=175-2
20	e	e	CCONJ	_	_	22	cc	_	KID=175-3
21	non	non	ADV	_	PronType=Neg	22	advmod	_	KID=175-4
22	vaffanculo	vaffanculo	NOUN	_	_	19	conj	_	KID=175-5
23	perché	perché	SCONJ	_	_	28	mark	_	End=280.166|KID=175-6
24	la	il	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	25	det	_	Begin=280.441|KID=176-0
25	parola	parola	NOUN	_	Gender=Fem|Number=Sing	28	nsubj	_	KID=176-1
26	inglese	inglese	ADJ	_	Number=Sing	25	amod	_	KID=176-2
27	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	cop	_	KID=176-3
28	fuck	fuck	VERB	_	_	18	advcl	_	KID=176-4|Lang=en
29	you	you	PRON	_	_	28	flat:foreign	_	KID=176-5|Lang=en
30	e	e	CCONJ	_	_	37	cc	_	KID=176-6
31	quindi	quindi	CCONJ	_	_	37	cc	_	KID=176-7|PaceFast=Yes
32	se	se	SCONJ	_	_	34	mark	_	KID=176-8|PaceFast=Yes
33	tu	tu	PRON	_	Number=Sing|Person=2|PronType=Prs	34	nsubj	_	KID=176-9|PaceFast=Yes
34	dicessi	dire	VERB	_	Mood=Sub|Number=Sing|Person=2|Tense=Imp|VerbForm=Fin	37	advcl	_	KID=176-10|PaceFast=Yes
35	vaffanculo	vaffanculo	NOUN	_	_	34	obj	_	KID=176-11
36	c'	ci	PRON	_	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	37	expl	_	KID=176-12|SpaceAfter=No
37	è	essere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	conj	_	KID=176-13
38	una	uno	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	39	det	_	KID=176-14
39	parte	parte	NOUN	_	Gender=Fem|Number=Sing	37	nsubj	_	KID=176-15
40	prima	prima	ADV	_	_	39	amod	_	KID=176-16
41	che	che	PRON	_	PronType=Rel	43	nsubj	_	KID=176-17
42	non	non	ADV	_	PronType=Neg	43	advmod	_	KID=176-18
43	corrisponde	corrispondere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	39	acl:relcl	_	KID=176-19
44	a	a	ADP	_	_	46	case	_	KID=176-20a
45	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	46	det	_	KID=176-20b
46	labiale	labiale	NOUN	_	_	43	obl	_	End=285.491|KID=176-21

~~~


