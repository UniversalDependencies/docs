---
layout: base
title:  'Statistics of ccomp:pmod in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `ccomp:pmod`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-ccomp.html">ccomp</a></tt>.

148 nodes (0%) are attached to their parents as `ccomp:pmod`.

106 instances of `ccomp:pmod` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.33108108108108.

The following 10 pairs of parts of speech are connected with `ccomp:pmod`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (118; 80% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (9; 6% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (8; 5% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (4; 3% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 ccomp:pmod	color:blue
1	Vidrosu	Vidros	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	_
2	e	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	_
3	apă	apă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	|SpaceAfter=No
4	-adîncă	adânc	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	|SpaceAfter=No
5	,	,	PUNCT	COMMA	_	11	punct	_	_
6	Pă	pe	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	cine	cine	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	9	nmod:pmod	_	|SpaceAfter=No
8	-l	el	PRON	Pp3msa--------w	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak	9	obj	_	_
9	prinde	prinde	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	ccomp:pmod	_	|SpaceAfter=No
10	-l	el	PRON	Pp3msa--------w	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak	11	obj	_	_
11	mănîncă	mânca	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	conj	_	|SpaceAfter=No
12	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 ccomp:pmod	color:blue
1	Şi	și	CCONJ	Ccssp	Polarity=Pos	11	cc	_	|SpaceAfter=No
2	-ncă	încă	ADV	Rg	_	11	advmod	_	_
3	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
4	care	care	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	8	nsubj	_	_
5	era	fi	AUX	Vaii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp	8	cop	_	_
6	mai	mai	ADV	Rg	_	7	advmod	_	_
7	mare	mare	ADJ	Afp-srn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Number=Sing	8	amod	_	_
8	hain	hain	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	11	ccomp:pmod	_	_
9	l-	el	PRON	Pp3msa--------w	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak	11	obj	_	|SpaceAfter=No
10	au	avea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	11	aux	_	_
11	pus	pune	VERB	Vmp	VerbForm=Part	0	root	_	_
12	căimăcan	caimacam	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	11	xcomp	_	|SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 ccomp:pmod	color:blue
1	Domnul	domn	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	8	nsubj	_	_
2	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	boieri	boier	NOUN	Ncmprn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Plur	11	nmod:pmod	_	|SpaceAfter=No
4	,	,	PUNCT	COMMA	_	3	punct	_	_
5	să	să	PART	Qs	PartType=Sub	8	mark	_	_
6	nu	nu	ADV	Qz	Polarity=Neg	8	advmod	_	_
7	fie	fi	AUX	Vasp3	Mood=Sub|Person=3|Tense=Pres	8	cop	_	_
8	volnic	volnic	ADJ	Afpmsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
9	a	a	PART	Qn	PartType=Inf	11	mark	_	|SpaceAfter=No
10	-i	el	PRON	Pp3mpa--------w	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Strength=Weak	11	obj	_	_
11	pierde	pierde	VERB	Vmn	VerbForm=Inf	8	ccomp:pmod	_	|SpaceAfter=No
12	,	,	PUNCT	COMMA	_	16	punct	_	_
13	orice	orice	DET	Di3--r	Case=Acc,Nom|Person=3|PronType=Ind	14	det	_	_
14	greşală	greșală	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	16	obj	_	_
15	ar	avea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	16	aux	_	_
16	face	face	VERB	Vmn	VerbForm=Inf	11	advcl	_	|SpaceAfter=No
17	,	,	PUNCT	COMMA	_	19	punct	_	_
18	fără	fără	ADP	Spsa	AdpType=Prep|Case=Acc	19	case	_	_
19	sfatul	sfat	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	11	obl	_	_
20	tuturor	tot	PRON	Pi3-po	Case=Dat,Gen|Number=Plur|Person=3|PronType=Ind	19	nmod	_	_
21	şi	și	CCONJ	Ccssp	Polarity=Pos	23	cc	_	_
22	fără	fără	ADP	Spsa	AdpType=Prep|Case=Acc	23	case	_	_
23	iscălitura	iscălitură	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	19	conj	_	_
24	mitropolitului	mitropolit	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	23	nmod	_	|SpaceAfter=No
25	.	.	PUNCT	PERIOD	_	8	punct	_	_

~~~


