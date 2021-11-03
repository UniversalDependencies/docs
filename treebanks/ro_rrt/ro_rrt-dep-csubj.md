---
layout: base
title:  'Statistics of csubj in UD_Romanian-RRT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-RRT: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="ro_rrt-dep-csubj-pass.html">csubj:pass</a></tt>.

800 nodes (0%) are attached to their parents as `csubj`.

732 instances of `csubj` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.62625.

The following 21 pairs of parts of speech are connected with `csubj`: <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (499; 62% instances), <tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (120; 15% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt> (61; 8% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (47; 6% instances), <tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (20; 3% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (12; 2% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt> (11; 1% instances), <tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt> (6; 1% instances), <tt><a href="ro_rrt-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ro_rrt-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_rrt-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="ro_rrt-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj	color:blue
1	P-	pe	ADP	Spsay	AdpType=Prep|Case=Acc|Variant=Short	2	case	_	SpaceAfter=No
2	ăsta	acesta	PRON	Pd3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	obj	_	_
3	ar	avea	AUX	Va--3	Person=3	4	aux	_	_
4	trebui	trebui	VERB	Vmnp	Tense=Pres|VerbForm=Inf	0	root	_	_
5	să	să	PART	Qs	Mood=Sub	7	mark	_	SpaceAfter=No
6	-l	el	PRON	Pp3msa--y-----w	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	7	expl	_	_
7	luați	lua	VERB	Vmip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	4	csubj	_	SpaceAfter=No
8	,	,	PUNCT	COMMA	_	11	punct	_	_
9	nu	nu	PART	Qz	Polarity=Neg	11	advmod	_	_
10	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	mine	eu	PRON	Pp1-sa--------s	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Strong	2	conj	_	SpaceAfter=No
12	!	!	PUNCT	EXCL	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 csubj	color:blue
1	Probabil	probabil	ADV	Rgp	Degree=Pos	0	root	_	_
2	că	că	SCONJ	Csssp	Polarity=Pos	4	mark	_	_
3	fusese	fi	AUX	Vail3s	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	4	aux:pass	_	_
4	mutată	muta	VERB	Vmp--sf	Gender=Fem|Number=Sing|VerbForm=Part	1	csubj	_	_
5	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	seria	serie	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	4	obl	_	_
7	următoare	următor	ADJ	Afpf--n	Definite=Ind|Degree=Pos|Gender=Fem	6	amod	_	SpaceAfter=No
8	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj	color:blue
1	Filosoful	filosof	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	5	nsubj	_	_
2	trebuie	trebui	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	să	să	PART	Qs	Mood=Sub	5	mark	_	_
4	fie	fi	AUX	Vasp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	modest	modest	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	2	csubj	_	SpaceAfter=No
6	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


