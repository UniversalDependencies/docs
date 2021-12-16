---
layout: base
title:  'Statistics of punct in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `punct`

This relation is universal.

5368 nodes (6%) are attached to their parents as `punct`.

3242 instances of `punct` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.2106929955291.

The following 15 pairs of parts of speech are connected with `punct`: <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-PUNCT.html">PUNCT</a></tt> (3323; 62% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-PUNCT.html">PUNCT</a></tt> (1265; 24% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-PUNCT.html">PUNCT</a></tt> (258; 5% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-PUNCT.html">PUNCT</a></tt> (200; 4% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-PUNCT.html">PUNCT</a></tt> (126; 2% instances), <tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt>-<tt><a href="gd_arcosg-pos-PUNCT.html">PUNCT</a></tt> (75; 1% instances), <tt><a href="gd_arcosg-pos-INTJ.html">INTJ</a></tt>-<tt><a href="gd_arcosg-pos-PUNCT.html">PUNCT</a></tt> (59; 1% instances), <tt><a href="gd_arcosg-pos-X.html">X</a></tt>-<tt><a href="gd_arcosg-pos-PUNCT.html">PUNCT</a></tt> (24; 0% instances), <tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt>-<tt><a href="gd_arcosg-pos-PUNCT.html">PUNCT</a></tt> (17; 0% instances), <tt><a href="gd_arcosg-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="gd_arcosg-pos-PUNCT.html">PUNCT</a></tt> (6; 0% instances), <tt><a href="gd_arcosg-pos-PART.html">PART</a></tt>-<tt><a href="gd_arcosg-pos-PUNCT.html">PUNCT</a></tt> (5; 0% instances), <tt><a href="gd_arcosg-pos-ADP.html">ADP</a></tt>-<tt><a href="gd_arcosg-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="gd_arcosg-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="gd_arcosg-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="gd_arcosg-pos-AUX.html">AUX</a></tt>-<tt><a href="gd_arcosg-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="gd_arcosg-pos-DET.html">DET</a></tt>-<tt><a href="gd_arcosg-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 punct	color:blue
1	dè	dè	PRON	Uq	PronType=Int	2	obj	_	_
2	ghabh	gabh	VERB	V-s	Tense=Past	0	root	_	_
3	thu	thu	PRON	Pp2s	Number=Sing|Person=2	2	nsubj	_	SpaceAfter=No
4	?	?	PUNCT	Fg	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 punct	color:blue
1	turkey	turkey	NOUN	Xfe	Foreign=Yes	0	root	_	_
2	burger	burger	NOUN	Xfe	Foreign=Yes	1	flat:foreign	_	_
3	an	an	PART	Qq	PartType=Vb|PronType=Int	4	mark:prt	_	_
4	robh	bi	VERB	V-s--d	Tense=Past	1	parataxis	_	_
5	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	4	nsubj	_	_
6	math	math	ADJ	Ap	_	4	xcomp:pred	_	SpaceAfter=No
7	?	?	PUNCT	Fg	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 14 punct	color:blue
1	agus	agus	CCONJ	Cc	_	2	cc	_	_
2	ciamar	ciamar	PRON	Uq	PronType=Int	0	root	_	_
3	a	a	PART	Q-r	PartType=Vb|PronType=Rel	4	mark:prt	_	_
4	bha	bi	VERB	V-s	Tense=Past	2	acl:relcl	_	_
5	a’	an	DET	Tds	Definite=Def|Number=Sing|PronType=Art	6	det	_	_
6	homework	homework	NOUN	Xfe	Foreign=Yes	4	nsubj	_	_
7	an	an	PART	Qq	PartType=Vb|PronType=Int	9	mark:prt	_	_
8	do	do	PART	Q--s	Tense=Past	9	mark:prt	_	_
9	choimhead	coimhead	VERB	V-s	Tense=Past	6	acl:relcl	_	_
10	an	an	DET	Tdsm	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	tidsear	tidsear	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
12	ri	ri	ADP	Sp	_	13	case	_	_
13	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	9	obl	_	_
14	?	?	PUNCT	Fg	_	2	punct	_	_

~~~


