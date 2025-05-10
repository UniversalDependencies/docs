---
layout: base
title:  'Statistics of advcl:relcl in UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

## Treebank Statistics: UD_Scottish_Gaelic-ARCOSG: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="gd_arcosg-dep-advcl.html">advcl</a></tt>.

38 nodes (0%) are attached to their parents as `advcl:relcl`.

38 instances of `advcl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.97368421052632.

The following 5 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (27; 71% instances), <tt><a href="gd_arcosg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (4; 11% instances), <tt><a href="gd_arcosg-pos-ADV.html">ADV</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (4; 11% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt>-<tt><a href="gd_arcosg-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl:relcl	color:blue
1	uill	uill	INTJ	I	_	3	discourse	_	_
2	nas	nas	PART	Uc	PartType=Comp	3	mark:prt	_	_
3	mò	mò	ADJ	Apc	Degree=Cmp,Sup	0	root	_	_
4	a	a	PART	Q-r	PartType=Vb|PronType=Rel	5	xcomp:pred	_	_
5	tha	bi	VERB	V-p	Mood=Ind|Tense=Pres|VerbForm=Fin	3	advcl:relcl	_	_
6	iad	iad	PRON	Pp3p	Number=Plur|Person=3|PronType=Prs	5	nsubj	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 25 advcl:relcl	color:blue
1	Rugadh	rug	VERB	V-s0	Mood=Ind|Person=0|Tense=Past|VerbForm=Fin	0	root	_	_
2	's	is	CCONJ	Cc	_	3	cc	_	_
3	thogadh	tog	VERB	V-s0	Mood=Ind|Person=0|Tense=Past|VerbForm=Fin	1	conj	_	_
4	Catrìona	Catrìona	PROPN	Nn-fn	Case=Nom|Gender=Fem|NounType=Prs	1	nsubj	_	_
5	Wylie	Wylie	PROPN	Nn	NounType=Prs	4	flat:name	_	FlatType=Name
6	anns	an	ADP	Sp	ExtPos=ADP	8	case	_	_
7	an	an	ADP	Sp	_	6	fixed	_	_
8	Òban	Òban	PROPN	Nt	NounType=Top	1	obl	_	SpaceAfter=No
9	,	,	PUNCT	Fi	_	11	punct	_	_
10	agus	agus	CCONJ	Cc	_	11	cc	_	_
11	coltach	coltach	ADJ	Ap	_	1	conj	_	_
12	ri	ri	ADP	Sp	_	13	case	_	_
13	mòran	mòran	NOUN	Ncsmd	Case=Dat|Gender=Masc|Number=Sing	1	obl	_	_
14	Chaitligich	caitligeach	NOUN	Ncpmg	Case=Gen|Gender=Masc|Number=Plur	13	nmod	_	_
15	eile	eile	ADJ	Aq-smg	Case=Gen|Gender=Masc|Number=Sing	14	amod	_	_
16	anns	an	ADP	Sp	ExtPos=ADP	18	case	_	_
17	an	an	ADP	Sp	_	16	fixed	_	_
18	sgìre	sgìre	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	13	nmod	_	SpaceAfter=No
19	,	,	PUNCT	Fi	_	25	punct	_	_
20	is	is	AUX	Wp-i	ExtPos=AUX|Tense=Pres	25	cop	_	_
21	an	an	ADP	Sp	_	20	fixed	_	_
22	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3|PronType=Prs	20	fixed	_	_
23	ás	as	ADP	Sp	_	25	case	_	_
24	na	an	DET	Tdpm	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	25	det	_	_
25	h-eileanan	eilean	NOUN	Ncpmd	Case=Dat|CleftType=Obl|Gender=Masc|Number=Plur	11	advcl:relcl	_	_
26	a	a	PART	Q-r	PartType=Vb|PronType=Rel	27	obl:unmarked	_	_
27	thàinig	thig	VERB	V-s	Mood=Ind|Tense=Past|VerbForm=Fin	25	csubj:cleft	_	_
28	a	a	DET	Dp3sf	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	29	nmod:poss	_	_
29	pàrantan	pàrant	NOUN	Ncpmn	Case=Nom|Gender=Masc|Number=Plur	27	nsubj	_	SpaceAfter=No
30	.	.	PUNCT	Fe	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 advcl:relcl	color:blue
1	bha	bi	VERB	V-s	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
2	mi	mi	PRON	Pp1s	Number=Sing|Person=1|PronType=Prs	1	nsubj	_	_
3	ag	ag	PART	Sa	_	4	case	_	_
4	ràdh	abair	NOUN	Nv	VerbForm=Vnoun	1	xcomp:pred	_	_
5	ri	ri	ADP	Sp	_	6	case	_	_
6	thu	thu	PRON	Pp2s	Number=Sing|Person=2|PronType=Prs	4	obl	_	_
7	an-dè	an-dè	ADV	Rt	AdvType=Tim	1	advmod	_	_
8	a	a	PART	Q-r	PartType=Vb|PronType=Rel	9	obj	_	_
9	chunna	faic	VERB	V-s	Mood=Ind|Tense=Past|VerbForm=Fin	7	advcl:relcl	_	_
10	mi	mi	PRON	Pp1s	Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
11	an	an	ADP	Sp	_	12	case	_	_
12	[Placename]	[Placename]	PROPN	Nt	NounType=Top	9	obl	_	Anonymised=Yes
13	ann	ann	ADV	Rs	AdvType=Loc|ExtPos=ADV	9	advmod	_	_
14	a	a	ADV	Rs	AdvType=Loc	13	fixed	_	_
15	shiodach	siodach	ADV	Rs	AdvType=Loc	13	fixed	_	_

~~~


