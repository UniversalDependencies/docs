---
layout: base
title:  'Statistics of csubj:pass in UD_Romanian-RRT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-RRT: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="ro_rrt-dep-csubj.html">csubj</a></tt>.

57 nodes (0%) are attached to their parents as `csubj:pass`.

56 instances of `csubj:pass` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.84210526315789.

The following 6 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (49; 86% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (4; 7% instances), <tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj:pass	color:blue
1	Primele	prim	NUM	Mofprly	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur|NumForm=Word|NumType=Ord	2	nummod	_	_
2	întâlniri	întâlnire	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	7	nsubj	_	_
3	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	4	expl:pass	_	_
4	așteaptă	aștepta	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	să	să	PART	Qs	Mood=Sub	7	mark	_	_
6	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	7	expl:pv	_	_
7	desfășoare	desfășura	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	4	csubj:pass	_	_
8	marți	marți	ADV	Rgp	Degree=Pos	7	advmod	_	SpaceAfter=No
9	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 csubj:pass	color:blue
1	Se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	2	expl:pass	_	_
2	consideră	considera	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	că	că	SCONJ	Csssp	Polarity=Pos	7	mark	_	_
4	aceste	acest	DET	Dd3fpr---e	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|Position=Prenom|PronType=Dem	5	det	_	_
5	modificări	modificare	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	7	nsubj	_	_
6	sunt	fi	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	consecința	consecință	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	2	csubj:pass	_	_
8	unei	un	DET	Tifso	Case=Dat,Gen|Gender=Fem|Number=Sing|PronType=Ind	9	det	_	_
9	reduceri	reducere	NOUN	Ncfson	Case=Dat,Gen|Definite=Ind|Gender=Fem|Number=Sing	7	nmod	_	_
10	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	11	det	_	_
11	creșterii	creștere	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	9	nmod	_	_
12	ponderale	ponderal	ADJ	Afpfson	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	_
13	materne	matern	ADJ	Afpfson	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 csubj:pass	color:blue
1	Și	și	CCONJ	Crssp	Polarity=Pos	10	cc	_	_
2	cum	cum	ADV	Rw	PronType=Int,Rel	7	advmod	_	_
3	războiul	război	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	7	nsubj	_	_
4	de-	de	ADP	Spsay	AdpType=Prep|Case=Acc|Variant=Short	5	case	_	SpaceAfter=No
5	abia	abia	ADV	Rgp	Degree=Pos	7	advmod	_	_
6	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	7	expl:pv	_	_
7	terminase	termina	VERB	Vmil3s	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	10	advcl	_	SpaceAfter=No
8	,	,	PUNCT	COMMA	_	7	punct	_	_
9	am	avea	AUX	Va--1	Person=1	10	aux	_	_
10	socotit	socoti	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
11	că	că	SCONJ	Csssp	Polarity=Pos	16	mark	_	_
12	n-	nu	PART	Qz-y	Polarity=Neg|Variant=Short	16	advmod	_	SpaceAfter=No
13	ar	avea	AUX	Va--3	Person=3	16	aux	_	_
14	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	16	cop	_	_
15	tocmai	tocmai	ADV	Rgp	Degree=Pos	16	advmod	_	_
16	nepotrivit	nepotrivit	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	10	ccomp	_	_
17	să	să	PART	Qs	Mood=Sub	18	mark	_	_
18	povestesc	povesti	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	16	csubj:pass	_	_
19	"	"	PUNCT	DBLQ	_	20	punct	_	SpaceAfter=No
20	Întoarcerea	întoarcere	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	18	obj	_	_
21	tatii	tată	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	20	nmod	_	_
22	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	23	case	_	_
23	războiu	războiu	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	21	nmod	_	SpaceAfter=No
24	"	"	PUNCT	DBLQ	_	20	punct	_	SpaceAfter=No
25	.	.	PUNCT	PERIOD	_	10	punct	_	_

~~~


