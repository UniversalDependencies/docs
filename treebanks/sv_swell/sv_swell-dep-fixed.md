---
layout: base
title:  'Statistics of fixed in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `fixed`

This relation is universal.

10 nodes (0%) are attached to their parents as `fixed`.

10 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.2.

The following 5 pairs of parts of speech are connected with `fixed`: <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-SCONJ.html">SCONJ</a></tt> (6; 60% instances), <tt><a href="sv_swell-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> (1; 10% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-ADP.html">ADP</a></tt> (1; 10% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> (1; 10% instances), <tt><a href="sv_swell-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (1; 10% instances).


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


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 fixed	color:blue
1	Filmen	film	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	nsubj	_	_
2	börjar	börja	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	med	med	ADP	_	_	6	mark	_	_
4	att	att	SCONJ	_	_	6	mark	_	_
5	systern	syster	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	6	nsubj:pass	_	_
6	träffas	träffa	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	2	advcl	_	_
7	i	i	ADP	_	_	8	case	_	_
8	huvudet	huvud	NOUN	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	6	obl	_	_
9	av	av	ADP	_	_	10	case	_	_
10	våda	våda	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	obl:agent	_	_
11	vilket	vilken	PRON	_	Definite=Ind|Gender=Neut|Number=Sing|PronType=Rel	12	nsubj	_	_
12	leder	leda	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	advcl:relcl	_	_
13	till	till	ADP	_	_	16	mark	_	_
14	att	att	SCONJ	_	_	16	mark	_	_
15	de	de	PRON	_	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	16	nsubj:pass	_	CorrectionLabels=L-Ref
16	skiljs	skilja	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	12	advcl	_	_
17	åt	åt	ADV	_	_	16	compound:prt	_	_
18	fram	fram	ADV	_	ExtPos=ADV	23	case	_	_
19	tills	tills	ADP	_	_	18	fixed	_	_
20	den	den	DET	_	Definite=Def|Gender=Com|Number=Sing|PronType=Art	22	det	_	_
21	äldre	gammal	ADJ	_	Case=Nom|Degree=Cmp	22	amod	_	_
22	systerns	syster	NOUN	_	Case=Gen|Definite=Def|Gender=Com|Number=Sing	23	nmod:poss	_	_
23	kröningsdag	kröningsdag	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	16	obl	_	_
24	.	.	PUNCT	_	_	2	punct	_	_

~~~


