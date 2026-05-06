---
layout: base
title:  'Statistics of discourse in UD_Nepali-BK'
udver: '2'
---

## Treebank Statistics: UD_Nepali-BK: Relations: `discourse`

This relation is universal.

81 nodes (10%) are attached to their parents as `discourse`.

55 instances of `discourse` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.02469135802469.

The following 7 pairs of parts of speech are connected with `discourse`: <tt><a href="ne_bk-pos-VERB.html">VERB</a></tt>-<tt><a href="ne_bk-pos-PART.html">PART</a></tt> (58; 72% instances), <tt><a href="ne_bk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ne_bk-pos-PART.html">PART</a></tt> (13; 16% instances), <tt><a href="ne_bk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ne_bk-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="ne_bk-pos-VERB.html">VERB</a></tt>-<tt><a href="ne_bk-pos-INTJ.html">INTJ</a></tt> (3; 4% instances), <tt><a href="ne_bk-pos-VERB.html">VERB</a></tt>-<tt><a href="ne_bk-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="ne_bk-pos-ADV.html">ADV</a></tt>-<tt><a href="ne_bk-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="ne_bk-pos-AUX.html">AUX</a></tt>-<tt><a href="ne_bk-pos-PART.html">PART</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 discourse	color:blue
1	अनि	अनि	CCONJ	_	_	5	cc	_	_
2	घ्यू	घ्यू	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	5	obj	_	_
3	बनाउने	बनाउनु	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Part	5	xcomp	_	_
4	राख्ने	राख्नु	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Part	3	conj	_	_
5	गर्थ्यो	गर्नु	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
6	रे	रे	PART	_	_	5	discourse	_	_
7	।	।	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 discourse	color:blue
1	फेरि	फेरि	ADV	_	_	11	advmod	_	_
2	भोलिपल्ट	भोलिपल्ट	NOUN	_	Case=Abl|Gender=Neut|Number=Sing	11	obl	_	_
3	पनि	पनि	PART	_	_	2	discourse	_	_
4	त्यसरी	त्यसरी	ADV	_	_	11	advmod	_	_
5	नै	नै	PART	_	_	4	discourse	_	_
6	"	"	PUNCT	_	_	8	punct	_	_
7	घ्यू	घ्यू	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	8	obj	_	_
8	घस्दे	घस्नु	VERB	_	Aspect=Imp|Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	ccomp	_	_
9	"	"	PUNCT	_	_	8	punct	_	_
10	भनेर	भन्नु	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Conv	11	advcl	_	_
11	लगाएछ	लगाउनु	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
12	रे	रे	PART	_	_	11	discourse	_	_
13	।	।	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 discourse	color:blue
1	अनि	अनि	CCONJ	_	_	10	cc	_	_
2	भुत्लै	भुत्लै	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	3	discourse	_	_
3	भुत्ला	भुत्ला	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	7	compound	_	_
4	जिउ	जिउ	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	8	obl	_	_
5	भरी	भरी	ADV	_	_	4	advmod	_	_
6	भुत्लै	भुत्लै	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	7	discourse	_	_
7	भुत्ला	भुत्ला	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	8	obj	_	_
8	भएको	हुनु	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Part	9	acl	_	_
9	मान्छे	मान्छे	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	10	nsubj	_	_
10	आएको	आउनु	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Part	0	root	_	_
11	छ	हुनु	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
12	रे	रे	PART	_	_	10	discourse	_	_
13	।	।	PUNCT	_	_	10	punct	_	_

~~~


