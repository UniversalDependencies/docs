---
layout: base
title:  'Statistics of csubj in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="de_hdt-dep-csubj-pass.html">csubj:pass</a></tt>.

1004 nodes (0%) are attached to their parents as `csubj`.

616 instances of `csubj` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.2659362549801.

The following 21 pairs of parts of speech are connected with `csubj`: <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-VERB.html">VERB</a></tt> (462; 46% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-VERB.html">VERB</a></tt> (289; 29% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-VERB.html">VERB</a></tt> (128; 13% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-VERB.html">VERB</a></tt> (31; 3% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (29; 3% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (21; 2% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (12; 1% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="de_hdt-pos-ADV.html">ADV</a></tt>-<tt><a href="de_hdt-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-ADV.html">ADV</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 csubj	color:blue
1	Napster	Napster	PROPN	NE	Case=Dat|Number=Sing|Person=3	2	obj	_	_
2	gelang	gelingen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
3	es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3	2	expl	_	_
4	,	,	PUNCT	$,	_	9	punct	_	_
5	diese	diese	DET	PDAT	Case=Acc|Gender=Fem|Number=Sing	6	det	_	_
6	Entscheidung	Entscheidung	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	9	obj	_	_
7	aussetzen	aussetzen	VERB	VVINF	_	9	xcomp	_	_
8	zu	zu	PART	PTKZU	_	9	mark	_	_
9	lassen	lassen	VERB	VVINF	_	2	csubj	_	_
10	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 csubj	color:blue
1	Denen	Denen	PRON	PDS	Case=Dat|Number=Plur|Person=3	5	obj	_	_
2	sei	sein	AUX	VAFIN	Mood=Sub|Number=Sing|Person=3|Tense=Pres	5	cop	_	_
3	es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3	5	expl	_	_
4	zu	zu	ADV	PTKA	_	5	advmod	_	_
5	mühsam	mühsam	ADJ	ADJD	Degree=Pos	0	root	_	_
6	,	,	PUNCT	$,	_	9	punct	_	_
7	Kopierschutz-Codes	Kopierschutz-Codes	X	FM	Person=3	9	obj	_	_
8	zu	zu	PART	PTKZU	_	9	mark	_	_
9	knacken	knacken	VERB	VVINF	_	5	csubj	_	_
10	.	.	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 csubj	color:blue
1	Die	Die	DET	ART	Case=Nom|Gender=Fem|Number=Sing	2	det	_	_
2	Annahme	Annahme	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	0	root	_	_
3	war	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	cop	_	_
4	,	,	PUNCT	$,	_	7	punct	_	_
5	dass	dass	SCONJ	KOUS	_	7	mark	_	_
6	jeder	jeder	PRON	PIS	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	nsubj	_	_
7	profitieren	profitieren	VERB	VVINF	_	2	csubj	_	_
8	würde	werden	AUX	VAFIN	Mood=Sub|Number=Sing|Person=3|Tense=Pres	7	aux	_	_
9	.	.	PUNCT	$.	_	2	punct	_	_

~~~


