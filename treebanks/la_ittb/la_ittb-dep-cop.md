---
layout: base
title:  'Statistics of cop in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `cop`

This relation is universal.
There are 1 language-specific subtypes of `cop`: <tt><a href="la_ittb-dep-cop-outer.html">cop:outer</a></tt>.

13516 nodes (3%) are attached to their parents as `cop`.

9542 instances of `cop` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.48986386504883.

The following 11 pairs of parts of speech are connected with `cop`: <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (5299; 39% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (5242; 39% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (1330; 10% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (936; 7% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (439; 3% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (234; 2% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (17; 0% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (10; 0% instances), <tt><a href="la_ittb-pos-AUX.html">AUX</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="la_ittb-pos-ADP.html">ADP</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-X.html">X</a></tt>-<tt><a href="la_ittb-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	quis	qui	DET	F1|grn1|casA|gen1|varA	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	2	det	_	_
2	modus	modus	NOUN	B1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurO|Number=Sing	4	nsubj	_	_
3	sit	sum	AUX	N3|modB|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	4	cop	_	_
4	possibilis	possibilis	ADJ	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	0	root	_	_
5	diuinae	diuinus	ADJ	A1|grn1|casB|gen2	Case=Gen|Gender=Fem|InflClass=IndEurA|Number=Sing	6	amod	_	_
6	ueritatis	ueritas	NOUN	C1|grn1|casB|gen2|vgr1	Case=Gen|Gender=Fem|InflClass=IndEurX|Number=Sing	7	nsubj:pass	_	_
7	manifestandae	manifesto	VERB	J2|modO|grp1|casB|gen2	Aspect=Prosp|Case=Gen|Gender=Fem|InflClass=LatA|InflClass[nominal]=IndEurA|Number=Sing|VerbForm=Part|Voice=Pass	2	acl	_	SpaceAfter=No|TraditionalMood=Gerundivum
8	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	finis	finis	NOUN	C1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=IndEurI|Number=Sing	4	nsubj	_	_
2	enim	enim	PART	O4	_	4	discourse	_	_
3	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	4	cop	_	_
4	bonum	bonum	NOUN	B1|grn1|casA|gen3	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	0	root	_	_
5	uniuscuiusque	unusquisque	DET	F1|grn1|casB|gen3|vgr1	Case=Gen|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Ind	4	nmod	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 cop	color:blue
1	quae	qui	PRON	F1|grn1|casA|gen2|vgr1	Case=Nom|Gender=Fem|InflClass=LatPron|Number=Sing|PronType=Rel	6	nsubj	_	_
2	tamen	tamen	ADV	O4	Form=Emp	6	advmod	_	_
3	in	in	ADP	S4	_	4	case	_	_
4	rebus	res	NOUN	E1|grn1|casO|gen2	Case=Abl|Gender=Fem|InflClass=IndEurE|Number=Plur	6	obl	_	_
5	diuinis	diuinus	ADJ	A1|grn1|casO|gen2|vgr1	Case=Abl|Gender=Fem|InflClass=IndEurA|Number=Plur	4	amod	_	_
6	deficiens	deficio	VERB	L2|modD|tem1|grp1|casA|gen2	Aspect=Imp|Case=Nom|Gender=Fem|InflClass=LatX|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	TraditionalMood=Participium|TraditionalTense=Praesens
7	est	sum	AUX	N3|modA|tem1|gen6	InflClass=LatAnom|Number=Sing|VerbForm=Fin	6	cop	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


