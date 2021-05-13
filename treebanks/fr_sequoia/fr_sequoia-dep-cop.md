---
layout: base
title:  'Statistics of cop in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `cop`

This relation is universal.

563 nodes (1%) are attached to their parents as `cop`.

535 instances of `cop` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.11545293072824.

The following 7 pairs of parts of speech are connected with `cop`: <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-AUX.html">AUX</a></tt> (265; 47% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-AUX.html">AUX</a></tt> (256; 45% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-AUX.html">AUX</a></tt> (27; 5% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_sequoia-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	comité	comité	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	inchangé	inchangé	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
5	:	:	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	Angiox	Angiox	PROPN	_	_	4	nsubj	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	anticoagulant	anticoagulant	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
5	;	;	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cop	color:blue
1	Je	il	PRON	_	Number=Sing|Person=1	4	nsubj	_	_
2	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	peut-être	peut-être	ADV	_	_	4	advmod	_	_
4	têtu	têtu	ADJ	_	Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	mais	mais	CCONJ	_	_	9	cc	_	_
7	c'	ce	PRON	_	Number=Sing|Person=3	9	nsubj	_	SpaceAfter=No
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	ce	ce	PRON	_	_	4	conj	_	_
10	que	que	PRON	_	PronType=Rel	12	obj	_	_
11	je	il	PRON	_	Number=Sing|Person=1	12	nsubj	_	_
12	crois	croire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	acl:relcl	_	_
13	sincèrement	sincèrement	ADV	_	_	12	advmod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	4	punct	_	_

~~~


