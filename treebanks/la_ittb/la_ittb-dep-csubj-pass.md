---
layout: base
title:  'Statistics of csubj:pass in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-csubj.html">csubj</a></tt>.

588 nodes (0%) are attached to their parents as `csubj:pass`.

350 instances of `csubj:pass` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.27040816326531.

The following 18 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (424; 72% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (61; 10% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (45; 8% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (19; 3% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (10; 2% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (10; 2% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-NUM.html">NUM</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-PRON.html">PRON</a></tt>-<tt><a href="la_ittb-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 csubj:pass	color:blue
1	unde	unde	ADV	O4|stRL	_	4	advmod	_	_
2	nec	nec	CCONJ	O4|stRL	_	3	advmod:emph	_	_
3	ratione	ratio	NOUN	C1|grn1|casF|gen2|comH|vgr1|stAC	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	5	obl	_	_
4	videtur	video	VERB	K3|modJ|tem1|gen6|vgr1|stAC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
5	posse	possum	VERB	N3|modH|tem1|stAV	Tense=Pres|VerbForm=Inf|VerbType=Mod|Voice=Act	4	csubj:pass	_	_
6	demonstrari	demonstro	VERB	J3|modQ|tem1|stAE	Tense=Pres|VerbForm=Inf|Voice=Pass	5	xcomp	_	_
7	an	an	SCONJ	O4|stRL	_	9	mark	_	_
8	deus	deus	PROPN	F1|grn1|casA|gen1|stNP	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	9	nsubj	_	_
9	sit	sum	VERB	N3|modB|tem1|gen6|stAV	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	csubj	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj:pass	color:blue
1	ostensum	ostendo	VERB	L2|modM|tem4|grp1|casA|gen3|stAE	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
2	autem	autem	CCONJ	O4|stRL	_	1	cc	_	_
3	est	sum	AUX	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux:pass	_	_
4	deum	deus	PROPN	F1|grn1|casD|gen1|stNP	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	7	nsubj	_	_
5	esse	sum	AUX	N3|modH|tem1|stAV	Tense=Pres|VerbForm=Inf|Voice=Act	7	cop	_	_
6	primam	primus	ADJ	A1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|NumType=Ord	7	amod	_	_
7	causam	causa	NOUN	A1|grn1|casD|gen2|vgr1|stAN	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	1	csubj:pass	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj:pass	color:blue
1	ostensum	ostendo	VERB	L2|modM|tem4|grp1|casA|gen3|stAE	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
2	autem	autem	CCONJ	O4|stRL	_	1	cc	_	_
3	est	sum	AUX	N3|modA|tem1|gen6|stAV	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux:pass	_	_
4	deum	deus	PROPN	F1|grn1|casD|gen1|stNP	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	7	nsubj	_	_
5	esse	sum	AUX	N3|modH|tem1|stAV	Tense=Pres|VerbForm=Inf|Voice=Act	7	cop	_	_
6	omnino	omnino	ADV	O4|stRL	_	7	advmod:emph	_	_
7	immutabilem	immutabilis	ADJ	C1|grn1|casD|gen1|stAN	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	1	csubj:pass	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


