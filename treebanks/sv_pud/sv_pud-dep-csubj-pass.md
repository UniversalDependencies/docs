---
layout: base
title:  'Statistics of csubj:pass in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="sv_pud-dep-csubj.html">csubj</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 csubj:pass	color:blue
1	Vid	vid	ADP	PP	_	3	case	3:case	_
2	ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing	3	det	3:det	_
3	tillfälle	tillfälle	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	4	obl	4:obl:vid	_
4	antyds	antyda	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	_
5	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	4	expl	4:expl	_
6	att	att	SCONJ	SN	_	10	mark	10:mark	_
7	han	han	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	10	nsubj	10:nsubj	_
8	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	10:cop	_
9	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing	10	det	10:det	_
10	agent	agent	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	csubj:pass	4:csubj:pass|15:nmod:poss	_
11	under	under	ADP	PP	_	12	case	12:case	_
12	täckmantel	täckmantel	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	10	nmod	10:nmod:under	SpaceAfter=No
13	,	,	PUNCT	MID	_	15	punct	15:punct	_
14	vars	vars	PRON	HS|DEF	Definite=Def|Poss=Yes|PronType=Int,Rel	15	nmod:poss	10:ref	_
15	mål	mål	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	10	acl:relcl	10:acl:relcl	_
16	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	15	cop	15:cop	_
17	Homer	Homer	PROPN	PM|NOM	Case=Nom	15	nsubj	15:nsubj	SpaceAfter=No
18	.	.	PUNCT	MAD	_	4	punct	4:punct	_

~~~


