---
layout: base
title:  'Statistics of nmod:tmod in UD_Romanian-RRT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-RRT: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="ro_rrt-dep-nmod.html">nmod</a></tt>.

552 nodes (0%) are attached to their parents as `nmod:tmod`.

356 instances of `nmod:tmod` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.05253623188406.

The following 8 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (478; 87% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (46; 8% instances), <tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (11; 2% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt> (7; 1% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 nmod:tmod	color:blue
1	Deci	deci	CCONJ	Ccssp	Polarity=Pos	9	cc	_	SpaceAfter=No
2	,	,	PUNCT	COMMA	_	9	punct	_	_
3	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
4	această	acest	DET	Dd3fsr---e	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|Position=Prenom|PronType=Dem	5	det	_	_
5	perioadă	perioadă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	9	nmod:tmod	_	SpaceAfter=No
6	,	,	PUNCT	COMMA	_	5	punct	_	_
7	ziua	zi	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	9	nsubj	_	_
8	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	9	expl:pv	_	_
9	mărește	mări	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
11	8	8	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	12	nummod	_	_
12	minute	minut	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	9	obl	_	SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod:tmod	color:blue
1	Dancu	Dancu	PROPN	Np	_	0	root	_	SpaceAfter=No
2	,	,	PUNCT	COMMA	_	3	punct	_	_
3	Tomești	Tomești	PROPN	Np	_	1	conj	_	SpaceAfter=No
4	,	,	PUNCT	COMMA	_	5	punct	_	_
5	Ciurea	Ciurea	PROPN	Np	_	1	conj	_	_
6	și	și	CCONJ	Crssp	Polarity=Pos	7	cc	_	_
7	Lunca	luncă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	1	conj	_	_
8	Cetățuii	cetățuie	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	7	nmod:tmod	_	SpaceAfter=No
9	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 nmod:tmod	color:blue
1	Pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	timp	timp	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	9	nmod:tmod	_	_
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
4	război	război	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	2	punct	_	_
6	Președintele	președinte	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	9	nsubj	_	_
7	României	România	PROPN	Npfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	6	nmod	_	_
8	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	comandatul	comandat	ADJ	Afpmsry	Case=Acc,Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
10	suprem	suprem	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
11	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	12	det	_	_
12	Forțelor	forță	NOUN	Ncfpoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Plur	9	obl	_	_
13	Armatei	armată	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	12	nmod	_	SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	9	punct	_	_

~~~


