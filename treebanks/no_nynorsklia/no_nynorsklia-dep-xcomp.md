---
layout: base
title:  'Statistics of xcomp in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `xcomp`

This relation is universal.

102 nodes (1%) are attached to their parents as `xcomp`.

95 instances of `xcomp` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.92156862745098.

The following 14 pairs of parts of speech are connected with `xcomp`: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (35; 34% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (26; 25% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (19; 19% instances), <tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	vart	bli	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
2	du	du	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	1	nsubj	_	_
3	sliten	sliten	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	1	xcomp	_	_
4	.	$.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	ja	ja	INTJ	_	_	6	discourse	_	_
2	dei	dei	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=3|PronType=Prs	6	parataxis:deletion	_	_
3	e	e	X	_	_	6	discourse:filler	_	_
4	#	#	PUNCT	_	_	6	punct	_	_
5	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	_	_
6	blei	bli	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	slutt	slute	VERB	_	VerbForm=Part	6	xcomp	_	_
8	med	med	ADP	_	_	9	case	_	_
9	mjølketransporten	mjølketransport	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	6	obl	_	_
10	og	og	CCONJ	_	_	6	cc	_	_
11	.	$.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 xcomp	color:blue
1	men	men	CCONJ	_	_	3	cc	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	obl	_	_
3	hadde	ha	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
5	veldig	veldig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	6	advmod	_	_
6	moro	moro	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	3	xcomp	_	_
7	av	av	ADP	_	_	2	case	_	_
8	for	for	CCONJ	_	_	9	cc	_	_
9	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	conj	_	_
10	at	at	SCONJ	_	_	9	parataxis	_	_
11	.	$.	PUNCT	_	_	3	punct	_	_

~~~


