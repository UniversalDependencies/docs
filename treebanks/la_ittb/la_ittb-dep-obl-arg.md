---
layout: base
title:  'Statistics of obl:arg in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-obl.html">obl</a></tt>.

5417 nodes (2%) are attached to their parents as `obl:arg`.

2775 instances of `obl:arg` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.34779398190881.

The following 15 pairs of parts of speech are connected with `obl:arg`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (3322; 61% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (1239; 23% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (393; 7% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (263; 5% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (105; 2% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NUM.html">NUM</a></tt> (52; 1% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (24; 0% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-ADV.html">ADV</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:arg	color:blue
1	ponam	pono	VERB	L3|modA|tem3|gen4	Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	_
2	universos	universus	ADJ	B1|grn1|casM|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	3	amod	_	_
3	filios	filius	NOUN	B1|grn1|casM|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	1	obj	_	_
4	tuos	tuus	ADJ	B1|grn1|casM|gen1	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Poss=Yes	3	amod	_	_
5	doctos	doceo	VERB	K2|modM|tem4|grp1|casM|gen1	Aspect=Perf|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	1	xcomp	_	_
6	a	ab	ADP	S4|vgr1	AdpType=Prep	7	case	_	_
7	domino	dominus	NOUN	B1|grn1|casF|gen1	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing	5	obl:arg	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obl:arg	color:blue
1	omne	omnis	PRON	C1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Ind	7	nsubj:pass	_	_
2	quod	qui	PRON	F1|grn1|casA|gen3	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|PronType=Rel	3	nsubj:pass	_	_
3	movetur	moveo	VERB	K3|modJ|tem1|gen6|vgr1	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	1	acl:relcl	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	3	punct	_	_
5	ab	ab	ADP	S4|vgr2	AdpType=Prep	6	case	_	_
6	alio	alius	PRON	F1|grn1|casF|gen3	Case=Abl|Degree=Pos|Gender=Neut|Number=Sing|PronType=Ind	7	obl:arg	_	_
7	movetur	moveo	VERB	K3|modJ|tem1|gen6|vgr1	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 obl:arg	color:blue
1	nisi	nisi	SCONJ	O4	_	2	mark	_	_
2	doceat	doceo	VERB	K3|modB|tem1|gen6	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	ficte	ficte	ADV	L2|modM|tem4|grp1|casG	Degree=Pos	2	advmod	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	8	punct	_	_
5	quod	qui	PRON	F1|grn1|casD|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|PronType=Rel	10	obj	_	_
6	de	de	ADP	S4	AdpType=Prep	7	case	_	_
7	deo	deus	PROPN	F1|grn1|casF|gen1	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing	10	obl:arg	_	_
8	nefas	nefas	NOUN	G1	_	2	conj	_	_
9	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
10	dicere	dico	VERB	N3|modH|tem1	Tense=Pres|VerbForm=Inf|Voice=Act	8	csubj	_	SpaceAfter=No
11	.	.	PUNCT	Punc	_	2	punct	_	_

~~~


