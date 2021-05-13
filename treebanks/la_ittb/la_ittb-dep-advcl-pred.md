---
layout: base
title:  'Statistics of advcl:pred in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `advcl:pred`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-advcl.html">advcl</a></tt>.
There are also 1 other language-specific subtypes of `advcl`: <tt><a href="la_ittb-dep-advcl-cmpr.html">advcl:cmpr</a></tt>.

274 nodes (0%) are attached to their parents as `advcl:pred`.

167 instances of `advcl:pred` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.99270072992701.

The following 8 pairs of parts of speech are connected with `advcl:pred`: <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (143; 52% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (70; 26% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (48; 18% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (8; 3% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 advcl:pred	color:blue
1	corpora	corpus	NOUN	C1|grn1|casJ|gen3	Case=Nom|Gender=Neut|Number=Plur	8	nsubj	_	_
2	autem	autem	CCONJ	O4	_	8	cc	_	_
3	caelestia	caelestis	ADJ	C1|grn1|casJ|gen3|vgr1	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	1	amod	_	_
4	sola	solus	ADJ	F1|grn1|casJ|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	1	advcl:pred	_	_
5	inter	inter	ADP	S4	AdpType=Prep	6	case	_	_
6	corporalia	corporalis	ADJ	C1|grn1|casM|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Plur	8	obl	_	_
7	sunt	sum	AUX	N3|modA|tem1|gen9	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	inalterabilia	inalterabilis	ADJ	C1|grn1|casJ|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	0	root	_	SpaceAfter=No
9	:	:	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advcl:pred	color:blue
1	quis	qui	PRON	F1|grn1|casA|gen1|varA	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	3	nsubj	_	_
2	prior	prior	ADJ	C1|grn2|casA|gen1	Case=Nom|Degree=Cmp|Gender=Masc|Number=Sing|NumType=Ord	1	advcl:pred	_	_
3	dedit	do	VERB	J3|modA|tem4|gen6	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	illi	ille	PRON	F1|grn1|casC|gen1	Case=Dat|Gender=Masc|Number=Sing|PronType=Dem	3	obl:arg	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	7	punct	_	_
6	et	et	CCONJ	O4	_	7	cc	_	_
7	retribuetur	retribuo	VERB	L3|modJ|tem3|gen6	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Pass	3	conj	_	_
8	ei	is	PRON	F1|grn1|casC|gen1	Case=Dat|Gender=Masc|Number=Sing|PronType=Dem,Prs	7	obl:arg	_	SpaceAfter=No
9	?	?	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advcl:pred	color:blue
1	ostensum	ostendo	VERB	L2|modM|tem4|grp1|casA|gen3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
2	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux:pass	_	_
3	autem	autem	CCONJ	O4	_	1	cc	_	_
4	supra	supra	ADV	S4	_	1	advmod	_	_
5	quod	quod	SCONJ	O4	_	8	mark	_	_
6	solus	solus	ADJ	F1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	7	advcl:pred	_	_
7	deus	deus	PROPN	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
8	potest	possum	VERB	N3|modA|tem1|gen6	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod|Voice=Act	1	csubj:pass	_	_
9	creare	creo	VERB	J3|modH|tem1	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	8	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


