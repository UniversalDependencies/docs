---
layout: base
title:  'Statistics of nsubj:outer in UD_Old_Church_Slavonic-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Old_Church_Slavonic-PROIEL: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="cu_proiel-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="cu_proiel-dep-nsubj-pass.html">nsubj:pass</a></tt>.

45 nodes (0%) are attached to their parents as `nsubj:outer`.

40 instances of `nsubj:outer` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.64444444444444.

The following 12 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="cu_proiel-pos-ADV.html">ADV</a></tt>-<tt><a href="cu_proiel-pos-NOUN.html">NOUN</a></tt> (9; 20% instances), <tt><a href="cu_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="cu_proiel-pos-PRON.html">PRON</a></tt> (9; 20% instances), <tt><a href="cu_proiel-pos-ADV.html">ADV</a></tt>-<tt><a href="cu_proiel-pos-ADJ.html">ADJ</a></tt> (5; 11% instances), <tt><a href="cu_proiel-pos-ADV.html">ADV</a></tt>-<tt><a href="cu_proiel-pos-PRON.html">PRON</a></tt> (4; 9% instances), <tt><a href="cu_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="cu_proiel-pos-NOUN.html">NOUN</a></tt> (4; 9% instances), <tt><a href="cu_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="cu_proiel-pos-VERB.html">VERB</a></tt> (4; 9% instances), <tt><a href="cu_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="cu_proiel-pos-ADJ.html">ADJ</a></tt> (3; 7% instances), <tt><a href="cu_proiel-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cu_proiel-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="cu_proiel-pos-ADV.html">ADV</a></tt>-<tt><a href="cu_proiel-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="cu_proiel-pos-AUX.html">AUX</a></tt>-<tt><a href="cu_proiel-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="cu_proiel-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cu_proiel-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="cu_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="cu_proiel-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:outer	color:blue
1	ꙇ	и	CCONJ	C-	_	5	cc	_	ref=LUKE_22.44
2	бꙑстъ	бꙑти	AUX	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	ref=LUKE_22.44
3	потъ	потъ	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	5	nsubj:outer	_	ref=LUKE_22.44
4	его	и	PRON	Pp	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	det	_	ref=LUKE_22.44
5	ѣко	ꙗко	ADV	Df	_	0	root	_	ref=LUKE_22.44|LId=1
6	и	и	ADV	Df	_	7	advmod	_	ref=LUKE_22.44
7	каплѧ	каплꙗ	NOUN	Nb	Case=Nom|Gender=Fem|Number=Plur	5	nsubj	_	ref=LUKE_22.44
8	кръве	кръвь	NOUN	Nb	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	ref=LUKE_22.44
9	каплѭштѧ	капати	VERB	V-	Case=Nom|Gender=Fem|Number=Plur|Tense=Pres|Variant=Short|VerbForm=Part|Voice=Act	7	acl	_	ref=LUKE_22.44
10	на	на	ADP	R-	_	11	case	_	ref=LUKE_22.44
11	землѭ	землꙗ	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	9	obl	_	ref=LUKE_22.44

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 nsubj:outer	color:blue
1	Мꙑ	мꙑ	PRON	Pp	Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	ref=41
2	же	же	ADV	Df	_	3	discourse	_	ref=41
3	надѣа҅хомъ	надѣꙗти	VERB	V-	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=41
4	сꙙ	себе	PRON	Pk	Case=Acc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	3	expl:pv	_	ref=41
5	ꙗ҅ко	ꙗко	SCONJ	G-	_	9	mark	_	ref=41
6	тъ	тъ	PRON	Pd	Case=Nom|Gender=Masc|Number=Sing	9	nsubj:outer	_	ref=41
7	ѥ҅стъ	бꙑти	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	ref=41
8	и҅же	иже	PRON	Pr	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	9	nsubj	_	ref=41
9	и҅матъ	имѣти	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	ref=41
10	и҅ꙁбавити	избавити	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	9	xcomp	_	ref=41
11	и҅л꙯ѣ	издраиль	PROPN	Ne	Case=Gen|Gender=Masc|Number=Sing	10	obj	_	ref=41

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:outer	color:blue
1	бѣа҅ше	бꙑти	AUX	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	ref=16
2	же	же	ADV	Df	_	4	discourse	_	ref=16
3	блаженꙑи	блаженъ	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	4	nsubj:outer	_	ref=16
4	ꙗ҅ко	ꙗко	ADV	Df	_	0	root	_	ref=16|LId=1
5	свѣтило	свѣтило	NOUN	Nb	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	_	ref=16
6	вь	въ	ADP	R-	_	8	case	_	ref=16
7	ть҆мнѣ	тьмьнъ	ADJ	A-	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	8	amod	_	ref=16
8	мѣстѣ	мѣсто	NOUN	Nb	Case=Loc|Gender=Neut|Number=Sing	9	obl	_	ref=16
9	свь҆тꙙ	свьтѣти	VERB	V-	Case=Nom|Gender=Neut|Number=Sing|Tense=Pres|Variant=Short|VerbForm=Part|Voice=Act	5	acl	_	ref=16
10	сꙙ	себе	PRON	Pk	Case=Acc|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	9	expl:pv	_	ref=16

~~~


