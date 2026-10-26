---
layout: base
title:  'Statistics of nmod in UD_Hebrew-PostRab'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-PostRab: Relations: `nmod`

This relation is universal.
There are 3 language-specific subtypes of `nmod`: <tt><a href="he_postrab-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="he_postrab-dep-nmod-tmod.html">nmod:tmod</a></tt>, <tt><a href="he_postrab-dep-nmod-unmarked.html">nmod:unmarked</a></tt>.

114 nodes (1%) are attached to their parents as `nmod`.

112 instances of `nmod` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.15789473684211.

The following 15 pairs of parts of speech are connected with `nmod`: <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt> (72; 63% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-PRON.html">PRON</a></tt> (8; 7% instances), <tt><a href="he_postrab-pos-NUM.html">NUM</a></tt>-<tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt> (8; 7% instances), <tt><a href="he_postrab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt> (5; 4% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="he_postrab-pos-NUM.html">NUM</a></tt>-<tt><a href="he_postrab-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="he_postrab-pos-ADV.html">ADV</a></tt>-<tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="he_postrab-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_postrab-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="he_postrab-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_postrab-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="he_postrab-pos-NUM.html">NUM</a></tt>-<tt><a href="he_postrab-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="he_postrab-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_postrab-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="he_postrab-pos-VERB.html">VERB</a></tt>-<tt><a href="he_postrab-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod	color:blue
1	אוכל	אוכל	NOUN	NOUN	Gender=Masc|Number=Sing	8	dislocated	_	_
2	מתוך	מתוך	ADP	ADP	_	3	case	_	_
3	פסולת	פסולת	NOUN	NOUN	Gender=Fem|Number=Sing	1	nmod	_	_
4	אין	אין	ADV	ADV	_	8	advmod	_	_
5	דרך	דרך	NOUN	NOUN	Gender=Fem|Number=Sing	8	nsubj:cop	_	_
6	ברירה	ברירה	NOUN	NOUN	Gender=Fem|Number=Sing	5	compound:smixut	_	_
7	ב	ב	ADP	ADP	_	8	case	_	_
8	כך	כך	PRON	PRON	_	0	root	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 nmod	color:blue
1	ו	ו	CCONJ	CCONJ	_	4	cc	_	_
2	עוד	עוד	ADV	ADV	_	4	advmod	_	_
3	ד	ד	SCONJ	SCONJ	_	4	mark	_	_
4	ידוע	ידוע	ADJ	ADJ	Gender=Masc|Number=Sing	0	root	_	_
5	שיטת	שיטה	NOUN	NOUN	Gender=Fem|Number=Sing	4	nsubj	_	_
6	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3	5	nmod:poss	_	_
7	של	של	ADP	ADP	_	9	case:gen	_	_
8	ה	ה	DET	DET	_	9	det	_	_
9	רמב"ן	רמב"ן	PROPN	PROPN	Gender=Masc|Number=Sing	5	nmod	_	_
10	ד	ד	SCONJ	SCONJ	_	17	mark	_	_
11	ברכת	ברכה	NOUN	NOUN	Gender=Fem|Number=Sing	17	nsubj	_	_
12	ה	ה	DET	DET	_	13	det	_	_
13	תורה	תורה	NOUN	NOUN	Gender=Fem|Number=Sing	11	compound:smixut	_	_
14	לפני	לפני	ADP	ADP	_	15	case	_	_
15	ה	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3	11	nmod	_	_
16	הוי	היה	AUX	AUX	_	17	cop	_	_
17	מצות	מצווה	NOUN	NOUN	Gender=Fem|Number=Sing	5	acl:relcl	_	_
18	עשה	עשה	NOUN	NOUN	Gender=Masc|Number=Sing	17	compound:smixut	_	_
19	דאוריתא	דאורייתא	ADJ	ADJ	_	17	nmod	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 nmod	color:blue
1	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
2	אחד	אחת	NUM	NUM	Gender=Masc|Number=Sing	0	root	_	_
3	מן	מן	ADP	ADP	_	5	case	_	_
4	ה	ה	DET	DET	_	5	det	_	_
5	מקראות	מקרא	NOUN	NOUN	Gender=Masc|Number=Plur	2	nmod	_	_
6	ש	ש	SCONJ	SCONJ	_	7	mark	_	_
7	קצרו	קיצר	VERB	VERB	Gender=Fem,Masc|Number=Plur|Person=3|Tense=Past	5	acl:relcl	_	_
8	דברי	דבר	NOUN	NOUN	Gender=Masc|Number=Plur	7	obj	_	_
9	הם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3	8	nmod:poss	_	_

~~~


