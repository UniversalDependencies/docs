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

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (15; 44% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (10; 29% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (6; 18% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj	color:blue
1	Denna	denna	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing	2	det	2:det	_
2	klausul	klausul	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	3	nsubj	3:nsubj	_
3	inkluderar	inkludera	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	tiden	tid	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	3	obj	3:obj	_
5	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	6	expl	6:expl	_
6	tar	ta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	4:acl:relcl	_
7	att	att	PART	IE	_	8	mark	8:mark	_
8	resa	resa	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	6	csubj	6:csubj	_
9	till	till	ADP	PP	_	11	case	11:case	_
10	klienternas	klient	NOUN	NN|UTR|PLU|DEF|GEN	Case=Gen|Definite=Def|Gender=Com|Number=Plur	11	nmod:poss	11:nmod:poss	_
11	hem	hem	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	8	obl	8:obl:till	_
12	under	under	ADP	PP	_	13	case	13:case	_
13	arbetstid	arbetstid	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	8	obl	8:obl:under	SpaceAfter=No
14	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 csubj	color:blue
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


