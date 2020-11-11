---
layout: base
title:  'Statistics of xcomp:obj in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `xcomp:obj`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `xcomp`: <tt><a href="fr_spoken-dep-xcomp-obl.html">xcomp:obl</a></tt>, <tt><a href="fr_spoken-dep-xcomp-pred.html">xcomp:pred</a></tt>.

448 nodes (1%) are attached to their parents as `xcomp:obj`.

447 instances of `xcomp:obj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.65848214285714.

The following 7 pairs of parts of speech are connected with `xcomp:obj`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (428; 96% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (8; 2% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (7; 2% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp:obj	color:blue
1	euh	euh	INTJ	_	_	3	discourse	_	_
2	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	sais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	pas	pas	ADV	_	Polarity=Neg	3	advmod	_	_
5	si	si	SCONJ	_	_	7	mark	_	_
6	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	7	nsubj	_	_
7	voulez	vouloir	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	3	ccomp:obj	_	_
8	savoir	savoir	VERB	_	VerbForm=Inf	7	xcomp:obj	_	_
9	pourquoi	pourquoi	PRON	_	_	8	obj	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 xcomp:obj	color:blue
1	mais	mais	CCONJ	_	_	2	cc	_	_
2	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	aussi	aussi	ADV	_	_	2	advmod	_	_
4	être	être	AUX	_	VerbForm=Inf	5	cop	_	_
5	réaliste	réaliste	ADJ	_	Number=Sing	2	xcomp:obj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp:obj	color:blue
1	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	2	nsubj	_	_
2	allez	aller	VERB	ETRE	Number=Plur|Person=2	0	root	_	_
3	être	être	AUX	_	VerbForm=Inf	4	cop	_	_
4	médecin	médecin	NOUN	_	Gender=Masc|Number=Sing	2	xcomp:obj	_	_
5	en	en	ADP	_	_	6	case	_	_
6	France	France	PROPN	_	_	4	nmod	_	_
7	en	en	ADP	_	_	8	case	_	_
8	hôpital	hôpital	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	_

~~~


