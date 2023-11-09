---
layout: base
title:  'Statistics of nsubj:outer in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="la_ittb-dep-nsubj-pass.html">nsubj:pass</a></tt>.

163 nodes (0%) are attached to their parents as `nsubj:outer`.

162 instances of `nsubj:outer` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.42331288343558.

The following 17 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (81; 50% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (37; 23% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (14; 9% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (8; 5% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (7; 4% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="la_ittb-pos-AUX.html">AUX</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="la_ittb-pos-AUX.html">AUX</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="la_ittb-pos-AUX.html">AUX</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 nsubj:outer	color:blue
1	sola	solus	DET	F1|grn1|casJ|gen3	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Con	3	det	_	_
2	autem	autem	PART	O4	_	10	discourse	_	_
3	accidentia	accidens	NOUN	C1|grn1|casJ|gen3|vgr1	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Plur	10	nsubj:outer	_	_
4	rei	res	NOUN	E1|grn1|casB|gen2	Case=Gen|Gender=Fem|InflClass=IndEurE|Number=Sing	3	nmod	_	_
5	sunt	sum	AUX	N3|modA|tem1|gen9	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
6	quae	qui	PRON	F1|grn1|casJ|gen3|vgr1	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Rel	10	nsubj	_	_
7	in	in	ADP	S4	_	8	case	_	_
8	definitione	definitio	NOUN	C1|grn1|casF|gen2|comH|vgr1	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	10	obl	_	_
9	non	non	PART	O4	Polarity=Neg	10	advmod:neg	_	_
10	cadunt	cado	VERB	L3|modA|tem1|gen9	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
11	.	.	PUNCT	Punc	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:outer	color:blue
1	et	et	CCONJ	O4	_	5	cc	_	_
2	hoc	hic	DET	F1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	5	nsubj:outer	_	_
3	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
4	quod	qui	PRON	F1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	5	nsubj:pass	_	_
5	dicitur	dico	VERB	N3|modJ|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
6	in	in	ADP	S4	_	7	case	_	_
7	psalmo	psalmus	NOUN	B1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	5	obl	_	SpaceAfter=No
8	:	:	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 nsubj:outer	color:blue
1	primum	primus	ADJ	B1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing|NumType=Ord	8	nsubj:outer	_	_
2	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop:outer	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
3	,	,	PUNCT	Punc	_	2	punct	_	_
4	quod	quod	SCONJ	O4	_	8	mark	_	_
5	intellectus	intellectus	NOUN	D1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurU|Number=Sing	8	nsubj	_	_
6	noster	noster	DET	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	5	det	_	_
7	simpliciter	simpliciter	ADV	C1|grn1|casG	_	8	advmod	_	_
8	finitus	finio	VERB	M2|modM|tem4|grp1|casA|gen1	Aspect=Perf|Case=Nom|Gender=Masc|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	Lilaflcat=LatI|TraditionalMood=Participium|TraditionalTense=Perfectum
9	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:pass	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
10	:	:	PUNCT	Punc	_	8	punct	_	_

~~~


