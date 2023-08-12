---
layout: base
title:  'Statistics of nsubj:outer in UD_Ancient_Greek-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Ancient_Greek-PROIEL: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="grc_proiel-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="grc_proiel-dep-nsubj-pass.html">nsubj:pass</a></tt>.

36 nodes (0%) are attached to their parents as `nsubj:outer`.

33 instances of `nsubj:outer` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.13888888888889.

The following 8 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-PRON.html">PRON</a></tt> (12; 33% instances), <tt><a href="grc_proiel-pos-ADV.html">ADV</a></tt>-<tt><a href="grc_proiel-pos-NOUN.html">NOUN</a></tt> (10; 28% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-NOUN.html">NOUN</a></tt> (5; 14% instances), <tt><a href="grc_proiel-pos-ADJ.html">ADJ</a></tt>-<tt><a href="grc_proiel-pos-ADJ.html">ADJ</a></tt> (2; 6% instances), <tt><a href="grc_proiel-pos-ADV.html">ADV</a></tt>-<tt><a href="grc_proiel-pos-PRON.html">PRON</a></tt> (2; 6% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-ADJ.html">ADJ</a></tt> (2; 6% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="grc_proiel-pos-PRON.html">PRON</a></tt>-<tt><a href="grc_proiel-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj:outer	color:blue
1	οὗτοι	οὗτος	PRON	Pd	Case=Nom|Gender=Masc|Number=Plur	7	nsubj:outer	_	ref=7.111.2
2	οἱ	ὅς	PRON	Pr	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	7	nsubj	_	ref=7.111.2
3	Διονύσου	Διόνυσος	PROPN	Ne	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	ref=7.111.2
4	τὸ	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	5	det	_	ref=7.111.2
5	μαντήιον	μαντεῖον	NOUN	Nb	Case=Acc|Gender=Neut|Number=Sing	7	obj	_	ref=7.111.2
6	εἰσὶ	εἰμί	AUX	V-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	ref=7.111.2|LId=1
7	ἐκτημένοι	κτάομαι	VERB	V-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	ref=7.111.2

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 nsubj:outer	color:blue
1	οὗ	οὗ	ADV	Dq	PronType=Rel	0	root	_	ref=2COR_3.17
2	δὲ	δέ	ADV	Df	_	1	discourse	_	ref=2COR_3.17
3	τὸ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	4	det	_	ref=2COR_3.17
4	πνεῦμα	πνεῦμα	NOUN	Nb	Case=Nom|Gender=Neut|Number=Sing	1	nsubj	_	ref=2COR_3.17
5	κυρίου	κύριος	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	ref=2COR_3.17
6	ἐλευθερία	ἐλευθερία	NOUN	Nb	Case=Nom|Gender=Fem|Number=Sing	1	nsubj:outer	_	ref=2COR_3.17

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 5 nsubj:outer	color:blue
1	οἱ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	5	det	_	ref=LUKE_8.13
2	δὲ	δέ	ADV	Df	_	11	discourse	_	ref=LUKE_8.13
3	ἐπὶ	ἐπί	ADP	R-	_	5	case	_	ref=LUKE_8.13
4	τὴν	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	ref=LUKE_8.13
5	πέτραν	πέτρα	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	11	nsubj:outer	_	ref=LUKE_8.13
6	οἳ	ὅς	PRON	Pr	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	11	nsubj	_	ref=LUKE_8.13
7	ὅταν	ὅταν	ADV	Dq	PronType=Rel	8	advcl	_	ref=LUKE_8.13
8	ἀκούσωσιν	ἀκούω	VERB	V-	Aspect=Perf|Mood=Sub|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	11	advcl	_	ref=LUKE_8.13
9	μετὰ	μετά	ADP	R-	_	10	case	_	ref=LUKE_8.13
10	χαρᾶς	χαρά	NOUN	Nb	Case=Gen|Gender=Fem|Number=Sing	11	obl	_	ref=LUKE_8.13
11	δέχονται	δέχομαι	VERB	V-	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	ref=LUKE_8.13
12	τὸν	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	13	det	_	ref=LUKE_8.13
13	λόγον	λόγος	NOUN	Nb	Case=Acc|Gender=Masc|Number=Sing	11	obj	_	ref=LUKE_8.13

~~~


