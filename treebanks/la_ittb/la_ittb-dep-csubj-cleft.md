---
layout: base
title:  'Statistics of csubj:cleft in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `csubj:cleft`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-csubj.html">csubj</a></tt>.
There are also 3 other language-specific subtypes of `csubj`: <tt><a href="la_ittb-dep-csubj-pass.html">csubj:pass</a></tt>, <tt><a href="la_ittb-dep-csubj-relcl.html">csubj:relcl</a></tt>, <tt><a href="la_ittb-dep-csubj-reported.html">csubj:reported</a></tt>.

13 nodes (0%) are attached to their parents as `csubj:cleft`.

13 instances of `csubj:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.30769230769231.

The following 8 pairs of parts of speech are connected with `csubj:cleft`: <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (4; 31% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (2; 15% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (2; 15% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (1; 8% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 8% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 8% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 csubj:cleft	color:blue
1	sed	sed	CCONJ	O4|vgr1	_	2	cc	_	_
2	motus	motus	NOUN	D1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurU|Number=Sing	0	root	_	_
3	naturalis	naturalis	ADJ	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	2	amod	_	_
4	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
5	cuius	qui	PRON	F1|grn1|casB|gen1|vgr1	Case=Gen|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	6	nmod	_	_
6	principium	principium	NOUN	B1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	8	nsubj	_	_
7	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
8	forma	forma	NOUN	A1|grn1|casA|gen2	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	2	csubj:cleft	_	_
9	corporis	corpus	NOUN	C1|grn1|casB|gen3	Case=Gen|Gender=Neut|InflClass=IndEurX|Number=Sing	8	nmod	_	_
10	naturalis	naturalis	ADJ	C1|grn1|casB|gen3	Case=Gen|Gender=Neut|InflClass=IndEurI|Number=Sing	9	amod	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 13 csubj:cleft	color:blue
1	praeterea	praeterea	ADV	O4|vgr1	Compound=Yes	6	advmod	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	1	punct	_	_
3	in	in	ADP	S4	_	4	case	_	_
4	formis	forma	NOUN	A1|grn1|casO|gen2	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Plur	6	obl	_	_
5	naturalibus	naturalis	ADJ	C1|grn1|casO|gen2	Case=Abl|Gender=Fem|InflClass=IndEurI|Number=Plur	4	amod	_	_
6	ita	ita	ADV	O4	_	0	root	_	_
7	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
8	quod	quod	SCONJ	O4	_	13	mark	_	_
9	differentia	differentia	NOUN	A1|grn1|casA|gen2|vgr1	Case=Nom|Gender=Fem|InflClass=IndEurA|Number=Sing	13	nsubj	_	_
10	addita	addo	VERB	L2|modM|tem4|grp1|casA|gen2	Aspect=Perf|Case=Nom|Gender=Fem|InflClass=LatX|InflClass[nominal]=IndEurA|Number=Sing|VerbForm=Part|Voice=Pass	9	acl	_	TraditionalMood=Participium|TraditionalTense=Perfectum
11	uel	uel	CCONJ	O4|vgr1	_	12	cc	_	_
12	subtracta	subtraho	VERB	L2|modM|tem4|grp1|casA|gen2|vgr1	Aspect=Perf|Case=Nom|Gender=Fem|InflClass=LatX|InflClass[nominal]=IndEurA|Number=Sing|VerbForm=Part|Voice=Pass	10	conj	_	TraditionalMood=Participium|TraditionalTense=Perfectum
13	uariat	uario	VERB	J3|modA|tem1|gen6	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	csubj:cleft	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
14	speciem	species	NOUN	E1|grn1|casD|gen2	Case=Acc|Gender=Fem|InflClass=IndEurE|Number=Sing	13	obj	_	SpaceAfter=No
15	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 csubj:cleft	color:blue
1	ex	ex	ADP	S4|vgr2	_	3	case	_	_
2	sacris	sacer	ADJ	A1|grn1|casO|gen2	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Plur	3	amod	_	_
3	scripturis	scriptura	NOUN	A1|grn1|casO|gen2	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Plur	4	obl	_	_
4	apparet	appareo	VERB	K3|modA|tem1|gen6	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
5	deum	deus	NOUN	F1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	4	csubj:relcl	_	_
6	esse	sum	AUX	N3|modH|tem1	Aspect=Imp|Tense=Pres|VerbForm=Inf	5	cop	_	_
7	qui	qui	PRON	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	8	nsubj	_	_
8	locutus	loquor	VERB	L2|modM|tem4|grp1|casA|gen1|vgr1	Aspect=Perf|Case=Nom|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	5	csubj:cleft	_	TraditionalMood=Participium|TraditionalTense=Perfectum
9	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:pass	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
10	per	per	ADP	S4	_	11	case	_	_
11	prophetas	propheta	NOUN	A1|grn1|casM|gen1	Case=Acc|Gender=Masc|InflClass=IndEurA|Number=Plur	8	obl	_	SpaceAfter=No
12	:	:	PUNCT	Punc	_	4	punct	_	_

~~~


