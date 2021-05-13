---
layout: base
title:  'Statistics of ccomp:pmod in UD_Romanian-RRT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-RRT: Relations: `ccomp:pmod`

This relation is a language-specific subtype of <tt><a href="ro_rrt-dep-ccomp.html">ccomp</a></tt>.

219 nodes (0%) are attached to their parents as `ccomp:pmod`.

219 instances of `ccomp:pmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.31050228310502.

The following 10 pairs of parts of speech are connected with `ccomp:pmod`: <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (171; 78% instances), <tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (18; 8% instances), <tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (14; 6% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ro_rrt-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 ccomp:pmod	color:blue
1	―	―	PUNCT	DASH	_	4	punct	_	_
2	Totuși	totuși	ADV	Rgp	Degree=Pos	4	advmod	_	_
3	sunt	fi	AUX	Vaip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	încântat	încânta	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
5	că	că	SCONJ	Csssp	Polarity=Pos	9	mark	_	_
6	ora	oră	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	9	nsubj	_	_
7	mea	meu	DET	Ds1fsrs	Case=Acc,Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	6	det	_	_
8	te	tu	PRON	Pp2-sa--------w	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak	9	obj	_	_
9	inspiră	inspira	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	ccomp:pmod	_	_
10	să	să	PART	Qs	Mood=Sub	11	mark	_	_
11	scrii	scrie	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	9	ccomp:pmod	_	_
12	poezii	poezie	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	11	obj	_	SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp:pmod	color:blue
1	Am	avea	AUX	Va--1	Person=1	3	aux	_	_
2	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	3	cop	_	_
3	aprope	aprope	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	0	root	_	_
4	să	să	PART	Qs	Mood=Sub	6	mark	_	_
5	mă	eu	PRON	Pp1-sa--------w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	6	expl:pv	_	_
6	pun	pune	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp:pmod	_	_
7	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	trăsură	trăsură	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	6	obl	_	_
9	și	și	CCONJ	Crssp	Polarity=Pos	12	cc	_	_
10	să	să	PART	Qs	Mood=Sub	12	mark	_	_
11	mă	eu	PRON	Pp1-sa--------w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	12	expl:pv	_	_
12	întorc	întoarce	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	conj	_	_
13	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	_
14	București	București	PROPN	Np	_	12	obl	_	SpaceAfter=No
15	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 ccomp:pmod	color:blue
1	i-	el	PRON	Pp3-sd--y-----w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	3	iobj	_	SpaceAfter=No
2	am	avea	AUX	Va--1	Person=1	3	aux	_	_
3	răspuns	răspunde	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
4	eu	eu	PRON	Pp1-sn--------s	Case=Nom|Number=Sing|Person=1|PronType=Prs|Strength=Strong	3	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	3	punct	_	_
6	curios	curios	ADV	Rgp	Degree=Pos	3	xcomp	_	_
7	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	6	advmod	_	_
8	culme	culme	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	7	fixed	_	_
9	să	să	PART	Qs	Mood=Sub	10	mark	_	_
10	aud	auzi	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	ccomp:pmod	_	_
11	ce-	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	14	nsubj	_	SpaceAfter=No
12	o	o	PART	Qf	Tense=Fut	14	mark	_	_
13	să	să	PART	Qs	Mood=Sub	14	mark	_	_
14	urmeze	urma	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	10	ccomp	_	SpaceAfter=No
15	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


