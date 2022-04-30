---
layout: base
title:  'Statistics of advcl:tcl in UD_Romanian-RRT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-RRT: Relations: `advcl:tcl`

This relation is a language-specific subtype of <tt><a href="ro_rrt-dep-advcl.html">advcl</a></tt>.

99 nodes (0%) are attached to their parents as `advcl:tcl`.

62 instances of `advcl:tcl` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.16161616161616.

The following 7 pairs of parts of speech are connected with `advcl:tcl`: <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (87; 88% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 advcl:tcl	color:blue
1	N-	nu	PART	Qz-y	Polarity=Neg|Variant=Short	3	advmod	_	SpaceAfter=No
2	ați	avea	AUX	Va--2p	Number=Plur|Person=2	3	aux	_	_
3	auzit	auzi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
4	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	6	obj	_	SpaceAfter=No
5	-a	avea	AUX	Va--3s----y	Number=Sing|Person=3|Variant=Short	6	aux	_	_
6	zis	zice	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	3	ccomp	_	_
7	după	după	ADP	Spsa	AdpType=Prep|Case=Acc	11	mark	_	_
8	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	7	fixed	_	_
9	i-	el	PRON	Pp3-sd--y-----w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	11	expl:poss	_	SpaceAfter=No
10	ați	avea	AUX	Va--2p	Number=Plur|Person=2	11	aux	_	_
11	bușit	buși	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	3	advcl:tcl	_	_
12	mutra	mutră	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	11	obj	_	SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 2 advcl:tcl	color:blue
1	Când	când	ADV	Rw	PronType=Int,Rel	2	advmod:tmod	_	_
2	avem	avea	VERB	Vmip1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	22	advcl:tcl	_	_
3	de-a	de-a	ADP	Spsa	AdpType=Prep|Case=Acc	2	fixed	_	_
4	face	face	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	fixed	_	_
5	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	cazuri	caz	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	2	obl:pmod	_	_
7	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	abuz	abuz	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	6	nmod	_	_
9	sexual	sexual	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	_
10	săvârșit	săvârși	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	8	acl	_	_
11	asupra	asupra	ADP	Spsg	AdpType=Prep|Case=Gen	13	case	_	_
12	unui	un	DET	Timso	Case=Dat,Gen|Gender=Masc|Number=Sing|PronType=Ind	13	det	_	_
13	copil	copil	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	10	obl	_	SpaceAfter=No
14	,	,	PUNCT	COMMA	_	2	punct	_	_
15	una	unul	PRON	Pi3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Ind	22	nsubj	_	_
16	dintre	dintre	ADP	Spsa	AdpType=Prep|Case=Acc	20	case	_	_
17	cele	cel	DET	Tdfpr	Case=Acc,Nom|Gender=Fem|Number=Plur|PronType=Dem	19	det	_	_
18	mai	mai	ADV	Rp	_	19	advmod	_	_
19	mari	mare	ADJ	Afp-p-n	Definite=Ind|Degree=Pos|Number=Plur	20	amod	_	_
20	probleme	problemă	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	15	nmod	_	_
21	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	cop	_	_
22	vina	vină	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	_	_
23	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	24	case	_	_
24	care	care	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	27	obl	_	_
25	copilul	copil	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	27	nsubj	_	_
26	o	el	PRON	Pp3fsa--------w	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Weak	27	obj	_	_
27	simte	simți	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	acl	_	_
28	întotdeauna	întotdeauna	ADV	Rgp	Degree=Pos	27	advmod	_	_
29	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	30	case	_	_
30	timpul	timp	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	27	obl	_	_
31	și	și	CCONJ	Crssp	Polarity=Pos	33	cc	_	_
32	după	după	ADP	Spsa	AdpType=Prep|Case=Acc	33	case	_	_
33	eveniment	eveniment	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	30	conj	_	SpaceAfter=No
34	.	.	PUNCT	PERIOD	_	22	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 advcl:tcl	color:blue
1	Poți	putea	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
2	observa	observa	VERB	Vmnp	Tense=Pres|VerbForm=Inf	1	ccomp	_	_
3	că	că	SCONJ	Csssp	Polarity=Pos	5	mark	_	_
4	mâncarea	mâncare	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	5	nsubj	_	_
5	are	avea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
6	un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	7	det	_	_
7	gust	gust	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	obj	_	_
8	diferit	diferit	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
9	când	când	ADV	Rw	PronType=Int,Rel	11	advmod:tmod	_	_
10	ești	fi	AUX	Vaip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	însărcinată	însărcinat	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	5	advcl:tcl	_	SpaceAfter=No
12	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


