---
layout: base
title:  'Statistics of csubj:cop in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `csubj:cop`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="gd_arcosg-dep-csubj-cleft.html">csubj:cleft</a></tt>.

75 nodes (0%) are attached to their parents as `csubj:cop`.

75 instances of `csubj:cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.52.

The following 15 pairs of parts of speech are connected with `csubj:cop`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (25; 33% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (15; 20% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (6; 8% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (5; 7% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (4; 5% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (4; 5% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (3; 4% instances), <tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="gd_arcosg-pos-AUX.html">AUX</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="gd_arcosg-pos-X.html">X</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj:cop	color:blue
1	's	is	AUX	Wp-i	_	2	cop	_	_
2	dòcha	dòcha	NOUN	Uf	_	0	root	_	_
3	gu	gu	PART	Qa	PartType=Ad	4	mark:prt	_	_
4	robh	bi	VERB	V-s--d	Tense=Past	2	csubj:cop	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj:cop	color:blue
1	'Se	is	AUX	Wp-i-3	_	3	cop	_	_
2	“	“	PUNCT	Fq	_	3	punct	_	SpaceAfter=No
3	Bodach	bodach	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
4	Ròcabarraigh	Ròcabarraigh	PROPN	Nt	_	3	nmod	_	SpaceAfter=No
5	"	"	PUNCT	Fz	_	3	punct	_	_
6	is	is	AUX	Wpr	_	7	cop	_	_
7	ainm	ainm	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	3	csubj:cop	_	_
8	dhan	do	ADP	Spa-s	_	9	case	_	_
9	sgeulachd	sgeulachd	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	Fe	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj:cop	color:blue
1	gu	gu	PART	Ua	PartType=Ad	2	mark:prt	_	_
2	dearbha	dearbha	ADV	Rg	_	4	advmod	_	_
3	's	is	AUX	Wp-i	_	4	cop	_	_
4	math	math	ADJ	Ap	_	0	root	_	_
5	gun	gun	PART	Qa	_	7	mark:prt	_	_
6	d’	d'	PART	Q--s	Tense=Past	7	mark:prt	_	_
7	fhuair	faigh	VERB	V-s	Tense=Past	4	csubj:cop	_	_
8	sinn	sinn	PRON	Pp1p	Number=Plur|Person=1	7	nsubj	_	_
9	a	a	DET	Dp3sm	Gender=Masc|Number=Sing|Person=3	10	obj	_	_
10	pheantadh	peant	NOUN	Nv	VerbForm=Inf	7	xcomp	_	_
11	Disathairne	disathairne	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	10	obl:tmod	_	_

~~~


