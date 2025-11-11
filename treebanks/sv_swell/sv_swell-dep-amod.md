---
layout: base
title:  'Statistics of amod in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `amod`

This relation is universal.

420 nodes (5%) are attached to their parents as `amod`.

414 instances of `amod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11190476190476.

The following 8 pairs of parts of speech are connected with `amod`: <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (411; 98% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-DET.html">DET</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


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
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 amod	color:blue
1	Jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
2	tycker	tycka	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	att	att	SCONJ	_	_	7	mark	_	_
4	du	du	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	7	nsubj	_	_
5	kan	kunna	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
6	kanske	kanske	ADV	_	_	7	advmod	_	CorrectionLabels=S-Adv
7	gå	gå	VERB	_	VerbForm=Inf|Voice=Act	2	ccomp	_	_
8	till	till	ADP	_	_	9	case	_	CorrectionLabels=L-W
9	dansklassen	dansklass	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	obl	_	CorrectionLabels=L-W;M-Def
10	och	och	CCONJ	_	_	11	cc	_	_
11	träffa	träffa	VERB	_	VerbForm=Inf|Voice=Act	7	conj	_	_
12	många	många	ADJ	_	Case=Nom|Degree=Pos	14	amod	_	_
13	nya	ny	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	14	amod	_	_
14	människor	människa	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	11	obj	_	_
15	som	som	PRON	_	PronType=Rel	16	nsubj	_	_
16	gillar	gilla	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	14	acl:relcl	_	_
17	att	att	PART	_	_	18	mark	_	_
18	dansa	dansa	VERB	_	VerbForm=Inf|Voice=Act	16	xcomp	_	_
19	lik	lik	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing|Typo=Yes	21	amod	_	CorrectionLabels=O-Comp
20	som	som	SCONJ	_	Typo=Yes	21	mark	_	CorrectionLabels=O-Comp:2
21	du	du	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	18	advcl	_	_
22	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
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


