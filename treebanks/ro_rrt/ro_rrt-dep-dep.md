---
layout: base
title:  'Statistics of dep in UD_Romanian-RRT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-RRT: Relations: `dep`

This relation is universal.

36 nodes (0%) are attached to their parents as `dep`.

28 instances of `dep` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.38888888888889.

The following 21 pairs of parts of speech are connected with `dep`: <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (6; 17% instances), <tt><a href="ro_rrt-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (5; 14% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt> (4; 11% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt> (2; 6% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-INTJ.html">INTJ</a></tt> (2; 6% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-X.html">X</a></tt> (2; 6% instances), <tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="ro_rrt-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_rrt-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-ADP.html">ADP</a></tt> (1; 3% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-INTJ.html">INTJ</a></tt> (1; 3% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-X.html">X</a></tt> (1; 3% instances), <tt><a href="ro_rrt-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_rrt-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="ro_rrt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_rrt-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-ADP.html">ADP</a></tt> (1; 3% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 dep	color:blue
1	Caracteristicile	caracteristică	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	0	root	_	_
2	produsului	produs	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	1	nmod	_	_
3	(	(	PUNCT	LPAR	_	4	punct	_	SpaceAfter=No
4	produselor	produs	NOUN	Ncfpoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Plur	2	dep	_	SpaceAfter=No
5	)	)	PUNCT	RPAR	_	4	punct	_	_
6	care	care	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	7	nsubj	_	_
7	urmează	urma	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	2	acl	_	_
8	să	să	PART	Qs	Mood=Sub	10	mark	_	_
9	fie	fi	AUX	Vasp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	10	aux:pass	_	_
10	cântărit	cântări	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	7	ccomp	_	_
11	(	(	PUNCT	LPAR	_	12	punct	_	SpaceAfter=No
12	e	e	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	10	dep	_	SpaceAfter=No
13	)	)	PUNCT	RPAR	_	12	punct	_	SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 dep	color:blue
1	Coeficientul	coeficient	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	8	nsubj	_	_
2	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	variație	variație	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	1	nmod	_	_
4	V	V	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	3	nmod	_	_
5	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
6	prin	prin	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	definiție	definiție	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	8	nmod	_	_
8	V	V	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
9	=	=	PUNCT	EQUAL	_	8	punct	_	_
10	100	100	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	8	nummod	_	_
11	*	*	PUNCT	STAR	AdpType=Prep	10	punct	_	_
12	s	s	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	10	dep	_	_
13	/	/	PUNCT	SLASH	AdpType=Prep	10	punct	_	_
14	m	m	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	10	dep	_	SpaceAfter=No
15	;	;	PUNCT	SCOLON	AdpType=Prep	8	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 dep	color:blue
1	firește	firește	ADV	Rgp	Degree=Pos	4	advmod	_	SpaceAfter=No
2	,	,	PUNCT	COMMA	_	1	punct	_	_
3	gestul	gest	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	4	nsubj	_	_
4	stârnește	stârni	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	iritarea	iritare	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	4	obj	_	_
6	unor	un	DET	Ti-po	Case=Dat,Gen|Number=Plur|PronType=Ind	7	det	_	_
7	comentatori	comentator	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	5	nmod	_	_
8	mai	mai	ADV	Rp	_	9	advmod	_	_
9	vigilenți	vigilent	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	7	amod	_	_
10	(	(	PUNCT	LPAR	_	11	punct	_	SpaceAfter=No
11	M.	M.	NOUN	Yn	Abbr=Yes	7	appos	_	_
12	Schwartzfeld	Schwartzfeld	PROPN	Np	_	11	flat	_	_
13	ș.a.	și_alții	PRON	Yp,Yn	Abbr=Yes	11	dep	_	SpaceAfter=No
14	)	)	PUNCT	RPAR	_	11	punct	_	SpaceAfter=No
15	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


