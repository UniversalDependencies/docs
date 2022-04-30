---
layout: base
title:  'Statistics of aux in UD_Romanian-RRT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-RRT: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="ro_rrt-dep-aux-pass.html">aux:pass</a></tt>.

4731 nodes (2%) are attached to their parents as `aux`.

4698 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26379201014585.

The following 10 pairs of parts of speech are connected with `aux`: <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-AUX.html">AUX</a></tt> (4499; 95% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-AUX.html">AUX</a></tt> (92; 2% instances), <tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_rrt-pos-AUX.html">AUX</a></tt> (78; 2% instances), <tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_rrt-pos-AUX.html">AUX</a></tt> (35; 1% instances), <tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_rrt-pos-AUX.html">AUX</a></tt> (13; 0% instances), <tt><a href="ro_rrt-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_rrt-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="ro_rrt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_rrt-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="ro_rrt-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_rrt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ro_rrt-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_rrt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ro_rrt-pos-DET.html">DET</a></tt>-<tt><a href="ro_rrt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Dacă	dacă	SCONJ	Csssp	Polarity=Pos	5	mark	_	_
2	ar	avea	AUX	Va--3	Person=3	5	aux	_	_
3	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	5	aux	_	_
4	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	5	cop	_	_
5	scrisul	scris	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	12	advcl	_	_
6	lui	lui	DET	Ds3---s	Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	5	det	_	SpaceAfter=No
7	,	,	PUNCT	COMMA	_	5	punct	_	_
8	n-	nu	PART	Qz-y	Polarity=Neg|Variant=Short	12	advmod	_	SpaceAfter=No
9	ai	avea	AUX	Va--2s	Number=Sing|Person=2	12	aux	_	_
10	mai	mai	ADV	Rp	_	12	advmod	_	_
11	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	12	aux	_	_
12	descoperit	descoperi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
13	nimic	nimic	PRON	Pz3-sr	Case=Acc,Nom|Number=Sing|Person=3|PronType=Neg	12	obj	_	SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
1	Are	avea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	55	55	NUM	Mc-s-b	Number=Sing|NumForm=Combi|NumType=Card	4	nummod	_	_
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
4	ani	an	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	1	obj	_	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	7	punct	_	_
6	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	căsătorită	căsătorit	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	1	conj	_	_
8	și	și	CCONJ	Crssp	Polarity=Pos	9	cc	_	_
9	are	avea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	conj	_	_
10	un	unu	NUM	Mcmsrl	Case=Acc,Nom|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	11	nummod	_	_
11	copil	copil	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	9	obj	_	SpaceAfter=No
12	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


