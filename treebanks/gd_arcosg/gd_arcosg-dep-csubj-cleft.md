---
layout: base
title:  'Statistics of csubj:cleft in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `csubj:cleft`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="gd_arcosg-dep-csubj-cop.html">csubj:cop</a></tt>.

299 nodes (0%) are attached to their parents as `csubj:cleft`.

299 instances of `csubj:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.17725752508361.

The following 13 pairs of parts of speech are connected with `csubj:cleft`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (163; 55% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (69; 23% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (36; 12% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (7; 2% instances), <tt><a href="gd_arcosg-pos-X.html">X</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="gd_arcosg-pos-ADP.html">ADP</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj:cleft	color:blue
1	an	is	AUX	Wpdqa	Mood=Int|Polarity=Aff|Tense=Pres	6	cop	_	_
2	an	an	ADP	Sp	_	1	fixed	_	_
3	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	1	fixed	_	_
4	aig	aig	ADP	Sp	_	6	case	_	_
5	na	an	DET	Tdp	Number=Plur	6	det	_	_
6	bales	bales	NOUN	Xfe	Foreign=Yes	0	root	_	_
7	a	a	PART	Q-r	PartType=Vb|PronType=Rel	8	mark:prt	_	_
8	bha	bi	VERB	V-s	Tense=Past	6	csubj:cleft	_	_
9	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	8	nsubj	_	SpaceAfter=No
10	?	?	PUNCT	Fg	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 csubj:cleft	color:blue
1	‘s	's	CCONJ	Cc	_	2	cc	_	_
2	dè	dè	PRON	Uq	Mood=Int	0	root	_	_
3	bha	bi	VERB	V-s	Tense=Past	2	csubj:cleft	_	_
4	sibhse	sibh	PRON	Pp2p--e	Form=Emp|Number=Plur|Person=2	3	nsubj	_	_
5	a’	ag	PART	Sa	_	6	case	_	_
6	dèanamh	dèan	NOUN	Nv	VerbForm=Vnoun	3	xcomp:pred	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj:cleft	color:blue
1	an	is	AUX	Wpdqa	Mood=Int|Polarity=Aff|Tense=Pres	3	cop	_	_
2	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	1	fixed	_	_
3	[Name]	[Name]	PROPN	Nn	_	0	root	_	_
4	[Name]	[Name]	PROPN	Nn	_	3	flat	_	_
5	a	a	PART	Q-r	PartType=Vb|PronType=Rel	6	mark:prt	_	_
6	th’	bi	VERB	V-p	Tense=Pres	3	csubj:cleft	_	_
7	aig	aig	ADP	Sp	_	8	case	_	_
8	i	i	PRON	Pp3sf	Gender=Fem|Number=Sing|Person=3	6	xcomp:pred	_	_
9	?	?	PUNCT	Fg	_	3	punct	_	_

~~~


