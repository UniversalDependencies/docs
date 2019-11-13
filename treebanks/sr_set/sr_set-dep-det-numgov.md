---
layout: base
title:  'Statistics of det:numgov in UD_Serbian-SET'
udver: '2'
---

## Treebank Statistics: UD_Serbian-SET: Relations: `det:numgov`

This relation is a language-specific subtype of <tt><a href="sr_set-dep-det.html">det</a></tt>.

147 nodes (0%) are attached to their parents as `det:numgov`.

147 instances of `det:numgov` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3469387755102.

The following 7 pairs of parts of speech are connected with `det:numgov`: <tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (134; 91% instances), <tt><a href="sr_set-pos-PRON.html">PRON</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (5; 3% instances), <tt><a href="sr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="sr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="sr_set-pos-DET.html">DET</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="sr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr_set-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="sr_set-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr_set-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det:numgov	color:blue
1	Toliko	toliko	DET	Rgp	Degree=Pos|PronType=Dem	3	det:numgov	_	_
2	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	radnika	radnik	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	4	obj	_	_
4	otpušteno	otpustiti	ADJ	Appnsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:numgov	color:blue
1	Način	način	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	_
2	govora	govor	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
3	uspešno	uspešno	ADV	Rgp	Degree=Pos	7	advmod	_	_
4	u	u	ADP	Sl	Case=Loc	6	case	_	_
5	mnogo	mnogo	DET	Rgp	Degree=Pos	6	det:numgov	_	_
6	čemu	što	PRON	Pi3n-l	Case=Loc|Gender=Neut|PronType=Int,Rel	7	obl	_	_
7	odslikava	odslikavati	VERB	Vmr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	epohu	epoha	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	7	obj	_	_
9	i	i	CCONJ	Cc	_	10	cc	_	_
10	duh	duh	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	conj	_	_
11	te	taj	DET	Pd-fsg	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	12	det	_	_
12	epohe	epoha	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:numgov	color:blue
1	OHR	OHR	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
2	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	takođe	takođe	ADV	Rgp	Degree=Pos	4	advmod	_	_
4	smenila	smeniti	VERB	Vmp-sf	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	nekoliko	nekoliko	DET	Rgp	Degree=Pos|PronType=Ind	6	det:numgov	_	_
6	moćnih	moćan	ADJ	Agpfpgy	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur	7	amod	_	_
7	ličnosti	ličnost	NOUN	Ncfpg	Case=Gen|Gender=Fem|Number=Plur	4	obj	_	_
8	iz	iz	ADP	Sg	Case=Gen	10	case	_	_
9	ratnog	ratni	ADJ	Agpmsgy	Case=Gen|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	_
10	perioda	period	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
11	,	,	PUNCT	Z	_	12	punct	_	_
12	utirući	utirati	ADV	Rr	Tense=Pres|VerbForm=Conv	4	xcomp	_	_
13	tako	tako	ADV	Rgp	Degree=Pos|PronType=Dem	12	advmod	_	_
14	put	put	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	12	obl	_	_
15	reformama	reforma	NOUN	Ncfpd	Case=Dat|Gender=Fem|Number=Plur	12	obl	_	SpaceAfter=No
16	.	.	PUNCT	Z	_	4	punct	_	_

~~~


