---
layout: base
title:  'Statistics of discourse in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `discourse`

This relation is universal.

18 nodes (0%) are attached to their parents as `discourse`.

18 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 6 pairs of parts of speech are connected with `discourse`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> (7; 39% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-PART.html">PART</a></tt> (6; 33% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-NUM.html">NUM</a></tt> (2; 11% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-NUM.html">NUM</a></tt> (1; 6% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-PART.html">PART</a></tt> (1; 6% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-INTJ.html">INTJ</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 discourse	color:blue
1	När	när	SCONJ	_	_	3	mark	_	_
2	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	3	nsubj	_	_
3	kom	komma	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	8	advcl	_	_
4	kontakt	kontakt	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	3	obl	_	_
5	med	med	ADP	_	_	6	case	_	_
6	honom	han	PRON	_	Case=Acc|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	4	nmod	_	_
7	så	så	ADV	_	_	8	discourse	_	_
8	kändes	kännas	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
9	att	att	SCONJ	_	_	11	mark	_	_
10	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	11	nsubj	_	_
11	hittat	hitta	VERB	_	VerbForm=Sup|Voice=Act	8	csubj:pass	_	_
12	den	den	PRON	_	Definite=Def|Gender=Com|Number=Sing|PronType=Prs	11	obj	_	_
13	som	som	PRON	_	PronType=Rel	15	obl	_	_
14	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	15	nsubj	_	_
15	letade	leta	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	12	acl:relcl	_	_
16	efter	efter	ADP	_	_	13	case	_	_
17	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 discourse	color:blue
1	När	när	SCONJ	_	_	5	mark	_	_
2	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	5	nsubj	_	_
3	var	vara	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	_
4	25	25	NUM	_	Case=Nom|NumType=Card	5	nummod	_	_
5	år	år	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	7	advcl	_	_
6	så	så	PART	_	_	7	discourse	_	_
7	träffade	träffa	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	7	nsubj	_	_
9	min	jag	PRON	_	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	11	nmod:poss	_	_
10	första	första	ADJ	_	Case=Nom|NumType=Ord	11	amod	_	_
11	kärlik	kärlik	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Typo=Yes	7	obj	_	CorrectionLabels=O
12	som	som	PRON	_	PronType=Rel	16	obj	_	_
13	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	16	nsubj	_	_
14	kommer	komma	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	16	aux	_	_
15	alderig	alderig	ADV	_	Typo=Yes	16	advmod	_	CorrectionLabels=O;S-Adv
16	glömma	glömma	VERB	_	VerbForm=Inf|Voice=Act	11	acl:relcl	_	_
17	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	1	1	NUM	_	Case=Nom|NumType=Card	5	discourse	_	_
2	Jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	5	nsubj	_	_
3	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
4	alltid	alltid	ADV	_	_	5	advmod	_	_
5	tyckt	tycka	VERB	_	VerbForm=Sup|Voice=Act	0	root	_	_
6	om	om	ADP	_	_	5	compound:prt	_	_
7	kläder	kläder	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	5	obj	_	_
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


