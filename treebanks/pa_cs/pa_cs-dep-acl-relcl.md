---
layout: base
title:  'Statistics of acl:relcl in UD_Punjabi-CS'
udver: '2'
---

## Treebank Statistics: UD_Punjabi-CS: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="pa_cs-dep-acl.html">acl</a></tt>.

17 nodes (1%) are attached to their parents as `acl:relcl`.

15 instances of `acl:relcl` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.35294117647059.

The following 8 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pa_cs-pos-VERB.html">VERB</a></tt> (5; 29% instances), <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-VERB.html">VERB</a></tt> (4; 24% instances), <tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pa_cs-pos-AUX.html">AUX</a></tt> (2; 12% instances), <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-AUX.html">AUX</a></tt> (2; 12% instances), <tt><a href="pa_cs-pos-AUX.html">AUX</a></tt>-<tt><a href="pa_cs-pos-AUX.html">AUX</a></tt> (1; 6% instances), <tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pa_cs-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="pa_cs-pos-PRON.html">PRON</a></tt>-<tt><a href="pa_cs-pos-AUX.html">AUX</a></tt> (1; 6% instances), <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 acl:relcl	color:blue
1	ਆਹ	ਆਹ	INTJ	_	_	2	discourse	_	_
2	ਵੇਖੋ	ਵੇਖਣਾ	VERB	_	Mood=Imp|VerbForm=Fin	0	root	_	_
3	ਉਸਦਾ	ਉਹ	PRON	_	Number=Sing|Person=3|PronType=Prs	6	nmod:poss	_	_
4	ਸੋਹਣਾ	ਸੋਹਣਾ	ADJ	_	Case=Acc|Gender=Masc|Number=Sing	6	amod	_	_
5	ਜਿਹਾ	ਜਿਹਾ	ADV	_	_	4	advmod	_	_
6	ਚਿੱਤਰ	ਚਿੱਤਰ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	2	obj	_	_
7	ਜੋ	ਜੋ	ADP	_	_	12	obj	_	_
8	ਮੈਂ	ਮੈਂ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	_	_
9	ਬਾਦ	ਬਾਦ	ADV	_	_	11	obl:tmod	_	_
10	ਵਿਚ	ਵਿਚ	ADP	_	_	9	case	_	_
11	ਬਣਾ	ਬਣਾਉਣਾ	VERB	_	Aspect=Perf|Number=Sing|VerbForm=Part	12	compound:svc	_	_
12	ਸਕਿਆ	ਸਕਣਾ	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	6	acl:relcl	_	_
13	।	।	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 acl:relcl	color:blue
1	ਇੰਝ	ਇੰਝ	ADV	_	_	6	advmod	_	_
2	ਮੈਂ	ਮੈਂ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
3	ਇੱਕ	ਇੱਕ	DET	_	PronType=Ind	5	det	_	_
4	ਹੋਰ	ਹੋਰ	DET	_	PronType=Ind	5	amod	_	_
5	ਚਿੱਤਰ	ਚਿੱਤਰ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	6	obj	_	_
6	ਬਣਾਇਆ	ਬਣਾਉਣਾ	VERB	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
7	ਜੋ	ਜੋ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	12	nsubj	_	_
8	ਬਾਕੀਆਂ	ਬਾਕੀ	NOUN	_	Gender=Fem|Number=Plur	12	obl	_	_
9	ਵਾਂਗ	ਵਾਂਗ	ADP	_	_	8	case	_	_
10	ਰੱਦ	ਰੱਦ	VERB	_	Aspect=Perf|Case=Acc|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Inf	12	xcomp	_	_
11	ਹੋ	ਹੈ	AUX	_	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	12	compound:svc	_	_
12	ਗਿਆ	ਗਿਆ	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing	6	acl:relcl	_	_
13	।	।	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 19 acl:relcl	color:blue
1	ਇਸੇ	ਇਸ	ADV	_	ExtPos=ADV	22	advmod	_	_
2	ਲਈ	ਲਈ	ADV	_	_	1	fixed	_	_
3	ਮੈਂ	ਮੈਂ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	22	nsubj	_	_
4	ਛੇ	ਛੇ	NUM	_	_	5	nummod	_	_
5	ਸਾਲ	ਸਾਲ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	7	nmod	_	_
6	ਦੀ	ਦੀ	ADP	_	Gender=Fem|Number=Sing	5	case	_	_
7	ਉਮਰ	ਉਮਰ	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	22	obl:tmod	_	_
8	ਵਿਚ	ਵਿਚ	ADP	_	_	7	case	_	_
9	ਹੀ	ਹੀ	ADV	_	_	7	advmod	_	_
10	ਚਿੱਤਰਕਾਰ	ਚਿੱਤਰਕਾਰ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	12	nmod	_	_
11	ਵਾਲਾ	ਵਾਲਾ	ADP	_	Gender=Masc|Number=Sing	10	case	_	_
12	ਧੰਦਾ	ਧੰਦਾ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	22	obj	_	_
13	(	(	PUNCT	_	_	14	punct	_	_
14	ਜੋ	ਜੋ	ADP	_	_	19	nsubj	_	_
15	ਭਾਂਵੇਂ	ਭਾਂਵੇਂ	CCONJ	_	_	14	mark	_	_
16	ਬੜਾ	ਬੜਾ	ADJ	_	Case=Acc|Gender=Masc|Number=Sing	19	amod	_	_
17	ਹੀ	ਹੀ	ADV	_	_	16	advmod	_	_
18	ਸ਼ਾਨਦਾਰ	ਸ਼ਾਨਦਾਰ	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	19	amod	_	_
19	ਹੁੰਦਾ	ਹੈ	AUX	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Part	12	acl:relcl	_	_
20	)	)	PUNCT	_	_	19	punct	_	_
21	ਛੱਡ	ਛੱਡਣਾ	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin	22	compound:svc	_	_
22	ਦਿੱਤਾ	ਦੇਣਾ	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin	0	root	_	_
23	।	।	PUNCT	_	_	22	punct	_	_

~~~


