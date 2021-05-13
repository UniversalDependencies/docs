---
layout: base
title:  'Statistics of obl:agent in UD_Old_Church_Slavonic-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Old_Church_Slavonic-PROIEL: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="cu_proiel-dep-obl.html">obl</a></tt>.

75 nodes (0%) are attached to their parents as `obl:agent`.

64 instances of `obl:agent` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.12.

The following 5 pairs of parts of speech are connected with `obl:agent`: <tt><a href="cu_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="cu_proiel-pos-NOUN.html">NOUN</a></tt> (50; 67% instances), <tt><a href="cu_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="cu_proiel-pos-PRON.html">PRON</a></tt> (15; 20% instances), <tt><a href="cu_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="cu_proiel-pos-ADJ.html">ADJ</a></tt> (5; 7% instances), <tt><a href="cu_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="cu_proiel-pos-PROPN.html">PROPN</a></tt> (3; 4% instances), <tt><a href="cu_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="cu_proiel-pos-NUM.html">NUM</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 obl:agent	color:blue
1	Се	сь	DET	Pd	Case=Nom|Gender=Neut|Number=Sing	3	det	_	ref=MATT_21.4
2	же	же	ADV	Df	_	4	discourse	_	ref=MATT_21.4
3	вьсе	вьсь	ADJ	Px	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	_	ref=MATT_21.4
4	бꙑстъ	бꙑти	AUX	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_21.4
5	да	да	SCONJ	G-	_	6	mark	_	ref=MATT_21.4
6	събѫдетъ	събꙑти	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	advcl	_	ref=MATT_21.4
7	сѧ	себе	PRON	Pk	Case=Acc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	6	expl	_	ref=MATT_21.4
8	реченое	рещи	VERB	V-	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	6	nsubj	_	ref=MATT_21.4
9	п҃ркмъ	пророкъ	NOUN	Nb	Case=Ins|Gender=Masc|Number=Sing	8	obl:agent	_	ref=MATT_21.4
10	г҃лѭщемъ	глаголати	VERB	V-	Case=Ins|Gender=Masc,Neut|Number=Sing|Tense=Pres|Variant=Short|VerbForm=Part|Voice=Act	9	acl	_	ref=MATT_21.4

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 obl:agent	color:blue
1	горе	горѥ	INTJ	I-	_	0	root	_	ref=MATT_26.24
2	же	же	ADV	Df	_	1	discourse	_	ref=MATT_26.24
3	ч҃лвкоу	чловѣкъ	NOUN	Nb	Case=Dat|Gender=Masc|Number=Sing	1	iobj	_	ref=MATT_26.24
4	томоу	тъ	DET	Pd	Case=Dat|Gender=Masc,Neut|Number=Sing	3	det	_	ref=MATT_26.24
5	имьже	иже	PRON	Pr	Case=Ins|Gender=Masc|Number=Sing|PronType=Rel	8	obl:agent	_	ref=MATT_26.24
6	с҃нъ	сꙑнъ	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	ref=MATT_26.24|LId=1
7	ч҃скъ	чловѣчьскъ	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	ref=MATT_26.24
8	прѣдастъ	прѣдати	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl	_	ref=MATT_26.24
9	сѧ	себе	PRON	Pk	Case=Acc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	8	expl	_	ref=MATT_26.24

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 obl:agent	color:blue
1	ꙇ	и	CCONJ	C-	_	3	cc	_	ref=LUKE_4.15
2	тоу	тоу	ADV	Df	_	3	advmod	_	ref=LUKE_4.15
3	оучааше	оучити	VERB	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=LUKE_4.15
4	на	на	ADP	R-	_	5	case	_	ref=LUKE_4.15
5	сънъмищихъ	съньмище	NOUN	Nb	Case=Loc|Gender=Neut|Number=Plur	3	obl	_	ref=LUKE_4.15
6	ихъ	и	PRON	Pp	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	5	det	_	ref=LUKE_4.15
7	славимъ	славити	VERB	V-	Case=Nom|Gender=Masc|Number=Sing|Tense=Pres|Variant=Short|VerbForm=Part|Voice=Pass	3	advcl	_	ref=LUKE_4.15
8	вьсѣми	вьсь	ADJ	Px	Case=Ins|Gender=Masc|Number=Plur	7	obl:agent	_	ref=LUKE_4.15

~~~


