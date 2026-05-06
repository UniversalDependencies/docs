---
layout: base
title:  'Statistics of acl in UD_Punjabi-CS'
udver: '2'
---

## Treebank Statistics: UD_Punjabi-CS: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="pa_cs-dep-acl-relcl.html">acl:relcl</a></tt>.

7 nodes (0%) are attached to their parents as `acl`.

6 instances of `acl` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.57142857142857.

The following 5 pairs of parts of speech are connected with `acl`: <tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pa_cs-pos-VERB.html">VERB</a></tt> (3; 43% instances), <tt><a href="pa_cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pa_cs-pos-VERB.html">VERB</a></tt> (1; 14% instances), <tt><a href="pa_cs-pos-AUX.html">AUX</a></tt>-<tt><a href="pa_cs-pos-ADJ.html">ADJ</a></tt> (1; 14% instances), <tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="pa_cs-pos-PART.html">PART</a></tt>-<tt><a href="pa_cs-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 13 acl	color:blue
1	ਉਨ੍ਹਾਂ	ਉਹ	PRON	_	Case=Acc|Number=Plur|Person=3|PronType=Prs	3	nmod:poss	_	_
2	ਦਾ	ਦਾ	ADP	_	_	1	case	_	_
3	ਉੱਤਰ	ਉੱਤਰ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
4	ਸੀ	ਸੀ	AUX	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	:	:	PUNCT	_	_	4	punct	_	_
6	"	"	PUNCT	_	_	7	punct	_	_
7	ਡਰ	ਡਰ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	ccomp	_	_
8	!	!	PUNCT	_	_	7	punct	_	_
9	ਬਈ	ਬਈ	INTJ	_	_	7	discourse	_	_
10	ਹੈਟ	ਹੈਟ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	13	obl	_	_
11	ਤੋਂ	ਤੋਂ	ADP	_	_	10	case	_	_
12	ਕੌਣ	ਕੌਣ	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Rel	13	nsubj	_	_
13	ਡਰਦਾ	ਡਰਨਾ	VERB	_	Aspect=Imp|Gender=Masc|Number=Sing|Person=3|VerbForm=Part	7	acl	_	_
14	ਹੈ	ਹੈ	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	_
15	?	?	PUNCT	_	_	14	punct	_	_
16	"	"	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 acl	color:blue
1	ਕਾਰਪੋਰੇਸ਼ਨਾਂ	ਕਾਰਪੋਰੇਸ਼ਨ	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	16	nsubj	_	_
2	ਰਾਜ	ਰਾਜ	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	_
3	ਦੀਆਂ	ਦਾ	ADP	_	Number=Plur	2	case	_	_
4	ਮੰਡੀਆਂ	ਮੰਡੀ	NOUN	_	Case=Abl|Gender=Fem|Number=Plur	13	obl	_	_
5	ਤੋਂ	ਤੋਂ	ADP	_	_	4	case	_	_
6	ਬਾਹਰ	ਬਾਹਰ	ADV	_	_	13	advmod	_	_
7	,	,	PUNCT	_	_	6	punct	_	_
8	ਬਾਜ਼ਾਰ	ਬਾਜ਼ਾਰ	NOUN	_	Case=Nom	9	compound	_	_
9	ਕੀਮਤਾਂ	ਕੀਮਤ	NOUN	_	Gender=Fem|Number=Plur	13	obl	_	_
10	'	'	PUNCT	_	_	11	punct	_	_
11	ਤੇ	ਤੇ	ADP	_	_	9	case	_	_
12	ਫਸਲਾਂ	ਫਸਲ	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	13	obj	_	_
13	ਖਰੀਦਣ	ਖਰੀਦਣਾ	VERB	_	Aspect=Perf|Mood=Ind|Tense=Pres|VerbForm=Inf	15	acl	_	_
14	ਦੇ	ਦਾ	ADP	_	Number=Plur	13	case	_	_
15	ਯੋਗ	ਯੋਗ	ADJ	_	_	16	xcomp	_	_
16	ਹੋਣਗੀਆਂ	ਹੋਣਾ	VERB	_	Aspect=Perf|Mood=Ind|Tense=Fut|VerbForm=Fin	0	root	_	_
17	।	।	PUNCT	_	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 acl	color:blue
1	ਇਹ	ਇਹ	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Dem	8	nsubj	_	_
2	ਨਵ	ਨਵ	ADJ	_	Gender=Masc|Number=Sing	3	amod	_	_
3	ਉਦਾਰਵਾਦ	ਉਦਾਰਵਾਦ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	8	obl	_	_
4	ਅਤੇ	ਅਤੇ	CCONJ	_	_	5	cc	_	_
5	ਹਿੰਦੂਤਵ	ਹਿੰਦੂਤਵ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	3	conj	_	_
6	ਦੋਵਾਂ	ਦੋਵਾਂ	PRON	_	Number=Plur|PronType=Ind	3	det	_	_
7	ਪ੍ਰਤੀ	ਪ੍ਰਤੀ	ADP	_	_	3	case	_	_
8	ਵਚਨਬੱਧ	ਵਚਨਬੱਧ	ADJ	_	_	9	acl	_	_
9	ਹੈ	ਹੈ	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	।	।	PUNCT	_	_	9	punct	_	_

~~~


