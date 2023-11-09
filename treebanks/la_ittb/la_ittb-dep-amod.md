---
layout: base
title:  'Statistics of amod in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `amod`

This relation is universal.

16003 nodes (4%) are attached to their parents as `amod`.

8358 instances of `amod` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.15378366556271.

The following 9 pairs of parts of speech are connected with `amod`: <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (15152; 95% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (224; 1% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (213; 1% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (203; 1% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (159; 1% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (46; 0% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-AUX.html">AUX</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 amod	color:blue
1	et	et	CCONJ	O4	_	3	cc	_	_
2	simile	similis	ADJ	C1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing	3	xcomp	_	_
3	apparet	appareo	VERB	K3|modA|tem1|gen6	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
4	in	in	ADP	S4	_	5	case	_	_
5	arte	ars	NOUN	C1|grn1|casF|gen2	Case=Abl|Gender=Fem|InflClass=IndEurI|Number=Sing	3	obl	_	_
6	gubernatoria	gubernatorius	ADJ	A1|grn1|casF|gen2	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Sing	5	amod	_	_
7	respectu	respectus	NOUN	D1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurU|Number=Sing	3	obl	_	_
8	nauifactiuae	nauifactiuus	ADJ	A1|grn1|casB|gen2|vgr1	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	7	nmod	_	SpaceAfter=No
9	;	;	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod	color:blue
1	et	et	CCONJ	O4	_	5	cc	_	_
2	sic	sic	ADV	O4	_	5	advmod	_	_
3	nihil	nihil	PRON	G1|casA|gen3|vgr1	Polarity=Neg|PronType=Ind	5	nsubj	_	_
4	inconueniens	inconueniens	ADJ	C1|grn1|casA|gen3|vgr1	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing	3	amod	_	_
5	accidit	accido	VERB	L3|modA|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	cado=null|TraditionalMood=Indicativus|TraditionalTense=Praesens
6	ponentibus	pono	VERB	L2|modD|tem1|grp1|casL|gen1	Aspect=Imp|Case=Dat|Gender=Masc|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Plur|VerbForm=Part|Voice=Act	5	ccomp	_	TraditionalMood=Participium|TraditionalTense=Praesens
7	deum	deus	NOUN	F1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	9	nsubj	_	_
8	non	non	PART	O4	Polarity=Neg	9	advmod:neg	_	_
9	esse	sum	AUX	N3|modH|tem1	Aspect=Imp|Tense=Pres|VerbForm=Inf	6	ccomp	_	SpaceAfter=No
10	:	:	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod	color:blue
1	et	et	CCONJ	O4	_	5	cc	_	_
2	sic	sic	ADV	O4	_	5	advmod	_	_
3	unum	unus	DET	F1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	5	nsubj:pass	_	_
4	infinitum	infinitus	ADJ	B1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	3	amod	_	_
5	mouetur	moueo	VERB	K3|modJ|tem1|gen6|vgr1	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
6	tempore	tempus	NOUN	C1|grn1|casF|gen3	Case=Abl|Gender=Neut|InflClass=IndEurX|Number=Sing	5	obl	_	_
7	finito	finio	VERB	M2|modM|tem4|grp1|casF|gen3	Aspect=Perf|Case=Abl|Gender=Neut|InflClass[nominal]=IndEurO|Number=Sing|VerbForm=Part|Voice=Pass	6	acl	_	Lilaflcat=LatI|SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
8	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


