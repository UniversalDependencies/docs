---
layout: base
title:  'Statistics of ccomp in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `ccomp`

This relation is universal.

513 nodes (1%) are attached to their parents as `ccomp`.

503 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.04678362573099.

The following 11 pairs of parts of speech are connected with `ccomp`: <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (395; 77% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (72; 14% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (29; 6% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt> (7; 1% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp	color:blue
1	Man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	3	nsubj	3:nsubj	_
2	kan	kunna	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	3:aux	_
3	fråga	fråga	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	0:root	_
4	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def|PronType=Prs	3	iobj	3:iobj	_
5	hur	hur	ADV	HA	_	8	advmod	8:advmod	CxnElt=8:Interrogative-WHInfo-Indirect.WHWord
6	dessa	denna	DET	DT|UTR/NEU|PLU|DEF	Definite=Def|Number=Plur|PronType=Dem	7	det	7:det	_
7	barn	barn	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	8	nsubj	8:nsubj	_
8	blir	bli	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	3:ccomp	Cxn=Interrogative-WHInfo-Indirect|CxnElt=8:Interrogative-WHInfo-Indirect.Clause|SpaceAfter=No
9	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	De	de	PRON	PN|UTR/NEU|PLU|DEF|SUB	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	2	nsubj	2:nsubj	_
2	fattar	fatta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	inte	inte	PART	AB	Polarity=Neg	2	advmod	2:advmod	_
4	hur	hur	ADV	HA	_	5	advmod	5:advmod	CxnElt=5:Interrogative-WHInfo-Indirect.WHWord
5	dåligt	dålig	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	2	ccomp	2:ccomp	Cxn=Interrogative-WHInfo-Indirect|CxnElt=5:Interrogative-WHInfo-Indirect.Clause
6	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	5	nsubj	5:nsubj	_
7	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	SpaceAfter=No
8	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 ccomp	color:blue
1	Givetvis	givetvis	ADV	AB	_	4	advmod	4:advmod	_
2	får	få	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
3	man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	4	nsubj	4:nsubj	_
4	beakta	beakta	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	0:root	_
5	att	att	SCONJ	SN	_	9	mark	9:mark	_
6	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	9	nsubj	9:nsubj	_
7	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
8	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	9	det	9:det	_
9	fråga	fråga	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	ccomp	4:ccomp	_
10	om	om	ADP	PP	_	11	case	11:case	_
11	pengar	pengar	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	9	nmod	9:nmod:om	SpaceAfter=No
12	.	.	PUNCT	MAD	_	4	punct	4:punct	_

~~~


