---
layout: base
title:  'Statistics of dislocated in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `dislocated`

This relation is universal.

70 nodes (0%) are attached to their parents as `dislocated`.

66 instances of `dislocated` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.94285714285714.

The following 15 pairs of parts of speech are connected with `dislocated`: <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (26; 37% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt> (15; 21% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt> (10; 14% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sv_talbanken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 dislocated	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 dislocated	color:blue
1	Vilken	vilken	PRON	HP|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Int	3	dislocated	3:dislocated	_
2	som	som	PRON	HP|-|-|-	PronType=Rel	3	nsubj	3:nsubj	_
3	väljs	välja	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	7	csubj	7:csubj	_
4	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
5	alltså	alltså	ADV	AB	_	7	advmod	7:advmod	_
6	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	7	det	7:det	_
7	avvägning	avvägning	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	0:root	_
8	mellan	mellan	ADP	PP	_	9	case	9:case	_
9	tycke	tycke	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	7	nmod	7:nmod:mellan	_
10	och	och	CCONJ	KN	_	11	cc	11:cc	_
11	ekonomi	ekonomi	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	9	conj	7:nmod:mellan|9:conj:och	SpaceAfter=No
12	.	.	PUNCT	MAD	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 dislocated	color:blue
1	Vad	vad	PRON	HP|NEU|SIN|IND	Definite=Ind|Number=Sing|PronType=Rel	4	dislocated	4:dislocated	_
2	som	som	PRON	HP|-|-|-	PronType=Rel	4	nsubj	4:nsubj	_
3	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
4	viktigast	viktig	ADJ	JJ|SUV|UTR/NEU|SIN/PLU|IND|NOM	Case=Nom|Definite=Ind|Degree=Sup	10	csubj	10:csubj	_
5	att	att	PART	IE	_	6	mark	6:mark	_
6	ta	ta	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	4	advcl	4:advcl:på	_
7	reda	reda	ADV	PL	_	6	compound:prt	6:compound:prt	_
8	på	på	ADP	PP	_	6	obl	6:obl:på	_
9	kan	kunna	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	10:aux	_
10	skifta	skifta	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	0:root	SpaceAfter=No
11	.	.	PUNCT	MAD	_	10	punct	10:punct	_

~~~


