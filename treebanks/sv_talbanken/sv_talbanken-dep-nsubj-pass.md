---
layout: base
title:  'Statistics of nsubj:pass in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="sv_talbanken-dep-nsubj.html">nsubj</a></tt>.

1330 nodes (1%) are attached to their parents as `nsubj:pass`.

1088 instances of `nsubj:pass` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.74285714285714.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (976; 73% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt> (327; 25% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (15; 1% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	Två	två	NUM	RG|NOM	Case=Nom|NumType=Card	2	nummod	2:nummod	_
2	huvudfaktorer	huvudfaktor	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	4	nsubj:pass	4:nsubj:pass	_
3	kan	kunna	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
4	urskiljas	urskilja	VERB	VB|INF|SFO	VerbForm=Inf|Voice=Pass	0	root	0:root	_
5	som	som	PRON	HP|-|-|-	PronType=Rel	6	nsubj	6:nsubj|9:nsubj	_
6	förklarar	förklara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	2:acl	_
7	men	men	CCONJ	KN	_	9	cc	9:cc	_
8	inte	inte	PART	AB	Polarity=Neg	9	advmod	9:advmod	_
9	ursäktar	ursäkta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	2:acl|6:conj:men	SpaceAfter=No
10	:	:	PUNCT	MAD	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Detta	denna	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	2	nsubj:pass	2:nsubj:pass	_
2	återspeglas	återspegla	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	_
3	också	också	ADV	AB	_	2	advmod	2:advmod	_
4	i	i	ADP	PP	_	5	case	5:case	_
5	siffrorna	siffra	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	2	obl	2:obl:i	_
6	för	för	ADP	PP	_	7	case	7:case	_
7	gymnasiet	gymnasium	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	5	nmod	5:nmod:för	SpaceAfter=No
8	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:pass	color:blue
1	De	en	DET	DT|UTR/NEU|PLU|DEF	Definite=Def|Number=Plur|PronType=Art	2	det	2:det	_
2	intagna	ta_in	ADJ	PC|PRF|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Number=Plur|Tense=Past|VerbForm=Part	3	nsubj:pass	3:nsubj:pass|6:nsubj:pass	_
3	isoleras	isolera	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	_
4	socialt	social	ADV	AB|POS	Degree=Pos	3	advmod	3:advmod	_
5	och	och	CCONJ	KN	_	6	cc	6:cc	_
6	återfaller	återfalla	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	3:conj:och	_
7	i	i	ADP	PP	_	9	case	9:case	_
8	stor	stor	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	9	amod	9:amod	_
9	utsträckning	utsträckning	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	obl	6:obl:i	_
10	till	till	ADP	PP	_	11	case	11:case	_
11	brottslighet	brottslighet	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	obl	6:obl:till	SpaceAfter=No
12	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~


