---
layout: base
title:  'Statistics of iobj in UD_Kazakh'
udver: '2'
---

## Treebank Statistics: UD_Kazakh: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="kk-dep-iobj-caus.html">iobj:caus</a></tt>.

4 nodes (0%) are attached to their parents as `iobj`.

4 instances of `iobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.5.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (3; 75% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	Алайда	алайда	SCONJ	cnjadv	_	10	cc	_	_
2	партияға	партия	NOUN	n	Case=Dat	3	iobj	_	_
3	кірген	кір	VERB	v	Tense=Past|VerbForm=Part	4	acl:relcl	_	_
4	жолдастарымен	жолдас	NOUN	n	Case=Ins|Number=Plur|Number[psor]=Plur,Sing|Person[psor]=3	10	obl	_	_
5	пікірі	пікір	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	10	nsubj	_	SpaceAfter=No
6	,	,	PUNCT	cm	_	11	punct	_	_
7	қызметі	қызмет	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	5	conj	_	SpaceAfter=No
8	,	,	PUNCT	cm	_	11	punct	_	_
9	ымы-жымы	ымы-жымы	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	5	conj	_	_
10	бір	бір	NUM	num	Case=Nom|NumType=Card	0	root	_	_
11	еді	е	AUX	cop	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	cop	_	SpaceAfter=No
12	.	.	PUNCT	sent	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 iobj	color:blue
1	19	19	NUM	num	NumType=Ord	2	amod	_	_
2	ғасырдың	ғасыр	NOUN	n	Case=Gen	5	nmod:poss	_	_
3	2	2	NUM	num	NumType=Ord	5	amod	_	SpaceAfter=No
4	-	-	PUNCT	guio	_	5	punct	_	SpaceAfter=No
5	жартысынан	жарты	ADJ	adj	Case=Abl|Number[psor]=Plur,Sing|Person[psor]=3	11	nmod	_	_
6	Иран	Иран	PROPN	np	Case=Nom	7	nmod:poss	_	_
7	музыкасына	музыка	NOUN	n	Case=Dat|Number[psor]=Plur,Sing|Person[psor]=3	11	iobj	_	_
8	еуропалық	еуропалық	ADJ	adj	_	10	amod	_	_
9	музыка	музыка	NOUN	n	Case=Nom	10	nmod:poss	_	_
10	мәдениеті	мәдениет	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	11	nsubj	_	_
11	әсер	әсер	NOUN	n	Case=Nom	12	obj	_	_
12	етті	ет	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
13	.	.	PUNCT	sent	_	12	punct	_	_

~~~


