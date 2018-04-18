---
layout: base
title:  'Statistics of expl in UD_Croatian'
udver: '2'
---

## Treebank Statistics: UD_Croatian: Relations: `expl`

This relation is universal.
There are 1 language-specific subtypes of `expl`: <tt><a href="hr-dep-expl-pv.html">expl:pv</a></tt>.

12 nodes (0%) are attached to their parents as `expl`.

11 instances of `expl` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.75.

The following 12 pairs of parts of speech are connected with `expl`: <tt><a href="hr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr-pos-ADV.html">ADV</a></tt> (1; 8% instances), <tt><a href="hr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr-pos-PART.html">PART</a></tt> (1; 8% instances), <tt><a href="hr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr-pos-PRON.html">PRON</a></tt> (1; 8% instances), <tt><a href="hr-pos-ADV.html">ADV</a></tt>-<tt><a href="hr-pos-ADV.html">ADV</a></tt> (1; 8% instances), <tt><a href="hr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr-pos-ADP.html">ADP</a></tt> (1; 8% instances), <tt><a href="hr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr-pos-ADV.html">ADV</a></tt> (1; 8% instances), <tt><a href="hr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="hr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hr-pos-ADV.html">ADV</a></tt> (1; 8% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-AUX.html">AUX</a></tt> (1; 8% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-DET.html">DET</a></tt> (1; 8% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-PRON.html">PRON</a></tt> (1; 8% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-SCONJ.html">SCONJ</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 expl	color:blue
1	Najčešći	češći	ADJ	_	Case=Nom|Definite=Def|Degree=Sup|Gender=Masc|Number=Sing	2	amod	_	_
2	uzrok	uzrok	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
3	ovom	ovaj	DET	_	Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	problemu	problem	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	2	nmod	_	_
5	su	biti	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	driveri	driver	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	_
8	točnije	točno	ADV	_	Degree=Cmp	9	expl	_	_
9	moguće	moguć	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Plur	6	parataxis	_	_
10	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
11	da	da	SCONJ	_	_	14	mark	_	_
12	proizvođač	proizvođač	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	_
13	nije	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux	_	_
14	postavio	postaviti	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	9	csubj	_	_
15	drivere	driver	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	14	obj	_	_
16	za	za	ADP	_	Case=Acc	18	case	_	_
17	vaše	vaš	ADJ	_	Case=Acc|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing	18	nmod	_	_
18	računalo	računalo	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	15	nmod	_	SpaceAfter=No
19	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 25 expl	color:blue
1	Istra	Istra	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
2	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	također	također	ADV	_	Degree=Pos	4	advmod	_	_
4	privlačna	privlačan	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
5	jer	jer	SCONJ	_	_	18	mark	_	_
6	su	biti	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	18	aux:pass	_	SpaceAfter=No
7	,	,	PUNCT	_	_	12	punct	_	_
8	za	za	ADP	_	Case=Acc	12	case	_	_
9	razliku	razlika	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	8	fixed	_	_
10	od	od	ADP	_	Case=Gen	8	fixed	_	_
11	drugih	drugi	ADJ	_	Case=Gen|Gender=Masc|Number=Plur|NumType=Ord	12	amod	_	_
12	dijelova	dio	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	18	obl	_	_
13	Hrvatske	Hrvatska	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	SpaceAfter=No
14	,	,	PUNCT	_	_	12	punct	_	_
15	ovdje	ovdje	ADV	_	Degree=Pos|PronType=Dem	18	advmod	_	_
16	puno	puno	ADV	_	Degree=Pos	17	advmod	_	_
17	bolje	dobro	ADV	_	Degree=Cmp	18	advmod	_	_
18	riješene	riješiti	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	4	advcl	_	_
19	zemljišne	zemljišni	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur	20	amod	_	_
20	knjige	knjiga	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	18	nsubj:pass	_	SpaceAfter=No
21	,	,	PUNCT	_	_	26	punct	_	_
22	prostorni	prostoran	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	23	amod	_	_
23	planovi	plan	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	26	nsubj	_	_
24	su	biti	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	26	cop	_	_
25	sve	sve	PART	_	_	26	expl	_	_
26	bolji	dobar	ADJ	_	Case=Nom|Definite=Def|Degree=Cmp|Gender=Masc|Number=Plur	18	conj	_	SpaceAfter=No
27	,	,	PUNCT	_	_	31	punct	_	_
28	a	a	CCONJ	_	_	31	cc	_	_
29	dozvole	dozvola	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	31	nsubj	_	_
30	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	31	aux	_	_
31	izdaju	izdati	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	18	conj	_	_
32	brže	brzo	ADV	_	Degree=Cmp	31	advmod	_	SpaceAfter=No
33	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl	color:blue
1	Poezija	poezija	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	7	nsubj:pass	_	_
2	i	i	CCONJ	_	_	3	cc	_	_
3	proza	proza	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	1	conj	_	_
4	višekratno	višekratno	ADV	_	Degree=Pos	7	advmod	_	_
5	su	biti	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	aux:pass	_	_
6	joj	on	PRON	_	Case=Dat|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	expl	_	_
7	nagrađivane	nagrađivati	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	_
8	i	i	CCONJ	_	_	9	cc	_	_
9	objavljivane	objavljivati	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur|VerbForm=Part	7	conj	_	_
10	u	u	ADP	_	Case=Loc	12	case	_	_
11	različitim	različit	ADJ	_	Case=Loc|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	12	amod	_	_
12	časopisima	časopis	NOUN	_	Case=Loc|Gender=Masc|Number=Plur	9	obl	_	_
13	i	i	CCONJ	_	_	14	cc	_	_
14	zbornicima	zbornik	NOUN	_	Case=Loc|Gender=Masc|Number=Plur	12	conj	_	SpaceAfter=No
15	.	.	PUNCT	_	_	7	punct	_	_

~~~


