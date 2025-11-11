---
layout: base
title:  'Statistics of reparandum in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `reparandum`

This relation is universal.

8 nodes (0%) are attached to their parents as `reparandum`.

8 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.5.

The following 8 pairs of parts of speech are connected with `reparandum`: <tt><a href="sv_swell-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="sv_swell-pos-CCONJ.html">CCONJ</a></tt> (1; 13% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (1; 13% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADP.html">ADP</a></tt> (1; 13% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-CCONJ.html">CCONJ</a></tt> (1; 13% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (1; 13% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (1; 13% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 reparandum	color:blue
1	Enligt	enligt	ADP	_	_	2	case	_	_
2	studier	studie	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	3	obl	_	_
3	finns	finnas	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	expl	_	_
5	bara	bara	ADV	_	_	6	advmod	_	_
6	6-8000	6-8000	NUM	_	NumType=Card	7	nummod	_	_
7	språk	språk	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	3	nsubj	_	_
8	nu	nu	ADV	_	_	3	advmod	_	_
9	idag	idag	ADV	_	_	3	advmod	_	_
10	men	men	CCONJ	_	_	11	reparandum	_	CorrectionLabels=S-R
11	och	och	CCONJ	_	_	15	cc	_	_
12	hälften	hälft	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	15	nsubj:pass	_	_
13	av	av	ADP	_	_	14	case	_	_
14	de	de	PRON	_	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	12	nmod	_	CorrectionLabels=M-Case
15	hotas	hota	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	3	conj	_	_
16	att	att	PART	_	_	17	mark	_	_
17	dö	dö	VERB	_	VerbForm=Inf|Voice=Act	15	xcomp	_	_
18	ut	ut	ADV	_	_	17	compound:prt	_	_
19	innan	innan	SCONJ	_	_	22	mark	_	_
20	seklet	sekel	NOUN	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	22	nsubj	_	_
21	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	22	cop	_	_
22	slut	slut	ADJ	_	Case=Nom|Degree=Pos	17	advcl	_	_
23	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 8 reparandum	color:blue
1	Australien	Australien	PROPN	_	Case=Nom	2	nsubj	_	_
2	ligger	ligga	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	direkt	direkt	ADV	_	Degree=Pos	2	advmod	_	_
4	efter	efter	ADP	_	_	6	case	_	_
5	Nya	ny	ADJ	_	Case=Nom|Definite=Def|Degree=Pos	6	amod	_	_
6	Zeeland	Zeeland	PROPN	_	Case=Nom	2	obl	_	_
7	och	och	CCONJ	_	_	13	reparandum	_	CorrectionLabels=S-R
8	sista	sista	ADJ	_	Case=Nom|Definite=Def|Degree=Sup	13	reparandum	_	CorrectionLabels=S-R
9	platserna	plats	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Plur	13	reparandum	_	CorrectionLabels=S-R
10	ligger	ligga	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	13	reparandum	_	CorrectionLabels=S-R
11	på	på	ADP	_	_	13	case	_	_
12	sista	sista	ADJ	_	Case=Nom|Definite=Def|Degree=Sup	13	amod	_	_
13	platserna	plats	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Plur	2	obl	_	_
14	i	i	ADP	_	_	15	case	_	_
15	listan	lista	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	13	nmod	_	_
16	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 reparandum	color:blue
1	Kommer	komma	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	du	du	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	1	nsubj	_	_
3	ihag	ihag	ADV	_	Typo=Yes	1	compound:prt	_	CorrectionLabels=O
4	for	for	SCONJ	_	_	7	mark	_	CorrectionLabels=S-R
5	vi	vi	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	7	nsubj	_	_
6	ska	skola	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
7	ge	ge	VERB	_	VerbForm=Inf|Voice=Act	1	ccomp	_	_
8	till	till	ADP	_	_	12	reparandum	_	CorrectionLabels=S-R
9	bröllopsprecent	bröllopsprecent	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Typo=Yes	7	obj	_	CorrectionLabels=O
10	till	till	ADP	_	_	12	case	_	_
11	mina	jag	PRON	_	Definite=Def|Number=Plur|Poss=Yes|PronType=Prs	12	nmod:poss	_	_
12	vänner	vän	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	7	obl	_	_
13	.	.	PUNCT	_	_	1	punct	_	CorrectionLabels=P-W

~~~


