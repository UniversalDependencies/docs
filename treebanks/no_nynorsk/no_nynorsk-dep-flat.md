---
layout: base
title:  'Statistics of flat in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="no_nynorsk-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="no_nynorsk-dep-flat-name.html">flat:name</a></tt>.

28 nodes (0%) are attached to their parents as `flat`.

28 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.75.

The following 15 pairs of parts of speech are connected with `flat`: <tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt> (5; 18% instances), <tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt> (5; 18% instances), <tt><a href="no_nynorsk-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt> (3; 11% instances), <tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (3; 11% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="no_nynorsk-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="no_nynorsk-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="no_nynorsk-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="no_nynorsk-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsk-pos-ADP.html">ADP</a></tt> (1; 4% instances), <tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsk-pos-CCONJ.html">CCONJ</a></tt> (1; 4% instances), <tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-CCONJ.html">CCONJ</a></tt> (1; 4% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 flat	color:blue
1	Eller	eller	CCONJ	konj	_	2	cc	_	_
2	1	1	NUM	det	NumType=Card	0	root	_	_
3	Kor	Kor	PROPN	subst	_	2	flat	_	_
4	9	9	NUM	det	Number=Plur|NumType=Card	2	flat	_	SpaceAfter=No
5	:	$:	PUNCT	clb	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat	color:blue
1	Eller	eller	CCONJ	konj	_	2	cc	_	_
2	1	1	NUM	det	NumType=Card	0	root	_	_
3	Kor	Kor	PROPN	subst	_	2	flat	_	_
4	9	9	NUM	det	Number=Plur|NumType=Card	2	flat	_	SpaceAfter=No
5	:	$:	PUNCT	clb	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	T.h.	t.h.	ADV	adv	Abbr=Yes	0	root	_	_
2	Lars	Lars	PROPN	subst	Gender=Masc	1	flat	_	_
3	Mattis	Mattis	PROPN	subst	Gender=Masc	1	flat	_	_
4	Horvli	Horvli	PROPN	subst	_	1	flat	_	SpaceAfter=No
5	,	$,	PUNCT	<komma>	_	7	punct	_	_
6	teknisk	teknisk	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Fem,Masc	7	amod	_	_
7	sjef	sjef	NOUN	subst	Definite=Ind|Gender=Masc	1	appos	_	_
8	Tine	Tine	PROPN	subst	_	7	nmod	_	_
9	Byrkjelo	Byrkjelo	PROPN	subst	_	8	flat:name	_	SpaceAfter=No
10	.	$.	PUNCT	clb	_	1	punct	_	_

~~~


