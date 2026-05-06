---
layout: base
title:  'Statistics of obl:pmod in UD_Romanian-RRT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-RRT: Relations: `obl:pmod`

This relation is a language-specific subtype of <tt><a href="ro_rrt-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="ro_rrt-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ro_rrt-dep-obl-tmod.html">obl:tmod</a></tt>.

1462 nodes (1%) are attached to their parents as `obl:pmod`.

1369 instances of `obl:pmod` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.0437756497948.

The following 18 pairs of parts of speech are connected with `obl:pmod`: <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (1109; 76% instances), <tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (113; 8% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt> (92; 6% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-PROPN.html">PROPN</a></tt> (61; 4% instances), <tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (33; 2% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (21; 1% instances), <tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt> (8; 1% instances), <tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_rrt-pos-PROPN.html">PROPN</a></tt> (5; 0% instances), <tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt> (5; 0% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="ro_rrt-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ro_rrt-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 obl:pmod	color:blue
1	Intră	intra	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	dindos	dindos	NOUN	Ncms-n	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	1	obl	_	_
4	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	sufragerie	sufragerie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	1	obl:pmod	_	SpaceAfter=No
6	,	,	PUNCT	COMMA	_	8	punct	_	_
7	unde	unde	ADV	Rw	PronType=Int,Rel	12	advmod	_	_
8	constată	constata	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	acl	_	_
9	că	că	SCONJ	Csssp	Polarity=Pos	12	mark	_	_
10	masa	masă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	12	nsubj	_	_
11	era	fi	AUX	Vaii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	12	cop	_	_
12	nepusă	nepus	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	ccomp	_	SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obl:pmod	color:blue
1	Bacteriile	bacterie	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	7	nsubj	_	_
2	responsabile	responsabil	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	1	amod	_	_
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
4	infecțiile	infecție	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	2	obl:pmod	_	_
5	urinare	urinar	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	4	amod	_	_
6	sunt	fi	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	E.	Escherichia	NOUN	Yn	Abbr=Yes	0	root	_	_
8	coli	coli	X	X	_	7	flat	_	SpaceAfter=No
9	,	,	PUNCT	COMMA	_	10	punct	_	_
10	P	P	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	7	conj	_	SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 obl:pmod	color:blue
1	Din	din	ADP	Spsa	AdpType=Prep|Case=Acc|ExtPos=ADV	4	advmod	_	_
2	contră	contră	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	1	punct	_	_
4	adorau	adora	VERB	Vmii3p	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
5	Partidul	partid	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	4	obj	_	_
6	și	și	CCONJ	Crssp	Polarity=Pos	7	cc	_	_
7	tot	tot	PRON	Pi3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Ind	5	conj	_	_
8	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	9	nsubj	_	_
9	avea	avea	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	acl	_	_
10	legătură	legătură	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	9	obj	_	_
11	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
12	el	el	PRON	Pp3msr--------s	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	9	obl:pmod	_	SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


