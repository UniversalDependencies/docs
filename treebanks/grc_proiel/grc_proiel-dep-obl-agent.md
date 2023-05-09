---
layout: base
title:  'Statistics of obl:agent in UD_Ancient_Greek-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Ancient_Greek-PROIEL: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="grc_proiel-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="grc_proiel-dep-obl-arg.html">obl:arg</a></tt>.

478 nodes (0%) are attached to their parents as `obl:agent`.

326 instances of `obl:agent` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.58786610878661.

The following 11 pairs of parts of speech are connected with `obl:agent`: <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-NOUN.html">NOUN</a></tt> (194; 41% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-PRON.html">PRON</a></tt> (136; 28% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-PROPN.html">PROPN</a></tt> (72; 15% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-ADJ.html">ADJ</a></tt> (54; 11% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt> (12; 3% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="grc_proiel-pos-ADP.html">ADP</a></tt>-<tt><a href="grc_proiel-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="grc_proiel-pos-ADP.html">ADP</a></tt>-<tt><a href="grc_proiel-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="grc_proiel-pos-ADV.html">ADV</a></tt>-<tt><a href="grc_proiel-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 obl:agent	color:blue
1	τραφῆναι	τρέφω	VERB	V-	Aspect=Perf|Tense=Past|VerbForm=Inf|Voice=Pass	3	ccomp	_	ref=1.122.3
2	δὲ	δέ	ADV	Df	_	3	discourse	_	ref=1.122.3
3	ἔλεγε	λέγω	VERB	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=1.122.3
4	ὑπὸ	ὑπό	ADP	R-	_	8	case	_	ref=1.122.3
5	τῆς	ὁ	DET	S-	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Dem	8	det	_	ref=1.122.3
6	τοῦ	ὁ	DET	S-	Case=Gen|Definite=Def|Gender=Masc,Neut|Number=Sing|PronType=Dem	7	det	_	ref=1.122.3
7	βουκόλου	βούκολος	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	ref=1.122.3
8	γυναικός	γυνή	NOUN	Nb	Case=Gen|Gender=Fem|Number=Sing	1	obl:agent	_	ref=1.122.3

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 obl:agent	color:blue
1	τὰ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Dem	3	det	_	ref=5.35.3
2	δὲ	δέ	ADV	Df	_	4	discourse	_	ref=5.35.3
3	στίγματα	στίγμα	NOUN	Nb	Case=Nom|Gender=Neut|Number=Plur	4	nsubj	_	ref=5.35.3
4	ἐσήμαινε	σημαίνω	VERB	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=5.35.3
5	ὡς	ὡς	ADV	Dq	PronType=Rel	9	advcl	_	ref=5.35.3
6	καὶ	καί	ADV	Df	_	9	advmod	_	ref=5.35.3|LId=1
7	πρότερόν	πρότερος	ADJ	A-	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	9	advmod	_	ref=5.35.3
8	μοι	ἐγώ	PRON	Pp	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	9	obl:agent	_	ref=5.35.3
9	εἴρηται	λέγω	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	4	advcl	_	ref=5.35.3
10	ἀπόστασιν	ἀπόστασις	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	ref=5.35.3

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 obl:agent	color:blue
1	ἀπικόμενος	ἀφικνέομαι	VERB	V-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Mid	3	advcl	_	ref=1.30.1
2	δὲ	δέ	ADV	Df	_	3	discourse	_	ref=1.30.1
3	ἐξεινίζετο	ξενίζω	VERB	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	ref=1.30.1
4	ἐν	ἐν	ADP	R-	_	6	case	_	ref=1.30.1
5	τοῖσι	ὁ	DET	S-	Case=Dat|Definite=Def|Gender=Masc,Neut|Number=Plur|PronType=Dem	6	det	_	ref=1.30.1
6	βασιληίοισι	βασίλειον	NOUN	Nb	Case=Dat|Gender=Neut|Number=Plur	3	obl	_	ref=1.30.1
7	ὑπὸ	ὑπό	ADP	R-	_	9	case	_	ref=1.30.1
8	τοῦ	ὁ	DET	S-	Case=Gen|Definite=Def|Gender=Masc,Neut|Number=Sing|PronType=Dem	9	det	_	ref=1.30.1
9	Κροίσου	Κροῖσος	PROPN	Ne	Case=Gen|Gender=Masc|Number=Sing	3	obl:agent	_	ref=1.30.1

~~~


