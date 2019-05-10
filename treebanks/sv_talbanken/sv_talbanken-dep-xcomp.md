---
layout: base
title:  'Statistics of xcomp in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `xcomp`

This relation is universal.

1057 nodes (1%) are attached to their parents as `xcomp`.

1028 instances of `xcomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.99053926206244.

The following 16 pairs of parts of speech are connected with `xcomp`: <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (394; 37% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (338; 32% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (265; 25% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt> (14; 1% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt> (13; 1% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="sv_talbanken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp	color:blue
1	Bördan	börda	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	dislocated	7:dislocated	_
2	att	att	PART	IE	_	3	mark	3:mark	_
3	fostra	fostra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	1	acl	1:acl:att	_
4	barn	barn	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	3	obj	3:obj	_
5	-	-	PUNCT	MID	_	1	punct	1:punct	_
6	uttrycket	uttryck	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	7	nsubj	7:nsubj|8:nsubj	_
7	låter	låta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	negativt	negativ	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	7	xcomp	7:xcomp	SpaceAfter=No
9	.	.	PUNCT	MAD	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 xcomp	color:blue
1	Börjar	börja	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	hennes	hon	PRON	PS|UTR/NEU|SIN/PLU|DEF	Definite=Def|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	_
3	jobb	jobb	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	1	nsubj	1:nsubj|5:nsubj	_
4	att	att	PART	IE	_	5	mark	5:mark	_
5	delas	dela	VERB	VB|INF|SFO	VerbForm=Inf|Voice=Pass	1	xcomp	1:xcomp	_
6	av	av	ADP	PP	_	9	case	9:case	_
7	den	en	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|PronType=Art	9	det	9:det	_
8	moderne	modern	ADJ	JJ|POS|MAS|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	9	amod	9:amod	_
9	mannen	man	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	5	obl:agent	5:obl:agent	SpaceAfter=No
10	?	?	PUNCT	MAD	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Hushållsarbetet	hushållsarbete	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	2	nsubj	2:nsubj|3:nsubj|5:nsubj	_
2	blir	bli	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	kock-	kocka	NOUN	NN|UTR|-|-|SMS	Gender=Com	2	xcomp	2:xcomp	_
4	och	och	CCONJ	KN	_	5	cc	5:cc	_
5	restaurangarbete	restaurangarbete	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	3	conj	2:xcomp|3:conj:och	SpaceAfter=No
6	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


