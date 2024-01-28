---
layout: base
title:  'Statistics of csubj:pass in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-csubj.html">csubj</a></tt>.
There are also 3 other language-specific subtypes of `csubj`: <tt><a href="la_ittb-dep-csubj-cleft.html">csubj:cleft</a></tt>, <tt><a href="la_ittb-dep-csubj-relcl.html">csubj:relcl</a></tt>, <tt><a href="la_ittb-dep-csubj-reported.html">csubj:reported</a></tt>.

1654 nodes (0%) are attached to their parents as `csubj:pass`.

1451 instances of `csubj:pass` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.0235792019347.

The following 8 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1308; 79% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (166; 10% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (77; 5% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (66; 4% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (19; 1% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-DET.html">DET</a></tt> (15; 1% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 csubj:pass	color:blue
1	unde	unde	ADV	O4	AdvType=Loc|PronType=Rel	4	advmod:lmod	_	_
2	nec	nec	CCONJ	O4	_	3	advmod:emph	_	_
3	ratione	ratio	NOUN	C1|grn1|casF|gen2|comH|vgr1	Case=Abl|Gender=Fem|InflClass=IndEurX|Number=Sing	5	obl	_	_
4	uidetur	uideo	VERB	K3|modJ|tem1|gen6|vgr1	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
5	posse	possum	VERB	N3|modH|tem1	Aspect=Imp|InflClass=LatAnom|Tense=Pres|VerbForm=Inf|Voice=Act	4	csubj:pass	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
6	demonstrari	demonstro	VERB	J3|modQ|tem1	Aspect=Imp|InflClass=LatA|Tense=Pres|VerbForm=Inf|Voice=Pass	5	xcomp	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
7	an	an	SCONJ	O4	_	9	mark	_	_
8	deus	deus	NOUN	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	9	nsubj	_	_
9	sit	sum	AUX	N3|modB|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	csubj	_	SpaceAfter=No|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
10	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj:pass	color:blue
1	ostensum	ostendo	VERB	L2|modM|tem4|grp1|casA|gen3	Aspect=Perf|Case=Nom|Gender=Neut|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	TraditionalMood=Participium|TraditionalTense=Perfectum
2	autem	autem	PART	O4	_	1	discourse	_	_
3	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	aux:pass	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
4	deum	deus	NOUN	F1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	7	nsubj	_	_
5	esse	sum	AUX	N3|modH|tem1	Aspect=Imp|Tense=Pres|VerbForm=Inf	7	cop	_	_
6	primam	primus	ADJ	A1|grn1|casD|gen2	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing|NumType=Ord	7	amod	_	_
7	causam	causa	NOUN	A1|grn1|casD|gen2|vgr1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	1	csubj:pass	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj:pass	color:blue
1	relinquitur	relinquo	VERB	L3|modJ|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
2	quod	quod	SCONJ	O4	_	7	mark	_	_
3	deum	deus	NOUN	F1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	4	nsubj	_	_
4	esse	sum	AUX	N3|modH|tem1	Aspect=Imp|Tense=Pres|VerbForm=Inf	7	csubj	_	_
5	per	per	ADP	S4	_	6	case	_	_
6	se	sui	PRON	F1|grn1|casD|gen3	Case=Acc|InflClass=LatAnom|Person=3|PronType=Prs|Reflex=Yes	7	obl	_	_
7	notum	notus	ADJ	L2|modM|tem4|grp1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing|VerbForm=Part	1	csubj:pass	_	TraditionalMood=Participium|TraditionalTense=Perfectum
8	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
9	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


