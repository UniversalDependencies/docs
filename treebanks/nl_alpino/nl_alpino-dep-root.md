---
layout: base
title:  'Statistics of root in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `root`

This relation is universal.

9204 nodes (5%) are attached to their parents as `root`.

9204 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.20654063450674.

The following 13 pairs of parts of speech are connected with `root`: -<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (7342; 80% instances), -<tt><a href="nl_alpino-pos-NOUN.html">NOUN</a></tt> (902; 10% instances), -<tt><a href="nl_alpino-pos-ADJ.html">ADJ</a></tt> (554; 6% instances), -<tt><a href="nl_alpino-pos-PROPN.html">PROPN</a></tt> (126; 1% instances), -<tt><a href="nl_alpino-pos-ADV.html">ADV</a></tt> (98; 1% instances), -<tt><a href="nl_alpino-pos-PRON.html">PRON</a></tt> (75; 1% instances), -<tt><a href="nl_alpino-pos-SYM.html">SYM</a></tt> (36; 0% instances), -<tt><a href="nl_alpino-pos-NUM.html">NUM</a></tt> (29; 0% instances), -<tt><a href="nl_alpino-pos-ADP.html">ADP</a></tt> (25; 0% instances), -<tt><a href="nl_alpino-pos-DET.html">DET</a></tt> (9; 0% instances), -<tt><a href="nl_alpino-pos-INTJ.html">INTJ</a></tt> (4; 0% instances), -<tt><a href="nl_alpino-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), -<tt><a href="nl_alpino-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 7 root	color:blue
1	,,	,,	PUNCT	LET	_	7	punct	7:punct	SpaceAfter=No
2	Mijn	mijn	PRON	VNW|bez|det|stan|vol|1|ev|prenom|zonder|agr	Person=1|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	_
3	basisniveau	basis_niveau	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	7	nsubj	7:nsubj	_
4	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	7	aux	7:aux	_
5	flink	flink	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	7	advmod	7:advmod	_
6	omhoog	omhoog	ADV	BW	_	7	advmod	7:advmod	_
7	gegaan	gaan	VERB	WW|vd|vrij|zonder	VerbForm=Part	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	LET	_	7	punct	7:punct	SpaceAfter=No
9	''	''	PUNCT	LET	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	Ik	ik	PRON	VNW|pers|pron|nomin|vol|1|ev	Case=Nom|Person=1|PronType=Prs	5	nsubj	5:nsubj	_
2	ben	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
3	nogal	nogal	ADV	BW	_	5	advmod	5:advmod	_
4	een	een	DET	LID|onbep|stan|agr	Definite=Ind	5	det	5:det	_
5	twijfelaar	twijfelaar	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	LET	_	5	punct	5:punct	_
7	''	''	PUNCT	LET	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	Ik	ik	PRON	VNW|pers|pron|nomin|vol|1|ev	Case=Nom|Person=1|PronType=Prs	5	nsubj	5:nsubj	_
2	ben	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
3	nu	nu	ADV	BW	_	5	advmod	5:advmod	_
4	zo	zo	ADV	BW	_	5	advmod	5:advmod	_
5	ver	ver	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	0	root	0:root	_
6	dat	dat	SCONJ	VG|onder	_	8	mark	8:mark	_
7	ik	ik	PRON	VNW|pers|pron|nomin|vol|1|ev	Case=Nom|Person=1|PronType=Prs	8	nsubj	8:nsubj	_
8	weet	weten	VERB	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	4	advcl	4:advcl:dat	_
9	dat	dat	SCONJ	VG|onder	_	14	mark	14:mark	_
10	ik	ik	PRON	VNW|pers|pron|nomin|vol|1|ev	Case=Nom|Person=1|PronType=Prs	14	nsubj	14:nsubj	_
11	van	van	ADP	VZ|init	_	12	case	12:case	_
12	iedereen	iedereen	PRON	VNW|onbep|pron|stan|vol|3p|ev	Person=3|PronType=Ind	14	obl	14:obl:van	_
13	kan	kunnen	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	14	aux	14:aux	_
14	winnen	winnen	VERB	WW|inf|vrij|zonder	VerbForm=Inf	8	ccomp	8:ccomp	SpaceAfter=No
15	.	.	PUNCT	LET	_	5	punct	5:punct	_
16	''	''	PUNCT	LET	_	5	punct	5:punct	_

~~~


