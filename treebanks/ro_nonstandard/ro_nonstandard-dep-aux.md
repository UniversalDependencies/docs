---
layout: base
title:  'Statistics of aux in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="ro_nonstandard-dep-aux-pass.html">aux:pass</a></tt>.

9475 nodes (3%) are attached to their parents as `aux`.

8806 instances of `aux` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18248021108179.

The following 9 pairs of parts of speech are connected with `aux`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt> (8931; 94% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt> (223; 2% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt> (132; 1% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt> (79; 1% instances), <tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt> (39; 0% instances), <tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt> (35; 0% instances), <tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt> (26; 0% instances), <tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt> (8; 0% instances), <tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt>-<tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 aux	color:blue
1	Și	și	CCONJ	Ccssp	Polarity=Pos	2	cc	_	ref=MATT17.16
2	aduș	aduce	VERB	Vmis1s	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT17.16
3	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	ref=MATT17.16
4	el	el	PRON	Pp3msa--------s	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	2	nmod:tmod	_	ref=MATT17.16
5	ucenicilor	ucenic	NOUN	Ncmpoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Plur	2	nmod:pmod	_	ref=MATT17.16
6	Tăi	tău	DET	Ds2mp-s	Gender=Masc|Number=Plur|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	5	det	_	ref=MATT17.16
7	și	și	CCONJ	Ccssp	Polarity=Pos	11	cc	_	ref=MATT17.16
8	nu	nu	ADV	Qz	Polarity=Neg	11	advmod	_	ref=MATT17.16|SpaceAfter=No
9	-l	el	PRON	Pp3msa--------w	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak	11	obj	_	ref=MATT17.16
10	putură	putea	AUX	Vais3p	Mood=Ind|Number=Plur|Person=3|Tense=Past	11	aux	_	ref=MATT17.16
11	vindeca	vindeca	VERB	Vmn	VerbForm=Inf	2	conj	_	ref=MATT17.16|SpaceAfter=No
12	.	.	PUNCT	PERIOD	_	2	punct	_	ref=MATT17.16

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux	color:blue
1	De-	de	SCONJ	Csssp	Polarity=Pos	6	mark	_	SpaceAfter=No
2	ar	avea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	6	aux	_	_
3	fi	fi	AUX	Van	VerbForm=Inf	6	cop	_	_
4	dorul	dor	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	6	nsubj	_	_
5	ca	ca	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	pădurea	pădure	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	11	advcl	_	Rhyme=ID13|SpaceAfter=No|Type=Paired
7	,	,	PUNCT	COMMA	_	6	punct	_	_
8	Eu	eu	PRON	Pp1-sr	Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
9	l-	el	PRON	Pp3msa--------w	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak	11	obj	_	SpaceAfter=No
10	aș	avea	AUX	Vaip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres	11	aux	_	_
11	tăia	tăia	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
12	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	_
13	securea	secure	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	11	obl	_	Rhyme=ID6|SpaceAfter=No|Type=Paired
14	.	.	PUNCT	PERIOD	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 aux	color:blue
1	Zise	zice	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT20.7
2	lor	el	PRON	Pp3-pd--------s	Case=Dat|Number=Plur|Person=3|PronType=Prs|Strength=Strong	1	iobj	_	ref=MATT20.7|SpaceAfter=No
3	:	:	PUNCT	COLON	_	4	punct	_	ref=MATT20.7
4	Meargeți	merge	VERB	Vmm-2p	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	1	parataxis	_	ref=MATT20.7
5	și	și	ADV	Rg	_	6	advmod	_	ref=MATT20.7
6	voi	tu	PRON	Pp2-pr	Case=Acc,Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	ref=MATT20.7
7	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	ref=MATT20.7
8	vie	vie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	obl	_	ref=MATT20.7
9	și	și	CCONJ	Ccssp	Polarity=Pos	16	cc	_	ref=MATT20.7
10	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	13	nsubj	_	ref=MATT20.7
11	va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	13	aux	_	ref=MATT20.7
12	fi	fi	AUX	Van	VerbForm=Inf	13	cop	_	ref=MATT20.7
13	derept	drept	ADJ	Afpmsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	16	ccomp	_	ref=MATT20.7|SpaceAfter=No
14	,	,	PUNCT	COMMA	_	13	punct	_	ref=MATT20.7
15	veți	vrea	AUX	Vaip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres	16	aux	_	ref=MATT20.7
16	lua	lua	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	conj	_	ref=MATT20.7|SpaceAfter=No
17	.	.	PUNCT	PERIOD	_	1	punct	_	ref=MATT20.7

~~~


