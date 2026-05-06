---
layout: base
title:  'Statistics of nsubj in UD_Punjabi-CS'
udver: '2'
---

## Treebank Statistics: UD_Punjabi-CS: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="pa_cs-dep-nsubj-pass.html">nsubj:pass</a></tt>.

164 nodes (9%) are attached to their parents as `nsubj`.

162 instances of `nsubj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.32926829268293.

The following 16 pairs of parts of speech are connected with `nsubj`: <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-PRON.html">PRON</a></tt> (76; 46% instances), <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt> (37; 23% instances), <tt><a href="pa_cs-pos-AUX.html">AUX</a></tt>-<tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt> (16; 10% instances), <tt><a href="pa_cs-pos-AUX.html">AUX</a></tt>-<tt><a href="pa_cs-pos-PRON.html">PRON</a></tt> (14; 9% instances), <tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt> (5; 3% instances), <tt><a href="pa_cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pa_cs-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pa_cs-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="pa_cs-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pa_cs-pos-AUX.html">AUX</a></tt>-<tt><a href="pa_cs-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pa_cs-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pa_cs-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="pa_cs-pos-PART.html">PART</a></tt>-<tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pa_cs-pos-PRON.html">PRON</a></tt>-<tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pa_cs-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pa_cs-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pa_cs-pos-VERB.html">VERB</a></tt>-<tt><a href="pa_cs-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj	color:blue
1	ਮੈਂ	ਮੈਂ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
2	ਕਦੇ	ਕਦੇ	ADV	_	_	7	advmod	_	_
3	ਕੋਈ	ਕੋਈ	DET	_	PronType=Ind	4	det	_	_
4	ਭੇਡ	ਭੇਡ	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	7	obj	_	_
5	ਨਹੀਂ	ਨਹੀਂ	PART	_	_	7	advmod	_	_
6	ਸੀ	ਸੀ	AUX	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	7	aux	_	_
7	ਵਾਹੀ	ਵਾਹੁਣਾ	VERB	_	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
8	।	।	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nsubj	color:blue
1	ਮੈਨੂੰ	ਮੈਂ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	obl	_	_
2	ਨਹੀਂ	ਨਹੀਂ	PART	_	_	3	advmod	_	_
3	ਚਾਹੀਦਾ	ਚਾਹੁਣਾ	VERB	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	ਅਜਗਰ	ਅਜਗਰ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
5	ਦੇ	ਦੇ	ADP	_	_	4	case	_	_
6	ਅੰਦਰ	ਅੰਦਰ	ADV	_	_	4	advmod	_	_
7	ਹਾਥੀ	ਹਾਥੀ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	3	obj	_	_
8	।	।	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nsubj	color:blue
1	"	"	PUNCT	_	_	2	punct	_	_
2	ਇਹ	ਇਹ	PRON	_	Case=Nom|Number=Sing|PronType=Dem	3	det	_	_
3	ਭੇਡ	ਭੇਡ	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	_
4	ਤਾਂ	ਤਾਂ	ADV	_	_	6	advmod	_	_
5	ਬੁੱਢੀ	ਬੁੱਢੀ	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	6	xcomp	_	_
6	ਹੈ	ਹੈ	AUX	_	Aspect=Imp|Gender=Fem|Number=Sing|Tense=Pres	0	root	_	_
7	।	।	PUNCT	_	_	6	punct	_	_

~~~


