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

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (974; 73% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt> (327; 25% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (16; 1% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-NUM.html">NUM</a></tt> (3; 0% instances).


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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nsubj:pass	color:blue
1	Vid	vid	ADP	PP	_	3	case	3:case	_
2	varje	varje	DET	DT|UTR/NEU|SIN|IND	Definite=Ind|Number=Sing|PronType=Tot	3	det	3:det	_
3	kärnklyvning	kärnklyvning	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	obl	6:obl:vid	_
4	får	få	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	6:aux	_
5	ej	ej	PART	AB	Polarity=Neg	6	advmod	6:advmod	_
6	frigöras	frigöra	VERB	VB|INF|SFO	VerbForm=Inf|Voice=Pass	0	root	0:root	_
7	fler	fler	ADJ	JJ|POS|UTR/NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	6	nsubj:pass	6:nsubj:pass	_
8	än	än	SCONJ	KN	_	10	case	10:case	_
9	en	en	NUM	RG|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|NumType=Card	10	nummod	10:nummod	_
10	neutron	neutron	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	7	obl	7:obl:än	SpaceAfter=No
11	.	.	PUNCT	MAD	_	6	punct	6:punct	_

~~~


