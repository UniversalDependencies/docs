---
layout: base
title:  'Statistics of advmod:neg in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `advmod:neg`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_ittb-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_ittb-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="la_ittb-dep-advmod-tmod.html">advmod:tmod</a></tt>.

8994 nodes (2%) are attached to their parents as `advmod:neg`.

8628 instances of `advmod:neg` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.01912386035135.

The following 12 pairs of parts of speech are connected with `advmod:neg`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (5119; 57% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (1629; 18% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (717; 8% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (675; 8% instances), <tt><a href="la_ittb-pos-AUX.html">AUX</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (334; 4% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (323; 4% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (178; 2% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (8; 0% instances), <tt><a href="la_ittb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (7; 0% instances), <tt><a href="la_ittb-pos-ADP.html">ADP</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="la_ittb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advmod:neg	color:blue
1	quod	qui	PRON	F1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	7	nsubj	_	_
2	quidem	quidem	PART	O4	_	7	discourse	_	_
3	nobis	nos	PRON	F1|grn1|casL|gen1	Case=Dat|InflClass=LatAnom|Number=Plur|Person=1|PronType=Prs	7	obl:arg	_	_
4	circa	circa	ADP	S4	_	5	case	_	_
5	deum	deus	NOUN	F1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurO|Number=Sing	7	obl	_	_
6	non	non	PART	O4	Polarity=Neg	7	advmod:neg	_	_
7	accidit	accido	VERB	L3|modA|tem1|gen6	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	cado=null|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
8	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 advmod:neg	color:blue
1	secundum	secundum	ADP	S4	_	2	case	_	_
2	platonem	plato	PROPN	C1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurX|NameType=Giv|Number=Sing	8	obl	_	_
3	autem	autem	PART	O4	_	8	discourse	_	_
4	mouens	moueo	VERB	K2|modD|tem1|grp1|casA|gen3|vgr1	Aspect=Imp|Case=Nom|Gender=Neut|InflClass=LatE|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	8	csubj	_	TraditionalMood=Participium|TraditionalTense=Praesens
5	seipsum	seipsum	PRON	F1|grn1|casD|gen3	Case=Acc|Compound=Yes|Gender=Neut|InflClass=LatPron|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	4	obj	_	_
6	non	non	PART	O4	Polarity=Neg	8	advmod:neg	_	_
7	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
8	corpus	corpus	NOUN	C1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	0	root	_	SpaceAfter=No
9	:	:	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:neg	color:blue
1	quia	quia	SCONJ	O4	_	3	mark	_	_
2	non	non	PART	O4	Polarity=Neg	3	advmod:neg	_	_
3	semper	semper	ADV	O4	AdvType=Tim	0	root	_	_
4	est	sum	AUX	N3|modA|tem1|gen6	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
5	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


