---
layout: base
title:  'Statistics of advmod:neg in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-advmod.html">advmod</a></tt>.
There are also 1 other language-specific subtypes of `advmod`: <tt><a href="la_ittb-dep-advmod-emph.html">advmod:emph</a></tt>.

8994 nodes (2%) are attached to their parents as `advmod:neg`.

8805 instances of `advmod:neg` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.88837002446075.

The following 11 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (5061; 56% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (1274; 14% instances), <tt><a href="la_ittb-pos-AUX.html">AUX</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (894; 10% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (670; 7% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (648; 7% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (250; 3% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (116; 1% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (45; 1% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (33; 0% instances), <tt><a href="la_ittb-pos-ADP.html">ADP</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="la_ittb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advmod:neg	color:blue
1	quod	qui	PRON	F1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	7	nsubj	_	_
2	quidem	quidem	ADV	O4	_	7	advmod	_	_
3	nobis	nos	PRON	F1|grn1|casL|gen1	Case=Dat|InflClass=LatAnom|Number=Plur|PronType=Prs	7	obl:arg	_	_
4	circa	circa	ADP	S4	AdpType=Prep	5	case	_	_
5	deum	deus	PROPN	F1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	7	obl	_	_
6	non	non	PART	O4	Polarity=Neg	7	advmod:neg	_	_
7	accidit	accido	VERB	L3|modA|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	cado=null|SpaceAfter=No
8	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 advmod:neg	color:blue
1	secundum	secundum	ADP	S4	AdpType=Prep	2	case	_	_
2	platonem	plato	PROPN	C1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurX|Number=Sing	8	obl	_	_
3	autem	autem	CCONJ	O4	_	8	cc	_	_
4	mouens	moueo	VERB	K2|modD|tem1|grp1|casA|gen3|vgr1	Aspect=Imp|Case=Nom|Gender=Neut|InflClass=LatE|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	8	csubj	_	_
5	seipsum	seipsum	PRON	F1|grn1|casD|gen3	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Prs|Reflex=Yes	4	obj	_	_
6	non	non	PART	O4	Polarity=Neg	8	advmod:neg	_	_
7	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	8	cop	_	_
8	corpus	corpus	NOUN	C1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	0	root	_	SpaceAfter=No
9	:	:	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 advmod:neg	color:blue
1	quod	qui	PRON	F1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	2	nsubj	_	_
2	maius	magnus	ADJ	C1|grn2|casA|gen3|vgr2	Case=Nom|Degree=Cmp|Gender=Neut|InflClass=IndEurX|Number=Sing	0	root	_	_
3	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	2	cop	_	_
4	euidenter	euidenter	ADV	C1|grn1|casG	_	2	advmod	_	_
5	eo	is	PRON	F1|grn1|casF|gen3	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem,Prs	2	obl	_	_
6	quod	qui	PRON	F1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	7	nsubj	_	_
7	potest	possum	VERB	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod|Voice=Act	5	acl:relcl	_	_
8	cogitari	cogito	VERB	J3|modQ|tem1	Aspect=Imp|Case=Acc|Gender=Neut|InflClass=LatA|InflClass[nominal]=Ind|Number=Sing|VerbForm=Inf|Voice=Pass	7	xcomp	_	_
9	non	non	PART	O4	Polarity=Neg	10	advmod:neg	_	_
10	esse	sum	AUX	N3|modH|tem1	InflClass=LatAnom|InflClass[nominal]=Ind|VerbForm=Inf	8	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


