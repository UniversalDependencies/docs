---
layout: base
title:  'Statistics of advcl:pred in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `advcl:pred`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-advcl.html">advcl</a></tt>.
There are also 3 other language-specific subtypes of `advcl`: <tt><a href="la_ittb-dep-advcl-abs.html">advcl:abs</a></tt>, <tt><a href="la_ittb-dep-advcl-cmp.html">advcl:cmp</a></tt>, <tt><a href="la_ittb-dep-advcl-relcl.html">advcl:relcl</a></tt>.

288 nodes (0%) are attached to their parents as `advcl:pred`.

173 instances of `advcl:pred` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.14236111111111.

The following 16 pairs of parts of speech are connected with `advcl:pred`: <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (120; 42% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (45; 16% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (25; 9% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (23; 8% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (21; 7% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (20; 7% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (7; 2% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (6; 2% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (6; 2% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 advcl:pred	color:blue
1	corpora	corpus	NOUN	C1|grn1|casJ|gen3	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Plur	8	nsubj	_	_
2	autem	autem	PART	O4	_	8	discourse	_	_
3	caelestia	caelestis	ADJ	C1|grn1|casJ|gen3|vgr1	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Plur	1	amod	_	_
4	sola	solus	DET	F1|grn1|casJ|gen3	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Plur|PronType=Con	1	advcl:pred	_	_
5	inter	inter	ADP	S4	_	6	case	_	_
6	corporalia	corporalis	ADJ	C1|grn1|casM|gen3	Case=Acc|Gender=Neut|InflClass=IndEurI|Number=Plur	8	obl	_	_
7	sunt	sum	AUX	N3|modA|tem1|gen9	InflClass=LatAnom|Number=Plur|VerbForm=Fin	8	cop	_	_
8	inalterabilia	inalterabilis	ADJ	C1|grn1|casJ|gen3	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Plur	0	root	_	SpaceAfter=No
9	:	:	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advcl:pred	color:blue
1	ostensum	ostendo	VERB	L2|modM|tem4|grp1|casA|gen3	Aspect=Perf|Case=Nom|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	TraditionalMood=Participium|TraditionalTense=Perfectum
2	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	1	aux:pass	_	_
3	autem	autem	PART	O4	_	1	discourse	_	_
4	supra	supra	ADV	S4	_	1	advmod	_	_
5	quod	quod	SCONJ	O4	_	8	mark	_	_
6	solus	solus	DET	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Con	7	advcl:pred	_	_
7	deus	deus	PROPN	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	8	nsubj	_	_
8	potest	possum	VERB	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	csubj:pass	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
9	creare	creo	VERB	J3|modH|tem1	Aspect=Imp|InflClass=LatA|VerbForm=Vnoun|Voice=Act	8	xcomp	_	SpaceAfter=No|TraditionalMood=Infinitivus|TraditionalTense=Praesens
10	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advcl:pred	color:blue
1	deus	deus	PROPN	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	6	nsubj	_	_
2	per	per	ADP	S4	_	3	case	_	_
3	se	se	PRON	F1|grn1|casD|gen1	Case=Acc|InflClass=LatAnom|PronType=Prs|Reflex=Yes	6	obl	_	_
4	solum	solus	DET	B1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing|PronType=Con	3	advcl:pred	_	_
5	cuncta	cunctus	DET	B1|grn1|casM|gen3	Case=Acc|Gender=Neut|InflClass=IndEurO|Number=Plur|PronType=Ind	6	obj	_	_
6	disponit	dispono	VERB	L3|modA|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
7	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


