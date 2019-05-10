---
layout: base
title:  'Statistics of expl in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `expl`

This relation is universal.
There are 1 language-specific subtypes of `expl`: <tt><a href="de_hdt-dep-expl-pv.html">expl:pv</a></tt>.

528 nodes (0%) are attached to their parents as `expl`.

358 instances of `expl` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.74621212121212.

The following 8 pairs of parts of speech are connected with `expl`: <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (282; 53% instances), <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (144; 27% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (78; 15% instances), <tt><a href="de_hdt-pos-AUX.html">AUX</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (19; 4% instances), <tt><a href="de_hdt-pos-ADV.html">ADV</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 expl	color:blue
1	Push	Push	X	FM	Case=Nom|Person=3	3	nsubj	_	_
2	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	_
3	tot	tot	ADJ	ADJD	Degree=Pos	0	root	_	_
4	,	,	PUNCT	$,	_	6	punct	_	_
5	es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3	6	expl	_	_
6	lebe	leben	VERB	VVFIN	Mood=Sub|Number=Sing|Person=3|Tense=Pres	3	conj	_	_
7	AID	AID	X	FM	Case=Nom|Person=3	6	nsubj	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 expl	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 expl	color:blue
1	Ziel	Ziel	NOUN	NN	Gender=Neut|Number=Sing|Person=3	0	root	_	_
2	sei	sein	AUX	VAFIN	Mood=Sub|Number=Sing|Person=3|Tense=Pres	1	cop	_	_
3	es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3	1	expl	_	_
4	,	,	PUNCT	$,	_	10	punct	_	_
5	illegale	illegal	ADJ	ADJA	Degree=Pos|Number=Plur	8	amod	_	_
6	und	und	CCONJ	KON	_	7	cc	_	_
7	schädliche	schädlich	ADJ	ADJA	Degree=Pos|Number=Plur	5	conj	_	_
8	Berichte	Bericht	NOUN	NN	Gender=Masc|Number=Plur|Person=3	10	obj	_	_
9	zu	zu	PART	PTKZU	_	10	mark	_	_
10	verhindern	verhindern	VERB	VVINF	_	1	csubj	_	_
11	.	.	PUNCT	$.	_	1	punct	_	_

~~~


