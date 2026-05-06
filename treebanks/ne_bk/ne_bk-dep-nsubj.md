---
layout: base
title:  'Statistics of nsubj in UD_Nepali-BK'
udver: '2'
---

## Treebank Statistics: UD_Nepali-BK: Relations: `nsubj`

This relation is universal.

42 nodes (5%) are attached to their parents as `nsubj`.

42 instances of `nsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.28571428571429.

The following 5 pairs of parts of speech are connected with `nsubj`: <tt><a href="ne_bk-pos-VERB.html">VERB</a></tt>-<tt><a href="ne_bk-pos-NOUN.html">NOUN</a></tt> (27; 64% instances), <tt><a href="ne_bk-pos-VERB.html">VERB</a></tt>-<tt><a href="ne_bk-pos-PRON.html">PRON</a></tt> (11; 26% instances), <tt><a href="ne_bk-pos-VERB.html">VERB</a></tt>-<tt><a href="ne_bk-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="ne_bk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ne_bk-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ne_bk-pos-AUX.html">AUX</a></tt>-<tt><a href="ne_bk-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nsubj	color:blue
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


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nsubj	color:blue
1	अनि	अनि	CCONJ	_	_	9	cc	_	_
2	"	"	PUNCT	_	_	4	punct	_	_
3	ल	ल	INTJ	_	_	4	discourse	_	_
4	हुन्छ	हुनु	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	ccomp	_	_
5	"	"	PUNCT	_	_	4	punct	_	_
6	भनेर	भन्नु	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Conv	9	advcl	_	_
7	अब	अब	ADV	_	_	9	advmod	_	_
8	उले	ऊ	PRON	_	Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
9	सोचे	सोच्नु	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
10	।	।	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 nsubj	color:blue
1	अनि	अनि	CCONJ	_	_	12	cc	_	_
2	त्यसपछि	त्यसपछि	ADV	_	_	12	advmod	_	_
3	पर	पर	ADV	_	_	12	advmod	_	_
4	एउटा	एउटा	NUM	_	NumType=Card	5	nummod	_	_
5	डाँडाको	डाँडा	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	6	nmod	_	_
6	फेदीमा	फेदी	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	12	obl	_	_
7	चाहिँ	चाहिँ	PART	_	_	12	discourse	_	_
8	एउटा	एउटा	NUM	_	NumType=Card	9	nummod	_	_
9	खड्केरिरहा	खड्केरिरहा	PROPN	_	Case=Nom|Gender=Neut|Number=Sing	12	nsubj	_	_
10	भन्ने	भन्नु	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	acl	_	_
11	ठाउँ	ठाउँ	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	9	appos	_	_
12	थियो	हुनु	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
13	रे	रे	PART	_	_	12	discourse	_	_
14	।	।	PUNCT	_	_	12	punct	_	_

~~~


