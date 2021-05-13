---
layout: base
title:  'Statistics of obl:own in UD_Kazakh-KTB'
udver: '2'
---

## Treebank Statistics: UD_Kazakh-KTB: Relations: `obl:own`

This relation is a language-specific subtype of <tt><a href="kk_ktb-dep-obl.html">obl</a></tt>.

7 nodes (0%) are attached to their parents as `obl:own`.

7 instances of `obl:own` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.57142857142857.

The following 3 pairs of parts of speech are connected with `obl:own`: <tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt> (4; 57% instances), <tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (2; 29% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 obl:own	color:blue
1	Сізде	сіз	PRON	prn	Case=Loc|Number=Sing|Person=2|Polite=Form|PronType=Prs	4	obl:own	_	_
2	бос	бос	ADJ	adj	_	3	amod	_	_
3	бөлмелер	бөлме	NOUN	n	Case=Nom|Number=Plur	4	nsubj	_	_
4	бар	бар	ADJ	adj	_	0	root	_	_
5	ма	ма	PART	qst	_	4	discourse	_	_
6	?	?	PUNCT	sent	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl:own	color:blue
1	Қазақта	қазақ	NOUN	n	Case=Loc	3	obl:own	_	_
2	жер	жер	NOUN	n	Case=Nom	3	nsubj	_	_
3	көп	көп	ADJ	adj	_	0	root	_	SpaceAfter=No
4	.	.	PUNCT	sent	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 obl:own	color:blue
1	Менде	мен	PRON	prn	Case=Loc|Number=Sing|Person=1|PronType=Prs	5	obl:own	_	_
2	не	не	DET	det	PronType=Int	3	det	_	_
3	сын	сын	NOUN	n	Case=Nom	4	nsubj	_	_
4	қалды	қал	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	ccomp	_	_
5	дейсің	де	VERB	v	Aspect=Hab|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	?	?	PUNCT	sent	_	5	punct	_	_

~~~


