---
layout: base
title:  'Statistics of advmod:lmod in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `advmod:lmod`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_ittb-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_ittb-dep-advmod-neg.html">advmod:neg</a></tt>, <tt><a href="la_ittb-dep-advmod-tmod.html">advmod:tmod</a></tt>.

1448 nodes (0%) are attached to their parents as `advmod:lmod`.

1438 instances of `advmod:lmod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.61740331491713.

The following 6 pairs of parts of speech are connected with `advmod:lmod`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (1136; 78% instances), <tt><a href="la_ittb-pos-AUX.html">AUX</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (186; 13% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (82; 6% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (33; 2% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (10; 1% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 advmod:lmod	color:blue
1	unde	unde	ADV	O4	AdvType=Loc|PronType=Rel	9	advmod:lmod	_	_
2	et	et	CCONJ	O4	_	9	cc	_	_
3	in	in	ADP	S4	_	4	case	_	_
4	ea	is	PRON	F1|grn1|casF|gen2	Case=Abl|Gender=Fem|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs	9	obl	_	_
5	plurima	multus	DET	B1|grn3|casJ|gen3	Case=Nom|Degree=Abs|Gender=Neut|InflClass=IndEurO|Number=Plur|NumType=Card	9	nsubj:pass	_	_
6	humanum	humanus	ADJ	B1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	7	amod	_	_
7	sensum	sensus	NOUN	D1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurU|Number=Sing	8	obj	_	_
8	excedentia	excedo	VERB	L2|modD|tem1|grp1|casJ|gen3	Aspect=Imp|Case=Nom|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Plur|VerbForm=Part|Voice=Act	5	acl	_	TraditionalMood=Participium|TraditionalTense=Praesens
9	proponuntur	propono	VERB	L3|modJ|tem1|gen9	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
10	.	.	PUNCT	Punc	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod:lmod	color:blue
1	hinc	hinc	ADV	F1|grn1|casG	AdvType=Loc|Case=Loc|PronType=Dem	2	advmod:lmod	_	_
2	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	0	root	_	_
3	quod	qui	PRON	F1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	6	nsubj:pass	_	_
4	ephes.	ephesius	ADJ	5	Abbr=Yes|NameType=Nat|Proper=Yes	6	obl	_	_
5	4-17	4-17	NUM	G5	_	4	nummod	_	_
6	dicitur	dico	VERB	N3|modJ|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	2	csubj:relcl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
7	:	:	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advmod:lmod	color:blue
1	unde	unde	ADV	O4	AdvType=Loc|PronType=Rel	4	advmod:lmod	_	_
2	non	non	PART	O4	Polarity=Neg	4	advmod:neg	_	_
3	erit	sum	AUX	N3|modA|tem3|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	4	cop	_	_
4	primum	primus	ADJ	B1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing|NumType=Ord	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


