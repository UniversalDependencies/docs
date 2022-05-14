---
layout: base
title:  'Statistics of discourse:conn in UD_Hittite-HitTB'
udver: '2'
---

## Treebank Statistics: UD_Hittite-HitTB: Relations: `discourse:conn`

This relation is a language-specific subtype of <tt><a href="hit_hittb-dep-discourse.html">discourse</a></tt>.

26 nodes (2%) are attached to their parents as `discourse:conn`.

26 instances of `discourse:conn` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.65384615384615.

The following 3 pairs of parts of speech are connected with `discourse:conn`: <tt><a href="hit_hittb-pos-VERB.html">VERB</a></tt>-<tt><a href="hit_hittb-pos-PART.html">PART</a></tt> (23; 88% instances), <tt><a href="hit_hittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hit_hittb-pos-PART.html">PART</a></tt> (2; 8% instances), <tt><a href="hit_hittb-pos-VERB.html">VERB</a></tt>-<tt><a href="hit_hittb-pos-CCONJ.html">CCONJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 discourse:conn	color:blue
1	ták-ku	takku	SCONJ	_	_	4	mark	_	_
2	na-at-ta	natta	PART	_	_	4	advmod	_	_
3	ma	-ma	PART	_	_	4	discourse	_	_
4	šar-ni-ik-zi	šarnink-	VERB	_	Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	advcl	_	_
5	nu	nu	PART	_	_	8	discourse:conn	_	_
6	a-pu-u-un	apā-	PRON	_	Case=Acc|Gender=Com|Number=Sing|PronType=Dem	8	obj	_	_
7	pát	-pat	PART	_	_	6	advmod:emph	_	_
8	šu-ú-ez-zi	šuwe-	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 discourse:conn	color:blue
1	nu	nu	CCONJ	_	_	6	cc	_	_
2	mu	-mu	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	6	iobj	_	_
3	NAM.RA	arnuwala-	NOUN	_	Gender=Com|Number=Sing	11	dislocated	_	_
4	ku-in	kuiš	PRON	_	Case=Acc|Gender=Com|Number=Sing|PronType=Rel	6	obj	_	_
5	pa-ra-a	parā	ADV	_	_	6	advmod	_	_
6	pí-i-e-er	pai-#2-	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
7	n	nu	PART	_	_	11	discourse:conn	_	_
8	a-aš	-aš	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
9	4	4	NUM	_	_	10	compound	_	_
10	LI-IM	LĪM	NUM	_	_	11	nummod	_	_
11	NAM.RA	arnuwala-	NOUN	_	Gender=Com|Number=Sing	0	root	_	_
12	e-eš-ta	ēš	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	11	cop	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse:conn	color:blue
1	n	nu	CCONJ	_	_	6	discourse:conn	_	_
2	a-an	-aš	PRON	_	Case=Acc|Gender=Com|Number=Sing|Person=3|PronType=Prs	6	obj	_	_
3	kán	-kan	PART	_	_	6	advmod:loc	_	_
4	iš-tar-na	ištarna	ADV	_	_	6	advmod	_	_
5	ar-ḫa	arḫa	ADV	_	_	6	advmod	_	_
6	pa-a-un	pai-#1-	VERB	_	Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_

~~~


