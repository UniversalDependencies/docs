---
layout: base
title:  'Statistics of parataxis in UD_Nepali-BK'
udver: '2'
---

## Treebank Statistics: UD_Nepali-BK: Relations: `parataxis`

This relation is universal.

12 nodes (1%) are attached to their parents as `parataxis`.

7 instances of `parataxis` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.75.

The following 4 pairs of parts of speech are connected with `parataxis`: <tt><a href="ne_bk-pos-VERB.html">VERB</a></tt>-<tt><a href="ne_bk-pos-VERB.html">VERB</a></tt> (9; 75% instances), <tt><a href="ne_bk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ne_bk-pos-VERB.html">VERB</a></tt> (1; 8% instances), <tt><a href="ne_bk-pos-VERB.html">VERB</a></tt>-<tt><a href="ne_bk-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="ne_bk-pos-VERB.html">VERB</a></tt>-<tt><a href="ne_bk-pos-X.html">X</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 parataxis	color:blue
1	जंगलमा	जंगल	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	2	obl	_	_
2	जाने	जाने	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Inf	4	parataxis	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	चराउने	चराउनु	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Part	0	root	_	_
5	।	।	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 16 parataxis	color:blue
1	"	"	PUNCT	_	_	4	punct	_	_
2	यो	यो	DET	_	Number=Sing|PronType=Dem	4	det	_	_
3	पक्कै	पक्कै	ADV	_	_	4	advmod	_	_
4	भुत	भुत	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	23	ccomp	_	_
5	हो	हुनु	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
6	यत्रो	यत्रो	DET	_	Number=Sing|PronType=Dem	8	det	_	_
7	बडाम्मा	बडाम्मा	ADJ	_	_	8	amod	_	_
8	मान्छे	मान्छे	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	4	appos	_	_
9	।	।	PUNCT	_	_	4	punct	_	_
10	यो	यो	DET	_	Number=Sing|PronType=Dem	13	det	_	_
11	धारा	धारा	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	12	compound	_	_
12	पानीको	पानी	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	13	nmod:poss	_	_
13	भुत	noun	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	14	nsubj	_	_
14	भन्थे	भन्नु	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	16	advcl	_	_
15	यही	यही	PRON	_	Number=Sing|PronType=Dem	16	nsubj	_	_
16	होला	हुनु	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	parataxis	_	_
17	"	"	PUNCT	_	_	4	punct	_	_
18	भनेर	भन्नु	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Conv	23	advcl	_	_
19	सोचेर	सोच्नु	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Conv	23	advcl	_	_
20	अनि	अनि	CCONJ	_	_	23	cc	_	_
21	त्यो	त्यो	DET	_	Number=Sing|PronType=Dem	22	det	_	_
22	घ्यू	घ्यू	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	23	obj	_	_
23	घस्दिएछ	घसिदिनु	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
24	रे	रे	PART	_	_	23	discourse	_	_
25	उलाइ	ऊ	PRON	_	Number=Sing|Person=3|PronType=Prs	23	iobj	_	_
26	।	।	PUNCT	_	_	23	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 19 parataxis	color:blue
1	सारा	सारा	ADJ	_	_	2	amod	_	_
2	उपनिषद्हरूको	उपनिषद्	NOUN	_	Case=Gen|Number=Plur	3	nmod	_	_
3	सार	सार	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	6	nsubj	_	_
4	मानिने	मान्नु	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Part	3	acl	_	_
5	गीतामा	गीता	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	6	obl	_	_
6	भनिएको	भन्नु	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Part	0	root	_	_
7	छ	छ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
8	,	,	PUNCT	_	_	6	punct	_	_
9	"	"	PUNCT	_	_	10	punct	_	_
10	कर्मण्येवाधिकारस्ते	कर्मण्येवाधिकारस्ते	X	_	Foreign=Yes	6	parataxis	_	_
11	...	...	PUNCT	_	_	10	punct	_	_
12	"	"	PUNCT	_	_	10	punct	_	_
13	अर्थात	अर्थात	ADV	_	_	24	discourse	_	_
14	आफ्ना	आफ्नो	PRON	_	PronType=Prs|Reflex=Yes	15	nmod	_	_
15	हातमा	हात	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	19	nmod	_	_
16	कर्तव्य	कर्तव्य	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	17	obj	_	_
17	गर्ने	गर्नु	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Part	19	acl	_	_
18	जुन	जुन	PRON	_	PronType=Rel	20	nsubj	_	_
19	अधिकार	अधिकार	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	24	parataxis	_	_
20	छ	हुनु	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	acl:relcl	_	_
21	त्यसलाई	त्यस	PRON	_	PronType=Dem	24	iobj	_	_
22	इमान्दारितापूर्वक	इमान्दारितापूर्वक	ADV	_	_	24	advmod	_	_
23	पूरा	पूरा	ADV	_	_	24	advmod	_	_
24	गर्नुपर्छ	गर्नु	VERB	_	Aspect=Imp|Mood=Nec|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	parataxis	_	_
25	।	।	PUNCT	_	_	24	punct	_	_

~~~


