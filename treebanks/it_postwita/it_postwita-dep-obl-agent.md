---
layout: base
title:  'Statistics of obl:agent in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-obl.html">obl</a></tt>.

153 nodes (0%) are attached to their parents as `obl:agent`.

149 instances of `obl:agent` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.08496732026144.

The following 9 pairs of parts of speech are connected with `obl:agent`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (81; 53% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (44; 29% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (14; 9% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (7; 5% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 obl:agent	color:blue
1	DI	DI	PROPN	SP	_	4	nmod	_	_
2	RUSCIO	RUSCIO	PROPN	SP	_	1	flat:name	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	1	punct	_	_
4	ritengo	ritenere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	ingiusto	ingiusto	ADJ	A	Gender=Masc|Number=Sing	4	xcomp	_	_
6	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	decreto	decreto	NOUN	S	Gender=Masc|Number=Sing	4	obj	_	_
8	varato	varare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	acl	_	_
9	da	da	ADP	E	_	11	case	_	_
10	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	Governo	governo	NOUN	S	Gender=Masc|Number=Sing	8	obl:agent	_	_
12	Monti	Monti	PROPN	SP	_	11	nmod	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:agent	color:blue
1	Mario	mario	PROPN	SP	_	0	root	_	_
2	Monti	Monti	PROPN	SP	_	1	flat:name	_	_
3	appoggiato	appoggiare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	1	acl	_	_
4	da	da	ADP	E	_	5	case	_	_
5	Pdl	Pdl	PROPN	SP	_	3	obl:agent	_	_
6	-	-	PUNCT	FB	_	7	punct	_	_
7	Pd	Pd	PROPN	SP	_	5	conj	_	_
8	e	e	CCONJ	CC	_	10	cc	_	_
9	terzo	terzo	ADJ	NO	Gender=Masc|Number=Sing|NumType=Ord	10	amod	_	_
10	Polo	Polo	PROPN	SP	_	5	conj	_	_
11	#elezioni	#elezioni	SYM	SYM	_	1	parataxis:hashtag	_	_
12	#308	#308	SYM	SYM	_	1	parataxis:hashtag	_	SpaceAfter=No
13	?	?	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 obl:agent	color:blue
1	RT	retweet	NOUN	S	_	4	dep	_	_
2	@user1	@user1	SYM	SYM	_	4	vocative:mention	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	2	punct	_	_
4	#Onfray	#Onfray	SYM	SYM	_	0	root	_	_
5	e	e	CCONJ	CC	_	6	cc	_	_
6	#Escobar	#Escobar	SYM	SYM	_	4	conj	_	_
7	su	su	ADP	E	_	8	case	_	_
8	#Camus	#Camus	SYM	SYM	_	4	obl	_	_
9	e	e	CCONJ	CC	_	11	cc	_	_
10	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	lezione	lezione	NOUN	S	Gender=Fem|Number=Sing	8	conj	_	_
12	appresa	apprendere	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	11	acl	_	_
13	da	da	ADP	E	_	14	case	_	_
14	#Nietzsche	#Nietzsche	SYM	SYM	_	12	obl:agent	_	_
15	@user2	@user2	SYM	SYM	_	4	vocative:mention	_	_
16	copertina	copertina	NOUN	S	Gender=Fem|Number=Sing	4	parataxis	_	_
17	@user3	@user3	SYM	SYM	_	16	nmod	_	_

~~~


