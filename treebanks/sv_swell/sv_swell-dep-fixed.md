---
layout: base
title:  'Statistics of fixed in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `fixed`

This relation is universal.

17 nodes (0%) are attached to their parents as `fixed`.

17 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17647058823529.

The following 6 pairs of parts of speech are connected with `fixed`: <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-SCONJ.html">SCONJ</a></tt> (11; 65% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-ADP.html">ADP</a></tt> (2; 12% instances), <tt><a href="sv_swell-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-CCONJ.html">CCONJ</a></tt> (1; 6% instances), <tt><a href="sv_swell-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 fixed	color:blue
1	Jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
2	kännde	känna	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	CorrectionLabels=M-Verb
3	inga	ingen	DET	_	Definite=Ind|Number=Plur|PronType=Neg	4	det	_	CorrectionLabels=S-Other
4	människor	människa	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	2	obj	_	_
5	därför	därför	ADV	_	ExtPos=SCONJ	8	mark	_	_
6	att	att	SCONJ	_	_	5	fixed	_	_
7	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	8	nsubj	_	_
8	gick	gå	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl	_	_
9	inte	inte	PART	_	_	8	advmod	_	CorrectionLabels=S-Adv|Polarity=Neg
10	ut	ut	ADV	_	_	8	compound:prt	_	_
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 fixed	color:blue
1	Till	till	ADV	_	ExtPos=ADV	4	advmod	_	CorrectionLabels=C;S-Adv
2	och	och	CCONJ	_	_	1	fixed	_	CorrectionLabels=C:2;S-Adv:2
3	med	med	ADP	_	_	1	fixed	_	CorrectionLabels=C:3;S-Adv:3
4	klädstilen	klädstil	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	6	nsubj	_	CorrectionLabels=C
5	kan	kunna	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
6	avgöra	avgöra	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	_
7	om	om	SCONJ	_	_	9	mark	_	_
8	man	man	PRON	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	9	nsubj	_	_
9	får	få	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	ccomp	_	_
10	ett	en	DET	_	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	11	det	_	_
11	jobb	jobb	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	9	obj	_	_
12	eller	eller	CCONJ	_	_	13	cc	_	_
13	inte	inte	PART	_	Polarity=Neg	9	conj	_	_
14	efter	efter	ADP	_	_	16	case	_	_
15	en	en	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	16	det	_	_
16	intervju	intervju	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	9	obl	_	_
17	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 fixed	color:blue
1	För	för	ADP	_	ExtPos=ADP	3	case	_	_
2	två	två	NUM	_	Case=Nom|NumType=Card	3	nummod	_	_
3	år	år	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	5	obl	_	_
4	sedan	sedan	ADV	_	_	1	fixed	_	_
5	kom	komma	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	han	han	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	5	nsubj	_	_
7	till	till	ADP	_	_	8	case	_	_
8	Mongoliet	Mongoliet	PROPN	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	5	obl	_	_
9	och	och	CCONJ	_	_	11	cc	_	_
10	vi	vi	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	11	nsubj	_	_
11	mötte	möta	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	5	conj	_	CorrectionLabels=M-Verb
12	igen	igen	ADV	_	_	11	advmod	_	_
13	efter	efter	ADP	_	_	16	case	_	_
14	en	en	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	16	det	_	_
15	lång	lång	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	16	amod	_	_
16	tid	tid	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	11	obl	_	_
17	.	.	PUNCT	_	_	5	punct	_	_

~~~


