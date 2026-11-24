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

The following 9 pairs of parts of speech are connected with `amod`: <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (496; 97% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="sv_swell-pos-DET.html">DET</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	Vi	vi	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	2	nsubj	_	_
2	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	lite	liten	ADV	_	Degree=Pos	4	amod	_	CorrectionLabels=M-Other
4	balkong	balkong	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obj	_	_
5	med	med	ADP	_	_	7	case	_	_
6	olika	olik	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	7	amod	_	_
7	blomma	blomma	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	nmod	_	CorrectionLabels=M-Num
8	ute	ute	ADV	_	_	2	xcomp	_	_
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


