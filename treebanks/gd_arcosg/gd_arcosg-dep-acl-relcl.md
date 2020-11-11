---
layout: base
title:  'Statistics of acl:relcl in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="gd_arcosg-dep-acl.html">acl</a></tt>.

838 nodes (1%) are attached to their parents as `acl:relcl`.

837 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.56205250596659.

The following 18 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (658; 79% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (63; 8% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (29; 3% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (22; 3% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (17; 2% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (16; 2% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="gd_arcosg-pos-X.html">X</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-ADP.html">ADP</a></tt> (1; 0% instances).


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
12	ri	ri	ADP	Sp	_	13	case	_	_
13	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	9	obl	_	_
14	?	?	PUNCT	Fg	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 acl:relcl	color:blue
1	an	an	ADP	Sp	_	3	reparandum	_	_
2	tac	tac	X	Xsi	_	1	fixed	_	_
3	an	an	ADP	Sp	_	7	xcomp:pred	_	_
4	taca	taca	ADP	Nf	_	3	fixed	_	_
5	ris	ri	ADP	Sp	_	3	fixed	_	_
6	na	na	PART	Q-r	PartType=Vb|PronType=Rel	7	mark:prt	_	_
7	bha	bi	VERB	V-s	Tense=Past	0	root	_	_
8	si	si	X	Xsi	_	7	nsubj	_	_
9	na	na	PART	Q-r	PartType=Vb|PronType=Rel	10	mark:prt	_	_
10	bhathar	bathar	VERB	V-s0	Person=0|Tense=Past	7	acl:relcl	_	_
11	a'	ag	PART	Sa	_	12	case	_	_
12	toir	toir	NOUN	Nv	VerbForm=Vnoun	10	xcomp	_	_
13	a-steach	a-steach	ADV	Rs	_	12	advmod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl:relcl	color:blue
1	Is	is	AUX	Wp-i	Tense=Pres	2	cop	_	_
2	iongantach	iongantach	ADJ	Ap	_	0	root	_	_
3	na	an	DET	Tdpf	Gender=Fem|Number=Plur	4	det	_	_
4	freagairtean	freagairt	NOUN	Ncpfn	Case=Nom|Gender=Fem|Number=Plur	2	csubj:cop	_	_
5	a	a	PART	Q-r	PartType=Vb|PronType=Rel	6	mark:prt	_	_
6	thàinig	thig	VERB	V-s	Tense=Past	2	acl:relcl	_	SpaceAfter=No
7	.	.	PUNCT	Fe	_	2	punct	_	_

~~~


