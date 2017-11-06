---
layout: base
title:  'Statistics of csubj in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="sv_pud-dep-csubj-pass.html">csubj:pass</a></tt>.

34 nodes (0%) are attached to their parents as `csubj`.

30 instances of `csubj` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.11764705882353.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (13; 38% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (10; 29% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (6; 18% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (3; 9% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj	color:blue
1	I	i	ADP	PP	_	3	case	_	_
2	detta	denna	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing	3	det	_	_
3	sammanhang	sammanhang	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	6	obl	_	_
4	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
5	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	6	expl	_	_
6	rimligt	rimlig	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
7	att	att	PART	IE	_	8	mark	_	_
8	rasa	rasa	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	6	csubj	_	_
9	mot	mot	ADP	PP	_	10	case	_	_
10	handeln	handel	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	8	obl	_	SpaceAfter=No
11	.	.	PUNCT	MAD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj	color:blue
1	Denna	denna	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing	2	det	_	_
2	klausul	klausul	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	3	nsubj	_	_
3	inkluderar	inkludera	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	tiden	tid	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	3	obj	_	_
5	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	6	expl	_	_
6	tar	ta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	_	_
7	att	att	PART	IE	_	8	mark	_	_
8	resa	resa	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	6	csubj	_	_
9	till	till	ADP	PP	_	11	case	_	_
10	klienternas	klient	NOUN	NN|UTR|PLU|DEF|GEN	Case=Gen|Definite=Def|Gender=Com|Number=Plur	11	nmod:poss	_	_
11	hem	hem	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	8	obl	_	_
12	under	under	ADP	PP	_	13	case	_	_
13	arbetstid	arbetstid	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	8	obl	_	SpaceAfter=No
14	.	.	PUNCT	MAD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 csubj	color:blue
1	Det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	4	expl	_	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	hans	hans	DET	PS|UTR/NEU|SIN/PLU|DEF	Definite=Def|Poss=Yes	4	nmod:poss	_	_
4	dröm	dröm	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
5	att	att	PART	IE	_	6	mark	_	_
6	sluta	sluta	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	4	csubj	_	_
7	sin	sin	DET	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes	8	nmod:poss	_	_
8	karriär	karriär	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	obj	_	_
9	här	här	ADV	AB	_	6	advmod	_	SpaceAfter=No
10	.	.	PUNCT	MAD	_	4	punct	_	_

~~~


