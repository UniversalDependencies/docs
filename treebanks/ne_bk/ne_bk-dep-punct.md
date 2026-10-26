---
layout: base
title:  'Statistics of punct in UD_Nepali-BK'
udver: '2'
---

## Treebank Statistics: UD_Nepali-BK: Relations: `punct`

This relation is universal.

144 nodes (18%) are attached to their parents as `punct`.

124 instances of `punct` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.36805555555556.

The following 7 pairs of parts of speech are connected with `punct`: <tt><a href="ne_bk-pos-VERB.html">VERB</a></tt>-<tt><a href="ne_bk-pos-PUNCT.html">PUNCT</a></tt> (120; 83% instances), <tt><a href="ne_bk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ne_bk-pos-PUNCT.html">PUNCT</a></tt> (13; 9% instances), <tt><a href="ne_bk-pos-X.html">X</a></tt>-<tt><a href="ne_bk-pos-PUNCT.html">PUNCT</a></tt> (6; 4% instances), <tt><a href="ne_bk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ne_bk-pos-PUNCT.html">PUNCT</a></tt> (2; 1% instances), <tt><a href="ne_bk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ne_bk-pos-PUNCT.html">PUNCT</a></tt> (1; 1% instances), <tt><a href="ne_bk-pos-AUX.html">AUX</a></tt>-<tt><a href="ne_bk-pos-PUNCT.html">PUNCT</a></tt> (1; 1% instances), <tt><a href="ne_bk-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ne_bk-pos-PUNCT.html">PUNCT</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 punct	color:blue
1	जंगलमा	जंगल	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	2	obl	_	_
2	जाने	जाने	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Inf	4	parataxis	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	चराउने	चराउनु	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Part	0	root	_	_
5	।	।	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 punct	color:blue
1	अनि	अनि	CCONJ	_	_	9	cc	_	_
2	उसको	ऊ	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs	3	nmod	_	_
3	पालो	पालो	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	9	dislocated	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	त्यही	त्यही	DET	_	Number=Sing|PronType=Dem	6	det	_	_
6	आगोले	आगो	NOUN	_	Case=Ins|Gender=Neut|Number=Sing	9	obl	_	_
7	त्यहाँ	त्यहाँ	ADV	_	_	9	advmod	_	_
8	सल्काइ	सल्काउनु	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Conv	9	advcl	_	_
9	दिएछ	दिनु	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
10	रे	रे	PART	_	_	9	discourse	_	_
11	।	।	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 punct	color:blue
1	नीतिश्लोकमा	नीतिश्लोक	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	2	obl	_	_
2	भनिएको	भन्नु	VERB	_	Aspect=Perf|Mood=Ind|Person=3|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
3	छ	छ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	aux	_	_
4	,	,	PUNCT	_	_	2	punct	_	_
5	"	"	PUNCT	_	_	8	punct	_	_
6	न्याययतेन	-	X	_	_	8	dep	_	_
7	द्रव्यम्	-	X	_	_	8	dep	_	_
8	कर्तव्यम्	-	X	_	Foreign=Yes	2	ccomp	_	_
9	पारलौकिकम्	-	X	_	_	8	dep	_	_
10	।	।	PUNCT	_	_	8	punct	_	_
11	"	"	PUNCT	_	_	8	punct	_	_
12	अर्थात	अर्थात	ADV	_	_	20	discourse	_	_
13	न्यायपूर्ण	न्यायपूर्ण	ADJ	_	_	14	amod	_	_
14	रूपमा	रूप	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	20	obl	_	_
15	आर्जन	अर्जनु	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Part	17	acl	_	_
16	गरिएको	गर्नु	VERB	_	Aspect=Perf|VerbForm=Part|Voice=Pass	15	acl	_	_
17	धनबाट	धन	NOUN	_	Case=Abl|Gender=Neut|Number=Sing	20	obl	_	_
18	पारलौकिक	पारलौकिक	ADJ	_	_	19	amod	_	_
19	कर्तव्य	कर्तव्य	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	20	obj	_	_
20	गर्नुपर्छ	गर्नु	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis	_	_
21	।	।	PUNCT	_	_	2	punct	_	_

~~~


