---
layout: base
title:  'Statistics of advcl:pred in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `advcl:pred`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-advcl.html">advcl</a></tt>.
There are also 3 other language-specific subtypes of `advcl`: <tt><a href="la_ittb-dep-advcl-abs.html">advcl:abs</a></tt>, <tt><a href="la_ittb-dep-advcl-cmp.html">advcl:cmp</a></tt>, <tt><a href="la_ittb-dep-advcl-relcl.html">advcl:relcl</a></tt>.

322 nodes (0%) are attached to their parents as `advcl:pred`.

193 instances of `advcl:pred` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.09006211180124.

The following 17 pairs of parts of speech are connected with `advcl:pred`: <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (164; 51% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (29; 9% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (25; 8% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (25; 8% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (21; 7% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (20; 6% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (9; 3% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (7; 2% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (7; 2% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advcl:pred	color:blue
1	ostensum	ostendo	VERB	L2|modM|tem4|grp1|casA|gen3	Aspect=Perf|Case=Nom|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	TraditionalMood=Participium|TraditionalTense=Perfectum
2	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	aux:pass	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
3	autem	autem	PART	O4	_	1	discourse	_	_
4	supra	supra	ADV	S4	_	1	advmod	_	_
5	quod	quod	SCONJ	O4	_	8	mark	_	_
6	solus	solus	DET	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Con	7	advcl:pred	_	_
7	deus	deus	NOUN	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	8	nsubj	_	_
8	potest	possum	VERB	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	csubj:pass	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
9	creare	creo	VERB	J3|modH|tem1	Aspect=Imp|InflClass=LatA|VerbForm=Inf|Voice=Act	8	xcomp	_	SpaceAfter=No|TraditionalMood=Infinitivus|TraditionalTense=Praesens
10	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advcl:pred	color:blue
1	actus	actus	NOUN	D1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurU|Number=Sing	8	nsubj:pass	_	_
2	enim	enim	PART	O4	_	8	discourse	_	_
3	et	et	CCONJ	O4	_	4	cc	_	_
4	potentia	potentia	NOUN	A1|grn1|casA|gen2|vgr1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	1	conj	_	_
5	ad	ad	ADP	S4	_	6	case	_	_
6	se	sui	PRON	F1|grn1|casM	Case=Acc|InflClass=LatAnom|Person=3|PronType=Prs|Reflex=Yes	8	obl	_	_
7	inuicem	inuicem	PRON	O4|vgr1	Compound=Yes|Number=Plur|PronType=Rcp	8	advcl:pred	_	_
8	dicuntur	dico	VERB	N3|modJ|tem1|gen9	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
9	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 advcl:pred	color:blue
1	quod	quod	SCONJ	O4	_	3	mark	_	_
2	homines	homo	NOUN	C1|grn1|casJ|gen1	Case=Nom|Gender=Masc|InflClass=IndEurX|Number=Plur	3	nsubj	_	_
3	resurgent	resurgo	VERB	L3|modA|tem3|gen9	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Futurum
4	immortales	immortalis	ADJ	C1|grn1|casJ|gen1	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Plur	2	advcl:pred	_	SpaceAfter=No
5	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


