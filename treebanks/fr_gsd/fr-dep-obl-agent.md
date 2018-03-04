---
layout: base
title:  'Statistics of obl:agent in UD_French'
udver: '2'
---

## Treebank Statistics: UD_French: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="fr-dep-obl.html">obl</a></tt>.

19 nodes (0%) are attached to their parents as `obl:agent`.

19 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.78947368421053.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-NOUN.html">NOUN</a></tt> (12; 63% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-PROPN.html">PROPN</a></tt> (7; 37% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 13 obl:agent	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj:caus	_	_
2	se	se	PRON	_	Person=3|PronType=Prs	5	obj	_	_
3	fait	faire	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:caus	_	_
4	cependant	cependant	ADV	_	_	5	advmod	_	_
5	remplacer	remplacer	VERB	_	VerbForm=Inf	0	root	_	_
6	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	moitié	moitié	NOUN	_	Gender=Fem|Number=Sing	5	obl	_	_
8	de	de	ADP	_	_	10	case	_	_
9	l'	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	SpaceAfter=No
10	année	année	NOUN	_	Gender=Fem|Number=Sing	7	nmod	_	_
11	par	par	ADP	_	_	13	case	_	_
12	sa	son	DET	_	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	13	det	_	_
13	sœur	sœur	NOUN	_	Gender=Fem|Number=Sing	5	obl:agent	_	_
14	Geshtinanna	Geshtinanna	PROPN	_	_	13	appos	_	SpaceAfter=No
15	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 obl:agent	color:blue
1	Je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	viens	venir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	de	de	ADP	_	_	2	fixed	_	_
4	faire	faire	AUX	_	VerbForm=Inf	5	aux:caus	_	_
5	changer	changer	VERB	_	VerbForm=Inf	2	xcomp	_	_
6	mon	son	DET	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	7	det	_	_
7	ordinateur	ordinateur	NOUN	_	Gender=Masc|Number=Sing	5	obj	_	_
8	par	par	ADP	_	_	9	case	_	_
9	Aramis	Aramis	PROPN	_	_	5	obl:agent	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


