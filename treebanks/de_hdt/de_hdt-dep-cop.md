---
layout: base
title:  'Statistics of cop in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `cop`

This relation is universal.

4262 nodes (1%) are attached to their parents as `cop`.

2420 instances of `cop` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.56968559361802.

The following 9 pairs of parts of speech are connected with `cop`: <tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (2441; 57% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (1602; 38% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (77; 2% instances), <tt><a href="de_hdt-pos-ADV.html">ADV</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (76; 2% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (21; 0% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (21; 0% instances), <tt><a href="de_hdt-pos-NUM.html">NUM</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (14; 0% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (9; 0% instances), <tt><a href="de_hdt-pos-ADP.html">ADP</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	Webwasher.com	Webwasher.com	PROPN	NE	Case=Nom|Number=Sing|Person=3	4	nsubj	_	_
2	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	cop	_	_
3	ein	ein	DET	ART	Case=Nom|Gender=Neut|Number=Sing	4	det	_	_
4	Spinoff	Spinoff	NOUN	NN	Case=Nom|Person=3	0	root	_	_
5	von	von	ADP	APPR	Case=Dat	6	case	_	_
6	Siemens	Siemens	PROPN	NE	Case=Dat|Number=Sing|Person=3	4	nmod	_	_
7	.	.	PUNCT	$.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop	color:blue
1	Außer	Außer	ADP	APPR	Case=Dat	2	case	_	_
2	Spesen	Spesen	NOUN	NN	Case=Dat|Person=3	3	nmod	_	_
3	nichts	nichts	PRON	PIS	Gender=Neut|Number=Sing|Person=3	0	root	_	_
4	gewesen	sein	AUX	VAPP	_	3	cop	_	_
5	(	(	PUNCT	$(	_	6	punct	_	_
6	Christiane	Christiane	PROPN	NE	Number=Sing|Person=3	3	orphan	_	_
7	Schulzki-Haddouti	Schulzki-Haddouti	PROPN	NE	Person=3	6	flat:name	_	_
8	)	)	PUNCT	$(	_	6	punct	_	_

~~~


