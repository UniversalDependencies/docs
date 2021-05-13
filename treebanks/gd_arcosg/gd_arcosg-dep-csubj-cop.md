---
layout: base
title:  'Statistics of csubj:cop in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `csubj:cop`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="gd_arcosg-dep-csubj-cleft.html">csubj:cleft</a></tt>.

92 nodes (0%) are attached to their parents as `csubj:cop`.

92 instances of `csubj:cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.03260869565217.

The following 14 pairs of parts of speech are connected with `csubj:cop`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (35; 38% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (14; 15% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (10; 11% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (7; 8% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (6; 7% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (5; 5% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (4; 4% instances), <tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="gd_arcosg-pos-X.html">X</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj:cop	color:blue
1	's	is	AUX	Wp-i	Tense=Pres	2	cop	_	_
2	dòcha	dòcha	NOUN	Uf	_	0	root	_	_
3	gu	gu	PART	Qa	PartType=Cmpl	4	mark:prt	_	_
4	robh	bi	VERB	V-s--d	Tense=Past	2	csubj:cop	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 csubj:cop	color:blue
1	is	is	AUX	Wp-i	Tense=Pres	4	cop	_	_
2	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	1	fixed	_	_
3	“	“	PUNCT	Fq	_	4	punct	_	SpaceAfter=No
4	Bodach	bodach	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
5	Ròcabarraigh	Ròcabarraigh	PROPN	Nt	_	4	nmod	_	SpaceAfter=No
6	"	"	PUNCT	Fz	_	4	punct	_	_
7	is	is	AUX	Wpr	PronType=Rel|Tense=Pres	8	cop	_	_
8	ainm	ainm	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	4	csubj:cop	_	_
9	do	do	ADP	Sp	_	11	case	_	_
10	an	an	DET	Tds	Number=Sing	11	det	_	_
11	sgeulachd	sgeulachd	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
12	.	.	PUNCT	Fe	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 csubj:cop	color:blue
1	Nach	is	AUX	Wpdin	Polarity=Neg|Tense=Pres	2	cop	_	_
2	tu	thu	PRON	Pp2s	Number=Sing|Person=2	0	root	_	_
3	bha	bi	VERB	V-s	Tense=Past	2	csubj:cop	_	_
4	gun	gun	ADP	Sp	_	5	case	_	_
5	tonaisg	tonaisg	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	3	xcomp:pred	_	SpaceAfter=No
6	,	,	PUNCT	Fi	_	2	punct	_	_
7	ge-ta	ge-ta	ADV	Rg	_	2	advmod	_	SpaceAfter=No
8	.	.	PUNCT	Fe	_	2	punct	_	SpaceAfter=No
9	"	"	PUNCT	Fz	_	2	punct	_	_

~~~


