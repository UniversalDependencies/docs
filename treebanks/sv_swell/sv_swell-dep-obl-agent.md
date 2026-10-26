---
layout: base
title:  'Statistics of obl:agent in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="sv_swell-dep-obl.html">obl</a></tt>.

5 nodes (0%) are attached to their parents as `obl:agent`.

5 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.8.

The following 1 pairs of parts of speech are connected with `obl:agent`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (5; 100% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 13 obl:agent	color:blue
1	Minoritetsspråk	minoritetsspråk	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	4	nsubj	_	CorrectionLabels=C
2	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	ett	en	DET	_	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	4	det	_	_
4	språk	språk	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
5	som	som	PRON	_	PronType=Rel	6	nsubj:pass	_	_
6	talas	tala	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	4	acl:relcl	_	_
7	i	i	ADP	_	_	9	case	_	_
8	ett	en	DET	_	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	9	det	_	_
9	land	land	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	6	obl	_	_
10	av	av	ADP	_	_	13	case	_	_
11	en	en	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	13	det	_	_
12	mindre	liten	ADJ	_	Case=Nom|Degree=Cmp	13	amod	_	_
13	grupp	grupp	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	obl:agent	_	_
14	i	i	ADP	_	_	15	case	_	_
15	samhället	samhälle	NOUN	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	13	nmod	_	_
16	.	.	PUNCT	_	_	4	punct	_	_

~~~


