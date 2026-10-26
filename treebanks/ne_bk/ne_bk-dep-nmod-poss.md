---
layout: base
title:  'Statistics of nmod:poss in UD_Nepali-BK'
udver: '2'
---

## Treebank Statistics: UD_Nepali-BK: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="ne_bk-dep-nmod.html">nmod</a></tt>.

23 nodes (3%) are attached to their parents as `nmod:poss`.

23 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21739130434783.

The following 5 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="ne_bk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ne_bk-pos-NOUN.html">NOUN</a></tt> (17; 74% instances), <tt><a href="ne_bk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ne_bk-pos-PROPN.html">PROPN</a></tt> (3; 13% instances), <tt><a href="ne_bk-pos-ADP.html">ADP</a></tt>-<tt><a href="ne_bk-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="ne_bk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ne_bk-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="ne_bk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ne_bk-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	अनि	अनि	CCONJ	_	_	6	cc	_	_
2	गाईको	गाई	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	3	nmod:poss	_	_
3	दूध	दूध	NOUN	_	Case=Ins|Gender=Neut|Number=Sing	6	obl	_	_
4	ले	ले	ADP	_	_	3	case	_	_
5	महीसही	महीसही	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	6	obj	_	_
6	पार्ने	पार्नु	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Part	0	root	_	_
7	।	।	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	अनि	अनि	CCONJ	_	_	6	cc	_	_
2	त्यो	त्यो	DET	_	Number=Sing|PronType=Dem	3	det	_	_
3	खड्केरिरहाको	खड्केरिरहा	PROPN	_	Case=Gen|Gender=Neut|Number=Sing	4	nmod:poss	_	_
4	भुतहरूले	भुत	NOUN	_	Case=Erg|Gender=Neut|Number=Plur	6	nsubj	_	_
5	चाहिँ	चाहिँ	PART	_	_	6	discourse	_	_
6	कराएछ	कराउनु	VERB	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
7	रे	रे	PART	_	_	6	discourse	_	_
8	।	।	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	हाम्रो	हाम्रो	PRON	_	Number=Plur|Person=1|PronType=Prs	3	nmod:poss	_	_
2	पूर्वीय	पूर्वीय	ADJ	_	_	3	amod	_	_
3	ग्रन्थमा	ग्रन्थ	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	6	obl	_	_
4	कर्तव्यका	कर्तव्य	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	5	nmod:poss	_	_
5	बारेमा	बारे	ADP	_	_	6	obl	_	_
6	व्यक्त	व्यक्त	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Part	9	acl	_	_
7	भएका	हुनु	AUX	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Part	6	aux	_	_
8	गहन	गहन	ADJ	_	_	9	amod	_	_
9	विचारले	विचार	NOUN	_	Case=Ins|Gender=Neut|Number=Plur	14	nsubj	_	_
10	समेत	समेत	ADV	_	_	14	advmod	_	_
11	यस	यस	DET	_	PronType=Dem	12	det	_	_
12	कुरालाई	कुरा	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	14	iobj	_	_
13	पुष्टि	पुष्टि	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	14	obj	_	_
14	गर्छन्	गर्नु	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
15	।	।	PUNCT	_	_	14	punct	_	_

~~~


