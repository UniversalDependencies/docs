---
layout: base
title:  'Statistics of expl in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `expl`

This relation is universal.

85 nodes (0%) are attached to their parents as `expl`.

67 instances of `expl` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8.

The following 6 pairs of parts of speech are connected with `expl`: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (50; 59% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (14; 16% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (11; 13% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (4; 5% instances), <tt><a href="sv_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (4; 5% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 expl	color:blue
1	Men	men	CCONJ	KN	_	3	cc	3:cc	_
2	ännu	ännu	ADV	AB	_	3	advmod	3:advmod	_
3	finns	finnas	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	_
4	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	3	expl	3:expl	_
5	frågor	fråga	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	3	nsubj	3:nsubj|9:nsubj	_
6	som	som	PRON	HP|-|-|-	PronType=Int,Rel	9	nsubj	5:ref	_
7	inte	inte	PART	AB	Polarity=Neg	9	advmod	9:advmod	_
8	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
9	besvarade	besvarad	ADJ	PC|PRF|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Number=Plur|Tense=Past|VerbForm=Part	5	acl:relcl	5:acl:relcl	SpaceAfter=No
10	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 expl	color:blue
1	I	i	ADP	PP	_	3	case	3:case	_
2	detta	denna	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing	3	det	3:det	_
3	sammanhang	sammanhang	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	6	obl	6:obl:i	_
4	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
5	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	6	expl	6:expl	_
6	rimligt	rimlig	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	0:root	_
7	att	att	PART	IE	_	8	mark	8:mark	_
8	rasa	rasa	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	6	csubj	6:csubj	_
9	mot	mot	ADP	PP	_	10	case	10:case	_
10	handeln	handel	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	8	obl	8:obl:mot	SpaceAfter=No
11	.	.	PUNCT	MAD	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 expl	color:blue
1	Det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	4	expl	4:expl	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
3	hans	hans	PRON	PS|UTR/NEU|SIN/PLU|DEF	Definite=Def|Poss=Yes	4	nmod:poss	4:nmod:poss	_
4	dröm	dröm	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	0:root	_
5	att	att	PART	IE	_	6	mark	6:mark	_
6	sluta	sluta	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	4	csubj	4:csubj	_
7	sin	sin	PRON	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes	8	nmod:poss	8:nmod:poss	_
8	karriär	karriär	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	obj	6:obj	_
9	här	här	ADV	AB	_	6	advmod	6:advmod	SpaceAfter=No
10	.	.	PUNCT	MAD	_	4	punct	4:punct	_

~~~


