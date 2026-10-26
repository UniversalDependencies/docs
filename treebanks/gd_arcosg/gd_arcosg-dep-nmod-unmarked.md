---
layout: base
title:  'Statistics of nmod:unmarked in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `nmod:unmarked`

This relation is a language-specific subtype of <tt><a href="gd_arcosg-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="gd_arcosg-dep-nmod-poss.html">nmod:poss</a></tt>.

879 nodes (1%) are attached to their parents as `nmod:unmarked`.

732 instances of `nmod:unmarked` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.39931740614334.

The following 14 pairs of parts of speech are connected with `nmod:unmarked`: <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (265; 30% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (250; 28% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (188; 21% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (64; 7% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt> (53; 6% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (31; 4% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt> (13; 1% instances), <tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gd_arcosg-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gd_arcosg-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="gd_arcosg-pos-NUM.html">NUM</a></tt>-<tt><a href="gd_arcosg-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod:unmarked	color:blue
1	a	a	PART	Qq	PartType=Vb|PronType=Int	2	mark:prt	_	_
2	bheil	bi	VERB	V-p--d	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	tuilleadh	tuilleadh	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
4	beans	beans	NOUN	Xfe	Foreign=Yes	3	nmod:unmarked	_	_
5	an	an	ADP	Sp	_	6	case	_	_
6	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	xcomp:pred	_	_
7	?	?	PUNCT	Fg	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 nmod:unmarked	color:blue
1	carson	carson	PRON	Uq	PronType=Int	0	root	_	_
2	nach	nach	PART	Qn	PartType=Vb|Polarity=Neg	3	mark:prt	_	_
3	gabh	gabh	VERB	V-f--d	Mood=Ind|Tense=Fut|VerbForm=Fin	5	reparandum	_	_
4	thu	thu	PRON	Pp2s	Number=Sing|Person=2|PronType=Prs	3	nsubj	_	_
5	gearr	gearr	VERB	V-f--d	Mood=Ind|Tense=Fut|VerbForm=Fin	1	acl:relcl	_	_
6	thu	thu	PRON	Pp2s	Number=Sing|Person=2|PronType=Prs	5	nsubj	_	_
7	am	an	DET	Tds	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
8	pie	pie	NOUN	Xfe	Foreign=Yes	5	obj	_	_
9	aig	aig	ADP	Sp	_	10	case	_	_
10	thu	thu	PRON	Pp2s	Number=Sing|Person=2|PronType=Prs	8	nmod	_	_
11	fhèin	fèin	PRON	Px	PronType=Prs|Reflex=Yes	10	nmod:unmarked	_	SpaceAfter=No
12	?	?	PUNCT	Fg	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:unmarked	color:blue
1	cò	cò	PRON	Uq	PronType=Int	3	nmod:unmarked	_	_
2	na	an	DET	Tdpm	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	tidsearan	tidsear	NOUN	Ncpmn	Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
4	a	a	PART	Q-r	PartType=Vb|PronType=Rel	5	nsubj	_	_
5	bha	bi	VERB	V-s	Mood=Ind|Tense=Past|VerbForm=Fin	3	acl:relcl	_	_
6	a’	ag	PART	Sa	_	7	case	_	_
7	sealltainn	seall	NOUN	Nv	VerbForm=Vnoun	5	xcomp:pred	_	_
8	do	do	ADP	Sp	_	9	case	_	_
9	sibh	sibh	PRON	Pp2p	Number=Plur|Person=2|PronType=Prs	7	obl	_	_
10	?	?	PUNCT	Fg	_	3	punct	_	_

~~~


