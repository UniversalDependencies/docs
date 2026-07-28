---
layout: base
title:  'Statistics of nmod in UD_Sinhala-Appuwa'
udver: '2'
---

## Treebank Statistics: UD_Sinhala-Appuwa: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="si_appuwa-dep-nmod-poss.html">nmod:poss</a></tt>.

30 nodes (4%) are attached to their parents as `nmod`.

27 instances of `nmod` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 6 pairs of parts of speech are connected with `nmod`: <tt><a href="si_appuwa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_appuwa-pos-NOUN.html">NOUN</a></tt> (21; 70% instances), <tt><a href="si_appuwa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_appuwa-pos-PROPN.html">PROPN</a></tt> (3; 10% instances), <tt><a href="si_appuwa-pos-PROPN.html">PROPN</a></tt>-<tt><a href="si_appuwa-pos-PROPN.html">PROPN</a></tt> (3; 10% instances), <tt><a href="si_appuwa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="si_appuwa-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="si_appuwa-pos-NUM.html">NUM</a></tt>-<tt><a href="si_appuwa-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="si_appuwa-pos-VERB.html">VERB</a></tt>-<tt><a href="si_appuwa-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod	color:blue
1	ඒ	ඒ	PRON	_	Case=Nom|Number=Sing|PronType=Dem	4	nsubj	_	_
2	පළාතේ	පළාත	NOUN	_	Case=Loc|Number=Sing	4	nmod	_	_
3	රටේ	රට	NOUN	_	Case=Loc|Number=Sing	4	nmod	_	_
4	රාළයි	රාළ	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
5	ඒ	ඒ	PROPN	_	Case=Nom|Number=Sing	4	discourse	_	_
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod	color:blue
1	අන්තිමට	අන්තිම	ADV	_	_	6	advmod	_	_
2	කළුන්දෑවේ	කළුන්දෑවේ	PROPN	_	Case=Loc	3	nmod	_	_
3	ගමරාළ	ගමරාළ	NOUN	_	Gender=Masc|Number=Sing	4	nmod:poss	_	_
4	අතට	අත	NOUN	_	Case=Dat|Number=Sing	6	obl	_	_
5	ළමයව	ළමය	NOUN	_	Case=Acc|Number=Sing	6	nsubj	_	_
6	ගියා	යා	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod	color:blue
1	අප්පුවා	අප්පුවා	PROPN	_	Animacy=Hum|Gender=Masc|Number=Sing	8	nsubj	_	_
2	ඉක්මනට	ඉක්මන	ADV	_	_	8	advmod	_	_
3	නැගිටලා	නැගිටිනවා	VERB	_	Aspect=Perf|VerbForm=Part|Voice=Act	8	advcl	_	_
4	සිරිමල්	සිරිමල්	PROPN	_	Animacy=Hum|Number=Sing	5	nmod	_	_
5	එතනාට	එතනා	PROPN	_	Animacy=Hum|Case=Dat|Number=Sing	8	iobj	_	_
6	හීනේ	හීන	NOUN	_	Case=Nom|Definite=Def|Number=Sing	8	obl	_	_
7	ගැන	ගැන	ADP	_	_	6	case	_	_
8	කිව්වා	කියනවා	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


