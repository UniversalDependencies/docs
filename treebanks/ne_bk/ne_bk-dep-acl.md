---
layout: base
title:  'Statistics of acl in UD_Nepali-BK'
udver: '2'
---

## Treebank Statistics: UD_Nepali-BK: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="ne_bk-dep-acl-relcl.html">acl:relcl</a></tt>.

20 nodes (2%) are attached to their parents as `acl`.

15 instances of `acl` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4.

The following 4 pairs of parts of speech are connected with `acl`: <tt><a href="ne_bk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ne_bk-pos-VERB.html">VERB</a></tt> (14; 70% instances), <tt><a href="ne_bk-pos-VERB.html">VERB</a></tt>-<tt><a href="ne_bk-pos-VERB.html">VERB</a></tt> (4; 20% instances), <tt><a href="ne_bk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ne_bk-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="ne_bk-pos-VERB.html">VERB</a></tt>-<tt><a href="ne_bk-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 acl	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 acl	color:blue
1	गैरकानुनी	गैरकानुनी	ADJ	_	_	2	amod	_	_
2	क्रियाकलापबाट	क्रियाकलाप	NOUN	_	Case=Abl|Gender=Neut|Number=Sing	3	obl	_	_
3	आर्जन	आर्जनु	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Part	5	acl	_	_
4	गरिएको	गर्नु	VERB	_	Aspect=Perf|VerbForm=Part|Voice=Pass	3	acl	_	_
5	सम्पत्ति	सम्पत्ति	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	6	obl	_	_
6	खर्चेर	खर्चनु	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Conv	7	advcl	_	_
7	आर्जन	आर्जनु	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Part	9	acl	_	_
8	गरेको	गर्नु	VERB	_	Aspect=Perf|VerbForm=Part	7	acl	_	_
9	धर्मको	धर्म	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	11	nmod:poss	_	_
10	त	त	PART	_	_	9	discourse	_	_
11	फल	फल	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	15	nsubj	_	_
12	पनि	पनि	PART	_	_	11	discourse	_	_
13	प्राप्त	प्राप्त	VERB	_	_	15	xcomp	_	_
14	नहुने	हुनु	VERB	_	VerbForm=Part	15	xcomp	_	_
15	रहेछ	हुनु	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
16	।	।	PUNCT	_	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 acl	color:blue
1	कर्तव्यप्रतीको	कर्तव्यप्रती	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	2	nmod:poss	_	_
2	निष्ठा	निष्ठा	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	14	ccomp	_	_
3	वा	वा	CCONJ	_	_	2	cc	_	_
4	भक्ति	भक्ति	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	2	conj	_	_
5	उपासनाको	उपासना	NOUN	_	Case=Gen|Number=Sing	7	nmod:poss	_	_
6	सर्वोच्च	सर्वोच्च	ADJ	_	_	7	amod	_	_
7	रूप	रूप	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	2	appos	_	_
8	हो	हुनु	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
9	भन्ने	भन्नु	VERB	_	VerbForm=Part	10	acl	_	_
10	विवेकान्नंद	विवेकान्नंद	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	_
11	कर्तव्यलाई	कर्तव्य	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	14	iobj	_	_
12	नै	नै	PART	_	_	14	discourse	_	_
13	पूजा	पूजा	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	14	obj	_	_
14	मान्छन्	मान्नु	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
15	।	।	PUNCT	_	_	14	punct	_	_

~~~


