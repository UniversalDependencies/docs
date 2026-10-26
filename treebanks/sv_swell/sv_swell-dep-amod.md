---
layout: base
title:  'Statistics of amod in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `amod`

This relation is universal.

510 nodes (5%) are attached to their parents as `amod`.

502 instances of `amod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1078431372549.

The following 9 pairs of parts of speech are connected with `amod`: <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (497; 97% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="sv_swell-pos-DET.html">DET</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Nya	ny	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	2	amod	_	_
2	vanner	van	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur|Typo=Yes	3	nsubj	_	CorrectionLabels=O
3	kommer	komma	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	!	!	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 amod	color:blue
1	Enlig	enlig	ADP	_	_	2	case	_	CorrectionLabels=M-Adj/adv
2	mig	jag	PRON	_	Case=Acc|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	6	obl	_	_
3	,	,	PUNCT	_	_	2	punct	_	CorrectionLabels=P-R
4	man	man	PRON	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	6	nsubj	_	_
5	ska	skola	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	CorrectionLabels=S-FinV
6	klä	klä	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	_
7	sig	sig	PRON	_	Case=Acc|Definite=Def|PronType=Prs	6	obj	_	_
8	först	först	ADV	_	_	6	advmod	_	CorrectionLabels=S-Adv
9	och	och	CCONJ	_	_	10	cc	_	CorrectionLabels=S-Adv:2
10	framst	främst	ADV	_	Degree=Sup|Typo=Yes	8	conj	_	CorrectionLabels=C;O|SurfaceLemma=framst
11	så	så	ADV	_	_	12	advmod	_	_
12	bekväm	bekväm	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	6	advmod	_	CorrectionLabels=M-Adj/adv
13	som	som	SCONJ	_	_	14	mark	_	_
14	möjlig	möjlig	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	12	amod	_	CorrectionLabels=M-Gend
15	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 amod	color:blue
1	Jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	3	nsubj	_	_
2	bara	bara	ADV	_	_	3	advmod	_	CorrectionLabels=S-Adv
3	spelar	spela	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	fotbol	fotboll	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Typo=Yes	3	obj	_	CorrectionLabels=O|SurfaceLemma=fotbol
5	med	med	ADP	_	_	6	case	_	_
6	kompisar	kompis	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	3	obl	_	_
7	eller	eller	CCONJ	_	_	10	cc	_	_
8	min	jag	PRON	_	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	10	nmod:poss	_	_
9	lite	lite	ADV	_	_	10	amod	_	CorrectionLabels=M-Other
10	son	son	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	conj	_	_
11	om	om	SCONJ	_	_	13	mark	_	_
12	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	13	nsubj	_	_
13	orkar	orka	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	_	_
14	.	.	PUNCT	_	_	3	punct	_	_

~~~


