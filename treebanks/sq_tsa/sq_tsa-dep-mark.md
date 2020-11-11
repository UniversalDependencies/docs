---
layout: base
title:  'Statistics of mark in UD_Albanian-TSA'
udver: '2'
---

## Treebank Statistics: UD_Albanian-TSA: Relations: `mark`

This relation is universal.

38 nodes (4%) are attached to their parents as `mark`.

38 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.71052631578947.

The following 6 pairs of parts of speech are connected with `mark`: <tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_tsa-pos-PART.html">PART</a></tt> (20; 53% instances), <tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_tsa-pos-SCONJ.html">SCONJ</a></tt> (8; 21% instances), <tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_tsa-pos-ADP.html">ADP</a></tt> (5; 13% instances), <tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_tsa-pos-SCONJ.html">SCONJ</a></tt> (3; 8% instances), <tt><a href="sq_tsa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_tsa-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_tsa-pos-ADV.html">ADV</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 mark	color:blue
1	Dashuria	dashuri	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	2	nsubj	5:nsubj|7:nsubj	_
2	mendohet	mendoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	0:root	_
3	zakonisht	zakonisht	ADV	_	_	2	advmod	2:advmod	_
4	e	i	DET	_	Gender=Fem	5	det:adj	5:det:adj	_
5	pamundshme	pamundshëm	ADJ	_	Gender=Fem|Number=Sing	2	ccomp	2:csubj	_
6	të	të	PART	_	_	7	mark	7:mark	_
7	përkufizohet	përkufizoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	5	xcomp	5:xcomp	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 mark	color:blue
1	Ata	ai	PRON	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Prs	4	nsubj	4:nsubj	_
2	janë	jam	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	4	cop	4:cop	_
3	të	i	DET	_	Gender=Masc	4	det:adj	4:det:adj	_
4	vetmit	vetmi	ADJ	_	Gender=Masc|Number=Plur	0	root	0:root	_
5	anëtarë	anëtar	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	4	nmod	4:nmod	_
6	që	që	SCONJ	_	_	8	mark	8:mark	_
7	kanë	kam	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	8	aux	8:aux	_
8	mbijetuar	mbijetoj	VERB	_	VerbForm=Part	4	acl:relcl	4:acl:relcl	_
9	prej	prej	ADP	_	_	10	case	10:case	_
10	gjinisë	gjini	NOUN	_	Case=Abl|Definite=Def|Gender=Fem|Number=Sing	8	obl	8:obl	_
11	Homo	homo	PROPN	_	_	10	nmod	10:nmod	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 mark	color:blue
1	Cilat	cili	PRON	_	Case=Nom|Gender=Fem|Number=Plur|Person=3|PronType=Int	0	root	0:root	_
2	janë	jam	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	1	cop	1:cop	_
3	mënyrat	mënyrë	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	1	nsubj	1:nsubj	_
4	për	për	ADP	_	_	6	mark	6:mark	_
5	të	të	PART	_	_	6	mark	6:mark	_
6	dashuruar	dashuroj	VERB	_	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	3	advcl	3:advcl	_
7	dhe	dhe	CCONJ	_	_	8	cc	8:cc	_
8	cila	cili	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Int	1	conj	1:conj	_
9	është	jam	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	8	cop	8:cop	_
10	fuqia	fuqi	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	8	nsubj	8:nsubj	_
11	për	për	ADP	_	_	13	mark	13:mark	_
12	të	të	PART	_	_	13	mark	13:mark	_
13	dashuruar	dashuroj	VERB	_	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	10	advcl	10:advcl	SpaceAfter=No
14	?	?	PUNCT	_	_	1	punct	1:punct	_

~~~


