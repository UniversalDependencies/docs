---
layout: base
title:  'Statistics of nmod:gen in UD_Breton-KEB'
udver: '2'
---

## Treebank Statistics: UD_Breton-KEB: Relations: `nmod:gen`

This relation is a language-specific subtype of <tt><a href="br_keb-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="br_keb-dep-nmod-poss.html">nmod:poss</a></tt>.

378 nodes (4%) are attached to their parents as `nmod:gen`.

377 instances of `nmod:gen` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.64285714285714.

The following 10 pairs of parts of speech are connected with `nmod:gen`: <tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt> (296; 78% instances), <tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="br_keb-pos-PROPN.html">PROPN</a></tt> (66; 17% instances), <tt><a href="br_keb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="br_keb-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="br_keb-pos-PRON.html">PRON</a></tt>-<tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="br_keb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="br_keb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="br_keb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod:gen	color:blue
1	E	e	ADP	pr	_	3	case	_	_
2	r	an	DET	det	_	3	det	_	_
3	sal	sal	NOUN	n	Gender=Fem|Number=Sing	7	obl	_	_
4	dour	dour	NOUN	n	Gender=Masc|Number=Sing	3	nmod:gen	_	_
5	en	en	AUX	vpart	Reflex=Yes	7	aux	_	_
6	em	em	X	x	_	5	fixed	_	_
7	walc'han	gwalc’hañ	VERB	vblex	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	sent	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod:gen	color:blue
1	Bras	bras	ADJ	adj	_	0	root	_	_
2	eo	bezañ	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	ti	ti	NOUN	n	Gender=Masc|Number=Sing	1	nsubj	_	_
4	Herve	Herve	PROPN	np	Gender=Masc|Number=Sing	3	nmod:gen	_	SpaceAfter=No
5	.	.	PUNCT	sent	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:gen	color:blue
1	Kinnigoù	kinnig	NOUN	n	Gender=Masc|Number=Plur	0	root	_	_
2	pennañ	pennañ	ADJ	adj	_	1	amod	_	_
3	politikerezh	politikerezh	NOUN	n	Gender=Masc|Number=Sing	1	nmod:gen	_	_
4	yezh	yezh	NOUN	n	Gender=Fem|Number=Sing	3	nmod:gen	_	_
5	Rannvro	rannvro	NOUN	n	Gender=Fem|Number=Sing	6	nmod:gen	_	_
6	Breizh	Breizh	PROPN	np	Number=Sing	4	flat:name	_	_
7	evit	evit	ADP	pr	_	9	case	_	_
8	ar	an	DET	det	_	9	det	_	_
9	brezhoneg	brezhoneg	NOUN	n	Gender=Masc|Number=Sing	3	nmod	_	_

~~~


