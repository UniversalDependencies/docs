---
layout: base
title:  'Statistics of acl:relcl in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="gd_arcosg-dep-acl.html">acl</a></tt>.

527 nodes (1%) are attached to their parents as `acl:relcl`.

526 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.33206831119545.

The following 13 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (443; 84% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (21; 4% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (14; 3% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (13; 2% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (10; 2% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="gd_arcosg-pos-X.html">X</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl:relcl	color:blue
1	agus	agus	CCONJ	Cc	_	4	cc	_	_
2	ciamar	ciamar	ADV	Uq	Mood=Int	4	xcomp:pred	_	_
3	a	a	PART	Q-r	PartType=Vb|PronType=Rel	4	mark:prt	_	_
4	bha	bi	VERB	V-s	Tense=Past	0	root	_	_
5	a’	an	DET	Tds	Number=Sing	6	det	_	_
6	homework	homework	NOUN	Xfe	Foreign=Yes	4	nsubj	_	_
7	an	an	PART	Qq	Mood=Int|PartType=Vb|PronType=Int	9	mark:prt	_	_
8	do	do	PART	Q--s	Tense=Past	9	mark:prt	_	_
9	choimhead	coimhead	VERB	V-s	Tense=Past	6	acl:relcl	_	_
10	an	an	DET	Tdsm	Gender=Masc|Number=Sing	11	det	_	_
11	tidsear	tidsear	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	_
12	ris	ri	ADP	Pr3sm	Gender=Masc|Number=Sing|Person=3	9	obl	_	SpaceAfter=No
13	?	?	PUNCT	Fg	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 acl:relcl	color:blue
1	Rinn	dèan	VERB	V-s	Tense=Past	0	root	_	_
2	Mairearad	Mairearad	PROPN	Nn-fn	Case=Nom|Gender=Fem	1	nsubj	_	_
3	marbhrann	marbhrann	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	1	obj	_	_
4	do	do	ADP	Sp	_	5	case	_	_
5	Ailean	Ailean	PROPN	Nn-md	Case=Dat|Gender=Masc	3	obl	_	SpaceAfter=No
6	,	,	PUNCT	Fi	_	7	punct	_	_
7	mac	mac	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	5	appos	_	_
8	Lachlainn	Lachlainn	PROPN	Nn-mg	Case=Gen|Gender=Masc	7	nmod	_	_
9	Bhròlais	Bròlais	PROPN	Nt	_	7	nmod	_	SpaceAfter=No
10	,	,	PUNCT	Fi	_	7	punct	_	_
11	a	a	PART	Q-r	PartType=Vb|PronType=Rel	12	mark:prt	_	_
12	chaochail	caochail	VERB	V-s	Tense=Past	5	acl:relcl	_	_
13	an	an	ADP	Sp	_	14	case	_	_
14	1722	1722	NUM	Mn	_	12	obl	_	SpaceAfter=No
15	.	.	PUNCT	Fe	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 acl:relcl	color:blue
1	Thogadh	tog	VERB	V-h	Mood=Cnd	0	root	_	_
2	i	i	PRON	Pp3sf	Gender=Fem|Number=Sing|Person=3	1	nsubj	_	_
3	meur	meur	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	1	obj	_	_
4	a	a	PART	Q-r	PartType=Vb|PronType=Rel	5	mark:prt	_	_
5	bha	bi	VERB	V-s	Tense=Past	1	acl:relcl	_	_
6	air	air	PART	Sa	_	8	case	_	_
7	a	a	DET	Dp3sf	Gender=Fem|Number=Sing|Person=3	8	obj	_	_
8	fiaradh	fiar	NOUN	Nv	VerbForm=Inf	5	xcomp:pred	_	_
9	le	le	ADP	Sp	_	10	case	_	_
10	lòinidh	lòinidh	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	8	obl	_	_
11	is	is	CCONJ	Cc	_	13	cc	_	_
12	le	le	ADP	Sp	_	13	case	_	_
13	obair	obair	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	10	conj	_	SpaceAfter=No
14	.	.	PUNCT	Fe	_	1	punct	_	_

~~~


