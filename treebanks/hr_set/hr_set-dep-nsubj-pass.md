---
layout: base
title:  'Statistics of nsubj:pass in UD_Croatian-SET'
udver: '2'
---

## Treebank Statistics: UD_Croatian-SET: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="hr_set-dep-nsubj.html">nsubj</a></tt>.

1037 nodes (1%) are attached to their parents as `nsubj:pass`.

595 instances of `nsubj:pass` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.47444551591128.

The following 23 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt> (632; 61% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt> (261; 25% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-PROPN.html">PROPN</a></tt> (66; 6% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-PRON.html">PRON</a></tt> (14; 1% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (10; 1% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-PRON.html">PRON</a></tt> (9; 1% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-NUM.html">NUM</a></tt> (6; 1% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-X.html">X</a></tt> (4; 0% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="hr_set-pos-AUX.html">AUX</a></tt>-<tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="hr_set-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="hr_set-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-AUX.html">AUX</a></tt>-<tt><a href="hr_set-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:pass	color:blue
1	Pejović	Pejović	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	kaže	kazati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	kako	kako	SCONJ	_	_	7	mark	_	_
4	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
5	romansa	romansa	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	7	nsubj:pass	_	_
6	bila	biti	AUX	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	7	aux:pass	_	_
7	osuđena	osuditi	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	2	ccomp	_	_
8	na	na	ADP	_	Case=Acc	9	case	_	_
9	propast	propast	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	Struja	struja	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj:pass	_	_
2	će	htjeti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	4	expl:pv	_	_
4	prodavati	prodavati	VERB	_	VerbForm=Inf	0	root	_	_
5	HEP-u	HEP	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	4	obj	_	_
6	po	po	ADP	_	Case=Loc	8	case	_	_
7	poticajnoj	poticajan	ADJ	_	Case=Loc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
8	cijeni	cijena	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Hrvatska	Hrvatska	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	2	nsubj:pass	_	_
2	pozvana	pozvati	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
3	na	na	ADP	_	Case=Acc	4	case	_	_
4	ubrzanje	ubrzanje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	2	obl	_	_
5	reformi	reforma	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	4	nmod	_	_
6	koje	koji	DET	_	Case=Acc|Gender=Fem|Number=Plur|PronType=Int,Rel	7	obj	_	_
7	traži	tražiti	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl	_	_
8	EU	EU	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_

~~~


