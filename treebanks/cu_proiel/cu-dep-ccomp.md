---
layout: base
title:  'Statistics of ccomp in UD_Old_Church_Slavonic'
udver: '2'
---

## Treebank Statistics: UD_Old_Church_Slavonic: Relations: `ccomp`

This relation is universal.

737 nodes (1%) are attached to their parents as `ccomp`.

727 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.17774762550882.

The following 13 pairs of parts of speech are connected with `ccomp`: <tt><a href="cu-pos-VERB.html">VERB</a></tt>-<tt><a href="cu-pos-VERB.html">VERB</a></tt> (600; 81% instances), <tt><a href="cu-pos-VERB.html">VERB</a></tt>-<tt><a href="cu-pos-SCONJ.html">SCONJ</a></tt> (80; 11% instances), <tt><a href="cu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cu-pos-VERB.html">VERB</a></tt> (15; 2% instances), <tt><a href="cu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cu-pos-VERB.html">VERB</a></tt> (12; 2% instances), <tt><a href="cu-pos-ADV.html">ADV</a></tt>-<tt><a href="cu-pos-VERB.html">VERB</a></tt> (9; 1% instances), <tt><a href="cu-pos-VERB.html">VERB</a></tt>-<tt><a href="cu-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="cu-pos-VERB.html">VERB</a></tt>-<tt><a href="cu-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="cu-pos-VERB.html">VERB</a></tt>-<tt><a href="cu-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="cu-pos-VERB.html">VERB</a></tt>-<tt><a href="cu-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="cu-pos-NUM.html">NUM</a></tt>-<tt><a href="cu-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="cu-pos-PRON.html">PRON</a></tt>-<tt><a href="cu-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="cu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cu-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="cu-pos-VERB.html">VERB</a></tt>-<tt><a href="cu-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Слꙑшасте	слꙑшати	VERB	V-	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_5.27
2	ѣко	ꙗко	SCONJ	G-	_	4	mark	_	ref=MATT_5.27
3	речено	рещи	VERB	V-	Case=Nom|Gender=Neut|Number=Sing|Strength=Strong|Tense=Past|VerbForm=Part|Voice=Pass	4	xcomp	_	ref=MATT_5.27
4	бꙑⷭ҇	бꙑти	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	ccomp	_	ref=MATT_5.27
5	древънимъ	древльнь	ADJ	A-	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur|Strength=Weak	3	iobj	_	ref=MATT_5.27

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 ccomp	color:blue
1	народи	народъ	NOUN	Nb	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	ref=MATT_21.11
2	же	же	ADV	Df	_	3	discourse	_	ref=MATT_21.11
3	г҃лаахѫ	глаголати	VERB	V-	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_21.11
4	ѣко	ꙗко	SCONJ	G-	_	3	ccomp	_	ref=MATT_21.11

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp	color:blue
1	не	не	ADV	Df	Polarity=Neg	3	advmod	_	ref=JOHN_19.21
2	пиши	пьсати	VERB	V-	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=JOHN_19.21
3	ц҃ръ	цѣсарь	NOUN	Nb	Case=Acc|Gender=Masc|Number=Sing	2	obj:dir	_	ref=JOHN_19.21
4	июдеискъ	июдеискъ	ADJ	A-	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Strength=Strong	3	amod	_	ref=JOHN_19.21
5	нъ	нъ	CCONJ	C-	_	3	cc	_	ref=JOHN_19.21
6	ѣко	ꙗко	SCONJ	G-	_	8	mark	_	ref=JOHN_19.21
7	самъ	самъ	ADJ	Pd	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	ref=JOHN_19.21
8	рече	рещи	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	ccomp	_	ref=JOHN_19.21

~~~


