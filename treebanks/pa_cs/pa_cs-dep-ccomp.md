---
layout: base
title:  'Statistics of ccomp in UD_Punjabi-CS'
udver: '2'
---

## Treebank Statistics: UD_Punjabi-CS: Relations: `ccomp`

This relation is universal.

25 nodes (1%) are attached to their parents as `ccomp`.

23 instances of `ccomp` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.68.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-VERB.html">VERB</a></tt> (12; 48% instances), <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-AUX.html">AUX</a></tt> (4; 16% instances), <tt><a href="pa_cs-pos-AUX.html">AUX</a></tt>-<tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="pa_cs-pos-AUX.html">AUX</a></tt>-<tt><a href="pa_cs-pos-VERB.html">VERB</a></tt> (2; 8% instances), <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="pa_cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="pa_cs-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pa_cs-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-PART.html">PART</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 ccomp	color:blue
1	ਤੁਹਾਨੂੰ	ਤੁਹਾਨੂੰ	PRON	_	Case=Acc|Number=Plur|Person=2|PronType=Prs	3	obl	_	_
2	ਕੀ	ਕੀ	DET	_	PronType=Dem	1	det	_	_
3	ਲੱਗਦੈ	ਲੱਗਣਾ	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Person=3|VerbForm=Fin	0	root	_	_
4	ਕਿ	ਕਿ	SCONJ	_	_	10	mark	_	_
5	ਇਹ	ਇਹ	PRON	_	Case=Nom|Number=Sing|PronType=Dem	6	det	_	_
6	ਭੇਡ	ਭੇਡ	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	_
7	ਬਹੁਤ	ਬਹੁਤ	ADV	_	_	9	advmod	_	_
8	ਸਾਰਾ	ਸਾਰਾ	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	9	amod	_	_
9	ਘਾਹ	ਘਾਹ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	10	obj	_	_
10	ਖਾਵੇਗੀ	ਖਾਣਾ	VERB	_	Gender=Fem|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	3	ccomp	_	_
11	।	।	PUNCT	_	_	3	punct	_	_
12	"	"	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 16 ccomp	color:blue
1	ਮੈਂ	ਮੈਂ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
2	ਇਹ	ਇਹ	DET	_	PronType=Dem	3	obj	_	_
3	ਦੇਖਣ	ਵੇਖਣਾ	VERB	_	VerbForm=Inf	5	acl	_	_
4	ਦੀ	ਦੀ	ADP	_	_	3	case	_	_
5	ਕੋਸ਼ਿਸ਼	ਕੋਸ਼ਿਸ਼	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	_
6	ਕਰਦਾ	ਕਰਨਾ	VERB	_	Aspect=Imp|Number=Sing|Person=1|Tense=Pres	0	root	_	_
7	ਹਾਂ	ਹੈ	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
8	ਕਿ	ਕਿ	SCONJ	_	_	16	mark	_	_
9	ਇਹ	ਇਹ	PRON	_	PronType=Dem	10	nmod:poss	_	_
10	ਬੰਦਾ	ਬੰਦਾ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	16	nsubj	_	_
11	ਸਚਮੁਚ	ਸਚਮੁਚ	ADV	_	_	15	advmod	_	_
12	ਸਹੀ	ਸਹੀ	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	13	amod	_	_
13	ਸੋਚ	ਸੋਚ	NOUN	_	Gender=Fem|Number=Sing	15	nmod:poss	_	_
14	ਦਾ	ਦਾ	ADP	_	_	13	case	_	_
15	ਮਾਲਕ	ਮਾਲਕ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	16	xcomp	_	_
16	ਹੈ	ਹੈ	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	ccomp	_	_
17	।	।	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 ccomp	color:blue
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


