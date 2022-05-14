---
layout: base
title:  'Statistics of nsubj:pass in UD_Ancient_Greek-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Ancient_Greek-PROIEL: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="grc_proiel-dep-nsubj.html">nsubj</a></tt>.

1949 nodes (1%) are attached to their parents as `nsubj:pass`.

1127 instances of `nsubj:pass` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.86146741918933.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-NOUN.html">NOUN</a></tt> (949; 49% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-ADJ.html">ADJ</a></tt> (350; 18% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-PRON.html">PRON</a></tt> (302; 15% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-PROPN.html">PROPN</a></tt> (214; 11% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt> (112; 6% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-NUM.html">NUM</a></tt> (17; 1% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj:pass	color:blue
1	ἁφθεὶς	ἅπτω	VERB	V-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	5	advcl	_	Ref=1.19.1
2	δὲ	δέ	ADV	Df	_	5	discourse	_	Ref=1.19.1
3	ὁ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	Ref=1.19.1
4	νηὸς	ναός	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	5	nsubj:pass	_	Ref=1.19.1
5	κατεκαύθη	κατακαίω	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	Ref=1.19.1

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 nsubj:pass	color:blue
1	ἄνδρες	ἀνήρ	NOUN	Nb	Case=Voc|Gender=Masc|Number=Plur	8	vocative	_	Ref=6.9.3
2	Ἴωνες	Ἴων	NOUN	Nb	Case=Voc|Gender=Masc|Number=Plur	1	nmod	_	Ref=6.9.3
3	νῦν	νῦν	ADV	Df	_	8	advmod	_	LId=1|Ref=6.9.3
4	τις	τὶς	ADJ	Px	Case=Nom|Gender=Masc|Number=Sing	8	nsubj:pass	_	Ref=6.9.3
5	ὑμέων	ὑμεῖς	PRON	Pp	Case=Gen|Gender=Masc|Number=Plur|Person=2|PronType=Prs	4	nmod	_	Ref=6.9.3
6	εὖ	εὖ	ADV	Df	_	7	xcomp	_	Ref=6.9.3
7	ποιήσας	ποιέω	VERB	V-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	4	acl	_	Ref=6.9.3
8	φανήτω	φαίνω	VERB	V-	Aspect=Perf|Mood=Imp|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	Ref=6.9.3
9	τὸν	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	11	det	_	Ref=6.9.3
10	βασιλέος	βασιλεύς	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	Ref=6.9.3
11	οἶκον	οἶκος	NOUN	Nb	Case=Acc|Gender=Masc|Number=Sing	7	obj	_	Ref=6.9.3

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nsubj:pass	color:blue
1	ἐπορᾶν	ἐφοράω	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	4	xcomp	_	Ref=1.110.3
2	δὲ	δέ	ADV	Df	_	4	discourse	_	Ref=1.110.3
3	ἐκκείμενον	ἔκκειμαι	VERB	V-	Aspect=Perf|Case=Acc|Gender=Masc,Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Mid	1	xcomp	_	Ref=1.110.3
4	τέταγμαι	τάσσω	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	Ref=1.110.3
5	ἐγώ	ἐγώ	PRON	Pp	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs	4	nsubj:pass	_	Ref=1.110.3

~~~


